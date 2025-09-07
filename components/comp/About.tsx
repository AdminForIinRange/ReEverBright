import React from "react";
import ImageCompareSlider from "./ImageCompareSlider";
import { VStack, HStack, Box, Text } from "@chakra-ui/react";
import QuoteButton from "./compsDeep/QuoteButton";
import SectionHeading from "./compsDeep/SectionHeading";

const About = () => {
  return (
    <Box as="section" mt={{ base: "100px", xl: "180px" }} aria-label="About">



          
      {/* Heading */}
      <VStack
      
        justify="center"
        align="center"
        w="100%"
        textAlign="center"
        px={{ base: "4%", md: "6%", xl: "10%" }}
      >
        <SectionHeading
          eyebrow={`You'll be amazed at how good your property can look!`}
          title={`Restoring Your Most\nValuable Asset`}
          color="blue.900"
        />
      </VStack>

      {/* Content */}
      <HStack
        zIndex={3}
        px={{ base: "4%", md: "6%", xl: "10%" }}
        justify="center"
        align="center"
        w="100%"
        my={{ base: "0px", md: "50px", xl: "100px" }}
      >
        <HStack
          justify="center"
          align={{ base: "center", md: "start" }}
          w="100%"
          gap={{ base: "15px", md: "50px" }}
          flexWrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          {/* Copy card */}
          <Box w={{ base: "100%", md: "100%" }}>
            <VStack
              h={"100%"}
              align="start"
              color="gray.800"
              fontSize="lg"
              lineHeight="1.8"
              fontFamily={"poppins"}
            >
              <Text>
                EverBright Pressure Washing Adelaide restores your property’s
                beauty with professional pressure washing, gutter cleaning, roof
                washing, and solar panel cleaning. We protect your investment
                and bring back that “wow” factor every time you arrive home.
              </Text>

              <Text>
                Regular exterior cleaning isn’t just about looks — it prevents
                damage, saves on repairs, and keeps your home strong for years.
              </Text>

              <Text>
                We’re fast, reliable, and eco-friendly — tough on stains but
                gentle on your property. With EverBright, your home gets the
                care it deserves.
              </Text>

              {/* quick-hit trust chips */}

              {/* CTA line */}
              <Box pt={2}>
                <Text
                  fontFamily={"poppins"}
                  fontWeight="700"
                  color="#0a0f29"
                  mb={3}
                >
                  Get a FREE QUOTE today and see why Adelaide homeowners trust
                  EverBright for remarkable results.
                </Text>
                <HStack mt={"50px"} justify={{ base: "center", md: "start" }}>
                  <QuoteButton />
                </HStack>
              </Box>
            </VStack>
          </Box>

          {/* Image area with decorative frame */}
          <Box
            position="relative"
            h={{ base: "550px", md: "100%", xl: "100%" }}
            w={{ base: "100%", md: "100%" }}
            display="flex"
            justifyContent="end"
          >
            <Box
              position="relative"
              h={{ base: "100%", md: "100%" }}
              w={{ base: "100%", md: "100%" }}
              // subtle gradient border frame
              p="2"
              borderRadius="30px"
              bgGradient="linear(to-br, blue.100, white)"
              boxShadow="0 10px 30px rgba(10,15,41,0.12)"
            >
              <Box
                h="100%"
                w="100%"
                borderRadius="24px"
                overflow="hidden"
                bg="gray.200" // fallback
              >
                <ImageCompareSlider />
              </Box>
            </Box>
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
};

export default About;
