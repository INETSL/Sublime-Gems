import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearch, IoPersonOutline, IoBagOutline } from "react-icons/io5";
import { GiScales } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";

export default function MobileIcons() {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleCloseSearch = (e) => {
    if (e.target.id === "search-overlay") {
      setSearchOpen(false);
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-slate-100 md:hidden">
      <div className="flex flex-row justify-evenly items-center text-black text-center py-3">
        {/* Search icon */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={() => setSearchOpen(true)}
        >
          <IoSearch className="text-[1.3rem] cursor-pointer" />
        </motion.div>

        {/* Profile icon */}
        <Link to="/profile">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <IoPersonOutline className="text-[1.3rem] cursor-pointer" />
          </motion.div>
        </Link>

        <div>
          <div>
            {/**Wishlist icon */}
            <Link to="/wishlist">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <CiHeart className="text-[1.6rem] cursor-pointer" />
              </motion.div>
            </Link>
          </div>

          <div className="bg-[#fcdfcc] flex justify-center items-center rounded-full text-black absolute top-2 ml-[22.5px] px-[5.2px]">
            <p className="text-xs font-bold">2</p>
          </div>
        </div>

        <div>
          <div>
            {/**Compare icon */}
            <Link to="/compare">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <GiScales className="text-[1.4rem] cursor-pointer" />
              </motion.div>
            </Link>
          </div>

          <div className="bg-[#fcdfcc] flex justify-center items-center rounded-full text-black absolute top-2 ml-5 px-[5.2px]">
            <p className="text-xs font-bold">2</p>
          </div>
        </div>

        <div>
          <div>
            {/**Cart icon */}
            <Link to="/cart">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <IoBagOutline className="text-[1.4rem] cursor-pointer" />
              </motion.div>
            </Link>
          </div>

          <div className="bg-[#fcdfcc] flex justify-center items-center rounded-full text-black absolute top-2 ml-[18.5px] px-[5.2px]">
            <p className="text-xs font-bold">2</p>
          </div>
        </div>

        {/* Search Modal */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              id="search-overlay"
              onClick={handleCloseSearch}
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="p-5 bg-white rounded-lg flex items-center w-[20rem]"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="input border-2 border-gray-300 p-2 rounded-lg w-[30rem]"
                  autoFocus
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-2 px-5 py-2 bg-blue-500 text-white rounded-lg"
                  onClick={() => setSearchOpen(false)}
                >
                  Search
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
