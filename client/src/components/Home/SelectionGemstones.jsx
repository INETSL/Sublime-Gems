import React from "react";
import { motion } from "framer-motion";

import loose from "../../assets/slection/loose.png";
import matching from "../../assets/slection/matching.png";
import sets from "../../assets/slection/sets.png";
import layout from "../../assets/slection/layout.png";

export default function SelectionGemstones() {
  const gems = [
    { id: 1, src: loose, name: "Loose Gemstones" },
    { id: 2, src: matching, name: "Matching Gemstone Pairs" },
    { id: 3, src: sets, name: "Gemstone Sets" },
    { id: 4, src: layout, name: "Gemstone Layouts" },
  ];
  return (
    <div className="px-[1rem] md:px-[5rem]">
      <div className="flex justify-center items-center mt-24">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl text-center font-castellar"
        >
          Shop By Selection
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden md:flex flex-row justify-evenly"
      >
        {gems.map((gem) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center items-center cursor-pointer"
            key={gem.id}
          >
            <div>
              <img src={gem.src} alt="" className="w-[10rem]" />
            </div>
            <div>
              <h2 className="text-center text-xs md:text-lg font-cormorant uppercase mt-[-2rem]">
                {gem.name}
              </h2>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:hidden flex flex-row justify-evenly"
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={loose} alt="" className="w-[7rem]" />
          </div>
          <div>
            <h2 className="text-center text-xs font-cormorant uppercase mt-[-1rem]">
              Loose
            </h2>
            <h2 className="text-center text-xs font-cormorant uppercase">
              Gemstones
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={matching} alt="" className="w-[8rem]" />
          </div>
          <div>
            <h2 className="text-center text-xs md:text-lg font-cormorant uppercase mt-[-1rem]">
              Matching
            </h2>
            <h2 className="text-center text-xs md:text-lg font-cormorant uppercase">
              Gemstone
            </h2>
            <h2 className="text-center text-xs md:text-lg font-cormorant uppercase">
              Pairs
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={sets} alt="" className="w-[7rem]" />
          </div>
          <div>
            <h2 className="text-center text-xs md:text-lg font-cormorant uppercase mt-[-1rem]">
              Gemstone
            </h2>
            <h2 className="text-center text-xs md:text-lg font-cormorant uppercase">
              Sets
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={layout} alt="" className="w-[7rem]" />
          </div>
          <div>
            <h2 className="text-center text-xs md:text-lg font-cormorant uppercase mt-[-1rem]">
              Gemstone
            </h2>
            <h2 className="text-center text-xs md:text-lg font-cormorant uppercase">
              Layouts
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
