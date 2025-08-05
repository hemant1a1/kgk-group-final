const countries = [
  'USA', 'Brazil', 'Botswana', 'South Africa', 'India',
  'Belgium', 'Russia', 'Spain', 'UAE', 'China',
  'Australia', 'Thailand', 'Israel', 'Taiwan', 'Japan'
]

export default function CountryList({ selected, setSelected }) {
  return (
    <div className="text-sm pb-5 md:pb-12 max-w-7xl lg:max-w-6xl mx-auto">
      {/* Stylish Mobile Dropdown */}
      <div className="block sm:hidden px-4">
        <div className="relative">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full appearance-none bg-white/30 backdrop-blur-md border border-gray-300 rounded-xl px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-white font-medium"
          >
            <option value="">Select a country</option>
            {countries.map((name) => {
              const key = name.toLowerCase().replace(/\s/g, '')
              return (
                <option key={key} value={key}>
                  {name}
                </option>
              )
            })}
          </select>

          {/* Chevron Icon */}
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
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
              className={`transition duration-200 font-cardo font-normal text-[13.5px] basis-1/4 lg:basis-[12%] xl:basis-[10%] ${
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
