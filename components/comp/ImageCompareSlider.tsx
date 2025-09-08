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

  // Keep height/slider in sync with container size
  useEffect(() => {
    const updateHeight = () => {
      if (!containerRef.current) return;
      const height = containerRef.current.offsetHeight;
      setContainerHeight(height);
      setSliderY((y) => (y === 0 ? height / 2 : Math.min(Math.max(y, 0), height)));
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const clampY = (y: number) => Math.min(Math.max(y, 0), containerHeight);

  const updateFromClientY = (clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setSliderY(clampY(clientY - rect.top));
  };

  // Pointer events unify mouse + touch and let us prevent scrolling cleanly
  const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    setIsDragging(true);
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    e.preventDefault(); // stop page gestures
    updateFromClientY(e.clientY);
  };

  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // keep the page from scrolling
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
      /* pick one of these height strategies:
         - fixed: height="320px"
         - responsive ratio: use Chakra's aspectRatio prop if available (Box as AspectRatio)
         For now, keep 100% if parent controls height. */
      height="100%"
      overflow="hidden"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      cursor={isDragging ? "grabbing" : "grab"}
      // CRUCIAL: disable native touch scrolling inside the slider
      sx={{
        touchAction: "none",
        overscrollBehavior: "contain",
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
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
        // The bar itself also captures pointer to begin dragging
        onPointerDown={handlePointerDown}
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
          pointerEvents="none" // knob is decorative; the bar handles input
        />
      </Box>
    </Box>
  );
};

export default ImageCompareSlider;
