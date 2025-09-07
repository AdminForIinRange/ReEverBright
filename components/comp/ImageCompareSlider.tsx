import React, { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import badImg from "@/public/images/houseImg/badhouse.png";
import goodImg from "@/public/images/houseImg/goodHouse.png";

const ImageCompareSlider = () => {
  const topImage = goodImg.src;
  const bottomImage = badImg.src;

  const containerRef = useRef(null);
  const [sliderY, setSliderY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight;
        setContainerHeight(height);
        setSliderY(height / 2);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newY = e.clientY - rect.top;
    if (newY < 0) newY = 0;
    if (newY > containerHeight) newY = containerHeight;
    setSliderY(newY);
  };
  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newY = e.touches[0].clientY - rect.top;
    if (newY < 0) newY = 0;
    if (newY > containerHeight) newY = containerHeight;
    setSliderY(newY);
  };
  const handleTouchEnd = () => setIsDragging(false);

  return (
    <Box
      ref={containerRef}
      position="relative"
      width="100%"
      height="100%"
      overflow="hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      cursor={isDragging ? "grabbing" : "grab"}
      style={{ userSelect: "none" }}
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
        style={{ userSelect: "none", pointerEvents: "none" }}
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
        style={{
          clipPath: `inset(0 0 ${containerHeight - sliderY}px 0)`,
          userSelect: "none",
          pointerEvents: "none",
          filter: "blur(1px)",
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
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        cursor="ns-resize"
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
          _hover={{ transform: "translateX(-50%) scale(1.1)" }}
          transition="transform 0.2s ease"
        />
      </Box>
    </Box>
  );
};

export default ImageCompareSlider;
