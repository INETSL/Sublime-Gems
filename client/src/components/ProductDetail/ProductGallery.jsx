import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
// Sample images (replace with your actual image imports)
import img1 from "../../assets/producs/gemone.jpg";
import img2 from "../../assets/producs/gemtwo.webp";
import img3 from "../../assets/producs/gemthree.webp";
import img4 from "../../assets/producs/gemfour.webp";
import img5 from "../../assets/producs/gemfive.webp";
import img6 from "../../assets/producs/history.jpg";
import video from "../../assets/producs/uu.mp4";

const items = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  video,
  "WantMoreSection", // Represents the "Want More Images or Video?" section
];

export default function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToItem = (index) => {
    setCurrentIndex(index);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const isVideo = (item) => typeof item === "string" && item.endsWith(".mp4");
  const isWantMoreSection = (item) => item === "WantMoreSection";

  return (
    <div className="flex flex-col items-center mt-10 md:mt-[12rem] md:ml-[-3rem]">
      {/* Main Item Display */}
      <div className="relative w-full max-w-md md:max-w-[38rem]">
        {isVideo(items[currentIndex]) ? (
          <video
            src={items[currentIndex]}
            controls
            className="w-full h-64 md:h-[20rem] object-cover rounded-lg shadow-lg"
          ></video>
        ) : isWantMoreSection(items[currentIndex]) ? (
          <div className="w-full h-64 md:h-[20rem] flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg">
            <div className="px-2 md:px-0">
              <h2 className="text-2xl md:text-3xl font-cormorant font-semibold">
                Want more images or video?
              </h2>
            </div>
            <div className="px-2 md:px-0">
              <p className="text-sm md:text-base text-center font-cormorant">
                Request additional images, videos & information from us for this
                item.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-5 mt-4 space-x-4">
              <div className="relative group">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center border-[1px] border-black text-sm text-gray-900 rounded-lg hover:bg-[#fcdfcc] shadow-lg hover:shadow-xl"
                >
                  <span className="font-cormorant px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
                    Make an Enquiry
                  </span>
                </motion.button>
              </div>
              <div className="relative group">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center border-[1px] border-black text-sm text-gray-900 rounded-lg hover:bg-[#fcdfcc] shadow-lg hover:shadow-xl"
                >
                  <span className="font-cormorant px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
                    Schedule Virtual Appointment
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        ) : (
          <img
            src={items[currentIndex]}
            alt={`Item ${currentIndex + 1}`}
            className="w-full h-64 md:h-[20rem] object-cover rounded-lg shadow-lg"
          />
        )}

        {/* Next and Previous Buttons */}
        <button
          onClick={prevItem}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextItem}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          <FaChevronRight />
        </button>

        {/* Fullscreen Button */}
        {!isWantMoreSection(items[currentIndex]) && (
          <button
            onClick={openFullscreen}
            className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            <FaExpand />
          </button>
        )}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex mt-4 space-x-2 overflow-x-auto p-2">
        {items.map((item, index) =>
          isVideo(item) ? (
            <video
              key={index}
              src={item}
              muted
              className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${
                index === currentIndex
                  ? "ring-2 ring-blue-500"
                  : "ring-1 ring-gray-300"
              }`}
              onClick={() => goToItem(index)}
            ></video>
          ) : isWantMoreSection(item) ? (
            <div
              key={index}
              onClick={() => goToItem(index)}
              className={`w-16 h-16 flex items-center justify-center bg-gray-200 rounded-lg cursor-pointer ${
                index === currentIndex
                  ? "ring-2 ring-blue-500"
                  : "ring-1 ring-gray-300"
              }`}
            >
              <span className="text-sm text-gray-600">
                <LuMessageSquareMore />
              </span>
            </div>
          ) : (
            <img
              key={index}
              src={item}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => goToItem(index)}
              className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${
                index === currentIndex
                  ? "ring-2 ring-blue-500"
                  : "ring-1 ring-gray-300"
              }`}
            />
          )
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-300"
          >
            <FaTimes />
          </button>

          {/* Fullscreen Item Display */}
          <div className="relative max-w-3xl w-full px-4">
            {isVideo(items[currentIndex]) ? (
              <video
                src={items[currentIndex]}
                controls
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              ></video>
            ) : (
              <img
                src={items[currentIndex]}
                alt={`Item ${currentIndex + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            )}
            <button
              onClick={prevItem}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextItem}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
