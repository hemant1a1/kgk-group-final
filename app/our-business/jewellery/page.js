
import Breadcrumb from '@/components/Breadcrumb';
import AlternatingSections from '@/components/Diamonds/AlternatingSections';
import SourcingWorld from '@/components/Diamonds/SourcingWorld';
import GemstoneManufacturing from '@/components/Diamonds/GemstoneManufacturing';
import DistributionMap from '@/components/Gemstones/DistributionMap';
import Contact from '@/components/Diamonds/Contact';
import Image from 'next/image';

import bgImage from '@/assets/images/banners/jewellery-banner-1.jpg';
import contactBg from '@/assets/images/jewellery-contacts.jpg';
import gemstoneBg from '@/assets/images/The-KGK-Difference-3.jpg';
import worldImg from '@/assets/images/gemstones/around-world.png';

import craftsmanshipImg from '@/assets/images/jewellery-craftsmanship.jpg';

import img1 from "@/assets/images/diamond1.jpg";
import img2 from "@/assets/images/diamond2.jpg";
import img3 from "@/assets/images/diamond3.jpg";

const sectionsData = [
  {
    title: "Integrated Supply Pipeline: From Rough to Radiant",
    description:
      "KGK Group ensures full control over the supply chain by carrying only high-quality diamonds. Each diamond is meticulously tracked from its raw form to the finished product, reinforcing the brand’s commitment to sustainable gemstone sourcing and ethical practices.",
    image: img1,
    reverse: false,
  },
  {
    title: "A Legacy of Expertise",
    description:
      "Since entering diamond distribution in 1969 and manufacturing finished diamonds in 1986, KGK Group has built a reputation for precision and excellence. Headquartered in Antwerp, the global diamond capital, the brand’s operations and processes are streamlined based on the same values at various locations around the world.",
    image: img2,
    reverse: true,
  },
  {
    title: "Unmatched Quality and Choice",
    description:
      "KGK Group’s diamond portfolio features an extraordinary range of natural, colorless, and colored stones in every popular size, shape, and shade, reflecting versatility and innovation.",
    image: img3,
    reverse: false,
  },
];

export default function Jewellery() {
  return (
    <>
      <Breadcrumb
        heading="Jewellery"
        subheading="Stunning Masterpieces"
        bgImage={bgImage}
      />
      <section className="py-20 bg-white">
        <div className="container">
        <div className="px-0 lg:px-[50px]">
          {/* Section Heading with Image */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">
                Exquisite Craftsmanship, Limitless Potential
              </h2>
              <p>
                KGK Group’s jewellery collections represent timeless elegance, innovative designs, and unmatched quality.
                The leading global brand offers a comprehensive range of impeccable creations that resonate with style and sophistication.
              </p>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={craftsmanshipImg}
                alt="Jewellery Craftsmanship"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                placeholder="blur"
              />
            </div>
          </div>

          {/* The KGK Difference */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">The KGK Difference</h3>
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="font-semibold text-lg text-black">Accountability and Transparency</h4>
                <p>
                  KGK Group is among the few gems and jewellery conglomerates that mines, cuts, and polishes colored gemstones while being a direct buyer of rough diamonds from industry giants like De Beers and Alrosa. This integrated approach ensures unmatched quality and traceability.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-black">Innovative and Creative Designs</h4>
                <p>
                  The brand’s talented designers craft stunning collections that captivate and inspire. With a deep understanding of global trends, KGK’s jewellery designs are tailored to delight customers across diverse markets.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-black">Comprehensive Jewellery Portfolio</h4>
                <p>
                  KGK Group serves every segment of the market with a vast range of jewellery collections featuring diamonds and gemstones in platinum, gold, and silver settings, catering to all tastes and preferences.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-black">Exceptional Value</h4>
                <p>
                  Leveraging KGK’s vertically integrated mines-to-brands approach, the brand delivers cost efficiencies that translate into real value for customers.
                </p>
              </div>
            </div>
          </div>

          {/* Empowering the Industry */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-4">Empowering the Industry</h3>
            <p>
              KGK Group provides robust sales support, helping clients establish their own branded online sales and distribution networks for complete control and scalability.
            </p>
          </div>

          {/* Manufacturing Excellence */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Manufacturing Excellence: Crafting Perfection</h3>
            <p>
              KGK Group continually invests in advanced technology and innovative processes to deliver exceptional quality and efficiency. The brand’s fully digitized design and production capabilities include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>3D CAD/CAM design</li>
              <li>Laser cutting and soldering</li>
              <li>Fire assay testing</li>
              <li>Pressure setting</li>
            </ul>
          </div>
        </div>
        </div>
      </section>
      <SourcingWorld
        description="KGK is fully compliant with import/export regulations in numerous destinations including"
        list={[
          'Australia',
          'China',
          'Eurozone',
          'India',
          'Japan',
          'MiddleEast',
          'South Africa',
          'USA',
        ]}
        image={worldImg}
      />
      <GemstoneManufacturing
        backgroundImage={gemstoneBg}
        heading={`The KGK Standard`}
        descriptionTop="From sustainable gemstone sourcing to sophisticated jewellery manufacturing, KGK Group’s global footprint and vertically integrated expertise position the brand as a leader in the industry."

        descriptionBottom="KGK jewellery is as diverse as the tastes of your markets. Talk to us about obtaining the collection perfect for you."
      />
      <Contact backgroundImage={contactBg} />

    </>
  );
}
