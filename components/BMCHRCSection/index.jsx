'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

import logo from '@/assets/images/bmchrc-logo.png';
import hospitalImg from '@/assets/images/bmchrc-hospital.jpg';
import oncologyImg from '@/assets/images/oncology.jpg';
import ipdImg from '@/assets/images/ipd.jpg';
import careImg from '@/assets/images/cancer-care.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const BMCHRCSection = () => {
  return (
    <section className="relative lg:pt-10 pb-16 lg:bg-[linear-gradient(180deg,_#fff5e7_50%,_#ffffff_50%)]">
      {/* ✅ Mobile View */}
      <div className="block lg:hidden bg-[#fff5e7] px-4 sm:px-6 pt-10 pb-2 mb-8">
        <div className="grid grid-cols-1 items-center gap-8 mb-10">
          {/* Text */}
          <div>
            <h2 className="text-[22px] text-heading font-myriad mb-4">
              Bhagwan Mahaveer Cancer Hospital & Research Centre (BMCHRC)
            </h2>
            <p className="text-[13px] leading-[25px] text-heading font-myriad">
              Established in 1997, Bhagwan Mahaveer Cancer Hospital & Research Centre (BMCHRC) in Jaipur...
            </p>
          </div>

          {/* Logo + Hospital Image */}
          <div className="relative w-full">
            <div className="w-32 h-32 absolute -top-[60px] -left-[20px]">
              <Image src={logo} alt="BMCHRC Logo" className="w-full h-full object-contain" />
            </div>
            <div className="h-64 overflow-hidden">
              <Image src={hospitalImg} alt="BMCHRC Hospital" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="container">
          <div className="px-0 lg:px-[50px]">
            {/* Top Grid */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Left Text */}
              <motion.div
                className="xl:max-w-xl"
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-[22px] lg:text-[33px] text-heading font-myriad mb-6 xl:pr-24">
                  Bhagwan Mahaveer Cancer Hospital & Research Centre (BMCHRC)
                </h2>
                <p className="text-[13px] lg:text-[15px] leading-[25px] tracking-[0px] text-heading font-myriad  xl:pr-16">
                  Established in 1997, Bhagwan Mahaveer Cancer Hospital & Research Centre (BMCHRC) in Jaipur stands as North India’s premier cancer treatment hospital. Recognized for its excellence in oncology care, BMCHRC is a NABH-accredited facility equipped with 350 beds and a comprehensive range of cancer treatment services. The hospital integrates cutting-edge medical advancements with compassionate care, ensuring holistic treatment for cancer patients.
                </p>
              </motion.div>

              {/* Right Logo + Hospital Image */}
              <motion.div
                className="relative flex flex-col items-start gap-4"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-80 h-80 absolute -top-[108px] -left-[28px]">
                  <Image src={logo} alt="BMCHRC Logo" className="w-full h-full object-contain" />
                </div>
                <div className="w-full h-80 overflow-hidden pl-40">
                  <Image src={hospitalImg} alt="BMCHRC Hospital" className="w-full h-full object-cover" />
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
              className="grid md:grid-cols-3 gap-8 lg:gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              {[ // Repeating cards in a loop to apply animation cleanly
                {
                  img: oncologyImg,
                  title: 'Advanced Oncology Services',
                  desc: 'BMCHRC offers a multidisciplinary approach to cancer care, bringing together expert oncologists, state-of-the-art medical technology, and personalized treatment plans.'
                },
                {
                  img: ipdImg,
                  title: 'State-of-the-Art Infrastructure',
                  desc: 'To further enhance patient care, BMCHRC has recently inaugurated a newly built seven-story In-Patient Department (IPD) block. This modern facility is designed to provide a comfortable and seamless treatment experience, ensuring that patients receive top-tier medical care in a compassionate environment.'
                },
                {
                  img: careImg,
                  title: 'Empowering Underprivileged Patients',
                  desc: 'In alignment with KGK Foundation’s commitment to accessible healthcare, BMCHRC actively supports financially challenged patients through its dedicated all-women Cancer Care wing. This initiative extends financial aid and emotional support to those who need it most, ensuring that no one is deprived of life-saving treatment due to financial constraints.'
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="custom-card1 relative bg-white rounded-[43px] overflow-hidden z-0 p-2.5"
                  variants={fadeInUp}
                >
                  <div className="relative w-full h-40 rounded-t-[43px] overflow-hidden">
                    <Image src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-8 px-4 lg:pr-11 pb-8">
                    <h3 className="text-[16px] lg:text-[21px] font-bold text-heading font-myriad mb-5">
                      {card.title}
                    </h3>
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

export default BMCHRCSection;
