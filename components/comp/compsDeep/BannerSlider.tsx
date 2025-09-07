import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const SLIDE_DURATION_MS = 4000; // each slide duration

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
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  // autoplay with visible progress bar (resets each idx change)
  useEffect(() => {
    let raf: number | null = null;
    let start = performance.now();

    const tick = (now: number) => {
      if (paused) {
        start = now - (progress / 100) * SLIDE_DURATION_MS;
      }
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / SLIDE_DURATION_MS) * 100);
      if (!paused) setProgress(pct);

      if (!paused && pct >= 100) {
        setIdx((i) => (i + 1) % services.length);
        setProgress(0);
        start = now;
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, paused, services.length]);

  // swipe / drag (mouse or touch)
  const startXRef = useRef<number | null>(null);
  const draggingRef = useRef(false);

  const onPointerDown = (clientX: number) => {
    startXRef.current = clientX;
    draggingRef.current = true;
    setPaused(true);
  };
  const onPointerMove = (clientX: number) => {
    if (!draggingRef.current || startXRef.current == null) return;
    // (optional) could add live drag here; we keep it simple/snappy
  };
  const onPointerUp = (clientX: number | null) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const startX = startXRef.current;
    startXRef.current = null;
    if (clientX == null || startX == null) {
      setPaused(false);
      return;
    }
    const dx = clientX - startX;
    const THRESH = 40; // pixels
    if (Math.abs(dx) > THRESH) {
      setIdx((i) =>
        dx < 0 ? (i + 1) % services.length : (i - 1 + services.length) % services.length
      );
      setProgress(0);
    }
    setPaused(false);
  };

  // keyboard support
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setIdx((i) => (i + 1) % services.length);
      setProgress(0);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setIdx((i) => (i - 1 + services.length) % services.length);
      setProgress(0);
    }
  };

  return (
    <HStack
      px={{ base: "4%", md: "6%", xl: "16%" }}
      gap={"40px"}
      align="stretch"
      flexWrap="wrap"
    >
      {/* Left copy column (fixed width, then wraps on mobile) */}
      <VStack
        justify="flex-start"
        align="flex-start"
        textAlign="left"
        w={{ base: "100%", md: "42%" }}
        maxW={{ md: "560px" }}
        spacing={3}
      >
        <Text
          fontSize={["16px", "18px", "24px"]}
          fontFamily="poppins"
          fontWeight={700}
          lineHeight="1.6"
          color="blue.400"
        >
          What our customers say
        </Text>
        <Text
          fontSize={["36px", "48px", "56px"]}
          fontWeight={700}
          fontFamily="poppins"
          lineHeight="1.1"
        >
          See what they're saying about us
        </Text>
        {/* horizontal rule (fixes the vertical line issue) */}
        <Box my="20px" w="100%" h="1px" bg="gray.200" />
      </VStack>

      {/* Right slider column */}
      <Box
        role="region"
        aria-label="Service highlights slider"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onMouseDown={(e) => onPointerDown(e.clientX)}
        onMouseMove={(e) => onPointerMove(e.clientX)}
        onMouseUp={(e) => onPointerUp(e.clientX)}
        onMouseLeave={() => onPointerUp(null)}
        onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
        onTouchEnd={(e) =>
          onPointerUp(e.changedTouches && e.changedTouches[0]?.clientX)
        }
        position="relative"
        overflow="hidden"
        flex="1"
        minW={{ base: "100%", md: "0" }}
        borderRadius="20px"
      >
        {/* Track */}
        <div
          style={{
            display: "flex",
            width: `${services.length * 100}%`,
            transform: `translateX(-${
              (100 / services.length) * idx
            }%)`,
            transition: draggingRef.current
              ? "none"
              : "transform 500ms cubic-bezier(.2,.8,.2,1)",
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                minWidth: `${100 / services.length}%`,
                padding: "0", // edge-to-edge image
              }}
              aria-hidden={i !== idx}
            >
              <Box position="relative" h={{ base: "280px", md: "420px" }} w="100%">
                <Image
                  src={service.image}
                  alt={`${service.title} — ${service.desc}`}
                  fill
                  priority={i === idx}
                  loading={i === idx ? "eager" : "lazy"}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <Box
          position="absolute"
          left="12px"
          right="12px"
          bottom="10px"
          h="4px"
          bg="blackAlpha.200"
          borderRadius="999px"
          overflow="hidden"
        >
          <Box
            h="100%"
            bg="blue.400"
            borderRadius="999px"
            style={{
              width: `${progress}%`,
              transition: paused ? "none" : "width 80ms linear",
            }}
          />
        </Box>

        {/* Dots */}
        <Box
          position="absolute"
          bottom="18px"
          right="20px"
          display="flex"
          gap="6px"
          pointerEvents="auto"
        >
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIdx(i);
                setProgress(0);
              }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                border: "none",
                background: i === idx ? "#2D3748" : "#CBD5E0",
                opacity: i === idx ? 1 : 0.9,
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      </Box>
    </HStack>
  );
}

export default BannerSlider;
