
import Breadcrumb from '@/components/Breadcrumb';
import AlternatingSections from '@/components/Diamonds/AlternatingSections';
import SourcingWorld from '@/components/Diamonds/SourcingWorld';
import GemstoneManufacturing from '@/components/Diamonds/GemstoneManufacturing';
import DistributionMap from '@/components/Gemstones/DistributionMap';
import Contact from '@/components/Diamonds/Contact';


import bgImage from '@/assets/images/banners/diamonds-banner-1.jpg';
import contactBg from '@/assets/images/diamonds-contacts.jpg';
import gemstoneBg from '@/assets/images/The-KGK-Difference.jpg';
import worldImg from '@/assets/images/gemstones/around-world.png';

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

export default function Diamonds() {
  return (
    <>
      <Breadcrumb
        heading="Diamonds"
        subheading="Outstanding Brilliance"
        bgImage={bgImage}
      />
      <AlternatingSections sections={sectionsData} />
      {/* <SourcingWorld
        heading="Diamonds Direct from the <br /> Source"
        description="With a team of highly skilled diamond buyers renowned for their expertise in evaluating and grading rough stones, KGK Group ensures only the finest diamonds enter the value and supply chain. Each ethically sourced diamond is processed at their state-of-the-art manufacturing units in:"
        list={[
          'Angola',
          'Botswana',
          'India',
          'Namibia',
          'South Africa',
        ]}
        image={worldImg}
      /> */}
      <GemstoneManufacturing
        backgroundImage={gemstoneBg}
        heading={`Manufacturing <br/> innovation`}
        descriptionTop="We process, cut and polish our own gemstones to ensure maximum quality and value. For speed and efficiency, our digitally controlled production lines are equipped with automated gemstone production technology. To provide optimum access to global markets, KGK gemstone manufacturing units are located in:"
        listItems={["India", "Thailand"]}
        descriptionBottom="KGK is unique in the gems and jewellery sector for being amongst the industry’s only few that also mines and produces coloured gemstones."
      />
      <DistributionMap />
      <Contact backgroundImage={contactBg} />

    </>
  );
}
