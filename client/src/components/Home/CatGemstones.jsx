import React from "react";
import { motion } from "framer-motion";

// Import HorizontalSlider
import HorizontalSlider from "./HorizontalSlider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**Gemstones images */
import alexandrite from "../../assets/gemstones/alexandrite.png";
import amethyst from "../../assets/gemstones/amethyst.png";
import apatite from "../../assets/gemstones/apatite.png";
import aquamarine from "../../assets/gemstones/aquamarine.png";
import beryl from "../../assets/gemstones/beryl.png";
import chrysoberyl from "../../assets/gemstones/chrysoberyl.png";
import citrine from "../../assets/gemstones/citrine.png";
import clinohumite from "../../assets/gemstones/clinohumite.png";
import diamond from "../../assets/gemstones/diamond.png";
import emerald from "../../assets/gemstones/emerald.png";
import garnet from "../../assets/gemstones/garnet.png";
import heliodor from "../../assets/gemstones/heliodor.png";
import kunzite from "../../assets/gemstones/kunzite.png";
import moonstone from "../../assets/gemstones/moonstone.png";
import morganite from "../../assets/gemstones/morganite.png";
import opal from "../../assets/gemstones/opal.png";
import pearl from "../../assets/gemstones/pearl.png";
import peridot from "../../assets/gemstones/peridot.png";
import prasiolite from "../../assets/gemstones/prasiolite.png";
import ruby from "../../assets/gemstones/ruby.png";
import sapphire from "../../assets/gemstones/sapphire.png";
import spinel from "../../assets/gemstones/spinel.png";
import sphene from "../../assets/gemstones/sphene.png";
import tanzanite from "../../assets/gemstones/tanzanite.png";
import topaz from "../../assets/gemstones/topaz.png";
import tourmaline from "../../assets/gemstones/tourmaline.png";
import zircon from "../../assets/gemstones/zircon.png";

export default function CatGemstones() {
  const gems = [
    { id: 1, src: alexandrite, name: "alexandrite" },
    { id: 2, src: amethyst, name: "amethyst" },
    { id: 3, src: apatite, name: "apatite" },
    { id: 4, src: aquamarine, name: "aquamarine" },
    { id: 5, src: beryl, name: "beryl" },
    { id: 6, src: chrysoberyl, name: "chrysoberyl" },
    { id: 7, src: citrine, name: "citrine" },
    { id: 8, src: clinohumite, name: "clinohumite" },
    { id: 9, src: diamond, name: "diamond" },
    { id: 10, src: emerald, name: "emerald" },
    { id: 11, src: garnet, name: "garnet" },
    { id: 12, src: heliodor, name: "heliodor" },
    { id: 13, src: kunzite, name: "kunzite" },
    { id: 14, src: moonstone, name: "moonstone" },
    { id: 15, src: morganite, name: "morganite" },
    { id: 16, src: opal, name: "opal" },
    { id: 17, src: pearl, name: "pearl" },
    { id: 18, src: peridot, name: "peridot" },
    { id: 19, src: prasiolite, name: "prasiolite" },
    { id: 20, src: ruby, name: "ruby" },
    { id: 21, src: sapphire, name: "sapphire" },
    { id: 22, src: spinel, name: "spinel" },
    { id: 23, src: sphene, name: "sphene" },
    { id: 25, src: tanzanite, name: "tanzanite" },
    { id: 26, src: topaz, name: "topaz" },
    { id: 27, src: tourmaline, name: "tourmaline" },
    { id: 28, src: zircon, name: "zircon" },
  ];

  const link = "/products";

  return (
    <>
      {/**Second Section (Desktop View - Grid) */}
      <div className="px-[3rem] mt-16">
        <div className="flex justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl text-center font-castellar"
          >
            Explore Our Gemstone Collection
          </motion.h1>
        </div>

        <div className="mt-5">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base md:text-2xl text-justify md:text-center md:mx-48 font-cormorant"
          >
            We exclusively offer natural colored, investment-grade gemstones in
            our portfolio. Every gemstone available for purchase is accompanied
            by certificates issued by globally renowned gemological institutes.
          </motion.p>
        </div>

        <div className="md:mx-8">
          {/* Pass the images to HorizontalSlider */}
          <HorizontalSlider images={gems} link={link} />
        </div>
      </div>
    </>
  );
}
