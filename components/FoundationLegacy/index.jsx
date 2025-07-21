'use client';

import Image from 'next/image';
import heritageBg from '@/assets/images/heritage.jpg'; // Replace with your actual image path

const FoundationLegacy = () => {
  return (
    <section className="relative w-full h-[82vh] min-h-[420px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={heritageBg}
        alt="Legacy Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-start h-full px-4 py-12 text-center text-white max-w-4xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-8">
          A Legacy of Impact
        </h2>
        <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide">
          KGK Foundation remains steadfast in its mission to uplift lives, preserve traditions, and drive sustainable
          progress. Through its five pillars: Healthcare, Education, Skill Development, Art & Culture, and Heritage
          Conservation, the foundation continues to create meaningful change, empowering individuals and strengthening
          communities for a brighter future.
        </p>
      </div>
    </section>
  );
};

export default FoundationLegacy;
