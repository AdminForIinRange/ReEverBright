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
    >
      {/* Heading */}
      <Text fontSize="md" fontWeight="600" color="blue.600" mb={1}>
        Get Your No-Obligation
      </Text>
      <Text
      fontFamily={"poppins"}
        fontSize={["28px", "36px"]}
        fontWeight="900"
        color="blue.900"
        lineHeight="1.1"
        mb={4}
      >
        FREE QUOTE <br /> TODAY!
      </Text>

      {/* Reviews Row */}
      <HStack justify="center" spacing={4} mb={6} wrap="wrap">
        {/* Google */}
        <HStack
          px={3}
          py={2}
          bg="blue.50"
          borderRadius="full"
          border="1px solid #dbeafe"
          spacing={2}
        >
          <Image src={Google} alt="Google" width={18} height={18} />
          <HStack spacing={0.5}>
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} color="#fbbf24" size={12} />
            ))}
          </HStack>
          <Text fontSize="xs" fontWeight="600" color="blue.900">
            4.9 / 5
          </Text>
        </HStack>

        {/* Facebook */}
        <HStack
          px={3}
          py={2}
          bg="blue.100"
          borderRadius="full"
          border="1px solid #bfdbfe"
          spacing={2}
        >
          <Box
            w="18px"
            h="18px"
            borderRadius="full"
            bg="blue.600"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontSize="xs"
            fontWeight="bold"
          >
            f
          </Box>
          <HStack spacing={0.5}>
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} color="#fbbf24" size={12} />
            ))}
          </HStack>
          <Text fontSize="xs" fontWeight="600" color="blue.900">
            4.8 / 5
          </Text>
        </HStack>
      </HStack>

      {/* Inputs (styled boxes only, since no Chakra Input) */}
      <VStack spacing={3} align="stretch">
        <HStack>
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
        <HStack>
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
