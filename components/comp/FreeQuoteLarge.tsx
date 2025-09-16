"use client";

import React from "react";
import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { useActionState } from "react";
import { submitLeadAction, type LeadState } from "@/lib/actions/leadActions";

import Google from "@/public/Google.png";
import { FaStar } from "react-icons/fa";

const InputBox = (props: any) => (
  <Box
    as="input"
    {...props}
    bg="white"
    border="1px solid"
    borderColor="gray.200"
    _placeholder={{ color: "gray.400" }}
    _focusVisible={{
      outline: "3px solid",
      outlineColor: "cyan.300",
      borderColor: "cyan.400",
      boxShadow: "0 0 0 2px rgba(6,182,212,.15)",
    }}
    borderRadius="md"
    py={3}
    px={4}
    fontSize="sm"
    transition="all .15s ease"
  />
);

const TextareaBox = (props: any) => (
  <Box
    as="textarea"
    {...props}
    rows={4}
    bg="white"
    border="1px solid"
    borderColor="gray.200"
    _placeholder={{ color: "gray.400" }}
    _focusVisible={{
      outline: "3px solid",
      outlineColor: "cyan.300",
      borderColor: "cyan.400",
      boxShadow: "0 0 0 2px rgba(6,182,212,.15)",
    }}
    borderRadius="md"
    py={3}
    px={4}
    fontSize="sm"
    transition="all .15s ease"
  />
);

const FreeQuoteLarge = () => {
  const [state, formAction, isPending] = useActionState<LeadState, FormData>(
    submitLeadAction,
    { ok: false },
  );

  return (
    <Box
      w={["100%", "100%", "100%"]}
      position="relative"
      bg="white"
      borderRadius="24px"
      boxShadow="0 16px 48px rgba(2,18,33,.12)"
      p={{ base: 6, md: 8 }}
      textAlign="left"
      border="5px solid #06b6d4"
      overflow="hidden"
    >
      {/* Header */}
      <VStack align="flex-start" spacing={2} zIndex={1} position="relative">
        <Text
          fontFamily="poppins"
          fontSize={{ base: "30px", md: "40px" }}
          fontWeight="800"
          color="blue.900"
          lineHeight="1.05"
        >
          FREE QUOTE{" "}
          <Box as="span" color="cyan.600">
            TODAY!
          </Box>
        </Text>

        <Text
          fontFamily="poppins"
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="600"
          color="blue.900"
          opacity={0.9}
        >
          30 seconds to your free quote — no commitments.
        </Text>

        {/* Trust row */}
        <HStack spacing={3} mt={1}>
          <Box position="relative" w="20px" h="20px">
            <Image
              src={Google}
              alt="Google"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
          <HStack spacing={1} color="yellow.400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Box as={FaStar} key={i} />
            ))}
          </HStack>
          <Text fontSize="xs" color="gray.600" fontWeight="600">
            5.0
          </Text>
        </HStack>
      </VStack>

      {/* FORM */}
      <Box as="form" action={formAction}>
        <VStack
          spacing={4}
          mt={6}
          align="stretch"
          zIndex={1}
          position="relative"
        >
          <HStack spacing={4} flexWrap="wrap">
            <InputBox
              placeholder="Full name"
              name="fullName"
              autoComplete="name"
              required
              flex="1 1 280px"
            />
            <InputBox
              placeholder="Phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              flex="1 1 280px"
            />
          </HStack>

          <HStack spacing={4} flexWrap="wrap">
            <InputBox
              placeholder="Email"
              name="email"
              type="email"
              autoComplete="email"
              required
              flex="1 1 280px"
            />
            <InputBox
              placeholder="Suburb"
              name="suburb"
              autoComplete="address-level2"
              required
              flex="1 1 280px"
            />
          </HStack>

          <TextareaBox
            placeholder="How can we help your home?"
            name="helpMessage"
          />

          <Box
            as="button"
            type="submit"
            w="100%"
            mt={1}
            py={3.5}
            borderRadius="md"
            bg="cyan.500"
            color="white"
            fontWeight="800"
            fontSize="md"
            letterSpacing="0.2px"
            transition="all .15s ease"
            _hover={{
              transform: "translateY(-1px)",
              bg: "cyan.400",
              boxShadow: "0 12px 24px rgba(6,182,212,.35)",
            }}
            _active={{ transform: "translateY(0)" }}
            disabled={isPending}
          >
            {isPending ? "Submitting…" : "Get My Free Quote →"}
          </Box>

          {/* Result */}
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
              textAlign="center"
            >
              {state.error}
            </Box>
          ) : null}

          <Text fontSize="xs" color="gray.500" textAlign="center">
            By submitting, you agree to be contacted about your request. We
            never share your info.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default FreeQuoteLarge;
