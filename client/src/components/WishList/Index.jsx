import React from "react";
import { CiHeart } from "react-icons/ci";
import ProductCard from "./ProductCard";
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
    <div className="w-full">
      {/**Heading */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center"
      >
        <CiHeart className="text-5xl md:text-6xl text-red-600" />
        <h1 className="text-3xl md:text-5xl font-castellar mb-4">
          My Wish List
        </h1>
      </motion.div>

      {/**Content */}
      <div className="px-[2rem] md:px-[5rem] mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-cormorant"
        >
          Category Name
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4"
        >
          <div className="flex items-center justify-center">
            <ProductCard item={item} />
          </div>
          <div className="flex items-center justify-center">
            <ProductCard item={item} />
          </div>
          <div className="flex items-center justify-center">
            <ProductCard item={item} />
          </div>
          <div className="flex items-center justify-center">
            <ProductCard item={item} />
          </div>
          <div className="flex items-center justify-center">
            <ProductCard item={item} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
