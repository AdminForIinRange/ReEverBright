"use client";
import { Box, VStack, Text, HStack, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const PressureWashing = () => {
  const faqs = [
    {
      q: "Is high-pressure cleaning safe for all surfaces?",
      a: "We calibrate pressure and nozzles to the surface. For delicate areas we use soft-wash techniques and detergents instead of brute force.",
    },
    {
      q: "How fast can I get a quote?",
      a: "Most quotes are same-day. Share a couple of photos and your address, and we’ll send you a clear, no-obligation price.",
    },
    {
      q: "Are you insured and Police Checked?",
      a: "Yes—fully insured and Police Checked. We protect your property and our team on every job.",
    },
  ];

  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <Box bg="white" mt="-70px">
      {/* HERO */}
      <Box position="relative">
        {/* background image */}
        <Box
          borderRadius="0 0 2000px 1000px"
          backgroundImage="url('/images/aerial-city-adelaide.jpeg')"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          position="absolute"
          inset={0}
          h={["420px", "480px", "520px", "560px"]}
          zIndex={-2}
          backgroundAttachment={["scroll", "scroll", "fixed", "fixed"]}
        />
        {/* overlay tint */}
        <Box
          borderRadius="0 0 2000px 1000px"
          position="absolute"
          inset={0}
          h={["420px", "480px", "520px", "560px"]}
          bg="cyan.800"
          opacity={0.82}
          zIndex={-1}
        />

        {/* hero text */}
        <Box
          px={{ base: "4%", md: "6%", xl: "16%" }}
          pt={{ base: "110px", md: "140px" }}
          pb={{ base: "60px", md: "90px" }}
        >
          <Text
            fontFamily="poppins"
            fontSize={{ base: "12px", md: "14px" }}
            color="cyan.100"
            opacity={0.9}
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
            mt={{ base: "10px", md: "14px" }}
            fontFamily="poppins"
            fontWeight="700"
            fontSize={["30px", "38px", "44px"]}
            lineHeight="1.1"
            color="cyan.500"
            maxW="920px"
          >
            A Clean Home Feels Like a New Home
          </Text>

          <Text
            mt={{ base: "10px", md: "14px" }}
            fontFamily="poppins"
            fontSize={{ base: "14px", md: "16px" }}
            color="cyan.100"
            textAlign="start"
            maxW="860px"
          >
            Professional pressure washing across Adelaide—fast quotes, careful
            workmanship, and a satisfaction guarantee.
          </Text>

          <HStack mt={{ base: "18px", md: "24px" }}>
            <Link
              href="#quote"
              _hover={{ textDecoration: "none", transform: "translateY(-1px)" }}
              transition="all 0.15s ease"
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
          </HStack>
        </Box>
      </Box>

      {/* INTRO */}
      <HStack
        px={{ base: "2%", md: "6%", xl: "16%" }}
        my={{ base: "40px", md: "80px" }}
        justify="center"
        align="center"
        w="100%"
      >
        <HStack
          w="100%"
          justify="center"
          align={["center", "center", "start"]}
          gap={{ base: "20px", md: "50px" }}
          flexWrap={["wrap", "wrap", "nowrap"]}
        >
          {/* copy */}
          <Box w={["100%", "100%", "600px"]}>
            <Text
              fontFamily="poppins"
              fontSize={{ base: "13px", md: "18px" }}
              color="#FFC107"
              textAlign="start"
            >
              High Pressure Cleaning Adelaide
            </Text>

            <Text
              fontFamily="poppins"
              fontSize={["28px", "32px", "36px"]}
              fontWeight="700"
              lineHeight="1.1"
              color="blue.700"
              py="10px"
            >
              Expert Pressure Cleaning Services in Adelaide
            </Text>

            <Text
              fontFamily="poppins"
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight={{ base: "1.75", md: "1.9" }}
              textAlign="start"
              mt={{ base: "6px", md: "10px" }}
            >
              Our Adelaide pressure washing removes dirt, grime, algae, and
              stains using calibrated pressure and the right detergents. We
              deliver safe, consistent results—and we back it with our
              satisfaction guarantee. Get a quick, clear quote and let EverBright
              bring your property back to life.
            </Text>

            <VStack align="start" spacing="6px" mt={{ base: "12px", md: "16px" }}>
              {[
                "Pressure Cleaning",
                "Driveway & Pathway Cleaning",
                "House & Roof Washing",
                "Commercial Exterior Cleaning",
              ].map((item) => (
                <Text
                  key={item}
                  fontFamily="poppins"
                  fontSize={{ base: "16px", md: "18px" }}
                >
                  <Text as="span" mr="8px">
                    ✓
                  </Text>
                  {item}
                </Text>
              ))}
            </VStack>

            <HStack justify={["center", "center", "start"]} mt={{ base: "14px", md: "20px" }}>
              <Link
                href="#quote"
                _hover={{ textDecoration: "none", transform: "translateY(-1px)" }}
                transition="all 0.15s ease"
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
            h={["320px", "380px", "480px"]}
            w={["100%", "100%", "560px"]}
            borderRadius="30px"
            overflow="hidden"
            boxShadow="0 10px 40px rgba(0,0,0,0.15)"
          >
            <Image
              quality={70}
              loading="lazy"
              src="https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg"
              alt="Pressure washing driveway in Adelaide"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <Box position="absolute" inset={0} bgGradient="linear(to-t, rgba(2,23,58,0.25), transparent)" />
          </Box>
        </HStack>
      </HStack>

      {/* CTA BAR */}
      <Box px={{ base: "4%", md: "6%", xl: "16%" }}>
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
            <Text fontFamily="poppins" fontWeight="700" fontSize={{ base: "18px", md: "22px" }}>
              Get a fast, no-obligation quote
            </Text>
            <Text fontFamily="poppins" fontSize={{ base: "13px", md: "14px" }} color="whiteAlpha.800">
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

      {/* QUOTE ANCHOR */}
      <Box id="quote" px={{ base: "4%", md: "6%", xl: "16%" }} mt={{ base: "30px", md: "50px" }}>
        <Box
          border="2px dashed"
          borderColor="cyan.200"
          borderRadius="16px"
          p={{ base: "18px", md: "22px" }}
        >
          <Text fontFamily="poppins" fontWeight="700" mb="6px" color="blue.700">
            Prefer to message?
          </Text>
          <Text fontFamily="poppins" mb="12px">
            Email us at{" "}
            <Link href="mailto:hello@everbright.au" color="blue.700" textDecoration="underline">
              hello@everbright.au
            </Link>{" "}
            or{" "}
            <Link href="tel:+61000000000" color="blue.700" textDecoration="underline">
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
    </Box>
  );
};

export default PressureWashing;
