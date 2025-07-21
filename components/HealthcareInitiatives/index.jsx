'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const HealthcareInitiatives = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 xl:px-14">
        {/* Left Text Section */}
        <motion.div
          className="w-full lg:w-[42%]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-7"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            Expanding Access
            <span className="hidden lg:inline"><br /></span>
            <span className="inline lg:hidden"> </span>
            to Quality Healthcare
          </motion.h2>
          <motion.p
            className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-heading xl:max-w-sm lg:pr-12"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Believing that healthcare is a fundamental right, KGK Foundation actively works to
            bridge the gap in medical accessibility. Through strategic partnerships, infrastructure
            development, and specialized programs, the foundation enhances healthcare services,
            bringing modern treatments and expert care to underserved populations.
          </motion.p>
        </motion.div>

        {/* Right Boxes Section */}
        <div className="w-full lg:w-[58%] flex flex-col gap-4">
          {/* 1st Row */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full sm:w-[30%] bg-[#d4f1f9] rounded-lg p-8 text-lg lg:text-xl xl:text-2xl font-medium text-heading flex items-center justify-center">
              <div>
                Key
                <span className="hidden lg:inline"><br /></span>
                <span className="inline lg:hidden"> </span>
                Healthcare
                <span className="hidden lg:inline"><br /></span>
                <span className="inline lg:hidden"> </span>
                Initiatives:
              </div>
            </div>
            <motion.div
              className="w-full sm:w-[70%] bg-gray-100 rounded-lg p-8"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-sm lg:text-[15px] font-black text-heading mb-2">
                Medical Outreach Programs
              </h4>
              <p className="text-sm text-gray-700">
                Organizing free health check-ups, awareness drives, and diagnostic camps to promote
                early detection and prevention.
              </p>
            </motion.div>
          </motion.div>

          {/* 2nd Row */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-full sm:w-1/2 bg-gray-100 rounded-lg p-8"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-sm lg:text-[15px] font-black text-heading mb-2">
                Infrastructure & Equipment Support
              </h4>
              <p className="text-sm text-gray-700">
                Strengthening hospitals and clinics with modern technology and medical advancements.
              </p>
            </motion.div>

            <motion.div
              className="w-full sm:w-1/2 bg-gray-100 rounded-lg p-8"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-sm lg:text-[15px] font-black text-heading mb-2">
                Financial Aid for Treatments
              </h4>
              <p className="text-sm text-gray-700">
                Providing support to underprivileged patients, ensuring that financial constraints never
                stand in the way of critical healthcare.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareInitiatives;
