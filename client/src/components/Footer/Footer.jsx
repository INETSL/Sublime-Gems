import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import stars from "../../assets/home/star.webp";

/**react icons */
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

/**social media icons */
import insta from "../../assets/icons/i.png";
import pintres from "../../assets/icons/p.png";
import youtube from "../../assets/icons/y.png";
import facebook from "../../assets/icons/f.png";
import telegram from "../../assets/icons/t.png";

/**payment icons */
import visa from "../../assets/footer/visa.png";
import master from "../../assets/footer/master.png";
import paypal from "../../assets/footer/paypal.png";
import binance from "../../assets/footer/binance.png";
import mir from "../../assets/footer/mir.png";
import unionpay from "../../assets/footer/unionpay.png";
import Commen_Button from "../commonComponents/Commen_Button";

export default function Footer() {
  return (
    <div className="w-full bg-slate-300 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10 px-0 md:px-[5rem]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl font-medium font-cormorant md:ml-10 text-center md:text-start mt-5"
          >
            CONTACT US :
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col mt-5 gap-2"
          >
            <div className="flex ml-20 md:ml-0 justify-start items-center gap-3">
              <FaPhoneAlt />
              <p className="text-lg font-sans">+66 62 953 5888</p>
            </div>
            <div className="flex ml-20 md:ml-0 justify-start items-center gap-3">
              <FaPhoneAlt />
              <p className="text-lg font-sans">+66 62 195 5888</p>
            </div>
            <div className="flex ml-20 md:ml-0 justify-start items-center gap-3">
              <MdEmail className="text-xl" />
              <p className="text-xl font-cormorant">contact@sublime.co.th</p>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl font-cormorant font-medium text-center mt-5"
          >
            ADDRESS :
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden md:flex ml-20 md:ml-0 justify-start gap-3 mt-5 font-cormorant"
          >
            <div>
              <MdLocationOn className="text-xl" />
            </div>
            <div className="text-xl">
              <p>
                <span className="font-sans text-base font-semibold">119</span>{" "}
                Mahesak Road, BIS Building,
              </p>
              <p>
                <span className="font-sans text-base font-semibold">8</span>th
                Floor,{" "}
                <span className="font-sans text-base font-semibold">
                  8<span className="font-cormorant text-xl">A</span>7
                </span>
                , Bang Rak,
              </p>
              <p>Si Lom, Krung Thep Maha Nakhon (Bangkok),</p>
              <p>Thailand,</p>
              <p>
                <span className="font-sans text-lg ">10500.</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex mt-5 md:hidden ml-20 md:ml-0 justify-start gap-3"
          >
            <div>
              <MdLocationOn className="text-xl" />
            </div>
            <div className="font-cormorant text-xl">
              <p>119 Mahesak Road,</p>
              <p>BIS Building,</p>
              <p>Phase 1, 8th Floor, 8A7,</p>
              <p> Bang Rak,Si Lom,</p>
              <p> Krung Thep Maha Nakhon (Bangkok),</p>
              <p>Thailand, 10500.</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 px-[2rem] md:px-0 flex justify-center md:ml-[-15px] md:justify-start"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9075027840518!2d100.51703707508975!3d13.72404958666496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299ee826bd351%3A0xfd8f1862fcf1d296!2sSUBLIME%20GEMS%20%26%20JEWELLERY!5e0!3m2!1sen!2slk!4v1734416187339!5m2!1sen!2slk"
            className="w-full h-[300px] md:h-[13rem] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sublime Gems & Jewellery Location"
          ></iframe>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-strat items-center md:items-center mt-5"
        >
          <h1 className="text-xl font-medium text-center md:text-left font-cormorant">
            SIGN UP FOR E-MAIL
          </h1>
          <p className="text-base text-center font-cormorant">
            Send me SUBLIME news, updates and offers.
          </p>
          <div>
            <input
              type="text"
              className="w-[17rem] md:w-[13.8rem] p-2 border-2 border-slate-400 mt-1 rounded-lg"
            />
          </div>
          <div className="mt-2">
            <Commen_Button tittle="Submit" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col  justify-center items-center">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-center font-cormorant uppercase mt-5"
              >
                Our Customers Love Us
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="hidden md:block text-sm text-center font-cormorant"
              >
                See what people are saying about us on
                <Link to=" https://g.page/r/CZbS8fxiGI_9EBM/review">
                  <span className="text-blue-600 underline underline-offset-8">
                    {" "}
                    Google{" "}
                  </span>
                </Link>
                and
                <Link to=" https://g.page/r/CZbS8fxiGI_9EBM/review">
                  <span className="text-blue-600 underline underline-offset-8">
                    {" "}
                    Verified Reviews.
                  </span>
                </Link>
              </motion.p>

              {/**Mobile */}
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="block md:hidden text-sm text-center font-cormorant"
              >
                See what people are saying about us on
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="block md:hidden text-sm text-center font-cormorant"
              >
                on
                <Link to=" https://g.page/r/CZbS8fxiGI_9EBM/review">
                  <span className="text-blue-600 underline underline-offset-8">
                    {" "}
                    Google{" "}
                  </span>
                </Link>
                and
                <Link to=" https://g.page/r/CZbS8fxiGI_9EBM/review">
                  <span className="text-blue-600 underline underline-offset-8">
                    {" "}
                    Verified Reviews.
                  </span>
                </Link>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img src={stars} alt="stars" className="w-[5rem] mt-[-1rem]" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full bg-gray-400 pt-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-xl font-medium font-cormorant"
        >
          FOLLOW US
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center gap-5 mt-2"
        >
          <Link to="https://www.instagram.com/sublimegemsandjewellery/profilecard/?igsh=MWhtZWZhb2x5Znp0dw==">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={insta}
              alt=""
              className="w-[2.2rem] bg-[#fcdfcc] rounded-full"
            />
          </Link>
          <Link to="https://pin.it/23pvYdEQw">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={pintres}
              className="w-[2.2rem] bg-[#fcdfcc] rounded-full"
              alt=""
            />
          </Link>
          <Link to="https://youtube.com/@sublimegemsandjewellery?feature=shared">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={youtube}
              alt=""
              className="w-[2.2rem] bg-[#fcdfcc] rounded-full"
            />
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=61564027654233&mibextid=ZbWKwL">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={facebook}
              alt=""
              className="w-[2.2rem] bg-[#fcdfcc] rounded-full"
            />
          </Link>
          <Link to="https://t.me/sublimegemsandjewellery">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={telegram}
              alt=""
              className="w-[2.2rem] bg-[#fcdfcc] rounded-full"
            />
          </Link>
        </motion.div>
      </div>

      <div className="w-full bg-gray-400 md:pb-2 flex flex-col md:flex-row justify-center items-center gap-6 -mt-2 md:-mt-[8px]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-row text-sm md:text-lg"
        >
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
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-row justify-center items-center md:ml-[-1.5rem] mt-[-3rem] md:mt-0 text-sm md:text-lg"
        >
          {/* <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" cursor-pointer"
          >
            <img src={binance} alt="" className="w-[4rem]" />
          </motion.div> */}

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
        {/* <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="-mt-5 md:mt-0 pb-2 md:pb-0"
        >
          <span className="font-cormorant text-xl">Powered by </span>
          <a
            href="https://inetsl.com/"
            className="font-semibold font-cormorant text-xl"
          >
            I-NET
          </a>
        </motion.p> */}
      </div>

      <div className="w-full md:-mt-3 pb-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 bg-slate-50 px-0 md:px-[5rem]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-2 md:mt-3 font-cormorant text-base md:text-xl"
        >
          <p>
            © SUBLIME GEMS & JEWELLERY CO.,LTD.{" "}
            <span className="font-sans">{new Date().getFullYear()}</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex md:mt-3 flex-row gap-4 text-sm md:text-xl font-cormorant "
        >
          <Link to="/">
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              Terms & Conditions
            </motion.p>
          </Link>

          <Link to="/">
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              Privacy Policy
            </motion.p>
          </Link>
          <Link to="/">
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              Site Map
            </motion.p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
