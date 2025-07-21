'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import marbleImg from '@/assets/images/stones-3.jpg';
import graniteImg from '@/assets/images/stones-4.jpg';
import quartziteImg from '@/assets/images/stones-5.jpg';

const NaturalStones = () => {
  return (
    <section className="relative w-full bg-[#33342f]">
      {/* 2-layer background */}
      <div className="hidden md:block absolute left-0 right-0 bottom-0 bg-white w-full h-48 lg:h-44 z-0" />

      {/* Content */}
      <div className="text-white text-center pt-10 pb-9 px-4">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Explore the Beauty of Natural Stones
        </motion.h2>
        <motion.p 
          className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-4xl mx-auto lg:px-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          From luxurious interiors to marvellous architectural designs, KGK Stones elevates the realm of real estate
          with an unmatched selection of:
        </motion.p>
      </div>

      {/* Cards overlapping background transition */}
      <div className="max-w-screen-xl mx-auto px-4 pb-9 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
        {[
          { img: marbleImg, title: 'Marbles', desc: 'Prized for their timeless appeal and natural veins.' },
          { img: graniteImg, title: 'Granite', desc: 'Celebrated for strength, resilience, and beauty.' },
          { img: quartziteImg, title: 'Quartzite', desc: 'Popular for its unique patterns and versatility.' },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <StoneCard {...card} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const StoneCard = ({ img, title, desc }) => (
  <div className="custom-card1 relative bg-white rounded-[43px] overflow-hidden text-center z-0 p-2.5">
    <div className="relative w-full h-44 rounded-t-[43px] overflow-hidden">
      <Image src={img} alt={title} fill className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-lg md:text-[24px] lg:text-[28px] text-heading mb-1">{title}</h3>
      <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-black px-7 max-w-sm mx-auto">{desc}</p>
    </div>
  </div>
);

export default NaturalStones;
