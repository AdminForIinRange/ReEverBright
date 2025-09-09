import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, HStack, Link, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { BiRightArrowAlt } from "react-icons/bi";
import { Phone } from "lucide-react";
import router from "next/router";
const SLIDE_DURATION_MS = 4000; // Duration in milliseconds for each slide

function BannerSlider() {
  const services = [
    {
      title: "Pressure Washing",
      image:
        "https://images.pexels.com/photos/14965464/pexels-photo-14965464.jpeg",
      desc: "Deep-clean hard surfaces to remove grime, algae, and stubborn stains.",
    },
    {
      title: "Solar Cleaning",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      desc: "Maximize panel efficiency with streak-free, residue-free cleaning.",
    },
    {
      title: "Roof Cleaning",
      image:
        "https://images.pexels.com/photos/2513975/pexels-photo-2513975.jpeg",
      desc: "Safely lift moss and dark streaks to restore curb appeal.",
    },
    {
      title: "Gutter Cleaning",
      image:
        "https://images.pexels.com/photos/3258128/pexels-photo-3258128.jpeg",
      desc: "Clear debris to prevent overflow, leaks, and foundation damage.",
    },
  ];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % services.length),
      SLIDE_DURATION_MS
    );
    return () => clearInterval(id);
  }, [services.length]);

  return (
    <Box px={{ base: "0%", md: "6%", xl: "16%" }} py={"50px"}>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          height: "100%",
          padding: "10px",
        }}
      >
        <VStack
          zIndex={3}
          align="start"
          spacing="2"
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          p={{ base: 12, md: 14 }}
        >
          <Text
            color="white"
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight="1.15"
            fontWeight="800"
            textAlign="start"
            textShadow="0 4px 18px rgba(0,0,0,0.55)"
            fontFamily="Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
            letterSpacing="0.2px"
          >
            {services[idx].title}
          </Text>

          <Text
            pt="1"
            color="whiteAlpha.900"
            fontSize={{ base: "sm", md: "md" }}
            textAlign="start"
            textShadow="0 3px 14px rgba(0,0,0,0.6)"
            opacity={0.95}
          >
            Get a comprehensive management service that includes all our premium
            offerings.
          </Text>

          <HStack w="100%" pt={{ base: 2, md: 3 }} spacing="3">
            {/* Outline / light button */}

            {/* Solid / primary button */}
            <HStack
            
              justify={[
                "start",
                "start",
                "start",
                "start",
                "start",
                "start",
              ]}
              align={"start"}
              w={"100%"}
              transition={"all 0.2s ease-in-out"}
              zIndex={4}
            >
              <Box
                w={[
                  "fit-content",
                  "fit-content",
                  "fit-content",
                  "fit-content",
                  "fit-content",
                  "fit-content",
                ]}
                bg={"cyan.500"}
                display={"flex"}
                alignItems={"start"}
                justifyContent={["start"]}
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
                p={["2", "4", "4", "4", "4", "4"]}
                color={"white"}
                rounded={"30px"}
                px={[ "6", "8", "10", "12", "12", "12"]}
                fontWeight={"500"}
                onClick={() => router.push("/services")}
              >
                <HStack>
                  <Phone /> Call for a Quote!
                </HStack>

                {/* <Icon as={ArrowRight}> </Icon> */}
              </Box>
            </HStack>
          </HStack>
        </VStack>
        <div
          style={{
            display: "flex",
            width: `${services.length * 100}%`,
            transform: `translateX(-${(100 / services.length) * idx}%)`,
            transition: "transform 400ms ease",
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                minWidth: `${100 / services.length}%`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 20px",
              }}
            >
              <Box position="relative" h="360px" w="100%" overflow="hidden">
                <Image
                  quality={80}
                  loading="lazy"
                  src={service.image}
                  alt={`${service.title} service`}
                  fill
                  style={{
                    borderRadius: " 20px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
            </div>
          ))}
        </div>
      </div>

      {/* dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          padding: "10px 0",
        }}
      >
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              border: "none",
              background: i === idx ? "#4A5568" : "#CBD5E0",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </Box>
  );
}

export default BannerSlider;
