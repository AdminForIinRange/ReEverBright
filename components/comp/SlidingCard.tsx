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
    title: "100% Satisfaction Guarantee",
    body: "If you're not happy, we're not happy. We'll work with you to make it right.",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Fully Insured",
    body: "We're fully insured, so you can have peace of mind.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Always On Time",
    body: "We show up on time, every time. No exceptions.",
    icon: Star,
  },
  {
    id: 4,
    title: "Only Professional-Grade Equipment",
    body: "We only use the best equipment to ensure the best results.",
    icon: ThumbsUp,
  },
];

const SlidingCard = () => {
  // we keep state/hooks minimal; no arrows, no rotation
  return (
    <Box
      px={{ base: "6%", md: "10%" }}
      mt={{ base: 10, md: 12 }}
      position="relative"
    >
      <Box py={{ base: "56px", md: "80px" }}>
        <SectionHeading
          eyebrow="Why Choose Us?"
          title="We're the best in the business"
        />
      </Box>

      {/* Single square with 4 quadrants */}
      <Box
        mx="auto"
        maxW={{ base: "720px", md: "900px" }}
        bg="white"
        borderRadius="xl"
        boxShadow="md"
        overflow="hidden"
        position="relative"
        w="100%"
        // responsive square: a bit taller on small screens for readability
        pb={{ base: "140%", sm: "100%", md: "70%", lg: "50%", xl: "40%" }}
        minH="340px"
      >
        {/* Divider lines */}
        <Box
          position="absolute"
          left="50%"
          top={0}
          bottom={0}
          w="1px"
          bg="gray.200"
        />
        <Box
          position="absolute"
          top="50%"
          left={0}
          right={0}
          h="1px"
          bg="gray.200"
        />

        {/* 4 slides → 4 quadrants */}
        {([0, 1, 2, 3] as const).map((i) => {
          const slide = SLIDES[i];
          const positions = [
            { top: 0, left: 0 }, // TL
            { top: 0, left: "50%" }, // TR
            { top: "50%", left: 0 }, // BL
            { top: "50%", left: "50%" }, // BR
          ][i];

          return (
            <Box
              key={slide.id}
              position="absolute"
              {...positions}
              w="50%"
              h="50%"
              p={{ base: 4, md: 6, lg: 8 }}
              pr={{ base: 4, md: 8 }}
              overflow="hidden"
              _hover={{ bg: "gray.50" }}
              transition="background 180ms ease"
            >
              <VStack align="start" spacing={{ base: 2.5, md: 3 }}>
                <Box
                  w={{ base: "40px", md: "48px" }}
                  h={{ base: "40px", md: "48px" }}
                  borderRadius="full"
                  display="grid"
                  placeItems="center"
                  bg="blue.100"
                  flexShrink={0}
                >
                  <Icon
                    as={slide.icon}
                    boxSize={{ base: 5, md: 6 }}
                    color="blue.600"
                  />
                </Box>

                <Text
                  color="gray.800"
                  fontWeight="700"
                  fontSize={{ base: "clamp(14px, 2.8vw, 16px)", md: "lg" }}
                  noOfLines={2}
                >
                  {slide.title}
                </Text>

                <Box overflowY="auto">
                  <Text
                    color="gray.600"
                    fontSize={{ base: "clamp(13px, 2.6vw, 15px)", md: "md" }}
                    lineHeight="1.6"
                  >
                    {slide.body}
                  </Text>
                </Box>
              </VStack>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SlidingCard;
