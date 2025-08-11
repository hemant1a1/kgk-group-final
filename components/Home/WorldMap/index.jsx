import Image from 'next/image'
import marker from '@/assets/images/marker.png'
import map from '@/assets/images/map.webp'

const locations = {
  india: { x: '68%', y: '45%', label: 'Jaipur\nMumbai' },
  usa: { x: '18.7%', y: '32%', label: 'New York' },
  brazil: { x: '31.5%', y: '69%', label: 'Sao Paulo' },
  botswana: { x: '53.5%', y: '65.5%', label: 'Gaborone' },
  southafrica: { x: '55%', y: '69%', label: 'Johannesburg' },
  belgium: { x: '48.7%', y: '25.5%', label: 'Antwerp' },
  russia: { x: '74%', y: '19.5%', label: 'Moscow\nSaint Petersburg' },
  spain: { x: '45.5%', y: '32%', label: 'Madrid\nBarcelona' },
  uae: { x: '62.8%', y: '43%', label: 'Dubai' },
  china: { x: '76.5%', y: '38%', label: 'Panyu\nShanghai\nShenzhen' },
  australia: { x: '85.5%', y: '69.5%', label: 'Sydney\nMelbourne' },
  thailand: { x: '74.4%', y: '48.5%', label: 'Bangkok' },
  israel: { x: '57.5%', y: '39%', label: 'Tel Aviv\nJerusalem' },
  taiwan: { x: '80%', y: '42%', label: 'Taipei' },
  japan: { x: '85.7%', y: '34%', label: 'Tokyo' }
}


export default function WorldMap({ selected, setSelected }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-[16/9]">
      <Image src={map} alt="World Map" fill className="object-contain object-top" priority />

      {Object.entries(locations).map(([key, loc]) => (
        <div
          key={key}
          className="absolute z-10 cursor-pointer"
          style={{
            left: loc.x,
            top: loc.y,
            transform: 'translate(-50%, -100%)'
          }}
          onClick={() => setSelected(key)}
          onMouseEnter={() => setSelected(key)}
        >
          {selected === key ? (
            <div className="block sm:hidden">
              <svg width="14" height="14">
                <circle
                  r="4"
                  cx="7"
                  cy="7"
                  fill="#F53"
                  stroke="#FFF"
                  strokeWidth="1"
                  className="pulse-dot"
                />
              </svg>
            </div>
          ) : (
            <div className="block sm:hidden">
              <svg width="10" height="10">
                <circle
                  r="3"
                  cx="5"
                  cy="5"
                  fill="#999"
                  stroke="#FFF"
                  strokeWidth="1"
                />
              </svg>
            </div>
          )}

          <div className="hidden sm:block">
            {/* Desktop image marker */}
            <Image src={marker} alt="marker" width={24} height={24} className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          {selected === key && loc.label && (
            <div className="absolute bottom-7 left-full -translate-x-1/2 bg-white text-black font-cardo font-normal text-xs  px-2 py-1 rounded shadow whitespace-pre text-left">
              {loc.label}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
