import { motion } from "framer-motion";
import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Commen_Button from "../commonComponents/Commen_Button";

export default function ProductCard({ item }) {
  return (
    <>
      <motion.div className="border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 p-4 w-[18rem] mb-5">
        <div className="flex justify-between">
          <div></div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer relative group"
          >
            <RiDeleteBin2Fill className="text-2xl text-red-600" />

            <div className="absolute font-cormorant bottom-[1.5rem] left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-lg shadow-lg">
              Remove
              <div className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
            </div>
          </motion.div>
        </div>

        <Link to="/details/5">
          <div className="flex justify-center items-center">
            <img src={item.img} alt="" className="w-[10rem]" />
          </div>

          <div className="font-cormorant ">
            <p className="text-center text-3xl">{item.name}</p>
            <p className="text-center text-2xl font-sans">${item.price}</p>
            <p className="text-center text-lg">{item.description}</p>
          </div>
        </Link>
        <div className="w-full flex justify-between items-center mt-3">
          <div>
            <p className="text-green-700 font-cormorant text-lg">Available</p>
          </div>
          <div>
            <Commen_Button tittle="Add to cart" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
