import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
const SLIDE_DURATION_MS = 4000; // Duration in milliseconds for each slide

function BannerSlider() {
  const services = [
    {
      title: "Pressure Washing",
      image:
        "https://images.pexels.com/photos/14965464/pexels-photo-14965464.jpeg",
      desc: "Deep-clean hard surfaces to remove grime, algae, and stubborn stains.",
    },
    {
      title: "Solar Cleaning",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      desc: "Maximize panel efficiency with streak-free, residue-free cleaning.",
    },
    {
      title: "Roof Cleaning",
      image:
        "https://images.pexels.com/photos/2513975/pexels-photo-2513975.jpeg",
      desc: "Safely lift moss and dark streaks to restore curb appeal.",
    },
    {
      title: "Gutter Cleaning",
      image:
        "https://images.pexels.com/photos/3258128/pexels-photo-3258128.jpeg",
      desc: "Clear debris to prevent overflow, leaks, and foundation damage.",
    },
  ];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % services.length),
      SLIDE_DURATION_MS
    );
    return () => clearInterval(id);
  }, [services.length]);

  return (
    <Box px={["3%", "3%", "6%", "6%", "6%", "15%"]}>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            width: `${services.length * 100}%`,
            transform: `translateX(-${(100 / services.length) * idx}%)`,
            transition: "transform 400ms ease",
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                minWidth: `${100 / services.length}%`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 20px",
              }}
            >
              <Box position="relative" h="360px" w="100%" overflow="hidden">
                <Image
                  quality={80}
                  loading="lazy"
                  src={service.image}
                  alt={`${service.title} service`}
                  fill
                  style={{
                    borderRadius: " 20px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
            </div>
          ))}
        </div>
      </div>

      {/* dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          padding: "10px 0",
        }}
      >
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              border: "none",
              background: i === idx ? "#4A5568" : "#CBD5E0",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </Box>
  );
}

export default BannerSlider;
