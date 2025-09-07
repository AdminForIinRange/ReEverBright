"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ← only if you want real navigation
import { Box, Text } from "@chakra-ui/react";
import {
  Home,
  BarChart3,
  TrendingUp,
  Settings,
  User,
  Bell,
  Search,
  ChevronRight,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { Tooltip } from "@/components/chakra-snippets/tooltip";

const SideBar = () => {
  const router = useRouter(); // ← for navigation
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 👇 remove `isActive` from here—instead just store icon/label/path
  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: TrendingUp, label: "Markets", path: "/markets" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: BarChart3, label: "dedicated", path: "/dashboard/dedicated" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  // 👇 new piece of state to track which index is “active”
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // 👇 click handler
  const handleItemClick = (idx: number, path: string) => {
    setActiveIndex(idx);
    router.push(path); // ← comment this out if you don’t want to navigate
  };

  return (
    <Box
      position={"fixed"}
      bg={"blackAlpha.900"}
      borderRight={"1px solid"}
      width={isCollapsed ? "80px" : "280px"}
      height="90vh"
      m="10px"
      p="8px"
      rounded="xl"
      display="flex"
      flexDirection="column"
      left="0"
      top="0"
      zIndex="1000"
      transition="width 0.3s ease-in-out"
    >
      {/* Logo + Toggle */}
      <Box
        p={isCollapsed ? "24px 16px" : "24px 20px"}
        borderBottom="1px solid"
        display="flex"
        alignItems="center"
        justifyContent={isCollapsed ? "center" : "space-between"}
      >
        {!isCollapsed && (
          <Box
            bg={"red.400"}
            p="16px"
            rounded={"8px"}
            textStyle={"smallText"}
            fontWeight="bold"
            color="white"
          ></Box>
        )}
        <Box
          cursor="pointer"
          onClick={toggleSidebar}
          p="4px"
          borderRadius="4px"
          _hover={{ bg: "gray.800" }}
          transition="background 0.2s ease-in-out"
        >
          {isCollapsed ? (
            <Menu size={20} color="#9CA3AF" />
          ) : (
            <X size={20} color="#9CA3AF" />
          )}
        </Box>
      </Box>

      {/* Beta Badge */}

      {/* Navigation */}
      <Box flex="1" pt="8px" pb="0">
        {menuItems.map((item, idx) => {
          const IconComponent = item.icon;
          const isActive = idx === activeIndex; // ← dynamic
          return (
            <Box
              key={item.label}
              role="group"
              mb="1"
              mx={isCollapsed ? "8px" : "12px"}
              borderRadius="8px"
              bg={isActive ? "gray.800" : "transparent"}
              border={isActive ? "1px solid gray.600" : "1px solid transparent"}
              cursor="pointer"
              transition="all 0.2s ease-in-out"
              _hover={{
                bg: isActive ? "gray.800" : "gray.850",
                borderColor: isActive ? "gray.600" : "gray.700",
              }}
              position="relative"
              onClick={() => handleItemClick(idx, item.path)} // ← click!
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent={isCollapsed ? "center" : "space-between"}
                p={isCollapsed ? "12px" : "12px 16px"}
              >
                {isCollapsed ? (
                  <IconComponent
                    size={20}
                    color={isActive ? "white" : "#9CA3AF"}
                  />
                ) : (
                  <>
                    <Box display="flex" alignItems="center" gap="12px">
                      <IconComponent
                        size={18}
                        color={isActive ? "white" : "#9CA3AF"}
                      />
                      <Text
                        textStyle={"tinyText"}
                        fontWeight={isActive ? "semibold" : "medium"}
                        color={isActive ? "white" : "gray.300"}
                      >
                        {item.label}
                      </Text>
                    </Box>
                    {isActive && <ChevronRight size={14} color="white" />}
                  </>
                )}
              </Box>

              {/* Tooltip on collapse */}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SideBar;
