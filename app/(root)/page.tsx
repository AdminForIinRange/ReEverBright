"use client";
import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Google from "@/public/Google.png";
import Adl from "@/public/Shayal.png";
import shayalv2 from "@/public/shayalv2.png";
import Shayal from "@/public/Shayal.png"; // <-- Add this line (update path/filename as needed)
import { FaStar } from "react-icons/fa";
import FreeQuote from "@/components/comp/FreeQuote";
import HeroText from "@/components/comp/HeroText";
import ImageCompareSlider from "@/components/comp/ImageCompareSlider";
import router from "next/router";
import ServicesBox from "@/components/comp/compsDeep/ServicesBox";
import ReviewSection from "@/components/comp/ReviewSection";

// ✅ NEW: import your de-dupe components
import QuoteButton from "@/components/comp/compsDeep/QuoteButton";
import BadgeItem from "@/components/comp/compsDeep/BadgeItem";
import PromiseItem from "@/components/comp/compsDeep/PromiseItem";
import SectionHeading from "@/components/comp/compsDeep/SectionHeading";
import ServiceLayout from "@/components/comp/ServiceLayout";
import { Shield, Home, Leaf } from "lucide-react";
import About from "@/components/comp/About";
import SlidingCard from "@/components/comp/SlidingCard";
import SlindingBanner from "@/components/comp/SlindingBanner";



import icon1 from "@/public/images/Icons/1.png";
import icon2 from "@/public/images/Icons/2.png";
import icon3 from "@/public/images/Icons/3.png";
import icon4 from "@/public/images/Icons/4.png";
import BannerSlider from "@/components/comp/compsDeep/BannerSlider";

