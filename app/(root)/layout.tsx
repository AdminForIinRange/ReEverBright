import React from "react";
import "../globals.css";
import Navbar from "@/components/globalComponents/Navbar";
import { HStack, Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";

import onePieceOFbackground from "@/public/ProjectAssets/onePieceOFbackground.svg";
import SideBar from "@/components/globalComponents/SideBar";
import FAQ from "@/components/globalComponents/FAQ";
import Footer from "@/components/personalPortfolio/footer/footer";
export const dynamic = "force-dynamic";
const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      <div className="">{children}</div>
      <FAQ type={""} />
      <Footer />
      
    </>
  );
};

export default Layout;
