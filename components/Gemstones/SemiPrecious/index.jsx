'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { motion } from "framer-motion";

import YoutubeVideoModal from '@/components/YoutubeVideoModal';

import play from '@/assets/images/gemstones/play.png';

export default function SemiPrecious({ data }) {
  const [selectedGem, setSelectedGem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedGem(data[0]);
    }
  }, [data]);

  if (!selectedGem) return null;

  return (
    <>
      <div id="semi-precious" className="py-14 bg-light-primary overflow-hidden">
        <div className="container">
          <div className="px-0 lg:px-[50px]">
            <div className="flex flex-col lg:flex-row items-center gap-14">
              {/* Left Video/Image preview */}
              <div className="lg:w-6/12 w-full">
                <motion.div
                  key={selectedGem.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-[332px] overflow-hidden"
                >
                  <Image
                    src={getThumbnail(selectedGem)}
                    alt="Video preview"
                    fill
                    className="object-cover w-full h-full"
                  />
                  {/* Play button */}
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => setModalOpen(true)}
                  >
                    <Image
                      src={play}
                      alt="Play"
                      width={77}
                      height={77}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Right Content */}
              <div className="lg:w-6/12 w-full lg:pl-20 lg:pr-28">
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  Semi-precious gemstones
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  KGK Group offers large volumes of semi-precious gemstones at competitive prices.
                  You will appreciate the high quality of KGK stones, our excellent customer service
                  and outstanding overall value. Our huge selection includes:
                </motion.p>
              </div>
            </div>

            {/* Gemstone Thumbnails Slider */}
            <div className="mt-12">
              <Swiper
                loop={true}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 6 },
                  1280: { slidesPerView: 8 },
                }}
                className="!overflow-visible"
              >
                {data.map((gem) => (
                  <SwiperSlide key={gem.title}>
                    <div
                      className={`
                        relative
                        group
                        flex flex-col items-center justify-end
                        rounded-xl border border-[#d6d6d6]
                        overflow-hidden
                        backdrop-blur-md
                        transition-all duration-300 ease-in-out
                        hover:border-black/25 hover:scale-[1.025]
                        active:scale-[0.98]
                        px-4 py-3
                        cursor-pointer
                        ${selectedGem.title === gem.title ? 'border-black/30' : ''}
                      `}
                      onClick={() => setSelectedGem(gem)}
                    >
                      {/* Blurred BG */}
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={gem.image}
                          alt="bg"
                          fill
                          className="object-cover opacity-30 blur-md scale-110"
                        />
                        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
                      </div>

                      {/* Optional overlay for active */}
                      {selectedGem.title === gem.title && (
                        <div className="absolute inset-0 z-10 rounded-xl border-2 border-[#007aff]/20 pointer-events-none" />
                      )}

                      {/* Foreground Content */}
                      <motion.div
                        layout
                        className="w-full aspect-[3/2] relative mb-3 z-10"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={gem.image}
                          alt={gem.title}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </motion.div>
                      <p className="text-sm leading-[16px] text-heading font-medium text-center min-h-8 mt-2 flex items-end justify-center z-10">
                        {gem.title}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* <div className="mt-12">
              <Swiper
                loop={true}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 6 },
                  1280: { slidesPerView: 8 },
                }}
                className="!overflow-visible"
              >
                {data.map((gem, index) => (
                  <SwiperSlide key={gem.title}>
                    <div
                      className={`flex flex-col justify-end items-center cursor-pointer p-3 lg:p-2.5 border transition-all duration-300 hover:border-[#cdc7bb] ${
                        selectedGem.title === gem.title ? 'border-[#cdc7bb]' : 'border-transparent'
                      }`}
                      onClick={() => setSelectedGem(gem)}
                    >
                      <motion.div
                        layout
                        className="w-full aspect-[3/2] relative mb-2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={gem.image}
                          alt={gem.title}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                      <p className="text-[15px] leading-[16px] text-heading font-bold font-cardo text-center min-h-8 mt-2 flex items-end justify-center">
                        {gem.title}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> */}
          </div>
        </div>  
      </div>

      {modalOpen && selectedGem.youtube_video_id && (
        <YoutubeVideoModal
          youtubeId={extractYoutubeId(selectedGem.youtube_video_id)}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

// Helper to extract YouTube video ID from URL
function extractYoutubeId(url) {
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function getThumbnail(gem) {
  // 1. Use provided video thumbnail if available
  if (gem.video_thumbnail && gem.video_thumbnail.trim() !== '') {
    return gem.video_thumbnail;
  }

  // 2. Fallback to YouTube HD thumbnail if video ID is present
  const youtubeId = extractYoutubeId(gem.youtube_video_id);
  if (youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  }

  // 3. Fallback to normal image
  return gem.image;
}

