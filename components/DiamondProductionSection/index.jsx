'use client';

import Image from 'next/image';

import p1 from '@/assets/images/20555838084.png';
import p2 from '@/assets/images/84559165646.png';

export default function DiamondProductionSection() {
  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal mb-4">
            Diamond production innovation
          </h2>

          <p>
            In pursuit of superior products, KGK continually explores and applies new innovations to our diamond production process, including:
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-lg font-medium text-primary">
                DiaMark<sup>™</sup> laser marking
              </p>
              <p className="text-gray-700">Provenance for every stone.</p>
            </div>

            <div>
              <p className="text-lg font-medium text-primary">
                Galaxy<sup>™</sup> diamond mapping
              </p>
              <p className="text-gray-700">Advanced inclusion mapping technology for rough diamonds.</p>
            </div>

            <div>
              <p className="text-lg font-medium text-primary">
                Water jet laser cutting
              </p>
              <p className="text-gray-700">State-of-the-art stone cutting.</p>
            </div>
          </div>

          <p className="text-gray-700">
            The volumes we process translate into efficiencies of scale that deliver advantages throughout the value cycle.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="w-full aspect-[1/1] rounded-full overflow-hidden shadow-md">
            <Image
              src={p1}
              alt="Diamond Process 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full aspect-[1/1] rounded-full overflow-hidden shadow-md">
            <Image
              src={p2}
              alt="Diamond Process 2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
