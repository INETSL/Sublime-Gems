import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import stars from '../../assets/home/star.webp'

export default function Review() {
    return (
        <div className="px-[3rem] mb-20">
            <div className="flex flex-col  justify-center items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-5xl text-center font-castellar"
                >
                    Our Customers Love Us
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='text-xl font-cormorant'
                >
                    See what people are saying about us on
                    <Link to=" https://g.page/r/CZbS8fxiGI_9EBM/review">
                        <span className='text-blue-600 underline underline-offset-8'> Google </span>
                    </Link>
                    and
                    <Link to=" https://g.page/r/CZbS8fxiGI_9EBM/review">
                        <span className='text-blue-600 underline underline-offset-8'> Verified Reviews.</span>
                    </Link>

                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src={stars} alt="stars" className="w-[12rem] mt-[-3rem]" />
                </motion.div>
            </div>
        </div>
    )
}
