'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const getVisibleAwards = (data) => {
  if (!data || data.length === 0) return [];

  if (data.length === 1) {
    return Array(6).fill(data[0]);
  } else if (data.length === 2) {
    return [...data, ...data.slice(0, 1)];
  } else if (data.length < 5) {
    const repeated = [...data];
    let i = 0;
    while (repeated.length < 5) {
      repeated.push(data[i % data.length]);
      i++;
    }
    return repeated;
  } else {
    return data;
  }
};

export default function Awards({ data = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleAwards = getVisibleAwards(data);

  const isLoop = data.length >= 5;

  return (
    <div>
      <div
        className="
          bg-white 
          relative
          py-12
          container-after
        "
      >
        <div className="text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white my-12">Awards</h2>

          <Swiper
              modules={[Navigation]}
              slidesPerView="auto"
              spaceBetween={15}
              centeredSlides
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              navigation={{
                nextEl: '.award-button-next',
                prevEl: '.award-button-prev',
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1, 
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 'auto',
                  centeredSlides: true,
                },
              }}
              className="pb-16"
            >
             {visibleAwards.map((award, index) => (
                <SwiperSlide key={index}
                  className={clsx(
                    'w-full transition-all duration-300 mx-auto',
                    index === activeIndex
                      ? 'sm:max-w-[379px]'
                      : 'sm:max-w-[320px]',
                  )}
                >
                  <div
                    className={clsx(
                      'h-full',
                      index === activeIndex ? '' : 'pt-12'
                    )}
                  >
                    {/* Outer Background Box */}
                    <div 
                      className={clsx(
                        ' rounded-xl',
                        index === activeIndex ? 'relative center-card-after' : 'bg-mid-gray px-3 pt-12'
                      )}
                    >
                      {/* Image Box */}
                      <div 
                        className={clsx(
                          'relative w-full h-[250px]',
                          index === activeIndex ? 'relative' : '-mt-24'
                        )}
                      >
                        <Image
                          src={award.image}
                          alt={award.title}
                          fill
                          className={clsx(
                            'object-cover rounded-xl',
                            index === activeIndex ? 'mx-auto' : ''
                          )}
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      {/* Text Box inside dark background */}
                      <div className="px-4 pt-2 pb-2 text-black text-center flex flex-col items-center justify-center">
                        <p className="font-cardo font-bold text-sm md:text-base lg:text-lg">{award.title}</p>
                        {award.subtitle && index === activeIndex && (
                          <>
                            <p className="font-light text-[15px] mt-1 px-16 mb-2">{award.subtitle}</p>
                            <ChevronRight size={42} strokeWidth={0.5} />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

           
            
        </div>
      </div>

       {/* Navigation Arrows */}
        <div className="relative flex justify-center mt-1 gap-4 z-10">
          <button className="award-button-prev border p-2 border-black bg-white flex items-center justify-center w-12 h-12">
            <ChevronLeft size={32} strokeWidth={1} />
          </button>
          <button className="award-button-next border p-2 border-black bg-white flex items-center justify-center w-12 h-12">
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div>

    </div>
  );
}
