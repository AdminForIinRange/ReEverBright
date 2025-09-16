import React, { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import badImg from "@/public/images/houseImg/badhouse.png";
import goodImg from "@/public/images/houseImg/goodHouse.png";

const ImageCompareFullPage = () => {
  const beforeImg = badImg.src;
  const afterImg = goodImg.src;

  const ref = useRef<HTMLDivElement | null>(null);
  const [sliderX, setSliderX] = useState(0);
  const draggingRef = useRef(false);

  // center the slider on mount & on resize
  const measure = () => {
    if (!ref.current) return;
    setSliderX(ref.current.clientWidth / 2);
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = (e: PointerEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      let x = e.clientX - r.left;
      if (x < 0) x = 0;
      if (x > r.width) x = r.width;
      setSliderX(x);
    };

    const onDown = (e: PointerEvent) => {
      draggingRef.current = true;
      el.setPointerCapture?.(e.pointerId);
      e.preventDefault();
      update(e);
    };
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      update(e);
    };
    const onUp = (e: PointerEvent) => {
      draggingRef.current = false;
      el.releasePointerCapture?.(e.pointerId);
    };

    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove as any);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <Box
      ref={ref}
      position="relative"
      // Full page
      w="100vw"
      h="100vh"
      // break out of any parent padding to truly be full-bleed
      ml="calc(50% - 50vw)"
      mr="calc(50% - 50vw)"
      overflow="hidden"
      // mobile drag: don't scroll the page while sliding
      style={{ touchAction: "none", userSelect: "none" }}
    >
      {/* After (base) */}
      <Box
        as="img"
        src={afterImg}
        alt="After"
        position="absolute"
        inset="0"
        w="100%"
        h="100%"
        objectFit="cover"
        draggable={false}
        pointerEvents="none"
      />

      {/* Before overlay (horizontal clip) */}
      <Box
        as="img"
        src={beforeImg}
        alt="Before"
        position="absolute"
        inset="0"
        w="100%"
        h="100%"
        objectFit="cover"
        draggable={false}
        pointerEvents="none"
        style={{
          clipPath: `inset(0 calc(100% - ${sliderX}px) 0 0)`,
        }}
      />

      {/* Labels */}
      <Box
        position="absolute"
        top="14px"
        left="14px"
        zIndex={3}
        bg="rgba(255,255,255,0.85)"
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
        top="14px"
        right="14px"
        zIndex={3}
        bg="rgba(255,255,255,0.85)"
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
        w="4px"
        h="100%"
        bg="white"
        zIndex={2}
      >
        <Box
          position="absolute"
          top="50%"
          left="-15px"
          transform="translateY(-50%)"
          w="30px"
          h="30px"
          bg="white"
          borderRadius="full"
          border="2px solid teal"
          boxShadow="lg"
        />
      </Box>
    </Box>
  );
};

export default ImageCompareFullPage;
