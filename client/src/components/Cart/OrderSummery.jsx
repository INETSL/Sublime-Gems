import React from "react";
import { motion } from "framer-motion";

/**payment icons */
import visa from "../../assets/footer/visa.png";
import master from "../../assets/footer/master.png";
import paypal from "../../assets/footer/paypal.png";
import binance from "../../assets/footer/binance.png";
import mir from "../../assets/footer/mir.png";
import unionpay from "../../assets/footer/unionpay.png";
import Commen_Button from "../commonComponents/Commen_Button";

export default function OrderSummery() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-200 mt-5 md:mt-0 p-5 md:p-5 shadow-lg rounded-xl md:ml-4 "
    >
      {/**Heading */}
      <div>
        <h1 className="font-cormorant text-3xl text-center">Order Summery</h1>
      </div>

      <div className="md:px-[2rem]">
        <div className="flex justify-between items-center mt-5">
          <p className="font-cormorant text-xl">Subtotal</p>
          <p className="font-sans text-xl">$20,000</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="font-cormorant text-xl">Shipping</p>
          <p className="font-sans text-xl">0</p>
        </div>
        <div className="flex justify-between items-center mt-5 border-y-2 border-gray-300 py-4">
          <p className="font-cormorant text-2xl">Total</p>
          <p className="font-sans text-2xl">$20,000</p>
        </div>

        <div className="mt-10">
          <h1>Pay securely with:</h1>
          <div className="w-full md:pb-2 flex flex-row justify-center items-center gap-6 -mt-2 md:-mt-[8px]">
            <motion.div className="flex flex-row text-sm md:text-lg">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" cursor-pointer"
              >
                <img src={visa} alt="" className="w-[4rem]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" cursor-pointer"
              >
                <img src={master} alt="" className="w-[4rem]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" cursor-pointer"
              >
                <img src={paypal} alt="" className="w-[4rem]" />
              </motion.div>
            </motion.div>
            <motion.div className="flex flex-row justify-center items-center ml-[-1.5rem]  md:mt-0 text-sm md:text-lg">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" cursor-pointer"
              >
                <img src={mir} alt="" className="w-[4rem]" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" cursor-pointer"
              >
                <img src={unionpay} alt="" className="w-[4rem]" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-5">
          <Commen_Button tittle="Checkout Securely" />
        </div>
      </div>
    </motion.div>
  );
}
