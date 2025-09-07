import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Google from "@/public/Google.png";
import Adl from "@/public/images/aerial-city-adelaide.jpeg";
import { FaStar } from "react-icons/fa";
import FreeQuote from "@/components/comp/FreeQuote";
import { CheckCircle, Phone } from "lucide-react";

const HeroText = () => {
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
        textAlign={["center", "center", "center", "left", "left", "left"]}
        color={"cyan.100"}
        bgGradient="linear(to-r, teal, blue)"
        lineHeight={"0.9"}
        className="animate__animated animate__fadeInDownBig"
      >
        Because a Clean Home Feels Like a{" "}
        <Span color={"WHITE"}>New Home</Span>
      </Text>
      <Text
        as={"p"}
        fontSize={["14px", "14px", "19px", "19px", "19px", "19px"]}
        mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
        textAlign={["center", "center", "center", "left", "left", "left"]}
        fontFamily={"poppins"}
        color={"WHITE"}
        w={["100%", "100%", "100%", "100%", "100%", "100%"]}
        fontWeight={"500"}
      >
        Restore your home's beauty with expert pressure washing services. From
        driveways to decks, we make everything look brand new.
      </Text>
      <HStack
        mt={"15px"}
        rounded={"2xl"}
        // bg={"gray.50"}
        // border={"1px solid lightgray"}
        width={{ base: "100%", md: "100%" }}
        textAlign={["center", "center", "center", "start", "start", "start"]}
        justify={["center", "center", "center", "start", "start", "start"]}
        position="relative"
      >
        <HStack
          alignItems="center"
          justifyContent="center"
          borderRadius="full"
          py={2}
          px={4}
          bg={"gray.100"}
          border={"1px solid lightgray"}
        >
          <Image src={Google} alt="Google" width={34} height={34} />
          <HStack>
            <Text fontSize="xl" fontWeight="600" color="#fbbf24">
              5 / 5
            </Text>
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} color="#fbbf24" size={20} />
            ))}
          </HStack>
        </HStack>
      </HStack>
      <Box mt={["20px", "20px", "20px", "20px", "20px", "20px"]} >
        <VStack
          textAlign={["center", "center", "center", "left", "left", "left"]}
          align={["center", "center", "center", "start", "start"]}
       
        >
          <HStack
            justify={["center", "center", "center", "start", "start"]}
            align={["center", "center", "center", "start", "start"]}
            gap={"50px"}
          >
            <HStack color="green.300" fontWeight={"700"} fontSize="24px">
              <CheckCircle />
              <Span
                fontSize={["12px", "12px", "14px", "14px", "14px", "19px"]}
                fontFamily={"poppins"}
                color="WHITE"
                fontWeight={"500"}
              >
                {" "}
                Gutter Cleaning
              </Span>
            </HStack>
            <HStack color="green.300" fontWeight={"700"} fontSize="24px">
              <CheckCircle />
              <Span
                fontSize={["12px", "12px", "14px", "14px", "14px", "19px"]}
                fontFamily={"poppins"}
                color="WHITE"
                fontWeight={"500"}
              >
                {" "}
                Roof Washing
              </Span>
            </HStack>
          </HStack>
        </VStack>
        <VStack
        ml={["20px", "20px", "20px", "0px", "0px", "0px"]}

       
         textAlign={["center", "center", "center", "left", "left", "left"]}
          align={["center", "center", "center", "start", "start"]}
        >
          <HStack
            textAlign={["center", "center", "center", "left", "left", "left"]}
          align={["center", "center", "center", "start", "start"]}
            gap={"50px"}
            mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
          >
            <HStack color="green.300" fontWeight={"700"} fontSize="24px">
              <CheckCircle />
              <Span
                fontSize={["12px", "12px", "14px", "14px", "14px", "19px"]}
                fontFamily={"poppins"}
                color="WHITE"
                fontWeight={"500"}
              >
                {" "}
                Solar Cleaning
              </Span>
            </HStack>
            <HStack ml={["10px", "10px", "10px", "10px", "10px", "10px"]} color="green.300" fontWeight={"700"} fontSize="24px">
              <CheckCircle />
              <Span
                fontSize={["12px", "12px", "14px", "14px", "14px", "19px"]}
                fontFamily={"poppins"}
                color="WHITE"
                fontWeight={"500"}
              >
                {" "}
                ressure Washing
              </Span>
            </HStack>
          </HStack>
        </VStack>
      </Box>
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
          onClick={() => router.push("/services")}
        >
          <HStack>
            <Phone /> Call for a Quote!
          </HStack>

          {/* <Icon as={ArrowRight}> </Icon> */}
        </Box>
      </HStack>
      <HStack
        rounded={"2xl"}
        // bg={"gray.50"}
        // border={"1px solid lightgray"}
        width={{ base: "100%", md: "100%" }}
        textAlign={["center", "center", "center", "start", "start", "start"]}
        justify={["center", "center", "center", "start", "start", "start"]}
        position="relative"
      ></HStack>
    </>
  );
};

export default HeroText;
