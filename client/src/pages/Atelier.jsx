import React from 'react';
import bg from '../assets/services/bsds.png';
import { motion } from "framer-motion";

export default function Atelier() {
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
        }}>

            {/* Overlay with semi-transparent black background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}></div>

            <div className='p-[2rem] md:p-[7rem]'>
                <div className="flex flex-col justify-center items-center bg-white opacity-70 z-10 relative rounded-xl">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-5xl font-castellar pt-16 pb-8 text-center"
                        >
                            Welcome to a world where creativity knows no bounds!
                        </motion.h1>
                    </div>

                    <div className='px-[2rem] md:px-[10rem] pb-[3rem] font-cormorant text-xl md:text-2xl text-center'>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className='mb-3'
                        >SUBLIME Jewellery Atelier is located in Bangkok, Thailand. We create jewellery for clients worldwide.</motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }}
                            className='mb-3'
                        >Our passionate team of artisans is dedicated to crafting bespoke jewellery that captivates hearts and tells stories. With a dazzling array of precious, semi-precious gemstones and diamonds, we are capable of bringing your dream designs to life.</motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >Our goal is to create a unique, personalized jewellery that meets your exact specifications and exceeds your expectations in every way!</motion.p>
                    </div>
                </div>
            </div>

        </div>
    )
}
