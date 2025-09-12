"use client";
import { Box, VStack, Text, HStack, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const PressureWashing = () => {
  const faqs = [
    {
      q: "Is high-pressure cleaning safe for all surfaces?",
      a: "We calibrate the pressure and nozzle to suit the surface. For delicate areas we use soft-wash and detergents instead of brute force.",
    },
    {
      q: "How fast can I get a quote?",
      a: "Most quotes are same-day. Send a couple of photos and your address for a clear, no-obligation price.",
    },
    {
      q: "Are you insured and Police Checked?",
      a: "Yes—fully insured and Police Checked. Your property and our team are protected on every job.",
    },
  ];
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <Box bg="white" mt="-60px">
      {/* ===== HERO ===== */}
      <Box position="relative">
        {/* bg image */}
        <Box
          borderRadius={{ base: "0 0 60px 60px", md: "0 0 90px 90px" }}
          backgroundImage="url('/images/aerial-city-adelaide.jpeg')"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          position="absolute"
          inset={0}
          h={{ base: "440px", md: "520px" }}
          zIndex={-2}
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
          px={{ base: "4%", md: "6%", xl: "16%" }}
          pt={{ base: "120px", md: "150px" }}
          pb={{ base: "70px", md: "100px" }}
         
        >
          <Text
            fontFamily="poppins"
            fontSize={{ base: "12px", md: "13px" }}
            color="cyan.100"
          >
            <Text as="span" color="#FFC107">
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
            color="cyan.300"
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
              <Box
                as="span"
                px="18px"
                py="12px"
                bg="#FFC107"
                color="#02173a"
                borderRadius="12px"
                fontWeight="700"
                fontFamily="poppins"
                display="inline-block"
              >
                Get a Fast Quote
              </Box>
            </Link>
            <Link href="#faqs" _hover={{ textDecoration: "none" }}>
              <Text
                fontFamily="poppins"
                color="cyan.100"
                textDecoration="underline"
              >
                Questions? See FAQs
              </Text>
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
            fontFamily="poppins"
            fontSize={{ base: "14px", md: "18px" }}
            color="#FFC107"
          >
            High Pressure Cleaning Adelaide
          </Text>

          <Text
            fontFamily="poppins"
            fontSize={{ base: "30px", md: "36px" }}
            fontWeight="700"
            lineHeight="1.1"
            color="blue.700"
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
          <HStack mt="16px" spacing="10px" flexWrap="wrap">
            {[
              "Pressure Cleaning",
              "Driveway & Pathway",
              "House & Roof Washing",
              "Commercial Exteriors",
            ].map((t) => (
              <Box
                key={t}
                px="12px"
                py="8px"
                border="1px solid"
                borderColor="blue.100"
                borderRadius="12px"
                fontFamily="poppins"
                fontSize={{ base: "13px", md: "14px" }}
              >
                ✓ {t}
              </Box>
            ))}
          </HStack>

          <HStack mt="18px">
            <Link
              href="#quote"
              _hover={{ textDecoration: "none", transform: "translateY(-1px)" }}
              transition="all .15s ease"
            >
              <Box
                as="span"
                px="18px"
                py="12px"
                bg="blue.700"
                color="white"
                borderRadius="12px"
                fontWeight="700"
                fontFamily="poppins"
                display="inline-block"
              >
                Request Quote
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
            src="https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg"
            alt="Pressure washing driveway in Adelaide"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, rgba(2,23,58,0.25), transparent)"
          />
        </Box>
      </HStack>

      {/* ===== WHY CHOOSE US STRIP ===== */}
      <Box px={{ base: "4%", md: "6%", xl: "16%" }} maxW="1300px" mx="auto">
        <HStack
          bg="gray.50"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="18px"
          p={{ base: "14px", md: "18px" }}
          spacing="18px"
          flexWrap="wrap"
          justify="space-between"
        >
          {[
            { k: "Fully Insured", v: "Peace of mind" },
            { k: "Police Checked", v: "Trusted team" },
            { k: "Fast Quotes", v: "Same-day in most cases" },
            { k: "Satisfaction Guarantee", v: "We make it right" },
          ].map((item) => (
            <VStack
              key={item.k}
              align="start"
              spacing="2px"
              minW={{ base: "46%", md: "auto" }}
            >
              <Text fontFamily="poppins" fontWeight="700">
                {item.k}
              </Text>
              <Text fontFamily="poppins" color="gray.600" fontSize="14px">
                {item.v}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Box>

      {/* ===== CTA BAR ===== */}
      <Box
        px={{ base: "4%", md: "6%", xl: "16%" }}
        mt={{ base: "28px", md: "40px" }}
      >
        <Box
          bg="cyan.700"
          color="white"
          borderRadius="24px"
          p={{ base: "18px", md: "26px" }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          gap="16px"
        >
          <VStack align="start" spacing={0}>
            <Text
              fontFamily="poppins"
              fontWeight="700"
              fontSize={{ base: "18px", md: "22px" }}
            >
              Get a fast, no-obligation quote
            </Text>
            <Text
              fontFamily="poppins"
              fontSize={{ base: "13px", md: "14px" }}
              color="whiteAlpha.800"
            >
              Fully insured · Police Checked · Satisfaction Guaranteed
            </Text>
          </VStack>
          <Link href="#quote" _hover={{ textDecoration: "none" }}>
            <Box
              as="span"
              px="18px"
              py="12px"
              bg="#FFC107"
              color="#02173a"
              borderRadius="12px"
              fontWeight="700"
              fontFamily="poppins"
              display="inline-block"
            >
              Free Quote
            </Box>
          </Link>
        </Box>
      </Box>

      {/* ===== QUOTE BOX ===== */}
      <Box
        id="quote"
        px={{ base: "4%", md: "6%", xl: "16%" }}
        mt={{ base: "30px", md: "50px" }}
      >
        <Box
          border="2px dashed"
          borderColor="cyan.200"
          borderRadius="16px"
          p={{ base: "18px", md: "22px" }}
          bg="white"
        >
          <Text fontFamily="poppins" fontWeight="700" mb="6px" color="blue.700">
            Prefer to message?
          </Text>
          <Text fontFamily="poppins" mb="12px">
            Email us at{" "}
            <Link
              href="mailto:hello@everbright.au"
              color="blue.700"
              textDecoration="underline"
            >
              hello@everbright.au
            </Link>{" "}
            or{" "}
            <Link
              href="tel:+61000000000"
              color="blue.700"
              textDecoration="underline"
            >
              call 0000 000 000
            </Link>
            . Include your suburb and a couple of photos for the fastest quote.
          </Text>
          <Link
            href="mailto:hello@everbright.au?subject=Pressure%20Washing%20Quote"
            _hover={{ textDecoration: "none" }}
          >
            <Box
              as="span"
              px="18px"
              py="12px"
              bg="blue.700"
              color="white"
              borderRadius="12px"
              fontWeight="700"
              fontFamily="poppins"
              display="inline-block"
            >
              Email Us Your Photos
            </Box>
          </Link>
        </Box>
      </Box>

      {/* ===== FAQ (no extra imports) ===== */}
      <Box
        id="faqs"
        px={{ base: "4%", md: "6%", xl: "16%" }}
        my={{ base: "36px", md: "54px" }}
        maxW="1000px"
        mx="auto"
      >
        <Text
          fontFamily="poppins"
          fontWeight="700"
          fontSize={{ base: "22px", md: "26px" }}
          color="blue.700"
          mb="12px"
        >
          Frequently Asked Questions
        </Text>
        <VStack align="stretch" spacing="10px">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Box
                key={item.q}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="12px"
                p="14px"
              >
                <HStack
                  as="button"
                  width="100%"
                  justifyContent="space-between"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <Text fontFamily="poppins" fontWeight="600">
                    {item.q}
                  </Text>
                  <Text fontFamily="poppins" aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </Text>
                </HStack>
                {isOpen && (
                  <Text
                    mt="10px"
                    color="gray.700"
                    fontFamily="poppins"
                    lineHeight="1.8"
                  >
                    {item.a}
                  </Text>
                )}
              </Box>
            );
          })}
        </VStack>
      </Box>

      {/* ===== FOOTER CARD ===== */}
      <Box
        px={{ base: "4%", md: "6%", xl: "16%" }}
        mb={{ base: "40px", md: "70px" }}
      >
        <Box
          bg="gray.50"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="18px"
          p={{ base: "18px", md: "24px" }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="16px"
          flexWrap="wrap"
        >
          <VStack align="start" spacing="4px">
            <Text fontFamily="poppins" fontWeight="700">
              Still have questions?
            </Text>
            <Text fontFamily="poppins" color="gray.600">
              Call us on{" "}
              <Link
                href="tel:+61412123456"
                color="blue.700"
                textDecoration="underline"
              >
                0412 123 456
              </Link>{" "}
              or email{" "}
              <Link
                href="mailto:hello@everbright.au"
                color="blue.700"
                textDecoration="underline"
              >
                hello@everbright.au
              </Link>
            </Text>
          </VStack>
          <Link href="#quote" _hover={{ textDecoration: "none" }}>
            <Box
              as="span"
              px="22px"
              py="14px"
              bg="cyan.400"
              color="#02173a"
              borderRadius="999px"
              fontWeight="700"
              fontFamily="poppins"
              display="inline-block"
              boxShadow="0 6px 16px rgba(0,0,0,.08)"
            >
              Contact us →
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default PressureWashing;
