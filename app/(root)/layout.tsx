import React from "react";
import Navbar from "@/components/globalComponents/Navbar";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      <div className="">{children}</div>
    </>
  );
};

export default Layout;

