import type { Metadata } from "next";
import Link from "next/link";
import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Exterior Cleaning Services Adelaide | EverBright Pressure Washing",
  description:
    "Explore EverBright's exterior cleaning services in Adelaide, SA: pressure washing, roof cleaning, gutter cleaning, and solar panel cleaning.",
  alternates: {
    canonical: "https://www.everbrightpressurewashing.au/services",
  },
  openGraph: {
    title: "Exterior Cleaning Services Adelaide | EverBright Pressure Washing",
    description:
      "Professional exterior cleaning across Adelaide, including pressure washing, roof cleaning, gutter cleaning, and solar panel cleaning.",
    url: "https://www.everbrightpressurewashing.au/services",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

const Services = () => {
  return (
    <Box px={{ base: "4%", md: "6%", xl: "16%" }} py={{ base: 10, md: 16 }}>
      <Heading as="h1" size="xl" mb={4} color="cyan.900">
        Exterior Cleaning Services in Adelaide
      </Heading>
      <Text fontSize="lg" color="gray.700" maxW="760px" mb={6}>
        Choose the right service for your home or business across Adelaide and surrounding suburbs. Every job is fully insured and backed by our satisfaction guarantee.
      </Text>
      <List spacing={3} fontSize="lg" color="cyan.800">
        <ListItem>
          <Link href="/services/pressure-washing">Pressure Washing Adelaide</Link>
        </ListItem>
        <ListItem>
          <Link href="/services/roof-cleaning">Roof Cleaning Adelaide</Link>
        </ListItem>
        <ListItem>
          <Link href="/services/gutter-cleaning">Gutter Cleaning Adelaide</Link>
        </ListItem>
        <ListItem>
          <Link href="/services/solar-panel-cleaning">Solar Panel Cleaning Adelaide</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Services;

