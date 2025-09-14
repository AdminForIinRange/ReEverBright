"use client";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";

const QuoteButton = () => {
  const router = useRouter();
  return (
    <Box
      w={["100%", "100%", "none", "none", "none", "none"]}
      bg="cyan.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="15px"
      fontFamily="poppins"
      transition="all 0.2s ease-in-out"
      cursor="pointer"
      _hover={{
        transition: "all 0.2s ease-in-out",

        fontWeight: "700",
        px: "80px",
        bg: "cyan",
      }}
      p={4}
      color="white"
      rounded="30px"
      px="12"
      fontWeight="500"
      onClick={() => {
        router.push("#quote");
      }}
    >
      <HStack>
        <Box textAlign={"center"}>
          <Phone />
        </Box>
        <Text textStyle={"smallText"} fontFamily="poppins" fontWeight="500">
          Get a Quote
        </Text>
      </HStack>
    </Box>
  );
};

export default QuoteButton;
