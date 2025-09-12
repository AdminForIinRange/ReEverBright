import { Box, VStack, Text, HStack, Span, Link, GridItem, Grid } from "@chakra-ui/react";
import Presure from "@/public/Presure washing- Driveways, houses, patios and more-3.png";

export default function WorkBanner() {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      py={{ base: 10, md: 14 }}
      px={{ base: 6, md: 10 }}
      bgGradient="linear(to-r, cyan.700, cyan.800)"
      color="white"
      borderRadius={{ base: "lg", md: "xl" }}
      boxShadow="lg"
      // decorative grid shimmer
      sx={{
        backgroundImage:
          `radial-gradient(circle at 10% 10%, rgba(255,255,255,0.08) 0 2px, transparent 3px),
           radial-gradient(circle at 35% 85%, rgba(255,255,255,0.06) 0 2px, transparent 3px),
           radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0 2px, transparent 3px)`,
        backgroundSize: "24px 24px, 28px 28px, 32px 32px",
        backgroundBlendMode: "screen",
      }}
      _before={{
        // angled shapes
        content: '""',
        position: "absolute",
        insetInlineStart: "-10%",
        top: "-30%",
        w: "70%",
        h: "220%",
        transform: "rotate(-12deg)",
        bgGradient: "linear(to-b, rgba(255,255,255,0.06), rgba(255,255,255,0))",
        borderTopRightRadius: "48px",
      }}
      _after={{
        // logo watermark on the right
        content: '""',
        position: "absolute",
        right: { base: "-20px", md: "2%" },
        top: { base: "30%", md: "50%" },
        transform: "translateY(-50%) rotate(6deg)",
        w: { base: "220px", md: "360px", lg: "420px" },
        h: { base: "220px", md: "360px", lg: "420px" },
        backgroundImage: `url(${(Presure as any).src || Presure})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        opacity: 0.08,
        pointerEvents: "none",
        filter: "grayscale(100%)",
      }}
    >
      <Grid
        gap={{ base: 6, md: 8 }}
        alignItems="center"
        templateColumns={{ base: "1fr", md: "1fr auto" }}
      >
        <GridItem>
          <VStack align="flex-start" spacing={2}>
            <Text
              fontWeight="extrabold"
              lineHeight={1.1}
              letterSpacing="-0.02em"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Ready for us to <Box as="span" color="cyan.200">get to work</Box>?
            </Text>
            <Text
              opacity={0.9}
              maxW={{ base: "unset", md: "3xl" }}
              fontSize={{ base: "md", md: "lg" }}
            >
              Fast quotes, spotless results—driveways, houses, patios & more.
            </Text>
          </VStack>
        </GridItem>

        <GridItem>
          <HStack justify={{ base: "flex-start", md: "flex-end" }}>
            <Link
              href="/quote"
              _hover={{ textDecoration: "none" }}
              role="button"
              aria-label="Arrange a Quote"
            >
              <Box
                as="span"
                px={6}
                py={3}
                borderRadius="md"
                bg="cyan.500"
                fontWeight="bold"
                boxShadow="md"
                transition="all 0.2s ease"
                display="inline-block"
                _hover={{ transform: "translateY(-1px)", boxShadow: "lg", bg: "cyan.400" }}
                _active={{ transform: "translateY(0)", boxShadow: "md" }}
              >
                Arrange a Quote →
              </Box>
            </Link>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
