import {
  Box,
  VStack,
  Text,
  HStack,
  Link,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import Presure from "@/public/Presure washing- Driveways, houses, patios and more-3.png";

export default function WorkBanner() {
  return (
    <Box
      fontFamily={"poppins"}
      px={{ base: "2%", md: "6%", xl: "16%" }}
      mt={"100px"}
      justify={"center"}
      align={["center", "center", "center", "start"]}
      w={"100%"}
      h={"100%"}
    >
      <Box
        as="section"
        position="relative"
        overflow="hidden"
        borderRadius={{ base: "xl", md: "2xl" }}
        px={{ base: 6, md: 10 }}
        py={{ base: 12, md: 16 }}
        color="white"
        bg="cyan.500"
        sx={{
          "--g1":
            "radial-gradient(1200px 400px at 0% 0%, rgba(34,211,238,.25), transparent 60%)",
          "--g2":
            "radial-gradient(900px 300px at 100% 100%, rgba(6,182,212,.25), transparent 60%)",
          backgroundImage:
            "var(--g1), var(--g2), linear-gradient(90deg, #042a2f, #06202a)",
          animation:
            "moveAurora 16s cubic-bezier(.3,.2,.2,1) infinite alternate",
          "@keyframes moveAurora": {
            "0%": { backgroundPosition: "0% 0%, 100% 100%, 0 0" },
            "100%": { backgroundPosition: "40% -20%, 60% 120%, 0 0" },
          },
        }}
        _before={{
          content: '""',
          position: "absolute",
          left: "-10%",
          top: "-35%",
          w: "70%",
          h: "240%",
          transform: "rotate(-10deg)",
          bgGradient: "linear(to-b, cyan.700, cyan.800)",
          opacity: 0.35,
          filter: "blur(6px)",
          borderTopRightRadius: "56px",
        }}
        _after={{
          content: '""',
          position: "absolute",
          right: { base: "-10", md: "4" },
          top: "50%",
          transform: "translateY(-50%) rotate(8deg)",
          w: { base: "220px", md: "380px", lg: "460px" },
          h: { base: "220px", md: "380px", lg: "460px" },
          backgroundImage: `url(${(Presure as any).src || Presure})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          opacity: 0.08,
          pointerEvents: "none",
          filter: "grayscale(100%) contrast(80%)",
        }}
      >
        <Box
          position="absolute"
          inset={0}
          opacity={0.15}
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px), radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px, 24px 24px",
            backgroundPosition: "0 0, 12px 12px",
            color: "rgba(255,255,255,.18)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        />

        <Grid
          alignItems="center"
          gap={{ base: 8, md: 10 }}
          templateColumns={{ base: "1fr", md: "1fr" }}
          position="relative"
          zIndex={1}
        >
          <GridItem>
            <VStack align="flex-start" spacing={5}>
              <Text
                as="h2"
                fontWeight="extrabold"
                letterSpacing="-0.02em"
                lineHeight={1.05}
                fontSize={{ base: "2.25rem", sm: "2.75rem", md: "3.5rem" }}
              >
                Ready for us to{" "}
                <Box as="span" color="cyan.200">
                  get to work
                </Box>
                ?
              </Text>

              <Text
                maxW="3xl"
                opacity={0.9}
                fontSize={{ base: "md", md: "lg" }}
              >
                Same-week scheduling. Crystal-clean driveways, homes, patios &
                more—guaranteed.
              </Text>

              <HStack spacing={4} fontSize="sm" flexWrap="wrap" opacity={0.9}>
                <BadgePill>Licensed & Insured</BadgePill>
                <BadgePill>Eco-friendly Solutions</BadgePill>
                <BadgePill>5★ Local Service</BadgePill>
              </HStack>

              {/* Moved CTA under text */}
              <Link
              pt={"20px"}
                href="/quote"
                _hover={{ textDecoration: "none" }}
                role="button"
                aria-label="Arrange a Quote"
              >
                <CTA>Arrange a Quote</CTA>
              </Link>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

function BadgePill({ children }: { children: React.ReactNode }) {
  return (
    <Box
      as="span"
      px={3}
      py={1}
      borderRadius="full"
      bg="rgba(255,255,255,.08)"
      border="1px solid rgba(255,255,255,.18)"
      backdropFilter="saturate(140%) blur(2px)"
    >
      <Text as="span">{children}</Text>
    </Box>
  );
}

function CTA({ children }: { children: React.ReactNode }) {
  return (
    <Box
      w={["100%", "100%", "none", "none", "none", "none"]}
      bg="cyan.600"
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
      onClick={() => router.push("/services")}
    >
      <Text as="span" pr={{ base: 6, md: 7 }}>
        {children}
      </Text>
    </Box>
  );
}
