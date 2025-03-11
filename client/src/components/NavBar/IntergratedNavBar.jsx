import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function IntergratedNavBar() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
