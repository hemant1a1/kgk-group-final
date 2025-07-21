'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { motion } from 'framer-motion';

import Image from 'next/image';
import residential from '@/assets/images/real-estate-1.jpg';
import commercial from '@/assets/images/real-estate-3.jpg';
import industrial from '@/assets/images/real-estate-2.jpg';

const slides = [
  { image: residential, title: 'Residential Projects' },
  { image: commercial, title: 'Commercial Buildings' },
  { image: industrial, title: 'Industrial Infrastructure' },
  { image: residential, title: 'Residential Projects' },
  { image: commercial, title: 'Commercial Buildings' },
  { image: industrial, title: 'Industrial Infrastructure' },
];

export default function RealEstateCarousel() {
  return (
    <section className="bg-[#fdf3e5] py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-6 mb-2">
            <div className="flex-grow border-t border-third"></div>
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-[36px] lg:leading-[46px] font-normal text-heading"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
                Distinguished Development Across Industries
            </motion.h2>
            <div className="flex-grow border-t border-third"></div>
        </div>

        <motion.p 
          className="text-sm lg:text-[15px] leading-[25px] tracking-[0px] text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          KGK Group develops landmark properties across a wide spectrum, delivering excellence in:
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="relative">

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 3000 }}
          centeredSlides={true}
          speed={600}
          slidesPerView={1.5}
          spaceBetween={56}
          className="real-swiper px-4 overflow-visible h-[510px] pointer-events-auto"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="relative"
            >
              <motion.p 
                className="mb-7 text-center text-base md:text-lg text-head"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {slide.title}
              </motion.p>  
              <div className="overflow-hidden w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  placeholder="blur"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Arrows aligned to center image edges */}
        <button
            onClick={() => {
            document.querySelector('.real-swiper')?.swiper?.slidePrev();
            }}
            className="pointer-events-auto absolute top-1/2 left-[15.5%] -translate-y-1/2 z-10 bg-white md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow hover:bg-white flex items-center justify-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <button
            onClick={() => {
            document.querySelector('.real-swiper')?.swiper?.slideNext();
            }}
            className="pointer-events-auto absolute top-1/2 right-[15.5%] -translate-y-1/2 z-10 bg-white md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow hover:bg-white flex items-center justify-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      
      </div>
    </section>
  );
}
