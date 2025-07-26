'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import about2 from '@/assets/images/diamatric-1.jpg';

export default function DiamatricsSection() {
  return (
    <div className="relative pt-10 pb-6 md:pt-12 bg-white">
      <div className="container">
        <div className="px-0 lg:px-[50px] flex flex-col lg:flex-row items-center">

          {/* Left Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative w-full lg:w-[50%] mb-12 lg:mb-0 z-10 xl:pl-[50px]"
          >
            <Image src={about2} alt="about" className="w-full h-[240px]  md:h-[360px] object-cover rounded-2xl" />
          </motion.div>

          {/* Right Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-[50%] pl-0 lg:pl-20 md:pb-14 pr-0 xl:pr-14"
          >

            <p className="text-justify text-[15px] leading-[25px] mb-8 md:mt-6">
              At the forefront of materials science and precision engineering, <strong>KGK Diamatrix</strong> pioneers next-generation diamond solutions. Backed by the global legacy of the <strong>KGK Group</strong> and the technical expertise of <strong>Devangi Gems</strong>, we harness lab-grown diamonds to power innovation across critical industries—<strong>quantum technology, semiconductors, aerospace, healthcare,</strong> and beyond.
            </p>

            <p className="text-justify text-[15px] leading-[25px]">
              With sustainability, performance, and precision at our core, we’re redefining how the world sees diamonds—not as luxury, but as the future of advanced technology.
            </p>
          </motion.div>

        </div>
        
      </div>
      <div className="hidden md:block relative w-full h-px bg-[#79869e] bottom-8 z-0"></div>
    </div>
  );
}
