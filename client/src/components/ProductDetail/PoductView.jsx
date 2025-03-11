import React, { useState } from "react";
import img1 from "../../assets/producs/gemone.jpg";
import img2 from "../../assets/producs/gemtwo.webp";
import img3 from "../../assets/producs/gemthree.webp";
import img4 from "../../assets/producs/gemfour.webp";
import img5 from "../../assets/producs/gemfive.webp";
import history from "../../assets/producs/history.jpg";
import ProductGallery from "./ProductGallery";
import Detail from "./Detail";
import { motion } from "framer-motion";
import { BsCart4 } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { GiScales } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import Commen_Button from "../commonComponents/Commen_Button";
export const FadeUp = (delay) => {
  return {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        type: "spring",
        stiffness: 100,
        ease: "easeInOut",
      },
    },
  };
};

export const FadeRight = (delay) => {
  return {
    initial: { opacity: 0, x: 50 }, // Starts from the right (positive x direction)
    animate: {
      opacity: 1,
      x: 0, // Moves to the center (x: 0)
      transition: {
        duration: 0.5,
        delay: delay,
        type: "spring",
        stiffness: 100,
        ease: "easeInOut",
      },
    },
  };
};

export const FadeLeft = (delay) => {
  return {
    initial: { opacity: 0, x: -50 }, // Starts from the left (negative x direction)
    animate: {
      opacity: 1,
      x: 0, // Moves to the center (x: 0)
      transition: {
        duration: 0.5,
        delay: delay,
        type: "spring",
        stiffness: 100,
        ease: "easeInOut",
      },
    },
  };
};

const gems = [
  {
    id: "1",
    title: "Neon pink Mahenge spinel in oval cut 6.06 ct, Tanzania",
    price: "1,000,000",
    images: [img1, img2, img3, img4, img5],
    license: [history],
    available: true,
    history: true,
  },
];

export default function PoductView() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle opening and closing the modal
  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex md:ml-5 flex-col md:flex-row md:space-x-8 mt-8 md:-mt-28 px-[1rem] md:px-0">
      {/* Right Section - Stays Sticky */}
      <div className="md:w-2/3 ">
        <div className="sticky top-[20rem] md:mt-[11rem] md:ml-[2rem]  md:mb-20">
          <motion.h1
            className="text-3xl  font-castellar"
            variants={FadeRight(0.2)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            {gems[0].title}
          </motion.h1>
          <motion.p
            className="text-4xl mt-4 font-cormorant"
            variants={FadeRight(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            ${" "}
            <span className="font-sans font-semibold text-2xl">
              {gems[0].price}
            </span>
          </motion.p>
          <motion.p
            className="text-green-700 text-3xl mt-4 font-cormorant"
            variants={FadeRight(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            In Stock
          </motion.p>
          {/* <motion.button
                        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
                        variants={FadeRight(0.6)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                    >
                        Add to Cart
                    </motion.button> */}

          <Detail />

          {/* Image that opens the modal */}
          {/* <motion.div
                        className=""
                        variants={FadeRight(0.8)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-2xl font-bold mt-8">Certificate</h1>
                        <img
                            src={history}
                            alt=""
                            onClick={handleImageClick}
                            className="w-[15rem] p-2 bg-slate-200 shadow-lg hover:bg-slate-400 hover:shadow-2xl mt-2 cursor-pointer transition-all"
                        />
                    </motion.div> */}
        </div>
      </div>

      {/* Left Section - Scrollable */}
      <motion.div
        variants={FadeLeft(0.2)}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className=" md:w-2/3 overflow-auto"
      >
        {/* <motion.div
          variants={FadeLeft(0.2)}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <h1 className="block md:hidden text-2xl font-castellar">
            {gems[0].title}
          </h1>
          <h1 className="block md:hidden text-4xl font-cormorant">
            ${gems[0].price}
          </h1>
        </motion.div> */}

        <ProductGallery product={gems[0]} />

        <div>
          <div>
            {/* <h1 className="text-5xl font-cormorant text-center mt-8">$ 200.00</h1> */}
          </div>

          <div className="flex flex-row justify-center gap-4 mt-8 mb-10">
            <Commen_Button
              icon={CiHeart}
              toolTip="Add to Wishlist"
              url="/wishlist"
            />
            <Commen_Button icon={GiScales} toolTip="Compare" url="/compare" />
            <Commen_Button
              icon={IoBagOutline}
              toolTip="Add to Cart"
              url="/cart"
            />
          </div>
        </div>
      </motion.div>

      {/* Modal for full-screen image */}
      {/* {isModalOpen && (
                <div className="fixed top-0 right-0 w-screen h-screen z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <img
                        src={history}
                        alt="Full-screen view"
                        className="max-w-full max-h-full object-contain"
                    />

                    <button
                        onClick={handleCloseModal}
                        className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200"
                    >
                        Close
                    </button>
                </div>
            )} */}
    </div>
  );
}
