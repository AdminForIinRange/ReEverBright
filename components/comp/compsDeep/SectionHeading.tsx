import { VStack, Text, Box } from "@chakra-ui/react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  color?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  color = "white",
}: SectionHeadingProps) => (
  <VStack
    justify="center"
    align={["start", "center", "center", "center", "center", "center"]}
    textAlign={["start", "center", "center", "center", "center", "center"]}
    w="100%"
  >
    <Text
      fontSize={["16px", "18px", "24px"]}
      fontFamily="poppins"
      fontWeight={700}
      lineHeight="1.6"
      color="cyan.600"
    >
      {eyebrow}
    </Text>
    <Text
      fontSize={["36px", "48px", "56px"]}
      fontWeight={700}
      fontFamily="poppins"
      lineHeight="1.1"
      color={"cyan.400"}
    >
      {title}
    </Text>
    <Box my="25px" borderColor={"cyan.500"} w={["100%", "600px"]} borderWidth="1px" />
  </VStack>
);

export default SectionHeading;
