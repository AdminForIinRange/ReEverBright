import React, { useMemo, useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/comp/compsDeep/SectionHeading";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

/* ====== Tunables ====== */
const CARD_W = 340;
const CARD_H = 220;
const CARD_GAP = 24;
const CLAMP_LINES = 6;

/* ====== Small utilities ====== */
const srOnly = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "visible",
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
function ReviewCard({ name, date, reviewText, stars, platform, avatar }) {
  const initial = (name || "•").trim().charAt(0).toUpperCase();
  const platformLabel =
    platform === "google" ? "Google" : platform === "facebook" ? "Facebook" : "Review";

  // measure overflow WITHOUT relying on -webkit-line-clamp (which hides scrollHeight)
  const paraRef = useRef(null);
  const measureRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const update = () => {
      const p = paraRef.current;
      const m = measureRef.current;
      if (!p || !m) return;

      // sync width to the real paragraph
      m.style.width = `${p.clientWidth}px`;

      // compute clamp height from computed line-height
      const cs = window.getComputedStyle(p);
      const lineH = parseFloat(cs.lineHeight); // px
      const clampHeight = lineH * CLAMP_LINES;

      // natural height (no clamp) taken from hidden clone
      const naturalHeight = m.scrollHeight;

      setIsOverflowing(naturalHeight > clampHeight + 1);
    };

    update();
    const ro = new ResizeObserver(update);
    if (paraRef.current) ro.observe(paraRef.current);
    if (measureRef.current) ro.observe(measureRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

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
          </div>
          <div style={{ fontSize: 12, color: "#718096", fontWeight: 500 }}>{date}</div>
        </div>
      </div>

      {/* stars */}
      <div style={{ marginTop: 12, flexShrink: 0 }}>
        <StarRating value={stars} />
      </div>

      {/* body */}
      <div className="rvw-body" style={{ marginTop: 12, flex: 1, position: "relative", display: "flex" }}>
        <p
          ref={paraRef}
          style={{
            margin: 0,
            fontSize: 14,
            color: "#2D3748",
            lineHeight: 1.7,
            letterSpacing: ".01em",
            display: "-webkit-box",
            WebkitLineClamp: CLAMP_LINES,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          title={reviewText}
        >
          {reviewText}
        </p>

        {/* hidden natural-height clone (no clamp) for measurement */}
        <p
          ref={measureRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            visibility: "hidden",
            pointerEvents: "none",
            margin: 0,
            fontSize: 14,
            lineHeight: 1.7,
            letterSpacing: ".01em",
            whiteSpace: "normal",
          }}
        >
          {reviewText}
        </p>

        {/* literal ellipsis when (and only when) content overflows */}
        {isOverflowing && (
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              right: 8,
              bottom: 6,
              fontWeight: 700,
              lineHeight: 1,
              padding: "0 4px",
              background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, #fff 30%)",
              userSelect: "none",
            }}
          >
            …
          </span>
        )}
      </div>
    </div>
  );
}

