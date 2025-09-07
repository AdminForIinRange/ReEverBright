import React, { useEffect, useMemo, useRef, useState } from "react";
import SectionHeading from "./compsDeep/SectionHeading";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

/* ====== Tunables ====== */
const CARD_W = 340;         // max card width
const CARD_H = 220;         // card height
const CARD_GAP = 24;        // px gap between cards
const MARQUEE_PX_PER_SEC = 50; // autoplay speed; 40–80 feels good

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

function StarRating({ value = 5 }) {
  return (
    <div aria-label={`${value} out of 5 stars`} style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            fontSize: 16,
            lineHeight: 1,
            filter: i < value ? "drop-shadow(0 1px 2px rgba(246,173,85,.35))" : "none",
            color: i < value ? "#F6AD55" : "#E2E8F0",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

/* ====== Review Card ====== */
function ReviewCard({ name, date, reviewText, stars, platform, avatar, verified = false }) {
  const initial = (name || "•").trim().charAt(0).toUpperCase();
  const platformLabel =
    platform === "google" ? "Google" : platform === "facebook" ? "Facebook" : "Review";

  return (
    <div
      role="listitem"
      aria-label={`${stars} star review by ${name} on ${platformLabel}`}
      className="rvw-card"
      style={{
        width: `clamp(260px, 80vw, ${CARD_W}px)`,
        minWidth: `clamp(260px, 80vw, ${CARD_W}px)`,
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
      {/* header */}
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexShrink: 0 }}>
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
            {verified && (
              <span
                aria-label="Verified"
                title="Verified"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "2px 6px",
                  borderRadius: 999,
                  color: "#22543D",
                  background: "#C6F6D5",
                }}
              >
                Verified
              </span>
            )}
          </div>
          <div style={{ fontSize: 12, color: "#718096", fontWeight: 500 }}>{date}</div>
        </div>
      </div>

      {/* stars */}
      <div style={{ marginTop: 12, flexShrink: 0 }}>
        <StarRating value={stars} />
      </div>

      {/* body */}
      <div style={{ marginTop: 12, flex: 1, overflow: "hidden", display: "flex" }}>
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

/* ====== Reviews Marquee (CSS-driven, seamless, no extra imports) ====== */
function ReviewsMarquee({ reviews }) {
  const halfRef = useRef(null);
  const [duration, setDuration] = useState(20); // seconds, recalculated
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)")?.matches || false;
    } catch {
      return false;
    }
  }, []);

  // Measure first half width -> compute duration based on MARQUEE_PX_PER_SEC
  useEffect(() => {
    const el = halfRef.current;
    if (!el) return;

    const compute = () => {
      const halfWidth = el.offsetWidth || 0;
      if (halfWidth > 0) {
        const seconds = halfWidth / MARQUEE_PX_PER_SEC;
        setDuration(Math.max(6, Math.min(seconds, 120))); // clamp sane range
      }
    };

    compute();

    // Keep fresh on resize / content changes
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => compute());
      ro.observe(el);
    } else {
      const onResize = () => compute();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    return () => {
      if (ro) ro.disconnect();
    };
  }, [reviews]);

  return (
    <div className="rvw-wrap" style={{ padding: "0 24px" }}>
      <div
        className="rvw-viewport"
        role="region"
        aria-label="Customer reviews (marquee; hover or focus to pause)"
        tabIndex={0}
        style={{
          outline: "none",
        }}
      >
        {/* Track = two equal halves for seamless wrap.
            We animate the track from 0 to -50% so the second half slides into place. */}
        <div
          className="rvw-track"
          style={{
            gap: CARD_GAP,
            // expose vars for CSS
            ["--rvw-gap"]: `${CARD_GAP}px`,
            ["--rvw-dur"]: `${duration}s`,
            ["--rvw-play"]: prefersReducedMotion ? "paused" : "running",
          }}
        >
          <div ref={halfRef} className="rvw-half" role="list" aria-label="Customer reviews">
            {reviews.map((r, i) => (
              <ReviewCard key={`h1-${i}`} {...r} />
            ))}
          </div>
          <div className="rvw-half" aria-hidden="true">
            {reviews.map((r, i) => (
              <ReviewCard key={`h2-${i}`} {...r} />
            ))}
          </div>
        </div>
      </div>

      <span style={srOnly}>
        Reviews auto-scroll horizontally. Hover, focus, or touch to pause. Motion respects your
        system’s “reduced motion” preference.
      </span>

      {/* Scoped styles – no new imports */}
      <style>{`
        .rvw-viewport {
          overflow: hidden;
          padding-bottom: 8px;
        }

        .rvw-track {
          display: flex;
          width: max-content;           /* track is as wide as its contents */
          will-change: transform;
          animation: rvw-scroll var(--rvw-dur, 20s) linear infinite;
          animation-play-state: var(--rvw-play, running);
        }

        /* Pause on hover/focus within for user control */
        .rvw-viewport:hover .rvw-track,
        .rvw-viewport:focus-within .rvw-track {
          animation-play-state: paused;
        }

        .rvw-half {
          display: flex;
          gap: var(--rvw-gap, 24px);
        }

        @keyframes rvw-scroll {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-50%,0,0); } /* exactly one half width */
        }

        /* Touch devices: allow tap to pause with :active */
        @media (hover: none) and (pointer: coarse) {
          .rvw-viewport:active .rvw-track { animation-play-state: paused; }
        }

        /* Reduced motion – stop animation entirely */
        @media (prefers-reduced-motion: reduce) {
          .rvw-track { animation: none; transform: translate3d(0,0,0); }
        }
      `}</style>
    </div>
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
    <Box px={{ base: "4%", md: "6%", xl: "16%" }} my={"100px"}>
      <SectionHeading
        eyebrow={"What our customers say"}
        title={"Read Some Of Our Reviews!"}
        color="black"
      />
      <ReviewsMarquee reviews={reviews} />
    </Box>
  );
}
