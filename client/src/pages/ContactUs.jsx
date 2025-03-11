import React from "react";
import ContactForm from "../components/contactus/ContactForm";
import ContactDetails from "../components/contactus/ContactDetails";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="px-4 sm:px-6 md:px-0 my-14 mb-48">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-castellar mb-5"
        >
          Contact Us
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-[46rem] felx flex-col mx-auto"
      >
        <div className="font-cormorant text-lg md:text-xl">
          <div className="ml-2 mb-2">
            <p>We appreciate your presence!</p>
          </div>
          <div className="text-center mb-2">
            <p>
              Our SUBLIME team is here to help you. Please check our FAQ page
              for immediate answers or contact us by DM on Instagram, sending us
              an E-mail, calling us directly or filling out the website form
              below.
            </p>
          </div>
          <div className="text-center  mb-2">
            <p>To see our collection, please make a prior appointment.</p>
          </div>
          <div className="text-center px-2 mb-5">
            <p>We’re looking forward to be of assistance to you!</p>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row w-full bg-slate-200 md:p-10 rounded-xl">
        <div className="flex-1">
          <ContactDetails />
        </div>

        <div className="flex-1">
          <ContactForm />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden md:block mt-10 mb-[-10rem] md:mb-[-13rem]"
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
    </div>
  );
}