const Page = () => {
  const services = [
    {
      title: "Pressure Washing",
      image:
        "https://images.pexels.com/photos/14965464/pexels-photo-14965464.jpeg",
      desc: "Deep-clean hard surfaces to remove grime, algae, and stubborn stains.",
    },
    {
      title: "Solar Cleaning",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      desc: "Maximize panel efficiency with streak-free, residue-free cleaning.",
    },
    {
      title: "Roof Cleaning",
      image:
        "https://images.pexels.com/photos/2513975/pexels-photo-2513975.jpeg",
      desc: "Safely lift moss and dark streaks to restore curb appeal.",
    },
    {
      title: "Gutter Cleaning",
      image:
        "https://images.pexels.com/photos/3258128/pexels-photo-3258128.jpeg",
      desc: "Clear debris to prevent overflow, leaks, and foundation damage.",
    },
  ];

  // ✅ NEW: small data arrays to map the repeated items
  const badges = [
    {
      text: "Guarantee Satisfaction",
      Images: icon1,
    },
    {
      text: "Fully Insured",
      Images: icon2,
    },
    {
      text: "Locally Owned",
      Images: icon3,
    },
    {
      text: "ECO Friendly",
      Images: icon4,
    },
  ];

  const promises = [
    "100% Satisfaction Guarantee – Or We Will Fix It!",
    "We’ll Be On Time",
    "We Leave Things CLEAN",
    "All Our Quotes Are Clear, Fast and No Obligation",
    "We Are Fully Insured and Police Cheaked",
    "Only Professional Equipment",
  ];

  return (
    <Box mt={"-70px"}>
      <HStack justifyContent={"center"} align={"center"} >
        <Box 
          borderRadius={"50px"}
          backgroundImage={` url('/images/aerial-city-adelaide.jpeg')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          position={"absolute"}
          backgroundAttachment="fixed"
          zIndex={-1}
          w={["100%", "100%", "100%", "100%", "100%", "100%"]}
          h={["1650px", "1650px", "1650px", "1650px", "1650px", "1650px"]}
          opacity={1}
          borderBottomRightRadius={["500px", "500px", "500px", "2000px"]}
          borderBottomLeftRadius={["500px", "500px", "500px", "1000px"]}
        ></Box>
        <Box
          borderRadius={"50px"}
          backgroundImage={` url('/images/aerial-city-adelaide.jpeg')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          position={"absolute"}
          zIndex={-1}
          w={["100%", "100%", "100%", "100%", "100%", "100%"]}
          h={["1650px", "1650px", "1650px", "1650px", "1650px", "1650px"]}
          bg="cyan.700"
          opacity={0.8}
          borderBottomRightRadius={["500px", "500px", "500px", "2000px"]}
          borderBottomLeftRadius={["500px", "500px", "500px", "1000px"]}
        ></Box>
      </HStack>
  
      <HStack
        // data-aos="fade-up"

        zIndex={4}
        px={{ base: "3%", md: "6%", xl: "16%" }}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
      >
        <HStack
          mt={"100px"}
          justify={"center"}
          align={["center", "center", "center", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["15px", "15px", "15px", "50px", "50px", "100px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["100%", "100%", "100%", "100%", "100%", "100%"]}>
            <HeroText />
          </Box>

          <FreeQuote />
          {/* <Box  
            position="relative"
            h={{ base: "100%", md: "100%", xl: "100%" }}
            w={{ base: "100%", md: "100%" }}
            display="flex"
            justifyContent="end"
          >
            <Box
              position="relative"
              h={{ base: "100%", md: "100%" }}
              w={{ base: "100%", md: "100%" }}
            >
              <Box
                bgGradient="linear(to-br, blue.100, white)"
                boxShadow="0 0px 100px rgba(0, 0, 0, 0.2)"
                border={"10px solid white"}
                borderRadius={"50px"}
                backgroundImage={`url('/images/aerial-city-adelaide.jpeg')`}
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
                h="600px"
                w="100%"
                overflow="hidden"
                position="relative"
              >
          
              </Box>
            </Box>
          </Box> */}
        </HStack>
      </HStack>
      
      <ServiceLayout />
      <About />

      <Box>
        <Box
         pt={"50px"}
   
          bg={"cyan.600"}
        >
          <Box>
            {/* Another spot where SectionHeading matches your style */}
            <VStack
              justify={"center"}
              align={"center"}
              w={"100%"}
              textAlign={"center"}
                   px={{ base: "3%", md: "6%", xl: "16%" }}
            >
              <VStack
                justify="center"
                align="center"
                textAlign="center"
                w="100%"
              >
                <Text
                  fontSize={["16px", "18px", "24px"]}
                  fontFamily="poppins"
                  fontWeight={700}
                  lineHeight="1.6"
                  color="cyan.900"
                >
                  EVERBRIGHT PRESSURE WASHING
                </Text>
                <Text
                  fontSize={["36px", "48px", "56px"]}
                  fontWeight={700}
                  fontFamily="poppins"
                  lineHeight="1.1"
                  color="cyan.100"
                >
                  A Local Business you can rely on
                </Text>
              
              </VStack>
            </VStack>

            <HStack
       
              zIndex={3}
                   px={{ base: "3%", md: "6%", xl: "16%" }}
              justify="center"
              align="center"
              w="100%"
              my={{ base: "0px", md: "50px", xl: "50px" }}
            >
              <HStack
                justify="center"
                align={{ base: "center", md: "start" }}
                w="100%"
                gap={{ base: "15px", md: "50px" }}
                flexWrap={[
                  "wrap",
                  "wrap",
                  "wrap",
                  "nowrap",
                  "nowrap",
                  "nowrap",
                ]}
              >
                {/* Copy card */}
                <Box w={{ base: "100%", md: "100%" }} mt={"50px"}>
                  <VStack
                    h={"100%"}
                    align="start"
                    color="white"
                    fontSize="lg"
             
                    fontFamily={"poppins"}
                  >
                    <Text>
                      I started EverBright Pressure Washing here in South
                      Australia to help homeowners feel proud of their property.
                      I treat every home as if it were my own, offering honest
                      advice, paying close attention to detail, and making sure
                      the job's done right the first time.
                    </Text>

                    <Text>
                      My team shares that approach. We know life is busy, so
                      we'll take care of the dirty work, giving you more time to
                      enjoy what matters most.
                    </Text>

                    {/* quick-hit trust chips */}

                    {/* CTA line */}
                    <Box pt={2}>
                      <Text
                        fontFamily={"poppins"}
                        fontWeight="700"
                          color="white"
                      >
                        - Shayal
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                {/* Image area with decorative frame */}
                <Box
              
                >
               
                 <Image  src={shayalv2} alt="Shayal" width={400} height={400} />
             
                </Box>
              </HStack>
            </HStack>
          </Box>
        </Box>
      </Box>

      <BannerSlider />

      <ReviewSection />

      {/* Floating geometric shapes */}

      <SlidingCard />
    </Box>
  );
};

export default Page;
