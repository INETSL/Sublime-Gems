import React from "react";
import Commen_Button from "../commonComponents/Commen_Button";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-slate-300 p-8 shadow-xl shadow-gray-400 rounded-xl flex flex-col items-center justify-center"
      >
        <form class="max-w-lg px-8 md:px-0 w-[45vh] md:w-full -ml-6 md:ml-0">
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="mb-5">
              <label
                for="title"
                class="font-cormorant text-lg block mb-2 text-gray-900"
              >
                Title
              </label>
              <select
                id="title"
                class="shadow-xs bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[6rem] p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                required
              >
                <option value="">Title</option>
                <option value="Ms">Ms.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Miss">Miss.</option>
                <option value="Mr">Mr.</option>
              </select>
            </div>

            <div class="mb-5 lg:-ml-16 lg:mr-10">
              <label
                for="email"
                class="font-cormorant text-lg  block mb-2  text-gray-900 "
              >
                First Name
              </label>
              <input
                type="email"
                id="email"
                class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder="First Name"
                required
              />
            </div>
            <div class="mb-5 lg:-ml-10">
              <label
                for="password"
                class="block mb-2 font-cormorant text-lg text-gray-900 "
              >
                Last Name
              </label>
              <input
                type="password"
                id="password"
                class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 font-cormorant text-lg text-gray-900 "
            >
              E-mail
            </label>
            <input
              type="text"
              id="email"
              class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder="E-mail"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 font-cormorant text-lg text-gray-900 "
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder="Phone Number"
              required
            />
          </div>

          <div>
            <label
              for="message"
              class="block mb-2 font-cormorant text-lg text-gray-900"
            >
              How can we help you?
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Message..."
            ></textarea>
          </div>

          <div class="flex items-center mb-5 mt-5 ">
            <div class="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="terms"
              class="ms-2 font-cormorant text-base md:text-lg text-gray-900"
            >
              Send me Special Offers & News
            </label>
          </div>

          <Commen_Button tittle="Send" />
        </form>
      </motion.div>
    </>
  );
}
