"use client";
import QuoteButton from "@/components/comp/compsDeep/QuoteButton";
import FreeQuote from "@/components/comp/FreeQuote";
import FAQ from "@/components/globalComponents/FAQ";
import { Box, HStack, Span, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import router from "next/router";
import React from "react";

const PressureWashing = () => {
  return (
    <Box bg="white">
      {/* HERO */}
      <Box bg="#02173a" py={{ base: "25px", md: "36px" }}>
        <Box mx="auto" px={{ base: "4%", md: "6%", lg: "10%" }}>
          <Text
            mt={{ base: "32px", md: "40px" }}
            color="white"
            lineHeight="1.1"
            textAlign="start"
            fontWeight="700"
            fontFamily="poppins"
                fontSize={["30px", "30px", "30px"]}
          >
            A Clean Home Feels Like a New Home
          </Text>
          <Text
            color="white"
            mt={{ base: "12px", md: "16px" }}
            textAlign="start"
            fontFamily="poppins"
            fontSize={{ base: "12px", md: "14px" }}
          >
            <span style={{ color: "#FFC107" }}>home - services - </span>
            pressure washing
          </Text>
        </Box>
      </Box>

      <HStack
        zIndex={3}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
        my={["50px", "50px", "50px", "50px", "50px", "100px"]}
      >
        <HStack
          justify={"center"}
          align={["center", "center", "start", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["95%", "95%", "95%", "600px", "600px", "100%"]}>
            <Text
              color="#FFC107"
              mt={{ base: "8px", md: "0" }}
              textAlign="start"
              fontFamily="poppins"
              fontSize={{ base: "13px", md: "18px" }}
            >
              High Pressure Cleaning Adelaide
            </Text>
            <Text
       fontSize={["30px", "30px", "30px"]}
      fontWeight={700}
      fontFamily="poppins"
      lineHeight="1.1"
      color="blue.700"
      py={"10px"}

              w={["100%", "100%", "100%", "100%", "100%", "100%"]}

              textAlign={["left", "left", "left", "left", "left", "left"]}
   
        
            >
              Expert Pressure Cleaning Services in Adelaide
            </Text>
            <Text
              fontFamily="poppins"
              w="100%"
              textAlign="start"
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight={{ base: "1.7", md: "1.85" }}
              mt={{ base: "6px", md: "10px" }}
            >
              Our Adelaide pressure washing services are designed to provide
              you with a sparkling clean finish that will leave your home or
              business looking like new. We specialise in removing dirt, grime,
              and other contaminants from exterior surfaces using high pressure
              water jets, ensuring a clean and safe result every time. Trust in
              our no-hassle satisfaction guarantee and let Calibre Exterior
              Cleaning bring new life to your property. Request a quote today and
              uncover the unparalleled benefits of Adelaide’s leading pressure
              washing experts!
              <br />
                            <br />
            </Text>

            <VStack
              fontFamily="poppins"
              gap="4px"
              justify="start"
              align="start"
              w="100%"
              mt={{ base: "6px", md: "10px" }}
            >
              {[
                "Pressure Cleaning",
                "Driveway & Pathway Cleaning",
                "House & Roof Washing",
                "Commercial Exterior Cleaning",
              ].map((label) => (
                <Text
                  key={label}
                  color="black"
                  fontSize={{ base: "18px", md: "20px" }}
                  fontWeight="700"
                >
                  ✓{" "}
                  <Span color="black" fontWeight="normal">
                    {label}
                  </Span>
                </Text>
              ))}
            </VStack>

            {/* desktop-friendly media/cta panel */}

            <HStack
              justify={[
                "center",
                "center",
                "center",
                "start",
                "start",
                "start",
              ]}
              align={"start"}
              w={"100%"}
              transition={"all 0.2s ease-in-out"}
              zIndex={3}
            >
             <QuoteButton />
            </HStack>
          </Box>

          <Box
            position="relative"
            h={["350px", "350px", "350px", "500px", "500px", "800PX"]}
            w={["95%", "95%", "95%", "600px", "600px", "900px"]}
            borderRadius="30px"
            bgPos="center"
            bgSize="cover"
            // Change this to any background you want
            // Change this to any background you want
            overflow="hidden"
            display={"flex"}
            justifyContent={"end"}
          >
            {/* Horizontal line for crosshair */}
            <Box
              position="relative"
              h={["350px", "350px", "350px", "500px", "500px", "800PX"]}
              w={["100%", "100%", "100%", "550px", "550px", "550px"]}
              borderRadius="30px"
              bg="gray.200" // fallback background color
              overflow="hidden" // clip the Image to the rounded corners
            >
              <Image
                quality={70}
                loading="lazy"
                src="https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg"
                alt="Furnishing and Styling Image"
                fill // makes the image fill the Box completely
                style={{
                  objectFit: "cover", // replicates background-size: cover
                  objectPosition: "center", // replicates background-position: center
                }}

                // optional: preload if above the fold
              />
            </Box>
          </Box>
        </HStack>
      </HStack>

      <FAQ type={""} />
    </Box>
  );
};

export default PressureWashing;
