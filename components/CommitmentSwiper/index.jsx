'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import cm1 from '@/assets/images/cm-1.jpg';
import cm2 from '@/assets/images/cm-2.jpg';

const cards = [
  {
    image: cm1,
    text: 'At KGK Group, we are committed to using our business as a force for good, driving progress while honoring our responsibility.',
  },  
  {
    image: cm2,
    text: 'Guided by our vision and values, we remain focused on sustainable growth, community development, and the empowerment of our global workforce.',
  },
  {
    image: cm1,
    text: 'At KGK Group, we are committed to using our business as a force for good, driving progress while honoring our responsibility.',
  },
  {
    image: cm2,
    text: 'Ensuring our legacy is one of purpose, progress, and positive impact.',
  },
  {
    image: cm1,
    text: 'At KGK Group, we are committed to using our business as a force for good, driving progress while honoring our responsibility.',
  },
  {
    image: cm2,
    text: 'Guided by our vision and values, we remain focused on sustainable growth, community development, and the empowerment of our global workforce.',
  },
  {
    image: cm1,
    text: 'At KGK Group, we are committed to using our business as a force for good, driving progress while honoring our responsibility.',
  },
  {
    image: cm2,
    text: 'Ensuring our legacy is one of purpose, progress, and positive impact.',
  },
];


export default function CommitmentSwiper() {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full pt-8 pb-16 bg-white text-center">
      <div className="container">
        <div className="px-0 lg:px-[50px]">
            <h2 className="text-center text-4xl font-normal text-heading mb-12">
                KGK Group’s Commitment to Purpose and Progress
            </h2>

            <div className="relative w-full overflow-hidden">
                <Swiper
                    modules={[EffectCoverflow]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2.8}
                    loop={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    spaceBetween={-100}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1, // Balanced overlap
                        slideShadows: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 2.63 },
                    }}
                    className="max-w-4xl mx-auto overflow-hidden"
                >
                    {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[480px] md:h-[542px] rounded-3xl overflow-hidden shadow-xl mx-auto transition-all">
                            <Image
                                src={card.image}
                                alt="card"
                                fill
                                className={`object-cover transition-all duration-500 ${
                                    index === activeIndex ? 'grayscale-0' : 'grayscale'
                                    }`}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />

                                
                                {/* Text above the gradient mask */}
                                <div className="absolute bottom-0 left-0 right-0 z-[2]">
                                    {/* Gradient + Blur Overlay at bottom */}
                                    <div className=" h-full bg-gradient-to-t from-black to-gray/90 backdrop-blur-lg text-white text-sm md:text-base px-6 pt-4 pb-8">

                                    {card.text}
                                    </div>
                                </div>
                            </div>

                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
      </div>
    </section>
  );
}
