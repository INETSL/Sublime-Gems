import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { RiArrowUpDownLine } from "react-icons/ri";
import {
  LuArrowDownWideNarrow,
  LuArrowUpNarrowWide,
  LuArrowDownAZ,
  LuArrowDownZA,
  LuArrowDown01,
  LuArrowDown10,
} from "react-icons/lu";
export default function ProductFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(1); // Default to "Default Sorting"

  const options = [
    {
      id: 1,
      label: "default sorting",
      icon: <RiArrowUpDownLine className="text-lg" />,
    },
    {
      id: 2,
      label: "Sort by latest",
      icon: <RiArrowUpDownLine className="text-lg" />,
    },
    {
      id: 3,
      label: "Sort by price",
      icon: <LuArrowDownWideNarrow className="text-lg" />,
    },
    {
      id: 4,
      label: "Sort by price",
      icon: <LuArrowUpNarrowWide className="text-lg" />,
    },
    {
      id: 5,
      label: "Sort by weight",
      icon: <LuArrowDown01 className="text-lg" />,
    },
    {
      id: 6,
      label: "Sort by weight",
      icon: <LuArrowDown10 className="text-lg" />,
    },
    {
      id: 7,
      label: "Alphabetically, A-Z",
      icon: <LuArrowDownAZ className="text-lg" />,
    },
    {
      id: 8,
      label: "Alphabetically, Z-A",
      icon: <LuArrowDownZA className="text-lg" />,
    },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <div className="flex items-center justify-between px-5 md:px-[1.5rem]">
      <div></div>
      <div
        className="relative w-52 border-[1px] border-black rounded-lg mt-5 mr-2"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Button to toggle dropdown */}
        <button className="w-full bg-gray-100 text-gray-900 px-4 py-2 text-left rounded-lg shadow-lg focus:outline-none font-cormorant">
          Sort:
          <span className="ml-2 font-semibold">
            {options.find((option) => option.id === selectedOptionId)?.label}
          </span>
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute w-full bg-white shadow-lg rounded-lg mt-2 border border-gray-300 z-50"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
            >
              <ul className="py-2">
                {options.map((option) => (
                  <li
                    key={option.id}
                    className={`px-4 py-2 flex items-center gap-2 hover:bg-gray-200 cursor-pointer font-cormorant ${
                      selectedOptionId === option.id
                        ? "bg-gray-100 font-semibold"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedOptionId(option.id); // Track selected option by ID
                      setIsOpen(false); // Close the dropdown
                    }}
                  >
                    {option.icon} {/* Display the icon */}
                    {option.label} {/* Display the label */}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
