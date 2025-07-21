'use client';

import { useState } from 'react'
import WorldMap from '@/components/Home/WorldMap'
import CountryList from '@/components/Home/CountryList'

export default function OurPresence() { 
   const [selected, setSelected] = useState('india')

  return (
    <div className="relative bg-secondary md:min-h-screen text-center text-white">
      <div className="container">
      <WorldMap selected={selected} setSelected={setSelected} />
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-white whitespace-nowrap relative -mt-14 mb-12">
          Our Presence
      </h2>
      <CountryList selected={selected} setSelected={setSelected} />
      </div>
    </div>
  )
}
