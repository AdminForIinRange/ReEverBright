import React, { useEffect, useMemo, useRef, useState } from "react";
import SectionHeading from "./compsDeep/SectionHeading";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
/* ====== Tunables ====== */
const CARD_W = 340;
const CARD_H = 220;
const CARD_GAP = 24; // px gap between cards
const SLIDE_DURATION_MS = 4000; // banner auto-advance

/* ====== Small utilities ====== */
const srOnly = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: 0,
};

function StarRating({ value }) {
  // render 5 stars using unicode, tint the filled ones
  return (
    <div
      aria-label={`${value} out of 5 stars`}
      style={{ display: "flex", gap: 4 }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            fontSize: 16,
            lineHeight: 1,
            filter:
              i < value
                ? "drop-shadow(0 1px 2px rgba(246,173,85,.35))"
                : "none",
            color: i < value ? "#F6AD55" : "#E2E8F0",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Chip({ text, bg = "#F0FFF4", border = "#C6F6D5", color = "#2F855A" }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 999,
        border: `1px solid ${border}`,
        background: bg,
        color,
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: ".04em",
      }}
    >
      {text}
    </span>
  );
}

/* ====== Review Card (fixed size) ====== */
function ReviewCard({
  name,
  date,
  reviewText,
  stars,
  platform,
  avatar,
  verified = false,
}) {
  const initial = (name || "•").trim().charAt(0).toUpperCase();
  const platformLabel =
    platform === "google"
      ? "Google"
      : platform === "facebook"
        ? "Facebook"
        : "Review";

  return (
    <div
      role="listitem"
      aria-label={`${stars} star review by ${name} on ${platformLabel}`}
      style={{
        width: CARD_W,
        minWidth: CARD_W,
        height: CARD_H,
        background: "#fff",
        border: "1px solid #E2E8F0",
        borderRadius: 12,
        padding: 20,
        boxShadow: "0 1px 2px rgba(16,24,40,0.04)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "box-shadow .25s ease, border-color .25s ease",
      }}
    >
      {/* platform pill */}
      {/* header */}
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: avatar
              ? `url(${avatar}) center/cover no-repeat`
              : "linear-gradient(135deg,#667eea,#764ba2)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(102,126,234,.25)",
            flexShrink: 0,
          }}
        >
          {!avatar && initial}
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 16,
                color: "#1A202C",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: 180,
              }}
              title={name}
            >
              {name}
            </div>
          </div>
          <div style={{ fontSize: 12, color: "#718096", fontWeight: 500 }}>
            {date}
          </div>
        </div>
      </div>

      {/* stars */}
      <div style={{ marginTop: 12, flexShrink: 0 }}>
        <StarRating value={stars} />
      </div>

      {/* body (fixed region + line clamp) */}
      <div
        style={{ marginTop: 12, flex: 1, overflow: "hidden", display: "flex" }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 14,
            color: "#2D3748",
            lineHeight: 1.7,
            letterSpacing: ".01em",
            display: "-webkit-box",
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          title={reviewText}
        >
          {reviewText}
        </p>
      </div>
    </div>
  );
}

/* ====== Banner Slider (auto + buttons) ====== */

/* ====== Reviews Carousel (buttons + dots) ====== */
function ReviewsCarousel({ reviews }) {
  const visible = 3; // how many cards are visible in desktop viewport
  const maxIndex = Math.max(0, reviews.length - visible);
  const [index, setIndex] = useState(0);

  const trackRef = useRef(null);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const goTo = (i) => setIndex(() => Math.min(maxIndex, Math.max(0, i)));

  useEffect(() => {
    if (!trackRef.current) return;
    const offset = index * (CARD_W + CARD_GAP);
    trackRef.current.style.transform = `translateX(-${offset}px)`;
  }, [index]);

  return (
    <Box  style={{ margin: "0 auto" }}>
      {/* controls */}
  

      {/* viewport */}
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          paddingBottom: 8,
        }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: CARD_GAP,
            willChange: "transform",
            transition: "transform 400ms ease",
          }}
          aria-label="Customer reviews"
          role="list"
        >
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>

          <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          gap: 8,
          marginBottom: 12,
        }}
      >
        <button
    
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          style={navBtnStyle}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={index === maxIndex}
          style={navBtnStyle}
        >
          Next
        </button>
      </div>

      {/* dots (one per possible index position) */}
      <Box
      mt={"15px"}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,

        }}
      >
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to set ${i + 1}`}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              border: "none",
              background: i === index ? "#2D3748" : "#CBD5E0",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

/* ====== Main Section ====== */
export default function ReviewSection() {
  const reviews = [
    {
      name: "Jill Bills",
      date: "30 June 2025",
      reviewText:
        "The Calibre team was excellent. Polite and on time service before and after photos that clearly showed the results. Very happy",
      stars: 5,
      platform: "google",
      verified: true,
    },
    {
      name: "Trevor Smith",
      date: "26 June 2025",
      reviewText:
        "Caleb was a very hard-working deliverer of a great service...hard to believe the before and after photos. Highly recommend this pressure clean service.",
      stars: 5,
      platform: "google",
      verified: true,
    },
    {
      name: "Robert Swann",
      date: "11 January 2025",
      reviewText:
        "Great job done cleaning Solar panels and Gutters. Fantastic, prompt and friendly service. Highly recommend them for jobs.",
      stars: 5,
      platform: "facebook",
      verified: false,
    },
    {
      name: "Sarah Johnson",
      date: "15 June 2025",
      reviewText:
        "Outstanding service! The team was professional, punctual, and delivered exceptional results. Will definitely use again.",
      stars: 5,
      platform: "google",
      verified: true,
    },
    {
      name: "Mike Wilson",
      date: "8 June 2025",
      reviewText:
        "Excellent work on our driveway cleaning. The difference is remarkable. Highly recommend their services!",
      stars: 5,
      platform: "facebook",
      verified: false,
    },
  ];

  return (
    <Box
     
   
        px={{ base: "4%", md: "6%", xl: "16%" }}
        my={"100px"}
    
    >
      {/* header */}
      <SectionHeading
        eyebrow={"What our customers say"}
        title={"See what they're saying about us"}
        color="black"
      />
      {/* moving banner */}
      

      {/* reviews carousel */}
      <div style={{ padding: "0 24px" }}>
        <ReviewsCarousel reviews={reviews} />
      </div>

      {/* screen-reader helper text */}
      <span style={srOnly}>
        Use left and right buttons to navigate the review cards.
      </span>
    </Box>
  );
}

/* ====== shared button style ====== */
const navBtnStyle = {
  width: "100%",
  appearance: "none",
  background: "#fff",
  border: "1px solid #CBD5E0",
  borderRadius: 8,
  padding: "8px 12px",
  fontWeight: 700,
  cursor: "pointer",
  transition: "background .2s ease, border-color .2s ease",
};