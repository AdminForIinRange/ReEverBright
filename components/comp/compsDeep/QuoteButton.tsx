"use client";
import { Box } from "@chakra-ui/react";
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
    window.location.href = "tel:+61411017366";;
 }}
    >
      Call for a Quote!
    </Box>
  );
};

export default QuoteButton;
