import Image from 'next/image'
import marker from '@/assets/images/marker.png'
import map from '@/assets/images/map.webp'

const locations = {
  india: { x: '68%', y: '45%', label: 'Jaipur\nMumbai' },
  usa: { x: '27.7%', y: '29%', label: 'New York\nSan Francisco' },
  brazil: { x: '32%', y: '62%', label: 'São Paulo\nRio de Janeiro' },
  botswana: { x: '53.5%', y: '65.5%', label: 'Gaborone' },
  southafrica: { x: '54.5%', y: '68.5%', label: 'Cape Town\nJohannesburg' },
  belgium: { x: '48.7%', y: '25.5%', label: 'Brussels' },
  russia: { x: '56%', y: '19.5%', label: 'Moscow\nSaint Petersburg' },
  spain: { x: '45.5%', y: '32%', label: 'Madrid\nBarcelona' },
  uae: { x: '62.8%', y: '43%', label: 'Dubai\nAbu Dhabi' },
  china: { x: '79.5%', y: '42%', label: 'Beijing\nShanghai' },
  australia: { x: '88.5%', y: '70.5%', label: 'Sydney\nMelbourne' },
  thailand: { x: '78.4%', y: '41.5%', label: 'Bangkok\nChiang Mai' },
  israel: { x: '57.5%', y: '39%', label: 'Tel Aviv\nJerusalem' },
  taiwan: { x: '80.5%', y: '42%', label: 'Taipei' },
  japan: { x: '84.7%', y: '34%', label: 'Tokyo\nOsaka' }
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
        >
          <Image src={marker} alt="marker" width={24} height={24} />
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
