"use client";

import { useState, useMemo, useCallback } from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Icon,
  IconButton,
  useToken,
} from "@chakra-ui/react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  ShieldCheck,
  ThumbsUp,
  Star,
  Sparkles,
} from "lucide-react";
import SectionHeading from "./compsDeep/SectionHeading";

type Slide = {
  id: number;
  title: string;
  body: string;
  icon: React.ComponentType<any>;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Spotless Results",
    body: "Couldn’t believe the difference. Driveway looks brand new and the crew was on time and friendly.",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Reliable & Professional",
    body: "Communication was excellent from quote to finish. Fast turnaround and zero mess left behind.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Great Value",
    body: "Fair pricing for top quality work. They explained everything and delivered exactly what they promised.",
    icon: Star,
  },
  {
    id: 4,
    title: "Trusted Team",
    body: "I felt comfortable the whole time. Respectful, efficient, and they took care around our garden.",
    icon: ThumbsUp,
  },
  {
    id: 5,
    title: "Five-Star Service",
    body: "From booking to completion, the process was seamless. Highly recommend to family and friends.",
    icon: Quote,
  },
  {
    id: 6,
    title: "Attention to Detail",
    body: "They got into all the edges and corners most people miss. Looks amazing in photos too!",
    icon: Sparkles,
  },
];

const mod = (n: number, m: number) => ((n % m) + m) % m;

const SlidingCard = () => {
  const [start, setStart] = useState(0);
  const total = SLIDES.length;
  const [blue800, blue200, whiteAlpha] = useToken("colors", [
    "blue.800",
    "blue.200",
    "whiteAlpha.300",
  ]);

  const visible = useMemo(
    () => [start, start + 1, start + 2].map((i) => SLIDES[mod(i, total)]),
    [start, total]
  );

  const next = useCallback(() => setStart((s) => mod(s + 1, total)), [total]);
  const prev = useCallback(() => setStart((s) => mod(s - 1, total)), [total]);

  return (
    <Box
      fontFamily={"poppins"}
      bg="blue.800"
      py={{ base: "80px", md: "100px", lg: "120px" }}
      position="relative"
      overflow="hidden"
    >
      <VStack
        justify="center"
        align="center"
        w="100%"
        textAlign="center"
        px={{ base: "4%", md: "6%", lg: "10%" }}
      >
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          textAlign={"center"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          <SectionHeading
            eyebrow={`You'll be amazed at how good your property can look!`}
            title="Adelaide Exterior Cleaning"
            color="white"
          />
        </VStack>
      </VStack>

      {/* Left Arrow */}
      <IconButton
        aria-label="Previous"
        icon={<ArrowLeft />}
        onClick={prev}
        variant="ghost"
        position="absolute"
        top="50%"
        left={{ base: "6px", md: "18px" }}
        transform="translateY(-50%)"
        zIndex={5}
        size="lg"
        color="white"
        _hover={{ bg: "whiteAlpha.200" }}
      />

      {/* Right Arrow */}
      <IconButton
        aria-label="Next"
        icon={<ArrowRight />}
        onClick={next}
        variant="ghost"
        position="absolute"
        top="50%"
        right={{ base: "6px", md: "18px" }}
        transform="translateY(-50%)"
        zIndex={5}
        size="lg"
        color="white"
        _hover={{ bg: "whiteAlpha.200" }}
      />

      {/* 3-up sliding cards */}
      <HStack
        px={{ base: "4%", md: "6%", lg: "10%" }}
        justify="center"
        align="stretch"
        w="100%"
        gap={{ base: "16px", md: "24px", lg: "28px" }}
        wrap={"wrap"}
      >
        {visible.map((slide) => (
          <Box
            key={slide.id}
            flex="1 1 0"
            maxW="480px"
            bg="white"
            borderRadius="xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            p={{ base: 6, md: 7 }}
            transition="transform 200ms ease, background 150ms ease"
            _hover={{ transform: "translateY(-4px)", bg: "gray.100" }}
          >
            <VStack align="start" spacing={4}>
              <Box
                w="48px"
                h="48px"
                borderRadius="full"
                display="grid"
                placeItems="center"
                bg="BlackAlpha.200"
              >
                <Icon as={slide.icon} boxSize={6} color="Black" />
              </Box>

              <Text
                color="Black"
                fontWeight="800"
                fontSize={{ base: "lg", md: "xl" }}
              >
                {slide.title}
              </Text>

              <Text
                color="BlackAlpha.900"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.7"
              >
                {slide.body}
              </Text>
            </VStack>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default SlidingCard;
