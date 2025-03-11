import React from "react";
import { motion } from "framer-motion";
// Import HorizontalSlider
import HorizontalSlider from "./HorizontalSlider";

/**images */
import Australia from "../../assets/flags/Australia.png";
import Afghanistan from "../../assets/flags/Afghanistan.png";
import Africa from "../../assets/flags/Africa.png";
import Burma from "../../assets/flags/Burma.png";
import Brazil from "../../assets/flags/Brazil.png";
import Vietnam from "../../assets/flags/Vietnam.png";
import Zambia from "../../assets/flags/Zambia.png";
import Zimbabwe from "../../assets/flags/Zimbabwe.png";
import India from "../../assets/flags/India.png";
import Cambodia from "../../assets/flags/Cambodia.png";
import Kenya from "../../assets/flags/Kenya.png";
import Colombia from "../../assets/flags/Colombia.png";
import Congo from "../../assets/flags/Congo.png";
import Madagascar from "../../assets/flags/Madagascar.png";
import Malawi from "../../assets/flags/Malawi.png";
import Mozambique from "../../assets/flags/Mozambique.png";
import Nigeria from "../../assets/flags/Nigeria.png";
import Pakistan from "../../assets/flags/Pakistan.png";
import Russia from "../../assets/flags/Russia.png";
import Tajikistan from "../../assets/flags/Tajikistan.png";
import Tanzania from "../../assets/flags/Tanzania.png";
import Thailand from "../../assets/flags/Thailand.png";
import SriLanka from "../../assets/flags/Sri Lanka.png";
import Ethiopia from "../../assets/flags/Ethiopia.png";

export default function OriginGemstones() {
  const origins = [
    { id: 1, name: "Afghanistan", src: Afghanistan },
    { id: 2, name: "Africa", src: Africa },
    { id: 3, name: "Australia", src: Australia },
    // { id: 3, name: "Australia (Lightning Ridge)", src: Australia },
    { id: 4, name: "Brazil", src: Brazil },
    { id: 5, name: "Myanmar (Burma)", src: Burma },
    { id: 6, name: "Cambodia", src: Cambodia },
    { id: 7, name: "Colombia", src: Colombia },
    { id: 8, name: "Congo", src: Congo },
    { id: 9, name: "Ethiopia", src: Ethiopia },
    { id: 10, name: `India (Kashmir)`, src: India },
    { id: 11, name: "Kenya", src: Kenya },
    { id: 12, name: "Madagascar", src: Madagascar },
    { id: 13, name: "Malawi", src: Malawi },
    { id: 14, name: "Mozambique", src: Mozambique },
    { id: 15, name: "Nigeria", src: Nigeria },
    { id: 16, name: "Pakistan", src: Pakistan },
    { id: 17, name: "Russia", src: Russia },
    { id: 18, name: "Sri Lanka (Ceylon)", src: SriLanka },
    { id: 19, name: "Tajikistan", src: Tajikistan },
    { id: 20, name: "Tanzania", src: Tanzania },
    { id: 21, name: "Thailand", src: Thailand },
    { id: 22, name: "Vietnam", src: Vietnam },
    { id: 23, name: "Zambia", src: Zambia },
    { id: 24, name: "Zimbabwe", src: Zimbabwe },
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
          Shop By Origin
        </motion.h1>
      </div>
      {/* Pass the images to HorizontalSlider */}
      <HorizontalSlider images={origins} />
    </div>
  );
}
