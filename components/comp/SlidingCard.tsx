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

  const visible = useMemo(
    () => [start, start + 1, start + 2].map((i) => SLIDES[mod(i, total)]),
    [start, total]
  );

  const next = useCallback(() => setStart((s) => mod(s + 1, total)), [total]);
  const prev = useCallback(() => setStart((s) => mod(s - 1, total)), [total]);

  return (
    <Box
      fontFamily="poppins"
      bg="cyan.200"
      py={{ base: "80px", md: "100px", lg: "120px" }}
      position="relative"
      overflow="hidden"
    >
      {/* Heading */}
      <VStack spacing={8} textAlign="center" px={{ base: "6%", md: "10%" }}>
        <SectionHeading
          eyebrow="You'll be amazed at how good your property can look!"
          title="Adelaide Exterior Cleaning"
          color="white"
        />
      </VStack>

      {/* Left Arrow */}
  

      {/* Slides */}
      <HStack
        px={{ base: "6%", md: "10%" }}
        justify="center"
        align="stretch"
        spacing={{ base: 6, md: 8, lg: 10 }}
        mt={12}
        wrap="wrap"
      >
        {visible.map((slide) => (
          <Box
            key={slide.id}
            flex={["1 1 100%", "1 1 45%", "1 1 30%"]}
            maxW="420px"
            bg="white"
            borderRadius="xl"
            shadow="md"
            p={{ base: 6, md: 8 }}
            transition="all 250ms ease"
            _hover={{ transform: "scale(1.03)", shadow: "xl" }}
          >
            <VStack align="start" spacing={5}>
              <Box
                w="52px"
                h="52px"
                borderRadius="full"
                display="grid"
                placeItems="center"
                bg="blue.100"
              >
                <Icon as={slide.icon} boxSize={7} color="blue.600" />
              </Box>

              <Text
                color="gray.800"
                fontWeight="700"
                fontSize={{ base: "lg", md: "xl" }}
              >
                {slide.title}
              </Text>

              <Text
                color="gray.600"
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
