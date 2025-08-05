'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { PlayCircle } from 'lucide-react';
import YoutubeVideoModal from '@/components/YoutubeVideoModal';

const AlternatingVideoSections = ({
  title,
  description,
  image,
  youtubeId,
}) => {
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
                  {title}
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Image Thumbnail with Play Icon */}
              <div
                className="w-full md:w-1/2 mb-10 lg:mb-0 relative overflow-hidden group cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <Image
                  src={image}
                  alt={title}
                  className="rounded-xl shadow-lg"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-black/60 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <PlayCircle size={64} className="text-white drop-shadow-lg hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
