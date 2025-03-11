import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

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
import { Link } from "react-router-dom";

const navItems = [
  { id: 1, name: "JEWELLERY ATELIER", link: "/atelier" },
  { id: 2, name: "OTHER SERVICES", link: "/otherServices" },
  { id: 3, name: "ABOUT US", link: "#" },
  { id: 4, name: "OUR JOURNAL", link: "#" },
  { id: 5, name: "CONTACT US", link: "/contactus" },
];

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

export default function NavItems() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  const columns = 5;
  const rowsPerColumn = Math.ceil(gemstones.length / columns);
  const gemstoneColumns = Array.from({ length: columns }, (_, colIndex) =>
    gemstones.slice(colIndex * rowsPerColumn, (colIndex + 1) * rowsPerColumn)
  );

  return (
    <div className="w-full flex justify-center items-center py-4 bg-slate-100 px-10 z-40 relative border-y-2 border-gray-300 ">
      <div className="flex items-center justify-center gap-10">
        <div
          className="relative"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <button className="flex justify-center text-lg font-cormorant font-medium items-center gap-2">
            COLOURED GEMSTONES
            <IoIosArrowDown className="text-xl" />
          </button>

          <AnimatePresence>
            {isDropdownVisible && (
              <motion.div
                className="absolute w-[90rem] left-[-10.5rem] top-full bg-white shadow-lg z-50 "
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-5 py-[20px] px-[8rem]">
                  {gemstoneColumns.map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-col">
                      {column.map((gem) => (
                        <motion.div
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#f0f0f0",
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          key={gem.name}
                          className="flex flex-row w-[15rem] ml-5 items-center cursor-pointer"
                        >
                          <img
                            src={gem.image}
                            alt={gem.name}
                            className="w-[3.3rem] h-[3.3rem] object-contain"
                          />
                          <p className=" text-xl font-cormorant">{gem.name}</p>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {navItems.map((item) => (
          <Link to={`${item.link}`}>
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="text-lg font-medium font-cormorant"
            >
              {item.name}
            </motion.button>
          </Link>
        ))}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { IoIosArrowDown } from "react-icons/io";

// export default function NavItems() {
//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   const dropdownVariants = {
//     hidden: { opacity: 0, height: 0 },
//     visible: { opacity: 1, height: "auto" },
//   };

//   return (
//     <div className="w-full flex justify-center items-center py-4 bg-slate-100 px-10">
//       <div className="flex items-center justify-center gap-10">
//         {/* Dropdown wrapper */}
//         <div
//           onMouseEnter={() => setDropdownVisible(true)}
//           onMouseLeave={() => setDropdownVisible(false)}
//         >
//           <button className="flex justify-center text-lg font-cormorant font-medium items-center gap-2">
//             COLOURED GEMSTONES
//             <IoIosArrowDown className="text-xl" />
//           </button>

//           {/* Dropdown */}
//           <AnimatePresence>
//             {isDropdownVisible && (
//               <motion.div
//                 className="absolute w-screen left-0 top-[23%] bg-white shadow-lg z-50"
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//                 variants={dropdownVariants}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="grid grid-cols-5 gap-4 p-5">
//                   {[
//                     "PRECIOUS GEMS",
//                     "FINE GEMS",
//                     "TOURMALINE",
//                     "GARNETS",
//                     "VIEW ALL",
//                   ].map((category, index) => (
//                     <div key={index} className="border-r-2 last:border-r-0 p-2">
//                       <h2 className="font-bold text-lg font-cormorant">
//                         {category}
//                       </h2>
//                       <div className="flex flex-col gap-2 mt-2">
//                         {["Diamond", "Ruby", "Sapphire", "Emerald", "Opal"].map(
//                           (item) => (
//                             <motion.p
//                               key={item}
//                               whileHover={{
//                                 scale: 1.05,
//                                 backgroundColor: "#f0f0f0",
//                               }}
//                               transition={{ duration: 0.2 }}
//                               className="cursor-pointer p-2 rounded-sm font-cormorant"
//                             >
//                               {item}
//                             </motion.p>
//                           )
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {[
//           "JEWELLERY ATELIER",
//           "OTHER SERVICES",
//           "ABOUT US",
//           "OUR JOURNAL",
//           "CONTACT",
//         ].map((item) => (
//           <motion.button
//             key={item}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//             className="text-lg font-medium font-cormorant"
//           >
//             {item}
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// }
