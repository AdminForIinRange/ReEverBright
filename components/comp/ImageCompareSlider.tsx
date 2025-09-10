import React, { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import badImg from "@/public/images/houseImg/badhouse.png";
import goodImg from "@/public/images/houseImg/goodHouse.png";

const ImageCompareSlider = () => {
  const topImage = goodImg.src;
  const bottomImage = badImg.src;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [sliderY, setSliderY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  // Keep height/slider in sync with container size (ResizeObserver is more reliable on mobile)
  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const ro = new ResizeObserver(() => {
      const h = el.offsetHeight || 0;
      setContainerHeight(h);
      setSliderY((y) => (y === 0 ? h / 2 : Math.min(Math.max(y, 0), h)));
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const clampY = (y: number) => Math.min(Math.max(y, 0), containerHeight);

  const updateFromClientY = (clientY: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSliderY(clampY(clientY - rect.top));
  };

  const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    setIsDragging(true);
    try {
      (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    } catch {}
    // Prevent the browser from initiating native scroll/zoom
    e.preventDefault();
    updateFromClientY(e.clientY);
  };

  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // keep the page from scrolling while dragging
    updateFromClientY(e.clientY);
  };

  const endDrag: React.PointerEventHandler<HTMLDivElement> = (e) => {
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <Box

      ref={containerRef}
      position="relative"
      width="100%"
      // pick one: set a fixed height, or wrap in an AspectRatio
      height="320px"
      overflow="hidden"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      cursor={isDragging ? "grabbing" : "grab"}
      // Key: disable native touch gestures inside the slider
      sx={{
        touchAction: "none",
        overscrollBehavior: "contain",
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
      aria-label="Image comparison slider"
      role="group"
    >
      {/* Base image */}
      <Box
        as="img"
        src={topImage}
        width="100%"
        height="100%"
        display="block"
        objectFit="cover"
        draggable={false}
        pointerEvents="none"
        sx={{ WebkitUserDrag: "none", userSelect: "none" }}
        alt="After"
      />

      {/* Overlay image with vertical clipping */}
      <Box
        as="img"
        src={bottomImage}
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        draggable={false}
        pointerEvents="none"
        sx={{
          clipPath: `inset(0 0 ${Math.max(containerHeight - sliderY, 0)}px 0)`,
          WebkitUserDrag: "none",
          userSelect: "none",
        }}
        alt="Before"
      />

      {/* Labels */}
      <Box
        position="absolute"
        top="10px"
        left="10px"
        zIndex="3"
        bg="rgba(255, 255, 255, 0.8)"
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
        zIndex="3"
        bg="rgba(255, 255, 255, 0.8)"
        px="3"
        py="1"
        borderRadius="20px"
        fontSize="sm"
        fontWeight="bold"
      >
        After
      </Box>

      {/* Draggable horizontal slider */}
      <Box
        position="absolute"
        top={`${sliderY}px`}
        left="0"
        width="100%"
        height="4px"
        bg="white"
        zIndex="2"
        cursor="ns-resize"
        onPointerDown={handlePointerDown}
        // Also disable native gestures on the draggable bar itself
        sx={{ touchAction: "none" }}
        aria-label="Drag to compare images"
      >
        <Box
          position="absolute"
          left="50%"
          top="-15px"
          transform="translateX(-50%)"
          width="36px"
          height="36px"
          bg="white"
          borderRadius="full"
          border="2px solid teal"
          boxShadow="lg"
          _hover={{ transform: "translateX(-50%) scale(1.06)" }}
          transition="transform 0.2s ease"
          pointerEvents="none"
        />
      </Box>
    </Box>
  );
};

export default ImageCompareSlider;
