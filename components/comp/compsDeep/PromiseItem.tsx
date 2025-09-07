import { Text } from "@chakra-ui/react";

const PromiseItem = ({ text }: { text: string }) => (
  <Text color="blue.300" fontSize="24px" fontWeight="700">
    ✓{" "}
    <Text as="span" color="white" fontSize="20px" fontWeight="400">
      {text}
    </Text>
  </Text>
);

export default PromiseItem;
