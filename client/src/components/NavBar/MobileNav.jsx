import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import BannerOne from "./BannerOne";

const MobileNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const menuRef = useRef(null);

  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  const toggleCurrencyDropdown = () => {
    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setIsCurrencyDropdownOpen(false); // Close dropdown after selection
  };

  const menuVariants = {
    closed: { x: "-100%" },
    open: { x: 0 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, maxHeight: 0, overflow: "hidden" },
    visible: { opacity: 1, maxHeight: "500px", overflow: "auto" },
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (isMenuOpen) setMenuOpen(false);
        if (isDropdownVisible) setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen, isDropdownVisible]);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownVisible(!isDropdownVisible);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownVisible(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isMenuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }

    return () => {
      body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="block md:hidden">
        <BannerOne />
      </div>
      <div className="sticky md:hidden top-0 z-50 bg-slate-50">
        <div className="flex justify-evenly items-center px-4 h-[3rem]">
          <RiMenu3Line
            className="text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!isMenuOpen)}
          />
          <Link to="/" onClick={closeMenu}>
            <h1 className="text-lg font-castellar">SUBLIME GEMS & JEWELLERY</h1>
          </Link>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            >
              <motion.div
                className="bg-white w-3/4 h-full shadow-md flex flex-col"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                ref={menuRef}
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  to="/"
                  className="p-4 flex items-center justify-between w-full text-xl font-cormorant "
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <button
                  className="p-4 flex items-center justify-between w-full text-lg font-cormorant "
                  onClick={toggleDropdown}
                >
                  COLOURED GEMSTONES
                  <IoIosArrowDown className="text-xl" />
                </button>
                <AnimatePresence>
                  {isDropdownVisible && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="p-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {gemstones.map((gem) => (
                        <Link
                          to="/gems"
                          key={gem.name}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100"
                          onClick={closeMenu}
                        >
                          <img
                            src={gem.image}
                            alt={gem.name}
                            className="w-10 h-10 rounded-full"
                          />
                          {gem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Currency dropdown */}
                <button
                  className="p-4 flex items-center justify-between w-full text-lg font-cormorant"
                  onClick={toggleCurrencyDropdown}
                >
                  SELECT CURRENCY
                  <IoIosArrowDown className="text-xl" />
                </button>
                <AnimatePresence>
                  {isCurrencyDropdownOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="p-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {currencies.map((currency) => (
                        <motion.button
                          key={currency.id}
                          whileHover={{ scale: 1.05 }}
                          className="w-full flex items-center p-2 hover:bg-gray-100"
                          onClick={() => handleCurrencyChange(currency)}
                        >
                          <img
                            src={currency.img}
                            alt={currency.id}
                            className="w-10 h-10 rounded-full mr-2"
                          />
                          {currency.id}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.link}
                    className="p-4 text-lg font-cormorant  hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <MobileIcons />
    </>
  );
};

export default MobileNav;

/**Images of gemstones */
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

const navItems = [
  { id: 1, name: "JEWELLERY ATELIER", link: "/atelier" },
  { id: 2, name: "OTHER SERVICES", link: "/otherServices" },
  { id: 3, name: "ABOUT US", link: "#" },
  { id: 4, name: "OUR JOURNAL", link: "#" },
  { id: 5, name: "CONTACT US", link: "/contactus" },
];

const currencies = [
  { id: "USD", img: USD },
  { id: "CNY", img: CNY },
  { id: "AED", img: AED },
  { id: "RUB", img: RUB },
  { id: "THB", img: THB },
  { id: "EUR", img: EUR },
];

// Import image paths for currencies
import USD from "../../assets/currency/USD.png";
import CNY from "../../assets/currency/CNY.png";
import AED from "../../assets/currency/AED.png";
import RUB from "../../assets/currency/RUB.png";
import EUR from "../../assets/currency/EUR.png";
import THB from "../../assets/currency/THB.png";
import MobileIcons from "./MobileIcons";

const gemstones = [
  { name: "Alexandrite", image: alexandrite },
  { name: "Amethyst", image: amethyst },
  { name: "Apatite", image: apatite },
  { name: "Aquamarine", image: aquamarine },
  { name: "Beryl", image: beryl },
  { name: "Chrysoberyl", image: chrysoberyl },
  { name: "Citrine", image: citrine },
  { name: "Clinohumite", image: clinohumite },
  { name: "Diamond", image: diamond },
  { name: "Emerald", image: emerald },
  { name: "Garnet", image: garnet },
  { name: "Heliodor", image: heliodor },
  { name: "Kunzite", image: kunzite },
  { name: "Moonstone", image: moonstone },
  { name: "Morganite", image: morganite },
  { name: "Opal", image: opal },
  { name: "Pearl", image: pearl },
  { name: "Peridot", image: peridot },
  { name: "Prasiolite", image: prasiolite },
  { name: "Ruby", image: ruby },
  { name: "Sapphire", image: sapphire },
  { name: "Spinel", image: spinel },
  { name: "Sphene", image: sphene },
  { name: "Tanzanite", image: tanzanite },
  { name: "Topaz", image: topaz },
  { name: "Tourmaline", image: tourmaline },
  { name: "Zircon", image: zircon },
];
