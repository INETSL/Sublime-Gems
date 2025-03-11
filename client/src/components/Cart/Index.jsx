import React from "react";
import OrderSummery from "./OrderSummery";
import CartProductCard from "./CartProductCard";
import gem from "../../assets/gemstones/alexandrite.png";
import { motion } from "framer-motion";

const item = {
  id: 1,
  img: gem,
  name: "Alexandrite",
  price: 100,
  description: "This is a description of the product",
};

export default function Index() {
  return (
    <div className="px-[2rem] md:px-[5rem]">
      {/**heading */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-5"
      >
        <h1 className="text-3xl md:text-5xl font-castellar">Shopping Cart</h1>
        <p className="font-cormorant text-3xl md:text-3xl">
          You have{" "}
          <span className="font-sans text-2xl md:text-xl font-bold">5</span>{" "}
          items
        </p>
      </motion.div>

      {/**container */}
      <div className="flex flex-col md:flex-row mb-20">
        {/**Cart items */}
        <div className="flex-1 space-y-4">
          <CartProductCard item={item} />
          <CartProductCard item={item} />
        </div>

        {/**Order summery */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:min-w-[30rem]"
        >
          <OrderSummery />
        </motion.div>
      </div>
    </div>
  );
}
