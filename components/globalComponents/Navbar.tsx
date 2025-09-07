"use client";

import { useState, useRef, useCallback, memo, useEffect } from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import Presure from "@/public/Presure washing- Driveways, houses, patios and more-3.png";

const Navbar = () => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<any>(null);

  // NEW: track scroll state
  const [scrolled, setScrolled] = useState(false);

  // Simulate active page for demo purposes
  const activePage = `/`;

  // NEW: toggle background when user scrolls
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll(); // initialize on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on large screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1023) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Dropdown = memo(
    ({
      items,
      category,
    }: {
      items: { label: string; link: string; description?: string }[];
      category: string;
    }) => (
      <Box
        position="absolute"
        top="calc(100% + 16px)"
        left="50%"
        transform="translateX(-50%)"
        bg="#05204A"
        boxShadow="0 8px 24px rgba(0, 0, 0, 0.08)"
        borderRadius="8px"
        w={{ base: "280px", md: "320px" }}
        zIndex={10}
        opacity={activeDropdown === category ? 1 : 0}
        visibility={activeDropdown === category ? "visible" : "hidden"}
        transition="all 0.25s ease-in-out"
        overflow="hidden"
        display={{ base: "none", md: "block" }}
        onMouseEnter={() => clearTimeout(timeoutRef.current)}
        onMouseLeave={() => {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setActiveDropdown(null), 300);
        }}
      >
        <Box maxH="100%" overflowY="auto">
          {items.map((item, index) => (
            <Box
              key={index}
              p="16px 20px"
              cursor="pointer"
              transition="all 0.2s ease"
              _hover={{ bg: "#0A0F29" }}
              onClick={() => router.push(item.link)}
              borderBottom={
                index !== items.length - 1 ? "1px solid #F5F5F5" : "none"
              }
            >
              <Text
                textStyle={"smallText"}
                color="#F5F5F5"
                fontWeight="500"
                mb="4px"
              >
                {item.label}
              </Text>
              {item.description && (
                <Text textStyle={"smallText"} color="#F5F5F5" lineHeight="1.4">
                  {item.description}
                </Text>
              )}
            </Box>
          ))}
        </Box>
        <Box p="12px 20px" bg="#05204A" borderTop="1px solid #F5F5F5">
          <Text
            textStyle={"smallText"}
            fontWeight="500"
            color="#F5F5F5"
            cursor="pointer"
            _hover={{ color: "#F5F5F5" }}
            onClick={() => router.push(`/${category}`)}
          >
            View all {category} →
          </Text>
        </Box>
      </Box>
    ),
  );
  Dropdown.displayName = "Dropdown";

  const MobileDropdown = memo(
    ({
      items,
      category,
      isOpen,
    }: {
      items: { label: string; link: string; description?: string }[];
      category: string;
      isOpen: boolean;
    }) => (
      <Box
        maxH={isOpen ? "500px" : "0"}
        transition="all 0.3s ease"
        overflow="hidden"
        bg="#f9f9f9"
        pl="20px"
        visibility={isOpen ? "visible" : "hidden"}
        opacity={isOpen ? 1 : 0}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            py="12px"
            cursor="pointer"
            onClick={(e) => {
              e.stopPropagation();
              router.push(item.link);
              setMobileMenuOpen(false);
            }}
          >
            <Text textStyle={"smallText"} fontWeight="500">
              {item.label}
            </Text>
          </Box>
        ))}
        <Box py="12px" borderTop="1px solid #eee">
          <Text
            textStyle={"smallText"}
            fontWeight="500"
            color="#555"
            cursor="pointer"
            _hover={{ color: "#000" }}
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/${category}`);
              setMobileMenuOpen(false);
            }}
          >
            View all {category} →
          </Text>
        </Box>
      </Box>
    ),
  );
  MobileDropdown.displayName = "MobileDropdown";

  const handleEnter = useCallback((name: string) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
    setHoveredItem(name);
  }, []);

  const handleLeave = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem(null);
    }, 300);
  }, []);

  const handleItemHover = useCallback((name: string) => {
    setHoveredItem(name);
  }, []);

  const handleItemLeave = useCallback(() => {
    setHoveredItem(null);
  }, []);

  const handleNavigate = useCallback(
    (path: string) => {
      router.push(path);
      setMobileMenuOpen(false);
    },
    [router],
  );

  const toggleMobileDropdown = useCallback((name: string) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  }, []);

  const navigationItems = [
    {
      name: "About",
      path: "/about",
      hasDropdown: true,
      items: [
        { label: "Our Story", link: "/about/#story", description: "Learn about our journey and values" },
        { label: "Our Team", link: "/about/#team", description: "Meet the experts behind EverBright" },
        { label: "Testimonials", link: "/about/#testimonials", description: "What our clients say about us" },
        { label: "Our Journey", link: "/about/journey", description: "See how EverBright has evolved" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      items: [
        { label: "Property Management", link: "/services/property-management", description: "Full-service management for luxury properties" },
        { label: "Cleaning & Linen", link: "/services/cleaning-and-linen", description: "Premium cleaning and linen services" },
        { label: "Furnishing & Styling", link: "/services/furnishing-and-styling", description: "Expert interior design and furnishing" },
        { label: "Photography", link: "/services/photography", description: "Professional property photography" },
      ],
    },
    { name: "Pricing", path: "/pricing", hasDropdown: false },
    { name: "Gallery", path: "/gallery", hasDropdown: false },
    { name: "Contact", path: "/contact", hasDropdown: false },
  ];

  return (
    <Box
      w="100%"
      position="sticky"
      top="0"
      zIndex="100"
      /* NEW: background changes when scrolled */
      bg={scrolled ? "rgba(85, 151, 255, 0.7)" : "transparent"}
      backdropFilter={scrolled ? "blur(10px)" : "none"}
      transition="background-color 200ms ease"
    >
      {/* Main Nav */}
      <Box w="100%" py="10px" transition="all 0.3s ease">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxW="1400px"
          mx="auto"
          px={{ base: "20px", lg: "40px" }}
        >
          {/* Hamburger (mobile only) */}
          <Box
            display={{ base: "block", md: "block", lg: "none" }}
            as="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen((prev) => !prev);
            }}
          >
            {mobileMenuOpen ? (
              <X size={24} color="#F0F0F0" />
            ) : (
              <Menu size={24} color="#F0F0F0" />
            )}
          </Box>

          {/* Logo */}
          <Box
            display="flex"
            alignItems="center"
            cursor="pointer"
            onClick={() => handleNavigate("/")}
            position="relative"
          >
            <VStack>
              <Image src={Presure} alt="logo" width={100} height={100} />
            </VStack>
          </Box>

          {/* Phone icon (mobile) */}
          <Box display={{ base: "block", md: "block", lg: "none" }} textAlign={"center"}>
            <Phone size={24} color="#F0F0F0" />
          </Box>

          {/* Desktop Nav */}
          <Box display={{ base: "none", md: "none", lg: "flex" }} alignItems="center" justifyContent="flex-end">
            {navigationItems.map((item) => (
              <Box
                key={item.name}
                position="relative"
                mx={{ md: "12px", lg: "18px" }}
                onMouseEnter={() => {
                  handleItemHover(item.name.toLowerCase());
                  if (item.hasDropdown) handleEnter(item.name.toLowerCase());
                }}
                onMouseLeave={() => {
                  handleItemLeave();
                  if (item.hasDropdown) handleLeave();
                }}
              >
                <Box cursor="pointer" onClick={() => handleNavigate(item.path)} position="relative" pb="4px">
                  <Text
                    textStyle={"smallText"}
                    fontWeight={activePage === item.path ? "600" : "500"}
                    fontFamily="poppins"
                    transition="all 0.2s ease"
                    color="white"
                    letterSpacing="0.3px"
                    whiteSpace="nowrap"
                  >
                    {item.name}
                  </Text>
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    width={
                      activePage === item.path
                        ? "100%"
                        : hoveredItem === item.name.toLowerCase()
                        ? "70%"
                        : "0%"
                    }
                    height="2px"
                    bg={activePage === item.path ? "#000000" : "#555555"}
                    transition="all 0.3s ease"
                  />
                </Box>
                {item.hasDropdown && (
                  <Dropdown items={item.items || []} category={item.name.toLowerCase()} />
                )}
              </Box>
            ))}

            {/* Desktop CTA */}
            <Box
              ml={{ md: "16px", lg: "24px" }}
              bg="#0A0F29"
              color="white"
              px={{ md: "16px", lg: "20px" }}
              py="10px"
              borderRadius="4px"
              cursor="pointer"
              _hover={{ bg: "#000" }}
              onClick={() => handleNavigate("/contact")}
            >
              <HStack>
                <Box textAlign={"center"}>
                  <Phone />
                </Box>
                <Text textStyle={"smallText"} fontFamily="poppins" fontWeight="500">
                  Get a Quote
                </Text>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Mobile Menu */}
      <Box
        position="fixed"
        top="70px"
        left="0"
        right="0"
        bottom="0"
        bg="white"
        zIndex="99"
        transform={mobileMenuOpen ? "translateY(0)" : "translateY(-100vh)"}
        opacity={mobileMenuOpen ? "1" : "0"}
        visibility={mobileMenuOpen ? "visible" : "hidden"}
        transition="all 0.3s ease"
        overflowY="auto"
        display={{ base: "block", md: "block", lg: "none" }}
        height="calc(100vh - 70px)"
      >
        <Box p="20px">
          {navigationItems.map((item) => (
            <Box key={item.name} mb="16px">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                py="12px"
                borderBottom="1px solid #eee"
                onClick={() => {
                  if (item.hasDropdown) {
                    toggleMobileDropdown(item.name.toLowerCase());
                  } else {
                    handleNavigate(item.path);
                  }
                }}
              >
                <Text
                  textStyle={"smallText"}
                  fontWeight={activePage === item.path ? "600" : "500"}
                  color={activePage === item.path ? "#000" : "#444"}
                >
                  {item.name}
                </Text>
                {item.hasDropdown && (
                  <Box
                    transform={
                      mobileDropdown === item.name.toLowerCase()
                        ? "rotate(180deg)"
                        : "rotate(0)"
                    }
                    transition="transform 0.3s ease"
                  >
                    <Text textStyle={"smallText"}>↓</Text>
                  </Box>
                )}
              </Box>
              {item.hasDropdown && (
                <MobileDropdown
                  items={item.items || []}
                  category={item.name.toLowerCase()}
                  isOpen={mobileDropdown === item.name.toLowerCase()}
                />
              )}
            </Box>
          ))}

          {/* Mobile CTA */}
          <Box
            mt="24px"
            bg="#0A0F29"
            color="white"
            py="12px"
            borderRadius="4px"
            cursor="pointer"
            _hover={{ bg: "#000" }}
            onClick={() => handleNavigate("/contact")}
            textAlign="center"
          >
            <Text textStyle={"smallText"} fontWeight="500">
              Get a Quote
            </Text>
          </Box>

          {/* Mobile Contact Info */}
          <Box mt="32px" pt="20px" borderTop="1px solid #eee">
            <Text textStyle={"smallText"} color="#666" mb="12px">
              luxemanagemnets.info@gmail.com
            </Text>
            <Text textStyle={"smallText"} color="#666" mb="12px">
              +61 406 631 461
            </Text>
            <Text
              textStyle={"smallText"}
              fontWeight="500"
              color="#333"
              cursor="pointer"
              _hover={{ color: "#000" }}
              onClick={() => handleNavigate("/contact")}
            >
              Request a Quote
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
