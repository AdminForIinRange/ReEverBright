"use client";
import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Google from "@/public/Google.png";
import Adl from "@/public/images/aerial-city-adelaide.jpeg";
import { FaStar } from "react-icons/fa";
import FreeQuote from "@/components/comp/FreeQuote";
import HeroText from "@/components/comp/HeroText";
import ImageCompareSlider from "@/components/comp/ImageCompareSlider";
import router from "next/router";
import ServicesBox from "@/components/comp/compsDeep/ServicesBox";
import ReviewSection from "@/components/comp/ReviewSection";

// ✅ NEW: import your de-dupe components
import QuoteButton from "@/components/comp/compsDeep/QuoteButton";
import BadgeItem from "@/components/comp/compsDeep/BadgeItem";
import PromiseItem from "@/components/comp/compsDeep/PromiseItem";
import SectionHeading from "@/components/comp/compsDeep/SectionHeading";
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
    image: "https://images.pexels.com/photos/2513975/pexels-photo-2513975.jpeg",
    desc: "Safely lift moss and dark streaks to restore curb appeal.",
  },
  {
    title: "Gutter Cleaning",
    image: "https://images.pexels.com/photos/3258128/pexels-photo-3258128.jpeg",
    desc: "Clear debris to prevent overflow, leaks, and foundation damage.",
  },
];
function ServiceLayout() {
  return (
    <>
      <VStack
        mt={{ base: "80px", xl: "280px" }}
        justify="center"
        align="center"
        w="100%"
        textAlign="center"
             px={{ base: "3%", md: "6%", xl: "16%" }}
      >
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          textAlign={"center"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          <SectionHeading
            eyebrow="See the difference we make"
            title="How we can help you home"
            color="cyan.600"
          />
        </VStack>
      </VStack>

      <HStack
        wrap={["wrap", "wrap", "wrap", "wrap", "wrap", "wrap"]}
        justify={"center"}
        align={"center"}
        gap={["20px", "20px", "20px", "20px", "20px", "20px"]}
        py={"50px"}
             px={{ base: "3%", md: "6%", xl: "16%" }}
      >
        {services.map((s) => (
          <ServicesBox key={s.title} title={s.title} image={s.image} />
        ))}
      </HStack>
    </>
  );
}

export default ServiceLayout;
