'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import healthcareImg from '@/assets/images/healthcare-1.jpg'; 

const HealthcareSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-stretch bg-forth text-white">
      <motion.div 
        className="w-full lg:w-1/2 h-72 lg:h-auto relative"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Image
          src={healthcareImg}
          alt="KGK Foundation - Healthcare"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="w-full lg:w-1/2 px-6 py-10 lg:py-[138px] lg:px-12 lg:pr-[100px] flex items-center">
        <div>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white mb-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Advancing Medical Care, Transforming Lives
          </motion.h2>
          <motion.p 
            className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-lg lg:pr-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            KGK Foundation is dedicated to ensuring that life-saving treatments, advanced medical care, 
            and compassionate support reach those who need them the most. Through a commitment to medical 
            excellence and accessibility, the foundation drives impactful healthcare initiatives that uplift 
            communities and create a healthier future.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSection;
