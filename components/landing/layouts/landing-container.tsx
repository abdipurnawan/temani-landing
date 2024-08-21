import React from "react";
import LandingNavbar from "./landing-navbar";
// import LandingNavbar from './landing-navbar';
import * as motion from "@/components/ui/motion";
import LandingFooter from "./landing-footer";

const LandingContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="main-font w-screen overflow-x-hidden min-h-screen">
      <motion.div
        className="text-center md:text-start"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <LandingNavbar />
      </motion.div>

      <div className="flex flex-col justify-between min-h-screen mt-16 lg:mt-24 xl:mt-20 2xl:mt-24">
        <div>{children}</div>
        <LandingFooter />
      </div>
    </div>
  );
};

export default LandingContainer;
