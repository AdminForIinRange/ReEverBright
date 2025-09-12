import { VStack, Text, Box } from "@chakra-ui/react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  color?: string;
  align?: "start" | "center"; // optional alignment override
}

const SectionHeading = ({
  eyebrow,
  title,
  color = "cyan.900",
  align = "center",
}: SectionHeadingProps) => (
  <VStack justify="center" align={align} textAlign={align} spacing={3} w="100%">
    {/* Eyebrow text */}
    <Text
      fontSize={["14px", "16px", "18px"]}
      fontFamily="poppins"
      fontWeight={600}
      textTransform="uppercase"
      letterSpacing="2px"
      lineHeight="1.4"
      color="cyan.600"
    >
      {eyebrow}
    </Text>

    {/* Main title */}
    <Text
      fontSize={["28px", "40px", "52px"]}
      fontWeight={800}
      fontFamily="poppins"
      lineHeight="1.1"
      color={color}
    >
      {title}
    </Text>

    {/* Accent line */}
    <Box
      mt="16px"
      mb="8px"
      borderColor="cyan.500"
      w={["80px", "120px", "160px"]}
      borderWidth="2px"
      borderRadius="full"
    />
  </VStack>
);

export default SectionHeading;
