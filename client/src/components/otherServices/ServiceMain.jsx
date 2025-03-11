import React from "react";
import { motion } from "framer-motion";

import s1 from "../../assets/services/s1.png";
import s2 from "../../assets/services/s2.png";
import s3 from "../../assets/services/s3.png";
import s4 from "../../assets/services/s4.png";
import s5 from "../../assets/services/s5.png";
import s6 from "../../assets/services/s6.png";
import s7 from "../../assets/services/s7.png";
import s8 from "../../assets/services/s8.png";
import s9 from "../../assets/services/s9.png";
import s10 from "../../assets/services/s10.png";
import s11 from "../../assets/services/s11.png";
import s12 from "../../assets/services/s12.png";

export default function ServiceMain() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-castellar text-center"
        >
          Comprehensive Gemstone Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl font-cormorant text-center"
        >
          SUBLIME offers multiple services for our clients:
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 px-[2rem] md:px-[5rem] mb-[5rem]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-end items-center mb-5 gap-5 bg-slate-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white"
        >
          <div>
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-end">
              Personalized selection of gemstones
            </h1>
          </div>

          <div>
            <img src={s1} alt="" className="w-56 rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row  mb-5 gap-5 bg-slate-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white"
        >
          <div className="order-2 md:order-1 flex justify-center items-center">
            <img src={s2} alt="" className="w-56 rounded-2xl" />
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              Ethnically mined gemstone collection
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-end items-center mb-5 gap-5 bg-slate-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white"
        >
          <div>
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              In-house cutting of gemstones
            </h1>
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              (custom cuts and calibration)
            </h1>
          </div>

          <div>
            <img src={s3} alt="" className="w-56 rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row  mb-5 gap-5 bg-slate-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white"
        >
          <div className="order-2 md:order-1 flex justify-center items-center">
            <img src={s4} alt="" className="w-56 rounded-2xl" />
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center items-center md:items-start">
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              Free of charge re-polishing services
            </h1>
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              for existing customers
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-end items-center mb-5 gap-5 bg-slate-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white"
        >
          <div className="max-w-[20rem]">
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              Gemstone certification with{" "}
            </h1>
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              reputable laboratories
            </h1>
          </div>

          <div>
            <img src={s5} alt="" className="w-56 rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row  mb-5 gap-5 bg-slate-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white"
        >
          <div className="order-2 md:order-1 flex justify-center items-center">
            <img src={s6} alt="" className="w-56 rounded-2xl" />
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center items-center md:items-start">
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              Personalized, made-to-order jewellery
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-end items-center mb-5 gap-5 bg-slate-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white"
        >
          <div className="max-w-[20rem]">
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              Jewellery redesigning
            </h1>
          </div>

          <div>
            <img src={s7} alt="" className="w-56 rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row mb-5 gap-5 bg-slate-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white"
        >
          <div className="order-2 md:order-1 flex justify-center items-center">
            <img src={s8} alt="" className="w-56 rounded-2xl" />
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center items-center md:items-start">
            <h1 className="text-lg md:text-2xl font-cormorant ">
              Jewellery CAD designing services
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-end mb-5 gap-5 bg-slate-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white"
        >
          <div className="flex justify-center items-center">
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              Appraisal services
            </h1>
          </div>

          <div className="flex justify-center items-center">
            <img src={s9} alt="" className="w-56 rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row mb-5 gap-5 bg-slate-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white"
        >
          <div className="order-2 md:order-1 flex justify-center items-center">
            <img src={s10} alt="" className="w-56 rounded-2xl" />
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              Gift assistance
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-end mb-5 gap-5 bg-slate-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white"
        >
          <div className="flex justify-center items-center">
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              Worldwide delivery
            </h1>
          </div>

          <div className="flex justify-center items-center">
            <img src={s11} alt="" className="w-56 rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row mb-[5rem] md:mb-5 gap-5 bg-slate-50 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white"
        >
          <div className="order-2 md:order-1 flex justify-center items-center">
            <img src={s12} alt="" className="w-56 rounded-2xl" />
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            <h1 className="text-lg md:text-2xl font-cormorant text-center md:text-start">
              14-day return policy
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
