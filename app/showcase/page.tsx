// app/leads-admin/page.tsx
"use client";

import React from "react";
import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import {
  getRecentLeadsAction,
  type LeadsResult,
} from "@/lib/actions/getRecentLeads";

// Required by your instruction (we import it; not used on this page)

function formatWhen(s?: string) {
  if (!s) return "";
  try {
    return new Date(s).toLocaleString();
  } catch {
    return s;
  }
}

export default function Page() {
  const [state, formAction, isPending] = React.useActionState<
    LeadsResult,
    FormData
  >(getRecentLeadsAction, { ok: false });

  return (
    <Box as="main" minH="100vh" bg="gray.50" py={10} px={4}>
      <VStack spacing={6} maxW="900px" mx="auto" align="stretch">
        <Box
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="xl"
          p={{ base: 5, md: 6 }}
          boxShadow="0 8px 24px rgba(0,0,0,0.06)"
        >
          <Text fontSize="2xl" fontWeight="800" color="blue.900">
            Admin · Recent Leads
          </Text>
          <Text fontSize="sm" color="gray.600" mt={1}>
            Enter the PIN to view the latest submissions.
          </Text>

          {/* PIN form */}
          <Box as="form" action={formAction} mt={4}>
            <HStack spacing={3} align="stretch" flexWrap="wrap">
              <Box
                as="input"
                name="pin"
                type="password"
                placeholder="Enter PIN"
                border="1px solid"
                borderColor="gray.300"
                borderRadius="md"
                px={3}
                py={2.5}
                fontSize="sm"
                flex="1 1 220px"
              />
              <Box
                as="button"
                type="submit"
                bg="cyan.600"
                color="white"
                fontWeight="700"
                px={4}
                py={2.5}
                borderRadius="md"
                _hover={{ bg: "cyan.500" }}
                disabled={isPending}
              >
                {isPending ? "Checking…" : "Unlock"}
              </Box>
            </HStack>
          </Box>

          {/* Status */}
          {state?.error ? (
            <Box
              mt={3}
              bg="red.50"
              border="1px solid"
              borderColor="red.200"
              color="red.700"
              px={3}
              py={2}
              borderRadius="md"
              fontSize="sm"
            >
              {state.error}
            </Box>
          ) : null}
        </Box>

        {/* Leads list */}
        {state?.ok && state.data && (
          <Box
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            p={{ base: 5, md: 6 }}
            boxShadow="0 8px 24px rgba(0,0,0,0.06)"
          >
            <Text fontSize="lg" fontWeight="800" color="blue.900" mb={3}>
              {state.data.length} recent{" "}
              {state.data.length === 1 ? "lead" : "leads"}
            </Text>

            <VStack align="stretch" spacing={3}>
              {state.data.map((lead: any) => (
                <Box
                  key={lead.$id}
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="md"
                  p={3}
                  bg="gray.50"
                >
                  <HStack justify="space-between" align="start" flexWrap="wrap">
                    <Text fontWeight="700" color="blue.900">
                      {lead.fullName || "Unnamed"} — {lead.suburb || "—"}
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                      {formatWhen(lead.$createdAt)}
                    </Text>
                  </HStack>

                  <VStack align="start" spacing={1} mt={2} fontSize="sm">
                    <Text>
                      <b>Email:</b> {lead.email || "—"}
                    </Text>
                    <Text>
                      <b>Phone:</b> {lead.phone || "—"}
                    </Text>
                    <Text>
                      <b>Message:</b> {lead.helpMessage || "—"}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      ID: {lead.$id}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </VStack>

            {state.data.length === 0 && (
              <Text mt={2} color="gray.600">
                No leads yet.
              </Text>
            )}
          </Box>
        )}
      </VStack>
    </Box>
  );
}
