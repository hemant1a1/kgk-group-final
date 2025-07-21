'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.1, 0.25, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Transcending() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="px-0 lg:px-[50px]">
          {/* Header Section */}
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end gap-6 mb-7"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className="w-full lg:w-7/12"
              variants={fadeInUp}
              custom={0}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading lg:leading-[57px] max-w-2xl">
                At KGK Group, we have been{' '}
                <span className="font-bold text-primary">transcending boundaries</span>{' '}
                through our work and our quality.
              </h2>
            </motion.div>

            <motion.div
              className="w-full lg:w-5/12"
              variants={fadeInUp}
              custom={1}
            >
              <p className="lg:pl-9 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor laborum.
              </p>
            </motion.div>
          </motion.div>

          {/* Achievement Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.5 }}
          >
            {[
              { title: 'Achievement one' },
              { title: 'Achievement two' },
              { title: 'Achievement three' },
              { title: 'Achievement four' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-neutral-100 rounded-xl px-8 py-7"
                variants={fadeInUp}
                custom={index + 2}
              >
                <h4 className="font-bold text-sm text-heading mb-3">{item.title}</h4>
                <p className="text-sm text-heading leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
