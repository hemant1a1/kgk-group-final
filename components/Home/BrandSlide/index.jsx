'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from "next/link";

// Image imports from assets/images
import MartinFlyerBlack from '@/assets/images/martin-flyer-black.png';
import MartinFlyerWhite from '@/assets/images/martin-flyer-white.png';
import EnticeBlack from '@/assets/images/entice-black.png';
import EnticeWhite from '@/assets/images/entice-white.png';
import GreggRuthBlack from '@/assets/images/gregg-ruth-black.png';
import GreggRuthWhite from '@/assets/images/gregg-ruth-white.png';

import BgMartinFlyer from '@/assets/images/bg-martin-flyer.jpg';
import BgEntice from '@/assets/images/bg-entice.jpg';
import BgGreggRuth from '@/assets/images/bg-gregg-ruth.jpg';

const brands = [
  {
    name: 'Martin Flyer',
    logoBlack: MartinFlyerBlack,
    logoWhite: MartinFlyerWhite,
    bgImage: BgMartinFlyer,
    url: 'https://www.kgkgroup.com/jewellery-operations-oem-oed/#martin-flyer',
  },
  {
    name: 'Entice',
    logoBlack: EnticeBlack,
    logoWhite: EnticeWhite,
    bgImage: BgEntice,
    url: 'https://www.kgkgroup.com/retail/',
  },
  {
    name: 'GREGG RUTH',
    logoBlack: GreggRuthBlack,
    logoWhite: GreggRuthWhite,
    bgImage: BgGreggRuth,
    url: 'https://www.kgkgroup.com/jewellery-operations-oem-oed/#gregg-ruth',
  },
];

export default function BrandSlide() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
   const [mobileIndex, setMobileIndex] = useState(0);

  return (
    <div className="w-full flex items-center justify-center py-12">
      <div className="flex flex-col md:flex-row w-full md:min-h-[390px] md:h-[60vh] bg-light-gray overflow-hidden">
        {/* Left: Title Section */}
        <div className="w-full md:w-[33%] p-[50px] flex items-center justify-start text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading">
          KGK Brands
        </div>

        {/* Right: Brand Grid */}
        <div className="w-full md:w-[66.98%] hidden md:grid grid-cols-3">
          {brands.map((brand, i) => {
            const isActive = hoveredIndex === i || (hoveredIndex === null && i === 1);

            return (
              <Link
                key={i}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden cursor-pointer flex items-center justify-center group transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image Slide */}
                <div
                  className={clsx(
                    'absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out z-10',
                    isActive ? 'translate-x-0' : 'translate-x-full'
                  )}
                >
                  <Image
                    src={brand.bgImage}
                    alt={`${brand.name} background`}
                    fill
                    className="object-cover"
                  />
                  
                </div>

                {/* Brand Logo */}
               <Image
                  src={brand.logoBlack}
                  alt={brand.name}
                  width={400}
                  height={220}
                  priority
                  quality={100}
                  className={clsx(
                    'z-20 w-[280px] h-auto object-contain transition-[filter] duration-500 ease-in-out',
                    isActive && 'invert'
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:hidden px-4">
          {brands.map((brand, index) => (
            <Link 
              key={index}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-[280px] rounded overflow-hidden"
            >
              {/* Background Image */}
              <Image
                src={brand.bgImage}
                alt={`${brand.name} background`}
                fill
                className="object-cover transition-all duration-500"
              />
              
              {/* Logo Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40">
                <Image
                  src={brand.logoWhite}
                  alt={brand.name}
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>


      </div>
    </div>
  );
}
