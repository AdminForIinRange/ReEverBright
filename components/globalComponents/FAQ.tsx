"use client";

import { useState, useEffect } from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  Star,
  Shield,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import ScheduleConsultation from "./luxeComponents/scheduleConsultation";
import SectionHeading from "../comp/compsDeep/SectionHeading";
const faqs = [
  {
    question: "Is pressure washing safe for my home?",
    answer:
      "Yes—when done correctly. We adjust PSI and nozzles for each surface and use soft-wash (low pressure + detergents) on delicate areas like render, painted exteriors, roofs and timber. We pre-soak, protect nearby plants, and finish with a thorough rinse. Fully insured for your peace of mind.",
    category: "safety",
  
  },
  {
    question: "What surfaces can you clean?",
    answer:
      "Driveways, paths, pavers and concrete; brick and retaining walls; house exteriors (soft-wash for render/painted surfaces); roofs (Colorbond and tile via soft-wash), gutters and fascias; decks, pergolas and fences; plus solar panels (streak-free, no harsh chemicals).",
    category: "services",

  },
  {
    question: "How often should I book exterior cleaning in Adelaide?",
    answer:
      "Most homes benefit from a house wash every 12–18 months. High-traffic areas like driveways/pavers: every 6–12 months. Gutters: 1–2 times per year. Coastal or hills locations may need more frequent cleans due to salt, pollen and moisture. Ask us for a free, tailored schedule.",
    category: "getting-started",
  
  },
  {
    question: "Will pressure washing remove oil stains and mould?",
    answer:
      "Yes. We use hot water units, specialty degreasers, and mould-killing detergents to break down tough oil spots, grease, moss and algae. Some older or deep-set stains may lighten rather than disappear completely, but we always achieve the best possible result.",
    category: "results",
  
  },
  {
    question: "Do you need access to water and power?",
    answer:
      "In most cases, yes—we connect to an outdoor tap and power point. For properties without easy access, we can bring portable water tanks and generators (additional fee). We’ll confirm setup during your free quote so there are no surprises.",
    category: "requirements",

  },
  {
    question: "How long does a typical job take?",
    answer:
      "It depends on size and condition. A standard driveway usually takes 1–2 hours. A full house wash can be 3–5 hours. Larger commercial or multi-surface cleans may take a full day. We always provide an estimated timeframe upfront.",
    category: "services",
  
  },
  {
    question: "Is pressure washing environmentally friendly?",
    answer:
      "We use eco-safe detergents that break down quickly, capture run-off when needed, and adjust water use for efficiency. Pressure washing uses less water than hosing, because it’s faster and more effective. Safe for your garden, pets, and the environment.",
    category: "safety",
    
  },
  {
    question: "Do you work on commercial properties as well?",
    answer:
      "Absolutely. We clean shopfronts, carparks, warehouses, schools, strata and council facilities. We can schedule after-hours or weekends to minimise disruption and provide ongoing maintenance plans for businesses.",
    category: "services",
   
  },
  {
    question: "What does it cost to pressure wash a driveway?",
    answer:
      "Pricing depends on size, condition, and access. As a guide, a standard single driveway in Adelaide starts around $180–$250. Larger or heavily stained areas may cost more. We provide clear, no-obligation quotes before starting.",
    category: "pricing",
  
  },
];

