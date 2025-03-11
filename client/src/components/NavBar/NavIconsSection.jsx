import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

//Icons
import { SiTelegram } from "react-icons/si";
import { IoSearch, IoPersonOutline, IoBagOutline } from "react-icons/io5";
import { GiScales } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

// Import image paths for currencies
import USD from "../../assets/currency/USD.png";
import CNY from "../../assets/currency/CNY.png";
import AED from "../../assets/currency/AED.png";
import RUB from "../../assets/currency/RUB.png";
import EUR from "../../assets/currency/EUR.png";
import THB from "../../assets/currency/THB.png";

export default function NavIconsSection() {
  const [helpOpen, setHelpOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({
    id: "USD",
    img: USD,
  });

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [currencies, setCurrencies] = useState([
    { id: "CNY", img: CNY },
    { id: "AED", img: AED },
    { id: "RUB", img: RUB },
    { id: "THB", img: THB },
    { id: "EUR", img: EUR },
  ]);

  const dropdownVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleCurrencyChange = (currency) => {
    setCurrencies((prevCurrencies) => [
      selectedCurrency,
      ...prevCurrencies.filter((cur) => cur.id !== currency.id),
    ]);
    setSelectedCurrency(currency);
  };

  const handleCloseSearch = (e) => {
    if (e.target.id === "search-overlay") {
      setSearchOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Start hidden and above
          animate={{ opacity: 1, y: 0 }} // Fade in and slide down
          exit={{ opacity: 0, y: -50 }} // Fade out and slide up
          transition={{ duration: 0.3 }} // Smooth transition
          className="w-full flex justify-between h-16 bg-slate-100 px-[3rem]"
        >
          {/* Left side Help section */}
          <div
            className="flex items-center relative"
            onMouseEnter={() => setHelpOpen(true)}
            onMouseLeave={() => setHelpOpen(false)}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex text-[1.3rem] items-center gap-2 cursor-pointer"
            >
              <BsBell />
              <h1 className="text-lg font-cormorant">Need Help?</h1>
            </motion.button>
            <AnimatePresence>
              {helpOpen && (
                <motion.div
                  className="absolute left-[-2.5rem] mt-[15rem] w-72 bg-white rounded-md shadow-lg z-50"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownVariants}
                >
                  <div className="text-xl text-center font-semibold p-2 border-b font-cormorant">
                    Need Help?
                  </div>
                  <Link to="tel:+66659535888">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full flex items-center p-2 gap-2 hover:bg-gray-100 justify-start "
                    >
                      <FaPhoneAlt className="text-lg ml-5" />
                      <p className="text-lg font-sans ">+66 65 953 5888</p>
                    </motion.button>
                  </Link>
                  <Link to="https://t.me/sublimegemsandjewellery">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full flex items-center p-2 gap-2 hover:bg-gray-100 justify-start "
                    >
                      <SiTelegram className="text-2xl ml-5" />
                      <p className="text-lg font-cormorant">
                        Contact us on Telegram
                      </p>
                    </motion.button>
                  </Link>
                  <Link to="https://wa.me/66659535888">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full flex items-center p-2 gap-2 hover:bg-gray-100 justify-start "
                    >
                      <FaWhatsapp className="text-2xl ml-5" />
                      <p className="text-lg font-cormorant">
                        Contact us on WhatsApp
                      </p>
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="w-full flex items-center p-2 gap-2 hover:bg-gray-100 justify-start "
                  >
                    <GrLocation className="text-2xl ml-5" />
                    <p className="text-lg font-cormorant">
                      Book an Appointment
                    </p>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Middle section: logo or title */}
          <div className="flex justify-center items-center">
            <Link to="/">
              <h1 className="text-center md:text-2xl lg:text-5xl font-castellar">
                SUBLIME GEMS & JEWELLERY
              </h1>
            </Link>
          </div>

          {/* Right side icons and currency dropdown */}
          <div className="flex justify-evenly gap-4 items-center">
            {/* Search icon */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSearchOpen(true)}
            >
              <IoSearch className="text-[1.3rem] cursor-pointer" />
            </motion.div>

            {/**Profile icon */}
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

              <div className="bg-[#fcdfcc] flex justify-center items-center rounded-full text-black absolute top-12 ml-[22.5px] px-[5.2px]">
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

              <div className="bg-[#fcdfcc] flex justify-center items-center rounded-full text-black absolute top-12 ml-5 px-[5.2px]">
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

              <div className="bg-[#fcdfcc] flex justify-center items-center rounded-full text-black absolute top-12 ml-[18.5px] px-[5.2px]">
                <p className="text-xs font-bold">2</p>
              </div>
            </div>

            {/* Currency Dropdown */}
            <div
              className="flex items-center cursor-pointer relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center items-center"
              >
                <img
                  src={selectedCurrency.img}
                  alt="Current Currency"
                  className="w-9 h-9 bg-[#fcdfcc] rounded-full"
                />
                <h1 className="cursor-pointer font-cormorant ml-1">
                  {selectedCurrency.id}
                </h1>
              </motion.div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="absolute top-[2.5rem] right-[-1.3rem] w-[6rem] bg-white rounded-md shadow-lg z-50"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                  >
                    {currencies.map((currency) => (
                      <motion.button
                        key={currency.id}
                        whileHover={{ scale: 1.05 }}
                        className="w-full flex items-center hover:bg-gray-100 p-1"
                        onClick={() => handleCurrencyChange(currency)}
                      >
                        <img
                          src={currency.img}
                          alt={currency.id}
                          className="w-9 h-9 mr-1 bg-[#fcdfcc] rounded-full "
                        />
                        <p className="font-cormorant">{currency.id}</p>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
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
                  className="p-5 bg-white rounded-lg flex items-center w-[35rem]"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
