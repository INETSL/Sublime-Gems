import React from "react";
import { motion } from "framer-motion";

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

export default function Detail() {
  return (
    <div>
      <div className="">
        {/* <motion.h1
                    className="text-2xl md:text-3xl font-cormorant mt-8"
                    variants={FadeRight(0.2)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: true }}
                >
                    Gemstone details
                </motion.h1> */}
      </div>

      <motion.div
        class="relative overflow-x-auto sm:rounded-lg mt-10 "
        variants={FadeRight(0.4)}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <table class="w-[21rem] md:w-[30rem] font-cormorant text-sm md:text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700 ">
              <th
                scope="row"
                class="px-6 py-4 w-20 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Gem Type
              </th>
              <td class="px-6 py-4">Test Test</td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 w-20 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Shape
              </th>
              <td class="px-6 py-4">Test Test</td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 w-20 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Weight (CT)
              </th>
              <td class="px-6 py-4">Test Test</td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 w-20 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Measurements
              </th>
              <td class="px-6 py-4">Test Test</td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 w-20 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Colour
              </th>
              <td class="px-6 py-4">Test Test</td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 w-20 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Clarity
              </th>
              <td class="px-6 py-4">Test Test</td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 w-20 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Treatment
              </th>
              <td class="px-6 py-4">Test Test</td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 w-20 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Origin
              </th>
              <td class="px-6 py-4">Test Test</td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 w-20 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Selection
              </th>
              <td class="px-6 py-4">Test Test</td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 w-20 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Price
              </th>
              <td class="px-6 py-4">Test Test</td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 w-20 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Item ID
              </th>
              <td class="px-6 py-4">Test Test </td>
            </tr>

            {/* <tr class="border-b border-gray-200 dark:border-gray-700">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                            >
                                Basic color
                            </th>
                            <td class="px-6 py-4">red</td>
                        </tr>

                        <tr class="border-b border-gray-200 dark:border-gray-700">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                            >
                                Custom jewelry
                            </th>
                            <td class="px-6 py-4">Ring, Pendant</td>
                        </tr> */}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
