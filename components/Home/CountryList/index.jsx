'use client';

import { Listbox } from '@headlessui/react';
import { ChevronDown } from 'lucide-react'; // Or use your inline SVG
import React from 'react';


const countries = [
  'USA', 'Brazil', 'Botswana', 'South Africa', 'India',
  'Belgium', 'Russia', 'Spain', 'UAE', 'China',
  'Australia', 'Thailand', 'Israel', 'Taiwan', 'Japan'
]

export default function CountryList({ selected, setSelected }) {
  const selectedCountryName = countries.find(
    (name) => name.toLowerCase().replace(/\s/g, '') === selected
  );

  return (
    <div className="text-sm pb-5 md:pb-12 max-w-7xl lg:max-w-6xl mx-auto">
      {/* Stylish Mobile Dropdown */}
      <div className="block sm:hidden px-4">
        <Listbox
          value={selectedCountryName || ''}
          onChange={(value) => setSelected(value.toLowerCase().replace(/\s/g, ''))}
        >
          <div className="relative">
            <Listbox.Button className="w-full bg-white/30 backdrop-blur-md border border-gray-300 text-white rounded-xl px-4 py-3 shadow-md flex justify-between items-center font-medium">
              <span>{selectedCountryName || 'Select a country'}</span>
              <ChevronDown className="w-5 h-5 text-gray-300" />
            </Listbox.Button>

            <Listbox.Options className="absolute z-50 mt-2 w-full bg-[#2c2c25] text-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto border border-gray-700 backdrop-blur-md">
              {countries.map((name) => {
                const key = name.toLowerCase().replace(/\s/g, '');
                return (
                  <Listbox.Option
                    key={key}
                    value={name}
                    className={({ active }) =>
                      `cursor-pointer px-4 py-2 ${
                        active ? 'bg-gray-700 text-white' : ''
                      }`
                    }
                  >
                    {name}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      {/* Desktop Button List */}
      <div className="hidden sm:flex sm:flex-wrap sm:justify-center sm:gap-y-7 sm:gap-x-8 lg:gap-x-5 text-center">
        {countries.map((name) => {
          const key = name.toLowerCase().replace(/\s/g, '')
          const isActive = selected === key
          return (
            <button
              key={key}
              onClick={() => setSelected(key)}
              onMouseEnter={() => setSelected(key)}
              className={`transition duration-200 font-medium text-[13.5px] basis-1/4 lg:basis-[12%] xl:basis-[10%] ${
                isActive ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              {name.toUpperCase()}
            </button>
          )
        })}
      </div>
    </div>
  )
}