/* ====== Reviews Row with always-visible mobile scrollbar ====== */
function ReviewsRow({ reviews }) {
  const note = useMemo(() => "Scroll horizontally to browse reviews.", []);
  const vpRef = useRef(null);
  const barRef = useRef(null);
  const [thumb, setThumb] = useState({ w: 0, x: 0, show: false });

  useEffect(() => {
    const vp = vpRef.current;
    const bar = barRef.current;
    if (!vp || !bar) return;

    const calc = () => {
      const trackW = bar.clientWidth;
      const { scrollWidth, clientWidth, scrollLeft } = vp;

      if (scrollWidth <= clientWidth + 1) {
        setThumb(t => ({ ...t, show: false, w: 0, x: 0 }));
        return;
      }
      const ratio = clientWidth / scrollWidth;
      const w = Math.max(24, Math.round(trackW * ratio));
      const max = trackW - w;
      const x = Math.round((scrollLeft / (scrollWidth - clientWidth)) * max);
      setThumb({ w, x, show: true });
    };

    calc();
    const onScroll = () => {
      // rAF for smoothness
      requestAnimationFrame(calc);
    };
    vp.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(calc);
    ro.observe(vp);
    ro.observe(bar);

    return () => {
      vp.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="rvw-wrap" style={{ padding: "0 24px" }}>
      <div
        className="rvw-viewport"
        role="region"
        aria-label="Customer reviews (manual horizontal scroll)"
        tabIndex={0}
        ref={vpRef}
      >
        <div className="rvw-track" role="list" aria-label="Customer reviews">
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>

      {/* Always-visible custom scrollbar on mobile */}
      <div className="rvw-custombar" ref={barRef}>
        {thumb.show && (
          <div
            className="rvw-thumb"
            style={{ width: `${thumb.w}px`, transform: `translateX(${thumb.x}px)` }}
          />
        )}
      </div>

      <span style={srOnly}>{note}</span>

      {/* scoped styles */}
      <style>{`
        .rvw-viewport {
          overflow-x: auto;
          overflow-y: hidden;
          padding-bottom: 8px;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
          scroll-behavior: smooth;
          /* style the native scrollbar where supported (desktop & some Android) */
          scrollbar-width: thin;            /* Firefox */
          scrollbar-color: #CBD5E0 #EDF2F7; /* thumb track */
        }
        .rvw-track {
          display: flex;
          gap: ${CARD_GAP}px;
          width: max-content;
        }
        /* WebKit scrollbar (desktop) */
        .rvw-viewport::-webkit-scrollbar { height: 10px; }
        .rvw-viewport::-webkit-scrollbar-track { background: #EDF2F7; border-radius: 999px; }
        .rvw-viewport::-webkit-scrollbar-thumb { background: #CBD5E0; border-radius: 999px; border: 2px solid #EDF2F7; }
        .rvw-viewport::-webkit-scrollbar-thumb:active { background: #A0AEC0; }

        /* Custom, always-visible scrollbar shown on small screens (iOS etc.) */
        .rvw-custombar {
          display: none;
          height: 8px;
          margin-top: 6px;
          background: #EDF2F7;
          border-radius: 999px;
          position: relative;
        }
        .rvw-thumb {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          background: #CBD5E0;
          border-radius: 999px;
          will-change: transform, width;
        }

        @media (max-width: 768px) {
          .rvw-viewport { padding-bottom: 0; } /* avoid double bars */
          .rvw-custombar { display: block; }
          /* make native bar thicker where supported */
          .rvw-viewport::-webkit-scrollbar { height: 12px; }
        }
      `}</style>
    </div>
  );
}

/* ====== Main Section ====== */
export default function ReviewSection() {
  const reviews = [
    { name: "Anjesh Bhattarai", date: "recent", reviewText: "Had my Airbnb cleaned by Shayal and his team, they did an amazing job! They arrived on time, had excellent communication, and left everything spotless. We will definitely be hiring them again for our other properties.", stars: 5, platform: "google" },
    { name: "Inshaaf Bhattarai", date: "3 weeks ago", reviewText: "Highly recommended better then spending $1000 on a bunch of pressure washing equipment just to use it once they were respectful and did a fantastic job driveway was left spotless and not too expensive only needs to be one 1 time every couple years so this would definitely be worth very satisfied customer", stars: 5, platform: "google" },
    { name: "Winnie Taban", date: "2 weeks ago", reviewText: "Absolutely top tier customer service. Was able to enquire and received a reply not long after. Top quality service, would highly recommend.", stars: 5, platform: "google" },
    { name: "Janice Croser", date: "2 months ago", reviewText: "Had my gutters cleaned and solar panels also. Shayal did a great job. Very polite and courteous. Was really pleased. Would highly recommend him.", stars: 5, platform: "google" },
    { name: "Pasty Strange", date: "3 weeks ago", reviewText: "These guys did the best job EVER. My gutters are the cleanest they have ever been. They did a fantastic job. I would happily recommend them to everyone.", stars: 5, platform: "google" },
    { name: "abbas habib", date: "4 weeks ago", reviewText: "Shayal offered me a great quote to clean my solar panels. The job was done quickly and well. This will be a regular service for me from now on since my panels performance has increased since.", stars: 5, platform: "google" },
    { name: "Marie Mullins", date: "1 month ago", reviewText: "Shayal did an amazing job cleaning my gutters, very happy with the clean up afterwards too. Would highly recommend", stars: 5, platform: "google" },
    { name: "Harry deakin", date: "3 months ago", reviewText: "Had our back area done for a birthday party. Shayal got everything looking fresh and clean just in time. Easy to deal with and very responsive.", stars: 5, platform: "google" },
    { name: "J D", date: "3 months ago", reviewText: "Got Shayal in to clean the solar panels. I hadn’t done it in over two years and they were filthy. After he cleaned them, you could instantly see the difference.", stars: 5, platform: "google" },
    { name: "carl pernito", date: "3 months ago", reviewText: "Got my roof cleaned by these guys and honestly, I didn’t think it’d make such a big difference but it really did. The roof was covered in crap from years of weather and now it looks fresh again. Shayal was easy to deal with, turned up on time.", stars: 5, platform: "google" },
    { name: "Wendy Dobrucki", date: "1 month ago", reviewText: "They came on time. Did an excellent job. Left nice and clean. Would definitely recommend.", stars: 5, platform: "google" },
    { name: "Oli Parashos", date: "3 months ago", reviewText: "Our solar panels were long overdue for a clean. Shayal came by and now they’re spotless.", stars: 5, platform: "google" },
    { name: "Sudip Ramdam", date: "3 months ago", reviewText: "We had our roof soft-washed by Shayal from EverBright. The results were honestly better than we expected. The roof had years of built-up grime, moss, and black streaks, now it looks clean and refreshed without any damage to the tiles.", stars: 5, platform: "google" },
    { name: "Qasim ali", date: "3 months ago", reviewText: "Had Shayal come in to clean out gutter, he came on time and left our gutter looking super clean, thanks mate.", stars: 5, platform: "google" },
    { name: "Zahir Najafi", date: "3 months ago", reviewText: "Big thanks to Shayal. Our patio was covered in grime and now it’s spotless. Professional and hardworking guy.", stars: 5, platform: "google" },
    { name: "Asghar Lalee", date: "3 months ago", reviewText: "My verandah was slippery and gross. Called Shayal, now it’s clean, safe, and looks great for entertaining. Cheers Shayal, appreciate the effort you put in.", stars: 5, platform: "google" },
    { name: "Janice Renfrey", date: "1 month ago", reviewText: "Flexible, responsive, punctual. I'm very happy with their work and price.", stars: 5, platform: "google" },
    { name: "David Wilson", date: "5 days ago", reviewText: "Shayal and his team did a great job cleaning my gutters. It was a big job on a two storey house and good to see them taking safety seriously. They were friendly and professional so I'm very happy to recommend them.", stars: 5, platform: "google" },
    { name: "Sita Khadka", date: "3 months ago", reviewText: "We had our roof cleaned by Shayal. Excellent results and very professional service.", stars: 5, platform: "google" },
  ];

  return (
    <Box px={{ base: "4%", md: "6%", xl: "16%" }} my={"100px"}>
      <SectionHeading
        eyebrow={"What our customers say"}
        title={"Read Some Of Our Reviews!"}
        color="black"
      />
      <ReviewsRow reviews={reviews} />
    </Box>
  );
}
