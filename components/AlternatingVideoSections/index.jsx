'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, X } from 'lucide-react';
import img1 from '@/assets/images/diamond1.jpg';

const AlternatingVideoSections = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <section className="py-8 bg-white relative z-10">
        <div className="container">
            <div className="px-0 lg:px-[50px]">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-x-16">
                {/* Text */}
                <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-3xl text-gray-800">
                    Integrated Supply Pipeline: From Rough to Radiant
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                    KGK Group ensures full control over the supply chain by carrying only high-quality diamonds. Each diamond is meticulously tracked from its raw form to the finished product, reinforcing the brand’s commitment to sustainable gemstone sourcing and ethical practices.
                </p>
                </div>

                {/* Image Thumbnail with Play Icon */}
                <div
                  className="w-full md:w-1/2 mb-10 lg:mb-0 relative overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img1}
                    alt="Integrated Supply Pipeline"
                    className="rounded-xl shadow-lg"
                    placeholder="blur"
                  />

                  {/* Dark overlay for better contrast */}
                  {/* <div className="absolute inset-0 left-0 right-0 bg-black/50 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-10" /> */}

                  {/* Play icon centered */}
                  {/* <div className="absolute inset-0 flex items-center justify-center z-20">
                    <PlayCircle size={64} className="text-white drop-shadow-lg hover:scale-110 transition-transform" />
                  </div> */}
                </div>


            </div>
            </div>
        </div>

        

        </section>
        {/* Popup Modal */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99999] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                <motion.div
                    className="relative w-full max-w-4xl aspect-video"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                >
                    {/* Close Button - ensure it has pointer events and is not under the video */}
                    <button
                    className="absolute top-2 right-2 z-50 bg-white/90 rounded-full p-1 pointer-events-auto"
                    onClick={() => setIsOpen(false)}
                    >
                    <X size={24} />
                    </button>

                    {/* Video container with pointer-events-none around the corners */}
                    <div className="w-full h-full relative z-40">
                    <video
                        controls
                        autoPlay
                        className="w-full h-full rounded-xl shadow-lg object-cover"
                    >
                        <source src="/videos/minifilm-diamonds.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
    </>
  );
};

export default AlternatingVideoSections;
