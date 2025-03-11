import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//icons
import { IoIosArrowDown } from "react-icons/io";

export default function Sidebar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubmenu, setActiveSubmenu] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const tab = query.get("tab");
    // Automatically open the appropriate menu and submenu based on the URL tab parameter
    if (["productList", "addProduct"].includes(tab)) {
      setActiveMenu("products");
    } else if (
      ["bannerOne", "bannerTwo", "slideOne", "slideTwo", "slideThree"].includes(
        tab
      )
    ) {
      setActiveMenu("banners");
      if (["slideOne", "slideTwo", "slideThree"].includes(tab)) {
        setActiveSubmenu("bannerThree");
      } else {
        setActiveSubmenu("");
      }
    } else if (
      ["gemstones", "shapes", "colours", "origins", "selections"].includes(tab)
    ) {
      setActiveMenu("home");
    } else {
      setActiveMenu(tab);
    }
    // Set active submenu if relevant
    setActiveSubmenu(tab);
  }, [location]);

  const sidebarVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <div className="w-[11rem] bg-gray-100 border-r border-gray-200 overflow-auto">
      <div className="py-5 px-6 text-xl font-bold border-b border-gray-300 sticky top-0 bg-gray-100">
        COMPANY
      </div>
      <ul className="mt-4">
        <li>
          <button
            className={`w-full text-left px-6 py-2 ${
              activeMenu === "dashboard"
                ? "bg-yellow-500 text-white"
                : "hover:bg-yellow-500 hover:text-white"
            }`}
            onClick={() =>
              setActiveMenu(activeMenu === "dashboard" ? "" : "dashboard")
            }
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            className={`w-full text-left px-6 py-2 ${
              activeMenu === "products"
                ? "bg-yellow-500 text-white"
                : "hover:bg-yellow-500 hover:text-white"
            }`}
            onClick={() =>
              setActiveMenu(activeMenu === "products" ? "" : "products")
            }
          >
            Products
          </button>
          <AnimatePresence>
            {activeMenu === "products" && (
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                className="bg-slate-300"
                variants={sidebarVariants}
              >
                {["productList", "addProduct"].map((item) => (
                  <Link key={item} to={`/admin?tab=${item}`}>
                    <li
                      className={`py-2 pl-8 ${
                        activeSubmenu === item
                          ? "bg-yellow-600 text-white"
                          : "hover:bg-yellow-500 hover:text-white"
                      }`}
                    >
                      {item.replace(/([A-Z])/g, " $1").trim()}
                    </li>
                  </Link>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        <li>
          <button
            className={`w-full text-left px-6 py-2 ${
              activeMenu === "banners"
                ? "bg-yellow-500 text-white"
                : "hover:bg-yellow-500 hover:text-white"
            }`}
            onClick={() =>
              setActiveMenu(activeMenu === "banners" ? "" : "banners")
            }
          >
            Banners
          </button>
          <AnimatePresence>
            {activeMenu === "banners" && (
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                className="bg-slate-300"
                variants={sidebarVariants}
              >
                {["bannerOne", "bannerTwo"].map((item) => (
                  <Link key={item} to={`/admin?tab=${item}`}>
                    <li
                      className={`py-2 pl-8 ${
                        activeSubmenu === item
                          ? "bg-yellow-600 text-white"
                          : "hover:bg-yellow-500 hover:text-white"
                      }`}
                    >
                      {item.replace(/([A-Z])/g, " $1").trim()}
                    </li>
                  </Link>
                ))}
                <li>
                  <button
                    className={`w-full pl-8 text-left px-6 py-2 flex flex-row justify-center items-center gap-2 ${
                      activeSubmenu === "bannerThree"
                        ? "bg-yellow-600 text-white"
                        : "hover:bg-yellow-500 hover:text-white"
                    }`}
                    onClick={() =>
                      setActiveSubmenu(
                        activeSubmenu === "bannerThree" ? "" : "bannerThree"
                      )
                    }
                  >
                    Banner Three <IoIosArrowDown />
                  </button>
                  <AnimatePresence>
                    {activeSubmenu === "bannerThree" && (
                      <motion.ul
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                        className="pl-4 bg-gray-300"
                      >
                        {["slideOne", "slideTwo", "slideThree"].map((slide) => (
                          <Link key={slide} to={`/admin?tab=${slide}`}>
                            <li
                              className={`py-2 pl-10 ${
                                activeSubmenu === slide
                                  ? "bg-yellow-600 text-white"
                                  : "hover:bg-yellow-600 hover:text-white"
                              }`}
                            >
                              {slide}
                            </li>
                          </Link>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        <li>
          <button
            className={`w-full text-left px-6 py-2 ${
              activeMenu === "home"
                ? "bg-yellow-500 text-white"
                : "hover:bg-yellow-500 hover:text-white"
            }`}
            onClick={() => setActiveMenu(activeMenu === "home" ? "" : "home")}
          >
            Categories
          </button>
          <AnimatePresence>
            {activeMenu === "home" && (
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                className="bg-slate-300"
                variants={sidebarVariants}
              >
                {[
                  "gemstones",
                  "shapes",
                  "colours",
                  "origins",
                  "selections",
                ].map((item) => (
                  <Link key={item} to={`/admin?tab=${item}`}>
                    <li
                      className={`py-2 pl-8 ${
                        activeSubmenu === item
                          ? "bg-yellow-600 text-white"
                          : "hover:bg-yellow-500 hover:text-white"
                      }`}
                    >
                      {item.replace(/([A-Z])/g, " $1").trim()}
                    </li>
                  </Link>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      </ul>
    </div>
  );
}
