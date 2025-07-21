'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import event1 from '@/assets/images/event1.jpg';
import event2 from '@/assets/images/event2.jpg';
import event3 from '@/assets/images/event3.jpg';

const categories = ['All', 'Healthcare', 'Gemstone', 'Mining', 'Jewelry', 'Retail', 'Realty'];

const events = [
  {
    image: event1,
    title: 'Kgk Group opens diamond factory Botswana',
    category: 'Healthcare',
  },
  {
    image: event2,
    title: "''The Pride of Rajasthan'' awards by Dainik Bhaskar, Jaipur",
    category: 'Gemstone',
  },
  {
    image: event3,
    title: 'Diamond Manufacturer of the year Award',
    category: 'Mining',
  },
  {
    image: event1,
    title: 'Kgk Group opens diamond factory Botswana',
    category: 'Jewelry',
  },
  {
    image: event2,
    title: "''The Pride of Rajasthan'' awards by Dainik Bhaskar, Jaipur",
    category: 'Retail',
  },
  {
    image: event3,
    title: 'Diamond Manufacturer of the year Award',
    category: 'Realty',
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function EventsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEvents =
    activeCategory === 'All'
      ? events
      : events.filter((event) => event.category === activeCategory);

  return (
    <div className="py-12 bg-light-primary">
      <div>
        {/* Title */}
        <motion.h2
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          More from the Events
        </motion.h2>

        {/* Category Tabs */}
        <motion.div
          className="flex justify-center flex-wrap gap-3 md:gap-6 border-b border-primary mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                'px-3 pb-1 border-b-2 transition',
                activeCategory === cat
                  ? 'font-bold border-primary text-primary'
                  : 'font-medium border-transparent text-heading hover:text-primary'
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="container">
          <div className="px-0 lg:px-[50px]">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-7"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={activeCategory} 
            >
              {filteredEvents.map((event, index) => (
                <motion.div key={index} variants={cardVariants} className="space-y-2">
                  <div className="overflow-hidden rounded-md">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={280}
                      height={300}
                      className="rounded-lg w-full h-60 lg:h-44 object-cover object-top"
                    />
                  </div>
                  <p className="text-base text-third max-w-xs">{event.title}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More */}
            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <button className="cursor-pointer px-4 py-1.5 text-xs font-medium bg-primary uppercase text-white rounded-full">
                LOAD MORE
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
