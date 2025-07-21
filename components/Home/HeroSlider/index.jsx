"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slides from "./slides";

export default function HeroSlider({ data }) {
  return (
    <section className="w-full h-[93vh] relative bg-black">
      <Swiper
        spaceBetween={0}
        grabCursor={true}
        effect="coverflow"
        speed={1000}
        loop={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
          scale: 0.5,
        }}
        className="h-full w-full"
      >
        {data?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6 text-white max-w-2xl pt-4">
                  <div className="text-lg md:text-xl lg:text-3xl tracking-widest uppercase mb-7 mt-16">{slide.title}</div>
                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4 pb-2">
                    {slide.subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
