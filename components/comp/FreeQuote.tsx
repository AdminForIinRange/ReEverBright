"use client";
import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Google from "@/public/Google.png";
import Adl from "@/public/images/aerial-city-adelaide.jpeg";
import { FaStar } from "react-icons/fa";

const FreeQuote = () => {
  return (
    <Box
      w={["100%", "100%", "600px"]}
      bg="white"
      borderRadius={["20px", "20px"]}
      boxShadow="0 8px 24px rgba(0,0,0,0.08)"
      p={6}
      textAlign="center"
      border={"5px solid #06b6d4"}
    >
      {/* Heading */}

      <Text
        fontFamily={"poppins"}
        fontSize={["28px", "36px"]}
        fontWeight="700"
        color="blue.900"
        lineHeight="1.1"
        mb={4}
      >
        FREE QUOTE <br /> TODAY!
      </Text>
      <Text
       mb={4}
        fontFamily={"poppins"}
        textAlign={"center"}
        fontSize="sm"
        w={"100%"}
        fontWeight="600"
        px={4}
        color="blue.900"
   
      >
        30 Seconds to Your Free Quote No Commitments
      </Text>



      {/* Inputs (styled boxes only, since no Chakra Input) */}
      <VStack spacing={3} align="stretch">
        <HStack wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}>
          <Box
            as="input"
            placeholder="Name"
            flex="1"
            border="1px solid #e2e8f0"
            borderRadius="md"
            py={2}
            px={3}
            fontSize="sm"
          />
          <Box
            as="input"
            placeholder="Phone"
            flex="1"
            border="1px solid #e2e8f0"
            borderRadius="md"
            py={2}
            px={3}
            fontSize="sm"
          />
        </HStack>
          <HStack wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}>
          <Box
            as="input"
            placeholder="Email"
            flex="1"
            border="1px solid #e2e8f0"
            borderRadius="md"
            py={2}
            px={3}
            fontSize="sm"
          />
          <Box
            as="input"
            placeholder="Suburb"
            flex="1"
            border="1px solid #e2e8f0"
            borderRadius="md"
            py={2}
            px={3}
            fontSize="sm"
          />
        </HStack>
        <Box
          as="input"
          placeholder="Address"
          border="1px solid #e2e8f0"
          borderRadius="md"
          py={2}
          px={3}
          fontSize="sm"
        />
        <Box
          as="textarea"
          placeholder="How can we help"
          border="1px solid #e2e8f0"
          borderRadius="md"
          py={2}
          px={3}
          fontSize="sm"
        />
        <Box
          as="button"
          w="100%"
          mt={5}
          py={3}
          borderRadius="md"
          bg="cyan.500"
          color="white"
          fontWeight="700"
          fontSize="md"
          _hover={{ opacity: 0.9 }}
        >
          Submit
        </Box>
      </VStack>

      {/* CTA Button */}
    </Box>
  );
};

export default FreeQuote;
