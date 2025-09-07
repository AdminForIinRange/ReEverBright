import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Google from "@/public/Google.png";
import Adl from "@/public/images/aerial-city-adelaide.jpeg";
import { FaStar } from "react-icons/fa";
import FreeQuote from "@/components/comp/FreeQuote";

const HeroText = () => {
  return (
    <>
      <HStack

        justify={["center", "center", "center", "start", "start", "start"]}
        align={["center", "center", "center", "start", "start", "start"]}
      >
        <Box p={3} bg="white" borderRadius="full" w={"fit-content"}>
          <Text
            textAlign={"center"}
            fontSize="xs"
            fontWeight="600"
            color="cyan.900"
            fontFamily={"poppins"}
          >
            Adelaide’s #1 Choice for Remarkable Exterior Cleaning!
          </Text>
        </Box>
      </HStack>{" "}
      <Text
        as={"h2"}
        textShadow={"0px 0px 1000px black"}
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
        fontSize={{ base: "42px", md: "42px", lg: "72px" }}
        fontWeight={600}
        fontFamily={"poppins"}
        bgClip="text"
        textAlign={["center", "center", "center", "left", "left", "left"]}
        color={"white"}
        bgGradient="linear(to-r, teal, blue)"
        lineHeight={"0.9"}
      >
        Because a Clean Home Feels Like a New Home
      </Text>
      <Text
        textShadow={"0px 0px 100px black"}
        as={"p"}
        textStyle={"subheading"}
        mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
        textAlign={["center", "center", "center", "left", "left", "left"]}
        fontFamily={"poppins"}
        color={"cyan.100"}
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        fontWeight={"700"}
      >
        Adelaide’s #1 Choice for Remarkable Exterior Cleaning!
      </Text>
      <Box>
        <VStack
          justify={["center", "center", "center", "start", "start"]}
          align={["center", "center", "center", "start", "start"]}
        >
          <HStack
            justify={["center", "center", "center", "start", "start"]}
            align={["center", "center", "center", "start", "start"]}
          >
            <Text color="green.300" fontWeight={"700"} textStyle={"subheading"}>
              ✓{" "}
              <Span
                fontSize={["16px", "16px", "16px", "20px", "20px", "20px"]}
                fontFamily={"poppins"}
                color="white"
                fontWeight={"500"}
              >
                {" "}
                Pressure Cleaning
              </Span>
            </Text>
            <Text color="green.300" fontSize="24px" fontWeight={"700"}>
              ✓{" "}
              <Span
                fontSize={["16px", "16px", "16px", "20px", "20px", "20px"]}
                fontFamily={"poppins"}
                color="white"
                fontWeight={"500"}
              >
                {" "}
                Pressure Cleaning
              </Span>
            </Text>
          </HStack>
        </VStack>
        <VStack
          justify={["center", "center", "center", "start", "start"]}
          align={["center", "center", "center", "start", "start"]}
        >
          <HStack
            justify={["center", "center", "center", "start", "start"]}
            align={["center", "center", "center", "start", "start"]}
          >
            <Text color="green.300" fontSize="24px" fontWeight={"700"}>
              ✓{" "}
              <Span
                fontSize={["16px", "16px", "16px", "20px", "20px", "20px"]}
                fontFamily={"poppins"}
                color="white"
                fontWeight={"500"}
              >
                {" "}
                Pressure Cleaning
              </Span>
            </Text>
            <Text color="green.300" fontSize="24px" fontWeight={"700"}>
              ✓{" "}
              <Span
                fontSize={["16px", "16px", "16px", "20px", "20px", "20px"]}
                fontFamily={"poppins"}
                color="white"
                fontWeight={"500"}
              >
                {" "}
                Pressure Cleaning
              </Span>
            </Text>
          </HStack>
        </VStack>
      </Box>
      <HStack
        justify={["center", "center", "center", "start", "start", "start"]}
        align={"start"}
        w={"100%"}
        transition={"all 0.2s ease-in-out"}
        zIndex={4}
      >
        <Box
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
            bg: "black",
          }}
          p={4}
          color={"white"}
          rounded={"30px"}
          px={"12"}
          fontWeight={"500"}
          onClick={() => router.push("/services")}
        >
          Call for a Quote!
          {/* <Icon as={ArrowRight}> </Icon> */}
        </Box>
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