const FAQ = ({ type }: { type: string }) => {
  const router = useRouter();
  const isPricing = type === "pricing";
  const selectedFaqs = isPricing ? pricingFaqs : faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(
    Array(selectedFaqs.length).fill(false),
  );

  // Staggered animation for FAQ items
  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedItems = [...animatedItems];
      for (let i = 0; i < selectedFaqs.length; i++) {
        setTimeout(() => {
          newAnimatedItems[i] = true;
          setAnimatedItems([...newAnimatedItems]);
        }, i * 100);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedFaqs]);

  // Get unique categories
  const categories = [
    "all",
    ...Array.from(new Set(selectedFaqs.map((faq) => faq.category))),
  ];

  // Filter FAQs by category
  const filteredFaqs =
    activeCategory === "all"
      ? selectedFaqs
      : selectedFaqs.filter((faq) => faq.category === activeCategory);

  // Header section with consultation button and benefits

  // FAQ section
  return (
    <Box
      maxWidth="1400px"
      mx="auto"
      px={["20px", "30px", "40px"]}
      mt={"100px"}
      pb={32}
    >
      {/* Decorative elements */}
      <Box position="relative">
        <VStack justify={"space-between"} align={"Center"} w="100%" h={"100%"}>
          {/* FAQ Title Section */}
       <VStack justify="center" align="center" textAlign="center" w="100%">
    <Text
      fontSize={["16px", "18px", "24px"]}
      fontFamily="poppins"
      fontWeight={700}
      lineHeight="1.6"
     color={"black"}
    >
    Frequently Asked Questions
    </Text>
    <Text
      fontSize={["36px", "48px", "56px"]}
      fontWeight={700}
      fontFamily="poppins"
      lineHeight="1.1"
        color={"black"}
    >
      FAQ
    </Text>
    <Box my="25px" w={["100%", "600px"]} borderWidth="1px" />
  </VStack>

          {/* Category filters */}

          {/* FAQ Items */}
          <Box
            maxWidth="1200px"
            mx="auto"
            px={["0", "20px", "40px"]}
            position="relative"
          >
            {filteredFaqs.map((faq, index) => {
              const IconComponent = faq.icon || CheckCircle;

              return (
                <Box
                  key={index}
                  borderBottom="1px solid #E5E7EB"
                  py={5}
                  opacity={animatedItems[index] ? 1 : 0}
                  transform={
                    animatedItems[index] ? "translateY(0)" : "translateY(20px)"
                  }
                  transition="all 0.4s"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    cursor="pointer"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    py={3}
                    px={4}
                    _hover={{ bg: "#F9FAFB" }}
                    transition="all 0.2s"
                    borderRadius="8px"
                    position="relative"
                  >
                    {/* Icon indicator */}

                    <Text
                      fontWeight="600"
                      color={openIndex === index ? "#0A1029" : "#111827"}
                      pr={10}
                      flex="1"
                      transition="all 0.2s"
                      as={"p"}
                      textStyle={"basicText"}
                    >
                      {faq.question}
                    </Text>
                    <Box
                      color="#6B7280"
                      bg={openIndex === index ? "#F3F4F6" : "transparent"}
                      p={2}
                      borderRadius="full"
                      transition="all 0.2s"
                    >
                      {openIndex === index ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </Box>
                  </Box>

                  {/* Answer */}
                  <Box
                    height={openIndex === index ? "auto" : "0px"}
                    overflow="hidden"
                    transition="all 0.4s"
                    opacity={openIndex === index ? 1 : 0}
                    mt={openIndex === index ? 3 : 0}
                    mb={openIndex === index ? 4 : 0}
                    pl={[4, 4, 6]}
                    pr={[4, 4, 10]}
                    position="relative"
                  >
                    <Text
                      as={"p"}
                      textStyle={"basicText"}
                      color="#4B5563"
                      lineHeight="1.8"
                      position="relative"
                      _before={{
                        content: '""',
                        position: "absolute",
                        left: "-20px",
                        top: "12px",
                        width: "12px",
                        height: "1px",
                        background: "#CBD5E1",
                        display: ["none", "none", "block"],
                      }}
                    >
                      {faq.answer}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </VStack>
        {/* Still have questions section */}
        <Box
          mt={20}
          bg="#F9FAFB"
          p={8}
          borderRadius="16px"
          maxWidth="1200px"
          mx="auto"
          display="flex"
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          justifyContent="space-between"
          gap={8}
          boxShadow="0 4px 20px rgba(0,0,0,0.03)"
          border="1px solid #E5E7EB"
        >
          <Box flex="1">
            <Text
              textStyle={"basicText"}
              fontWeight="700"
              color="#0A1029"
              mb={2}
              as={"h3"}
            >
              Still have questions?
            </Text>
            <Text
              textStyle={"basicText"}
              color="#4B5563"
              lineHeight="1.6"
              as={"p"}
            >
              Our team is ready to provide personalized answers to all your
              questions about AirBnB management and how we can help maximize
              your property's potential.
            </Text>
          </Box>
          <Box
            aria-label="Contact us"
            as={"button"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="#0A1029"
            color="white"
            py={3}
            px={6}
            borderRadius="full"
            fontWeight="600"
            cursor="pointer"
            _hover={{ bg: "#1A2142", transform: "translateY(-2px)" }}
            transition="all 0.3s"
            boxShadow="0 4px 12px rgba(10, 16, 41, 0.15)"
            whiteSpace="nowrap"
            onClick={() => router.push("/contact")}
          >
            <Text mr={2} textStyle={"basicText"}>
              Contact us
            </Text>
            <ArrowRight size={16} />
          </Box>
        </Box>

        {/* Stats section */}
      </Box>
    </Box>
  );
};

export default FAQ;
