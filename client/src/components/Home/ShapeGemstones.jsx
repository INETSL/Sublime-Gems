import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import HorizontalSlider
import HorizontalSlider from "./HorizontalSlider";

/**Gemstones images */
import stone1 from "../../assets/shapes/asscher.svg";
import stone2 from "../../assets/shapes/cushion.svg";
import stone3 from "../../assets/shapes/emerald.svg";
import stone4 from "../../assets/shapes/heart.svg";
import stone5 from "../../assets/shapes/marquise.svg";
import stone6 from "../../assets/shapes/oval.svg";
import stone7 from "../../assets/shapes/pear.svg";
import stone8 from "../../assets/shapes/princess.svg";
import stone9 from "../../assets/shapes/radiant.svg";
import stone10 from "../../assets/shapes/round.svg";
import stone11 from "../../assets/shapes/cabochon.svg";
import stone12 from "../../assets/shapes/triangular.svg";
import stone13 from "../../assets/shapes/fancy.svg";

export default function ShapeGemstones() {
  const gems = [
    { id: 1, name: "Asscher", src: stone1 },
    { id: 2, name: "Cushion", src: stone2 },
    { id: 3, name: "Emerald", src: stone3 },
    { id: 4, name: "Heart", src: stone4 },
    { id: 5, name: "Marquise", src: stone5 },
    { id: 6, name: "Oval", src: stone6 },
    { id: 7, name: "Pear", src: stone7 },
    { id: 8, name: "Princess", src: stone8 },
    { id: 9, name: "Radiant", src: stone9 },
    { id: 10, name: "Round", src: stone10 },
    { id: 11, name: "cabochon", src: stone11 },
    { id: 12, name: "triangular", src: stone12 },
    { id: 13, name: "fancy", src: stone13 },
  ];

  return (
    <>
      {/**Second Section (Desktop View - Grid) */}
      <div className="px-[3rem] md:px-[5rem]">
        <div className="flex justify-center items-center mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-castellar text-center"
          >
            Shop By Shapes
          </motion.h1>
        </div>

        <div className="">
          {/* Pass the images to HorizontalSlider */}
          <HorizontalSlider images={gems} />
        </div>
      </div>
    </>
  );
}
