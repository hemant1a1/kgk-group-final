'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Blogs({ data = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="bg-light-primary md:px-12 py-16">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4">
              Our Blogs
            </h2>
            <p className="md:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Discover trends, styling tips, and insights from the world of fine jewellery.
            </p>
          </div>
          <button className="bg-primary text-white px-5 py-2 rounded-full text-sm">
            SEE ALL
          </button>
        </div>

        {/* Swiper Slider */}
        <div className="overflow-hidden">
          <Swiper
            loop={false}
            spaceBetween={20}
            slidesPerView="auto"
            modules={[Pagination]}
            className="group"
          >
            {data.map((post, index) => {
              const isActive = hoveredIndex === index;

              return (
                <SwiperSlide
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`
                    !w-[90%] md:!w-[28.50%]
                    transition-[width] duration-500 ease-in-out rounded-xl overflow-hidden cursor-pointer
                    ${isActive ? 'md:!w-[38.50%]' : ''}
                  `}
                >
                  <div className="relative h-[320px] md:h-[400px] w-full rounded-xl overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title || 'Blog Image'}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="pt-6 px-4 pb-6">
                    <Link
                      href="#"
                      className="text-xl font-normal text-black block mb-2"
                    >
                      {post.title?.replace(/\\'/g, "'")}
                    </Link>
                    <p className="text-sm text-gray-600">{post.short_description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
