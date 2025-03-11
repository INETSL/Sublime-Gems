import { motion } from "framer-motion";
import React, { useState } from "react";
import Commen_Button from "../commonComponents/Commen_Button";

export default function RangeSlider() {
  const [priceRange, setPriceRange] = useState([200.0, 1000000.0]); // Initial range [min, max]

  const handleMinChange = (event) => {
    const min = Math.min(Number(event.target.value), priceRange[1] - 100); // Ensure min is less than max
    setPriceRange([min, priceRange[1]]);
  };

  const handleMaxChange = (event) => {
    const max = Math.max(Number(event.target.value), priceRange[0] + 100); // Ensure max is more than min
    setPriceRange([priceRange[0], max]);
  };

  const calculateLeftPercentage = (value) => {
    return `${((value - 200) / (1000000 - 200)) * 100}%`; // Scale value to percentage based on the range [200, 1000000]
  };

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
          Shop By Price
        </motion.h1>
      </div>

      <div className="flex flex-col items-center mt-12 mb-10  mx-10">
        {/* Range Track */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-56 md:w-full max-w-lg mb-4 h-10"
        >
          {/* Track Background */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-300 rounded-full"></div>

          {/* Active Range */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 h-[2px] bg-blue-950 rounded-full"
            style={{
              left: calculateLeftPercentage(priceRange[0]),
              right: `${
                100 - ((priceRange[1] - 200) / (1000000 - 200)) * 100
              }%`,
            }}
          ></div>

          {/* Left Tooltip */}
          <div
            className="absolute -top-8 text-sm bg-gray-200 rounded-full px-2 py-1 text-center w-32"
            style={{
              left: calculateLeftPercentage(priceRange[0]),
              transform: "translateX(-50%)",
            }}
          >
            ${priceRange[0].toFixed(0)}
          </div>

          {/* Left Slider */}
          <input
            type="range"
            min="200"
            max="1000000"
            step="100"
            value={priceRange[0]}
            onChange={handleMinChange}
            className="absolute top-0 w-full appearance-none bg-transparent pointer-events-auto"
          />

          {/* Right Tooltip */}
          <div
            className="absolute top-11 text-sm bg-gray-200 rounded-full px-5 py-1 text-center w-32"
            style={{
              left: calculateLeftPercentage(priceRange[1]),
              transform: "translateX(-50%)",
            }}
          >
            ${priceRange[1].toFixed(0)}
          </div>

          {/* Right Slider */}
          <input
            type="range"
            min="200"
            max="1000000"
            step="100"
            value={priceRange[1]}
            onChange={handleMaxChange}
            className="absolute top-6 w-full appearance-none bg-transparent pointer-events-auto"
          />
        </motion.div>

        {/* Display Range */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-between w-full max-w-lg mt-8 md:px-0 mb-20"
        >
          <div className="flex mr-5 items-center">
            <label className="mr-2 font-medium">$</label>

            <input
              type="number"
              min="200"
              max="1000000"
              step="100"
              value={priceRange[0].toFixed(0)} // Display integer value
              onChange={handleMinChange}
              className="w-24 p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center">
            <Commen_Button tittle="Apply" />
          </div>

          <div className="flex items-center">
            <label className="mr-2 font-medium">$</label>

            <input
              type="number"
              min="200"
              max="1000000"
              step="100"
              value={priceRange[1].toFixed(0)} // Display integer value
              onChange={handleMaxChange}
              className="w-24 p-2 border border-gray-300 rounded"
            />
          </div>
        </motion.div>
      </div>

      {/* Display Range mobile*/}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex md:hidden justify-between w-full max-w-lg mt-8 md:px-0 "
      >
        <div className="flex mr-5 items-center">
          <label className="mr-2 font-medium">$</label>
          <input
            type="number"
            min="200"
            max="1000000"
            step="100"
            value={priceRange[0].toFixed(0)} // Display integer value
            onChange={handleMinChange}
            className="w-24 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label className="mr-2 font-medium">$</label>

          <input
            type="number"
            min="200"
            max="1000000"
            step="100"
            value={priceRange[1].toFixed(0)} // Display integer value
            onChange={handleMaxChange}
            className="w-24 p-2 border border-gray-300 rounded"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex md:hidden justify-center items-center mt-4 mb-8"
      >
        <Commen_Button tittle="Apply" />
      </motion.div>
    </div>
  );
}
