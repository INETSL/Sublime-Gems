import React from "react";
import { motion } from "framer-motion";
import clarity from "../../assets/home/ClarityScale.png";
import Commen_Button from "../commonComponents/Commen_Button";
import { Link } from "react-router-dom";

const titles = [
  { id: 1, tittle: "FL", sub: "" },
  { id: 2, tittle: "IF", sub: "" },
  { id: 3, tittle: "VVS", sub: "1" },
  { id: 4, tittle: "VVS", sub: "2" },
  { id: 5, tittle: "VS", sub: "1" },
  { id: 6, tittle: "VS", sub: "2" },
  { id: 7, tittle: "S", sub: "1" },
  { id: 8, tittle: "S", sub: "2" },
  { id: 9, tittle: "I", sub: "1" },
  { id: 10, tittle: "I", sub: "2" },
  { id: 11, tittle: "I", sub: "3" },
];

export default function ClarityGemstones() {
  return (
    <div className="px-[0.5rem] md:px-[5rem]">
      <div className="flex justify-center items-center mt-24">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl text-center font-castellar"
        >
          Shop By Clarity
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-5"
      >
        <div>
          <img
            src={clarity}
            alt="clarity scale"
            className=" w-[25rem] h-[6.5rem] md:h-auto md:w-full"
          />
        </div>
      </motion.div>

      {/**Starts Dektop View */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden md:flex flex-row justify-evenly"
      >
        {titles.map((tittle) => (
          <Commen_Button tittle={tittle.tittle} sub={tittle.sub} />
        ))}
      </motion.div>
      {/**Ends Dektop View */}

      {/**Starts Mobile buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:hidden text-center grid-cols-5  mt-10 lg:ml-[5rem]"
      >
        <div className="relative group">
          <Link to="/#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              class="relative inline-flex items-center justify-center border-[1px]  border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
            >
              <span class="font-cormorant text-base relative px-2 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
                FS
              </span>
            </motion.button>
          </Link>
        </div>

        <div className="relative group">
          <Link to="/#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              class="relative inline-flex items-center justify-center border-[1px]  border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
            >
              <span class="font-cormorant text-base relative px-2 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
                IF
              </span>
            </motion.button>
          </Link>
        </div>

        <div className="relative group">
          <Link to="/#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              class="relative inline-flex items-center justify-center border-[1px]  border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
            >
              <span class="font-cormorant text-base relative px-1 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
                VVS<sub>1</sub>
              </span>
            </motion.button>
          </Link>
        </div>

        <div className="relative group">
          <Link to="/#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              class="relative inline-flex items-center justify-center border-[1px]  border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
            >
              <span class="font-cormorant text-base relative px-1 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
                VVS<sub>2</sub>
              </span>
            </motion.button>
          </Link>
        </div>

        <div className="relative group">
          <Link to="/#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              class="relative inline-flex items-center justify-center border-[1px]  border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
            >
              <span class="font-cormorant text-base relative px-1 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
                VS<sub>1</sub>
              </span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
      {/**ends of the Mobile buttons for clarity */}
      {/**Starts Mobile buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:hidden text-center grid-cols-6 mt-5 px-1.5 lg:ml-[5rem]"
      >
        <div className="relative group">
          <Link to="/#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              class="relative inline-flex items-center justify-center border-[1px]  border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
            >
              <span class="font-cormorant text-base relative px-1 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
                VS<sub>2</sub>
              </span>
            </motion.button>
          </Link>
        </div>
        <div className="relative group">
          <Link to="/#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              class="relative inline-flex items-center justify-center border-[1px]  border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
            >
              <span class="font-cormorant text-base relative px-2 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
                S<sub>1</sub>
              </span>
            </motion.button>
          </Link>
        </div>
        <div className="relative group">
          <Link to="/#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              class="relative inline-flex items-center justify-center border-[1px]  border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
            >
              <span class="font-cormorant text-base relative px-2 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
                S<sub>2</sub>
              </span>
            </motion.button>
          </Link>
        </div>

        <div className="relative group">
          <Link to="/#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              class="relative inline-flex items-center justify-center border-[1px]  border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
            >
              <span class="font-cormorant text-base relative px-2 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
                I<sub>1</sub>
              </span>
            </motion.button>
          </Link>
        </div>
        <div className="relative group">
          <Link to="/#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              class="relative inline-flex items-center justify-center border-[1px]  border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
            >
              <span class="font-cormorant text-base relative px-2 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
                I<sub>2</sub>
              </span>
            </motion.button>
          </Link>
        </div>
        <div className="relative group">
          <Link to="/#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              class="relative inline-flex items-center justify-center border-[1px]  border-black  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white shadow-lg hover:shadow-xl"
            >
              <span class="font-cormorant text-base relative px-2 py-1 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
                I<sub>3</sub>
              </span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
      {/**ends of the Mobile buttons for clarity */}
    </div>
  );
}
