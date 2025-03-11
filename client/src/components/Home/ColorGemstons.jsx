// ColorGemstones.js
import React from "react";
import { motion } from "framer-motion";

// Importing the images
import c1 from "../../assets/colors/black.png";
import c2 from "../../assets/colors/blue.png";
import c3 from "../../assets/colors/lightBlue.png";
import c4 from "../../assets/colors/brown.png";
import c5 from "../../assets/colors/gray.png";
import c6 from "../../assets/colors/green.png";
import c7 from "../../assets/colors/orange.png";
import c8 from "../../assets/colors/pink.png";
import c9 from "../../assets/colors/purple.png";
import c10 from "../../assets/colors/violet.png";
import c11 from "../../assets/colors/white.png";
import c12 from "../../assets/colors/yellow.png";
import c13 from "../../assets/colors/red.png";

// Import HorizontalSlider
import HorizontalSlider from "./HorizontalSlider";

export default function ColorGemstones() {
  const colours = [
    { name: "Black", src: c1 },
    { name: "Blue", src: c2 },
    { name: "Light Blue", src: c3 },
    { name: "Brown", src: c4 },
    { name: "Gray", src: c5 },
    { name: "Green", src: c6 },
    { name: "Orange", src: c7 },
    { name: "Red", src: c13 },
    { name: "Pink", src: c8 },
    { name: "Purple", src: c9 },
    { name: "Violet", src: c10 },
    { name: "White", src: c11 },
    { name: "Yellow", src: c12 },
  ];

  return (
    <div className="px-[3rem] md:px-[5rem]">
      <div className="flex justify-center items-center mt-24">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-castellar text-center"
        >
          Shop By Colour
        </motion.h1>
      </div>

      {/* Pass the images to HorizontalSlider */}
      <HorizontalSlider images={colours} />
    </div>
  );
}
