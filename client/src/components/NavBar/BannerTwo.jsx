import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BannerTwo() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="w-full flex justify-center items-center bg-[#9b9aa3] h-9"
          initial={{ opacity: 0, y: -50 }} // Start hidden and above
          animate={{ opacity: 1, y: 0 }} // Fade in and slide down
          exit={{ opacity: 0, y: -50 }} // Fade out and slide up
          transition={{ duration: 0.3 }} // Smooth transition
        >
          <h1 className="text-lg text-white font-cormorant">Banner Two</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
