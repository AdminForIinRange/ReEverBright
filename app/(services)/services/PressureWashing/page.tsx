"use client";
import QuoteButton from "@/components/comp/compsDeep/QuoteButton";
import FreeQuote from "@/components/comp/FreeQuote";
import FAQ from "@/components/globalComponents/FAQ";
import { Box, VStack, Text, HStack, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const PressureWashing = () => {
  const PressureWashingfaqs = [
    {
      q: "What surfaces can be pressure washed?",
      a: "EverBright pressure washing in Adelaide restores driveways, footpaths, patios, fences, walls, pavers, decks, and other hard exterior surfaces.",
    },
    {
      q: "Will pressure washing damage my driveway or pavers?",
      a: "No. Our commercial grade equipment allows us to adjust the water pressure for each surface, ensuring a deep clean without causing damage.",
    },
    {
      q: "How long does a driveway clean take?",
      a: "Most residential driveways take 1–2 hours, depending on size and stains. Larger areas or heavily soiled surfaces may take longer.",
    },
    {
      q: "How long will my driveway stay clean after pressure washing?",
      a: "Typically 12–18 months, depending on weather, traffic, and nearby trees.",
    },
    {
      q: "Do you use chemicals for pressure washing?",
      a: "Only when needed. Most surfaces are cleaned with high pressure water, but for oil stains, mould, or algae, we may use eco-friendly detergents.",
    },
  ];
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <Box bg="white" mt="-100px">
      {/* ===== HERO ===== */}
      <Box position="relative">
        {/* bg image */}
        <Box
    
        />
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
            fontFamily="poppins"
            fontSize={{ base: "14px", md: "16px" }}
            color="white"
          >
            <Text as="span" color="cyan.900">
              home
            </Text>{" "}
            · services ·{" "}
            <Text as="span" fontWeight="700">
              pressure washing
            </Text>
          </Text>

          <Text
            mt="12px"
            fontFamily="poppins"
            fontWeight="700"
            fontSize={{ base: "34px", md: "46px" }}
            lineHeight="1.1"
            color="white"
            maxW="840px"
          >
            A Clean Home Feels Like a New Home
          </Text>

          <Text
            mt="12px"
            fontFamily="poppins"
            fontSize={{ base: "15px", md: "17px" }}
            color="cyan.100"
            maxW="760px"
          >
            Professional pressure washing across Adelaide—fast quotes, careful
            workmanship, and a satisfaction guarantee.
          </Text>

          <HStack mt={{ base: "18px", md: "22px" }} spacing="14px">
            <Link
              href="#quote"
              _hover={{ textDecoration: "none", transform: "translateY(-1px)" }}
              transition="all .15s ease"
            >
              <QuoteButton />
            </Link>
            {/* <Link href="#faqs" _hover={{ textDecoration: "none" }}>
              <Text
                fontFamily="poppins"
                color="cyan.100"
                textDecoration="underline"
              >
                Questions? See FAQs
              </Text>
            </Link> */}
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
            fontFamily="poppins"
            fontSize={{ base: "14px", md: "18px" }}
            color="cyan.600"
          >
            High Pressure Cleaning Adelaide
          </Text>

          <Text
            fontFamily="poppins"
            fontSize={{ base: "30px", md: "36px" }}
            fontWeight="700"
            lineHeight="1.1"
            color="cyan.900"
            py="8px"
          >
            Expert Pressure Cleaning Services in Adelaide
          </Text>

          <Text
            fontFamily="poppins"
            fontSize={{ base: "15px", md: "17px" }}
            lineHeight={{ base: "1.75", md: "1.9" }}
            mt="8px"
          >
            Our Adelaide pressure washing removes dirt, grime, algae, and stains
            using calibrated pressure and the right detergents. We deliver safe,
            consistent results—and back it with our satisfaction guarantee. Get
            a quick, clear quote and let EverBright bring your property back to
            life.
          </Text>

          {/* quick features */}

          <HStack mt="18px">
            <Link
              href="#quote"
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
                fontFamily="poppins"
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
                onClick={() => router.push("/services")}
              >
                Call for a Quote!
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
            src="https://images.pexels.com/photos/20296972/pexels-photo-20296972.jpeg"
            alt="Pressure washing driveway in Adelaide"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, rgba(2,23,58,0.25), transparent)"
          />
        </Box>
      </HStack>

      {/* ===== WHY CHOOSE US STRIP ===== */}

      {/* ===== CTA BAR ===== */}

      {/* ===== QUOTE BOX ===== */}

      {/* ===== FOOTER CARD ===== */}

          <FAQ  items={PressureWashingfaqs} />
    </Box>
  );
};

export default PressureWashing;
