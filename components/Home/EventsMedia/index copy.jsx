"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import thumb1 from "@/assets/images/events/1.jpg";
import thumb2 from "@/assets/images/events/2.png";
import thumb3 from "@/assets/images/events/3.jpg";
import thumb4 from "@/assets/images/events/4.jpg";
import thumb5 from "@/assets/images/events/2.png";
import thumb6 from "@/assets/images/events/3.jpg";
import thumb7 from "@/assets/images/events/4.jpg";
import thumb8 from "@/assets/images/events/2.png";
import thumb9 from "@/assets/images/events/3.jpg";
import thumb10 from "@/assets/images/events/4.jpg";
import thumb11 from "@/assets/images/events/2.png";
import thumb12 from "@/assets/images/events/3.jpg";
import thumb13 from "@/assets/images/events/4.jpg";
import thumb14 from "@/assets/images/events/2.png";
import thumb15 from "@/assets/images/events/3.jpg";
import thumb16 from "@/assets/images/events/4.jpg";
import thumb17 from "@/assets/images/events/2.png";
import thumb18 from "@/assets/images/events/3.jpg";
import thumb19 from "@/assets/images/events/4.jpg";
import thumb20 from "@/assets/images/events/2.png";
import thumb21 from "@/assets/images/events/3.jpg";
import thumb22 from "@/assets/images/events/4.jpg";

const allImages = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8, thumb9, thumb10, thumb11, thumb12, thumb13, thumb14, thumb15, thumb16, thumb17, thumb18, thumb19, thumb20, thumb21, thumb22];

export default function EventsMedia() {
  const [mainImage, setMainImage] = useState(allImages[0]);

  const thumbnails = allImages.filter((img) => img.src !== mainImage.src);

  return (
    <div className="relative bg-[#2F312E] text-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
        {/* Left Side - Image */}
        <div className="order-2 md:order-1 space-y-4">
          <div className="relative w-full min-h-[300px] h-[60vh] rounded-lg overflow-hidden">
            <Image
              src={mainImage}
              alt="Main Event"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="order-1 md:order-2 text-left space-y-6 flex flex-col justify-between">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white">
            Events & Media
          </h2>
          <div>
            <h3 className="text-3xl font-cardo max-w-md mb-6">
              Celebrating a decade of partnership!
            </h3>
            <p className="text-gray-300 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
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
          {thumbnails.map((img, idx) => {
            const isActive = img.src === mainImage.src;
            return (
              <SwiperSlide key={idx}>
                <div
                  onClick={() => setMainImage(img)}
                  className={`relative w-full h-32 rounded-lg overflow-hidden cursor-pointer border transition-all ${
                    isActive
                      ? "border-white grayscale-0"
                      : "border-transparent grayscale hover:grayscale-0"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
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
