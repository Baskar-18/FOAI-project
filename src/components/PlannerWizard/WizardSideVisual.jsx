import React, { useEffect } from "react";
import {
  Cloud,
  Compass,
  Landmark,
  Mountain,
  Plane,
  Sparkles,
  TreePine,
  Utensils
} from "lucide-react";
import { DESTINATIONS } from "../../data/travelKnowledgeBase";
import "./WizardSideVisual.css";

const getDestinationImage = (destinationId) =>
  DESTINATIONS.find((destination) => destination.id === destinationId)?.heroImage || "";

const FALLBACK_IMAGE = getDestinationImage("dest_munnar");

const STEP_COPY = {
  1: {
    eyebrow: "EXPLORE THE WORLD",
    message: "Your next adventure starts here.",
    destination: "Manali",
    image: getDestinationImage("dest_manali"),
    imageAlt: "Mountain landscape in Manali",
    sceneClass: "explore"
  },
  2: {
    eyebrow: "PLAN YOUR JOURNEY",
    message: "Your journey, your budget.",
    destination: "Kerala",
    image: getDestinationImage("dest_munnar"),
    imageAlt: "Tea-covered hills in Kerala",
    sceneClass: "planning"
  },
  3: {
    eyebrow: "FIND YOUR EXPERIENCE",
    message: "Made for your kind of adventure.",
    destination: "Bali",
    image: getDestinationImage("dest_bali_intl"),
    imageAlt: "Tropical coast in Bali",
    sceneClass: "discover"
  }
};

export default function WizardSideVisual({ step, phase = "idle" }) {
  const copy = STEP_COPY[step] || STEP_COPY[1];

  useEffect(() => {
    Object.values(STEP_COPY).forEach(({ image }) => {
      if (image) {
        const preload = new Image();
        preload.src = image;
      }
    });
  }, []);

  return (
    <aside className="wizard-side-art wizard-side-art-left" aria-hidden="true">
      <div className="wizard-side-visual">
        <div className={`wizard-side-visual-content ${phase === "exit" ? "is-exiting" : phase === "enter" ? "is-entering" : ""}`} key={step}>
          <div className={`side-visual-scene side-visual-scene-${step} side-visual-scene-${copy.sceneClass}`}>
            <img
              className="side-visual-photo"
              src={copy.image}
              alt=""
              loading="eager"
              decoding="async"
              onError={(event) => {
                if (event.currentTarget.src !== FALLBACK_IMAGE) {
                  event.currentTarget.src = FALLBACK_IMAGE;
                }
              }}
            />
            <div className="side-visual-photo-wash" />

          {step === 1 && (
            <>
              <Cloud className="explore-cloud explore-cloud-one" size={29} strokeWidth={1.35} />
              <Cloud className="explore-cloud explore-cloud-two" size={20} strokeWidth={1.35} />
              <div className="flight-path"><span /></div>
              <span className="explore-plane"><Plane size={24} strokeWidth={1.5} /></span>
              <span className="scene-globe"><Compass size={16} strokeWidth={1.5} /></span>
            </>
          )}

          {step === 2 && (
            <>
              <div className="planning-info-float">
                <span className="planning-info-icon"><Compass size={15} /></span>
                <span><strong>On budget</strong><small>Room to explore</small></span>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="discover-interest-list">
                <span><TreePine size={14} /> Nature</span>
                <span><Landmark size={14} /> Culture</span>
                <span><Utensils size={14} /> Local food</span>
                <span><Mountain size={14} /> Adventure</span>
              </div>
              <span className="discover-sparkle"><Sparkles size={15} /></span>
            </>
          )}

            <span className="side-visual-destination">{copy.destination}</span>
          </div>

          <div className="side-visual-caption">
            <span>{copy.eyebrow}</span>
            <p>{copy.message}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}