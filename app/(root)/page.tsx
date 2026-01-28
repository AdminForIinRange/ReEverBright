"use client";
import { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Text,
  HStack,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import shayalv2 from "@/public/images/shayalv2.png";
import FreeQuote from "@/components/comp/FreeQuote";
import HeroText from "@/components/comp/HeroText";

import ServiceLayout from "@/components/comp/ServiceLayout";
import {
  ShieldCheck,
  Sprout,
  MapPinCheck,
  Handshake,
} from "lucide-react";
import About from "@/components/comp/About";

const BannerSlider = dynamic(
  () => import("@/components/comp/compsDeep/BannerSlider"),
  { ssr: false },
);
const ReviewSection = dynamic(() => import("@/components/comp/ReviewSection"), {
  ssr: false,
});
const SlidingCard = dynamic(() => import("@/components/comp/SlidingCard"), {
  ssr: false,
});
const WorkBanner = dynamic(
  () => import("@/components/comp/compsDeep/WorkBanner"),
  { ssr: false },
);
const FreeQuoteLarge = dynamic(
  () => import("@/components/comp/FreeQuoteLarge"),
  { ssr: false },
);
const FAQ = dynamic(() => import("@/components/globalComponents/FAQ"), {
  ssr: false,
});
const Footer = dynamic(
  () => import("@/components/personalPortfolio/footer/footer"),
  { ssr: false },
);

const Page = () => {
  const [showBelowFold, setShowBelowFold] = useState(false);

  useEffect(() => {
    type IdleDeadline = {
      didTimeout: boolean;
      timeRemaining: () => number;
    };
    const w = window as unknown as {
      requestIdleCallback?: (
        cb: (deadline: IdleDeadline) => void,
        opts?: { timeout: number },
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    const onIdle = () => setShowBelowFold(true);
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => onIdle(), { timeout: 2000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(onIdle, 1200);
    return () => window.clearTimeout(id);
  }, []);

  const Standredfaqs = [
    {
      q: "How do I book a service?",
      a: "You can easily book with us via phone or SMS. Just send us a message and we'll confirm your booking time with you.",
      category: "getting-started",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept cash, bank transfer, and card payments (including tap & go).",
      category: "pricing",
    },
    {
      q: "Do you need a deposit before booking?",
      a: "No deposit is required - you simply pay once the job is completed to your satisfaction.",
      category: "pricing",
    },
    {
      q: "Do I need to be home while you're working?",
      a: "Not necessarily. As long as we have access through the side gate and a working outdoor tap, we can complete the job without you being there.",
      category: "requirements",
    },
    {
      q: "What areas/suburbs do you service?",
      a: "We service all of Greater Adelaide and surrounding suburbs.",
      category: "services",
    },
    {
      q: "Can roof cleaning extend the life of my tiles or Colorbond?",
      a: "Yes - removing moss, lichen, and built-up dirt not only improves appearance but also helps prevent long-term damage, extending the life of your roof.",
      category: "results",
    },
    {
      q: "Do you offer driveway sealing after pressure washing?",
      a: "Yes, we can apply a protective seal after cleaning to help keep your driveway looking fresh for longer and protect it from stains.",
      category: "services",
    },
    {
      q: "Do you bring your own water, or do I need to provide it?",
      a: "We can supply our own water if needed, but this comes at an extra cost. It's usually cheaper and easier to use your outdoor tap.",
      category: "requirements",
    },
    {
      q: "Do you use eco-friendly cleaning solutions?",
      a: "Yes - we use safe, eco-friendly products that won't harm pets, plants, or your property.",
      category: "safety",
    },
  ];

  return (
    <Box mt={"-70px"}>
      <HStack justifyContent={"center"} align={"center"}>
        <Box
          borderRadius={"50px"}
          backgroundImage={` url('/images/aerial-city-adelaide.jpeg')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          position={"absolute"}
          backgroundAttachment={{ base: "scroll", md: "fixed" }}
          zIndex={-1}
          w={["100%", "100%", "100%", "100%", "100%", "100%"]}
          h={["1650px", "1650px", "1650px", "1650px", "1650px", "1650px"]}
          opacity={1}
          borderBottomRightRadius={["500px", "500px", "500px", "2000px"]}
          borderBottomLeftRadius={["500px", "500px", "500px", "1000px"]}
        ></Box>
        <Box
          borderRadius={"50px"}
          backgroundImage={` url('/images/aerial-city-adelaide.jpeg')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          position={"absolute"}
          backgroundAttachment={{ base: "scroll", md: "fixed" }}
          zIndex={-1}
          w={["100%", "100%", "100%", "100%", "100%", "100%"]}
          h={["1650px", "1650px", "1650px", "1650px", "1650px", "1650px"]}
          bg="cyan.700"
          opacity={0.8}
          borderBottomRightRadius={["500px", "500px", "500px", "2000px"]}
          borderBottomLeftRadius={["500px", "500px", "500px", "1000px"]}
        ></Box>
      </HStack>

      <HStack
        // data-aos="fade-up"

        zIndex={4}
        px={{ base: "2%", md: "6%", xl: "16%" }}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
      >
        <HStack
          mt={"100px"}
          justify={"center"}
          align={["center", "center", "center", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["15px", "15px", "15px", "50px", "50px", "100px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["100%", "100%", "100%", "100%", "100%", "100%"]}>
            <HeroText />
          </Box>

          <FreeQuote />

          <Box
            w={"100%"}
            display={["block", "block", "none", "none", "none", "none"]}
          >
            <Box
              display={["block", "block", "none", "none", "none", "none"]}
              w={"100%"}
              p="4"
              borderRadius="15px"
              mt={{ base: "0", md: "20px" }}
              bg="cyan.500"
              // subtle texture + inner shadow for depth
              sx={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            >
              <Grid templateColumns={{ base: "1fr 1fr" }} gap={4}>
                {[
                  {
                    Icon: Handshake,
                    title: "100% Satisfaction",
                    sub: "We Guarantee",
                  },
                  {
                    Icon: MapPinCheck,
                    title: "Locally Owned",
                    sub: "Adelaide Owned",
                  },
                  {
                    Icon: ShieldCheck,
                    title: "Fully Insured",
                    sub: "Protection Cover",
                  },
                  {
                    Icon: Sprout,
                    title: "ECO Friendly",
                    sub: "Environment Safe",
                  },
                ].map(({ Icon, title, sub }, i) => (
                  <GridItem key={i}>
                    <Box
                      // pill card
                      bg="rgba(255,255,255,.08)"
                      border="1px solid rgba(255,255,255,.18)"
                      borderRadius="12px"
                      p={3}
                    >
                      <HStack align="center" spacing={3}>
                        <Box
                          p={2.5}
                          rounded="full"
                          bg="cyan.700"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          boxShadow="0 4px 10px rgba(0,0,0,.15)"
                          flexShrink={0}
                        >
                          <Icon size={20} color="white" />
                        </Box>
                        <VStack align="flex-start" spacing={0}>
                          <Text
                            fontWeight="bold"
                            color="white"
                            fontSize={{ base: "13px", md: "14px" }}
                            lineHeight="1.2"
                          >
                            {title}
                          </Text>
                          <Text
                            fontSize={{ base: "11px", md: "12px" }}
                            color="cyan.100"
                            lineHeight="1.2"
                          >
                            {sub}
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </Box>
        </HStack>
      </HStack>

      <ServiceLayout />
      <About />

      <Box>
        <Box pt={"50px"} bg={"cyan.600"}>
          <Box>
            {/* Another spot where SectionHeading matches your style */}

            <VStack
              justify={"center"}
              align={"center"}
              w={"100%"}
              textAlign={"center"}
              px={{ base: "2%", md: "6%", xl: "16%" }}
            >
              {/* Eyebrow text */}
              <Text
                fontSize={["14px", "16px", "18px"]}
                fontFamily="var(--font-poppins)"
                fontWeight={600}
                textTransform="uppercase"
                letterSpacing="2px"
                lineHeight="1.4"
                color="cyan.900"
              >
                EVERBRIGHT PRESSURE WASHING
              </Text>

              {/* Main title */}
              <Text
                fontSize={["28px", "40px", "52px"]}
                fontWeight={800}
                fontFamily="var(--font-poppins)"
                lineHeight="1.1"
                color="cyan.100"
              >
                A Local Business you can rely on
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

            <HStack
              zIndex={3}
              px={{ base: "2%", md: "6%", xl: "16%" }}
              justify="center"
              align="center"
              w="100%"
              my={{ base: "0px", md: "50px", xl: "50px" }}
            >
              <HStack
                justify="center"
                align={{ base: "center", md: "start" }}
                w="100%"
                gap={{ base: "15px", md: "50px" }}
                flexWrap={[
                  "wrap",
                  "wrap",
                  "wrap",
                  "nowrap",
                  "nowrap",
                  "nowrap",
                ]}
              >
                {/* Copy card */}
                <Box w={{ base: "100%", md: "100%" }} mt={"50px"}>
                  <VStack
                    h={"100%"}
                    align="start"
                    color="white"
                    fontSize="lg"
                    fontFamily="var(--font-poppins)"
                  >
                    <Text>
                      I started EverBright Pressure Washing here in South
                      Australia to help homeowners feel proud of their property.
                      I treat every home as if it were my own, offering honest
                      advice, paying close attention to detail, and making sure
                      the job&apos;s done right the first time.
                    </Text>

                    <Text>
                      My team shares that approach. We know life is busy, so
                      we&apos;ll take care of the dirty work, giving you more time to
                      enjoy what matters most.
                    </Text>

                    {/* quick-hit trust chips */}

                    {/* CTA line */}
                    <Box pt={2}>
                      <Text
                        fontFamily="var(--font-poppins)"
                        fontWeight="700"
                        color="white"
                      >
                        - Shayal
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                {/* Image area with decorative frame */}
                <Box>
                  <Image src={shayalv2} alt="Shayal" width={400} height={400} />
                </Box>
              </HStack>
            </HStack>
          </Box>
        </Box>
      </Box>

      {showBelowFold ? (
        <>
          <BannerSlider />
          <ReviewSection />
          <WorkBanner />
          {/* Floating geometric shapes */}
          <SlidingCard />
        </>
      ) : null}
      <HStack
        px={{ base: "2%", md: "6%", xl: "16%" }}
        mt={"100px"}
        justify={"center"}
        align={["center", "center", "center", "start", "start", "start"]}
        w={"100%"}
        h={"100%"}
      >
        {showBelowFold ? <FreeQuoteLarge /> : null}
      </HStack>

      {showBelowFold ? <FAQ items={Standredfaqs} /> : null}
      {showBelowFold ? <Footer /> : null}
    </Box>
  );
};

export default Page;



