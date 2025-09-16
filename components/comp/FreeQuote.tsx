"use client";

import React from "react";
import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { useActionState } from "react";
import { submitLeadAction, type LeadState } from "@/lib/actions/leadActions";

const FreeQuote = () => {
  const [state, formAction, isPending] = useActionState<LeadState, FormData>(
    submitLeadAction,
    { ok: false },
  );

  return (
    <Box
      style={{ scrollMarginTop: "100px" }}
      id="quote"
      as="section"
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
        fontSize={["32px", "36px"]}
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
        fontWeight="700"
        px={4}
        color="blue.900"
      >
        30 Seconds to Your Free Quote No Commitments
      </Text>

      {/* FORM */}
      <Box as="form" action={formAction}>
        <VStack spacing={3} align="stretch">
          <HStack
            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
          >
            <Box
              as="input"
              name="fullName"
              placeholder="Name"
              flex="1"
              border="1px solid #e2e8f0"
              borderRadius="md"
              py={2}
              px={3}
              fontSize="sm"
              required
            />
            <Box
              as="input"
              name="phone"
              placeholder="Phone"
              flex="1"
              border="1px solid #e2e8f0"
              borderRadius="md"
              py={2}
              px={3}
              fontSize="sm"
              type="tel"
              required
            />
          </HStack>

          <HStack
            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap", "nowrap"]}
          >
            <Box
              as="input"
              name="email"
              placeholder="Email"
              flex="1"
              border="1px solid #e2e8f0"
              borderRadius="md"
              py={2}
              px={3}
              fontSize="sm"
              type="email"
              required
            />
            <Box
              as="input"
              name="suburb"
              placeholder="Suburb"
              flex="1"
              border="1px solid #e2e8f0"
              borderRadius="md"
              py={2}
              px={3}
              fontSize="sm"
              required
            />
          </HStack>

          <Box
            as="textarea"
            name="helpMessage"
            placeholder="How can we help your home"
            border="1px solid #e2e8f0"
            borderRadius="md"
            py={2}
            px={3}
            fontSize="sm"
          />

          <Box
            as="button"
            type="submit"
            w="100%"
            mt={5}
            py={3}
            borderRadius="md"
            bg="cyan.500"
            color="white"
            fontWeight="700"
            fontSize="md"
            _hover={{ opacity: 0.9 }}
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit"}
          </Box>
        </VStack>
      </Box>

      {/* Result */}
      <Box mt={3}>
        {state?.ok && state.data ? (
          <Box
            role="status"
            className="success"
            bg="green.50"
            border="1px solid"
            borderColor="green.200"
            color="green.700"
            p={3}
            borderRadius="md"
            fontSize="sm"
          >
            Submitted!
          </Box>
        ) : state?.error ? (
          <Box
            role="alert"
            bg="red.50"
            border="1px solid"
            borderColor="red.200"
            color="red.700"
            p={3}
            borderRadius="md"
            fontSize="sm"
          >
            {state.error}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default FreeQuote;
