import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Google from "@/public/Google.png";
import Adl from "@/public/images/aerial-city-adelaide.jpeg";
import { FaStar } from "react-icons/fa";
import FreeQuote from "@/components/comp/FreeQuote";
import { CheckCircle } from "lucide-react";

const HeroText = () => {
  return (
    <>
      <HStack
        justify={["center", "center", "center", "start", "start", "start"]}
        align={["center", "center", "center", "start", "start", "start"]}
      ></HStack>{" "}
      <Text
        as={"h2"}
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
        fontSize={{ base: "42px", md: "42px", lg: "72px" }}
        fontWeight={600}
        fontFamily={"poppins"}
        bgClip="text"
        textAlign={["center", "center", "center", "left", "left", "left"]}
        color={"cyan.600"}
        bgGradient="linear(to-r, teal, blue)"
        lineHeight={"0.9"}
      >
        Because a Clean Home Feels Like a{" "}
        <Span color={"cyan.500"}>New Home</Span>
      </Text>
      <Text
        as={"p"}
        fontSize={["14px", "14px", "14px", "14px", "14px", "19px"]}
        mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
        textAlign={["center", "center", "center", "left", "left", "left"]}
        fontFamily={"poppins"}
        color={"cyan.900"}
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        fontWeight={"500"}
      >
        Restore your home's beauty with expert pressure washing services. From
        driveways to decks, we make everything look brand new.
      </Text>
      <HStack
        textAlign={["left", "left", "left", "left", "left", "left"]}
        align={["start", "start", "start", "start", "start"]}
      >
        <Text color="green.300" fontWeight={"700"} fontSize="24px">
          <CheckCircle />
          <Span
            fontSize={["14px", "16px", "16px", "20px", "20px", "20px"]}
            fontFamily={"poppins"}
            color="cyan.900"
            fontWeight={"500"}
          >
            {" "}
            Gutter Cleaning
          </Span>
        </Text>
      </HStack>
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
            bg: "cyan.400",
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
