'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

import award1 from '@/assets/images/awards/1.png';
import award2 from '@/assets/images/awards/2.jpg';
import award3 from '@/assets/images/awards/3.jpg';

const awardsData = [
  { id: 1, image: award1, title: 'Celebrating years of commitment',
    subtitle: 'at “Long Service Appreciation Event”, KGK Namibia', },
  { id: 2, image: award2, title: 'Celebrating years of commitment',
    subtitle: 'at “Long Service Appreciation Event”, KGK Namibia', },
  { id: 3, image: award3, title: 'Celebrating years of commitment',
    subtitle: 'at “Long Service Appreciation Event”, KGK Namibia', },
  { id: 4, image: award1, title: 'Celebrating years of commitment',
    subtitle: 'at “Long Service Appreciation Event”, KGK Namibia', },
  { id: 5, image: award2, title: 'Celebrating years of commitment',
    subtitle: 'at “Long Service Appreciation Event”, KGK Namibia', },
  { id: 6, image: award3, title: 'Celebrating years of commitment',
    subtitle: 'at “Long Service Appreciation Event”, KGK Namibia', },
  { id: 7, image: award1, title: 'Celebrating years of commitment',
    subtitle: 'at “Long Service Appreciation Event”, KGK Namibia', },
  { id: 8, image: award2, title: 'Celebrating years of commitment',
    subtitle: 'at “Long Service Appreciation Event”, KGK Namibia', },
];

const AwardsSwiper = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="
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
            loop={true}
            centeredSlides={true}
            spaceBetween={0}
            slidesPerView={5}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            navigation={{
              nextEl: '.award-button-next',
              prevEl: '.award-button-prev',
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4.2,
              },
            }}
            className="pb-16"
          >
            {data.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <SwiperSlide
                    key={index}
                    className={clsx(
                      'flex justify-center transition-all duration-300 ease-in-out',
                      isActive ? 'w-[320px] z-20 mx-[10px]' : 'w-[300px] z-10 px-[10px]'
                    )}
                  >
                  <div
                    className={clsx(
                      'transition-all duration-300 ease-in-out rounded-xl overflow-hidden',
                      isActive ? 'scale-100 z-20' : 'scale-100 z-10'
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
                            src={item.image}
                            alt={item.title}
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
                          <p className="font-cardo font-bold text-sm md:text-base lg:text-lg">{item.title}</p>
                          {item.subtitle && index === activeIndex && (
                            <>
                              <p className="font-light text-[15px] mt-1 px-16 mb-2">{item.subtitle}</p>
                              <ChevronRight size={42} strokeWidth={0.5} />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
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
};

export default AwardsSwiper;
