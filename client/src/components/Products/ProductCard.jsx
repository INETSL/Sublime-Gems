import React from "react";
import gem from "../../assets/home/pp.png";
import { BsCart4 } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { GiScales } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <div>
      <div className="max-w-[19rem] bg-white shadow-lg hover:shadow-2xl mt-5 cursor-pointer">
        <Link to="/details/3">
          <div className="flex justify-center items-center">
            <img src={gem} alt="gem" className="w-full" />
          </div>
        </Link>

        <div>
          <div className="text-center">
            <Link to="/details/3">
              <h1 className="text-base md:text-2xl mt-4 font-cormorant">
                Red-orange tourmaline
              </h1>
            </Link>
            <h1 className="text-base md:text-lg font-sans font-semibold ">
              <span className="text-lg md:text-xl">$ </span>4000{" "}
              <span className="text-gray-500 text-base md:text-lg">
                {"("}60<span className="text-lg"> per ct</span>
                {")"}
              </span>
            </h1>
          </div>

          <div className="font-cormorant ml-2 text-sm md:ml-[1rem] mt-4">
            <div className="flex items-center gap-2">
              <p className="text-base md:text-lg">Weight:</p>
              <p className="font-sans text-xs md:text-base">15.56 ct</p>
            </div>
            <div className="flex flex-col items-strat">
              <p className="text-base md:text-lg">Measurements:</p>
              <p className="font-sans text-xs md:text-base">
                25.63 × 8.71 × 6.99 mm
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base md:text-lg">Origin:</p>
              <p className="text-base md:text-lg">Sri Lanka</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-base md:text-lg">Item ID:</p>
              <p className="text-base md:text-lg">item id</p>
            </div>
          </div>

          <div className="flex justify-center items-center mb-5 pb-4 gap-2 mt-4">
            <div className="relative group">
              <Link to="/wishlist">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative inline-flex items-center justify-center border-[1px] border-black overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
                >
                  <span className="font-cormorant text-base relative px-[5px] py-[2px] transition-all ease-in duration-75 bg-white text-black hover:text-white rounded-md group-hover:bg-opacity-0 ">
                    <CiHeart className="text-[1.3rem]" />
                  </span>
                </motion.button>
              </Link>
              <div className="absolute text-center w-[7rem] font-cormorant bottom-[2rem] left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-lg shadow-lg">
                Add to WishList
                <div className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
              </div>
            </div>
            <div className="relative group">
              <Link to="/compare">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative inline-flex items-center justify-center border-[1px] border-black overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
                >
                  <span className="font-cormorant text-base relative px-2 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white rounded-md group-hover:bg-opacity-0 ">
                    <GiScales className="text-[1rem]" />
                  </span>
                </motion.button>
              </Link>

              <div className="absolute text-center w-[7rem] font-cormorant bottom-[2rem] left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-lg shadow-lg">
                Add to Compare
                <div className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
              </div>
            </div>
            <div className="relative group">
              <Link to="/cart">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative inline-flex items-center justify-center border-[1px] border-black overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
                >
                  <span className="font-cormorant text-base relative px-2 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white rounded-md group-hover:bg-opacity-0 ">
                    <IoBagOutline className="text-[1rem]" />
                  </span>
                </motion.button>
              </Link>

              <div className="absolute text-center w-[7rem] font-cormorant bottom-[2rem] left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-lg shadow-lg">
                Add to Cart
                <div className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
