import type { Metadata } from "next";
import QuoteButton from "@/components/comp/compsDeep/QuoteButton";
import FreeQuoteLarge from "@/components/comp/FreeQuoteLarge";
import FAQ from "@/components/globalComponents/FAQ";
import { Box, VStack, Text, HStack, Link } from "@chakra-ui/react";
import { Phone } from "lucide-react";
import Image from "next/image";

import eight from "@/public/images/serviceImages/eight.png";

export const metadata: Metadata = {
  title: "Solar Panel Cleaning Adelaide | EverBright Pressure Washing",
  description:
    "Solar panel cleaning across Adelaide, SA to boost efficiency and protect your investment. Streak-free, chemical-free cleans for residential and commercial systems.",
  alternates: {
    canonical: "https://www.everbrightpressurewashing.au/services/solar-panel-cleaning",
  },
  openGraph: {
    title: "Solar Panel Cleaning Adelaide | EverBright Pressure Washing",
    description:
      "Professional solar panel cleaning in Adelaide and surrounding suburbs. Increase output with purified water cleaning.",
    url: "https://www.everbrightpressurewashing.au/services/solar-panel-cleaning",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

const SolarPanelCleaning = () => {
  const SolarPanelCleaningfaqs = [
    {
      q: "Why clean solar panels?",
      a: "Dirty solar panels lose efficiency. Dust, dirt, and bird droppings can reduce output by up to 30%. Solar panel cleaning ensures you get the most from your investment.",
    },
    {
      q: "Is solar panel cleaning safe?",
      a: "Yes. We use purified water and soft brushes - no harsh chemicals - to clean panels without scratching or damaging the glass.",
    },
    {
      q: "How often should solar panels be cleaned?",
      a: "At least once a year. In dusty areas or where birds are active, cleaning every 6 months is recommended to maintain maximum efficiency.",
    },
    {
      q: "Do I need to turn off my solar system before cleaning?",
      a: "No. Our cleaning process is safe and does not interfere with your solar system's operation.",
    },
    {
      q: "Do I need to be home during solar panel cleaning?",
      a: "Not at all. As long as we can safely access your roof, we'll complete the clean and you'll see the results immediately in your energy output.",
    },
  ];
  return (
    <Box bg="white" mt="-100px">
      {/* ===== HERO ===== */}
      <Box position="relative">
        {/* tint */}
        <Box
          borderRadius={{ base: "0 0 60px 60px", md: "0 0 90px 90px" }}
          position="absolute"
          inset={0}
          h={{ base: "440px", md: "520px" }}
          bgGradient="linear(to-r, rgba(2,23,58,0.88), rgba(2,23,58,0.78))"
          zIndex={-1}
        />

        {/* content */}
        <Box
          px={{ base: "1%", md: "6%", xl: "16%" }}
          pt={"150px"}
          pb={"50px"}
          bg={"cyan.600"}
        >
          <Text
            fontFamily="var(--font-poppins)"
            fontSize={{ base: "14px", md: "16px" }}
            color="white"
          >
            <Text as="span" color="cyan.900">
              home
            </Text>{" > "}
            services{" > "}
            <Text as="span" fontWeight="700">
              solar panel cleaning
            </Text>
          </Text>

          <Text
            as="h1"
            mt="12px"
            fontFamily="var(--font-poppins)"
            fontWeight="800"
            fontSize={{ base: "34px", md: "46px" }}
            lineHeight="1.1"
            color="white"
            maxW="840px"
          >
            Solar Panel Cleaning Adelaide  -  Boost Your System&apos;s Output
          </Text>

          <Text
            mt="12px"
            fontFamily="var(--font-poppins)"
            fontSize={{ base: "15px", md: "17px" }}
            color="cyan.100"
            maxW="760px"
          >
            Professional solar panel cleaning across Adelaide and surrounding suburbs  -  purified water, soft brushes, and spotless results to improve efficiency.
          </Text>

          <HStack mt={{ base: "18px", md: "22px" }} spacing="14px">
            <Link
              href="tel:+61411017366"
              _hover={{ textDecoration: "none", transform: "translateY(-1px)" }}
              transition="all .15s ease"
            >
              <QuoteButton />
            </Link>
          </HStack>
        </Box>
      </Box>

      {/* ===== INTRO + IMAGE ===== */}
      <HStack
        px={{ base: "4%", md: "6%", xl: "16%" }}
        my={{ base: "40px", md: "70px" }}
        justify="space-between"
        align="stretch"
        gap={{ base: "20px", md: "40px" }}
        flexWrap={{ base: "wrap", md: "nowrap" }}
        mx="auto"
      >
        {/* copy */}
        <Box flex="1" minW={{ base: "100%", md: "520px" }}>
          <Text
            fontFamily="var(--font-poppins)"
            fontSize={{ base: "14px", md: "18px" }}
            color="cyan.600"
          >
            Solar Panel Cleaning Adelaide
          </Text>

          <Text
            fontFamily="var(--font-poppins)"
            fontSize={{ base: "30px", md: "36px" }}
            fontWeight="700"
            lineHeight="1.1"
            color="cyan.900"
            py="8px"
          >
            Expert Solar Panel Cleaning Services in Adelaide
          </Text>

          <Text
            fontFamily="var(--font-poppins)"
            fontSize={{ base: "15px", md: "17px" }}
            lineHeight={{ base: "1.75", md: "1.9" }}
            mt="8px"
          >
            Boost your energy savings with solar panel cleaning in Adelaide. Our
            eco-friendly, streak-free cleaning process removes dust, bird
            droppings, and debris that block sunlight. Clean solar panels can
            improve efficiency by up to 30%, helping you get the most out of
            your investment.
            We serve Greater Adelaide and surrounding suburbs across South
            Australia.
          </Text>

          <VStack align="start" spacing="6px" mt={{ base: "12px", md: "16px" }}>
            {["Increase efficiency & energy savings", "Extend panel lifespan", "Protect manufacturer warranty", "Eco-friendly, chemical-free cleaning"].map((item) => (
              <Text key={item} fontFamily="var(--font-poppins)" fontSize={{ base: "16px", md: "18px" }}>
                <Text as="span" mr="8px">-</Text>
                {item}
              </Text>
            ))}
          </VStack>

          <HStack mt="18px">
            <Link
              href="tel:+61411017366"
              _hover={{ textDecoration: "none", transform: "translateY(-1px)" }}
              transition="all .15s ease"
            >
              <Box
                w={["100%", "100%", "none", "none", "none", "none"]}
                bg="cyan.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="15px"
                fontFamily="var(--font-poppins)"
                transition="all 0.2s ease-in-out"
                cursor="pointer"
                _hover={{
                  transition: "all 0.2s ease-in-out",
                  fontWeight: "700",
                  px: "80px",
                  bg: "cyan",
                }}
                p={4}
                color="white"
                rounded="30px"
                px="12"
                fontWeight="500"
              >
                <HStack>
                  <Box textAlign={"center"}>
                    <Phone />
                  </Box>
                  <Text textStyle={"smallText"} fontFamily="var(--font-poppins)" fontWeight="500">
                    Get a Quote
                  </Text>
                </HStack>
              </Box>
            </Link>
          </HStack>
        </Box>

        {/* image */}
        <Box
          position="relative"
          h={{ base: "300px", md: "420px" }}
          w={{ base: "100%", md: "52%" }}
          borderRadius="24px"
          overflow="hidden"
          boxShadow="0 10px 40px rgba(0,0,0,0.12)"
          minW={{ base: "100%", md: "520px" }}
        >
          <Image
            quality={70}
            loading="lazy"
            src={eight}
            alt="Solar panel cleaning in Adelaide"
            fill
            sizes="(max-width: 768px) 100vw, 52vw"
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
          <Box position="absolute" inset={0} bgGradient="linear(to-t, rgba(2,23,58,0.25), transparent)" />
        </Box>
      </HStack>

      <Box px={{ base: "2%", md: "6%", xl: "16%" }} id="quote" style={{ scrollMarginTop: "100px" }}>
        <FreeQuoteLarge />
      </Box>
      <FAQ items={SolarPanelCleaningfaqs} />
    </Box>
  );
};

export default SolarPanelCleaning;

