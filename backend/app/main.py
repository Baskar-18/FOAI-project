import hashlib
import hmac
import json
import os
import secrets
import sqlite3
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any

import httpx
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from pydantic import BaseModel, EmailStr


ROOT = Path(__file__).resolve().parents[1]
DATABASE_PATH = Path(os.getenv("DATABASE_PATH", ROOT / "travel_planner.sqlite3"))
TOKEN_TTL_DAYS = 14
security = HTTPBearer(auto_error=False)

app = FastAPI(title="Personalized Travel Planner API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("CORS_ORIGINS", "http://localhost:5173").split(","),
    allow_credentials=True,
    allow_methods=["GET", "POST", "DELETE"],
    allow_headers=["Authorization", "Content-Type"],
)


class Credentials(BaseModel):
    email: EmailStr
    password: str


class PlanInput(BaseModel):
    title: str
    destination: dict[str, Any]
    preferences: dict[str, Any]
    itinerary: list[dict[str, Any]]
    budget: dict[str, Any]


def connect_db():
    connection = sqlite3.connect(DATABASE_PATH)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    return connection


def initialize_database():
    DATABASE_PATH.parent.mkdir(parents=True, exist_ok=True)
    with connect_db() as db:
        db.executescript(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS sessions (
                token_hash TEXT PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                expires_at TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS plans (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                title TEXT NOT NULL,
                destination_json TEXT NOT NULL,
                preferences_json TEXT NOT NULL,
                itinerary_json TEXT NOT NULL,
                budget_json TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
            """
        )


@app.on_event("startup")
def startup():
    initialize_database()


def hash_password(password: str) -> str:
    if len(password) < 8:
        raise HTTPException(status_code=422, detail="Password must be at least 8 characters")
    salt = secrets.token_bytes(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, 310_000)
    return f"{salt.hex()}:{digest.hex()}"


def verify_password(password: str, stored_hash: str) -> bool:
    salt_hex, expected_hex = stored_hash.split(":", maxsplit=1)
    actual = hashlib.pbkdf2_hmac("sha256", password.encode(), bytes.fromhex(salt_hex), 310_000)
    return hmac.compare_digest(actual.hex(), expected_hex)


def create_session(db: sqlite3.Connection, user_id: int) -> str:
    token = secrets.token_urlsafe(32)
    expires_at = datetime.now(timezone.utc) + timedelta(days=TOKEN_TTL_DAYS)
    db.execute(
        "INSERT INTO sessions(token_hash, user_id, expires_at) VALUES (?, ?, ?)",
        (hashlib.sha256(token.encode()).hexdigest(), user_id, expires_at.isoformat()),
    )
    return token


def current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(security),
):
    if credentials is None:
        raise HTTPException(status_code=401, detail="Sign in to continue")
    token_hash = hashlib.sha256(credentials.credentials.encode()).hexdigest()
    with connect_db() as db:
        row = db.execute(
            """SELECT users.id, users.email, sessions.expires_at
               FROM sessions JOIN users ON users.id = sessions.user_id
               WHERE sessions.token_hash = ?""",
            (token_hash,),
        ).fetchone()
    if row is None or datetime.fromisoformat(row["expires_at"]) <= datetime.now(timezone.utc):
        raise HTTPException(status_code=401, detail="Session expired; sign in again")
    return {"id": row["id"], "email": row["email"]}


@app.get("/api/health")
def health():
    return {"status": "ok", "service": "travel-planner-api"}


@app.post("/api/auth/register")
def register(credentials: Credentials):
    email = str(credentials.email).strip().lower()
    password_hash = hash_password(credentials.password)
    with connect_db() as db:
        try:
            cursor = db.execute(
                "INSERT INTO users(email, password_hash) VALUES (?, ?)",
                (email, password_hash),
            )
        except sqlite3.IntegrityError as error:
            raise HTTPException(status_code=409, detail="An account with this email already exists") from error
        token = create_session(db, cursor.lastrowid)
    return {"access_token": token, "token_type": "bearer", "user": {"email": email}}


@app.post("/api/auth/login")
def login(credentials: Credentials):
    email = str(credentials.email).strip().lower()
    with connect_db() as db:
        user = db.execute("SELECT id, email, password_hash FROM users WHERE email = ?", (email,)).fetchone()
        if user is None or not verify_password(credentials.password, user["password_hash"]):
            raise HTTPException(status_code=401, detail="Email or password is incorrect")
        token = create_session(db, user["id"])
    return {"access_token": token, "token_type": "bearer", "user": {"email": user["email"]}}


@app.get("/api/auth/me")
def get_current_user(user: dict[str, Any] = Depends(current_user)):
    return user


@app.delete("/api/auth/session", status_code=204)
def logout(credentials: HTTPAuthorizationCredentials | None = Depends(security)):
    if credentials is not None:
        token_hash = hashlib.sha256(credentials.credentials.encode()).hexdigest()
        with connect_db() as db:
            db.execute("DELETE FROM sessions WHERE token_hash = ?", (token_hash,))


@app.post("/api/trips/recommend")
def recommend(payload: dict[str, Any]):
    user_input = payload.get("userInput", {})
    destinations = payload.get("destinations", [])
    accommodation = payload.get("accommodationTiers", {})
    transport = payload.get("transportModes", {})
    budget = float(user_input.get("budget", 25000))
    days = int(user_input.get("durationDays", 4))
    travelers = int(user_input.get("travelers", 1))
    interests = set(user_input.get("interests", []))
    stay = accommodation.get(user_input.get("accommodationPref", "budget"), accommodation.get("budget", {}))
    mode = transport.get(user_input.get("transportPref", "train"), transport.get("train", {}))
    estimated_fixed = (
        float(stay.get("avgPricePerNight", 2200)) * days
        + float(mode.get("baseCost", 1400)) * travelers
        + 800 * days * travelers
    )

    ranked = []
    for destination in destinations:
        score = 50
        logs = []
        base_cost = float(destination.get("baseDailyCostPerPerson", 2000)) * days * travelers
        minimum = estimated_fixed + base_cost
        if budget >= minimum * 1.2:
            score += 25
            logs.append({"ruleId": "RULE_01_BUDGET_FEASIBILITY", "type": "PASS", "message": "Budget comfortably covers the estimated trip cost."})
        elif budget >= minimum:
            score += 10
            logs.append({"ruleId": "RULE_01_BUDGET_FEASIBILITY", "type": "WARN", "message": "Budget is close to the estimated trip cost."})
        else:
            score -= 30
            logs.append({"ruleId": "RULE_01_BUDGET_FEASIBILITY", "type": "FAIL", "message": "Estimated trip cost exceeds the available budget."})

        matched = sorted(interests.intersection(destination.get("category", [])))
        if matched:
            score += len(matched) * 20
            logs.append({"ruleId": "RULE_02_INTEREST_TAG_MATCH", "type": "PASS", "message": f"Matched interests: {', '.join(matched)}."})
        else:
            score -= 10
            logs.append({"ruleId": "RULE_02_INTEREST_TAG_MATCH", "type": "WARN", "message": "No selected interests directly match this destination."})

        if destination.get("id") in {"dest_ladakh", "dest_bali"} and days < 4:
            score -= 25
            logs.append({"ruleId": "RULE_03_DURATION_SUITABILITY", "type": "FAIL", "message": "This destination is better suited to trips of at least four days."})
        else:
            score += 10
            logs.append({"ruleId": "RULE_03_DURATION_SUITABILITY", "type": "PASS", "message": f"{days} days is suitable for this destination."})

        if "Beach" in interests and destination.get("hasBeach"):
            score += 15
        if "Adventure" in interests and destination.get("hasMountains"):
            score += 15
        if "Culture" in interests and destination.get("hasHeritage"):
            score += 15
        ranked.append({**destination, "matchScore": score, "matchPercentage": min(max(round(score / 150 * 100), 35), 98), "ruleLogs": logs})
    return sorted(ranked, key=lambda item: item["matchPercentage"], reverse=True)


def calculate_budget(user_input: dict[str, Any], destination: dict[str, Any], activities: list[dict[str, Any]], accommodation: dict[str, Any], transport: dict[str, Any]):
    days = int(user_input.get("durationDays", 3))
    travelers = int(user_input.get("travelers", 1))
    stay = accommodation.get(user_input.get("accommodationPref", "budget"), accommodation.get("budget", {}))
    mode = transport.get(user_input.get("transportPref", "train"), transport.get("train", {}))
    transport_total = float(mode.get("baseCost", 1400)) * travelers
    stay_total = float(stay.get("avgPricePerNight", 2200)) * days
    food_total = 800 * days * travelers
    activity_total = sum(float(item.get("cost", 0)) for item in activities) * travelers
    misc = round((transport_total + stay_total + food_total + activity_total) * 0.08)
    grand_total = transport_total + stay_total + food_total + activity_total + misc
    budget = float(user_input.get("budget", 25000))
    return {"transport": transport_total, "accommodation": stay_total, "food": food_total, "activities": activity_total, "misc": misc, "grandTotal": grand_total, "userBudget": budget, "isOverBudget": grand_total > budget, "diff": grand_total - budget}


@app.post("/api/trips/generate")
def generate_trip(payload: dict[str, Any]):
    user_input = payload.get("userInput", {})
    destination = payload.get("destination", {})
    activities = list(destination.get("activities", []))
    tiers = payload.get("accommodationTiers", {})
    modes = payload.get("transportModes", {})
    logs = []
    budget = calculate_budget(user_input, destination, activities, tiers, modes)
    if budget["isOverBudget"]:
        optional = [item for item in activities if item.get("priority") == 3]
        activities = [item for item in activities if item.get("priority") != 3]
        if optional:
            budget = calculate_budget(user_input, destination, activities, tiers, modes)
            logs.append(f"Removed {len(optional)} optional activity items to reduce the estimated cost.")
        if budget["isOverBudget"]:
            premium = [item for item in activities if item.get("priority") == 2 and float(item.get("cost", 0)) > 1500]
            activities = [item for item in activities if item not in premium]
            if premium:
                budget = calculate_budget(user_input, destination, activities, tiers, modes)
                logs.append(f"Removed {len(premium)} high-cost optional activities to reduce the estimated cost.")
        if budget["isOverBudget"]:
            logs.append("The plan is still above budget; consider changing stay or transport preferences.")
        else:
            logs.append("The optimized plan is now within budget.")
    else:
        logs.append("Estimated trip cost is within budget; all recommended activities are included.")

    optimized_activities = list(activities)
    days_count = int(user_input.get("durationDays", 3))
    slots = ["Morning (09:00 AM - 12:00 PM)", "Afternoon (01:00 PM - 04:00 PM)", "Evening (05:00 PM - 08:00 PM)"]
    itinerary = []
    for day_number in range(1, days_count + 1):
        title = f"Day {day_number}: " + ("Arrival & Orientation" if day_number == 1 else "Highlights & Farewell" if day_number == days_count else "Main Exploration")
        day_slots = []
        if day_number == 1:
            day_slots.append({"timeSlot": slots[0], "title": f"Arrival in {destination.get('name', 'destination')} & Hotel Check-in", "category": "Transport & Rest", "duration": "3 hrs", "cost": 0, "description": "Arrive, check in to accommodation, and allow time to settle in.", "isSystemSlot": True})
        for slot in slots[(1 if day_number == 1 else 0):]:
            if not activities:
                break
            activity = activities.pop(0)
            day_slots.append({"timeSlot": slot, "title": activity.get("name", "Explore local highlights"), "category": activity.get("category", "Sightseeing"), "duration": f"{activity.get('durationHours', 2)} hrs", "cost": activity.get("cost", 0), "description": f"Explore {activity.get('name', 'a local highlight')}.", "isSystemSlot": True})
        itinerary.append({"dayNumber": day_number, "title": title, "slots": day_slots})
    return {"optimizedActivities": optimized_activities, "budgetSummary": budget, "optimizationLogs": logs, "itineraryDays": itinerary}


@app.post("/api/budget/calculate")
def budget_calculation(payload: dict[str, Any]):
    return calculate_budget(payload.get("userInput", {}), payload.get("destination", {}), payload.get("activities", []), payload.get("accommodationTiers", {}), payload.get("transportModes", {}))


@app.get("/api/plans")
def list_plans(user: dict[str, Any] = Depends(current_user)):
    with connect_db() as db:
        rows = db.execute("SELECT * FROM plans WHERE user_id = ? ORDER BY created_at DESC", (user["id"],)).fetchall()
    return [{"id": row["id"], "title": row["title"], "destination": json.loads(row["destination_json"]), "preferences": json.loads(row["preferences_json"]), "itinerary": json.loads(row["itinerary_json"]), "budget": json.loads(row["budget_json"]), "createdAt": row["created_at"]} for row in rows]


@app.post("/api/plans", status_code=201)
def save_plan(plan: PlanInput, user: dict[str, Any] = Depends(current_user)):
    with connect_db() as db:
        cursor = db.execute(
            """INSERT INTO plans(user_id, title, destination_json, preferences_json, itinerary_json, budget_json)
               VALUES (?, ?, ?, ?, ?, ?)""",
            (user["id"], plan.title, json.dumps(plan.destination), json.dumps(plan.preferences), json.dumps(plan.itinerary), json.dumps(plan.budget)),
        )
        plan_id = cursor.lastrowid
    return {"id": plan_id, "title": plan.title}


@app.delete("/api/plans/{plan_id}", status_code=204)
def delete_plan(plan_id: int, user: dict[str, Any] = Depends(current_user)):
    with connect_db() as db:
        result = db.execute("DELETE FROM plans WHERE id = ? AND user_id = ?", (plan_id, user["id"]))
    if result.rowcount == 0:
        raise HTTPException(status_code=404, detail="Saved plan not found")


@app.get("/api/geocode")
async def geocode(query: str):
    async with httpx.AsyncClient(timeout=10, headers={"User-Agent": "FOAI-TravelPlanner/1.0 (local development)"}) as client:
        response = await client.get("https://nominatim.openstreetmap.org/search", params={"q": query, "format": "jsonv2", "limit": 1})
    if response.is_error:
        raise HTTPException(status_code=502, detail="Geocoding service is unavailable")
    results = response.json()
    if not results:
        raise HTTPException(status_code=404, detail="No matching location found")
    place = results[0]
    return {"name": place.get("display_name"), "latitude": float(place["lat"]), "longitude": float(place["lon"])}


@app.get("/api/places")
async def nearby_places(latitude: float, longitude: float, radius: int = 5000):
    query = f"[out:json][timeout:15];(node(around:{radius},{latitude},{longitude})[tourism~\"attraction|museum|viewpoint\"];way(around:{radius},{latitude},{longitude})[tourism~\"attraction|museum|viewpoint\"];);out center tags 30;"
    async with httpx.AsyncClient(timeout=20, headers={"User-Agent": "FOAI-TravelPlanner/1.0 (local development)"}) as client:
        response = await client.post("https://overpass-api.de/api/interpreter", data={"data": query})
    if response.is_error:
        raise HTTPException(status_code=502, detail="OpenStreetMap places service is unavailable")
    places = []
    for item in response.json().get("elements", []):
        tags = item.get("tags", {})
        places.append({"id": item["id"], "name": tags.get("name", "Unnamed attraction"), "category": tags.get("tourism", "attraction"), "latitude": item.get("lat", item.get("center", {}).get("lat")), "longitude": item.get("lon", item.get("center", {}).get("lon"))})
    return {"places": places}


@app.get("/api/capacity")
async def estimate_capacity(latitude: float, longitude: float):
    result = await nearby_places(latitude=latitude, longitude=longitude, radius=5000)
    count = len(result["places"])
    level = "high" if count >= 20 else "moderate" if count >= 8 else "low"
    return {"level": level, "nearbyAttractions": count, "radiusMeters": 5000, "method": "OpenStreetMap attraction density estimate; satellite imagery analysis is not configured."}