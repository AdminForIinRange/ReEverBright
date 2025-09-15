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

import one from "@/public/images/serviceImages/one.png";
import two from "@/public/images/serviceImages/two.png";
import three from "@/public/images/serviceImages/three.png";
import four from "@/public/images/serviceImages/four.png";
import five from "@/public/images/serviceImages/five.png";
import six from "@/public/images/serviceImages/six.png";
import seven from "@/public/images/serviceImages/seven.png";
import eight from "@/public/images/serviceImages/eight.png";

const services = [
  {
    key: "pressure-washing",
    title: "Pressure Washing",
    image:
     three,
    desc: "Deep-clean hard surfaces to remove grime, algae, and stubborn stains.",
    badge: "Most Popular",
    link: "pressure-washing",
  },
  {
    key: "solar-cleaning",
    title: "Solar Cleaning",
    image: seven,
    desc: "Maximize panel efficiency with streak-free, residue-free cleaning.",
    badge: "Eco Friendly",
    link: "solar-panel-cleaning",
  },
  {
    key: "roof-cleaning",
    title: "Roof Cleaning",
    image: five,
    desc: "Safely lift moss and dark streaks to restore curb appeal.",
    badge: "Value",
    link: "roof-cleaning",
  },
  {
    key: "gutter-cleaning",
    title: "Gutter Cleaning",
    image: one,
    desc: "Clear debris to prevent overflow, leaks, and foundation damage.",
    badge: "Essential",
    link: "gutter-cleaning",
  },
];
function ServiceLayout() {
  return (
    <>
      <VStack
        mt={{
          base: "80px",
          sm: "100px",
          md: "100px",
          lg: "220px",
          xl: "280px",
        }}
        justify="center"
        align="center"
        w="100%"
        textAlign="center"
        px={{ base: "2%", md: "6%", xl: "16%" }}
      >
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          textAlign={"center"}
        >
          <SectionHeading
            eyebrow="See the difference we make"
            title="How we can help your home"
          />
        </VStack>
      </VStack>

      <HStack
        mt={"50px"}
        wrap={["wrap", "wrap", "wrap", "wrap", "wrap", "wrap"]}
        justify={"center"}
        align={"center"}
        gap={["20px", "20px", "20px", "20px", "20px", "20px"]}
        px={{ base: "2%", md: "6%", xl: "16%" }}
      >
        {services.map((s) => (
          <ServicesBox
            key={s.title}
            title={s.title}
            image={s.image}
            desc={s.desc}
            badge={s.badge}
            link={s.link}
          />
        ))}
      </HStack>
    </>
  );
}

export default ServiceLayout;
