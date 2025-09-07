import { VStack, Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BadgeItemProps {
  text: string;
  icon: ReactNode;
}

const BadgeItem = ({ text, icon }: BadgeItemProps) => (
  <VStack
    p={4}
    w={["100%", "100%", "100%", "100%", "100%", "100%"]}
    justify={"start"}
    align={"center"}
    h={"100%"}
    bg={[ "none", "none", "white", "white", "white", "white"]}
    borderRadius={["0px", "0px", "20px", "20px", "20px", "20px"]}
  >
    <Box bg="cyan.300" p={2} borderRadius="full">
      {icon}
    </Box>
    <Text
      textShadow={"0px 0px 100px white"}
      textAlign="center"
      fontSize={["10px", "14px", "16px", "16px", "16px", "16px"]}
      fontWeight="500"
      fontFamily="poppins"
      color={"black"}
    >
      {text}
    </Text>
  </VStack>
);

export default BadgeItem;
