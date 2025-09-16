import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Google from "@/public/Google.png";
import Adl from "@/public/images/aerial-city-adelaide.jpeg";
import { FaStar } from "react-icons/fa";
import FreeQuote from "@/components/comp/FreeQuote";
import {
  Award,
  CheckCircle,
  Medal,
  Phone,
  ShieldCheck,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import router from "next/router";
import { useRouter } from "next/navigation";

const HeroText = () => {
  const router = useRouter();
  return (
    <>
      <Text
        as={"h2"}
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
        fontSize={{ base: "42px", md: "52px", lg: "72px" }}
        fontWeight={600}
        fontFamily={"poppins"}
        bgClip="text"
        textAlign={["start", "center", "center", "start", "start", "start"]}
        color={"cyan.300"}
        bgGradient="linear(to-r, teal, blue)"
        lineHeight={"0.9"}
        className="animate__animated animate__fadeInDownBig"
      >
        Because a Clean Home Feels Like a <Span color={"WHITE"}>New Home</Span>
      </Text>

      <Text
        textShadow={"0px 0px 100px black"}
        as={"p"}
        textStyle={"subheading"}
        mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
        textAlign={["start", "center", "center", "start", "start", "start"]}
        fontFamily={"poppins"}
        color={"cyan.100"}
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        fontWeight={"700"}
      >
        Adelaide’s #1 Choice for Remarkable Exterior Cleaning!
      </Text>

      <VStack
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        h={["100%", "100%", "100%", "100%", "100%", "100%"]}
        mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
        align={["start", "start", "start", "start", "start", "start"]}
        justify={["start", "start", "start", "start", "start", "start"]}
      >
        <VStack
          w={"100%"}
          textAlign={["start", "center", "center", "start", "start", "start"]}
          align={["start", "center", "center", "start", "start", "start"]}
        >
          <HStack
            w={["250px", "250px", "250px", "250px", "250px", "250px"]}
            justify={["start", "center", "center", "start", "start", "start"]}
            align={["start", "center", "center", "start", "start", "start"]}
            gap={"20px"}
          >
            <HStack
              w={["160px", "250px", "250px", "250px", "250px", "250px"]}
              align={["start", "center", "center", "start", "start", "start"]}
              justify={["start", "center", "center", "start", "start", "start"]}
              gap={"20px"}
            >
              <HStack
                textWrap={"none"}
                w={["160px", "250px", "250px", "250px", "250px", "250px"]}
                align={["start", "end", "end", "start", "start", "start"]}
                justify={["start", "end", "end", "start", "start", "start"]}
                color="green.300"
                fontWeight={"700"}
                fontSize="24px"
              >
                <CheckCircle />
                <Span
                  fontSize={["14px", "16px", "14px", "14px", "14px", "19px"]}
                  fontFamily={"poppins"}
                  color="WHITE"
                  fontWeight={"500"}
                >
                  {" "}
                  Gutter Cleaning
                </Span>
              </HStack>
            </HStack>
            <HStack
              w={["160px", "250px", "250px", "250px", "250px", "250px"]}
              align={["start", "center", "center", "start", "start", "start"]}
              justify={["start", "center", "center", "start", "start", "start"]}
              gap={"20px"}
            >
              <HStack
                textWrap={"none"}
                w={["160px", "250px", "250px", "250px", "250px", "250px"]}
                align={["start", "start", "start", "start", "start", "start"]}
                justify={["start", "start", "start", "start", "start", "start"]}
                color="green.300"
                fontWeight={"700"}
                fontSize="24px"
              >
                <CheckCircle />
                <Span
                  fontSize={["14px", "16px", "14px", "14px", "14px", "19px"]}
                  fontFamily={"poppins"}
                  color="WHITE"
                  fontWeight={"500"}
                >
                  {" "}
                  Solar Cleaning
                </Span>
              </HStack>
            </HStack>
          </HStack>
        </VStack>

        <VStack
          w={"100%"}
          textAlign={["start", "center", "center", "start", "start", "start"]}
          align={["start", "center", "center", "start", "start", "start"]}
        >
          <HStack
            w={["250px", "250px", "250px", "250px", "250px", "250px"]}
            justify={["start", "center", "center", "start", "start", "start"]}
            align={["start", "center", "center", "start", "start", "start"]}
            gap={"20px"}
          >
            <HStack
              w={["160px", "250px", "250px", "250px", "250px", "250px"]}
              align={["start", "center", "center", "start", "start", "start"]}
              justify={["start", "center", "center", "start", "start", "start"]}
              gap={"20px"}
            >
              <HStack
                textWrap={"none"}
                w={["160px", "250px", "250px", "250px", "250px", "250px"]}
                align={["start", "end", "end", "start", "start", "start"]}
                justify={["start", "end", "end", "start", "start", "start"]}
                color="green.300"
                fontWeight={"700"}
                fontSize="24px"
                mr={"15px"}
              >
                <CheckCircle />
                <Span
                  fontSize={["14px", "16px", "14px", "14px", "14px", "19px"]}
                  fontFamily={"poppins"}
                  color="WHITE"
                  fontWeight={"500"}
                >
                  Roof Washing
                </Span>
              </HStack>
            </HStack>
            <HStack
              w={["160px", "250px", "250px", "250px", "250px", "250px"]}
              align={["start", "center", "center", "start", "start", "start"]}
              justify={["start", "center", "center", "start", "start", "start"]}
              gap={"20px"}
            >
              <HStack
                textWrap={"none"}
                w={["160px", "250px", "250px", "250px", "250px", "250px"]}
                align={["start", "start", "start", "start", "start", "start"]}
                justify={["start", "start", "start", "start", "start", "start"]}
                color="green.300"
                fontWeight={"700"}
                fontSize="24px"
              >
                <CheckCircle />
                <Span
                  fontSize={["14px", "16px", "14px", "14px", "14px", "19px"]}
                  fontFamily={"poppins"}
                  color="WHITE"
                  fontWeight={"500"}
                >
                  Pressure Washing
                </Span>
              </HStack>
            </HStack>
          </HStack>
        </VStack>

        {/* 




        <VStack
          justify={["start", "center", "center", "start", "start", "start"]}
          textAlign={["start", "center", "center", "start", "start", "start"]}
          align={["start", "center", "center", "start", "start", "start"]}
        >
          <HStack
            textAlign={["start", "center", "center", "start", "start", "start"]}
            align={["start", "center", "center", "start", "start", "start"]}
            gap={"20px"}
            mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
          >
            <HStack
              w={"200px"}
              align={["start", "center", "center", "start", "start", "start"]}
              justify={["start", "center", "center", "start", "start", "start"]}
              color="green.300"
              fontWeight={"700"}
              fontSize="24px"
            >
              <CheckCircle />
              <Span
                fontSize={["16px", "16px", "14px", "14px", "14px", "19px"]}
                fontFamily={"poppins"}
                color="WHITE"
                fontWeight={"500"}
              >
                {" "}
                Solar Cleaning
              </Span>
            </HStack>
            <HStack
              w={"200px"}
              ml={["10px", "10px", "10px", "10px", "10px", "10px"]}
              color="green.300"
              fontWeight={"700"}
              fontSize="24px"
                align={["start", "center", "center", "start", "start", "start"]}
              justify={["start", "center", "center", "start", "start", "start"]}
            >
              <CheckCircle />
              <Span
                fontSize={["16px", "16px", "14px", "14px", "14px", "19px"]}
                fontFamily={"poppins"}
                color="WHITE"
                fontWeight={"500"}
              >
                {" "}
                Pressure Washing
              </Span>
            </HStack>
          </HStack>
        </VStack> */}
      </VStack>

      <HStack
        mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
        justify={["center", "center", "center", "start", "start", "start"]}
        align={"start"}
        w={"100%"}
        transition={"all 0.2s ease-in-out"}
        zIndex={4}
      >
        <Box
          w={["400px"]}
          bg={"cyan.500"}
          my={"15px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={["center"]}
          gap={"15px"}
          fontFamily={"poppins"}
          transition={"all 0.2s ease-in-out"}
          cursor={"pointer"}
          _hover={{
            transition: "all 0.2s ease-in-out",
            scale: 1.1,
            fontWeight: "700",
            px: "80px",
            bg: "cyan.400",
          }}
          p={4}
          color={"white"}
          rounded={"30px"}
          px={"12"}
          fontWeight={"500"}
          onClick={() => {
            router.push("#quote");
            window.location.href = "tel:+61411017366";
          }}
        >
          <HStack>
            <Phone /> Call for a Quote!
          </HStack>

          {/* <Icon as={ArrowRight}> </Icon> */}
        </Box>
      </HStack>

      <HStack
        // RDC
        display={["flex", "flex", "none", "none", "none", "none"]}
        mt={"15px"}
        rounded={"5px"}
        // bg={"gray.50"}
        // border={"1px solid lightgray"}
        width={{ base: "100%", md: "100%" }}
        textAlign={["start", "start", "start", "start", "start", "start"]}
        justify={["start", "start", "start", "start", "start", "start"]}
        position="relative"
      >
        <VStack
          w={"100%"}
          h={"100%"}
          alignItems="center"
          justifyContent="center"
          rounded={"15px"}
          py={2}
          px={4}
          bg={"white"}
          border={"1px solid lightgray"}
        >
          <HStack>
            <Image src={Google} alt="Google" width={34} height={34} />
            <HStack>
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} color="#fbbf24" size={20} />
              ))}
            </HStack>
          </HStack>
          <Text
            textShadow={"0px 0px 100px black"}
            as={"p"}
            textAlign={["center", "center", "start", "start", "start", "start"]}
            fontFamily={"poppins"}
            color={"cyan.900"}
            w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            fontWeight={"700"}
          >
            Verified 5-Star Reviews
          </Text>
        </VStack>
      </HStack>
    </>
  );
};

export default HeroText;
