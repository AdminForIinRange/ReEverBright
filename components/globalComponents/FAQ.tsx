"use client";

import { useState, useEffect } from "react";
import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

type FAQItem = {
  q: string;
  a: string;
  category?: string; // optional, if you want categories
};

const FAQ = ({ items }: { items: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(
    Array(items.length).fill(false)
  );

  // stagger animation
  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimated = [...animatedItems];
      items.forEach((_, i) => {
        setTimeout(() => {
          newAnimated[i] = true;
          setAnimatedItems([...newAnimated]);
        }, i * 100);
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <Box maxWidth="1400px" mx="auto" px={{ base: "2%", md: "6%", xl: "16%" }} mt="100px" pb={32}>
      <VStack align="center" textAlign="center" spacing={4}>
        <Text
          fontSize={["14px", "16px", "18px"]}
          fontFamily="poppins"
          fontWeight={600}
          textTransform="uppercase"
          letterSpacing="2px"
          color="cyan.600"
        >
          Frequently Asked Questions
        </Text>
        <Text
          fontSize={["28px", "40px", "52px"]}
          fontWeight={800}
          fontFamily="poppins"
          color="black"
        >
          FAQ
        </Text>
        <Box mt="8px" mb="16px" borderColor="cyan.500" w={["80px", "120px", "160px"]} borderWidth="2px" borderRadius="full" />
      </VStack>

      {/* FAQ list */}
      <Box maxWidth="1000px" mx="auto" px={{ base: "0", md: "20px" }}>
        {items.map((faq, i) => (
          <Box
            key={i}
            borderBottom="1px solid #E5E7EB"
            py={5}
            opacity={animatedItems[i] ? 1 : 0}
            transform={animatedItems[i] ? "translateY(0)" : "translateY(20px)"}
            transition="all 0.4s"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
              cursor="pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              py={3}
              px={4}
              _hover={{ bg: "#F9FAFB" }}
              borderRadius="8px"
              transition="all 0.2s"
            >
              <Text fontWeight="600" flex="1" pr={10} color={openIndex === i ? "#0A1029" : "#111827"}>
                {faq.q}
              </Text>
              <Box color="#6B7280" p={2} borderRadius="full">
                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </Box>
            </Box>

            {/* Answer */}
            <Box
              height={openIndex === i ? "auto" : "0px"}
              overflow="hidden"
              transition="all 0.4s"
              opacity={openIndex === i ? 1 : 0}
              mt={openIndex === i ? 3 : 0}
              mb={openIndex === i ? 4 : 0}
              pl={[4, 6]}
              pr={[4, 10]}
            >
              <Text color="#4B5563" lineHeight="1.8" fontFamily="poppins">
                {faq.a}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>

      {/* still have questions */}
      <Box mt="50px" mb={{ base: "40px", md: "70px" }}>
        <Box
          bg="gray.50"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="18px"
          p={{ base: "18px", md: "24px" }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="16px"
          flexWrap="wrap"
        >
          <VStack align="start" spacing="4px">
            <Text fontFamily="poppins" fontWeight="700">Still have questions?</Text>
            <Text fontFamily="poppins" color="gray.600">
              Call us on{" "}
              <Link href="tel:+61412123456" color="blue.700" textDecoration="underline">
                0412 123 456
              </Link>{" "}
              or email{" "}
              <Link href="mailto:hello@everbright.au" color="blue.700" textDecoration="underline">
                hello@everbright.au
              </Link>
            </Text>
          </VStack>
          <Link href="#quote" _hover={{ textDecoration: "none" }}>
            <Box
              as="span"
              px="22px"
              py="14px"
              bg="cyan.400"
              color="#02173a"
              borderRadius="999px"
              fontWeight="700"
              fontFamily="poppins"
              display="inline-block"
              boxShadow="0 6px 16px rgba(0,0,0,.08)"
            >
              Contact us →
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
