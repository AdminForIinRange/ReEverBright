import React, { useEffect, useMemo, useRef, useState } from "react";
import SectionHeading from "./compsDeep/SectionHeading";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

/* ====== Tunables ====== */
const CARD_W = 340; // max card width
const CARD_H = 220;
const CARD_GAP = 24; // px gap between cards
const MARQUEE_PX_PER_SEC = 50; // autoplay speed; 40–80 feels good
const RESUME_IDLE_MS = 1200; // wait after user interaction before resuming

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

/* ====== Review Card (snap-aligned, responsive width) ====== */
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

/* ====== Reviews Marquee (infinite loop + user-controlled scroll) ====== */
function ReviewsScroller({ reviews }) {
  const viewportRef = useRef(null);
  const firstHalfRef = useRef(null);

  // autoplay state
  const rafRef = useRef(null);
  const lastTsRef = useRef(0);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef(null);

  // measurement
  const halfWidthRef = useRef(0);

  // drag state
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartLeftRef = useRef(0);

  // measure width of first half (exact, padding-safe)
  const measureHalf = () => {
    const el = firstHalfRef.current;
    if (!el) return;
    halfWidthRef.current = el.offsetWidth || 0;
  };

  const ensureWrapped = () => {
    const scroller = viewportRef.current;
    const half = halfWidthRef.current;
    if (!scroller || !half) return;
    if (scroller.scrollLeft >= half) scroller.scrollLeft -= half;
    else if (scroller.scrollLeft < 0) scroller.scrollLeft += half;
  };

  const startRaf = () => {
    if (rafRef.current) return;
    const tick = (ts) => {
      const scroller = viewportRef.current;
      if (!scroller) return;

      // re-measure if needed (e.g., fonts/layout settle)
      if (!halfWidthRef.current) measureHalf();

      ensureWrapped();

      if (!pausedRef.current && halfWidthRef.current > 0) {
        const dt = Math.max(0, ts - (lastTsRef.current || ts));
        scroller.scrollLeft += (MARQUEE_PX_PER_SEC * dt) / 1000;
      }

      lastTsRef.current = ts;
      rafRef.current = requestAnimationFrame(tick);
    };

    lastTsRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
  };

  const pauseAuto = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
      // avoid big jump from accumulated dt
      lastTsRef.current = performance.now();
    }, RESUME_IDLE_MS);
  };

  useEffect(() => {
    // start after mount
    measureHalf();
    startRaf();

    const onResize = () => {
      measureHalf();
      ensureWrapped();
    };

    const scroller = viewportRef.current;
    const onScroll = () => ensureWrapped();

    if (scroller) scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      if (scroller) scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // wheel → horizontal, pauses autoplay
  const onWheel = (e) => {
    const scroller = viewportRef.current;
    if (!scroller) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      scroller.scrollLeft += e.deltaY;
      pauseAuto();
    }
  };

  // keyboard control
  const onKeyDown = (e) => {
    const scroller = viewportRef.current;
    if (!scroller) return;
    const step = CARD_W + CARD_GAP;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scroller.scrollLeft += step;
      pauseAuto();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scroller.scrollLeft -= step;
      pauseAuto();
    }
  };

  // drag (mouse)
  const onMouseDown = (e) => {
    const scroller = viewportRef.current;
    if (!scroller) return;
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartLeftRef.current = scroller.scrollLeft;
    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
    pauseAuto();
  };
  const onMouseMove = (e) => {
    const scroller = viewportRef.current;
    if (!scroller || !draggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    scroller.scrollLeft = dragStartLeftRef.current - dx;
  };
  const onMouseUp = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  };

  // drag (touch)
  const tStartRef = useRef(0);
  const tLeftRef = useRef(0);
  const onTouchStart = (e) => {
    const scroller = viewportRef.current;
    if (!scroller) return;
    tStartRef.current = e.touches[0].clientX;
    tLeftRef.current = scroller.scrollLeft;
    pauseAuto();
  };
  const onTouchMove = (e) => {
    const scroller = viewportRef.current;
    if (!scroller) return;
    const dx = e.touches[0].clientX - tStartRef.current;
    scroller.scrollLeft = tLeftRef.current - dx;
  };

  return (
    <Box style={{ margin: "0 auto" }}>
      {/* wrapper adds side padding without affecting track width */}
      <div style={{ padding: "0 24px" }}>
        <Box
          ref={viewportRef}
          role="region"
          aria-label="Customer reviews (marquee; interact to control)"
          tabIndex={0}
          onWheel={onWheel}
          onKeyDown={onKeyDown}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            WebkitOverflowScrolling: "touch",
            paddingBottom: 8,
          }}
        >
          {/* Track = two equal halves for seamless wrap */}
          <div style={{ display: "flex" }}>
            <div
              ref={firstHalfRef}
              style={{ display: "flex", gap: CARD_GAP }}
              role="list"
              aria-label="Customer reviews"
            >
              {reviews.map((r, i) => (
                <ReviewCard key={`a-${i}`} {...r} />
              ))}
            </div>
            <div style={{ display: "flex", gap: CARD_GAP }} aria-hidden="true">
              {reviews.map((r, i) => (
                <ReviewCard key={`b-${i}`} {...r} />
              ))}
            </div>
          </div>
        </Box>
      </div>

      <span style={srOnly}>
        Reviews auto-scroll horizontally. Interact with your mouse, touch, or
        keyboard to take control; autoplay resumes after a moment.
      </span>
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
    <Box px={{ base: "4%", md: "6%", xl: "16%" }} my={"100px"}>
      <SectionHeading
        eyebrow={"What our customers say"}
        title={"Read Some Of Our Reviews!"}
        color="black"
      />
      <div style={{ padding: "0 0px" }}>
        <ReviewsScroller reviews={reviews} />
      </div>
    </Box>
  );
}
