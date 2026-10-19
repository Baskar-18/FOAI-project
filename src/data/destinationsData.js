// destinationsData.js - Comprehensive Destination Repository (101 Authentic Destinations)
// Covers all regions of India & global international destinations across diverse budgets, categories, and traveler types.

export const DESTINATIONS = [
  {
    "id": "dest_ooty",
    "name": "Ooty (Nilgiris), Tamil Nadu",
    "country": "India",
    "stateOrRegion": "Tamil Nadu",
    "regionType": "South India (Hills)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Culture",
      "Food"
    ],
    "tags": [
      "Hill Station",
      "Tea Gardens",
      "Toy Train",
      "Colonial Heritage",
      "Cool Climate"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2100,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 5,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Cold & Mountainous",
    "majorAttractions": [
      "Nilgiri Mountain Railway",
      "Doddabetta Peak",
      "Botanical Gardens",
      "Pykara Lake",
      "Tea Museum"
    ],
    "cuisineHighlights": "Nilgiri tea, handmade chocolates, South Indian thali, and varkey cookies",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive",
      "flight"
    ],
    "description": "Queen of Nilgiri Hill Stations, celebrated for lush tea terraces, eucalyptus forests, and the UNESCO heritage toy train.",
    "travelTips": "Book Nilgiri Mountain Railway tickets weeks ahead on IRCTC; light woolens needed year-round.",
    "heroImage": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ooty_1",
        "name": "Nilgiri Mountain Railway Ride",
        "category": "Culture",
        "cost": 250,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Ride the vintage UNESCO steam toy train across mist-veiled viaducts."
      },
      {
        "id": "act_ooty_2",
        "name": "Doddabetta Peak Viewpoint",
        "category": "Nature",
        "cost": 100,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Take in 360-degree vistas from the highest vantage point in the Nilgiris."
      },
      {
        "id": "act_ooty_3",
        "name": "Tea Factory & Chocolate Tasting",
        "category": "Food",
        "cost": 350,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Learn orthodox tea rolling and sample freshly crafted dark chocolates."
      },
      {
        "id": "act_ooty_4",
        "name": "Pykara Lake Boating & Waterfalls",
        "category": "Nature",
        "cost": 400,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Speed boat across pristine lake waters surrounded by pine woods."
      }
    ]
  },
  {
    "id": "dest_kodaikanal",
    "name": "Kodaikanal, Tamil Nadu",
    "country": "India",
    "stateOrRegion": "Tamil Nadu",
    "regionType": "South India (Hills)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tags": [
      "Princess of Hills",
      "Star Lake",
      "Pillar Rocks",
      "Pine Forests",
      "Trekking"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 1950,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 5,
    "bestMonths": [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Cool Mist & Green Valleys",
    "majorAttractions": [
      "Kodai Lake",
      "Pillar Rocks",
      "Coaker's Walk",
      "Pine Forest",
      "Silver Cascade"
    ],
    "cuisineHighlights": "Plum cakes, homemade herbal jams, pepper corn, and hot parotta with salna",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive",
      "train"
    ],
    "description": "The Princess of Hill Stations tucked in the Palani Hills, featuring star-shaped lake cycling, cliff walks, and pine woods.",
    "travelTips": "Rent a bicycle around Kodai Lake early morning before pedestrian crowds gather.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_kodai_1",
        "name": "Kodai Lake Rowing & Cycling",
        "category": "Nature",
        "cost": 300,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Pedal around the 5km star-shaped lake perimeter under foggy morning trees."
      },
      {
        "id": "act_kodai_2",
        "name": "Coaker's Walk & Valley View",
        "category": "Nature",
        "cost": 80,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Stroll along the pedestrian mountain rim gazing over deep plains."
      },
      {
        "id": "act_kodai_3",
        "name": "Pine Forest Photography & Walk",
        "category": "Nature",
        "cost": 50,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Wander towering cinematic pine timber stands carpeted with pine cones."
      },
      {
        "id": "act_kodai_4",
        "name": "Pillar Rocks & Guna Caves Excursion",
        "category": "Adventure",
        "cost": 200,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "View three dramatic 400-foot granite boulders protruding from mist."
      }
    ]
  },
  {
    "id": "dest_rameshwaram",
    "name": "Rameshwaram & Dhanushkodi, Tamil Nadu",
    "country": "India",
    "stateOrRegion": "Tamil Nadu",
    "regionType": "South India (Coastal / Spiritual)",
    "isDomestic": true,
    "category": [
      "Spiritual",
      "Culture",
      "Beach"
    ],
    "tags": [
      "Pamban Bridge",
      "Jyotirlinga",
      "Ghost Town",
      "Ram Setu",
      "Ocean Confluence"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1600,
    "minDays": 2,
    "idealDuration": 2,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Tropical Maritime",
    "majorAttractions": [
      "Ramanathaswamy Temple",
      "Pamban Sea Bridge",
      "Dhanushkodi Ghost Town",
      "APJ Abdul Kalam Memorial",
      "Arichal Munai"
    ],
    "cuisineHighlights": "Chettinad curries, fresh sea fish fries, filter coffee, and coastal temple prasadam",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "Sacred island pilgrimage town connected by the iconic Pamban bridge, leading to the haunting ghost sands of Dhanushkodi.",
    "travelTips": "Visit Dhanushkodi and Arichal Munai by licensed 4x4 or authorized local bus early morning.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ram_1",
        "name": "Ramanathaswamy Temple 22 Wells Holy Bath",
        "category": "Spiritual",
        "cost": 150,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Marvel at the world's longest carved pillared corridors and sacred teerthams."
      },
      {
        "id": "act_ram_2",
        "name": "Dhanushkodi Ghost Town & Ocean Edge",
        "category": "Beach",
        "cost": 500,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Explore the 1964 cyclone ruins and the point where the Bay of Bengal meets the Indian Ocean."
      },
      {
        "id": "act_ram_3",
        "name": "Pamban Rail Bridge Sunset View",
        "category": "Culture",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Watch trains pass over ocean cantilever spans against orange maritime sunsets."
      }
    ]
  },
  {
    "id": "dest_mahabalipuram",
    "name": "Mahabalipuram & Pondicherry, Tamil Nadu",
    "country": "India",
    "stateOrRegion": "Tamil Nadu",
    "regionType": "South India (Coastal Heritage)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Beach",
      "Food"
    ],
    "tags": [
      "Shore Temple",
      "Panch Rathas",
      "French Colony",
      "Surfing",
      "Stone Carvings"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2300,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Breezy Tropical Coast",
    "majorAttractions": [
      "Shore Temple",
      "Arjuna's Penance",
      "Panch Rathas",
      "Promenade Beach",
      "Auroville"
    ],
    "cuisineHighlights": "French croissants, woodfired sourdough pizza, Chettinad crab curry, and cafe crepes",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive",
      "train",
      "flight"
    ],
    "description": "UNESCO 7th-century rock-cut monolithic sculptures paired with French boulevard cafes and surfing breaks on the Coromandel Coast.",
    "travelTips": "Rent a scooter to easily glide between French Quarter Pondicherry and Mahabalipuram heritage monuments.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_maha_1",
        "name": "Shore Temple & Panch Rathas Heritage Tour",
        "category": "Culture",
        "cost": 300,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Admire 7th-century monolithic rock-cut shrines overlooking crashing ocean waves."
      },
      {
        "id": "act_maha_2",
        "name": "Pondicherry French Quarter Cycling",
        "category": "Culture",
        "cost": 450,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Cycle past vibrant yellow villas, bougainvillea gates, and artisan French bakeries."
      },
      {
        "id": "act_maha_3",
        "name": "Auroville Matrimandir Meditation Walk",
        "category": "Spiritual",
        "cost": 100,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Experience universal harmony gardens and golden acoustic dome architecture."
      },
      {
        "id": "act_maha_4",
        "name": "Promenade Beach Sunset Cafe Dinner",
        "category": "Food",
        "cost": 800,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Dine on coastal seafood and Franco-Tamil fusion along the car-free ocean promenade."
      }
    ]
  },
  {
    "id": "dest_munnar",
    "name": "Munnar, Kerala",
    "country": "India",
    "stateOrRegion": "Kerala",
    "regionType": "South India (Western Ghats)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Food"
    ],
    "tags": [
      "Tea Plantations",
      "Anamudi Peak",
      "Waterfalls",
      "Cool Climate",
      "Spice Gardens"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2400,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 5,
    "bestMonths": [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Cool Mountainous Mist",
    "majorAttractions": [
      "Eravikulam National Park",
      "Mattupetty Dam",
      "Top Station",
      "Tea Museum",
      "Attukad Waterfalls"
    ],
    "cuisineHighlights": "Kerala appam with stew, Malabar parotta, cardamom chai, and banana fritters",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive",
      "train",
      "flight"
    ],
    "description": "Endless rolling green tea plantations in the high Western Ghats, home to the endangered Nilgiri Tahr and misty mountain gaps.",
    "travelTips": "Book Eravikulam National Park safari slots online in advance to spot Nilgiri Tahr easily.",
    "heroImage": "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_mun_1",
        "name": "Eravikulam National Park Wildlife Walk",
        "category": "Nature",
        "cost": 250,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Spot the rare Nilgiri Tahr amidst rolling shola grasslands and wild blossoms."
      },
      {
        "id": "act_mun_2",
        "name": "Tea Garden Trek & Processing Tour",
        "category": "Culture",
        "cost": 350,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk through high-altitude tea estates and witness leaf picking and curing."
      },
      {
        "id": "act_mun_3",
        "name": "Mattupetty Dam Speedboating",
        "category": "Adventure",
        "cost": 600,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Cruise through serene dam reservoir waters framed by dark green forest banks."
      },
      {
        "id": "act_mun_4",
        "name": "Traditional Kathakali & Kalaripayattu Show",
        "category": "Culture",
        "cost": 400,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Watch classical theatrical expressions and traditional martial weapons sparring."
      }
    ]
  },
  {
    "id": "dest_alleppey",
    "name": "Alleppey (Alappuzha), Kerala",
    "country": "India",
    "stateOrRegion": "Kerala",
    "regionType": "South India (Backwaters)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Food",
      "Culture"
    ],
    "tags": [
      "Houseboats",
      "Backwaters",
      "Vembanad Lake",
      "Coir Village",
      "Canals"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2900,
    "minDays": 2,
    "idealDuration": 2,
    "maxDays": 4,
    "bestMonths": [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "couple",
      "family",
      "group",
      "solo"
    ],
    "travelPace": "relaxed",
    "climate": "Lush Tropical Backwaters",
    "majorAttractions": [
      "Vembanad Lake",
      "Kettuvallam Houseboats",
      "Alappuzha Beach",
      "Pathiramanal Island",
      "Marari Beach"
    ],
    "cuisineHighlights": "Karimeen pollichathu (pearl spot fish in banana leaf), kappa with fish curry, and tender coconut payasam",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive",
      "flight"
    ],
    "description": "The Venice of the East, famed for traditional thatched kettuvallam houseboats drifting along tranquil palm-fringed lagoons.",
    "travelTips": "Opt for an afternoon-to-evening shikara cruise if on a budget instead of a full 24-hr overnight houseboat.",
    "heroImage": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_all_1",
        "name": "Traditional Houseboat Cruise",
        "category": "Nature",
        "cost": 3500,
        "durationHours": 5,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Glide across quiet backwater channels with freshly cooked onboard Kerala lunch."
      },
      {
        "id": "act_all_2",
        "name": "Canoe Village Narrow Canal Tour",
        "category": "Culture",
        "cost": 600,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Paddle tiny waterways past village ducks, coir workshops, and paddy wetlands."
      },
      {
        "id": "act_all_3",
        "name": "Marari Beach Sunset Stroll",
        "category": "Beach",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Walk pristine white sands lined with coconut palms and fishermen skiffs."
      }
    ]
  },
  {
    "id": "dest_wayanad",
    "name": "Wayanad, Kerala",
    "country": "India",
    "stateOrRegion": "Kerala",
    "regionType": "South India (Rainforest)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Spiritual"
    ],
    "tags": [
      "Treehouses",
      "Edakkal Caves",
      "Chembra Peak",
      "Banasura Dam",
      "Wildlife"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1850,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 5,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Lush Mountain Forest",
    "majorAttractions": [
      "Edakkal Caves",
      "Banasura Sagar Dam",
      "Chembra Peak",
      "Soochipara Falls",
      "Tholpetty Wildlife Sanctuary"
    ],
    "cuisineHighlights": "Wayanad bamboo rice payasam, Malabar mutton biryani, unnakaya, and spicy duck roast",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive",
      "train"
    ],
    "description": "Lush green district packed with prehistoric petroglyphs in Edakkal caves, heart-shaped mountain lakes, and misty spice plantations.",
    "travelTips": "Trek to Edakkal Caves early in the morning before sun heat builds on the stone steps.",
    "heroImage": "https://images.unsplash.com/photo-1609137144822-42e1286c4765?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_way_1",
        "name": "Edakkal Prehistoric Caves Exploration",
        "category": "Culture",
        "cost": 200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Hike stone slopes to view Neolithic cave carvings dating back thousands of years."
      },
      {
        "id": "act_way_2",
        "name": "Banasura Sagar Dam Speedboat & Zipline",
        "category": "Adventure",
        "cost": 700,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Explore Asia's largest earth dam reservoir and soar over islands by zipline."
      },
      {
        "id": "act_way_3",
        "name": "Soochipara 3-Tier Waterfall Trek",
        "category": "Nature",
        "cost": 150,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Hike through evergreen woods and bathe in safe emerald rock pools below the falls."
      }
    ]
  },
  {
    "id": "dest_varkala",
    "name": "Varkala, Kerala",
    "country": "India",
    "stateOrRegion": "Kerala",
    "regionType": "South India (Coastal Cliff)",
    "isDomestic": true,
    "category": [
      "Beach",
      "Spiritual",
      "Food"
    ],
    "tags": [
      "Red Cliffs",
      "Papanasam Beach",
      "Yoga",
      "Surfing",
      "Cliff Cafes"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1750,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 5,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Warm Coastal Breeze",
    "majorAttractions": [
      "North Cliff",
      "Papanasam Beach",
      "Janardhana Swamy Temple",
      "Kappil Beach & Lake",
      "Black Sand Beach"
    ],
    "cuisineHighlights": "Grilled tandoori sea bass, avocado toast, fresh coconut water, and Tibetan momos",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive",
      "flight"
    ],
    "description": "Unique dramatic red laterite cliffs towering directly over the Arabian Sea, packed with bohemian cafes, yoga studios, and surf schools.",
    "travelTips": "Stay on the North Cliff for easy walking access to all sunset cafes, yoga shalas, and steps down to the beach.",
    "heroImage": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_var_1",
        "name": "Morning Ocean Cliff Yoga & Meditation",
        "category": "Spiritual",
        "cost": 400,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Practice sun salutations on open cliff decks overlooking crashing Arabian tides."
      },
      {
        "id": "act_var_2",
        "name": "Varkala Surf School Lessons",
        "category": "Adventure",
        "cost": 1400,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Catch beginner-friendly rolling swell waves with certified local instructors."
      },
      {
        "id": "act_var_3",
        "name": "North Cliff Sunset Dining & Live Sitar",
        "category": "Food",
        "cost": 650,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Savor fresh catch candlelit seafood dinners watching golden sun drop below the horizon."
      }
    ]
  },
  {
    "id": "dest_coorg",
    "name": "Coorg (Kodagu), Karnataka",
    "country": "India",
    "stateOrRegion": "Karnataka",
    "regionType": "South India (Western Ghats)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Food",
      "Culture"
    ],
    "tags": [
      "Coffee Plantations",
      "Abbey Falls",
      "Namdroling Monastery",
      "Raja's Seat",
      "Spice Estate"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2200,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Crisp Hill Climate",
    "majorAttractions": [
      "Abbey Falls",
      "Raja's Seat",
      "Golden Temple Bylakuppe",
      "Dubare Elephant Camp",
      "Tadiandamol Peak"
    ],
    "cuisineHighlights": "Pandi curry (Kodava pepper pork), akki rotti with bamboo shoot curry, and fresh estate filter coffee",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive",
      "train"
    ],
    "description": "The Scotland of India, blanketed in dark green Robusta coffee bushes, pepper vines, and golden Buddhist prayer flags.",
    "travelTips": "Choose a plantation homestay for authentic Kodava hospitality and freshly picked home-brewed morning coffee.",
    "heroImage": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_coorg_1",
        "name": "Coffee & Cardamom Plantation Walk",
        "category": "Nature",
        "cost": 300,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk shaded trails learning Robusta cultivation, curing, and organic spices."
      },
      {
        "id": "act_coorg_2",
        "name": "Bylakuppe Golden Temple Monastery Tour",
        "category": "Spiritual",
        "cost": 100,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Visit the serene Namdroling Monastery adorned with 40-foot gilded Buddha statues."
      },
      {
        "id": "act_coorg_3",
        "name": "Abbey Falls & Hanging Bridge Walk",
        "category": "Nature",
        "cost": 150,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Gaze at roaring torrents cascading between dense coffee estates and spice shrubs."
      },
      {
        "id": "act_coorg_4",
        "name": "Raja's Seat Musical Fountain Sunset",
        "category": "Culture",
        "cost": 80,
        "durationHours": 2,
        "priority": 3,
        "timeSlot": "Evening",
        "description": "Look out over rolling layered valleys where Kodava kings once watched sundowns."
      }
    ]
  },
  {
    "id": "dest_hampi",
    "name": "Hampi, Karnataka",
    "country": "India",
    "stateOrRegion": "Karnataka",
    "regionType": "South India (Heritage / Ruins)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Adventure",
      "Spiritual"
    ],
    "tags": [
      "UNESCO World Heritage",
      "Vijayanagara Empire",
      "Boulder Landscape",
      "Virupaksha",
      "Coracle Boat"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1650,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group",
      "family"
    ],
    "travelPace": "moderate",
    "climate": "Arid Granite Landscape",
    "majorAttractions": [
      "Virupaksha Temple",
      "Vijaya Vittala Stone Chariot",
      "Matanga Hill",
      "Lotus Mahal",
      "Tungabhadra River Coracles"
    ],
    "cuisineHighlights": "North Karnataka jowar rotti thali, badanekayi (brinjal curry), filter coffee, and banana lassi",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "Spectacular open-air museum of the 14th-century Vijayanagara Empire strewn across surreal golden granite boulders.",
    "travelTips": "Climb Matanga Hill before 5:45 AM for an unforgettable sunrise over the ancient stone ruins.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ham_1",
        "name": "Matanga Hill Sunrise Panorama Hike",
        "category": "Adventure",
        "cost": 0,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Climb granite boulder trails to catch sunrise illumination on temple spires."
      },
      {
        "id": "act_ham_2",
        "name": "Vijaya Vittala Stone Chariot & Musical Pillars",
        "category": "Culture",
        "cost": 350,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Marvel at the world-famous iconic stone chariot shrine and resonating pillars."
      },
      {
        "id": "act_ham_3",
        "name": "Tungabhadra River Coracle Boat Float",
        "category": "Nature",
        "cost": 400,
        "durationHours": 1,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Spin gently on ancient round reed boats between river rock sculptures."
      },
      {
        "id": "act_ham_4",
        "name": "Hippie Island Sanapur Lake Cliff Sunset",
        "category": "Nature",
        "cost": 100,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Relax by boulder-lined Sanapur lake waters as twilight settles over ruins."
      }
    ]
  },
  {
    "id": "dest_gokarna",
    "name": "Gokarna, Karnataka",
    "country": "India",
    "stateOrRegion": "Karnataka",
    "regionType": "South India (Coastal / Trekking)",
    "isDomestic": true,
    "category": [
      "Beach",
      "Adventure",
      "Spiritual"
    ],
    "tags": [
      "Om Beach",
      "Kudle Beach",
      "Beach Trek",
      "Mahabaleshwar Temple",
      "Bioluminescence"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1600,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Coastal Warm & Tropical",
    "majorAttractions": [
      "Om Beach",
      "Kudle Beach",
      "Half Moon Beach",
      "Paradise Beach",
      "Mahabaleshwar Temple"
    ],
    "cuisineHighlights": "Nutella banana pancakes, fresh squid fry, Konkani fish thali, and homemade gnocchi at beach shacks",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "Laidback temple town boasting the famous Om-shaped coast, connected by cliff-hugging five-beach hiking trails.",
    "travelTips": "Do the 5-beach trek from Belekan to Kudle Beach early morning before the afternoon sun peaks.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_gok_1",
        "name": "Gokarna 5-Beach Cliffside Trek",
        "category": "Adventure",
        "cost": 100,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Traverse scenic headlands connecting Paradise, Half Moon, Om, and Kudle beaches."
      },
      {
        "id": "act_gok_2",
        "name": "Om Beach Kayaking & Sea Swimming",
        "category": "Beach",
        "cost": 450,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Paddle along the iconic natural double crescent coastline in calm waters."
      },
      {
        "id": "act_gok_3",
        "name": "Kudle Beach Sunset Shack Dining",
        "category": "Food",
        "cost": 500,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Enjoy fresh seafood and international vegetarian comfort food sitting right on sand."
      }
    ]
  },
  {
    "id": "dest_chikmagalur",
    "name": "Chikmagalur, Karnataka",
    "country": "India",
    "stateOrRegion": "Karnataka",
    "regionType": "South India (Coffee Hills)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Food"
    ],
    "tags": [
      "Mullayanagiri Peak",
      "Coffee Estates",
      "Baba Budangiri",
      "Hebbe Falls",
      "Trekking"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2100,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Crisp Green Hill Slopes",
    "majorAttractions": [
      "Mullayanagiri Peak",
      "Baba Budangiri",
      "Hebbe Falls",
      "Z Point Kemmangundi",
      "Bhadra Wildlife Sanctuary"
    ],
    "cuisineHighlights": "Malgudi coffee, akki rotti with kaalu saaru, koli saaru (country chicken curry), and jackfruit chips",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive",
      "train"
    ],
    "description": "The birthplace of coffee in India, crowned by Mullayanagiri, the highest peak in Karnataka, amidst dense misty forests.",
    "travelTips": "Hire a 4x4 jeep to reach Hebbe Falls through rugged muddy jungle tracks.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_chik_1",
        "name": "Mullayanagiri Peak Summit Hike",
        "category": "Adventure",
        "cost": 100,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Ascend Karnataka's highest summit at 1,930m for dramatic sea-of-clouds panoramas."
      },
      {
        "id": "act_chik_2",
        "name": "Hebbe Falls 4x4 Jeep Safari",
        "category": "Nature",
        "cost": 650,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Ride jeeps through wild coffee reserves to reach a roaring two-stage waterfall."
      },
      {
        "id": "act_chik_3",
        "name": "Coffee Roasting & Tasting Session",
        "category": "Food",
        "cost": 250,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Sample Arabica and Peaberry brews and understand altitude's impact on flavor."
      }
    ]
  },
  {
    "id": "dest_north_goa",
    "name": "North Goa (Anjuna & Morjim), Goa",
    "country": "India",
    "stateOrRegion": "Goa",
    "regionType": "West India (Coastal)",
    "isDomestic": true,
    "category": [
      "Beach",
      "Nightlife",
      "Food",
      "Adventure"
    ],
    "tags": [
      "Beach Shacks",
      "Water Sports",
      "Night Markets",
      "Sunset Parties",
      "Fort Chapora"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2700,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 6,
    "bestMonths": [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Tropical Coastal",
    "majorAttractions": [
      "Anjuna Beach",
      "Vagator Beach & Chapora Fort",
      "Morjim Olive Ridley Beach",
      "Calangute Watersports",
      "Saturday Night Market"
    ],
    "cuisineHighlights": "Goan prawn curry with poi bread, pork vindaloo, feni cocktails, and Bebinca layer cake",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight",
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "Vibrant coastal hub famous for sunset electronic music, water sports on Baga/Calangute, Portuguese heritage, and beach flea markets.",
    "travelTips": "Rent a scooter on arrival; explore peaceful Morjim and Ashwem beaches to escape Calangute crowds.",
    "heroImage": "https://images.unsplash.com/photo-1512343800234-840322ee814a?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ngo_1",
        "name": "Calangute & Baga Water Sports Combo",
        "category": "Adventure",
        "cost": 2200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Parasail over turquoise seas and ride high-speed jet skis and banana rafts."
      },
      {
        "id": "act_ngo_2",
        "name": "Chapora Fort Dil Chahta Hai Sunset Walk",
        "category": "Culture",
        "cost": 0,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Climb red ramparts overlooking Vagator bay for iconic sunset photographs."
      },
      {
        "id": "act_ngo_3",
        "name": "Anjuna Beach Shack Seafood Dinner & Music",
        "category": "Nightlife",
        "cost": 1100,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Dine barefoot on butter garlic prawns with ambient acoustic waves and music."
      }
    ]
  },
  {
    "id": "dest_south_goa",
    "name": "South Goa (Palolem & Agonda), Goa",
    "country": "India",
    "stateOrRegion": "Goa",
    "regionType": "West India (Coastal Sanctuary)",
    "isDomestic": true,
    "category": [
      "Beach",
      "Nature",
      "Food",
      "Spiritual"
    ],
    "tags": [
      "Quiet Beaches",
      "Palolem Crescent",
      "Dolphin Kayaking",
      "Cabo de Rama",
      "Silent Noise Party"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2500,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 6,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Peaceful Tropical Coast",
    "majorAttractions": [
      "Palolem Beach",
      "Agonda Beach",
      "Cabo de Rama Fort",
      "Cola Beach Lagoon",
      "Butterfly Beach"
    ],
    "cuisineHighlights": "Goan fish thali, Kingfish recheado, kokum curry, and woodfired sourdough pizza",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight",
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "The tranquil soul of Goa featuring postcard crescent bays, emerald lagoons, sea-kayaking alongside dolphins, and cliffside forts.",
    "travelTips": "Rent a sea kayak at Palolem at 6:30 AM to watch dolphins feeding near Monkey Island.",
    "heroImage": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_sgo_1",
        "name": "Palolem Sunrise Dolphin Kayaking",
        "category": "Adventure",
        "cost": 700,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Paddle into calm morning bay water spotting playful ocean dolphins."
      },
      {
        "id": "act_sgo_2",
        "name": "Cabo de Rama Fort & Cliff Panorama",
        "category": "Culture",
        "cost": 100,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Explore isolated Portuguese fort ruins towering over wild coastal bluffs."
      },
      {
        "id": "act_sgo_3",
        "name": "Cola Beach Freshwater Lagoon Dip",
        "category": "Nature",
        "cost": 200,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Swim in sweet natural emerald waters separated by sandspit from ocean waves."
      }
    ]
  },
  {
    "id": "dest_lonavala",
    "name": "Lonavala & Khandala, Maharashtra",
    "country": "India",
    "stateOrRegion": "Maharashtra",
    "regionType": "West India (Western Ghats)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Food"
    ],
    "tags": [
      "Tiger Point",
      "Bhaja Caves",
      "Chikki",
      "Waterfalls",
      "Fort Treks"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1750,
    "minDays": 2,
    "idealDuration": 2,
    "maxDays": 3,
    "bestMonths": [
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Green Foggy Monsoon Hills",
    "majorAttractions": [
      "Tiger's Leap",
      "Bhaja & Karla Caves",
      "Lohagad Fort",
      "Bhushi Dam",
      "Rajmachi Point"
    ],
    "cuisineHighlights": "Maggi at viewpoints, hot vada pav, Maharashtrian misal pav, and artisan walnut chikki",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "Maharashtra's favorite mountain retreat nestled in the Sahyadris, famous for dramatic valley drops, fort hikes, and mist.",
    "travelTips": "Visit early morning on weekdays to dodge heavy Mumbai-Pune weekend traffic.",
    "heroImage": "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_lon_1",
        "name": "Lohagad Fort Monsoon Hike",
        "category": "Adventure",
        "cost": 50,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Trek ancient stone steps up to Shivaji's fortified citadel perched above cloud banks."
      },
      {
        "id": "act_lon_2",
        "name": "Karla & Bhaja 2nd-Century Buddhist Caves",
        "category": "Culture",
        "cost": 250,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Witness intricate Hinayana Buddhist rock-cut chaitya halls and stone stupas."
      },
      {
        "id": "act_lon_3",
        "name": "Tiger's Leap Sunset & Chikki Tasting",
        "category": "Nature",
        "cost": 150,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Stand on cliff edges with a 650m sheer plunge overlooking western canyons."
      }
    ]
  },
  {
    "id": "dest_mahabaleshwar",
    "name": "Mahabaleshwar & Panchgani, Maharashtra",
    "country": "India",
    "stateOrRegion": "Maharashtra",
    "regionType": "West India (Sahyadri Hills)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Food",
      "Culture"
    ],
    "tags": [
      "Strawberry Farms",
      "Arthur's Seat",
      "Venna Lake",
      "Mapro Garden",
      "Table Land"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2150,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "couple",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Breezy Mountain Plateau",
    "majorAttractions": [
      "Arthur's Seat",
      "Venna Lake",
      "Mapro Garden",
      "Table Land Panchgani",
      "Pratapgad Fort"
    ],
    "cuisineHighlights": "Fresh strawberries with whipped cream, hot corn patties, Mapro pizzas, and Parsi delicacies",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive",
      "train"
    ],
    "description": "The strawberry capital of India perched on elevated Sahyadri plateaus, crowned by deep canyon vistas and historic Maratha forts.",
    "travelTips": "December to February is peak strawberry harvesting season where you can pick your own berries.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_mah_1",
        "name": "Pratapgad Fort Historical Expedition",
        "category": "Culture",
        "cost": 200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Climb the legendary stronghold where Chhatrapati Shivaji defeated Afzal Khan."
      },
      {
        "id": "act_mah_2",
        "name": "Mapro Garden & Strawberry Plucking Tour",
        "category": "Food",
        "cost": 350,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Taste fresh berry ice creams, fruit crumbles, and fresh strawberry smoothies."
      },
      {
        "id": "act_mah_3",
        "name": "Arthur's Seat Point Valley Panorama",
        "category": "Nature",
        "cost": 100,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Gaze over the deep Savitri river basin termed the Queen of all points."
      },
      {
        "id": "act_mah_4",
        "name": "Venna Lake Paddle Boating & Horse Riding",
        "category": "Nature",
        "cost": 350,
        "durationHours": 2,
        "priority": 3,
        "timeSlot": "Evening",
        "description": "Pedal across mountain lake waters amidst eucalyptus groves."
      }
    ]
  },
  {
    "id": "dest_tadoba",
    "name": "Tadoba-Andhari Tiger Reserve, Maharashtra",
    "country": "India",
    "stateOrRegion": "Maharashtra",
    "regionType": "Central India (Wildlife)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure"
    ],
    "tags": [
      "Tiger Safari",
      "Jungle Safari",
      "Leopards",
      "Bird Watching",
      "Open Jeeps"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 3200,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Dry Deciduous Teak Jungle",
    "majorAttractions": [
      "Tadoba Core Zone",
      "Moharli Gate",
      "Erai Dam",
      "Telia Lake",
      "Kolsa Range"
    ],
    "cuisineHighlights": "Spicy Saoji chicken/mutton curry, jowar bhakri, tarri poha, and forest wild honey",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive",
      "flight"
    ],
    "description": "One of India's top tiger sanctuaries, celebrated for frequent open-jeep Bengal tiger sightings among dry teak bamboo forests.",
    "travelTips": "Book core-zone safari permits 90–120 days ahead on the official Maharashtra forest portal.",
    "heroImage": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_tad_1",
        "name": "Early Morning Open-Jeep Core Tiger Safari",
        "category": "Adventure",
        "cost": 2800,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Track Royal Bengal Tigers, leopards, and sloth bears across forest fire tracks."
      },
      {
        "id": "act_tad_2",
        "name": "Telia Lake Wetland Bird Watching",
        "category": "Nature",
        "cost": 300,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Spot marsh crocodiles, crested serpent eagles, and migratory wild ducks."
      },
      {
        "id": "act_tad_3",
        "name": "Night Buffer Zone Safari",
        "category": "Adventure",
        "cost": 2200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Search for nocturnal civets, leopard cats, and owls using special red light beams."
      }
    ]
  },
  {
    "id": "dest_rann_of_kutch",
    "name": "Rann of Kutch & Bhuj, Gujarat",
    "country": "India",
    "stateOrRegion": "Gujarat",
    "regionType": "West India (White Salt Desert)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Nature",
      "Shopping",
      "Food"
    ],
    "tags": [
      "White Desert",
      "Rann Utsav",
      "Artisan Crafts",
      "Kala Dungar",
      "Full Moon"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2800,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 5,
    "bestMonths": [
      "Nov",
      "Dec",
      "Jan",
      "Feb"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Crisp Desert Nights & Warm Days",
    "majorAttractions": [
      "White Rann of Kutch",
      "Kala Dungar (Black Hill)",
      "Hodka & Nirona Artisan Villages",
      "Aina Mahal Bhuj",
      "Mandvi Beach"
    ],
    "cuisineHighlights": "Kutchi dabeli, khichdi kadhi, sweet mawa, ringna no oro (smoky eggplant), and fafda jalebi",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "The world's largest salt desert shimmering under starry skies, brought alive by the vibrant cultural folklore of the Rann Utsav.",
    "travelTips": "Plan your trip during the full moon cycle when the white salt desert glows silver under moonlight.",
    "heroImage": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_kut_1",
        "name": "Full Moon White Salt Desert Walk",
        "category": "Nature",
        "cost": 350,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Walk barefoot on sparkling white crystal crust glowing magically under moonbeams."
      },
      {
        "id": "act_kut_2",
        "name": "Nirona Rogan Art & Copper Bell Artisan Tour",
        "category": "Culture",
        "cost": 200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Watch rare castor-oil Rogan painting and hand-tuned copper bells crafted by master artisans."
      },
      {
        "id": "act_kut_3",
        "name": "Kala Dungar Sunset & Dattatreya Temple",
        "category": "Nature",
        "cost": 150,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Gaze over the panoramic horizon where salt flats blend into the sky."
      }
    ]
  },
  {
    "id": "dest_jaipur",
    "name": "Jaipur, Rajasthan",
    "country": "India",
    "stateOrRegion": "Rajasthan",
    "regionType": "North India (Royal Heritage)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Shopping",
      "Food",
      "Spiritual"
    ],
    "tags": [
      "Pink City",
      "Amer Fort",
      "Hawa Mahal",
      "Bazaars",
      "Royal Palaces"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1900,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Dry Desert Warmth",
    "majorAttractions": [
      "Amer Fort",
      "Hawa Mahal",
      "City Palace",
      "Jantar Mantar",
      "Nahargarh Fort"
    ],
    "cuisineHighlights": "Dal baati churma, pyaaz kachori, ghevar, laal maas, and authentic lassi",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "The royal Pink City, celebrated for hilltop amber citadels, intricate honeycomb palaces, and lively gemstone bazaars.",
    "travelTips": "Purchase the composite entry ticket for Jaipur monuments to skip multiple lines.",
    "heroImage": "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_jai_1",
        "name": "Amer Fort Guided Citadel Exploration",
        "category": "Culture",
        "cost": 500,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk through Sheesh Mahal mirror palaces and Rajput royal courtyards."
      },
      {
        "id": "act_jai_2",
        "name": "Hawa Mahal & City Palace Historic Walk",
        "category": "Culture",
        "cost": 450,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Admire 953 honeycomb jharokha windows built for royal women."
      },
      {
        "id": "act_jai_3",
        "name": "Nahargarh Fort Sunset Viewpoint",
        "category": "Nature",
        "cost": 200,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Look out across Jaipur illuminated beneath starry evening desert skies."
      },
      {
        "id": "act_jai_4",
        "name": "Johari & Bapu Bazaar Artisan Shopping",
        "category": "Shopping",
        "cost": 500,
        "durationHours": 2,
        "priority": 3,
        "timeSlot": "Evening",
        "description": "Shop block-printed quilts, blue pottery, and handcrafted silver jewellery."
      }
    ]
  },
  {
    "id": "dest_udaipur",
    "name": "Udaipur, Rajasthan",
    "country": "India",
    "stateOrRegion": "Rajasthan",
    "regionType": "North India (Royal Lakes)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Food",
      "Shopping"
    ],
    "tags": [
      "City of Lakes",
      "Lake Pichola",
      "City Palace",
      "Romantic",
      "Heritage Haveli"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2400,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "couple",
      "solo",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Gentle Lake Breeze",
    "majorAttractions": [
      "City Palace",
      "Lake Pichola",
      "Jag Mandir",
      "Saheliyon Ki Bari",
      "Bagore Ki Haveli"
    ],
    "cuisineHighlights": "Gatte ki sabzi, ker sangri, dal baati, and rooftop candlelit Mewari curries",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "The Venice of the East, famed for white marble palaces rising above serene lakes, romantic rooftop dining, and Mewar art.",
    "travelTips": "Book a sunset boat ride on Lake Pichola for magical views of Jag Mandir and the illuminated City Palace.",
    "heroImage": "https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_uda_1",
        "name": "City Palace Museum & Courtyards",
        "category": "Culture",
        "cost": 450,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Tour Rajasthan's largest royal palace complex overlooking Lake Pichola."
      },
      {
        "id": "act_uda_2",
        "name": "Lake Pichola Sunset Boat Cruise",
        "category": "Culture",
        "cost": 850,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Cruise past Jag Mandir island palace as golden hour reflects across the water."
      },
      {
        "id": "act_uda_3",
        "name": "Bagore Ki Haveli Dharohar Folk Dance",
        "category": "Culture",
        "cost": 200,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Enjoy authentic Rajasthani puppet masters and fire-pot balancing dancers."
      }
    ]
  },
  {
    "id": "dest_jodhpur",
    "name": "Jodhpur, Rajasthan",
    "country": "India",
    "stateOrRegion": "Rajasthan",
    "regionType": "North India (Blue City)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Food",
      "Adventure"
    ],
    "tags": [
      "Blue City",
      "Mehrangarh Fort",
      "Zipline",
      "Jaswant Thada",
      "Clock Tower"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1800,
    "minDays": 2,
    "idealDuration": 2,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Dry Desert Sun",
    "majorAttractions": [
      "Mehrangarh Fort",
      "Jaswant Thada",
      "Umaid Bhawan Palace",
      "Clock Tower & Sardar Market",
      "Toorji Ka Jhalra Stepwell"
    ],
    "cuisineHighlights": "Makhaniya lassi, mawa kachori, Mirchi vada, and traditional Rajasthani thalis",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "The Blue City watched over by the mighty cliffside Mehrangarh Fort, with azure alleyways and centuries-old stepwells.",
    "travelTips": "Try the Flying Fox zipline over Mehrangarh Fort moats for thrilling aerial views.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_jod_1",
        "name": "Mehrangarh Fort Audio Guided Tour",
        "category": "Culture",
        "cost": 300,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Ascend one of India's most imposing stone citadels built 400 feet above the city."
      },
      {
        "id": "act_jod_2",
        "name": "Flying Fox Zipline Across Fort Moats",
        "category": "Adventure",
        "cost": 1800,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Glide across six aerial ziplines over desert ridges and fort battlements."
      },
      {
        "id": "act_jod_3",
        "name": "Blue City Walking Tour & Stepwell Dip",
        "category": "Culture",
        "cost": 100,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Navigate indigo-painted maze lanes and admire restored 1740s stepwells."
      }
    ]
  },
  {
    "id": "dest_jaisalmer",
    "name": "Jaisalmer & Sam Sand Dunes, Rajasthan",
    "country": "India",
    "stateOrRegion": "Rajasthan",
    "regionType": "North India (Thar Desert)",
    "isDomestic": true,
    "category": [
      "Adventure",
      "Culture",
      "Nightlife"
    ],
    "tags": [
      "Golden Fort",
      "Sam Sand Dunes",
      "Camel Safari",
      "Desert Camping",
      "Stargazing"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2300,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group",
      "family"
    ],
    "travelPace": "moderate",
    "climate": "Pure Golden Desert",
    "majorAttractions": [
      "Jaisalmer Living Fort",
      "Sam Sand Dunes",
      "Patwon Ki Haveli",
      "Gadisar Lake",
      "Kuldhara Abandoned Village"
    ],
    "cuisineHighlights": "Ker sangri, bajra roti with white butter, laal maas, and ghotua ladoo",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive",
      "flight"
    ],
    "description": "The Golden City of the Thar Desert, boasting the world's only inhabited living golden-stone fort and rolling desert dunes.",
    "travelTips": "Stay overnight in a desert camp in Sam or Khuri dunes for bonfire folk music under brilliant star fields.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_jai_d1",
        "name": "Sonar Qila Living Fort Architecture Walk",
        "category": "Culture",
        "cost": 200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Explore the golden sandstone citadel where thousands of locals still reside."
      },
      {
        "id": "act_jai_d2",
        "name": "Sam Sand Dunes Camel & Jeep Safari",
        "category": "Adventure",
        "cost": 1200,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Bask in golden sunset dunes on camelback followed by 4x4 dune bashing."
      },
      {
        "id": "act_jai_d3",
        "name": "Desert Camp Kalbelia Folk Music Night",
        "category": "Nightlife",
        "cost": 800,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Enjoy energetic gypsy dances, dhol rhythms, and buffet dinner under the desert sky."
      }
    ]
  },
  {
    "id": "dest_ranthambore",
    "name": "Ranthambore National Park, Rajasthan",
    "country": "India",
    "stateOrRegion": "Rajasthan",
    "regionType": "North India (Wildlife Heritage)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tags": [
      "Tiger Safari",
      "Historic Fort",
      "Padam Talao",
      "Crocodiles",
      "Deciduous Jungle"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 3100,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Dry Forest & Ancient Ruins",
    "majorAttractions": [
      "Ranthambore Safari Zones 1-5",
      "Ranthambore Fort",
      "Padam Talao",
      "Trinetra Ganesha Temple",
      "Kachida Valley"
    ],
    "cuisineHighlights": "Rajasthani thalis, jungle camp barbecues, kachori snacks, and masala chai",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "Famous tiger park where Bengal tigers roam among the atmospheric ruins of 10th-century ramparts and lotus-covered lakes.",
    "travelTips": "Zones 1 to 5 offer the highest historic tiger sighting probabilities; book canter/gypsy slots early.",
    "heroImage": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ran_1",
        "name": "Morning Open Gypsy Tiger Safari",
        "category": "Adventure",
        "cost": 2400,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Spot predators prowling past banyan trees, lake beds, and ruined pavilions."
      },
      {
        "id": "act_ran_2",
        "name": "Ranthambore Fort Trek & Ganesha Temple",
        "category": "Culture",
        "cost": 100,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Climb the massive UNESCO hill fort for eagle-eye views of tiger lakes."
      },
      {
        "id": "act_ran_3",
        "name": "Evening Zone Safari at Padam Talao",
        "category": "Nature",
        "cost": 1800,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Watch sambar deer alarm calls and mugger crocodiles sunning along shores."
      }
    ]
  },
  {
    "id": "dest_manali",
    "name": "Manali, Himachal Pradesh",
    "country": "India",
    "stateOrRegion": "Himachal Pradesh",
    "regionType": "North India (Himalayas)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tags": [
      "Snow Peaks",
      "Solang Valley",
      "Paragliding",
      "Old Manali Cafes",
      "Pine Forests"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2200,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 6,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group",
      "family"
    ],
    "travelPace": "moderate",
    "climate": "Alpine Snow & Cedar Forest",
    "majorAttractions": [
      "Solang Valley",
      "Hadimba Temple",
      "Rohtang Pass / Atal Tunnel",
      "Jogini Waterfall",
      "Old Manali"
    ],
    "cuisineHighlights": "Siddu with ghee, trout fish fry, Tibetan thukpa, woodfired pizza, and apple cider",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive",
      "flight"
    ],
    "description": "Nestled in the Pir Panjal range, offering high-altitude Solang Valley adventure sports, ancient deodar groves, and bohemian cafes.",
    "travelTips": "Explore Old Manali across the river for quiet wooden cafes and live music vibes away from Mall Road.",
    "heroImage": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_man_1",
        "name": "Paragliding & Zorbing in Solang Valley",
        "category": "Adventure",
        "cost": 2500,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Soar over green alpine valleys with views of snow-capped Himalayan ridges."
      },
      {
        "id": "act_man_2",
        "name": "Hadimba Temple & Cedar Grove Walk",
        "category": "Culture",
        "cost": 100,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Morning",
        "description": "Visit the 1553 pagoda-style wooden temple dedicated to Hadimba Devi."
      },
      {
        "id": "act_man_3",
        "name": "Jogini Waterfall Forest Hike",
        "category": "Nature",
        "cost": 200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Hike through apple orchards and pine woods to a roaring mountain cascade."
      },
      {
        "id": "act_man_4",
        "name": "Old Manali Cafe Hopping & Live Music",
        "category": "Food",
        "cost": 800,
        "durationHours": 3,
        "priority": 3,
        "timeSlot": "Evening",
        "description": "Relax with artisan coffee, woodfired pizzas, and live acoustic guitars."
      }
    ]
  },
  {
    "id": "dest_shimla",
    "name": "Shimla & Kufri, Himachal Pradesh",
    "country": "India",
    "stateOrRegion": "Himachal Pradesh",
    "regionType": "North India (Colonial Hills)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Nature",
      "Shopping"
    ],
    "tags": [
      "Mall Road",
      "Toy Train",
      "Ridge",
      "British Heritage",
      "Snow Sports"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2100,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "group",
      "solo"
    ],
    "travelPace": "relaxed",
    "climate": "Alpine British Colonial",
    "majorAttractions": [
      "The Ridge",
      "Jakhoo Temple & Ropeway",
      "Kalka-Shimla Toy Train",
      "Kufri Snow Point",
      "Viceregal Lodge"
    ],
    "cuisineHighlights": "Chana madra, babru, hot gulab jamun on Mall road, and momos with fiery red chutney",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive",
      "flight"
    ],
    "description": "The summer capital of British India, celebrated for neo-Gothic architecture, pedestrian Mall Road ridges, and cedar mountains.",
    "travelTips": "Take the Kalka-Shimla UNESCO toy train for one leg of your journey to experience 102 historic tunnels.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_shi_1",
        "name": "Viceregal Lodge Colonial Heritage Tour",
        "category": "Culture",
        "cost": 250,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk through teak-paneled halls where historic partition accords were negotiated."
      },
      {
        "id": "act_shi_2",
        "name": "Jakhoo Ropeway & Giant Hanuman Statue",
        "category": "Spiritual",
        "cost": 500,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Ascend by cable car to Shimla's highest peak surrounded by alpine monkeys."
      },
      {
        "id": "act_shi_3",
        "name": "Evening Ridge Stroll & Christ Church",
        "category": "Culture",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Stroll along the historic vehicle-free promenade taking in sunset mountain vistas."
      }
    ]
  },
  {
    "id": "dest_dharamshala",
    "name": "Dharamshala & McLeodGanj, Himachal Pradesh",
    "country": "India",
    "stateOrRegion": "Himachal Pradesh",
    "regionType": "North India (Tibetan Highlands)",
    "isDomestic": true,
    "category": [
      "Spiritual",
      "Culture",
      "Adventure",
      "Nature"
    ],
    "tags": [
      "Dalai Lama",
      "Triund Trek",
      "Tibetan Monasteries",
      "Cricket Stadium",
      "Meditation"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1650,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 5,
    "bestMonths": [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Dhauladhar Snow Backdrop",
    "majorAttractions": [
      "Tsuglagkhang Complex (Dalai Lama Temple)",
      "Triund Trek",
      "Bhagsunag Waterfall",
      "HPCA Stadium",
      "Norbulingka Institute"
    ],
    "cuisineHighlights": "Tingmo bread with spicy shapta, Tibetan butter tea, thenthuk noodle soup, and Bhagsu cake",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive",
      "train",
      "flight"
    ],
    "description": "Little Lhasa in the Himalayas, residence of His Holiness the Dalai Lama, backed by the dramatic snow wall of the Dhauladhars.",
    "travelTips": "The day hike to Triund provides one of the easiest access points to high-altitude Himalayan snowlines.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_dha_1",
        "name": "Tsuglagkhang Dalai Lama Temple Visit",
        "category": "Spiritual",
        "cost": 50,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Spin prayer wheels and meditate inside the serene spiritual hub of Tibetan Buddhism."
      },
      {
        "id": "act_dha_2",
        "name": "Triund Ridge Day Hike",
        "category": "Adventure",
        "cost": 800,
        "durationHours": 6,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Trek up through rhododendron forests to an open ridge directly beneath Dhauladhar peaks."
      },
      {
        "id": "act_dha_3",
        "name": "Norbulingka Tibetan Cultural Centre",
        "category": "Culture",
        "cost": 150,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Witness master woodcarvers and thangka silk painters preserving heritage arts."
      }
    ]
  },
  {
    "id": "dest_spiti_valley",
    "name": "Spiti Valley, Himachal Pradesh",
    "country": "India",
    "stateOrRegion": "Himachal Pradesh",
    "regionType": "North India (Trans-Himalayan Desert)",
    "isDomestic": true,
    "category": [
      "Adventure",
      "Nature",
      "Spiritual"
    ],
    "tags": [
      "Key Monastery",
      "High Passes",
      "Chandratal Lake",
      "Fossil Villages",
      "Stargazing"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2600,
    "minDays": 5,
    "idealDuration": 7,
    "maxDays": 10,
    "bestMonths": [
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Cold High-Altitude Desert",
    "majorAttractions": [
      "Key Monastery",
      "Chandratal Moon Lake",
      "Hikkim Post Office",
      "Komic Highest Village",
      "Dhankar Monastery"
    ],
    "cuisineHighlights": "Sea buckthorn tea, Spiti barley porridge (tsampa), steamed mutton momos, and yak cheese",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "selfdrive",
      "bus"
    ],
    "description": "The Middle Land between Tibet and India—a stark high-altitude desert of thousand-year-old cliffside monasteries and moon lakes.",
    "travelTips": "Acclimatize in Kaza for 24 hours before ascending to high-altitude passes like Kunzum La.",
    "heroImage": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_spi_1",
        "name": "Key Monastery Morning Chanting",
        "category": "Spiritual",
        "cost": 100,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Join monks in prayer inside a fortress-like 11th-century monastic citadel."
      },
      {
        "id": "act_spi_2",
        "name": "Chandratal Moon Lake Camping & Stars",
        "category": "Nature",
        "cost": 2200,
        "durationHours": 8,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Camp near the crescent azure lake reflecting unpolluted Milky Way galaxies."
      },
      {
        "id": "act_spi_3",
        "name": "Send Postcards from Hikkim (World's Highest Post Office)",
        "category": "Culture",
        "cost": 150,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Mail handwritten postcards stamped at 4,400 meters altitude."
      }
    ]
  },
  {
    "id": "dest_kasol",
    "name": "Kasol & Parvati Valley, Himachal Pradesh",
    "country": "India",
    "stateOrRegion": "Himachal Pradesh",
    "regionType": "North India (Parvati Valley)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Food"
    ],
    "tags": [
      "Kheerganga Trek",
      "Hot Springs",
      "Parvati River",
      "Israeli Cafes",
      "Backpacking"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1500,
    "minDays": 2,
    "idealDuration": 4,
    "maxDays": 6,
    "bestMonths": [
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Sep",
      "Oct",
      "Nov"
    ],
    "suitableTravelers": [
      "solo",
      "group",
      "couple"
    ],
    "travelPace": "relaxed",
    "climate": "Riverside Conifer Forest",
    "majorAttractions": [
      "Kheerganga Hot Springs",
      "Chalal Village",
      "Tosh",
      "Manikaran Sahib Gurudwara",
      "Malana View"
    ],
    "cuisineHighlights": "Israeli shakshuka, falafel platters, river trout fry, and apple crumbles",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "bus",
      "selfdrive"
    ],
    "description": "Backpacker haven on the roaring Parvati River, renowned for mountain treks, sacred hot springs, and pine-scented cafes.",
    "travelTips": "Carry adequate cash as ATMs in Kasol and Tosh frequently run out of bills or lack electricity.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_kas_1",
        "name": "Kheerganga Trek & Natural Sulfur Bath",
        "category": "Adventure",
        "cost": 600,
        "durationHours": 6,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Hike through mist cascades and soak in steaming mountain spring pools."
      },
      {
        "id": "act_kas_2",
        "name": "Manikaran Sahib Gurudwara Langar & Springs",
        "category": "Spiritual",
        "cost": 50,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Partake in warm community kitchen meals cooked in natural geothermal spring pots."
      },
      {
        "id": "act_kas_3",
        "name": "Chalal Riverside Forest Stroll & Cafes",
        "category": "Nature",
        "cost": 350,
        "durationHours": 3,
        "priority": 3,
        "timeSlot": "Evening",
        "description": "Walk wooden rope bridges across roaring rapids to chillout pine cafes."
      }
    ]
  },
  {
    "id": "dest_rishikesh",
    "name": "Rishikesh & Haridwar, Uttarakhand",
    "country": "India",
    "stateOrRegion": "Uttarakhand",
    "regionType": "North India (Foothills)",
    "isDomestic": true,
    "category": [
      "Spiritual",
      "Adventure",
      "Nature"
    ],
    "tags": [
      "Yoga Capital",
      "White Water Rafting",
      "Ganga Aarti",
      "Bungee Jumping",
      "Beatles Ashram"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1700,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 5,
    "bestMonths": [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group",
      "family"
    ],
    "travelPace": "moderate",
    "climate": "Himalayan River Gateway",
    "majorAttractions": [
      "Triveni Ghat",
      "Lakshman Jhula",
      "Beatles Ashram",
      "Shivpuri Rafting",
      "Neer Garh Waterfall"
    ],
    "cuisineHighlights": "Chotiwala thalis, Ayurvedic herbal teas, woodfired Neapolitan pizzas, and Haridwar kachoris",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive",
      "flight"
    ],
    "description": "The Yoga Capital of the World where the emerald Ganges tumbles into plains, uniting spiritual aartis with high-voltage rafting.",
    "travelTips": "Rafting operates best from September to mid-June; strictly prohibited during monsoons.",
    "heroImage": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_rish_1",
        "name": "16km Ganga White-Water Rafting Adventure",
        "category": "Adventure",
        "cost": 1100,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Conquer Grade III and IV rapids like Roller Coaster and Golf Course."
      },
      {
        "id": "act_rish_2",
        "name": "Triveni Ghat Evening Maha Ganga Aarti",
        "category": "Spiritual",
        "cost": 100,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Witness thousands of floating oil lamps, Vedic chants, and conch shells."
      },
      {
        "id": "act_rish_3",
        "name": "Beatles Ashram Graffiti & Meditation",
        "category": "Culture",
        "cost": 250,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Walk through abandoned meditation domes where the Beatles composed the White Album."
      }
    ]
  },
  {
    "id": "dest_nainital",
    "name": "Nainital & Jim Corbett, Uttarakhand",
    "country": "India",
    "stateOrRegion": "Uttarakhand",
    "regionType": "North India (Kumaon Hills)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Family"
    ],
    "tags": [
      "Naini Lake",
      "Boating",
      "Tiger Safari",
      "Corbett Jungle",
      "Cable Car"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2350,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 5,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "group",
      "solo"
    ],
    "travelPace": "relaxed",
    "climate": "Pleasant Hill Lake",
    "majorAttractions": [
      "Naini Lake",
      "Naina Devi Temple",
      "Snow View Point",
      "Jim Corbett National Park (Dhikala/Bijrani)",
      "Bhimtal"
    ],
    "cuisineHighlights": "Bhatt ki churkani, aloo ke gutke with cucumber raita, Bal mithai, and warm momos",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "Charming eye-shaped emerald lake bordered by seven hills, seamlessly combinable with wild Bengal tiger safaris in nearby Jim Corbett.",
    "travelTips": "Book Jim Corbett safari permits 45 days in advance via the Uttarakhand Forest online portal.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_nai_1",
        "name": "Naini Lake Yachting & Paddle Boating",
        "category": "Nature",
        "cost": 350,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Sail colorful heritage wooden boats across mountain-fringed calm waters."
      },
      {
        "id": "act_nai_2",
        "name": "Jim Corbett Open Jeep Wildlife Safari",
        "category": "Adventure",
        "cost": 2600,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Track wild elephants, deer herds, and Bengal tigers across grasslands."
      },
      {
        "id": "act_nai_3",
        "name": "Snow View Aerial Ropeway",
        "category": "Nature",
        "cost": 300,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Ride cable cars for direct views of snow giants Nanda Devi and Trishul."
      }
    ]
  },
  {
    "id": "dest_auli",
    "name": "Auli & Chopta, Uttarakhand",
    "country": "India",
    "stateOrRegion": "Uttarakhand",
    "regionType": "North India (Garhwal Ski Slopes)",
    "isDomestic": true,
    "category": [
      "Adventure",
      "Nature",
      "Spiritual"
    ],
    "tags": [
      "Ski Resort",
      "Tungnath Temple",
      "Nanda Devi View",
      "Chandrashila Trek",
      "Cable Car"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2500,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 6,
    "bestMonths": [
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Oct",
      "Nov"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Sub-Zero Snow / Alpine Meadows",
    "majorAttractions": [
      "Auli Ski Slopes",
      "Joshimath Cable Car",
      "Tungnath (Highest Shiva Temple)",
      "Chandrashila Summit",
      "Gorson Bugyal"
    ],
    "cuisineHighlights": "Garhwali kafuli, chainsoo, hot jalebis, and steaming pahadi dal with ghee",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive"
    ],
    "description": "India's premier ski resort flanked by 180-degree panoramas of Nanda Devi, near Chopta—the mini-Switzerland of India.",
    "travelTips": "January and February offer the deepest snowfall for skiing lessons and winter alpine adventures.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_aul_1",
        "name": "Auli Professional Skiing Session",
        "category": "Adventure",
        "cost": 1600,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Glide powdery winter slopes assisted by certified mountaineering instructors."
      },
      {
        "id": "act_aul_2",
        "name": "Chandrashila & Tungnath Summit Trek",
        "category": "Adventure",
        "cost": 700,
        "durationHours": 6,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Trek to the highest Shiva shrine in the world at 3,680m with dramatic 360° vistas."
      },
      {
        "id": "act_aul_3",
        "name": "Joshimath to Auli 4km Gondola Ride",
        "category": "Nature",
        "cost": 1000,
        "durationHours": 1,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Soar above oak forests on one of Asia's longest ropeways."
      }
    ]
  },
  {
    "id": "dest_varanasi",
    "name": "Varanasi, Uttar Pradesh",
    "country": "India",
    "stateOrRegion": "Uttar Pradesh",
    "regionType": "North India (Holy Ganges)",
    "isDomestic": true,
    "category": [
      "Spiritual",
      "Culture",
      "Food"
    ],
    "tags": [
      "Ghats",
      "Kashi Vishwanath",
      "Subah-e-Banaras",
      "Silk Sarees",
      "Ancient City"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1500,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Spiritual Riverbank Atmosphere",
    "majorAttractions": [
      "Dashashwamedh Ghat",
      "Kashi Vishwanath Corridor",
      "Assi Ghat",
      "Manikarnika Ghat",
      "Sarnath"
    ],
    "cuisineHighlights": "Kachori sabzi, malaiyo milk froth, Banarasi paan, tamatar chaat, and thick lassi in kulhad",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "One of the oldest continuously inhabited cities on earth, where life, death, and devotion merge along holy Ganga ghats.",
    "travelTips": "Take a sunrise rowing boat ride from Assi to Dashashwamedh Ghat to witness morning prayers peacefully.",
    "heroImage": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_var_1",
        "name": "Sunrise Ganges Rowing Boat & Ghat Walk",
        "category": "Spiritual",
        "cost": 400,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Watch morning bath rituals, yogis, and temple bells from quiet river waters."
      },
      {
        "id": "act_var_2",
        "name": "Kashi Vishwanath Corridor Pilgrimage",
        "category": "Spiritual",
        "cost": 100,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Visit the revered golden jyotirlinga temple connecting directly to the river."
      },
      {
        "id": "act_var_3",
        "name": "Dashashwamedh Evening Ganga Aarti",
        "category": "Culture",
        "cost": 150,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Witness the grand choreographed multi-tiered brass lamp ceremony."
      },
      {
        "id": "act_var_4",
        "name": "Sarnath Deer Park & Stupa Tour",
        "category": "Culture",
        "cost": 250,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Visit the site where Lord Buddha gave his first sermon after enlightenment."
      }
    ]
  },
  {
    "id": "dest_amritsar",
    "name": "Amritsar, Punjab",
    "country": "India",
    "stateOrRegion": "Punjab",
    "regionType": "North India (Sikh Heritage)",
    "isDomestic": true,
    "category": [
      "Spiritual",
      "Culture",
      "Food"
    ],
    "tags": [
      "Golden Temple",
      "Wagah Border",
      "Langar",
      "Jallianwala Bagh",
      "Culinary"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1600,
    "minDays": 2,
    "idealDuration": 2,
    "maxDays": 3,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "family",
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Warm Heritage Plains",
    "majorAttractions": [
      "Golden Temple (Harmandir Sahib)",
      "Wagah Border Ceremony",
      "Jallianwala Bagh",
      "Partition Museum",
      "Gobindgarh Fort"
    ],
    "cuisineHighlights": "Amritsari kulcha with chole, makki di roti with sarson ka saag, lassi with malai, and pinni",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "The spiritual heart of Sikhism, home to the gold-plated Harmandir Sahib that feeds over 100,000 visitors free daily.",
    "travelTips": "Visit the Golden Temple twice: once early morning for peaceful hymns and once at night when it glows on the Amrit Sarovar.",
    "heroImage": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_amr_1",
        "name": "Harmandir Sahib Golden Temple & Langar Seva",
        "category": "Spiritual",
        "cost": 0,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Immerse in divine hymns and volunteer in the world's largest community kitchen."
      },
      {
        "id": "act_amr_2",
        "name": "Wagah Border Beating Retreat Parade",
        "category": "Culture",
        "cost": 100,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Feel electrifying patriotic energy at the India-Pakistan border flag-lowering ceremony."
      },
      {
        "id": "act_amr_3",
        "name": "Jallianwala Bagh & Partition Museum Walk",
        "category": "Culture",
        "cost": 150,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Morning",
        "description": "Pay homage at the bullet-marked memorial and witness personal oral histories."
      }
    ]
  },
  {
    "id": "dest_leh_ladakh",
    "name": "Leh & Ladakh",
    "country": "India",
    "stateOrRegion": "Ladakh",
    "regionType": "North India (Trans-Himalayas)",
    "isDomestic": true,
    "category": [
      "Adventure",
      "Nature",
      "Spiritual"
    ],
    "tags": [
      "Pangong Lake",
      "Nubra Valley",
      "Khardung La",
      "Monasteries",
      "High Altitude"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 3800,
    "minDays": 5,
    "idealDuration": 6,
    "maxDays": 9,
    "bestMonths": [
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Cold Arid High Altitude",
    "majorAttractions": [
      "Pangong Tso Lake",
      "Nubra Valley",
      "Khardung La Pass",
      "Thiksey Monastery",
      "Magnetic Hill"
    ],
    "cuisineHighlights": "Ladakhi skyu stew, butter tea, tingmo, apricot jam, and yak cheese pizza",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight",
      "selfdrive"
    ],
    "description": "The Land of High Passes, featuring turquoise alpine lakes, sand dunes with double-humped camels, and cliff-top Buddhist gompas.",
    "travelTips": "Mandatory 48-hour complete rest in Leh is required to acclimatize to 11,500 ft before travelling higher.",
    "heroImage": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_lad_1",
        "name": "Pangong Tso Lake Day & Night Camping",
        "category": "Nature",
        "cost": 3200,
        "durationHours": 8,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Watch high-altitude waters shift colors from azure to turquoise under Himalayan skies."
      },
      {
        "id": "act_lad_2",
        "name": "Nubra Valley Bactrian Camel Ride",
        "category": "Adventure",
        "cost": 1800,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Ride double-humped camels across white sand dunes framed by snow peaks."
      },
      {
        "id": "act_lad_3",
        "name": "Thiksey & Hemis Monasteries Tour",
        "category": "Spiritual",
        "cost": 350,
        "durationHours": 4,
        "priority": 2,
        "timeSlot": "Morning",
        "description": "Witness 12-story whitewashed gompas resembling Lhasa's Potala Palace."
      }
    ]
  },
  {
    "id": "dest_srinagar_gulmarg",
    "name": "Srinagar & Gulmarg, Kashmir",
    "country": "India",
    "stateOrRegion": "Jammu & Kashmir",
    "regionType": "North India (Kashmir Valley)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tags": [
      "Dal Lake Shikara",
      "Gulmarg Gondola",
      "Mughal Gardens",
      "Snow Skiing",
      "Houseboat"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2900,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 6,
    "bestMonths": [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "suitableTravelers": [
      "couple",
      "family",
      "solo",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Alpine Valley & Winter Snow",
    "majorAttractions": [
      "Dal Lake",
      "Gulmarg Gondola",
      "Shalimar & Nishat Gardens",
      "Pahalgam Betaab Valley",
      "Shankaracharya Temple"
    ],
    "cuisineHighlights": "Kashmiri wazwan (rogan josh, gustaba), kahwa with saffron and crushed almonds, and sheer chai",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight",
      "selfdrive",
      "bus"
    ],
    "description": "Paradise on Earth, celebrated for romantic carved houseboats on Dal Lake, blooming saffron valleys, and Gulmarg's world-class ski bowl.",
    "travelTips": "Book Gulmarg Gondola Phase 2 tickets weeks in advance as on-spot tickets sell out quickly.",
    "heroImage": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_sri_1",
        "name": "Dal Lake Shikara Ride & Floating Market",
        "category": "Culture",
        "cost": 700,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Glide through lotus beds past floating vegetable markets and wooden houseboats."
      },
      {
        "id": "act_sri_2",
        "name": "Gulmarg Gondola Phase 2 to Apharwat Peak",
        "category": "Adventure",
        "cost": 1950,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Ride the world's second highest operating cable car to 13,780 ft snowfields."
      },
      {
        "id": "act_sri_3",
        "name": "Nishat & Shalimar Mughal Garden Walk",
        "category": "Nature",
        "cost": 150,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Admire terraced water fountains, chinars, and blossoms laid out by Jahangir."
      }
    ]
  },
  {
    "id": "dest_gangtok_sikkim",
    "name": "Gangtok & Pelling, Sikkim",
    "country": "India",
    "stateOrRegion": "Sikkim",
    "regionType": "East India (Eastern Himalayas)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Spiritual"
    ],
    "tags": [
      "Kanchenjunga",
      "Rumtek Monastery",
      "Tsomgo Lake",
      "Organic State",
      "Nathula Pass"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2300,
    "minDays": 3,
    "idealDuration": 5,
    "maxDays": 7,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Cool Mountain Air",
    "majorAttractions": [
      "Tsomgo Lake",
      "Rumtek Monastery",
      "Pelling Skywalk",
      "Nathula Pass Border",
      "MG Marg"
    ],
    "cuisineHighlights": "Sikkimese momos, thukpa, gundruk soup, chhurpi soup, and organic local fruit wines",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "selfdrive"
    ],
    "description": "India's cleanest 100% organic state, boasting up-close panoramas of Mount Kanchenjunga, glacial lakes, and orchid gardens.",
    "travelTips": "Carry passport-size photos and ID for Nathula Pass and Tsomgo Lake inner line permits.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_sik_1",
        "name": "Tsomgo Glacial Lake & Yak Ride",
        "category": "Nature",
        "cost": 1200,
        "durationHours": 5,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Travel to 12,400 ft to marvel at a sacred alpine lake reflecting snowy ridgelines."
      },
      {
        "id": "act_sik_2",
        "name": "Rumtek Monastery Dharma Chakra Tour",
        "category": "Spiritual",
        "cost": 150,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Tour the prestigious seat of the Kagyu lineage holding sacred golden stupas."
      },
      {
        "id": "act_sik_3",
        "name": "Pelling Glass Skywalk & Chenrezig Statue",
        "category": "Adventure",
        "cost": 300,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Walk transparent glass decks protruding over deep valleys facing Kanchenjunga."
      }
    ]
  },
  {
    "id": "dest_meghalaya",
    "name": "Shillong & Cherrapunji, Meghalaya",
    "country": "India",
    "stateOrRegion": "Meghalaya",
    "regionType": "Northeast India (Abode of Clouds)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tags": [
      "Living Root Bridges",
      "Dawki River",
      "Nohkalikai Falls",
      "Caving",
      "Rock Music"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2250,
    "minDays": 3,
    "idealDuration": 5,
    "maxDays": 7,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Mist, Rain & Emerald Gorges",
    "majorAttractions": [
      "Double Decker Living Root Bridge (Nongriat)",
      "Dawki Umngot River",
      "Nohkalikai Falls",
      "Mawsmai Caves",
      "Shillong Peak"
    ],
    "cuisineHighlights": "Jadoh (rice with meat), dohneiiong (pork with black sesame), tungrymbai, and pineapples",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight",
      "selfdrive",
      "bus"
    ],
    "description": "The Abode of the Clouds, renowned for UNESCO bio-engineered living tree root bridges, crystal glass rivers, and thundering waterfalls.",
    "travelTips": "The hike down to Nongriat Double Decker bridge has 3,500 steps; wear good hiking boots and pack light.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_meg_1",
        "name": "Double Decker Living Root Bridge Trek",
        "category": "Adventure",
        "cost": 600,
        "durationHours": 6,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Hike deep into jungle valleys crossing 200-year-old living rubber tree root spans."
      },
      {
        "id": "act_meg_2",
        "name": "Dawki Umngot Transparent River Boating",
        "category": "Nature",
        "cost": 800,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Float in wooden canoes that seem suspended in air over transparent pebble waters."
      },
      {
        "id": "act_meg_3",
        "name": "Nohkalikai Falls & Limestone Caving",
        "category": "Nature",
        "cost": 200,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Gaze down India's tallest plunge waterfall and squeeze through lit fossil caves."
      }
    ]
  },
  {
    "id": "dest_kaziranga",
    "name": "Kaziranga National Park, Assam",
    "country": "India",
    "stateOrRegion": "Assam",
    "regionType": "Northeast India (Brahmaputra Plains)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure"
    ],
    "tags": [
      "One-Horned Rhino",
      "Elephant Safari",
      "Jeep Safari",
      "Brahmaputra",
      "Assam Tea"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2700,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "family",
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Elephant Grass Plains",
    "majorAttractions": [
      "Central Kohora Range",
      "Bagori Western Range",
      "Orchid & Biodiversity Park",
      "Tea Gardens",
      "Brahmaputra River"
    ],
    "cuisineHighlights": "Assamese thali, masor tenga (sour fish curry), aloo pitika, and strong Assam orthodox tea",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "UNESCO World Heritage floodplains holding two-thirds of the world's great one-horned rhinoceros population.",
    "travelTips": "Book an early morning elephant safari for the closest safe views of rhinos grazing in tall elephant grass.",
    "heroImage": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_kaz_1",
        "name": "Morning Rhino Safari in Bagori Range",
        "category": "Adventure",
        "cost": 2200,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Spot prehistoric one-horned rhinoceroses and wild water buffalo up close."
      },
      {
        "id": "act_kaz_2",
        "name": "Kaziranga National Orchid Park Tour",
        "category": "Nature",
        "cost": 200,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Discover over 600 rare indigenous orchid varieties and Bihu folk dances."
      },
      {
        "id": "act_kaz_3",
        "name": "Brahmaputra Sunset Dolphin Boat Cruise",
        "category": "Nature",
        "cost": 600,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Sail the broad river watching rare freshwater Gangetic river dolphins surface."
      }
    ]
  },
  {
    "id": "dest_andaman",
    "name": "Andaman & Nicobar Islands (Havelock)",
    "country": "India",
    "stateOrRegion": "Andaman and Nicobar Islands",
    "regionType": "Island Territory (Bay of Bengal)",
    "isDomestic": true,
    "category": [
      "Beach",
      "Adventure",
      "Nature"
    ],
    "tags": [
      "Radhanagar Beach",
      "Scuba Diving",
      "Coral Reefs",
      "Elephant Beach",
      "Cellular Jail"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 4200,
    "minDays": 4,
    "idealDuration": 6,
    "maxDays": 8,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "couple",
      "family",
      "solo",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Pristine Tropical Island",
    "majorAttractions": [
      "Radhanagar Beach (Asia's Top Beach)",
      "Elephant Beach Corals",
      "Neil Island Natural Bridge",
      "Cellular Jail Light & Sound",
      "Kalapathar Beach"
    ],
    "cuisineHighlights": "Grilled red snapper, coconut prawn curry, crab masala, and tropical fruit bowls",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Tropical island paradise boasting turquoise crystal waters, world-class coral reef scuba diving, and Asia's best beaches.",
    "travelTips": "Book the Makruzz or Nautika catamaran ferries between Port Blair, Havelock, and Neil Island ahead of time.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_and_1",
        "name": "Radhanagar Beach Sunset Stroll",
        "category": "Beach",
        "cost": 0,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Bask on powder-fine white sand framed by deep rainforest trees."
      },
      {
        "id": "act_and_2",
        "name": "PADI Discover Scuba Diving on Havelock Reefs",
        "category": "Adventure",
        "cost": 3500,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Dive with certified divemasters among parrotfish, turtles, and live coral reefs."
      },
      {
        "id": "act_and_3",
        "name": "Cellular Jail National Memorial Tour",
        "category": "Culture",
        "cost": 150,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Pay respects to freedom fighters who endured historic solitary confinement."
      }
    ]
  },
  {
    "id": "dest_bali_intl",
    "name": "Bali & Nusa Penida, Indonesia",
    "country": "Indonesia",
    "stateOrRegion": "Bali",
    "regionType": "Southeast Asia",
    "isDomestic": false,
    "category": [
      "Beach",
      "Nature",
      "Culture",
      "Nightlife"
    ],
    "tags": [
      "Ubud Rice Terraces",
      "Kelingking Beach",
      "Uluwatu Sunset",
      "Beach Clubs",
      "Volcano"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 4800,
    "minDays": 4,
    "idealDuration": 6,
    "maxDays": 9,
    "bestMonths": [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group",
      "family"
    ],
    "travelPace": "moderate",
    "climate": "Tropical Island",
    "majorAttractions": [
      "Uluwatu Temple",
      "Tegallalang Rice Terraces",
      "Kelingking Beach (Nusa Penida)",
      "Seminyak Beach Clubs",
      "Mount Batur"
    ],
    "cuisineHighlights": "Nasi goreng, babi guling, smoothie bowls, satay lilit, and luwak coffee",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The Island of the Gods, blending emerald Ubud jungle retreats, spiritual cliff temples, cliff beaches, and beach clubs.",
    "travelTips": "Indian passport holders can obtain an online 30-day e-VOA (Visa on Arrival) before boarding.",
    "heroImage": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_bal_1",
        "name": "Ubud Monkey Forest & Rice Terrace Swing",
        "category": "Nature",
        "cost": 2200,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Swing over lush stepped paddy terraces and meet friendly long-tailed macaques."
      },
      {
        "id": "act_bal_2",
        "name": "Uluwatu Cliff Sunset & Kecak Fire Dance",
        "category": "Culture",
        "cost": 1600,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Watch dramatic choral fire dancing staged on 70-meter sea cliffs."
      },
      {
        "id": "act_bal_3",
        "name": "Nusa Penida T-Rex Cliff Island Day Tour",
        "category": "Beach",
        "cost": 4200,
        "durationHours": 7,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Speedboat to the iconic dinosaur-shaped headland and sapphire ocean bays."
      }
    ]
  },
  {
    "id": "dest_phuket_krabi",
    "name": "Phuket & Krabi, Thailand",
    "country": "Thailand",
    "stateOrRegion": "Southern Thailand",
    "regionType": "Southeast Asia",
    "isDomestic": false,
    "category": [
      "Beach",
      "Adventure",
      "Nightlife",
      "Food"
    ],
    "tags": [
      "Phi Phi Islands",
      "Railay Beach",
      "James Bond Island",
      "Snorkeling",
      "Night Market"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 4200,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 8,
    "bestMonths": [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group",
      "family"
    ],
    "travelPace": "relaxed",
    "climate": "Tropical Andaman Sea",
    "majorAttractions": [
      "Maya Bay (Phi Phi)",
      "Railay Rock Climbing",
      "Big Buddha Phuket",
      "Patong Nightlife",
      "Hong Island Lagoon"
    ],
    "cuisineHighlights": "Pad Thai, Tom Yum Goong, mango sticky rice, green curry, and coconut ice cream",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The jewel of the Andaman Sea, featuring towering limestone karst towers, world-class beach parties, and vibrant night markets.",
    "travelTips": "Take longtail boats from Ao Nang to Railay Beach since Railay is inaccessible by road.",
    "heroImage": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_phu_1",
        "name": "Phi Phi Islands & Maya Bay Speedboat Tour",
        "category": "Beach",
        "cost": 3800,
        "durationHours": 7,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Snorkel with tropical reef fish in the turquoise lagoon featured in 'The Beach'."
      },
      {
        "id": "act_phu_2",
        "name": "Railay Beach Karst Rock Climbing",
        "category": "Adventure",
        "cost": 2400,
        "durationHours": 4,
        "priority": 2,
        "timeSlot": "Morning",
        "description": "Ascend sheer limestone karst bluffs over pristine Andaman ocean waves."
      },
      {
        "id": "act_phu_3",
        "name": "Phuket Old Town Sunday Walking Street",
        "category": "Food",
        "cost": 700,
        "durationHours": 3,
        "priority": 3,
        "timeSlot": "Evening",
        "description": "Sample grilled satays, roti pancakes, and browse colorful Sino-Portuguese shops."
      }
    ]
  },
  {
    "id": "dest_bangkok",
    "name": "Bangkok, Thailand",
    "country": "Thailand",
    "stateOrRegion": "Central Thailand",
    "regionType": "Southeast Asia",
    "isDomestic": false,
    "category": [
      "Culture",
      "Shopping",
      "Food",
      "Nightlife"
    ],
    "tags": [
      "Grand Palace",
      "Wat Arun",
      "Chatuchak Market",
      "Street Food",
      "Rooftop Bars"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 3600,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 6,
    "bestMonths": [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group",
      "family"
    ],
    "travelPace": "fast",
    "climate": "Vibrant Tropical Metropolis",
    "majorAttractions": [
      "The Grand Palace",
      "Wat Arun (Temple of Dawn)",
      "Chatuchak Weekend Market",
      "Chao Phraya River Cruise",
      "Iconsiam"
    ],
    "cuisineHighlights": "Michelin-starred crab omelettes, pad kra pao, boat noodles, and mango sticky rice",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Dynamic capital where gilded ancient Buddhist spires rise next to futuristic megamalls and Michelin-starred street food stalls.",
    "travelTips": "Ride the BTS Skytrain and MRT to bypass notorious downtown Bangkok road traffic jams.",
    "heroImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_bkk_1",
        "name": "The Grand Palace & Emerald Buddha Tour",
        "category": "Culture",
        "cost": 1200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Marvel at gold-encrusted stupas and sacred Siamese royal coronation halls."
      },
      {
        "id": "act_bkk_2",
        "name": "Chao Phraya Express Boat to Wat Arun",
        "category": "Culture",
        "cost": 300,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Climb the porcelain-mosaic pagoda on the banks of Bangkok's river of kings."
      },
      {
        "id": "act_bkk_3",
        "name": "Chinatown Yaowarat Street Food Safari",
        "category": "Food",
        "cost": 800,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Sample sizzling oyster omelettes, dim sum, and grilled river prawns."
      }
    ]
  },
  {
    "id": "dest_singapore",
    "name": "Singapore City",
    "country": "Singapore",
    "stateOrRegion": "Singapore",
    "regionType": "Southeast Asia",
    "isDomestic": false,
    "category": [
      "Culture",
      "Food",
      "Shopping",
      "Family"
    ],
    "tags": [
      "Marina Bay Sands",
      "Gardens by the Bay",
      "Hawker Centers",
      "Universal Studios",
      "Supertrees"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 6500,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 6,
    "bestMonths": [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "solo",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Modern Tropical Garden City",
    "majorAttractions": [
      "Gardens by the Bay",
      "Marina Bay Sands SkyPark",
      "Universal Studios Sentosa",
      "Jewel Changi Rain Vortex",
      "Chinatown & Little India"
    ],
    "cuisineHighlights": "Hainanese chicken rice, chili crab, laksa, satay skewers at Lau Pa Sat, and kaya toast",
    "accommodationTypes": [
      "hostel",
      "budget",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Futuristic Garden City famous for soaring illuminated Supertrees, world-class theme parks, and vibrant UNESCO hawker centres.",
    "travelTips": "Tap your contactless credit/debit card directly at MRT subway gates for frictionless transit across the island.",
    "heroImage": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_sin_1",
        "name": "Gardens by the Bay Cloud Forest & Supertrees",
        "category": "Nature",
        "cost": 2800,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk aerial bridges between high-tech conservatory domes and 50m vertical gardens."
      },
      {
        "id": "act_sin_2",
        "name": "Sentosa Island & Universal Studios Rides",
        "category": "Adventure",
        "cost": 5200,
        "durationHours": 6,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Experience world-class roller coasters and movie-themed thrill rides."
      },
      {
        "id": "act_sin_3",
        "name": "Lau Pa Sat Hawker Center Satay Street Dinner",
        "category": "Food",
        "cost": 1200,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Feast on freshly grilled chicken and beef satay under colonial iron arches."
      }
    ]
  },
  {
    "id": "dest_vietnam_danang",
    "name": "Da Nang & Hoi An, Vietnam",
    "country": "Vietnam",
    "stateOrRegion": "Central Vietnam",
    "regionType": "Southeast Asia",
    "isDomestic": false,
    "category": [
      "Culture",
      "Beach",
      "Food"
    ],
    "tags": [
      "Golden Bridge",
      "Lantern City",
      "My Khe Beach",
      "Tailor Shops",
      "Ba Na Hills"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 3200,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 6,
    "bestMonths": [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Breezy Coastal Tropics",
    "majorAttractions": [
      "Hoi An Ancient Lantern Town",
      "Ba Na Hills Golden Bridge",
      "My Khe Beach",
      "Marble Mountains",
      "Dragon Bridge"
    ],
    "cuisineHighlights": "Banh mi, pho bo, cao lau noodles, egg coffee, and fresh coconut pancakes",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "UNESCO ancient trading port glowing with thousands of silk lanterns, paired with the surreal giant stone hands of the Golden Bridge.",
    "travelTips": "Rent a bicycle in Hoi An to ride through emerald rice paddies directly onto An Bang beach.",
    "heroImage": "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_vie_1",
        "name": "Ba Na Hills & Golden Bridge Hands Walk",
        "category": "Culture",
        "cost": 3200,
        "durationHours": 5,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Take the mountain cable car to walk the viral pedestrian bridge held by giant hands."
      },
      {
        "id": "act_vie_2",
        "name": "Hoi An Lantern Town Walking & Cooking Class",
        "category": "Food",
        "cost": 1200,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Shop tailor boutiques, make fresh spring rolls, and release paper lotus lanterns on the river."
      },
      {
        "id": "act_vie_3",
        "name": "Da Nang Dragon Bridge Weekend Fire Show",
        "category": "Nightlife",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Watch the massive steel dragon breathe real fire and water over Han River."
      }
    ]
  },
  {
    "id": "dest_kuala_lumpur",
    "name": "Kuala Lumpur & Penang, Malaysia",
    "country": "Malaysia",
    "stateOrRegion": "West Malaysia",
    "regionType": "Southeast Asia",
    "isDomestic": false,
    "category": [
      "Culture",
      "Food",
      "Shopping"
    ],
    "tags": [
      "Petronas Towers",
      "Batu Caves",
      "Street Art",
      "Hawker Food",
      "Colonial Georgetown"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 3400,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 6,
    "bestMonths": [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Modern Tropical Hub",
    "majorAttractions": [
      "Petronas Twin Towers",
      "Batu Caves Rainbow Steps",
      "Penang Georgetown Heritage",
      "Bukit Bintang",
      "Penang Hill"
    ],
    "cuisineHighlights": "Nasi lemak, char kway teow, roti canai, laksa asam, and durian treats",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Multicultural capital boasting the iconic Petronas twin towers and rainbow Batu Caves, paired with Penang's legendary culinary street art.",
    "travelTips": "Malaysia offers visa-free entry for Indian citizens for tourism stays up to 30 days.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_kl_1",
        "name": "Batu Caves 272 Rainbow Steps Climb",
        "category": "Spiritual",
        "cost": 100,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Climb colorful stairs guarded by a 140-foot golden statue of Lord Murugan into limestone caverns."
      },
      {
        "id": "act_kl_2",
        "name": "Petronas Twin Towers Skybridge View",
        "category": "Culture",
        "cost": 1800,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Walk the 170m-high double-deck bridge linking the world's tallest twin skyscrapers."
      },
      {
        "id": "act_kl_3",
        "name": "Jalan Alor Night Food Street Feast",
        "category": "Food",
        "cost": 800,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Dine outdoors on grilled chicken wings, dim sum, and tropical fruit smoothies."
      }
    ]
  },
  {
    "id": "dest_dubai",
    "name": "Dubai & Abu Dhabi, UAE",
    "country": "United Arab Emirates",
    "stateOrRegion": "Dubai & Abu Dhabi",
    "regionType": "Middle East",
    "isDomestic": false,
    "category": [
      "Culture",
      "Adventure",
      "Shopping",
      "Family"
    ],
    "tags": [
      "Burj Khalifa",
      "Desert Safari",
      "Sheikh Zayed Mosque",
      "Luxury Malls",
      "Louvre"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 7500,
    "minDays": 3,
    "idealDuration": 5,
    "maxDays": 7,
    "bestMonths": [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "solo",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Modern Desert Oasis",
    "majorAttractions": [
      "Burj Khalifa",
      "Desert Dune Bashing",
      "Sheikh Zayed Grand Mosque (Abu Dhabi)",
      "Dubai Mall & Fountains",
      "Louvre Abu Dhabi"
    ],
    "cuisineHighlights": "Shawarma, hummus with warm pita, mandi rice, saffron karak chai, and camel milk gelato",
    "accommodationTypes": [
      "budget",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Dazzling desert metropolis home to the world's tallest skyscraper, man-made islands, dune safaris, and Abu Dhabi's grand white marble mosque.",
    "travelTips": "Book Burj Khalifa 124th-floor tickets for sunset slots online to enjoy day, sunset, and illuminated night views in one visit.",
    "heroImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_dub_1",
        "name": "Burj Khalifa 124th Floor Observation Deck",
        "category": "Culture",
        "cost": 4200,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Look out across the Arabian Gulf from 452 meters above ground level."
      },
      {
        "id": "act_dub_2",
        "name": "Red Dunes 4x4 Safari & Bedouin Camp",
        "category": "Adventure",
        "cost": 3500,
        "durationHours": 6,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Experience adrenaline dune bashing, sandboarding, and belly dance BBQ dinner."
      },
      {
        "id": "act_dub_3",
        "name": "Sheikh Zayed Grand Mosque Architectural Tour",
        "category": "Culture",
        "cost": 0,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Morning",
        "description": "Admire 82 white marble domes, 24-carat gold chandeliers, and hand-knotted Persian carpets."
      }
    ]
  },
  {
    "id": "dest_turkey_istanbul",
    "name": "Istanbul & Cappadocia, Turkey",
    "country": "Turkey",
    "stateOrRegion": "Marmara & Central Anatolia",
    "regionType": "Middle East / Europe",
    "isDomestic": false,
    "category": [
      "Culture",
      "Adventure",
      "Food",
      "Shopping"
    ],
    "tags": [
      "Hot Air Balloons",
      "Hagia Sophia",
      "Grand Bazaar",
      "Fairy Chimneys",
      "Bosphorus"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 5200,
    "minDays": 5,
    "idealDuration": 6,
    "maxDays": 9,
    "bestMonths": [
      "Apr",
      "May",
      "Jun",
      "Sep",
      "Oct",
      "Nov"
    ],
    "suitableTravelers": [
      "couple",
      "solo",
      "group",
      "family"
    ],
    "travelPace": "moderate",
    "climate": "Historic Crossroads",
    "majorAttractions": [
      "Hagia Sophia",
      "Cappadocia Hot Air Balloon",
      "Blue Mosque",
      "Grand Bazaar",
      "Bosphorus Cruise"
    ],
    "cuisineHighlights": "Turkish kebabs, baklava, menemen, Turkish delight, and rich sand-brewed Turkish coffee",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The meeting point of East and West, uniting Istanbul's Byzantine domes and Bosphorus straits with sunrise hot-air balloons over Cappadocia's fairy chimneys.",
    "travelTips": "Book Cappadocia hot air balloon rides for your first morning so flights can be rescheduled if winds cancel day one.",
    "heroImage": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_tur_1",
        "name": "Cappadocia Sunrise Hot Air Balloon Flight",
        "category": "Adventure",
        "cost": 16500,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Float peacefully over lunar valleys and fairy chimney spires at dawn."
      },
      {
        "id": "act_tur_2",
        "name": "Hagia Sophia & Blue Mosque Guided Tour",
        "category": "Culture",
        "cost": 2200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Wander under 1,500-year-old Byzantine mosaics and grand Ottoman prayer domes."
      },
      {
        "id": "act_tur_3",
        "name": "Bosphorus Sunset Ferry Cruise & Meze",
        "category": "Food",
        "cost": 1500,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Sail between Europe and Asia gazing at Ottoman wooden waterfront palaces."
      }
    ]
  },
  {
    "id": "dest_paris",
    "name": "Paris, France",
    "country": "France",
    "stateOrRegion": "Île-de-France",
    "regionType": "Western Europe",
    "isDomestic": false,
    "category": [
      "Culture",
      "Food",
      "Shopping"
    ],
    "tags": [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River",
      "Champs-Élysées",
      "Montmartre"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 8500,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 8,
    "bestMonths": [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ],
    "suitableTravelers": [
      "couple",
      "solo",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Temperate European",
    "majorAttractions": [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Arc de Triomphe",
      "Montmartre & Sacré-Cœur"
    ],
    "cuisineHighlights": "Butter croissants, duck confit, escargots, macarons from Ladurée, and French cheeses",
    "accommodationTypes": [
      "hostel",
      "budget",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The City of Light, world capital of art, fashion, gastronomy, and romance along the historic banks of the Seine.",
    "travelTips": "Book Louvre and Eiffel Tower time-slot tickets weeks in advance online to avoid waiting 2+ hours in queues.",
    "heroImage": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_par_1",
        "name": "Louvre Museum Masterpieces Audio Tour",
        "category": "Culture",
        "cost": 2200,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "View the Mona Lisa, Venus de Milo, and Winged Victory inside the former royal palace."
      },
      {
        "id": "act_par_2",
        "name": "Eiffel Tower Summit Elevator & Champagne",
        "category": "Culture",
        "cost": 3500,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Ascend to 276 meters for breathtaking 360-degree views across Paris."
      },
      {
        "id": "act_par_3",
        "name": "Seine River Twilight Cruise & Illuminations",
        "category": "Culture",
        "cost": 1800,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Glide under historic stone bridges as the Eiffel Tower sparkles on the hour."
      }
    ]
  },
  {
    "id": "dest_switzerland_alps",
    "name": "Interlaken & Swiss Alps, Switzerland",
    "country": "Switzerland",
    "stateOrRegion": "Bernese Oberland",
    "regionType": "Central Europe",
    "isDomestic": false,
    "category": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tags": [
      "Jungfraujoch",
      "Matterhorn",
      "Alpine Lakes",
      "Cable Cars",
      "Snow Peaks"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 11000,
    "minDays": 4,
    "idealDuration": 6,
    "maxDays": 9,
    "bestMonths": [
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "couple",
      "family",
      "solo",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Pristine Alpine Snow & Lakes",
    "majorAttractions": [
      "Jungfraujoch (Top of Europe)",
      "Lake Brienz & Lake Thun",
      "Grindelwald First Cliff Walk",
      "Lauterbrunnen Valley",
      "Harder Kulm"
    ],
    "cuisineHighlights": "Swiss cheese fondue, rösti, raclette, Alpine milk chocolate, and apple strudel",
    "accommodationTypes": [
      "hostel",
      "budget",
      "luxury"
    ],
    "transportOptions": [
      "flight",
      "train"
    ],
    "description": "Postcard Alpine wonderland featuring snow-capped peaks, cogwheel mountain trains, crystal glacial lakes, and waterfall valleys.",
    "travelTips": "Get a Swiss Travel Pass for unlimited travel on national trains, mountain panoramic buses, and lake steamers.",
    "heroImage": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_swi_1",
        "name": "Jungfraujoch Top of Europe Cogwheel Train",
        "category": "Adventure",
        "cost": 14500,
        "durationHours": 6,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Ascend through inside Eiger mountain rock to Europe's highest railway station at 3,454m."
      },
      {
        "id": "act_swi_2",
        "name": "Lauterbrunnen Valley of 72 Waterfalls Walk",
        "category": "Nature",
        "cost": 200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Stroll between vertical cliff walls past roaring glacial cascades."
      },
      {
        "id": "act_swi_3",
        "name": "Lake Brienz Turquoise Steamer Cruise",
        "category": "Nature",
        "cost": 3200,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Cruise intensely turquoise waters flanked by alpine chalet villages."
      }
    ]
  },
  {
    "id": "dest_rome_italy",
    "name": "Rome & Vatican City, Italy",
    "country": "Italy",
    "stateOrRegion": "Lazio",
    "regionType": "Southern Europe",
    "isDomestic": false,
    "category": [
      "Culture",
      "Food",
      "Spiritual"
    ],
    "tags": [
      "Colosseum",
      "Vatican Museum",
      "Trevi Fountain",
      "Pasta & Gelato",
      "Pantheon"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 7200,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 7,
    "bestMonths": [
      "Apr",
      "May",
      "Jun",
      "Sep",
      "Oct",
      "Nov"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Mediterranean Sunshine",
    "majorAttractions": [
      "Colosseum & Roman Forum",
      "St. Peter's Basilica",
      "Vatican Museums & Sistine Chapel",
      "Trevi Fountain",
      "Pantheon"
    ],
    "cuisineHighlights": "Cacio e pepe, carbonara, authentic woodfired pizza al taglio, creamy artisanal gelato, and espresso",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The Eternal City, an astonishing living open-air museum where ancient Roman gladiatorial arenas stand beside Baroque marble fountains.",
    "travelTips": "Carry an empty water bottle; Rome has over 2,500 historic nasoni fountains providing ice-cold clean drinking water.",
    "heroImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_rom_1",
        "name": "Colosseum & Roman Forum Gladiator Arena Tour",
        "category": "Culture",
        "cost": 2600,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk through ancient amphitheater arches where 50,000 Romans cheered gladiators."
      },
      {
        "id": "act_rom_2",
        "name": "Vatican Museums & Sistine Chapel Tour",
        "category": "Culture",
        "cost": 3200,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Gaze up at Michelangelo's ceiling frescoes and the School of Athens."
      },
      {
        "id": "act_rom_3",
        "name": "Trevi Fountain Coin Toss & Trastevere Dining",
        "category": "Food",
        "cost": 1800,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Toss a coin into the Trevi and dine in charming cobblestone alleys of Trastevere."
      }
    ]
  },
  {
    "id": "dest_santorini",
    "name": "Santorini & Athens, Greece",
    "country": "Greece",
    "stateOrRegion": "Cyclades & Attica",
    "regionType": "Southern Europe (Aegean Sea)",
    "isDomestic": false,
    "category": [
      "Beach",
      "Culture",
      "Food"
    ],
    "tags": [
      "Oia Sunset",
      "Blue Domes",
      "Acropolis",
      "Caldera Cruise",
      "White Villas"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 8200,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 7,
    "bestMonths": [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ],
    "suitableTravelers": [
      "couple",
      "solo",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Sunny Mediterranean Island",
    "majorAttractions": [
      "Oia Caldera Sunset",
      "Fira to Oia Cliffside Hike",
      "Acropolis of Athens",
      "Red Beach",
      "Volcanic Hot Springs"
    ],
    "cuisineHighlights": "Greek salad with creamy feta, moussaka, souvlaki, fresh grilled octopus, and baklava",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Postcard whitewashed clifftop villages crowned with cobalt blue domes, looking out over a deep submerged volcanic caldera.",
    "travelTips": "Arrive in Oia by 5 PM to grab a prime viewing spot for the famous Aegean golden-hour sunset.",
    "heroImage": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_san_1",
        "name": "Oia Clifftop Sunset Experience",
        "category": "Nature",
        "cost": 0,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Watch sunlight bathe white cave houses in warm gold above volcanic waves."
      },
      {
        "id": "act_san_2",
        "name": "Catamaran Sailing Cruise & Volcanic Hot Springs",
        "category": "Adventure",
        "cost": 7500,
        "durationHours": 5,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Swim in sulfur springs and snorkel along Red and White volcanic beaches."
      },
      {
        "id": "act_san_3",
        "name": "Athens Acropolis & Parthenon Guided Walk",
        "category": "Culture",
        "cost": 2500,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Morning",
        "description": "Climb the rocky citadel to witness the 5th-century BC cradle of Western democracy."
      }
    ]
  },
  {
    "id": "dest_japan_tokyo_kyoto",
    "name": "Tokyo & Kyoto, Japan",
    "country": "Japan",
    "stateOrRegion": "Kanto & Kansai",
    "regionType": "East Asia",
    "isDomestic": false,
    "category": [
      "Culture",
      "Food",
      "Shopping",
      "Nature"
    ],
    "tags": [
      "Shinkansen",
      "Shibuya Crossing",
      "Fushimi Inari",
      "Cherry Blossoms",
      "Mount Fuji"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 8800,
    "minDays": 5,
    "idealDuration": 7,
    "maxDays": 10,
    "bestMonths": [
      "Mar",
      "Apr",
      "May",
      "Oct",
      "Nov",
      "Dec"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Four Seasons / Cherry Blossom",
    "majorAttractions": [
      "Shibuya Crossing",
      "Fushimi Inari Torii Gates",
      "Kinkaku-ji (Golden Pavilion)",
      "Senso-ji Temple",
      "Arashiyama Bamboo Grove"
    ],
    "cuisineHighlights": "Authentic ramen, fresh conveyor belt sushi, wagyu beef teppanyaki, matcha soft serve, and takoyaki",
    "accommodationTypes": [
      "hostel",
      "budget",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The thrilling fusion of ultra-futuristic neon megalopolis in Tokyo paired with Kyoto's serene thousand-torii bamboo shrines.",
    "travelTips": "Purchase an IC card (Suica/Pasmo) on your phone for seamless taps across all trains, subways, and convenience stores.",
    "heroImage": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_jap_1",
        "name": "Fushimi Inari 10,000 Vermilion Torii Gate Hike",
        "category": "Spiritual",
        "cost": 0,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk through endless winding red wooden shrines winding up Mount Inari."
      },
      {
        "id": "act_jap_2",
        "name": "Shibuya Sky Observation Deck & Crossing",
        "category": "Culture",
        "cost": 1800,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Look down at the world's busiest pedestrian crossing from a 230m glass rooftop."
      },
      {
        "id": "act_jap_3",
        "name": "Arashiyama Bamboo Grove & Tenryu-ji Garden",
        "category": "Nature",
        "cost": 600,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Morning",
        "description": "Stroll along towering green bamboo culms whispering in mountain breezes."
      }
    ]
  },
  {
    "id": "dest_cape_town",
    "name": "Cape Town & Garden Route, South Africa",
    "country": "South Africa",
    "stateOrRegion": "Western Cape",
    "regionType": "Southern Africa",
    "isDomestic": false,
    "category": [
      "Nature",
      "Adventure",
      "Beach",
      "Food"
    ],
    "tags": [
      "Table Mountain",
      "Boulders Beach Penguins",
      "Cape Point",
      "Winelands",
      "Scenic Drives"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 5800,
    "minDays": 5,
    "idealDuration": 6,
    "maxDays": 9,
    "bestMonths": [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "couple",
      "solo",
      "group",
      "family"
    ],
    "travelPace": "moderate",
    "climate": "Mediterranean Coast",
    "majorAttractions": [
      "Table Mountain Cableway",
      "Boulders Beach African Penguins",
      "Cape Point Nature Reserve",
      "V&A Waterfront",
      "Kirstenbosch Botanical Gardens"
    ],
    "cuisineHighlights": "Cape Malay bobotie, fresh Atlantic snoek fish, biltong, and artisanal vineyard dining",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "One of the world's most photogenic coastal cities, framed by the flat summit of Table Mountain and wild penguin beaches.",
    "travelTips": "Visit Table Mountain on the first clear sunny day since wind conditions can close the cable car without notice.",
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_cap_1",
        "name": "Table Mountain Aerial Cableway & Summit Walk",
        "category": "Nature",
        "cost": 2400,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Ride the 360-degree rotating cable car to the flat tabletop plateau."
      },
      {
        "id": "act_cap_2",
        "name": "Boulders Beach African Penguin Colony",
        "category": "Nature",
        "cost": 1100,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Walk wooden boardwalks feet away from adorable wild nesting penguins."
      },
      {
        "id": "act_cap_3",
        "name": "Cape of Good Hope & Chapman's Peak Drive",
        "category": "Adventure",
        "cost": 1600,
        "durationHours": 5,
        "priority": 2,
        "timeSlot": "Morning",
        "description": "Drive one of the world's most spectacular marine cliff routes to the southwestern tip of Africa."
      }
    ]
  },
  {
    "id": "dest_queenstown_nz",
    "name": "Queenstown & Milford Sound, New Zealand",
    "country": "New Zealand",
    "stateOrRegion": "South Island",
    "regionType": "Oceania",
    "isDomestic": false,
    "category": [
      "Adventure",
      "Nature"
    ],
    "tags": [
      "Adventure Capital",
      "Milford Sound Fjord",
      "Bungy Jump",
      "Jet Boating",
      "Southern Alps"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 9500,
    "minDays": 5,
    "idealDuration": 7,
    "maxDays": 10,
    "bestMonths": [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Alpine Fjord Country",
    "majorAttractions": [
      "Milford Sound Fjord",
      "Shotover Jet Boat",
      "Kawarau Bridge Bungy",
      "Lake Wakatipu",
      "Skyline Gondola & Luge"
    ],
    "cuisineHighlights": "World-famous Fergburger, Canterbury lamb, Pavlova dessert, and Central Otago Pinot Noir",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The Adventure Capital of the World nestled on Lake Wakatipu, gateway to the staggering vertical cliffs of Milford Sound.",
    "travelTips": "Book a coach-and-nature-cruise day trip from Queenstown to Milford Sound to relax and enjoy the scenic road.",
    "heroImage": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_qnz_1",
        "name": "Milford Sound Nature Fjord Cruise",
        "category": "Nature",
        "cost": 7200,
        "durationHours": 8,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Cruise beneath sheer 1,200m rock walls, cascading waterfalls, and basking seals."
      },
      {
        "id": "act_qnz_2",
        "name": "Shotover River High-Speed Jet Boating",
        "category": "Adventure",
        "cost": 6800,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Skim shallow turquoise canyon waters with heart-pounding 360-degree spins."
      },
      {
        "id": "act_qnz_3",
        "name": "Skyline Gondola & Mountain Luge Rides",
        "category": "Adventure",
        "cost": 2600,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Morning",
        "description": "Ride cable cars above Queenstown and race downhill gravity karts overlooking the lake."
      }
    ]
  },
  {
    "id": "dest_madurai_chettinad",
    "name": "Madurai & Chettinad, Tamil Nadu",
    "country": "India",
    "stateOrRegion": "Tamil Nadu",
    "regionType": "South India (Heritage)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Spiritual",
      "Food"
    ],
    "tags": [
      "Meenakshi Temple",
      "Chettinad Mansions",
      "Heritage Cuisine",
      "Brass Antiques",
      "Night Bazaar"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1650,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Warm Tropical Heritage",
    "majorAttractions": [
      "Meenakshi Amman Temple",
      "Thirumalai Nayakkar Palace",
      "Chettinad Heritage Mansions",
      "Puthu Mandapam Market",
      "Gandhi Memorial Museum"
    ],
    "cuisineHighlights": "Madurai bun parotta, Chettinad pepper chicken, jigarthanda, and spicy idlis at Murugan Idli",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "The soul of Tamil Nadu featuring the millennia-old Meenakshi Temple towers and the stately palatial mansions of Karaikudi.",
    "travelTips": "Visit Meenakshi Amman Temple early morning at 6:30 AM to witness the quiet chanting rituals before daytime queues form.",
    "heroImage": "https://images.unsplash.com/photo-1609137144822-261c3569736c?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_mad_1",
        "name": "Meenakshi Amman Temple Spiritual Walk",
        "category": "Spiritual",
        "cost": 50,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Explore the soaring painted gopurams and thousand-pillar granite hall."
      },
      {
        "id": "act_mad_2",
        "name": "Chettinad Palatial Mansion Heritage Tour",
        "category": "Culture",
        "cost": 300,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk through 19th-century merchant mansions lined with Burma teak and Italian tiles."
      },
      {
        "id": "act_mad_3",
        "name": "Madurai Legendary Street Food & Jigarthanda Trail",
        "category": "Food",
        "cost": 450,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Savor hot bun parotta, mutton kola urundai, and chilled almond gum jigarthanda."
      }
    ]
  },
  {
    "id": "dest_kanyakumari",
    "name": "Kanyakumari, Tamil Nadu",
    "country": "India",
    "stateOrRegion": "Tamil Nadu",
    "regionType": "South India (Coastal Confluence)",
    "isDomestic": true,
    "category": [
      "Spiritual",
      "Nature",
      "Culture"
    ],
    "tags": [
      "Land's End",
      "Tri-Sea Confluence",
      "Vivekananda Rock",
      "Thiruvalluvar Statue",
      "Sunrise Sunset Point"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1550,
    "minDays": 1,
    "idealDuration": 2,
    "maxDays": 3,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Breezy Maritime Confluence",
    "majorAttractions": [
      "Vivekananda Rock Memorial",
      "Thiruvalluvar Statue",
      "Triveni Sangam",
      "Padmanabhapuram Palace",
      "Sunset View Point"
    ],
    "cuisineHighlights": "Nanjil fish curry, pazham pori, sea crab fry, and South Indian filter coffee",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "The southernmost tip of the Indian subcontinent where the Arabian Sea, the Bay of Bengal, and the Indian Ocean unite.",
    "travelTips": "Catch sunrise on the beachfront at 6 AM where the sun rises straight over the confluence of three oceans.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_kan_1",
        "name": "Vivekananda Rock Ferry & Meditation Cave",
        "category": "Spiritual",
        "cost": 150,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Take the sea ferry to the granite island memorial where Swami Vivekananda meditated."
      },
      {
        "id": "act_kan_2",
        "name": "Triveni Sangam Ocean Shore Bath",
        "category": "Culture",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Stand where three majestic ocean currents collide in vibrant hues."
      },
      {
        "id": "act_kan_3",
        "name": "Padmanabhapuram Wooden Palace Excursion",
        "category": "Culture",
        "cost": 200,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Marvel at Asia's largest intricate teakwood palace built by Travancore royals."
      }
    ]
  },
  {
    "id": "dest_yercaud",
    "name": "Yercaud (Shevaroy Hills), Tamil Nadu",
    "country": "India",
    "stateOrRegion": "Tamil Nadu",
    "regionType": "South India (Hills)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Food",
      "Adventure"
    ],
    "tags": [
      "Jewel of the South",
      "Coffee Plantations",
      "Emerald Lake",
      "Pagoda Point",
      "Peaceful"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1600,
    "minDays": 2,
    "idealDuration": 2,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family"
    ],
    "travelPace": "relaxed",
    "climate": "Pleasant Coffee Valley Breeze",
    "majorAttractions": [
      "Yercaud Emerald Lake",
      "Pagoda Point",
      "Lady's Seat",
      "Killiyur Falls",
      "Shevaroy Temple Peak"
    ],
    "cuisineHighlights": "Salem thattai vadai set, fresh estate filter coffee, cardamom roasted corn, and country chicken sukka",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive",
      "train"
    ],
    "description": "The unpretentious, quiet hill station of the Eastern Ghats draped in organic coffee plantations, orange groves, and peaceful walking trails.",
    "travelTips": "Trek to Killiyur Falls right after the monsoon months for thunderous cascades without dense tourist crowds.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_yer_1",
        "name": "Emerald Lake Pedal Boating",
        "category": "Nature",
        "cost": 150,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Glide across tranquil lake waters framed by pine trees and cloud shadows."
      },
      {
        "id": "act_yer_2",
        "name": "Shevaroy Coffee Estate Sensory Walk",
        "category": "Food",
        "cost": 250,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Sample fresh Arabica cherries and learn artisanal shade-grown coffee drying."
      },
      {
        "id": "act_yer_3",
        "name": "Pagoda Point Sunset Lookout",
        "category": "Nature",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Watch amber twilight sweep across the Salem plains from the pyramid stone viewpoint."
      }
    ]
  },
  {
    "id": "dest_thekkady",
    "name": "Thekkady (Periyar), Kerala",
    "country": "India",
    "stateOrRegion": "Kerala",
    "regionType": "South India (Wildlife / Forest)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tags": [
      "Tiger Reserve",
      "Spice Gardens",
      "Bamboo Rafting",
      "Elephant Sightings",
      "Western Ghats"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2100,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "solo",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Cool Spice Forest",
    "majorAttractions": [
      "Periyar Lake Safari",
      "Kumily Spice Gardens",
      "Chellarkovil Falls",
      "Kadathanadan Kalari Centre",
      "Pandikuzhi Viewpoint"
    ],
    "cuisineHighlights": "Cardamom chai, nadan beef fry, appam with stew, and fresh banana chips fried in coconut oil",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive"
    ],
    "description": "Fragrant sanctuary nestled along the Periyar Lake, famous for wild elephants, tiger corridors, and verdant spice plantations.",
    "travelTips": "Book the 7:30 AM KTDC boat safari in advance online for best wild elephant and bison sightings.",
    "heroImage": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_thek_1",
        "name": "Periyar National Park Lake Boat Cruise",
        "category": "Nature",
        "cost": 500,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Cruise across mist-veiled waters to spot wild elephant herds grazing on the banks."
      },
      {
        "id": "act_thek_2",
        "name": "Kumily Guided Organic Spice Garden Tour",
        "category": "Food",
        "cost": 200,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Sniff fresh vanilla pods, nutmeg kernels, cinnamon bark, and wild pepper."
      },
      {
        "id": "act_thek_3",
        "name": "Kalaripayattu Martial Arts & Kathakali Show",
        "category": "Culture",
        "cost": 400,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Witness the ancient combat techniques and dramatic face-painted theatre of Kerala."
      }
    ]
  },
  {
    "id": "dest_kovalam",
    "name": "Kovalam, Kerala",
    "country": "India",
    "stateOrRegion": "Kerala",
    "regionType": "South India (Coast)",
    "isDomestic": true,
    "category": [
      "Beach",
      "Spiritual",
      "Food"
    ],
    "tags": [
      "Lighthouse Beach",
      "Ayurveda Retreat",
      "Hawa Beach",
      "Arabian Sea",
      "Water Sports"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2300,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "couple",
      "family",
      "solo"
    ],
    "travelPace": "relaxed",
    "climate": "Tropical Coastal Breeze",
    "majorAttractions": [
      "Vizhinjam Lighthouse",
      "Lighthouse Beach",
      "Hawa Beach",
      "Samudra Beach",
      "Halcyon Castle"
    ],
    "cuisineHighlights": "Grilled tiger prawns, Kerala fish molee with appam, coconut toddy, and Ayurvedic thali",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight",
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "Famous crescent-shaped shoreline guarded by a candy-striped 1930s lighthouse and celebrated for authentic Ayurvedic healing resorts.",
    "travelTips": "Climb the spiral staircase of Vizhinjam Lighthouse around 4:30 PM for breathtaking 360-degree aerial views of the coastline.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_kov_1",
        "name": "Vizhinjam Lighthouse Ascent",
        "category": "Culture",
        "cost": 50,
        "durationHours": 1,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Gaze down over crashing turquoise waves and coconut palm headlands."
      },
      {
        "id": "act_kov_2",
        "name": "Authentic Ayurvedic Rejuvenation Therapy",
        "category": "Spiritual",
        "cost": 1800,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Experience full-body Abhyanga oil massage with medicinal herbal oils."
      },
      {
        "id": "act_kov_3",
        "name": "Lighthouse Beach Sunset Dinner & Seafood",
        "category": "Food",
        "cost": 900,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Dine right on beach candlelit shacks to the sound of breaking waves."
      }
    ]
  },
  {
    "id": "dest_bekal",
    "name": "Bekal, Kerala",
    "country": "India",
    "stateOrRegion": "Kerala",
    "regionType": "South India (Fort Coast)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Beach",
      "Nature"
    ],
    "tags": [
      "Bekal Fort",
      "Arabian Sea",
      "Kappil Beach",
      "Backwaters",
      "Secluded"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2200,
    "minDays": 2,
    "idealDuration": 2,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "couple",
      "solo",
      "family"
    ],
    "travelPace": "relaxed",
    "climate": "Peaceful Malabar Coastal",
    "majorAttractions": [
      "Bekal Fort",
      "Bekal Beach Park",
      "Kappil Beach",
      "Nityanandashram Caves",
      "Valiyaparamba Backwaters"
    ],
    "cuisineHighlights": "Malabar biryani, pathiri with mutton curry, unnakaya, and tender coconut water",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "Dramatic 300-year-old keyhole-shaped laterite fort rising directly out of the Arabian Sea waves, featured in legendary Indian films.",
    "travelTips": "Visit Bekal Fort in the late afternoon when the red laterite stone glows intensely against the crashing blue surf.",
    "heroImage": "https://images.unsplash.com/photo-1512343800234-840322ee814a?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_bek_1",
        "name": "Bekal Fort Rampart Walk & Observation Tower",
        "category": "Culture",
        "cost": 50,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk the sea bastion walls and climb the central gun-mount tower overlooking the sea."
      },
      {
        "id": "act_bek_2",
        "name": "Kappil Beach & Estuary Serenity",
        "category": "Beach",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Stroll along golden sands where the serene backwater river meets the ocean."
      },
      {
        "id": "act_bek_3",
        "name": "Valiyaparamba Backwater Country Boat Cruise",
        "category": "Nature",
        "cost": 1200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Drift through tranquil coconut island canals untouched by mass tourism."
      }
    ]
  },
  {
    "id": "dest_mysore_kabini",
    "name": "Mysore & Kabini, Karnataka",
    "country": "India",
    "stateOrRegion": "Karnataka",
    "regionType": "South India (Royalty & Wildlife)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Nature",
      "Food"
    ],
    "tags": [
      "Mysore Palace",
      "Kabini Safari",
      "Black Panther",
      "Silk & Sandalwood",
      "Brindavan Gardens"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2400,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 5,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "solo",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Warm Heritage & River Valley",
    "majorAttractions": [
      "Mysore Palace",
      "Chamundi Hill",
      "Kabini River Safari",
      "Devaraja Market",
      "Somnathapura Keshava Temple"
    ],
    "cuisineHighlights": "Mysore Pak, Mylari butter masala dosa, Mysore rasam, and filter coffee",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive",
      "flight"
    ],
    "description": "Royal capital of the Wodeyars combined with the legendary Kabini jungle reserve, celebrated for tigers, leopards, and herds of elephants.",
    "travelTips": "Sunday evenings at 7:00 PM the Mysore Palace illuminates with 97,000 golden incandescent bulbs—an unforgettable sight.",
    "heroImage": "https://images.unsplash.com/photo-1600100397608-f010f4439066?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_mys_1",
        "name": "Mysore Palace Royal Stateroom Tour",
        "category": "Culture",
        "cost": 100,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Admire stained glass ceilings, silver thrones, and grand royal durbar halls."
      },
      {
        "id": "act_mys_2",
        "name": "Kabini Jungle Safari (Nagarhole)",
        "category": "Nature",
        "cost": 2200,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Track leopards, sloth bears, and the elusive black panther along the Kabini riverbanks."
      },
      {
        "id": "act_mys_3",
        "name": "Devaraja Heritage Bazaar & Perfume Walk",
        "category": "Food",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Wander vibrant alleys filled with conical piles of fragrant kumkum and Mysore sandalwood oil."
      }
    ]
  },
  {
    "id": "dest_dandeli",
    "name": "Dandeli & Kali River, Karnataka",
    "country": "India",
    "stateOrRegion": "Karnataka",
    "regionType": "South India (Rainforest / River)",
    "isDomestic": true,
    "category": [
      "Adventure",
      "Nature"
    ],
    "tags": [
      "White Water Rafting",
      "Kali River",
      "Syntheri Rocks",
      "Hornbill Sanctuary",
      "Jungle Camping"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1800,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "group",
      "solo",
      "couple"
    ],
    "travelPace": "fast",
    "climate": "Dense Canopy Rainforest",
    "majorAttractions": [
      "Kali River Rafting",
      "Syntheri Rock Monolith",
      "Kavala Caves",
      "Shiroli Peak",
      "Dandeli Wildlife Sanctuary"
    ],
    "cuisineHighlights": "North Karnataka jowar rotti, spicy yennegai brinjal curry, and bamboo shoot pickle",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "Karnataka's white water adventure capital set within dense Western Ghats rainforests teeming with hornbills and river rapids.",
    "travelTips": "White water rafting on the Kali River operates subject to dam water discharge; confirm with your campsite in the morning.",
    "heroImage": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_dan_1",
        "name": "Grade 3 Kali River White Water Rafting",
        "category": "Adventure",
        "cost": 1500,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Paddle thrilling Grade II & III rapids guided by certified river rescue guides."
      },
      {
        "id": "act_dan_2",
        "name": "Syntheri Rocks Monolith Trek",
        "category": "Nature",
        "cost": 100,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Hike down to the 300-foot volcanic granite hollowed out by crashing river torrents."
      },
      {
        "id": "act_dan_3",
        "name": "Hornbill Canopy Birding & Kayaking",
        "category": "Nature",
        "cost": 600,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Glide in silent kayaks through misty river bends to spot Great Pied Hornbills nesting."
      }
    ]
  },
  {
    "id": "dest_badami_pattadakal",
    "name": "Badami & Pattadakal, Karnataka",
    "country": "India",
    "stateOrRegion": "Karnataka",
    "regionType": "South India (Chalukyan Heritage)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Spiritual",
      "Adventure"
    ],
    "tags": [
      "Rock-Cut Caves",
      "UNESCO Pattadakal",
      "Aihole Cradle",
      "Red Sandstone",
      "Bhootnath Temple"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1400,
    "minDays": 2,
    "idealDuration": 2,
    "maxDays": 3,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family"
    ],
    "travelPace": "moderate",
    "climate": "Dry Red Sandstone Valleys",
    "majorAttractions": [
      "Badami Cave Temples",
      "Agastya Lake & Bhootnath Temple",
      "UNESCO Pattadakal Complex",
      "Aihole Durga Temple",
      "Badami Fort"
    ],
    "cuisineHighlights": "Jowar rotti thali, shenga (peanut) chutney, girmit snack, and Dharwad peda",
    "accommodationTypes": [
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "The red sandstone canyon capital of the Chalukya dynasty, housing 6th-century rock-cut shrines carved into sheer canyon walls.",
    "travelTips": "Carry plenty of water and wear good grip shoes when climbing the steep sandstone stairs of Badami Fort.",
    "heroImage": "https://images.unsplash.com/photo-1600100397608-f010f4439066?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_bad_1",
        "name": "Badami Rock-Cut Cave Temples Exploration",
        "category": "Culture",
        "cost": 50,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Climb the red cliffs to inspect 6th-century Nataraja reliefs with 81 dancing postures."
      },
      {
        "id": "act_bad_2",
        "name": "Agastya Lake & Bhootnath Temple Sunset",
        "category": "Spiritual",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Sit along the sandstone water steps reflecting 7th-century shrines in golden light."
      },
      {
        "id": "act_bad_3",
        "name": "UNESCO Pattadakal & Aihole Temple Circuit",
        "category": "Culture",
        "cost": 100,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Explore the crucible of Dravidian and Nagara stone temple architecture."
      }
    ]
  },
  {
    "id": "dest_alibaug_murud",
    "name": "Alibaug & Murud-Janjira, Maharashtra",
    "country": "India",
    "stateOrRegion": "Maharashtra",
    "regionType": "West India (Konkan Coast)",
    "isDomestic": true,
    "category": [
      "Beach",
      "Culture",
      "Food"
    ],
    "tags": [
      "Sea Fort",
      "Speedboat",
      "Varsoli Beach",
      "Konkan Seafood",
      "Weekend Gateway"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2200,
    "minDays": 2,
    "idealDuration": 2,
    "maxDays": 3,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "couple",
      "group",
      "family",
      "solo"
    ],
    "travelPace": "relaxed",
    "climate": "Coastal Sea Breeze",
    "majorAttractions": [
      "Murud-Janjira Sea Fort",
      "Varsoli Beach",
      "Kolaba Fort",
      "Nagaon Beach Water Sports",
      "Kanakeshwar Forest"
    ],
    "cuisineHighlights": "Fresh surmai fry, pomfret thali, solkadhi, and spicy Malvani crab masala",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "selfdrive",
      "bus"
    ],
    "description": "Mumbai's favorite seaside retreat with historic ocean fortifications like Murud-Janjira that were never conquered in history.",
    "travelTips": "Take the Ro-Ro ferry from Bhaucha Dhakka (Mumbai) to Mandwa with your car for a scenic 1-hour cruise.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ali_1",
        "name": "Murud-Janjira Sailboat Island Fort Expedition",
        "category": "Culture",
        "cost": 150,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Board traditional wooden sailboats to step inside the impregnable sea citadel."
      },
      {
        "id": "act_ali_2",
        "name": "Nagaon Water Sports & Banana Boat Ride",
        "category": "Adventure",
        "cost": 700,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Enjoy jet ski rides and parasailing above the wide black-sand beaches."
      },
      {
        "id": "act_ali_3",
        "name": "Authentic Konkani Seafood Thali & Solkadhi Dinner",
        "category": "Food",
        "cost": 650,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Feast on crispy rava-fried pomfret and digestive coconut solkadhi."
      }
    ]
  },
  {
    "id": "dest_ajanta_ellora",
    "name": "Ajanta & Ellora Caves (Chhatrapati Sambhajinagar), Maharashtra",
    "country": "India",
    "stateOrRegion": "Maharashtra",
    "regionType": "West India (UNESCO Heritage)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Spiritual"
    ],
    "tags": [
      "Kailash Temple",
      "Monolithic Marvel",
      "Buddhist Frescoes",
      "UNESCO World Heritage",
      "Ancient Engineering"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1700,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "family",
      "couple"
    ],
    "travelPace": "moderate",
    "climate": "Dry Deccan Plateau",
    "majorAttractions": [
      "Ellora Cave 16 (Kailasa Temple)",
      "Ajanta Horseshoe Gorge Frescoes",
      "Daulatabad Fort",
      "Bibi Ka Maqbara",
      "Panchakki"
    ],
    "cuisineHighlights": "Naan Qalia, Hurda roasted sorghum, Puran poli, and fragrant Maharashtrian zunka bhakar",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "The pinnacle of ancient Indian rock architecture, starring the Kailasa temple—the world's largest single rock-cut monolithic structure.",
    "travelTips": "Ajanta Caves are closed on Mondays; Ellora Caves are closed on Tuesdays. Plan your itinerary accordingly.",
    "heroImage": "https://images.unsplash.com/photo-1599818816933-4f90d1655787?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_aje_1",
        "name": "Ellora Kailasa Temple Monolith Inspection",
        "category": "Culture",
        "cost": 100,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Be awed by the 200,000-ton basalt mountain carved from top to bottom by hand."
      },
      {
        "id": "act_aje_2",
        "name": "Ajanta Horseshoe Canyon Fresco Discovery",
        "category": "Culture",
        "cost": 100,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk the 30 Buddhist rock sanctuaries to view 2,000-year-old painted masterpieces."
      },
      {
        "id": "act_aje_3",
        "name": "Daulatabad Fort Maze & Dark Bastion Climb",
        "category": "Adventure",
        "cost": 150,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Climb through the pitch-black subterranean bhul-bhulaiya labyrinth defense system."
      }
    ]
  },
  {
    "id": "dest_matheran",
    "name": "Matheran, Maharashtra",
    "country": "India",
    "stateOrRegion": "Maharashtra",
    "regionType": "West India (Automobile-Free Hill)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tags": [
      "No Cars Allowed",
      "Toy Train",
      "Red Soil Trails",
      "Louisa Point",
      "Valley View"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1600,
    "minDays": 2,
    "idealDuration": 2,
    "maxDays": 3,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Pristine Unpolluted Hill Top",
    "majorAttractions": [
      "Matheran Heritage Toy Train",
      "Panorama Point",
      "Louisa Point",
      "Charlotte Lake",
      "Echo Point"
    ],
    "cuisineHighlights": "Matheran Chikki (fudge), hot vada pav, pithla bhakri, and sweet corn on the cob",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "train",
      "selfdrive",
      "bus"
    ],
    "description": "Asia's only automobile-free hill station where no motor vehicles are permitted, preserving silent red soil trails and pristine air.",
    "travelTips": "Since vehicles are banned past Dasturi Point, pack light backpack luggage so you can walk or hire a horse easily.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_mat_1",
        "name": "Neral to Matheran Heritage Toy Train Ride",
        "category": "Culture",
        "cost": 100,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Chug through sharp horseshoe bends on the narrow-gauge railway."
      },
      {
        "id": "act_mat_2",
        "name": "Louisa Point & Prabal Fort Cliff View Trek",
        "category": "Nature",
        "cost": 0,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Gaze down into the 2,500-foot sheer abyss of the Western Ghats plateau."
      },
      {
        "id": "act_mat_3",
        "name": "Charlotte Lake Forest Stroll & Chikki Shopping",
        "category": "Food",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Relax by the tranquil dam waters and buy freshly prepared hazelnut chikki."
      }
    ]
  },
  {
    "id": "dest_pushkar_ajmer",
    "name": "Pushkar & Ajmer, Rajasthan",
    "country": "India",
    "stateOrRegion": "Rajasthan",
    "regionType": "North India (Desert & Sacred)",
    "isDomestic": true,
    "category": [
      "Spiritual",
      "Culture",
      "Food"
    ],
    "tags": [
      "Brahma Temple",
      "Sacred Lake Ghats",
      "Camel Fair",
      "Ajmer Sharif Dargah",
      "Desert Sunset"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1450,
    "minDays": 2,
    "idealDuration": 2,
    "maxDays": 3,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group",
      "family"
    ],
    "travelPace": "relaxed",
    "climate": "Dry Desert Oasis",
    "majorAttractions": [
      "Brahma Temple Pushkar",
      "Pushkar Lake 52 Ghats",
      "Ajmer Sharif Dargah",
      "Savitri Temple Hill",
      "Varaha Temple"
    ],
    "cuisineHighlights": "Pushkar malpua with rabdi, falafel rolls, lassi in clay kulhads, and dal baati churma",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "A mystical holy lakeside oasis surrounded by the Thar desert sands, housing the world's rarest consecrated temple to Lord Brahma.",
    "travelTips": "Climb the Savitri Temple steps at 5:30 AM (or take the ropeway) for a staggering sunrise over the entire Pushkar desert basin.",
    "heroImage": "https://images.unsplash.com/photo-1599818816933-4f90d1655787?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_pus_1",
        "name": "Pushkar Lake Evening Maha Aarti",
        "category": "Spiritual",
        "cost": 0,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Witness hundreds of clay oil lamps float across the sacred 52 bathing ghats."
      },
      {
        "id": "act_pus_2",
        "name": "Savitri Temple Cable Car Sunrise Ascent",
        "category": "Adventure",
        "cost": 150,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Take the ropeway up Ratnagiri Hill for panoramic sunrise desert vistas."
      },
      {
        "id": "act_pus_3",
        "name": "Halwai Lane Hot Malpua Tasting & Ajmer Dargah",
        "category": "Food",
        "cost": 200,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Sample golden rabdi malpuas in Pushkar bazaar and explore the Sufi shrine."
      }
    ]
  },
  {
    "id": "dest_mount_abu",
    "name": "Mount Abu, Rajasthan",
    "country": "India",
    "stateOrRegion": "Rajasthan",
    "regionType": "North India (Aravalli Hills)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Nature",
      "Spiritual"
    ],
    "tags": [
      "Dilwara Marble Temples",
      "Nakki Lake",
      "Guru Shikhar Peak",
      "Only Hill Station in Rajasthan",
      "Sunset Point"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 1900,
    "minDays": 2,
    "idealDuration": 2,
    "maxDays": 3,
    "bestMonths": [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "solo"
    ],
    "travelPace": "relaxed",
    "climate": "Pleasant Mountain Oasis",
    "majorAttractions": [
      "Dilwara Jain Marble Temples",
      "Nakki Lake",
      "Guru Shikhar Highest Peak",
      "Achalgarh Fort",
      "Trevor's Crocodile Tank"
    ],
    "cuisineHighlights": "Rajasthani gatte ki sabzi, Dal baati, rabdi kulfi, and soft Gujarati snacks",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "Rajasthan's only hill station, set in the rugged Aravallis and famed for the Dilwara Temples—the world's most intricate marble carvings.",
    "travelTips": "Photography is strictly forbidden inside Dilwara Temples; hire an authorized temple guide to understand the mind-boggling marble lace work.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_abu_1",
        "name": "Dilwara Temple Marble Intricacy Exploration",
        "category": "Culture",
        "cost": 50,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Marvel at marble ceilings carved so thin they appear translucent in the sun."
      },
      {
        "id": "act_abu_2",
        "name": "Nakki Lake Boating & Toad Rock Climb",
        "category": "Nature",
        "cost": 200,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Paddle across the mythical holy lake created by gods scratching with fingernails."
      },
      {
        "id": "act_abu_3",
        "name": "Guru Shikhar Summit Expedition",
        "category": "Adventure",
        "cost": 0,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Drive up to the highest peak in Rajasthan at 5,650 feet overlooking the plains."
      }
    ]
  },
  {
    "id": "dest_dalhousie_khajjiar",
    "name": "Dalhousie & Khajjiar, Himachal Pradesh",
    "country": "India",
    "stateOrRegion": "Himachal Pradesh",
    "regionType": "North India (Himalayas)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tags": [
      "Mini Switzerland",
      "Cedar Meadows",
      "Dainkund Peak",
      "Colonial Churches",
      "Panchpula"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2100,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "suitableTravelers": [
      "couple",
      "family",
      "solo"
    ],
    "travelPace": "relaxed",
    "climate": "Alpine Pine Forests",
    "majorAttractions": [
      "Khajjiar Meadow Lake",
      "Dainkund Peak Trek",
      "Kalatop Wildlife Sanctuary",
      "St. John's Church",
      "Panchpula Cascades"
    ],
    "cuisineHighlights": "Himachali Madra, Siddu with ghee, spicy Tudkiya Bhath, and Tibetan momos",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "bus",
      "selfdrive",
      "train"
    ],
    "description": "Charming colonial retreat surrounded by five pine-covered hills, featuring the saucer-shaped alpine meadow of Khajjiar.",
    "travelTips": "Trek up Dainkund Peak (Singing Hill) for breathtaking uninterrupted views of the Pir Panjal mountain range.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_dal_1",
        "name": "Khajjiar Pine Meadow & Zorbing",
        "category": "Nature",
        "cost": 300,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk the emerald saucer meadow surrounded by towering deodar trees."
      },
      {
        "id": "act_dal_2",
        "name": "Dainkund Peak Ridge Hike",
        "category": "Adventure",
        "cost": 0,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Hike along the windy mountain ridge to the high Pholani Devi temple."
      },
      {
        "id": "act_dal_3",
        "name": "Kalatop Forest Nature Walk & Himachali Food",
        "category": "Food",
        "cost": 100,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Spot barking deer and feast on traditional Siddu buns soaked in local ghee."
      }
    ]
  },
  {
    "id": "dest_bir_billing",
    "name": "Bir Billing, Himachal Pradesh",
    "country": "India",
    "stateOrRegion": "Himachal Pradesh",
    "regionType": "North India (Paragliding Capital)",
    "isDomestic": true,
    "category": [
      "Adventure",
      "Spiritual",
      "Culture"
    ],
    "tags": [
      "World Cup Paragliding",
      "Tibetan Monasteries",
      "Tea Gardens",
      "Cafe Culture",
      "Dhauladhar Range"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2200,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun"
    ],
    "suitableTravelers": [
      "solo",
      "group",
      "couple"
    ],
    "travelPace": "fast",
    "climate": "Crisp High Mountain Air",
    "majorAttractions": [
      "Billing Paragliding Take-off Site",
      "Chokling Tibetan Monastery",
      "Dharmalaya Institute",
      "Bir Tea Factory",
      "Landing Site Sunset"
    ],
    "cuisineHighlights": "Thukpa, Tibetan Tingmo, wood-fired artisan pizza, and organic Kangra green tea",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "bus",
      "selfdrive",
      "train"
    ],
    "description": "The Paragliding Capital of India and host of the World Cup, pairing adrenaline thermals with peaceful Tibetan Buddhist gompas.",
    "travelTips": "October and November offer the most reliable thermals and clearest views for tandem paragliding flights.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_bir_1",
        "name": "Tandem Paragliding Flight from Billing (8,000 ft)",
        "category": "Adventure",
        "cost": 3000,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Soar with eagles across the Kangra Valley and touch down at Bir landing grounds."
      },
      {
        "id": "act_bir_2",
        "name": "Chokling Monastery Tibetan Chanting",
        "category": "Spiritual",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Listen to resonant deep-throat chanting of monks beneath massive Padmasambhava statues."
      },
      {
        "id": "act_bir_3",
        "name": "Bir Colony Bohemian Cafe Crawl",
        "category": "Food",
        "cost": 500,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Sample organic sourdough bakery items and fresh Himalayan herbal brews."
      }
    ]
  },
  {
    "id": "dest_tirthan_jibhi",
    "name": "Tirthan Valley & Jibhi, Himachal Pradesh",
    "country": "India",
    "stateOrRegion": "Himachal Pradesh",
    "regionType": "North India (Eco-Valley)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure"
    ],
    "tags": [
      "Great Himalayan National Park",
      "Trout Fishing",
      "Jalori Pass",
      "Serolsar Lake",
      "Traditional Wooden Cottages"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 1850,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 5,
    "bestMonths": [
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Sep",
      "Oct",
      "Nov"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Pristine Alpine River Valley",
    "majorAttractions": [
      "Great Himalayan National Park (UNESCO)",
      "Jalori Pass (10,800 ft)",
      "Serolsar Lake",
      "Chehni Kothi Tower",
      "Chhoie Waterfall"
    ],
    "cuisineHighlights": "Pan-fried Himalayan rainbow trout, red rice, lingad (fiddlehead fern) pickle, and local apricot jams",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "bus",
      "selfdrive"
    ],
    "description": "An untouched eco-haven flanking the crystal-clear Tirthan River, ideal for wild trout angling and serene alpine hikes.",
    "travelTips": "Visit Chehni Kothi to see the remarkable 1,500-year-old 10-story earthquake-resistant stone-and-timber defensive tower.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_tir_1",
        "name": "Jalori Pass to Serolsar Lake Alpine Trek",
        "category": "Adventure",
        "cost": 200,
        "durationHours": 5,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Trek through dense oak and rhododendron forests to the emerald mountain lake."
      },
      {
        "id": "act_tir_2",
        "name": "Tirthan River Angling & Chhoie Waterfall Walk",
        "category": "Nature",
        "cost": 600,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Angle for wild brown trout and cool off beneath mossy mountain falls."
      },
      {
        "id": "act_tir_3",
        "name": "Chehni Kothi Ancient Timber Tower Hike",
        "category": "Culture",
        "cost": 100,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Hike up apple orchards to see the tallest historic wooden tower in the Western Himalayas."
      }
    ]
  },
  {
    "id": "dest_mussoorie_dhanaulti",
    "name": "Mussoorie & Dhanaulti, Uttarakhand",
    "country": "India",
    "stateOrRegion": "Uttarakhand",
    "regionType": "North India (Garhwal Hills)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Culture",
      "Food"
    ],
    "tags": [
      "Queen of the Hills",
      "Kempty Falls",
      "George Everest Peak",
      "Dhanaulti Eco-Park",
      "Mall Road"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2300,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "solo",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Crisp Garhwal Hills",
    "majorAttractions": [
      "Gun Hill",
      "Sir George Everest House",
      "Kempty Falls",
      "Dhanaulti Eco-Park",
      "Camel's Back Road"
    ],
    "cuisineHighlights": "Garhwali Kafuli, Chainsoo, steaming momos, and hot apple cider",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive",
      "flight"
    ],
    "description": "The classic colonial hill station overlooking the Doon Valley, leading to the dense deodar tranquility of Dhanaulti.",
    "travelTips": "Hike up to Sir George Everest's estate for sunset—the view of the snowbound peaks on one side and the Doon lights on the other is legendary.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_mus_1",
        "name": "George Everest Peak Sunset Walk",
        "category": "Nature",
        "cost": 0,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Hike the scenic ridge of the historic surveyor's home with 360-degree views."
      },
      {
        "id": "act_mus_2",
        "name": "Dhanaulti Deodar Forest Eco-Park Stroll",
        "category": "Nature",
        "cost": 100,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Morning",
        "description": "Wander beneath 100-foot ancient cedar canopies in peaceful stillness."
      },
      {
        "id": "act_mus_3",
        "name": "Mussoorie Mall Road Heritage Walk & Bakery",
        "category": "Food",
        "cost": 300,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Browse vintage colonial bookstores and sample warm apple crumbles."
      }
    ]
  },
  {
    "id": "dest_valley_of_flowers",
    "name": "Valley of Flowers & Hemkund Sahib, Uttarakhand",
    "country": "India",
    "stateOrRegion": "Uttarakhand",
    "regionType": "North India (UNESCO Himalayan Reserve)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure",
      "Spiritual"
    ],
    "tags": [
      "UNESCO World Heritage",
      "Wildflowers",
      "Hemkund High Lake",
      "Govindghat Trek",
      "Himalayan Flora"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2200,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 6,
    "bestMonths": [
      "Jul",
      "Aug",
      "Sep"
    ],
    "suitableTravelers": [
      "solo",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Alpine Monsoon Flora",
    "majorAttractions": [
      "Valley of Flowers Biosphere",
      "Hemkund Sahib Gurudwara (14,200 ft)",
      "Pushpawati River",
      "Ghangaria Base",
      "Bhyundar Valley"
    ],
    "cuisineHighlights": "Hot langar dal and halwa at Hemkund, piping hot maggi, and ginger lemon honey tea",
    "accommodationTypes": [
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "bus",
      "selfdrive"
    ],
    "description": "A UNESCO high-altitude wonderland bursting into hundreds of endemic alpine wildflower blooms during the Himalayan monsoon.",
    "travelTips": "Only open from June through October. Late July to late August is the pinnacle for peak floral blossoming.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_vof_1",
        "name": "Valley of Flowers Botanical Expedition",
        "category": "Nature",
        "cost": 300,
        "durationHours": 6,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Hike through endless carpets of blue poppies, brahmakamal, and orchids."
      },
      {
        "id": "act_vof_2",
        "name": "Hemkund Sahib High Altitude Glacial Lake Trek",
        "category": "Spiritual",
        "cost": 0,
        "durationHours": 7,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Climb to the holy Sikh glacial tarn at 14,200 feet surrounded by 7 snowy peaks."
      },
      {
        "id": "act_vof_3",
        "name": "Pushpawati River Gorge Trail",
        "category": "Adventure",
        "cost": 0,
        "durationHours": 4,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Follow roaring glacial torrents through rugged Himalayan canyon paths."
      }
    ]
  },
  {
    "id": "dest_darjeeling",
    "name": "Darjeeling & Kalimpong, West Bengal",
    "country": "India",
    "stateOrRegion": "West Bengal",
    "regionType": "East India (Himalayan Tea Hills)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Culture",
      "Food"
    ],
    "tags": [
      "Kanchenjunga Sunrise",
      "UNESCO Toy Train",
      "Darjeeling Tea",
      "Tiger Hill",
      "Batasia Loop"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2000,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 5,
    "bestMonths": [
      "Mar",
      "Apr",
      "May",
      "Oct",
      "Nov",
      "Dec"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "solo",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Cool Mountain Fog & Sunrise",
    "majorAttractions": [
      "Tiger Hill (Sunrise over Kanchenjunga)",
      "DHR Steam Toy Train & Batasia Loop",
      "Happy Valley Tea Estate",
      "Himalayan Mountaineering Institute",
      "Peace Pagoda"
    ],
    "cuisineHighlights": "First-flush Darjeeling champagne tea, steam momos with spicy drey chilli chutney, thukpa, and churpi",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "Queen of the Hills commanding vistas of Mount Kanchenjunga (world's 3rd highest peak), world-renowned tea gardens, and the iconic steam toy train.",
    "travelTips": "Head to Tiger Hill by 4:00 AM on clear autumn mornings to see the first gold rays hit Kanchenjunga's summits.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_dar_1",
        "name": "Tiger Hill Sunrise over Mount Kanchenjunga",
        "category": "Nature",
        "cost": 150,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Watch twin peaks illuminate in dazzling crimson and gold rays."
      },
      {
        "id": "act_dar_2",
        "name": "UNESCO Steam Heritage Joyride across Batasia Loop",
        "category": "Culture",
        "cost": 1200,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Ride the original coal-fired toy train through spiraling mountain loops."
      },
      {
        "id": "act_dar_3",
        "name": "Happy Valley Tea Tasting & Estate Walk",
        "category": "Food",
        "cost": 250,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Pluck tender tea shoots and sip coveted muscatel first-flush teas."
      }
    ]
  },
  {
    "id": "dest_tawang",
    "name": "Tawang & Sela Pass, Arunachal Pradesh",
    "country": "India",
    "stateOrRegion": "Arunachal Pradesh",
    "regionType": "Northeast India (Eastern Himalayas)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Adventure",
      "Spiritual"
    ],
    "tags": [
      "Tawang Monastery",
      "Sela Pass Lake",
      "Indo-China Border",
      "Bum La Pass",
      "Monpa Culture"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2400,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 7,
    "bestMonths": [
      "Mar",
      "Apr",
      "May",
      "Sep",
      "Oct",
      "Nov"
    ],
    "suitableTravelers": [
      "solo",
      "group",
      "couple"
    ],
    "travelPace": "fast",
    "climate": "High Altitude Glacial Pass",
    "majorAttractions": [
      "Tawang Monastery (India's Largest)",
      "Sela Pass (13,700 ft) & Sela Lake",
      "Bum La Pass Border",
      "Madhuri Lake (Sangetsar)",
      "Nuranang Falls (Jang)"
    ],
    "cuisineHighlights": "Zan porridge, Gyapa Khazi, butter tea, Momos with local chili paste, and Thukpa",
    "accommodationTypes": [
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "selfdrive",
      "bus"
    ],
    "description": "Land of the dawn-lit mountains holding India's largest Buddhist monastery and dramatic high glacial passes along the Indo-Tibet frontier.",
    "travelTips": "Indian tourists need an Inner Line Permit (ILP); foreign tourists require a Protected Area Permit (PAP). Arrange beforehand.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_taw_1",
        "name": "Tawang Monastery 400-Year Heritage Tour",
        "category": "Spiritual",
        "cost": 50,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Explore the fortified monastery housing rare Buddhist manuscripts and gold statues."
      },
      {
        "id": "act_taw_2",
        "name": "Sela Pass & Frozen Paradise Lake Crossing",
        "category": "Adventure",
        "cost": 0,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Cross the windswept 13,700-foot gateway adorned with hundreds of fluttering prayer flags."
      },
      {
        "id": "act_taw_3",
        "name": "Sangetsar Lake (Madhuri Lake) & Jang Falls",
        "category": "Nature",
        "cost": 300,
        "durationHours": 4,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Gaze at dead tree trunks rising from pristine mountain waters created by an earthquake."
      }
    ]
  },
  {
    "id": "dest_north_sikkim",
    "name": "Lachung & Yumthang Valley, North Sikkim",
    "country": "India",
    "stateOrRegion": "Sikkim",
    "regionType": "East India (High Himalayas)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure"
    ],
    "tags": [
      "Valley of Flowers",
      "Zero Point Snow",
      "Hot Springs",
      "Yumesamdong",
      "Rhododendrons"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2500,
    "minDays": 3,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Mar",
      "Apr",
      "May",
      "Oct",
      "Nov",
      "Dec"
    ],
    "suitableTravelers": [
      "solo",
      "group",
      "couple"
    ],
    "travelPace": "fast",
    "climate": "Alpine Glacial Snow",
    "majorAttractions": [
      "Yumthang Valley of Flowers",
      "Zero Point (Yumesamdong)",
      "Lachung Monastery",
      "Singba Rhododendron Sanctuary",
      "Yumthang Sulphur Hot Springs"
    ],
    "cuisineHighlights": "Hot Thukpa, beef / pork momos, Gundruk soup, and locally fermented Chhang in bamboo steins",
    "accommodationTypes": [
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "selfdrive",
      "bus"
    ],
    "description": "Surreal alpine sanctuary bordered by Tibetan snow peaks, famous for the Yumthang sanctuary of 24 rhododendron species and year-round snow at Zero Point.",
    "travelTips": "North Sikkim requires specialized permits issued in Gangtok 24 hours prior; keep 4 passport photos handy.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ns_1",
        "name": "Zero Point (15,300 ft) Snow Play Excursion",
        "category": "Adventure",
        "cost": 500,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Stand at the edge of civilian roads amidst year-round powdery snowfields."
      },
      {
        "id": "act_ns_2",
        "name": "Yumthang Valley Rhododendron Sanctuary Walk",
        "category": "Nature",
        "cost": 100,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Walk through vibrant blooming purple and red rhododendron forests."
      },
      {
        "id": "act_ns_3",
        "name": "Lachung Village Traditional Homestay Experience",
        "category": "Culture",
        "cost": 0,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Dine around the kitchen hearth with warm Sikkimese hosts sipping butter tea."
      }
    ]
  },
  {
    "id": "dest_dzukou_valley",
    "name": "Dzukou Valley & Kohima, Nagaland",
    "country": "India",
    "stateOrRegion": "Nagaland",
    "regionType": "Northeast India (Rugged Highlands)",
    "isDomestic": true,
    "category": [
      "Adventure",
      "Nature",
      "Culture"
    ],
    "tags": [
      "Dzukou Lily",
      "Valley of Celestial Flowers",
      "Hornbill Festival",
      "Naga Heritage",
      "Backpacking Trek"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1600,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 5,
    "bestMonths": [
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "suitableTravelers": [
      "solo",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Highland Mist Valleys",
    "majorAttractions": [
      "Dzukou Valley Trek & Caves",
      "Kohima War Cemetery",
      "Kisama Heritage Village (Hornbill Site)",
      "Khonoma Green Village",
      "Nagaland State Museum"
    ],
    "cuisineHighlights": "Smoked pork with bamboo shoots, Raja Mircha (Ghost pepper) chutney, boiled greens, and sticky rice",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay"
    ],
    "transportOptions": [
      "bus",
      "selfdrive"
    ],
    "description": "The emerald dreamscape on the border of Nagaland and Manipur, featuring unique rolling dwarf bamboo knolls and rare Dzukou lilies.",
    "travelTips": "December first week hosts the world-famous Hornbill Festival in Kisama, showcasing the vibrant traditions of all 17 Naga tribes.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_dzu_1",
        "name": "Dzukou Valley Rim Hike & Cave Camp",
        "category": "Adventure",
        "cost": 400,
        "durationHours": 6,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Trek up through dense jungle canopy into the mystical carpeted rolling hills."
      },
      {
        "id": "act_dzu_2",
        "name": "Khonoma Asia's First Green Eco-Village Tour",
        "category": "Culture",
        "cost": 300,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Learn how Angami warriors conserved forests and defeated British forces."
      },
      {
        "id": "act_dzu_3",
        "name": "Kohima WWII Commonwealth War Memorial Walk",
        "category": "Culture",
        "cost": 0,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Read the stirring Kohima Epitaph on the tennis court battlefield."
      }
    ]
  },
  {
    "id": "dest_khajuraho_panna",
    "name": "Khajuraho & Panna Tiger Reserve, Madhya Pradesh",
    "country": "India",
    "stateOrRegion": "Madhya Pradesh",
    "regionType": "Central India (UNESCO Heritage & Wildlife)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Nature",
      "Spiritual"
    ],
    "tags": [
      "UNESCO World Heritage",
      "Erotic Temples",
      "Panna Tigers",
      "Ken River Gharial",
      "Chandela Art"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2100,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "couple",
      "solo",
      "family"
    ],
    "travelPace": "moderate",
    "climate": "Central Indian Plains",
    "majorAttractions": [
      "Western Group of Khajuraho Temples",
      "Kandariya Mahadeva Temple",
      "Panna National Park Jungle Safari",
      "Raneh Falls Canyon",
      "Pandav Caves"
    ],
    "cuisineHighlights": "Bhopali Rogan Josh, Dal Bafla with ghee, Malpua, and fresh sugarcane juice",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "Sensuous sandstone masterpieces carved by Chandela kings alongside the pristine Ken River gorge and Panna tiger habitat.",
    "travelTips": "Visit Raneh Falls (crystalline granite canyon) in the late afternoon for dramatic pink and green rock reflections.",
    "heroImage": "https://images.unsplash.com/photo-1600100397608-f010f4439066?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_kha_1",
        "name": "Western Temple Group Architectural Walk",
        "category": "Culture",
        "cost": 100,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Inspect the breathtaking symmetry of Kandariya Mahadeva temple."
      },
      {
        "id": "act_kha_2",
        "name": "Panna Tiger Reserve Jeep Safari",
        "category": "Nature",
        "cost": 2000,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Spot Royal Bengal tigers, leopards, and crocodiles along the pristine Ken river."
      },
      {
        "id": "act_kha_3",
        "name": "Raneh Falls Crystalline Granite Canyon Excursion",
        "category": "Nature",
        "cost": 200,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Marvel at 30-meter-deep volcanic rock gorges formed by ancient lava flows."
      }
    ]
  },
  {
    "id": "dest_kanha_bandhavgarh",
    "name": "Kanha & Bandhavgarh, Madhya Pradesh",
    "country": "India",
    "stateOrRegion": "Madhya Pradesh",
    "regionType": "Central India (Tiger Territory)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Adventure"
    ],
    "tags": [
      "Jungle Book Forest",
      "Highest Tiger Density",
      "Barasingha Swamp Deer",
      "Sal Forests",
      "Open Jeep Safaris"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 3600,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 5,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "solo",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Central Sal & Bamboo Forests",
    "majorAttractions": [
      "Kanha Meadows Safari",
      "Bandhavgarh Fort Hill",
      "Barasingha Breeding Reserve",
      "Bamni Dadar Sunset Point",
      "Tribal Baiga Villages"
    ],
    "cuisineHighlights": "Mawa bati, Bhutte ka Kees, spicy rustic chicken curry, and fresh tandoori roti",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "selfdrive"
    ],
    "description": "The real-life inspiration for Rudyard Kipling's Jungle Book and India's finest wildlife sanctuaries boasting the highest wild tiger density.",
    "travelTips": "Safari permits book out 90 days in advance on the MP Forest portal; book early to secure core zones like Tala and Mukki.",
    "heroImage": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_kan_1",
        "name": "Bandhavgarh Core Zone Tiger Safari",
        "category": "Nature",
        "cost": 2600,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Track Royal Bengal tigers in open 4x4 Gypsies across ancient ruins."
      },
      {
        "id": "act_kan_2",
        "name": "Kanha Meadow Barasingha & Gaur Safari",
        "category": "Nature",
        "cost": 2400,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Witness herds of hardground swamp deer saved from extinction in golden grasslands."
      },
      {
        "id": "act_kan_3",
        "name": "Indigenous Baiga Tribal Village Cultural Interaction",
        "category": "Culture",
        "cost": 400,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Learn centuries-old medicinal plant knowledge and traditional forest folklore."
      }
    ]
  },
  {
    "id": "dest_gir_somnath",
    "name": "Gir National Park & Somnath, Gujarat",
    "country": "India",
    "stateOrRegion": "Gujarat",
    "regionType": "West India (Lions & Coastal Shrine)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Spiritual",
      "Culture"
    ],
    "tags": [
      "Asiatic Lions Only Home",
      "First Jyotirlinga",
      "Arabian Sea Coast",
      "Maldhari Tribals",
      "Deciduous Teak Forests"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2200,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "family",
      "solo",
      "couple"
    ],
    "travelPace": "moderate",
    "climate": "Dry Deciduous & Coastal Sea",
    "majorAttractions": [
      "Sasan Gir Lion Safari",
      "Somnath Temple by the Ocean",
      "Devalia Safari Park",
      "Kamleshwar Dam",
      "Triveni Sangam Somnath"
    ],
    "cuisineHighlights": "Gujarati Kathiyawadi thali, Sev tameta, Bajra no rotlo with white butter and jaggery",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "bus",
      "selfdrive"
    ],
    "description": "The sole wild refuge on planet Earth for the majestic Asiatic Lion, paired with the legendary seaside temple of Somnath.",
    "travelTips": "Gir Park closes from June 16 to October 15 during the monsoon mating season; plan between November and March.",
    "heroImage": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_gir_1",
        "name": "Gir Forest Open Gypsy Lion Tracking",
        "category": "Nature",
        "cost": 2200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Observe Asiatic lion prides resting in dry teak thickets with local naturalists."
      },
      {
        "id": "act_gir_2",
        "name": "Somnath Temple Evening Light & Sound on Sea Shore",
        "category": "Spiritual",
        "cost": 50,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Listen to ocean waves crash against the temple walls during the devotional aarti."
      },
      {
        "id": "act_gir_3",
        "name": "Kathiyawadi Rustic Dinner & Maldhari Settlement",
        "category": "Food",
        "cost": 350,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Savor hot bajra rotlo, ringna no olo (smoked eggplant), and fresh chaas."
      }
    ]
  },
  {
    "id": "dest_puri_konark",
    "name": "Puri & Konark Sun Temple, Odisha",
    "country": "India",
    "stateOrRegion": "Odisha",
    "regionType": "East India (Golden Triangle Coast)",
    "isDomestic": true,
    "category": [
      "Culture",
      "Spiritual",
      "Beach"
    ],
    "tags": [
      "UNESCO Sun Temple",
      "Jagannath Temple",
      "Chilika Lake Dolphins",
      "Golden Beach",
      "Sand Art"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1550,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "family",
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Breezy Bay of Bengal Coast",
    "majorAttractions": [
      "Konark Sun Temple (UNESCO Chariot)",
      "Jagannath Temple Puri",
      "Puri Golden Beach (Blue Flag)",
      "Chilika Lake Irrawaddy Dolphins",
      "Raghurajpur Heritage Craft Village"
    ],
    "cuisineHighlights": "Jagannath Mahaprasad (Khaja & Dalma), fresh Chilika crab curry, and Chenna Poda dessert",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "The architectural sun chariot marvel of Konark paired with the sacred coastal rituals of Jagannath Puri and Asia's largest brackish lagoon.",
    "travelTips": "Visit Raghurajpur village (12 km from Puri) to watch master artisans create intricate Pattachitra scroll paintings on palm leaves.",
    "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_pur_1",
        "name": "UNESCO Konark Sun Temple Architectural Exploration",
        "category": "Culture",
        "cost": 50,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Inspect the 24 gigantic carved stone chariot wheels that double as precise sundials."
      },
      {
        "id": "act_pur_2",
        "name": "Chilika Lake Boat Safari for Irrawaddy Dolphins",
        "category": "Nature",
        "cost": 800,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Cruise into the blue lagoon to spot endangered snub-nosed dolphins breaching."
      },
      {
        "id": "act_pur_3",
        "name": "Puri Golden Blue Flag Beach Walk & Mahaprasad",
        "category": "Spiritual",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Enjoy golden sands followed by warm Chenna Poda (baked cheese dessert)."
      }
    ]
  },
  {
    "id": "dest_araku_vizag",
    "name": "Araku Valley & Visakhapatnam, Andhra Pradesh",
    "country": "India",
    "stateOrRegion": "Andhra Pradesh",
    "regionType": "South India (Eastern Ghats Coast)",
    "isDomestic": true,
    "category": [
      "Nature",
      "Beach",
      "Food"
    ],
    "tags": [
      "Borra Caves",
      "Araku Organic Coffee",
      "Submarine Museum",
      "Rishikonda Beach",
      "Vistadome Train"
    ],
    "budgetTier": "Budget",
    "baseDailyCostPerPerson": 1650,
    "minDays": 2,
    "idealDuration": 3,
    "maxDays": 4,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "solo",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Cool Mountain Valleys & Ocean",
    "majorAttractions": [
      "Borra Caves Stalactites",
      "Araku Valley Coffee Plantations",
      "INS Kursura Submarine Museum",
      "Kailasagiri Hilltop",
      "Katiki Waterfalls"
    ],
    "cuisineHighlights": "Araku organic tribal coffee, Bamboo chicken, spicy Andhra Royyala (prawn) curry, and pootharekulu sweet",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "train",
      "flight",
      "bus",
      "selfdrive"
    ],
    "description": "Ride the glass-ceiling Vistadome train through 58 mountain tunnels into the lush coffee valleys of Araku and seaside hills of Vizag.",
    "travelTips": "Book the Vistadome coach on the Vizag-Araku train in advance for unmatched 180-degree glass ceiling mountain vistas.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ara_1",
        "name": "Borra Caves Million-Year Karst Formations",
        "category": "Nature",
        "cost": 100,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Descend into naturally lit limestone caverns filled with towering stalagmites."
      },
      {
        "id": "act_ara_2",
        "name": "Araku Tribal Organic Coffee Estate Walk",
        "category": "Food",
        "cost": 150,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Taste shade-grown Arabica coffee and savor oil-free bamboo-cooked chicken."
      },
      {
        "id": "act_ara_3",
        "name": "INS Kursura Real Submarine Tour on Beach",
        "category": "Culture",
        "cost": 80,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Step inside an authentic decommissioned Soviet-built submarine on the Vizag coast."
      }
    ]
  },
  {
    "id": "dest_lakshadweep",
    "name": "Lakshadweep Islands (Agatti & Bangaram)",
    "country": "India",
    "stateOrRegion": "Lakshadweep",
    "regionType": "Island Atolls",
    "isDomestic": true,
    "category": [
      "Beach",
      "Adventure",
      "Nature"
    ],
    "tags": [
      "Turquoise Lagoons",
      "Coral Reefs",
      "Scuba Diving",
      "Pristine Atolls",
      "Water Sports"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 4200,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 5,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "couple",
      "solo"
    ],
    "travelPace": "relaxed",
    "climate": "Crystal Clear Tropical Atoll",
    "majorAttractions": [
      "Agatti Island Lagoon",
      "Bangaram Uninhabited Atoll",
      "Thinnakara Sandbank",
      "Shipwreck Diving Site",
      "Kalpitti Island Day Cruise"
    ],
    "cuisineHighlights": "Tuna fish curry with coconut milk, Mus Kavaab, Malabar parotta, and fresh coconut water",
    "accommodationTypes": [
      "budget",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "India's crown jewel coral atoll archipelago boasting turquoise translucent lagoons, live coral reefs, and tranquil tropical seclusion.",
    "travelTips": "Entry requires an authorized e-permit issued through certified Lakshadweep travel operators; flight arrives directly at Agatti airport.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_lak_1",
        "name": "Bangaram Atoll Scuba Diving & Sea Turtles",
        "category": "Adventure",
        "cost": 3500,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Dive along vibrant coral drop-offs alongside sea turtles and manta rays."
      },
      {
        "id": "act_lak_2",
        "name": "Glass-Bottom Boat Lagoon Cruise",
        "category": "Nature",
        "cost": 800,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Gaze down into neon-blue shallow waters populated by clownfish and sea anemones."
      },
      {
        "id": "act_lak_3",
        "name": "Thinnakara Sunset Sandbank Catamaran Sail",
        "category": "Beach",
        "cost": 1200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Sail to an uninhabited spit of pure white sand as the sun sets over the Indian Ocean."
      }
    ]
  },
  {
    "id": "dest_hanoi_halong",
    "name": "Hanoi & Ha Long Bay, Vietnam",
    "country": "Vietnam",
    "stateOrRegion": "Northern Vietnam",
    "regionType": "Southeast Asia (Limestone Karsts)",
    "isDomestic": false,
    "category": [
      "Nature",
      "Culture",
      "Food"
    ],
    "tags": [
      "UNESCO World Heritage",
      "Karst Islands",
      "Old Quarter",
      "Egg Coffee",
      "Overnight Cruise"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 3200,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 7,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Emerald Bays & Historic Quarters",
    "majorAttractions": [
      "Ha Long Bay Overnight Cruise",
      "Hanoi Old Quarter 36 Streets",
      "Hoan Kiem Lake & Ngoc Son Temple",
      "Sung Sot (Surprise) Cave",
      "Train Street"
    ],
    "cuisineHighlights": "Pho Bo noodle soup, Bun Cha, Banh Mi baguette, and creamy Vietnamese egg coffee",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Cruise past thousands of towering limestone karst pillars in emerald waters, followed by the buzzing street food culture of ancient Hanoi.",
    "travelTips": "Book a traditional junk cruise with an overnight stay in Bai Tu Long Bay for quieter, less congested waters than central Ha Long.",
    "heroImage": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_han_1",
        "name": "Ha Long Bay Luxury Overnight Junk Cruise",
        "category": "Nature",
        "cost": 4800,
        "durationHours": 8,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Kayak into hidden lagoons beneath sheer limestone pillars and sleep on emerald waters."
      },
      {
        "id": "act_han_2",
        "name": "Hanoi Old Quarter Street Food & Egg Coffee Trail",
        "category": "Food",
        "cost": 600,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Slurp charcoal-grilled pork bun cha and sip rich whipped egg yolk coffee."
      },
      {
        "id": "act_han_3",
        "name": "Sung Sot Cave Stalactite Cavern Discovery",
        "category": "Adventure",
        "cost": 200,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Explore cavernous illuminated limestone chambers soaring high above the bay."
      }
    ]
  },
  {
    "id": "dest_siem_reap",
    "name": "Siem Reap & Angkor Wat, Cambodia",
    "country": "Cambodia",
    "stateOrRegion": "Siem Reap Province",
    "regionType": "Southeast Asia (Khmer Empire)",
    "isDomestic": false,
    "category": [
      "Culture",
      "Spiritual",
      "Adventure"
    ],
    "tags": [
      "Angkor Wat",
      "Ta Prohm Tree Roots",
      "Bayon Smiling Faces",
      "Khmer Heritage",
      "Sunrise Wonder"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 2900,
    "minDays": 3,
    "idealDuration": 4,
    "maxDays": 5,
    "bestMonths": [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family"
    ],
    "travelPace": "moderate",
    "climate": "Tropical Khmer Jungle",
    "majorAttractions": [
      "Angkor Wat Temple Complex",
      "Ta Prohm (Tomb Raider Temple)",
      "Bayon 216 Smiling Stone Faces",
      "Banteay Srei Pink Temple",
      "Pub Street Night Market"
    ],
    "cuisineHighlights": "Fish Amok steamed in banana leaf, Lok Lak beef, Nom Banh Chok, and fresh fruit smoothies",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The world's largest religious monument complex, emerging from jungle vines with colossal smiling stone faces and majestic lotus towers.",
    "travelTips": "Arrive at Angkor Wat by 5:00 AM to secure a spot beside the northern reflection pond for the world-renowned sunrise over the five towers.",
    "heroImage": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ang_1",
        "name": "Angkor Wat Iconic Reflection Sunrise",
        "category": "Culture",
        "cost": 3100,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Watch dawn illuminate the silhouette of the 12th-century Khmer architectural masterpiece."
      },
      {
        "id": "act_ang_2",
        "name": "Ta Prohm Giant Banyan Tree Root Temple",
        "category": "Adventure",
        "cost": 0,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Marvel at gigantic strangler fig roots swallowing ancient sandstone corridor walls."
      },
      {
        "id": "act_ang_3",
        "name": "Bayon Temple 216 Smiling Faces Walk",
        "category": "Spiritual",
        "cost": 0,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Walk among 54 Gothic towers carved with enigmatic smiling bodhisattva faces."
      }
    ]
  },
  {
    "id": "dest_boracay_elnido",
    "name": "Boracay & El Nido, Philippines",
    "country": "Philippines",
    "stateOrRegion": "Visayas & Palawan",
    "regionType": "Southeast Asia (Tropical Archipelago)",
    "isDomestic": false,
    "category": [
      "Beach",
      "Adventure",
      "Nature"
    ],
    "tags": [
      "Powder White Sand",
      "Limestone Lagoons",
      "Island Hopping",
      "Big Lagoon Kayak",
      "Sunset Paraw"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 3600,
    "minDays": 5,
    "idealDuration": 6,
    "maxDays": 8,
    "bestMonths": [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ],
    "suitableTravelers": [
      "couple",
      "solo",
      "group"
    ],
    "travelPace": "relaxed",
    "climate": "Crystal Clear Tropical Paradise",
    "majorAttractions": [
      "Boracay White Beach Station 1-3",
      "El Nido Big Lagoon & Small Lagoon",
      "Nacpan Twin Beach",
      "Willy's Rock",
      "Secret Beach Palawan"
    ],
    "cuisineHighlights": "Chicken Inasal, Lechon pork, Kinilaw ceviche, Halo-Halo shaved ice, and sweet Philippine mangoes",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The gold standard of tropical island beauty: ultra-fine white powder sand on Boracay combined with the soaring karst lagoons of El Nido.",
    "travelTips": "Rent a transparent kayak in El Nido's Big Lagoon to paddle through turquoise saltwater passages flanked by towering 200m limestone cliffs.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_phi_1",
        "name": "El Nido Tour A Island Hopping & Big Lagoon Kayaking",
        "category": "Adventure",
        "cost": 1800,
        "durationHours": 6,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Paddle through emerald karst gaps and snorkel with clownfish in Secret Lagoon."
      },
      {
        "id": "act_phi_2",
        "name": "Boracay Paraw Sunset Sailing",
        "category": "Beach",
        "cost": 800,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Cruise the calm ocean on traditional outrigger sailboats as the sky turns flaming orange."
      },
      {
        "id": "act_phi_3",
        "name": "Nacpan 4km Coconut Coast Scooter Ride",
        "category": "Nature",
        "cost": 400,
        "durationHours": 4,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Ride along endless pristine golden beaches lined with hundreds of coconut palms."
      }
    ]
  },
  {
    "id": "dest_seoul_jeju",
    "name": "Seoul & Jeju Island, South Korea",
    "country": "South Korea",
    "stateOrRegion": "Seoul & Jeju Province",
    "regionType": "East Asia (Hi-Tech & Volcanic)",
    "isDomestic": false,
    "category": [
      "Culture",
      "Nature",
      "Food",
      "Shopping"
    ],
    "tags": [
      "K-Culture",
      "Gyeongbokgung Palace",
      "Jeju Hallasan Volcano",
      "Myeongdong Street Food",
      "Bukchon Hanok"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 4800,
    "minDays": 5,
    "idealDuration": 6,
    "maxDays": 8,
    "bestMonths": [
      "Mar",
      "Apr",
      "May",
      "Sep",
      "Oct",
      "Nov"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Four Season Continental / Island",
    "majorAttractions": [
      "Gyeongbokgung Palace Royal Guard Change",
      "Bukchon Hanok Village",
      "Jeju Seongsan Ilchulbong Crater",
      "N Seoul Tower",
      "Myeongdong Night Market"
    ],
    "cuisineHighlights": "Korean BBQ pork belly (Samgyeopsal), Bibimbap, Tteokbokki, crispy Korean fried chicken with beer, and Kimchi jjigae",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Cutting-edge mega-city brimming with Joseon dynasty palaces and K-pop culture, complemented by the volcanic waterfalls and UNESCO craters of Jeju Island.",
    "travelTips": "Wear a rented traditional Hanbok to enter Gyeongbokgung and Changdeokgung palaces completely free of charge.",
    "heroImage": "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_seo_1",
        "name": "Gyeongbokgung Palace & Hanok Village Walk",
        "category": "Culture",
        "cost": 300,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Watch the royal guard changing ceremony in silk robes and walk historic stone alleyways."
      },
      {
        "id": "act_seo_2",
        "name": "Jeju Seongsan Sunrise Volcanic Tuff Cone Ascent",
        "category": "Nature",
        "cost": 400,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Hike up the dramatic green caldera crater rising directly out of the ocean."
      },
      {
        "id": "act_seo_3",
        "name": "Myeongdong Street Food & Night Market Extravaganza",
        "category": "Food",
        "cost": 900,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Feast on grilled cheese lobster tails, hotteok pancakes, and spicy tteokbokki."
      }
    ]
  },
  {
    "id": "dest_taipei",
    "name": "Taipei & Jiufen, Taiwan",
    "country": "Taiwan",
    "stateOrRegion": "Northern Taiwan",
    "regionType": "East Asia (Modern & Lantern Hills)",
    "isDomestic": false,
    "category": [
      "Food",
      "Culture",
      "Nature"
    ],
    "tags": [
      "Shilin Night Market",
      "Jiufen Spirited Away",
      "Taipei 101",
      "Hot Springs",
      "Tea Houses"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 4200,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 6,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family"
    ],
    "travelPace": "moderate",
    "climate": "Subtropical Mountain Valleys",
    "majorAttractions": [
      "Taipei 101 Observatory",
      "Jiufen Old Street Red Lanterns",
      "Shilin Night Market",
      "National Palace Museum",
      "Beitou Thermal Hot Springs"
    ],
    "cuisineHighlights": "Din Tai Fung Xiao Long Bao (soup dumplings), braised beef noodle soup, boba pearl milk tea, and Lu Rou Fan",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "A culinary wonderland boasting the world's most vibrant night markets, high-speed rail, and the fairytale red-lantern mountain alleyways of Jiufen.",
    "travelTips": "Get an EasyCard at the airport for effortless contactless travel on the clean MRT, city buses, and convenience stores.",
    "heroImage": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_tpe_1",
        "name": "Jiufen Mountain Old Street & Traditional Tea House",
        "category": "Culture",
        "cost": 500,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Wander narrow stairways framed by glowing red paper lanterns overlooking the Pacific."
      },
      {
        "id": "act_tpe_2",
        "name": "Taipei 101 High-Speed Elevator & 360 Observatory",
        "category": "Culture",
        "cost": 1400,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Morning",
        "description": "Shoot up 89 floors in 37 seconds to inspect the massive tuned mass damper ball."
      },
      {
        "id": "act_tpe_3",
        "name": "Shilin & Raohe Night Market Street Feast",
        "category": "Food",
        "cost": 600,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Devour black pepper buns straight from clay tandoor-style ovens and authentic bubble tea."
      }
    ]
  },
  {
    "id": "dest_barcelona_madrid",
    "name": "Barcelona & Madrid, Spain",
    "country": "Spain",
    "stateOrRegion": "Catalonia & Madrid",
    "regionType": "Southern Europe (Iberian)",
    "isDomestic": false,
    "category": [
      "Culture",
      "Food",
      "Beach"
    ],
    "tags": [
      "Sagrada Familia",
      "Gaudí Architecture",
      "Prado Museum",
      "Tapas & Paella",
      "Flamenco"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 6800,
    "minDays": 5,
    "idealDuration": 6,
    "maxDays": 8,
    "bestMonths": [
      "Apr",
      "May",
      "Jun",
      "Sep",
      "Oct"
    ],
    "suitableTravelers": [
      "couple",
      "solo",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Mediterranean Sunny",
    "majorAttractions": [
      "Sagrada Familia Basilica",
      "Park Güell",
      "Prado Museum Madrid",
      "Gothic Quarter Barcelona",
      "Royal Palace of Madrid"
    ],
    "cuisineHighlights": "Seafood Paella, Iberian ham (Jamón Ibérico), Churros con chocolate, Patatas bravas, and Sangria",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The architectural fantasy of Antoni Gaudí and Mediterranean beaches in Barcelona, joined with the grand royal museums and plazas of Madrid.",
    "travelTips": "Sagrada Familia tickets sell out weeks ahead; reserve your morning tower ascent slot well before departure.",
    "heroImage": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_bcn_1",
        "name": "Sagrada Familia Basilica Guided Interior",
        "category": "Culture",
        "cost": 2500,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk through stone tree columns illuminated by radiant stained glass forest sunlight."
      },
      {
        "id": "act_bcn_2",
        "name": "Park Güell Whimsical Mosaic Discovery",
        "category": "Culture",
        "cost": 900,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Gaze at the mosaic salamander and panoramic Mediterranean skyline from Gaudí's curved terrace."
      },
      {
        "id": "act_bcn_3",
        "name": "El Born Tapas Crawl & Authentic Flamenco Show",
        "category": "Food",
        "cost": 2200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Sample Gambas al Ajillo and watch fiery footwork inside an intimate 17th-century courtyard."
      }
    ]
  },
  {
    "id": "dest_amsterdam_bruges",
    "name": "Amsterdam & Bruges, Netherlands & Belgium",
    "country": "Netherlands",
    "stateOrRegion": "North Holland & Flanders",
    "regionType": "Western Europe (Canal Cities)",
    "isDomestic": false,
    "category": [
      "Culture",
      "Food",
      "Nature"
    ],
    "tags": [
      "Canal Cruises",
      "Van Gogh Museum",
      "Medieval Bruges",
      "Bicycle Culture",
      "Tulip Keukenhof"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 7200,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 7,
    "bestMonths": [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ],
    "suitableTravelers": [
      "couple",
      "solo",
      "family"
    ],
    "travelPace": "relaxed",
    "climate": "Maritime Temperate",
    "majorAttractions": [
      "Amsterdam Canal Ring Cruise",
      "Van Gogh Museum",
      "Rijksmuseum",
      "Bruges Medieval Belfry",
      "Keukenhof Tulip Gardens"
    ],
    "cuisineHighlights": "Belgian waffles, artisanal pralines chocolate, Dutch stroopwafels, bitterballen, and frites with mayonnaise",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Gabled 17th-century merchants' mansions leaning over tree-shaded canals in Amsterdam, paired with the fairytale medieval stone bridges of Bruges.",
    "travelTips": "Rent a city bicycle to explore Amsterdam like a local, using the extensive world-class designated bike lane network.",
    "heroImage": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ams_1",
        "name": "Historic Canal Cruise on Open Solar Boat",
        "category": "Culture",
        "cost": 1800,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Glide under stone bridges past leaning canal houses and floating houseboats."
      },
      {
        "id": "act_ams_2",
        "name": "Van Gogh Museum Masterpieces Tour",
        "category": "Culture",
        "cost": 2100,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Gaze at Sunflowers, Almond Blossom, and self-portraits by the Dutch impressionist master."
      },
      {
        "id": "act_ams_3",
        "name": "Bruges Medieval Cobblestone & Belgian Chocolate Trail",
        "category": "Food",
        "cost": 1200,
        "durationHours": 4,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Climb the Belfry tower and taste freshly handcrafted truffles beside the Lake of Love."
      }
    ]
  },
  {
    "id": "dest_london_cotswolds",
    "name": "London & The Cotswolds, United Kingdom",
    "country": "United Kingdom",
    "stateOrRegion": "England",
    "regionType": "Western Europe (Royal & Countryside)",
    "isDomestic": false,
    "category": [
      "Culture",
      "Nature",
      "Food",
      "Shopping"
    ],
    "tags": [
      "Big Ben",
      "Tower Bridge",
      "Honey-Stone Cottages",
      "West End Theatre",
      "British Museum"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 8500,
    "minDays": 5,
    "idealDuration": 6,
    "maxDays": 8,
    "bestMonths": [
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Maritime Countryside & Metropolis",
    "majorAttractions": [
      "Big Ben & Westminster Abbey",
      "Tower of London & Crown Jewels",
      "Cotswolds Honey-Stone Villages",
      "British Museum",
      "London Eye"
    ],
    "cuisineHighlights": "Fish and chips with mushy peas, Traditional Afternoon Tea with clotted cream, Sunday roast with Yorkshire pudding",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Royal landmarks, world-class free national museums, and West End musicals in London, leading into the idyllic thatched villages of the Cotswolds.",
    "travelTips": "National museums in London including the British Museum, National Gallery, and Natural History Museum offer completely free entry.",
    "heroImage": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_lon_1",
        "name": "Tower of London & Crown Jewels History Tour",
        "category": "Culture",
        "cost": 3200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk the 900-year-old fortress with a Yeoman Warder and view the Imperial State Crown."
      },
      {
        "id": "act_lon_2",
        "name": "Cotswolds Quintessential Country Village Day Trip",
        "category": "Nature",
        "cost": 4500,
        "durationHours": 6,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Stroll honey-stone lanes in Castle Combe and Bourton-on-the-Water across bubbling brooks."
      },
      {
        "id": "act_lon_3",
        "name": "Traditional Afternoon Tea & West End Musical",
        "category": "Food",
        "cost": 6000,
        "durationHours": 4,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Delight in warm scones with clotted cream followed by a world-class theatrical performance."
      }
    ]
  },
  {
    "id": "dest_prague_budapest",
    "name": "Prague & Budapest, Czech Republic & Hungary",
    "country": "Czech Republic & Hungary",
    "stateOrRegion": "Central Europe",
    "regionType": "Central Europe (Imperial & Thermal)",
    "isDomestic": false,
    "category": [
      "Culture",
      "Spiritual",
      "Food"
    ],
    "tags": [
      "Charles Bridge",
      "Prague Castle",
      "Széchenyi Thermal Baths",
      "Danube River Cruise",
      "Gothic Spires"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 4900,
    "minDays": 5,
    "idealDuration": 6,
    "maxDays": 8,
    "bestMonths": [
      "Apr",
      "May",
      "Jun",
      "Sep",
      "Oct"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group",
      "family"
    ],
    "travelPace": "moderate",
    "climate": "Continental Historic Rivers",
    "majorAttractions": [
      "Prague Castle & St. Vitus Cathedral",
      "Charles Bridge at Dawn",
      "Széchenyi Thermal Baths Budapest",
      "Hungarian Parliament Building",
      "Old Town Astronomical Clock"
    ],
    "cuisineHighlights": "Czech goulash with bread dumplings, Trdelník chimney cake, Hungarian gulyás soup, and sweet Tokaji wine",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The City of a Hundred Spires paired with the Queen of the Danube, featuring dramatic hilltop castles, cobblestone bridges, and steaming thermal baths.",
    "travelTips": "Walk Charles Bridge at sunrise (6:30 AM) to experience the Gothic statues without daytime pedestrian crowds.",
    "heroImage": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_pra_1",
        "name": "Prague Castle & St. Vitus Cathedral Gothic Walk",
        "category": "Culture",
        "cost": 1200,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Explore the world's largest ancient coherent castle complex overlooking the Vltava river."
      },
      {
        "id": "act_pra_2",
        "name": "Széchenyi Thermal Baths Budapest Relaxation",
        "category": "Spiritual",
        "cost": 2400,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Soak in steaming outdoor mineral thermal pools beneath neo-baroque palatial facades."
      },
      {
        "id": "act_pra_3",
        "name": "Danube Night River Cruise past Illuminated Parliament",
        "category": "Culture",
        "cost": 1800,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Glide on water as the colossal gold-lit Hungarian Parliament reflects on the dark river."
      }
    ]
  },
  {
    "id": "dest_iceland_ringroad",
    "name": "Reykjavik & Golden Circle, Iceland",
    "country": "Iceland",
    "stateOrRegion": "South Iceland",
    "regionType": "Northern Europe (Geothermal & Glacial)",
    "isDomestic": false,
    "category": [
      "Nature",
      "Adventure"
    ],
    "tags": [
      "Northern Lights",
      "Blue Lagoon",
      "Gullfoss Waterfall",
      "Geysir",
      "Black Sand Beach"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 10500,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 7,
    "bestMonths": [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Jun",
      "Jul",
      "Aug"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Subpolar Geothermal Wonder",
    "majorAttractions": [
      "Blue Lagoon Geothermal Spa",
      "Gullfoss Golden Waterfall",
      "Strokkur Spouting Geyser",
      "Reynisfjara Black Sand Beach",
      "Thingvellir National Park"
    ],
    "cuisineHighlights": "Icelandic lamb stew (Kjötsúpa), fresh Atlantic arctic char, Skyr yogurt, and warm cinnamon buns",
    "accommodationTypes": [
      "hostel",
      "budget",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Land of Fire and Ice where roaring volcanic geysers erupt beside thunderous glacial falls, black basalt sand shores, and the ethereal Northern Lights.",
    "travelTips": "Between late September and March, download Aurora forecast apps and head out away from city light pollution on clear nights.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ice_1",
        "name": "Golden Circle (Gullfoss, Geysir & Thingvellir)",
        "category": "Nature",
        "cost": 5500,
        "durationHours": 7,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Watch boiling water erupt 30 meters high and walk between North American & Eurasian tectonic plates."
      },
      {
        "id": "act_ice_2",
        "name": "Blue Lagoon Mineral Thermal Bath Retreat",
        "category": "Nature",
        "cost": 7800,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Float in milky-cyan geothermal waters rich in silica mud and natural salts."
      },
      {
        "id": "act_ice_3",
        "name": "Reynisfjara Basalt Columns & Black Beach Expedition",
        "category": "Adventure",
        "cost": 0,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Marvel at dramatic hexagonal basalt sea stacks hammered by Atlantic waves."
      }
    ]
  },
  {
    "id": "dest_jordan_petra",
    "name": "Petra & Wadi Rum, Jordan",
    "country": "Jordan",
    "stateOrRegion": "Ma'an Governorate",
    "regionType": "Middle East (Ancient Nabataean & Desert)",
    "isDomestic": false,
    "category": [
      "Culture",
      "Adventure",
      "Nature"
    ],
    "tags": [
      "Rose City Petra",
      "The Treasury",
      "Martian Landscape",
      "Bedouin Desert Camp",
      "Dead Sea Float"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 5200,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 6,
    "bestMonths": [
      "Mar",
      "Apr",
      "May",
      "Sep",
      "Oct",
      "Nov"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Dramatic Desert Canyons",
    "majorAttractions": [
      "Petra Treasury (Al-Khazneh)",
      "The Siq Canyon Passage",
      "The Monastery (Ad Deir)",
      "Wadi Rum 4x4 Desert Safari",
      "Dead Sea Salt Float"
    ],
    "cuisineHighlights": "Mansaf (lamb with fermented dried yogurt), grilled Halloumi, fresh warm pita with creamy Hummus, and Bedouin sage tea",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The Rose-Red City carved into rose sandstone canyon walls 2,000 years ago, leading into the reddish Martian desert dunes of Wadi Rum.",
    "travelTips": "Wear sturdy hiking boots; walking through the Siq to the Treasury and hiking up to the Monastery involves over 800 stone steps.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_pet_1",
        "name": "The Siq Gorge Walk & Petra Treasury Reveal",
        "category": "Culture",
        "cost": 5500,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk through a 1.2km towering narrow canyon to emerge in front of the carved Hellenistic facade."
      },
      {
        "id": "act_pet_2",
        "name": "Wadi Rum 4x4 Bedouin Martian Dunes Safari",
        "category": "Adventure",
        "cost": 3800,
        "durationHours": 5,
        "priority": 1,
        "timeSlot": "Afternoon",
        "description": "Race across crimson desert sands and sleep in luxury bubble tents under celestial star fields."
      },
      {
        "id": "act_pet_3",
        "name": "Dead Sea Zero-Gravity Salt Water Float",
        "category": "Nature",
        "cost": 1200,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Cover yourself in mineral mud and float effortlessly on the lowest body of water on Earth."
      }
    ]
  },
  {
    "id": "dest_morocco_marrakech",
    "name": "Marrakech & Sahara Desert, Morocco",
    "country": "Morocco",
    "stateOrRegion": "Marrakech-Safi",
    "regionType": "North Africa (Imperial & Desert)",
    "isDomestic": false,
    "category": [
      "Culture",
      "Adventure",
      "Food",
      "Shopping"
    ],
    "tags": [
      "Jemaa el-Fnaa",
      "Sahara Erg Chebbi Dunes",
      "Bahia Palace",
      "Majorelle Garden",
      "Camel Trek"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 4400,
    "minDays": 5,
    "idealDuration": 6,
    "maxDays": 8,
    "bestMonths": [
      "Mar",
      "Apr",
      "May",
      "Sep",
      "Oct",
      "Nov"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Oasis & High Atlas Mountain Pass",
    "majorAttractions": [
      "Jemaa el-Fnaa Square & Souks",
      "Jardin Majorelle (YSL Garden)",
      "Bahia Palace Zellij Tiles",
      "Erg Chebbi Sahara Dunes",
      "Ait Benhaddou Clay Ksar"
    ],
    "cuisineHighlights": "Slow-cooked lamb tagine with prunes, Chicken pastilla pastry, Couscous royale, and sweet Moroccan mint tea",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "An intoxicating sensory kaleidoscope of labyrinthine medina souks, Yves Saint Laurent cobalt gardens, and golden Sahara camel caravans.",
    "travelTips": "Stay in a traditional authentic Riad inside the historic Medina with an interior garden courtyard for true Moroccan charm.",
    "heroImage": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_mar_1",
        "name": "Marrakech Medina Souk & Bahia Palace Walk",
        "category": "Culture",
        "cost": 400,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Explore intricately carved cedarwood ceilings and haggle for leather slippers and spices."
      },
      {
        "id": "act_mar_2",
        "name": "Sahara Erg Chebbi Sunset Camel Trek & Camp",
        "category": "Adventure",
        "cost": 4500,
        "durationHours": 8,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Ride dromedary camels across 150-meter wind-blown dunes and drum around campfire embers."
      },
      {
        "id": "act_mar_3",
        "name": "Jardin Majorelle & Berber Museum Discovery",
        "category": "Culture",
        "cost": 1200,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Morning",
        "description": "Wander vibrant cobalt-blue villas surrounded by colossal desert cacti and water lilies."
      }
    ]
  },
  {
    "id": "dest_kenya_maasaimara",
    "name": "Maasai Mara National Reserve, Kenya",
    "country": "Kenya",
    "stateOrRegion": "Narok County",
    "regionType": "East Africa (Savannah Wilderness)",
    "isDomestic": false,
    "category": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tags": [
      "Great Migration",
      "Big Five Game",
      "Mara River Crossing",
      "Maasai Warriors",
      "Hot Air Balloon"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 9500,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 6,
    "bestMonths": [
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Jan",
      "Feb"
    ],
    "suitableTravelers": [
      "couple",
      "family",
      "group",
      "solo"
    ],
    "travelPace": "moderate",
    "climate": "Golden Acacia Savannah",
    "majorAttractions": [
      "Mara River Crocodile Crossing",
      "Big Five Wildlife Safaris",
      "Maasai Traditional Manyatta Village",
      "Hot Air Balloon Safari",
      "Oloololo Escarpment"
    ],
    "cuisineHighlights": "Nyama Choma roasted meat, Sukuma Wiki greens, Ugali cornmeal, and freshly brewed Kenyan AA coffee",
    "accommodationTypes": [
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The crown jewel of African wildlife safaris, where over 1.5 million wildebeest plunge across crocodile-filled rivers during the Great Migration.",
    "travelTips": "July through October is prime season to witness the dramatic Great Migration river crossings.",
    "heroImage": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ken_1",
        "name": "Big Five Full-Day Savannah Game Drive",
        "category": "Nature",
        "cost": 6500,
        "durationHours": 7,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Search for prides of black-maned lions, cheetahs on termite mounds, and leopards."
      },
      {
        "id": "act_ken_2",
        "name": "Dawn Hot Air Balloon Safari over Savannah",
        "category": "Adventure",
        "cost": 18000,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Float silently above herds of giraffes and elephants, followed by a champagne breakfast."
      },
      {
        "id": "act_ken_3",
        "name": "Maasai Cultural Village Adumu Jump Dance",
        "category": "Culture",
        "cost": 2000,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Sing with red-robed Maasai moran warriors and learn primitive fire-making skills."
      }
    ]
  },
  {
    "id": "dest_egypt_cairo_nile",
    "name": "Cairo & Nile River Cruise, Egypt",
    "country": "Egypt",
    "stateOrRegion": "Cairo & Luxor",
    "regionType": "North Africa (Pharaonic Heritage)",
    "isDomestic": false,
    "category": [
      "Culture",
      "Spiritual",
      "Adventure"
    ],
    "tags": [
      "Pyramids of Giza",
      "Great Sphinx",
      "Valley of the Kings",
      "Luxor Temple",
      "Nile Felucca"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 4800,
    "minDays": 5,
    "idealDuration": 6,
    "maxDays": 8,
    "bestMonths": [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "solo",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Sunny Dry Desert Valley",
    "majorAttractions": [
      "Great Pyramid of Giza & Sphinx",
      "Grand Egyptian Museum",
      "Valley of the Kings Luxor",
      "Karnak Temple Hypostyle Hall",
      "Nile River Cruise"
    ],
    "cuisineHighlights": "Koshary (lentils, rice, pasta with spiced tomato sauce), Falafel (Ta'ameya), Shawarma, and sweet Baklava",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Stand before the sole surviving wonder of the ancient world at Giza and cruise down the Nile past 3,500-year-old pharaonic temples.",
    "travelTips": "Book a hot air balloon flight over Luxor's West Bank at sunrise for aerial views over Hatshepsut temple and the Valley of the Kings.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_egy_1",
        "name": "Giza Pyramids & Sphinx Ancient Wonders Tour",
        "category": "Culture",
        "cost": 2200,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Stand beneath Khufu's 4,500-year-old stone blocks and ride camels on desert ridges."
      },
      {
        "id": "act_egy_2",
        "name": "Valley of the Kings Pharaonic Tombs Descent",
        "category": "Culture",
        "cost": 2800,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Descend into vivid subterranean tombs with preserved hieroglyphs and astronomical ceilings."
      },
      {
        "id": "act_egy_3",
        "name": "Nile Traditional Felucca Sailboat Sunset",
        "category": "Nature",
        "cost": 800,
        "durationHours": 2,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Drift silently on the tranquil waters of the Nile under traditional triangular sails."
      }
    ]
  },
  {
    "id": "dest_new_york",
    "name": "New York City, United States",
    "country": "United States",
    "stateOrRegion": "New York",
    "regionType": "North America (Mega-Metropolis)",
    "isDomestic": false,
    "category": [
      "Culture",
      "Food",
      "Shopping",
      "Nightlife"
    ],
    "tags": [
      "Times Square",
      "Central Park",
      "Statue of Liberty",
      "Broadway",
      "Skyscrapers"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 9800,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 7,
    "bestMonths": [
      "Apr",
      "May",
      "Jun",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "family",
      "group"
    ],
    "travelPace": "fast",
    "climate": "Iconic Urban Seasons",
    "majorAttractions": [
      "Empire State Building / Summit One",
      "Central Park Stroll",
      "Statue of Liberty & Ellis Island",
      "Broadway Theatre",
      "High Line & Hudson Yards"
    ],
    "cuisineHighlights": "Classic New York slice pizza, hot pastrami on rye at Katz's, toasted bagels with lox and cream cheese, and cheesecake",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The capital of the world: soaring glass canyons, iconic green refuge in Central Park, yellow cabs, world-class theatre, and endless 24/7 energy.",
    "travelTips": "Walk across the Brooklyn Bridge from Brooklyn towards Manhattan around sunset for breathtaking skyline views as city lights turn on.",
    "heroImage": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_nyc_1",
        "name": "Summit One Vanderbilt Glass Mirror Observatory",
        "category": "Culture",
        "cost": 3800,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Experience mind-bending mirror illusions and direct views over the Empire State Building."
      },
      {
        "id": "act_nyc_2",
        "name": "Central Park Rowboats & Strawberry Fields Walk",
        "category": "Nature",
        "cost": 1500,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Rent vintage rowboats by the Loeb Boathouse and explore Bethesda Terrace."
      },
      {
        "id": "act_nyc_3",
        "name": "Broadway Musical Performance in Theatre District",
        "category": "Culture",
        "cost": 7500,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Evening",
        "description": "Immerse yourself in world-class choreography and orchestra in historic Broadway venues."
      }
    ]
  },
  {
    "id": "dest_banff_canadian_rockies",
    "name": "Banff & Lake Louise, Canada",
    "country": "Canada",
    "stateOrRegion": "Alberta",
    "regionType": "North America (Glacial Alpine)",
    "isDomestic": false,
    "category": [
      "Nature",
      "Adventure"
    ],
    "tags": [
      "Lake Louise",
      "Moraine Lake",
      "Turquoise Glacial Lakes",
      "Canadian Rockies",
      "Wildlife"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 9200,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 7,
    "bestMonths": [
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Dec",
      "Jan",
      "Feb"
    ],
    "suitableTravelers": [
      "couple",
      "family",
      "solo",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Pristine Alpine Glacial Wilderness",
    "majorAttractions": [
      "Lake Louise & Victoria Glacier",
      "Moraine Lake & Valley of the Ten Peaks",
      "Banff Gondola Sulphur Mountain",
      "Icefields Parkway",
      "Johnston Canyon"
    ],
    "cuisineHighlights": "Alberta bison steak, Canadian Poutine with cheese curds, BeaverTails pastries, and maple syrup treats",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "Jaw-dropping vibrant turquoise glacial lakes nestled beneath snow-capped Canadian Rocky Mountain peaks, pine wilderness, and grizzly bear country.",
    "travelTips": "Moraine Lake road is closed to personal vehicles; reserve Parks Canada shuttle buses in advance to visit the Valley of the Ten Peaks.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_ban_1",
        "name": "Lake Louise Red Canoe Paddle on Turquoise Waters",
        "category": "Nature",
        "cost": 4800,
        "durationHours": 2,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Paddle hand-crafted red canoes on neon turquoise glacial waters beneath Victoria Glacier."
      },
      {
        "id": "act_ban_2",
        "name": "Banff Gondola Summit & Boardwalk to Sanson's Peak",
        "category": "Adventure",
        "cost": 3200,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Soar above six mountain ranges on a four-passenger glass gondola to 7,500 feet."
      },
      {
        "id": "act_ban_3",
        "name": "Johnston Canyon Catwalk to Lower & Upper Falls",
        "category": "Nature",
        "cost": 0,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Walk suspended cantilever steel catwalks along sheer limestone canyon walls over roaring blue rapids."
      }
    ]
  },
  {
    "id": "dest_cusco_machu_picchu",
    "name": "Cusco & Machu Picchu, Peru",
    "country": "Peru",
    "stateOrRegion": "Cusco Region",
    "regionType": "South America (Andean Civilizations)",
    "isDomestic": false,
    "category": [
      "Culture",
      "Adventure",
      "Nature"
    ],
    "tags": [
      "Lost City of the Incas",
      "Sacred Valley",
      "Inca Trail",
      "Rainbow Mountain",
      "Andean Peaks"
    ],
    "budgetTier": "Moderate",
    "baseDailyCostPerPerson": 5400,
    "minDays": 4,
    "idealDuration": 5,
    "maxDays": 7,
    "bestMonths": [
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ],
    "suitableTravelers": [
      "solo",
      "couple",
      "group"
    ],
    "travelPace": "fast",
    "climate": "High Alpine Andean Cloud Forest",
    "majorAttractions": [
      "Machu Picchu Citadel",
      "Sacred Valley of the Incas",
      "Huayna Picchu Peak",
      "Vinicunca (Rainbow Mountain)",
      "Cusco Plaza de Armas"
    ],
    "cuisineHighlights": "Fresh Ceviche with choclo corn, Lomo Saltado beef stir-fry, Causa Rellena, and hot Coca tea for altitude",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The mystical 15th-century Lost Citadel of the Incas perched between emerald Andean cloud forest peaks above the roaring Urubamba River.",
    "travelTips": "Spend the first 24 hours in Cusco resting and drinking coca tea to acclimatize properly to 11,150 feet elevation before trekking.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_mac_1",
        "name": "Machu Picchu Citadel Incan Architectural Discovery",
        "category": "Culture",
        "cost": 6200,
        "durationHours": 4,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Walk through seamless interlocking mortarless granite palaces and agricultural terraces."
      },
      {
        "id": "act_mac_2",
        "name": "Scenic Vistadome Glass Panoramic Train Journey",
        "category": "Adventure",
        "cost": 4500,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Travel along sheer roaring river canyons with glass panoramic observatory roof windows."
      },
      {
        "id": "act_mac_3",
        "name": "Sacred Valley Pisac Sun Temple & Artisan Market",
        "category": "Culture",
        "cost": 1200,
        "durationHours": 4,
        "priority": 2,
        "timeSlot": "Afternoon",
        "description": "Explore clifftop Incan burial ruins and shop for handwoven baby alpaca wool blankets."
      }
    ]
  },
  {
    "id": "dest_sydney_barrier_reef",
    "name": "Sydney & Great Barrier Reef, Australia",
    "country": "Australia",
    "stateOrRegion": "New South Wales & Queensland",
    "regionType": "Oceania (Harbour & World Wonder Reef)",
    "isDomestic": false,
    "category": [
      "Nature",
      "Beach",
      "Culture",
      "Adventure"
    ],
    "tags": [
      "Sydney Opera House",
      "Great Barrier Reef",
      "Bondi Beach",
      "Scuba Diving",
      "Harbour Bridge"
    ],
    "budgetTier": "Luxury",
    "baseDailyCostPerPerson": 9200,
    "minDays": 5,
    "idealDuration": 6,
    "maxDays": 8,
    "bestMonths": [
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb"
    ],
    "suitableTravelers": [
      "family",
      "couple",
      "solo",
      "group"
    ],
    "travelPace": "moderate",
    "climate": "Sunny Maritime & Coral Seas",
    "majorAttractions": [
      "Sydney Opera House & Harbour",
      "Outer Great Barrier Reef Snorkel Pontoon",
      "Bondi to Coogee Coastal Walk",
      "Sydney Harbour Bridge Climb",
      "Daintree Rainforest"
    ],
    "cuisineHighlights": "Australian meat pie, Barramundi fish fillet, flat white coffee, Tim Tams, and fresh Sydney rock oysters",
    "accommodationTypes": [
      "hostel",
      "budget",
      "homestay",
      "luxury"
    ],
    "transportOptions": [
      "flight"
    ],
    "description": "The architectural curves of the Sydney Opera House along the world's finest natural harbour, coupled with the world's largest living coral reef system.",
    "travelTips": "Take the classic public Manly ferry from Circular Quay for incredible views of the Opera House and Harbour Bridge for just a few dollars.",
    "heroImage": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=80",
    "activities": [
      {
        "id": "act_syd_1",
        "name": "Outer Great Barrier Reef Catamaran & Snorkeling",
        "category": "Nature",
        "cost": 8500,
        "durationHours": 7,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Snorkel above thousands of vibrant coral species, giant clams, and clownfish."
      },
      {
        "id": "act_syd_2",
        "name": "Sydney Opera House Architectural Tour & Harbour Ferry",
        "category": "Culture",
        "cost": 2400,
        "durationHours": 3,
        "priority": 1,
        "timeSlot": "Morning",
        "description": "Step beneath the white ceramic shell sails and hear stories of master architect Jørn Utzon."
      },
      {
        "id": "act_syd_3",
        "name": "Bondi to Coogee Spectacular Clifftop Walk",
        "category": "Beach",
        "cost": 0,
        "durationHours": 3,
        "priority": 2,
        "timeSlot": "Evening",
        "description": "Walk 6km along dramatic sandstone cliffs past ocean pools and breaking surf waves."
      }
    ]
  }
];
