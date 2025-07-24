'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';


import planetImg from '@/assets/images/planet.jpg';
import esg1 from '@/assets/images/esg-1.jpg';
import esg2 from '@/assets/images/esg-2.jpg';
import esg3 from '@/assets/images/esg-3.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ESGSection = ({ data = [] }) => {
  return (
    <section className="relative pt-10 pb-8 lg:bg-[linear-gradient(180deg,_#fff5e7_60%,_#ffffff_40%)]">
      <div>
        <div className="container">
          <div className="px-0 lg:px-[50px]">
            {/* Top Grid */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-[44%_56%] gap-y-8 gap-x-8 lg:gap-x-14 items-center lg:pl-20 lg:pr-14 mb-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Left Text */}
              <motion.div
                className="lg:max-w-sm"
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
              >
                <p className="text-[13px] lg:text-[15px] leading-[25px] tracking-[0px] text-heading font-myriad">
                  At KGK, our journey toward sustainability reflects a deep commitment to shaping a better future. Through innovation and purposeful action, we ensure that every diamond we offer is not just a symbol of beauty, but also of responsibility, ethics, and care for the planet.
                </p>
              </motion.div>

              {/* Right Logo + Hospital Image */}
              <motion.div
                className="relative flex flex-col items-start gap-4"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-full h-60 overflow-hidden">
                  <Image src={planetImg} alt="esg" className="w-full h-full object-cover rounded-3xl" />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
        <div className="container">
          <div className="px-0 lg:px-[50px]">
            {/* 3 Cards */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 xl:gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              {data.length > 0 && data.map((card, i) => (
                <motion.div
                  key={i}
                  className="custom-card1 relative bg-white rounded-[43px] overflow-hidden z-0 p-2.5"
                  variants={fadeInUp}
                >
                  <div className="relative w-full h-40 rounded-t-[43px] overflow-hidden">
                     <Image
                        src={card.image}
                        alt="esg"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                  </div>
                  <div className="px-6 lg:pr-8 py-6">
                    <p className="text-[13px] lg:text-[15px] leading-[25px] tracking-[0px] text-heading font-myriad">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
    </section>
  );
};

export default ESGSection;
