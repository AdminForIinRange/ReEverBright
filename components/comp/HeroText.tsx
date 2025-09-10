import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Google from "@/public/Google.png";
import Adl from "@/public/images/aerial-city-adelaide.jpeg";
import { FaStar } from "react-icons/fa";
import FreeQuote from "@/components/comp/FreeQuote";
import {
  Award,
  CheckCircle,
  Medal,
  Phone,
  ShieldCheck,
  Star,
  Trophy,
  Zap,
} from "lucide-react";

const HeroText = () => {
  return (
    <>
      <Text
        as={"h2"}
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
        fontSize={{ base: "42px", md: "52px", lg: "72px" }}
        fontWeight={600}
        fontFamily={"poppins"}
        bgClip="text"
        textAlign={["left", "left", "left", "left", "left", "left"]}
        color={"cyan.300"}
        bgGradient="linear(to-r, teal, blue)"
        lineHeight={"0.9"}
        className="animate__animated animate__fadeInDownBig"
      >
        Because a Clean Home Feels Like a <Span color={"WHITE"}>New Home</Span>
      </Text>

      <Text
        textShadow={"0px 0px 100px black"}
        as={"p"}
        textStyle={"subheading"}
        mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
        textAlign={["left", "left", "left", "left", "left", "left"]}
        fontFamily={"poppins"}
        color={"cyan.100"}
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        fontWeight={"700"}
      >
        Adelaide’s #1 Choice for Remarkable Exterior Cleaning!
      </Text>

      <HStack
        as={"p"}
        fontSize={["14px", "14px", "19px", "19px", "19px", "19px"]}
        mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
        textAlign={["left", "left", "left", "left", "left", "left"]}
        fontFamily={"poppins"}
        color={"WHITE"}
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        fontWeight={"500"}
        wrap={"wrap"}
      >
        Gutter Cleaning <CheckCircle size={15} /> Roof Washing{" "}
        <CheckCircle size={15} /> Solar Cleaning <CheckCircle size={15} />{" "}
        Pressure Washing
        <CheckCircle size={15} />{" "}
      </HStack>

      <Text
        as={"p"}
        fontSize={["14px", "14px", "19px", "19px", "19px", "19px"]}
        mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
        textAlign={["left", "left", "left", "left", "left", "left"]}
        fontFamily={"poppins"}
        color={"WHITE"}
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        fontWeight={"500"}
      ></Text>
      <Box mt={["20px", "20px", "20px", "20px", "20px", "20px"]}>
        <VStack
          textAlign={["start", "center", "center", "left", "left", "left"]}
          align={["start", "center", "center", "start", "start"]}
        >
          <HStack
            justify={["start", "center", "center", "start", "start"]}
            align={["start", "center", "center", "start", "start"]}
            gap={"20px"}
          >
            <HStack spacing={3} alignItems="start" justifyContent="start">
              <Box
                p={2}
                rounded="full"
                bg="cyan.900"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Zap size={20} color="white" />
              </Box>
              <VStack gap={0} align="start">
                <Text
                  fontWeight="bold"
                  color="white"
                  fontSize={["12px", "12px", "14px", "14px", "14px", "19px"]}
                >
                  Fast Service
                </Text>
                <Text   fontSize={["12px", "12px", "14px", "14px", "14px", "19px"]} color="cyan.100">
                  Same Day Available
                </Text>
              </VStack>
            </HStack>

            <HStack alignItems="start" justifyContent="start">
              <Box
                p={2}
                rounded="full"
                bg="cyan.900"
                display="flex"
                alignItems="start"
                justifyContent="start"
              >
                <Award size={20} color="white" />
              </Box>
              <VStack gap={0} align="start" justify={"start"}>
                <Text
                  fontWeight="bold"
                  fontSize={["12px", "12px", "14px", "14px", "14px", "19px"]}
                  color={"white"}
                >
                  Premium Quality
                </Text>
                <Text  fontSize={["12px", "12px", "14px", "14px", "14px", "19px"]} color="cyan.100">
                  Guaranteed Results
                </Text>
              </VStack>
            </HStack>
          </HStack>
        </VStack>
        <VStack
          textAlign={["start", "center", "center", "left", "left", "left"]}
          align={["start", "center", "center", "start", "start"]}
        >
          <HStack
            textAlign={["start", "center", "center", "left", "left", "left"]}
            align={["start", "center", "center", "start", "start"]}
            gap={"20px"}
            mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
          >
            <HStack spacing={3} alignItems="start" justifyContent="start">
              <Box
                p={2}
                rounded="full"
                bg="cyan.900"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <ShieldCheck size={20} color="white" />
              </Box>
              <VStack gap={0} align="start">
                <Text
                  fontWeight="bold"
                  color="white"
                  fontSize={["12px", "12px", "14px", "14px", "14px", "19px"]}
                >
                  Fully Insured
                </Text>
                <Text  fontSize={["12px", "12px", "14px", "14px", "14px", "19px"]} color="cyan.100">
                  Complete Protection
                </Text>
              </VStack>
            </HStack>
            <HStack spacing={3} alignItems="start" justifyContent="start">
              <Box
                p={2}
                rounded="full"
                bg="cyan.900"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <ShieldCheck size={20} color="white" />
              </Box>
              <VStack gap={0} align="start">
                <Text
                  fontWeight="bold"
                  color="white"
                  fontSize={["12px", "12px", "14px", "14px", "14px", "19px"]}
                >
                  Fully Insured
                </Text>
                <Text  fontSize={["12px", "12px", "14px", "14px", "14px", "19px"]} color="cyan.100">
                  Complete Protection
                </Text>
              </VStack>
            </HStack>
          </HStack>
        </VStack>
      </Box>

      <HStack
        mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
        justify={["center", "center", "center", "start", "start", "start"]}
        align={"start"}
        w={"100%"}
        transition={"all 0.2s ease-in-out"}
        zIndex={4}
      >
        <Box
          w={["400px"]}
          bg={"cyan.500"}
          my={"15px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={["center"]}
          gap={"15px"}
          fontFamily={"poppins"}
          transition={"all 0.2s ease-in-out"}
          cursor={"pointer"}
          _hover={{
            transition: "all 0.2s ease-in-out",
            scale: 1.1,
            fontWeight: "700",
            px: "80px",
            bg: "cyan.400",
          }}
          p={4}
          color={"white"}
          rounded={"30px"}
          px={"12"}
          fontWeight={"500"}
          onClick={() => router.push("/services")}
        >
          <HStack>
            <Phone /> Call for a Quote!
          </HStack>

          {/* <Icon as={ArrowRight}> </Icon> */}
        </Box>
      </HStack>

      <HStack
        // RDC
        display={["flex", "flex", "flex", "none", "none", "none"]}
        mt={"15px"}
        rounded={"5px"}
        // bg={"gray.50"}
        // border={"1px solid lightgray"}
        width={{ base: "100%", md: "100%" }}
        textAlign={["start", "start", "start", "start", "start", "start"]}
        justify={["start", "start", "start", "start", "start", "start"]}
        position="relative"
      >
        <VStack
          w={"100%"}
          h={"100%"}
          alignItems="center"
          justifyContent="center"
       rounded={"15px"}
          py={2}
          px={4}
          bg={"white"}
          border={"1px solid lightgray"}
        >
          <HStack>
            <Image src={Google} alt="Google" width={34} height={34} />
            <HStack>
              <Text fonESize="xl" fontWeight="600" color="#fbbf24">
                5 / 5
              </Text>

              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} color="#fbbf24" size={20} />
              ))}
            </HStack>
          </HStack>
          <Text
            textShadow={"0px 0px 100px black"}
            as={"p"}
         
            textAlign={["center", "center", "left", "left", "left", "left"]}
            fontFamily={"poppins"}
            color={"cyan.900"}
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            fontWeight={"700"}
          >
            Over 160+ Verified 5-Star Reviews
          </Text>
        </VStack>
      </HStack>
      <HStack
        rounded={"2xl"}
        // bg={"gray.50"}
        // border={"1px solid lightgray"}
        width={{ base: "100%", md: "100%" }}
        textAlign={["center", "center", "center", "start", "start", "start"]}
        justify={["center", "center", "center", "start", "start", "start"]}
        position="relative"
      ></HStack>
    </>
  );
};

export default HeroText;
