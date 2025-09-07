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
    image: "https://images.pexels.com/photos/5652626/pexels-photo-5652626.jpeg",
    desc: "Deep-clean hard surfaces to remove grime, algae, and stubborn stains.",
  },
  {
    title: "Solar Cleaning",
    image: "https://images.pexels.com/photos/8853508/pexels-photo-8853508.jpeg",
    desc: "Maximize panel efficiency with streak-free, residue-free cleaning.",
  },
  {
    title: "Roof Cleaning",
    image: "https://images.pexels.com/photos/6474451/pexels-photo-6474451.jpeg",
    desc: "Safely lift moss and dark streaks to restore curb appeal.",
  },
  {
    title: "Gutter Cleaning",
    image: "https://images.pexels.com/photos/4894655/pexels-photo-4894655.jpeg",
    desc: "Clear debris to prevent overflow, leaks, and foundation damage.",
  },
];

function ServiceLayout() {
  return (
    <>
      <VStack
        justify="center"
        align="center"
        w="100%"
        textAlign="center"
        px={{ base: "4%", md: "6%", xl: "10%" }}
      >
        <VStack
          py={"50px"}
          borderRadius={["25px", "25px", "25px", "25px", "25px", "25px"]}
          bg={"cyan.500"}
          justify="center"
          align="center"
          textAlign="center"
          px={"4%"}
          w="100%"
        >
          <Text
            fontSize={["16px", "18px", "24px"]}
            fontFamily="poppins"
            fontWeight={700}
            lineHeight="1.6"
            color={"black"}
          >
           Be amazed at how good your property can look!
          </Text>
          <Text
            fontSize={["36px", "48px", "56px"]}
            fontWeight={700}
            fontFamily="poppins"
            lineHeight="1.1"
            color={"white"}
          >
            Restoring Your Most Valuable Asset
          </Text>
        </VStack>
      </VStack>
      <HStack
        wrap={"wrap"}
        justify={"center"}
        align={"center"}
        gap={["20px", "20px", "20px", "20px", "20px", "20px"]}
        py={"50px"}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      >
        {services.map((s) => (
          <ServicesBox key={s.title} title={s.title} image={s.image} />
        ))}
      </HStack>
    </>
  );
}

export default ServiceLayout;
