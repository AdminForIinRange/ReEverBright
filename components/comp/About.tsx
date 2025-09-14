import React, { useEffect, useRef, useState } from "react";
import { Box, AspectRatio } from "@chakra-ui/react";
import badImg from "@/public/images/houseImg/badhouse.png";
import goodImg from "@/public/images/houseImg/goodHouse.png";

const ImageCompareSlider = () => {
  const beforeImg = badImg.src;
  const afterImg = goodImg.src;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [sliderX, setSliderX] = useState(0);
  const [containerW, setContainerW] = useState(0);
  const draggingRef = useRef(false);

  // measure and init slider
  const measure = () => {
    if (!containerRef.current) return;
    const w = containerRef.current.clientWidth;
    setContainerW(w);
    if (sliderX === 0 && w > 0) setSliderX(w / 2);
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateFromEvent = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let x = e.clientX - rect.left;
      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;
      setSliderX(x);
    };

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      el.setPointerCapture?.(e.pointerId);
      e.preventDefault();
      updateFromEvent(e);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      updateFromEvent(e);
    };

    const onPointerUp = (e: PointerEvent) => {
      draggingRef.current = false;
      el.releasePointerCapture?.(e.pointerId);
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove as any);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <AspectRatio ratio={16 / 9} width="100%">
      <Box
        ref={containerRef}
        position="relative"
        overflow="hidden"
        style={{ touchAction: "none", userSelect: "none" }}
      >
        {/* After (base) */}
        <Box
          as="img"
          src={afterImg}
          alt="After"
          width="100%"
          height="100%"
          objectFit="cover"
          draggable={false}
          pointerEvents="none"
        />

        {/* Before overlay with horizontal clip */}
        <Box
          as="img"
          src={beforeImg}
          alt="Before"
          position="absolute"
          inset="0"
          width="100%"
          height="100%"
          objectFit="cover"
          draggable={false}
          pointerEvents="none"
          style={{
            clipPath: `inset(0 ${Math.max(containerW - sliderX, 0)}px 0 0)`,
          }}
        />

        {/* Labels */}
        <Box
          position="absolute"
          top="10px"
          left="10px"
          zIndex={3}
          bg="rgba(255,255,255,0.8)"
          px="3"
          py="1"
          borderRadius="20px"
          fontSize="sm"
          fontWeight="bold"
        >
          Before
        </Box>
        <Box
          position="absolute"
          top="10px"
          right="10px"
          zIndex={3}
          bg="rgba(255,255,255,0.8)"
          px="3"
          py="1"
          borderRadius="20px"
          fontSize="sm"
          fontWeight="bold"
        >
          After
        </Box>

        {/* Slider line + handle */}
        <Box
          position="absolute"
          top="0"
          left={`${sliderX}px`}
          width="4px"
          height="100%"
          bg="white"
          zIndex={2}
        >
          <Box
            position="absolute"
            top="50%"
            left="-15px"
            transform="translateY(-50%)"
            width="30px"
            height="30px"
            bg="white"
            borderRadius="full"
            border="2px solid teal"
            boxShadow="lg"
          />
        </Box>
      </Box>
    </AspectRatio>
  );
};

export default ImageCompareSlider;
