'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

import { motion } from "framer-motion";

export default function Breadcrumb({ heading, subheading, bgImage, showDivider = false }) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const formatSegment = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');

  return (
    <div
      className="relative text-white h-[89.90vh] bg-cover bg-top px-6 pt-14 pb-6 "
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="flex flex-col justify-between items-center text-center md:max-w-xl lg:max-w-6xl mx-auto h-full">
        {/* Centered Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          {subheading && (
            <motion.p 
              className="text-base md:text-xl lg:text-2xl tracking-wide uppercase text-white mb-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >{subheading}</motion.p>
          )}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl leading-tight font-normal"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >{heading}</motion.h1>

          {showDivider && <div className="w-28 h-0.5 bg-primary mt-8"></div>}
        </div>
        {/* Bottom Breadcrumb */}
        <div className="mt-4 mb-7">
          <div className="flex flex-wrap justify-center items-center gap-1 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] tracking-[0.5px] sm:tracking-[0.75px] md:tracking-[1px] uppercase text-white uppercase">
            <Link href="/" className="hover:text-white">Home</Link>
            {segments.map((seg, index) => {
              const href = '/' + segments.slice(0, index + 1).join('/');
              const isLast = index === segments.length - 1;

              return (
                <div key={href} className="flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  {isLast ? (
                    <span className="text-white">{formatSegment(seg)}</span>
                  ) : (
                    <Link href={href} className="hover:text-white">
                      {formatSegment(seg)}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
