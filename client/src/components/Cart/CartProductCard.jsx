import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Commen_Button from "../commonComponents/Commen_Button";

export default function CartProductCard({ item }) {
  // State to manage the toggle
  const [isToggled, setIsToggled] = useState(false);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(item.price);

  const handleQuantityChange = (e) => {
    setQty(e.target.value);
    setPrice(item.price * e.target.value);
  };

  const toggleDetails = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden md:flex flex-col border rounded-lg p-4 shadow-md bg-slate-200 hover:bg-slate-50 hover:shadow-2xl"
      >
        <div className="flex justify-between">
          <div></div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <RiDeleteBin2Fill className="text-2xl text-red-500" />
          </motion.div>
        </div>

        <div className="flex mt-10">
          <div>
            <img src={item.img} alt="" className="w-[16rem] mt-[-4rem]" />
          </div>

          <div className="flex w-full justify-between px-5">
            <div className="text-3xl font-cormorant">
              <p>{item.name}</p>
              <p className="font-sans text-2xl">${price}.00</p>
            </div>

            <div className="">
              <input
                value={qty}
                onChange={handleQuantityChange}
                max="100"
                min="1"
                type="number"
                step="1"
                className="w-20 text-center bg-slate-50 py-2 border border-slate-500 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div onClick={toggleDetails} className="flex justify-end">
          <Commen_Button tittle={isToggled ? "Hide Details" : "Show Details"} />
        </div>
        {isToggled && (
          <div className="flex ml-16 mt-5">
            <table>
              <tr className="">
                <td className="font-cormorant text-xl ">Gem Type</td>
                <td className="px-3"></td>
                <td className="font-cormorant text-xl">Text text</td>
              </tr>
              <tr className="">
                <td className="font-cormorant text-xl ">Shape</td>
                <td className="px-3"></td>
                <td className="font-cormorant text-xl">Text text</td>
              </tr>
              <tr className="">
                <td className="font-cormorant text-xl ">Weight (CT)</td>
                <td className="px-3"></td>
                <td className="font-cormorant text-xl">Text text</td>
              </tr>
              <tr className="">
                <td className="font-cormorant text-xl ">Measurements</td>
                <td className="px-3"></td>
                <td className="font-cormorant text-xl">Text text</td>
              </tr>
              <tr className="">
                <td className="font-cormorant text-xl ">Colour</td>
                <td className="px-3"></td>
                <td className="font-cormorant text-xl">Text text</td>
              </tr>
              <tr className="">
                <td className="font-cormorant text-xl ">Clarity</td>
                <td className="px-3"></td>
                <td className="font-cormorant text-xl">Text text</td>
              </tr>
            </table>

            <table className="ml-[5rem]">
              <tr className="">
                <td className="font-cormorant text-xl ">Treatment</td>
                <td className="px-3"></td>
                <td className="font-cormorant text-xl">Text text</td>
              </tr>
              <tr className="">
                <td className="font-cormorant text-xl ">Origin</td>
                <td className="px-3"></td>
                <td className="font-cormorant text-xl">Text text</td>
              </tr>
              <tr className="">
                <td className="font-cormorant text-xl ">Selection</td>
                <td className="px-3"></td>
                <td className="font-cormorant text-xl">Text text</td>
              </tr>
              <tr className="">
                <td className="font-cormorant text-xl ">Price</td>
                <td className="px-3"></td>
                <td className="font-cormorant text-xl">Text text</td>
              </tr>
              <tr className="">
                <td className="font-cormorant text-xl ">SKU</td>
                <td className="px-3"></td>
                <td className="font-cormorant text-xl">Text text</td>
              </tr>
            </table>
          </div>
        )}
      </motion.div>

      {/**Mobile view */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:hidden border rounded-lg p-4 shadow-md bg-slate-200 hover:bg-slate-50 hover:shadow-2xl"
      >
        <div className="flex justify-between">
          <div></div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <RiDeleteBin2Fill className="text-2xl text-red-500 cursor-pointer" />
          </motion.div>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center mb-4">
          <img src={item.img} alt={item.name} className="w-[8rem]" />
        </div>

        {/* Product Title */}
        <div className="text-center font-cormorant text-xl font-semibold">
          {item.name}
        </div>
        <div className="text-center font-cormorant text-xl font-semibold">
          ${price}.00
        </div>
        <div className="flex justify-center items-center">
          <input
            value={qty}
            onChange={handleQuantityChange}
            max="100"
            min="1"
            type="number"
            step="1"
            className="w-20 text-center bg-slate-50 py-2 border border-slate-500 rounded-lg"
          />
        </div>

        {/* Toggle Button */}
        <div className="block md:hidden text-center mt-4 ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={toggleDetails}
            className="inline-flex items-center justify-center border-[1px] border-black text-sm text-gray-900 rounded-lg hover:bg-[#fcdfcc] shadow-lg hover:shadow-xl"
          >
            <span class="font-cormorant text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-opacity-0">
              {isToggled ? "Hide Details" : "Show Details"}
            </span>
          </motion.button>
          {/* <button
          onClick={toggleDetails}
          className="text-sm bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {isToggled ? "Hide Details" : "Show Details"}
        </button> */}
        </div>

        {/* Toggled Details */}
        {isToggled && (
          <div className="mt-4 space-y-2 font-cormorant">
            <div className="flex justify-between">
              <p className="font-medium">Gem Type:</p>
              <p>{item.gemType}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Weight:</p>
              <p>{item.weight} ct</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Price:</p>
              <p>${item.price}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Color:</p>
              <p>{item.color}</p>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
