import React from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

/**social media icons */
import insta from "../../assets/icons/i.png";
import pintres from "../../assets/icons/p.png";
import youtube from "../../assets/icons/y.png";
import facebook from "../../assets/icons/f.png";
import telegram from "../../assets/icons/t.png";
import { Link } from "react-router-dom";

export default function ContactDetails() {
  return (
    <div>
      {/* <div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-castellar text-center md:text-left mt-5 md:mt-0"
        >
          Our Contact Information
        </motion.h1>
      </div> */}

      <div className="pl-3 lg:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white max-w-80 p-5 rounded-md shadow-lg shadow-gray-400 mt-10 md:mt-0 hover:bg-slate-50 hover:shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-slate-300 p-5">
              <FaPhone className="text-xl" />
            </div>
            <div className="flex flex-col font-roboto">
              <a href="tel:+66629535888" className="text-base ">
                +66 62 953 5888
              </a>
              <a href="tel:+66621955888" className="text-base ">
                +66 62 195 5888
              </a>
            </div>
          </div>
        </motion.div>

        <Link to="https://www.google.com/maps?ll=13.724054,100.519361&z=15&t=m&hl=en&gl=LK&mapclient=embed&cid=18270849026694959766">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white max-w-80 p-5 rounded-md shadow-lg shadow-gray-400 mt-5 hover:bg-slate-50 hover:shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-slate-300 p-5">
                <FaLocationDot className="text-xl" />
              </div>
              <div>
                <p className="text-lg md:text-xl">
                  <span className="text-[16px]">119 </span>
                  <span className="font-cormorant">
                    Mahesak Road, BIS Building,
                  </span>
                </p>
                <p className="text-lg md:text-xl ">
                  <span className="text-[16px]">8</span>
                  <span className="font-cormorant">th Floor,</span>{" "}
                  <span className="text-[16px]">8</span>
                  <span className="font-cormorant">A</span>
                  <span className="text-[16px]">7,</span>
                </p>
                <p className="text-lg md:text-xl ">
                  <span className="font-cormorant">Bang Rak, Si Lom, </span>
                </p>
                <p className="text-lg md:text-xl ">
                  <span className="font-cormorant">
                    Krung Thep Maha Nakhon (Bangkok),{" "}
                  </span>
                </p>
                <p className="text-lg md:text-xl">
                  <span className="font-cormorant">Thailand,</span>{" "}
                  <span className="text-[16px]">10500.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white max-w-80 p-5 rounded-md shadow-lg shadow-gray-400 mt-5 hover:bg-slate-50 hover:shadow-xl"
        >
          <div className="flex items-center max-h-[2rem] gap-3">
            <div className="rounded-full bg-slate-300 py-5 px-5">
              <MdEmail className="text-2xl" />
            </div>
            <div>
              <a
                href="mailto:contact@sublime.co.th"
                className="text-base font-semibold"
              >
                <span className="font-cormorant text-xl">
                  contact@sublime.co.th
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-center md:text-left font-castellar mt-16"
          >
            Follow Us
          </motion.h1>
        </div>

        <div className="flex flex-row gap-5 mt-5 px-3 md:px-0 pb-5 pl-8 lg:pl-24">
          <Link to="https://www.instagram.com/sublimegemsandjewellery/profilecard/?igsh=MWhtZWZhb2x5Znp0dw==">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={insta}
              alt=""
              className="w-[3rem] bg-[#fcdfcc] rounded-full"
            />
          </Link>
          <Link to="https://pin.it/23pvYdEQw">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={pintres}
              className="w-[3rem] bg-[#fcdfcc] rounded-full"
              alt=""
            />
          </Link>
          <Link to="https://youtube.com/@sublimegemsandjewellery?feature=shared">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={youtube}
              alt=""
              className="w-[3rem] bg-[#fcdfcc] rounded-full"
            />
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=61564027654233&mibextid=ZbWKwL">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={facebook}
              alt=""
              className="w-[3rem] bg-[#fcdfcc] rounded-full"
            />
          </Link>
          <Link to="https://t.me/sublimegemsandjewellery">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={telegram}
              alt=""
              className="w-[3rem] bg-[#fcdfcc] rounded-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
