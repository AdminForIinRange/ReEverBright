"use client";

import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
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
const faqs = [
  {
    question: "What services does your AirBnB management offer?",
    answer:
      "At Luxe Managements, we offer end-to-end AirBnB and short-stay property management. From creating standout listings and handling all guest communication, to dynamic pricing, professional cleaning, hotel-quality linen, and round-the-clock maintenance — we take care of everything so you can enjoy stress-free passive income. Our service is tailored to deliver a seamless, high-end hosting experience.",
    category: "services",
    icon: Star,
  },
  {
    question: "How do you help maximize rental income?",
    answer:
      "We use real-time market data and advanced pricing tools to ensure your property is always listed at the optimal rate. Combined with high-converting listings, professional photography, and multi-platform exposure across AirBnB, Booking.com, and more, our strategies regularly boost income by up to 40%. Higher occupancy, better reviews, and premium nightly rates that's the Luxe difference.",
    category: "services",
    icon: Award,
  },
  {
    question: "What types of properties do you manage?",
    answer:
      "Luxe specializes in managing a diverse portfolio of short-term rental properties, including stylish city apartments, family homes, luxury holiday stays, and boutique accommodations. Whether you're in Adelaide or surrounding regions, we tailor our service to suit your property type and investment goals.",
    category: "services",
    icon: CheckCircle,
  },
  {
    question: "How does the linen and amenity service work?",
    answer:
      "We provide premium linen and amenity packages for every guest stay. Think crisp white sheets, plush towels, high-thread-count bedding, and luxury toiletries — all refreshed and professionally laundered between bookings. Our goal is to elevate the guest experience to five-star hotel standards, every time.",
    category: "services",
    icon: Star,
  },
  {
    question: "How can I get started with your services?",
    answer:
      "Getting started with Luxe is simple. Book a free consultation with our team — we'll inspect your property, provide income projections, and walk you through the onboarding process. From there, we handle everything: staging, photography, listings, guest communication, and ongoing operations. You relax — we do the work.",
    category: "getting-started",
    icon: Calendar,
  },
  {
    question: "What happens if there's an emergency at my property?",
    answer:
      "We offer 24/7 incident response and property oversight. Whether it's a late-night lockout or a maintenance issue, our local team is on-call and ready to act immediately. With Luxe, your property is always protected — and your guests are always looked after.",
    category: "support",
    icon: Shield,
  },
  {
    question: "Do you handle property marketing?",
    answer:
      "Absolutely. First impressions matter, and our in-house marketing team ensures your property stands out with professional photography, compelling copywriting, and strategic placement across high-traffic platforms. We showcase your home's best features to attract premium bookings and enhance long-term visibility.",
    category: "services",
    icon: Star,
  },
];

const pricingFaqs = [
  {
    question: "How does your pricing model work?",
    answer:
      "We charge 18% of booking profit — calculated as total revenue minus platform fees, cleaning, and utilities. This means we only succeed when you do. There are no hidden fees or lock-in contracts — just performance-based pricing designed to maximize your income.",
    category: "pricing",
    icon: CheckCircle,
  },
  {
    question: "What's included in the 18% management fee?",
    answer:
      "Our 18% fee covers full-service management: expert listing creation, dynamic pricing, 24/7 guest communication, professional photography, styling advice, review optimization, and ongoing maintenance coordination. It's a hands-off solution designed to elevate your earnings and guest experience.",
    category: "pricing",
    icon: CheckCircle,
  },
  {
    question: "How much can I expect to earn?",
    answer:
      "Properties managed by Luxe see an average revenue increase of 40% through better pricing, occupancy, and reviews. Every property is different — we offer a custom income projection during your free consultation to give you a clear idea of your earning potential.",
    category: "pricing",
    icon: Award,
  },
  {
    question: "Are there any upfront costs?",
    answer:
      "If your property needs photography, styling, or furnishing, we offer premium services at competitive rates. Photography starts at $250, while furnishing is calculated at 8% of the total item value. All costs are discussed transparently before any commitments.",
    category: "pricing",
    icon: CheckCircle,
  },
  {
    question: "Can I choose a different management plan?",
    answer:
      "Yes — we offer tiered plans (Essential, Standard, Premium) with varying levels of service and pricing, starting as low as 12%. Each plan offers different levels of support, marketing, and discounts, so you can choose what fits your goals and budget.",
    category: "pricing",
    icon: CheckCircle,
  },
  {
    question: "Do I have to pay for cleaning services?",
    answer:
      "Guests cover the basic cleaning fee as part of their booking. For owners, we offer premium cleaning (including linen and quality checks) with a 30% discount for managed properties. This ensures your space is spotless and always guest-ready.",
    category: "pricing",
    icon: CheckCircle,
  },
  {
    question: "How do I get a custom quote?",
    answer:
      "Simple — book a free consultation with our team. We'll assess your property, walk you through potential earnings, and provide a tailored quote based on your specific needs and the level of service you're after.",
    category: "pricing",
    icon: Calendar,
  },
];

// Benefits data


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
        {/* FAQ Title Section */}
        <Box textAlign="center" mb={16} position="relative">
          <Text
            textStyle={"title"}
            fontWeight="800"
            color="#0A1029"
            mb={3}
            letterSpacing="-0.03em"
            position="relative"
            display="inline-block"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "#0A1029",
              borderRadius: "full",
            }}
            as={"h2"}
          >
            FAQ
          </Text>
          <Text
            as="h3"
            textStyle={"basicText"}
            color="#4B5563"
            fontWeight="400"
            maxWidth="1200px"
            mx="auto"
            mt={6}
            lineHeight="1.6"
          >
            Frequently Asked Questions about our premium AirBnB management
            services
          </Text>
        </Box>

        {/* Category filters */}
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap={3}
          mb={12}
          mx="auto"
          maxWidth="1200px"
        >
          {categories.map((category, index) => (
            <Box
              key={index}
              py={2}
              px={4}
              borderRadius="full"
              bg={activeCategory === category ? "#0A1029" : "transparent"}
              color={activeCategory === category ? "white" : "#4B5563"}
              border="1px solid"
              borderColor={activeCategory === category ? "#0A1029" : "#E5E7EB"}
              cursor="pointer"
              onClick={() => setActiveCategory(category)}
              _hover={{
                borderColor: "#0A1029",
                color: activeCategory === category ? "white" : "#0A1029",
              }}
              transition="all 0.2s"
              textTransform="capitalize"
              fontWeight={activeCategory === category ? "600" : "400"}
              textStyle={"basicText"}
            >
              {category}
            </Box>
          ))}
        </Box>

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
