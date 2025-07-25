'use client';

import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

// Image imports
import gemstonesImg from '@/assets/images/business/gemstones.jpg';
import miningImg from '@/assets/images/business/mining.jpg';
import diamondsImg from '@/assets/images/business/diamonds.jpg';
import jewelleryImg from '@/assets/images/business/jewellery.jpg';
import retailImg from '@/assets/images/business/retail.jpg';
import realEstateImg from '@/assets/images/business/real-estate.jpg';
import stonesImg from '@/assets/images/business/stones.jpg';
import technologyImg from '@/assets/images/business/technology.jpg';
import hospitalityImg from '@/assets/images/business/hospitality.jpg';

const businessItems = [
  {
    key: 'diamonds',
    title: 'Diamonds',
    image: diamondsImg,
    description:
      'Natural, ethical, and exquisite—KGK diamonds reflect unmatched beauty, integrity, and transparency.',
  },
  {
    key: 'gemstones',
    title: 'Gemstones',
    image: gemstonesImg,
    description:
      'Over 120 years of gemstone legacy—brilliant colors, flawless cuts, and global trust define KGK’s exceptional collection.',
  },
  {
    key: 'mining',
    title: 'Mining',
    image: miningImg,
    description:
      'Ethically sourced from South America and Africa, KGK’s diamonds begin at the source—ensuring quality, authenticity, and sustainable practices.',
  },
  {
    key: 'jewellery',
    title: 'Jewellery',
    image: jewelleryImg,
    description:
      'Timeless elegance meets craftsmanship. KGK jewellery blends innovation with style and sophistication.',
  },
  {
    key: 'retail',
    title: 'Retail',
    image: retailImg,
    description:
      'From mine to boutique—Entice by KGK brings fine jewellery to life in Hong Kong SAR and India.',
  },
  {
    key: 'real-estate',
    title: 'Real Estate',
    image: realEstateImg,
    description:
      'Craftsmanship meets concrete. KGK extends its legacy to premium real estate development since 2010.',
  },
  {
    key: 'stones',
    title: 'Stones',
    image: stonesImg,
    description:
      'Nature’s finest marbles, granite, and quartzite—refined by KGK for timeless architectural beauty.',
  },
  {
    key: 'technology',
    title: 'Technology & Innovation',
    image: technologyImg,
    description:
      'Pioneering innovation with advanced technologies like MPCVD, laser cutting, and diamond coatings for high-performance solutions.',
  },
  {
    key: 'hospitality',
    title: 'Hospitality',
    image: hospitalityImg,
    description:
      'Blending tradition, innovation, and precision to offer luxurious dining experiences, redefining culinary excellence with impeccable service.',
  },
];


export default function OurBusiness({ data }) {
  const [active, setActive] = useState(data?.[0]);
  const [hovered, setHovered] = useState(null);
  const [justClicked, setJustClicked] = useState(false);

  const displayImage = hovered || active;

  return (
    <div className="md:min-h-screen bg-white py-4">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start lg:pl-10 gap-x-10 w-full mb-12">
            {/* Heading */}
            <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading whitespace-nowrap mb-4 lg:mb-0 lg:mt-0"
          >
            Business
          </motion.h2>

            {/* Paragraph + Line */}
            <div className="flex flex-col w-full relative lg:-right-14">
              {/* Single paragraph for mobile and tablet */}
              <p className="md:text-lg lg:text-xl leading-relaxed text-black max-w-4xl block lg:hidden">
                KGK Group stands out with its vertically integrated business model, seamlessly connecting the entire value chain from mines to retail. As a global leader in gemstones and diamonds, KGK Group provides exceptional quality to customers worldwide.
              </p>

              {/* Split paragraphs for large screens */}
              <div className="hidden lg:flex flex-col">
                <p className="md:text-lg lg:text-xl leading-relaxed text-black">
                  KGK Group leads with a vertically integrated model, connecting the entire value
                </p>
                <div className="flex items-center">
                  <p className="md:text-lg lg:text-xl leading-relaxed text-black">
                    chain from mines to retail, delivering exceptional quality globally.
                  </p>
                  <div className="flex-grow h-0.5 bg-light-gray ml-14" />
                </div>
              </div>
            </div>

        </div>



        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Large Preview */}
            <div
            className="block relative w-full h-[420px] lg:h-[500px] overflow-hidden shadow-lg lg:col-span-1"
            
            >
            <AnimatePresence mode="wait">
                <motion.div
                key={displayImage.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
                >
                <Image
                    src={displayImage.image}
                    alt={displayImage.title}
                    fill
                    className="object-cover scale-[1.1] object-[-20px] transition-transform"
                />
                <div className="absolute inset-0 pb-6 flex flex-col justify-end text-white bg-gradient-to-t from-black to-black/30">
                    <h3 className="text-[22px] tracking-[9px] uppercase font-normal px-6 lg:px-11">
                    {displayImage.title.toUpperCase()}
                    </h3>
                    <p className="mt-3 pl-6 lg:pl-11 pr-6 lg:pr-[60px] text-lg">{displayImage.short_description}</p>
                    <button className="mx-6 lg:mx-11 mt-5 mb-2 px-5 py-2 bg-white text-black font-light text-sm uppercase tracking-widest rounded-full w-fit hover:bg-gray-200 transition">
                    Discover More
                    </button>
                </div>
                </motion.div>
            </AnimatePresence>
            </div>

            {/* Small Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {data
            .filter((item) => item.title !== active?.title)
                .map((item) => (
                <button
                    key={item.title.replace(/\s+/g, '-').toLowerCase()}
                    onClick={() => {
                      setActive(item);
                      setHovered(null);
                      setJustClicked(true);
                      // ✅ Reset justClicked after a delay to avoid stuck state
                      setTimeout(() => {
                        setJustClicked(false);
                      }, 100);
                    }}
                    onMouseEnter={() => {
                      if (!justClicked && item.title !== active?.title) {
                        setHovered(item);
                      }
                    }}
                    onMouseLeave={() => {
                      setHovered(null);
                    }}
                    className={classNames(
                    'relative w-full h-[220px] lg:h-full overflow-hidden hover:opacity-80 transition cursor-pointer'
                    )}
                >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="block lg:hidden w-full h-full object-cover"
                    />
                    <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="hidden lg:block w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-end justify-center">
                    <span className="text-white font-normal text-base tracking-widest text-center px-2 pb-6">
                        {item.title.toUpperCase()}
                    </span>
                    </div>
                </button>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
