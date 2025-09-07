"use client";

import { VStack, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface BadgeItemProps {
  text: string;
  image: string | StaticImageData; // ← singular 'image'
}

const BadgeItem = ({ text, image }: BadgeItemProps) => (
  <VStack
    py={4}
    w={["120px"]}
    justify="start"
    align="center"
    h={"130px"}
    bg={"white"}
    borderRadius={["20px", "20px", "20px", "20px", "20px", "20px"]}
  >
    <Image src={image} alt={text} width={58} height={58} />{" "}
    {/* width/height added */}
    <Text
      textShadow="0px 0px 100px white"
      textAlign="center"
      fontSize={["9px", "9px", "12px", "12px", "12px", "12px"]}
      fontWeight="700"
      fontFamily="poppins"
      color="cyan.900"
    >
      {text}
    </Text>
  </VStack>
);

export default BadgeItem;
