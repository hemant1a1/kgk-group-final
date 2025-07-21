'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import award1 from '@/assets/images/award1.jpg';
import award2 from '@/assets/images/award2.jpg';
import award3 from '@/assets/images/award3.jpg';

export default function EventsDetailPage() {
  return (
    <>
      <div className="w-full bg-primary py-10 text-center text-white">
        <div className="container">
          <motion.p
            className="text-sm md:text-base font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            21st February, 2022
          </motion.p>
          <motion.h1
            className="text-2xl md:text-4xl mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Lifetime Achievement Award
          </motion.h1>
          <motion.p
            className="text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            JWA Awards 2022
          </motion.p>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container">
          <div className="px-0 lg:px-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
              {[award1, award2, award3].map((img, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={img}
                    alt={`Award ${i + 1}`}
                    className="w-full h-60 object-cover object-[center_25%]"
                  />
                </motion.div>
              ))}
            </div>

            <motion.h2
              className="text-base md:text-lg lg:text-xl text-center mb-4 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              A lifetime of persistence and commitment gets recognized with the highest accolade.
            </motion.h2>
            <motion.p
              className="text-xs md:text-sm lg:text-base text-third text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              JWA felicitated Mr. Navrattan Kothari, Patriarch, KGK Group with Life Time Achievement Award on 21st February 2022 at an award ceremony held in Dubai.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
