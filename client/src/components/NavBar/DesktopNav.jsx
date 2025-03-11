import React from "react";
import BannerOne from "./BannerOne";
import NavIconsSection from "./NavIconsSection";
import NavItems from "./NavItems";
import BannerTwo from "./BannerTwo";

export default function DesktopNav() {
  return (
    <>
      <div className="hidden md:block sticky top-0 z-50">
        {/* Parent container is sticky */}
        <BannerOne />
        <NavIconsSection />
        <NavItems />
        <BannerTwo />
      </div>
    </>
  );
}
