import React, { useEffect, useRef, useState } from "react";
import { Box, AspectRatio } from "@chakra-ui/react";
import badImg from "@/public/images/houseImg/badhouse.png";
import goodImg from "@/public/images/houseImg/goodHouse.png";

const ImageCompareSlider = () => {
  const topImage = goodImg.src;
  const bottomImage = badImg.src;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [sliderY, setSliderY] = useState(0);
  const [containerH, setContainerH] = useState(0);
  const draggingRef = useRef(false);

  // measure & center slider initially
  const measure = () => {
    if (!containerRef.current) return;
    const h = containerRef.current.clientHeight;
    setContainerH(h);
    if (sliderY === 0 && h > 0) setSliderY(h / 2);
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
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
      (e.target as HTMLElement)?.releasePointerCapture?.(e.pointerId);
    };

    const updateFromEvent = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let y = e.clientY - rect.top;
      if (y < 0) y = 0;
      if (y > rect.height) y = rect.height;
      setSliderY(y);
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
        // critical for mobile: prevents page from scrolling while dragging
        style={{ touchAction: "none", userSelect: "none" }}
        onLoad={measure as any}
      >
        {/* Base image */}
        <Box
          as="img"
          src={topImage}
          alt="After"
          width="100%"
          height="100%"
          objectFit="cover"
          draggable={false}
          pointerEvents="none"
        />

        {/* Overlay with vertical clip */}
        <Box
          as="img"
          src={bottomImage}
          alt="Before"
          position="absolute"
          inset="0"
          width="100%"
          height="100%"
          objectFit="cover"
          draggable={false}
          pointerEvents="none"
          style={{
            clipPath: `inset(0 0 ${Math.max(containerH - sliderY, 0)}px 0)`,
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
          bottom="10px"
          left="10px"
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

        {/* Slider bar + handle */}
        <Box
          position="absolute"
          top={`${sliderY}px`}
          left="0"
          width="100%"
          height="4px"
          bg="white"
          zIndex={2}
          // pointer events handled on container via pointerdown
        >
          <Box
            position="absolute"
            left="50%"
            top="-15px"
            transform="translateX(-50%)"
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
