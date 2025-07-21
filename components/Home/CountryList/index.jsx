const countries = [
  'USA', 'Brazil', 'Botswana', 'South Africa', 'India',
  'Belgium', 'Russia', 'Spain', 'UAE', 'China',
  'Australia', 'Thailand', 'Israel', 'Taiwan', 'Japan'
]

export default function CountryList({ selected, setSelected }) {
  return (
    <div className="flex flex-wrap justify-center gap-y-5 gap-x-16 max-w-5xl mx-auto text-sm pb-12">
      {countries.map((name) => {
        const key = name.toLowerCase().replace(/\s/g, '')
        const isActive = selected === key
        return (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`transition duration-200 font-cardo font-normal text-base ${
              isActive ? ' text-primary' : 'hover:text-primary'
            }`}
          >
            {name.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
