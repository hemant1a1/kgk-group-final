"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EventsMedia({ data }) {
  const allImages = data ?? [];
  console.log("EventsMedia Data:", allImages);
  const [mainImage, setMainImage] = useState(allImages[0]);

  const thumbnails = allImages.filter((img) => img.image !== mainImage?.image);

  return (
    <div className="relative bg-[#2F312E] text-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
        {/* Left Side - Image */}
        <div className="order-2 md:order-1 space-y-4">
          <div className="relative w-full min-h-[300px] h-[60vh] rounded-lg overflow-hidden">
            {mainImage?.image && (
              <Image
                src={mainImage.image}
                alt={mainImage?.title || "Main Event"}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="order-1 md:order-2 text-left space-y-6 flex flex-col justify-between">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white">
            Events & Media
          </h2>
          <div>
            <h3 className="text-3xl font-cardo max-w-md mb-6">
              {mainImage?.title}
            </h3>
            <p className="text-gray-300 max-w-xl">
              {mainImage?.short_description}
            </p>
          </div>
          <div>
            <button className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-300 transition">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Thumbnails */}
      <div className="container mt-16">
        <Swiper
          grabCursor={true}
          loop={false}
          speed={600}
          slidesPerView={4.5}
          spaceBetween={40}
          scrollbar={{
            el: ".custom-swiper-scrollbar",
            draggable: true,
          }}
          navigation={{
            nextEl: ".event-button-next",
            prevEl: ".event-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.5, // Mobile
            },
            640: {
              slidesPerView: 3.5, // Small tablets
            },
            768: {
              slidesPerView: 4, // Medium tablets
            },
            1024: {
              slidesPerView: 4.5, // Desktop
            },
          }}
          modules={[Navigation, Scrollbar]}
          className=""
        >
          {thumbnails.map((item, idx) => {
            const isActive = item.image === mainImage?.image;
            return (
              <SwiperSlide key={idx}>
                <div
                  onClick={() => setMainImage(item)}
                  className="relative w-full h-32 rounded-lg overflow-hidden cursor-pointer border"
                >
                  <Image
                    src={item.image}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className={`object-cover transition-all duration-300 ${
                      isActive ? "grayscale-0" : "grayscale hover:grayscale-0"
                    }`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Scrollbar + Navigation Buttons in one row */}
        <div className="flex items-center gap-12 mt-14 pr-32">
            <div className="flex-1 h-[5px] pt-[1px] relative overflow-hidden">
              <div className="custom-swiper-scrollbar h-[2px] bg-white/30 rounded-full" />
            </div>
            <div className="flex gap-2">
             <button className="event-button-prev w-10 h-10 border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition">
                <ChevronLeft size={20} />
              </button>
              <button className="event-button-next w-10 h-10 border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        
      </div>
    </div>
  );
}
