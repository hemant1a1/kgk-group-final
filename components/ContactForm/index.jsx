'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DownArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactForm = () => {
  return (
    <div className="w-full bg-[linear-gradient(0deg,white_50%,#e2e2e2_50%)] pt-12 pb-6">
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center pb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-heading mb-2">Not sure who to contact?</p>
        <p className="text-lg text-heading mb-4">
          Complete and send the form and a KGK team member will reply as soon as possible:
        </p>

        <motion.div
          className="relative md:w-72 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <select
            className="w-full appearance-none pl-5 pr-10 py-2 rounded-full bg-[#8c7459] text-white text-sm border border-[#8c7459] focus:outline-none"
            defaultValue=""
          >
            <option disabled value="">
              HOW CAN WE HELP YOU?
            </option>
            <option value="info@kgkmail.com">General enquiry</option>
            <option value="media@kgkmail.com">Media/press enquiry</option>
            <option value="info@kgkmail.com">Partnership enquiry</option>
            <option value="hr@kgkmail.com">Career enquiry</option>
            <option value="enquiry.minhk@kgkmail.com">Mining</option>
            <option value="enquiry.gemhk@kgkmail.com">Precious and semi-precious gemstones</option>
            <option value="enquiry.diahk@kgkmail.com">Diamonds</option>
            <option value="enquiry.jewhk@kgkmail.com">Jewellery</option>
          </select>

          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <DownArrowIcon />
          </div>
        </motion.div>
      </motion.div>

      {/* Form Card */}
      <motion.div
        className="relative max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#2c2c25] text-white p-8 rounded-2xl shadow-lg">
          <motion.form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            {/* Left Side Inputs */}
            <motion.div className="space-y-4" variants={fadeUp}>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none placeholder-gray-300"
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none placeholder-gray-300"
              />
              <textarea
                placeholder="About yourself"
                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none placeholder-gray-300 resize-none"
                rows={3}
              />
            </motion.div>

            {/* Right Side Inputs */}
            <motion.div className="space-y-4" variants={fadeUp}>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none placeholder-gray-300"
              />
              <select className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none text-gray-300">
                <option value="">Location</option>
                <option>India</option>
                <option>Hong Kong</option>
                <option>USA</option>
              </select>
            </motion.div>

            {/* Submit Button */}
            <motion.div className="md:col-span-2 mt-4" variants={fadeUp}>
              <button
                type="submit"
                className="bg-[#8c7459] px-8 py-3 rounded-full font-bold text-white mx-auto block hover:opacity-90 transition"
              >
                SUBMIT
              </button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

// 🔹 Reusable animation config
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default ContactForm;
