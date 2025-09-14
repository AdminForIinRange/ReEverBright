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

const RoofCleaning = () => {
  const RoofCleaningfaqs = [
    {
      q: "Why should I clean my roof?",
      a: "Roof cleaning removes moss, mould, lichen, and stains, restoring your roof's appearance while extending its lifespan. A clean roof improves street appeal and protects your biggest investment.",
    },
    {
      q: "Will roof cleaning damage my tiles or Colorbond?",
      a: "No. EverBright uses safe roof cleaning methods tailored to your roof type. For tiled roofs, we use controlled pressure; for Colorbond roofs, we use soft washing to protect the surface.",
    },
    {
      q: "How often should roofs be cleaned?",
      a: "Roofs in Adelaide should be professionally cleaned every 2–3 years to prevent heavy moss and lichen build-up.",
    },
    {
      q: "Can you remove moss and lichen?",
      a: "Yes. We apply roof treatments that kill moss and lichen at the root, helping your roof stay cleaner for longer.",
    },
    {
      q: "Do I need to be home during roof cleaning?",
      a: "Not necessarily. As long as we can access your roof safely, we can complete the job while you're away.",
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
              Roof washing
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
            Professional Roof washing across Adelaide—fast quotes, careful
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
            High Roof Cleaning Adelaide
          </Text>

          <Text
            fontFamily="poppins"
            fontSize={{ base: "30px", md: "36px" }}
            fontWeight="700"
            lineHeight="1.1"
            color="cyan.900"
            py="8px"
          >
            Expert Roof Cleaning Services in Adelaide
          </Text>

          <Text
            fontFamily="poppins"
            fontSize={{ base: "15px", md: "17px" }}
            lineHeight={{ base: "1.75", md: "1.9" }}
            mt="8px"
          >
            Protect your biggest investment with expert roof cleaning in
            Adelaide. We safely remove moss, lichen, and dark stains without
            causing damage to your tiles or Colorbond. A professionally cleaned
            roof not only looks better but also extends its lifespan and
            prevents costly repairs.
          </Text>

          <VStack align="start" spacing="6px" mt={{ base: "12px", md: "16px" }}>
            {[
              "Tiled Roofs",
              "Colorbond & metal roofs",
              "Single & double storey homes",
              "Moss, mould & lichen removal",
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
                       onClick={() => router.push("#quote")}
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
            src="https://images.pexels.com/photos/2513975/pexels-photo-2513975.jpeg"
            alt="Roof  washing driveway in Adelaide"
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
   <Box px={{ base: "2%", md: "6%", xl: "16%" }} id="quote">
        <FreeQuoteLarge />
      </Box>
      <FAQ items={RoofCleaningfaqs} />
    </Box>
  );
};

export default RoofCleaning;
