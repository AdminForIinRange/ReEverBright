import { Box, VStack, Text, HStack, Link } from "@chakra-ui/react";
import Image from "next/image";
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";

function ServicesBox({
  title,
  image,
  desc,
  badge,
  link,
}: {
  title: string;
  image: string;
  desc: string;
  badge: string;
  link: string;
}) {
  return (
    <Box
      w={{ base: "100%", md: "320px", lg: "420px" }}
      transition="transform 0.35s ease, filter 0.35s ease"
      willChange="transform"
      _hover={{ transform: "translateY(-10px) rotate3d(1, 0.2, 0, 1deg)" }}
    >
      {/* Glow ring */}
      <Box
        position="relative"
        rounded="3xl"
        _before={{
          content: '""',
          position: "absolute",
          inset: "-2px",
          rounded: "3xl",

          opacity: 0.55,
          transition: "opacity 0.35s ease",
          pointerEvents: "none",
        }}
        _hover={{
          _before: { opacity: 0.85 },
        }}
      >
        <Box
          bg="white"
          _dark={{ bg: "gray.800" }}
          borderRadius="3xl"
          overflow="hidden"
          boxShadow="0 25px 60px rgba(0,0,0,0.18)"
          transition="box-shadow 0.35s ease"
          _hover={{ boxShadow: "0 35px 80px rgba(0,0,0,0.22)" }}
        >
          {/* Media */}
          <Box
            position="relative"
            h={{ base: "280px", md: "460px" }}
            w="100%"
            overflow="hidden"
          >
            <Image
              quality={85}
              loading="lazy"
              src={image || "/placeholder.svg"}
              alt={title ? `${title} service` : "Service image"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
                transform: "scale(1.02)",
                transition: "transform 0.6s ease",
              }}
            />
            {/* Subtle image zoom on hover */}
            <Box
              as="span"
              position="absolute"
              inset="0"
              _hover={{ "& + span > img": { transform: "scale(1.08)" } }}
            />

            {/* Gradient scrim for legibility */}
            <Box
              position="absolute"
              inset="0"
              bg="linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 72%, rgba(0,0,0,0.8) 100%)"
            />

            {/* Content */}
            <VStack
              align="start"
              spacing="2"
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              p={{ base: 4, md: 6 }}
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
                {title}
              </Text>

              <Text
                pt="1"
                color="whiteAlpha.900"
                fontSize={{ base: "sm", md: "md" }}
                textAlign="start"
                textShadow="0 3px 14px rgba(0,0,0,0.6)"
                opacity={0.95}
              >
                {desc}
              </Text>

              <HStack w="100%" pt={{ base: 2, md: 3 }} spacing="3">
                {/* Outline / light button */}

                {/* Solid / primary button */}
                <Link
                  href={`/services/${link}`}
                  role="button"
                  aria-label="Learn more about Pressure Washing"
                  py="2"
                  px="6"
                  bg="cyan.500"
                  color="white"
                  rounded="30px"
                  fontSize={{ base: "sm", md: "sm" }}
                  fontWeight="700"
                  textAlign="center"
                  textDecoration="none"
                  letterSpacing="0.3px"
                  transition="transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease"
                  _hover={{
                    bg: "cyan.600",
                    transform: "translateY(-2px)",

                    textDecoration: "none",
                  }}
                  _active={{ transform: "translateY(0)" }}
                  _focusVisible={{
                    outline: "2px solid",
                    outlineColor: "white",
                    outlineOffset: "2px",
                  }}
                >
                  <Text as="span" display="block">
                    Learn More
                  </Text>
                  <BiRightArrowAlt size={30} />
                </Link>
              </HStack>
            </VStack>

            {/* Corner badge (pure CSS, no new libs) */}
            <Box
              position="absolute"
              top="4"
              right="4"
              px="3"
              py="1.5"
              rounded="full"
              bg="blackAlpha.700"
              color="whiteAlpha.900"
              fontSize="xs"
              fontWeight="700"
              letterSpacing="0.4px"
              backdropFilter="auto"
              backdropBlur="6px"
              border="1px solid"
              borderColor="whiteAlpha.200"
            >
              {badge}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ServicesBox;
