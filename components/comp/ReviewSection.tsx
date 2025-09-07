import React, { useEffect, useMemo, useRef, useState } from "react";
import SectionHeading from "./compsDeep/SectionHeading";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

/* ====== Tunables ====== */
const CARD_W = 340; // max card width
const CARD_H = 220;
const CARD_GAP = 24; // px gap between cards

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
        scrollSnapStop: "always",
      }}
    >
      {/* badge */}
      <div style={{ position: "absolute", top: 12, right: 12 }}>
    
      </div>

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

/* ====== Reviews Scroller (native scroll + visible custom scrollbar) ====== */
function ReviewsScroller({ reviews }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [thumb, setThumb] = useState({ leftPx: 0, widthPx: 0 });

  const recalc = () => {
    const el = viewportRef.current;
    const tr = trackRef.current;
    if (!el || !tr) return;

    const vw = el.clientWidth || 1;
    const sw = el.scrollWidth || 1;
    const sl = el.scrollLeft || 0;
    const tw = tr.offsetWidth || 1;

    const scrollMax = Math.max(sw - vw, 1);
    const ratio = vw / sw;
    const thumbWidthPx = Math.max(tw * ratio, 32); // keep it grabbable
    const maxThumbLeft = Math.max(tw - thumbWidthPx, 1);
    const thumbLeftPx = (sl / scrollMax) * maxThumbLeft;

    setThumb({ leftPx: thumbLeftPx, widthPx: thumbWidthPx });

    setAtStart(sl <= 1);
    setAtEnd(sl + vw >= sw - 1);
  };

  useEffect(() => {
    recalc();
    const el = viewportRef.current;
    if (!el) return;

    const onScroll = () => recalc();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recalc);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recalc);
    };
  }, []);

  // wheel → horizontal for mouse users
  const onWheel = (e) => {
    const el = viewportRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "smooth" });
    }
  };

  const onKeyDown = (e) => {
    const el = viewportRef.current;
    if (!el) return;
    const step = CARD_W + CARD_GAP;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      el.scrollBy({ left: step, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      el.scrollBy({ left: -step, behavior: "smooth" });
    } else if (e.key === "Home") {
      e.preventDefault();
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (e.key === "End") {
      e.preventDefault();
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    }
  };

  // drag the thumb
  const onThumbMouseDown = (e) => {
    e.preventDefault();
    const el = viewportRef.current;
    const tr = trackRef.current;
    if (!el || !tr) return;

    const startX = e.clientX;
    const startLeft = thumb.leftPx;

    const vw = el.clientWidth || 1;
    const sw = el.scrollWidth || 1;
    const tw = tr.offsetWidth || 1;
    const scrollMax = Math.max(sw - vw, 1);
    const maxThumbLeft = Math.max(tw - thumb.widthPx, 1);

    const onMove = (me) => {
      const dx = me.clientX - startX;
      const nextLeft = Math.min(Math.max(startLeft + dx, 0), maxThumbLeft);
      const pct = nextLeft / maxThumbLeft;
      el.scrollLeft = pct * scrollMax;
      recalc();
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
  };

  // click on the track to jump

  // subtle edge fade to hint overflow
  const maskImage =
    atStart && atEnd
      ? "none"
      : `linear-gradient(to right, ${
          atStart ? "black" : "transparent"
        } 0, black 24px, black calc(100% - 24px), ${
          atEnd ? "black" : "transparent"
        } 100%)`;

  return (
    <Box style={{ margin: "0 auto" }}>
      {/* viewport (note: we do NOT hide scrollbars via CSS anymore) */}
      <Box
        ref={viewportRef}
        role="region"
        aria-label="Customer reviews (scroll horizontally to browse)"
        tabIndex={0}
        onWheel={onWheel}
        onKeyDown={onKeyDown}
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          scrollSnapType: "x mandatory",
          scrollPadding: "0px 24px",
          maskImage,
          WebkitMaskImage: maskImage,
          paddingBottom: 8,
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
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </Box>

      {/* visible custom scrollbar */}
      <div
   
      >
        <div
          data-thumb="1"
          onMouseDown={onThumbMouseDown}
          style={{
            position: "absolute",
            top: 0,
            left: thumb.leftPx,
            height: 8,
            width: thumb.widthPx,
            borderRadius: 999,
            background: "#A0AEC0",
            cursor: "grab",
          }}
          title="Drag to scroll"
        />
      </div>

      {/* SR hint */}
      <span style={srOnly}>
        Use the scrollbar below or your mouse/trackpad to scroll the reviews.
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
      {/* header */}
      <SectionHeading
        eyebrow={"What our customers say"}
        title={"See what they're saying about us"}
        color="black"
      />

      {/* reviews scroller */}
      <div style={{ padding: "0 0px" }}>
        <ReviewsScroller reviews={reviews} />
      </div>
    </Box>
  );
}
