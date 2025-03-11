import React from "react";
import { motion } from "framer-motion";
import { CiHeart } from "react-icons/ci"; // Ensure CiHeart is imported
import { Link } from "react-router-dom";

export default function Commen_Button({
  tittle,
  sub = "",
  toolTip = "",
  url = "#",
  icon: Icon = null, // Use Icon as a component (default to null if not provided)
}) {
  const renderIcon = (Icon) => {
    if (Icon === CiHeart) {
      return (
        <span class="font-cormorant text-base relative px-5 py-2 transition-all ease-in duration-75 bg-white text-black hover:text-white rounded-md group-hover:bg-opacity-0 hover:scale-150">
          <CiHeart className="text-[1.5rem]" />
        </span>
      );
    }
    return (
      <span className="font-cormorant text-base relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black hover:text-white rounded-md group-hover:bg-opacity-0 hover:scale-150">
        <Icon className="text-[1.3rem]" />
      </span>
    );
  };

  return (
    <div className="relative group">
      <Link to={url}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          class="relative inline-flex items-center justify-center border-[1px]  border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
        >
          {Icon ? (
            renderIcon(Icon)
          ) : (
            <span class="font-cormorant text-base relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
              {tittle} <sub>{sub}</sub>
            </span>
          )}
        </motion.button>
      </Link>

      {toolTip && (
        <div className="absolute text-center w-[7rem] font-cormorant bottom-[3rem] left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-lg shadow-lg">
          {toolTip}
          <div className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
        </div>
      )}
    </div>
  );
}

{
  /* <div>
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.3 }}
    class="relative inline-flex items-center justify-center border-2 hover:border-0 border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
  >
    <span class="font-cormorant text-base relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
      Make an Enquiry
    </span>
  </motion.button>
</div>; */
}

{
  /* <div className="relative group">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="inline-flex items-center justify-center border-[1px] border-black text-sm text-gray-900 rounded-lg hover:bg-[#fcdfcc] shadow-lg hover:shadow-xl"
      >
        {Icon ? (
          renderIcon(Icon)
        ) : (
          <span className="font-cormorant px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
            {tittle} <sub>{sub}</sub>
          </span>
        )}
      </motion.button>
      {toolTip && (
        <div className="absolute text-center w-[7rem] font-cormorant bottom-[3rem] left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-lg shadow-lg">
          {toolTip}
          <div className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
        </div>
      )}
    </div> */
}
