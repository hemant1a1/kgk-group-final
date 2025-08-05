'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import img1 from '@/assets/images/diamond1.jpg';
import YoutubeVideoModal from '@/components/YoutubeVideoModal'; // <-- make sure this path is correct

const AlternatingVideoSections = () => {
  const [isOpen, setIsOpen] = useState(false);
  const youtubeId = 'J2i96vBtpnQ'; 

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
                onClick={() => setIsOpen(true)}
              >
                <Image
                  src={img1}
                  alt="Integrated Supply Pipeline"
                  className="rounded-xl shadow-lg"
                  placeholder="blur"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <PlayCircle size={64} className="text-white drop-shadow-lg hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Modal */}
      {isOpen && (
        <YoutubeVideoModal
          youtubeId={youtubeId}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AlternatingVideoSections;
