"use client";
import QuoteButton from "@/components/comp/compsDeep/QuoteButton";
import FreeQuote from "@/components/comp/FreeQuote";
import FreeQuoteLarge from "@/components/comp/FreeQuoteLarge";
import FAQ from "@/components/globalComponents/FAQ";
import { Box, VStack, Text, HStack, Link } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import router from "next/router";
import React from "react";

const GutterCleaning = () => {
  const GutterCleaningfaqs = [
    {
      q: "How often should gutters be cleaned?",
      a: "In Adelaide, gutters should be cleaned at least twice a year — once before winter and once before summer — to avoid costly water damage and blocked downpipes.",
    },
    {
      q: "Can blocked gutters damage my home?",
      a: "Yes. Blocked gutters can cause roof leaks, mould growth, fascia board rot, and even internal ceiling damage. Routine gutter cleaning prevents these expensive repairs.",
    },
    {
      q: "What do you remove during gutter cleaning?",
      a: "EverBright removes leaves, mud, dirt, twigs, and other debris. We also check and clear downpipes to ensure water flows properly.",
    },
    {
      q: "Is gutter cleaning messy?",
      a: "No. We use a professional gutter vacuum system, leaving no mess behind and taking all debris off-site.",
    },
    {
      q: "Do I need to be home for gutter cleaning?",
      a: "No. Many of our Adelaide customers book gutter cleaning while they’re at work — we just need access to your roof and gutters.",
    },
  ];
  const [open, setOpen] = React.useState<number | null>(0);
  const router = useRouter();
  return (
    <Box bg="white" mt="-100px">
      {/* ===== HERO ===== */}
      <Box position="relative">
        {/* bg image */}
        <Box />
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
              Gutter washing
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
            Professional Gutter washing across Adelaide—fast quotes, careful
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
            High Gutter Cleaning Adelaide
          </Text>

          <Text
            fontFamily="poppins"
            fontSize={{ base: "30px", md: "36px" }}
            fontWeight="700"
            lineHeight="1.1"
            color="cyan.900"
            py="8px"
          >
            Expert Gutter Cleaning Services in Adelaide
          </Text>

          <Text
            fontFamily="poppins"
            fontSize={{ base: "15px", md: "17px" }}
            lineHeight={{ base: "1.75", md: "1.9" }}
            mt="8px"
          >
            Prevent water damage and protect your home with gutter cleaning in
            Adelaide. We clear leaves, dirt, and blockages so your gutters flow
            freely all year round. Regular gutter maintenance reduces the risk
            of leaks, flooding, and costly structural repairs—keeping your home
            safe and sound.
          </Text>

          <VStack align="start" spacing="6px" mt={{ base: "12px", md: "16px" }}>
            {[
              "Gutters & downpipes cleared",
              "Blockages removed",
              "Roof valleys checked",
              "Safe & fully insured service",
            ].map((item) => (
              <Text
                key={item}
                fontFamily="poppins"
                fontSize={{ base: "16px", md: "18px" }}
              >
                {/* leading checkmark without new imports */}
                <Text as="span" mr="8px">
                  ✓
                </Text>
                {item}
              </Text>
            ))}
          </VStack>

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
                   onClick={() => {
   router.push("#quote");
   window.open("tel:+1-555-555-5555");
 }}
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
            src="https://images.pexels.com/photos/2663254/pexels-photo-2663254.jpeg"
            alt="Gutter washing driveway in Adelaide"
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
 <Box px={{ base: "2%", md: "6%", xl: "16%" }} id="quote" style={{ scrollMarginTop: "100px" }}>
        <FreeQuoteLarge />
      </Box>
      <FAQ items={GutterCleaningfaqs} />
    </Box>
  );
};

export default GutterCleaning;
