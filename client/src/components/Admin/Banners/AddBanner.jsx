import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BannerOneCp from "./BannerOneCp";
import BannerTwoCp from "./BannerTwoCp";
import SlideOne from "./SlideOne";

export default function AddBanner() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Banner Section</h1>
      </div>
      <div className="flex justify-center min-h-screen mt-10">
        <div className="w-[50rem] items-center">
          <BannerOneCp />
          <BannerTwoCp />
          <SlideOne />
        </div>
      </div>
      <ToastContainer autoClose={5000} />
    </div>
  );
}
