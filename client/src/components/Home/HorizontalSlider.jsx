// HorizontalSlider.js
import React from "react";
import Slider from "react-slick"; // Import react-slick
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; // For navigation arrows
import { motion } from "framer-motion";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function HorizontalSlider({ images, link = "/" }) {
  // Slick slider settings
  const settings = {
    dots: false, // Disable dot navigation
    infinite: true, // Loop infinitely
    speed: 500, // Transition speed
    slidesToShow: 8, // Show 8 slides at a time on desktop
    slidesToScroll: 1, // Scroll one slide at a time
    centerMode: false, // Disable centered mode
    nextArrow: (
      <IoIosArrowForward className="slick-arrow slick-next absolute top-[50%] right-[10px] z-50 text-3xl bg-gray-800 bg-opacity-80 p-4 rounded-full" />
    ),
    prevArrow: (
      <IoIosArrowBack className="slick-arrow slick-prev absolute top-[50%] left-[10px] z-50 text-red text-3xl bg-gray-800 bg-opacity-80 p-4 rounded-full" />
    ),
    responsive: [
      {
        breakpoint: 1024, // Tablet/desktop view
        settings: {
          slidesToShow: 8, // Show 8 slides at a time on desktop
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 3, // Show 3 slides at a time on mobile
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mt-12"
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Link to={`${link}`}>
            <motion.div
              whileHover={{
                scale: 1.1,
                cursor: "pointer",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={index}
              className="flex flex-col justify-center items-center md:ml-5"
            >
              <div className="flex justify-center items-center">
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-[5rem] md:w-[7rem] h-[5rem] md:h-[7rem] object-cover"
                />
              </div>
              <h2 className="text-center text-xs md:text-lg font-cormorant uppercase mt-2">
                {image.name}
              </h2>
            </motion.div>
          </Link>
        ))}
      </Slider>
    </motion.div>
  );
}
