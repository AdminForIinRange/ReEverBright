import React, { useEffect, useMemo, useRef, useState } from "react";
import SectionHeading from "./compsDeep/SectionHeading";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

/* ====== Tunables ====== */
const CARD_W = 340; // max card width
const CARD_H = 220;
const CARD_GAP = 24; // px gap between cards
const MARQUEE_PX_PER_SEC = 1; // auto-scroll speed
const RESUME_IDLE_MS = 20; // after user interaction, wait before resuming

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
        scrollSnapAlign: "start",
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

  // for auto-marquee
  const rafRef = useRef(null);
  const lastTsRef = useRef(0);
  const pausedRef = useRef(false);
  const idleTimerRef = useRef(null);

  // drag-to-scroll
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartLeftRef = useRef(0);

  // duplicate items for a seamless loop
  const items = useMemo(() => [...reviews, ...reviews], [reviews]);

  const stopAuto = () => {
    pausedRef.current = true;
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
      lastTsRef.current = performance.now();
      startRaf();
    }, RESUME_IDLE_MS);
  };

  const startRaf = () => {
    if (rafRef.current) return;
    const loop = (ts) => {
      const el = viewportRef.current;
      if (!el) return;
      if (pausedRef.current) {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      // if content isn't wider than viewport, don't auto-scroll
      const canScroll = el.scrollWidth > el.clientWidth + 2;
      if (!canScroll) {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      const dt = Math.max(0, ts - (lastTsRef.current || ts));
      lastTsRef.current = ts;

      const step = (MARQUEE_PX_PER_SEC * dt) / 1000;
      el.scrollLeft += step;

      const half = el.scrollWidth / 2;
      // when we’ve scrolled through the first copy, snap back by half
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }

      rafRef.current = requestAnimationFrame(loop);
    };
    lastTsRef.current = performance.now();
    rafRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    // kick off marquee on mount
    startRaf();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // wheel → horizontal, pauses marquee
  const onWheel = (e) => {
    const el = viewportRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
      stopAuto();
    }
  };

  // keyboard control, pauses marquee
  const onKeyDown = (e) => {
    const el = viewportRef.current;
    if (!el) return;
    const step = CARD_W + CARD_GAP;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      el.scrollLeft += step;
      stopAuto();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      el.scrollLeft -= step;
      stopAuto();
    } else if (e.key === "Home") {
      e.preventDefault();
      el.scrollLeft = 0;
      stopAuto();
    } else if (e.key === "End") {
      e.preventDefault();
      el.scrollLeft = el.scrollWidth;
      stopAuto();
    }
  };

  // drag-to-scroll, pauses marquee
  const onMouseDown = (e) => {
    const el = viewportRef.current;
    if (!el) return;
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartLeftRef.current = el.scrollLeft;
    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
    stopAuto();
  };
  const onMouseMove = (e) => {
    const el = viewportRef.current;
    if (!el || !draggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    el.scrollLeft = dragStartLeftRef.current - dx;
  };
  const endMouseDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  };

  // touch drag
  const touchStartXRef = useRef(0);
  const touchStartLeftRef = useRef(0);
  const onTouchStart = (e) => {
    const el = viewportRef.current;
    if (!el) return;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartLeftRef.current = el.scrollLeft;
    stopAuto();
  };
  const onTouchMove = (e) => {
    const el = viewportRef.current;
    if (!el) return;
    const dx = e.touches[0].clientX - touchStartXRef.current;
    el.scrollLeft = touchStartLeftRef.current - dx;
  };

  // resize fix: if user resizes, keep marquee smooth
  useEffect(() => {
    const onResize = () => {
      const el = viewportRef.current;
      if (!el) return;
      // keep scroll in first half
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Box style={{ margin: "0 auto" }}>
      <Box
        ref={viewportRef}
        role="region"
        aria-label="Customer reviews (marquee; interact to control)"
        tabIndex={0}
        onWheel={onWheel}
        onKeyDown={onKeyDown}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endMouseDrag}
        onMouseLeave={endMouseDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={() => {}}
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          paddingBottom: 8,
          // no scroll-snap during marquee; user controls freely
        }}
      >
        <div
          role="list"
          aria-label="Customer reviews"
          style={{
            display: "flex",
            gap: CARD_GAP,
            padding: "0 24px",
          }}
        >
          {items.map((r, i) => (
            <ReviewCard key={`${i}`} {...r} />
          ))}
        </div>
      </Box>

      <span style={srOnly}>
        Reviews auto-scroll horizontally. Interact with your mouse, touch, or
        keyboard to take control; auto-scroll resumes after a moment.
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
        title={"See what they're saying about us"}
        color="black"
      />
      <div style={{ padding: "0 0px" }}>
        <ReviewsScroller reviews={reviews} />
      </div>
    </Box>
  );
}
