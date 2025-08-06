import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb';
import Precious from '@/components/Gemstones/Precious';
import SemiPrecious from '@/components/Gemstones/SemiPrecious';
import SourcingWorld from '@/components/Gemstones/SourcingWorld';
import GemstoneManufacturing from '@/components/Gemstones/GemstoneManufacturing';
import DistributionMap from '@/components/Gemstones/DistributionMap';
import Contact from '@/components/Gemstones/Contact';

import bgImage from '@/assets/images/banners/gemstones-banner-1.jpg';


export default async function Gemstones() {
  const gemstoneData = await fetchFromAPI('gemstones');

  return (
    <>
      <Breadcrumb
        heading="Gemstones"
        subheading="An irresistible spectrum"
        bgImage={bgImage}
      />
      <Precious data={gemstoneData.precious_gemstones} />
      <SemiPrecious data={gemstoneData.semi_precious_gemstones} />
      <SourcingWorld data={gemstoneData.sourcing_countries} />
      <GemstoneManufacturing data={gemstoneData.manufacturing_countries} />
      <DistributionMap />
      <Contact />

    </>
  );
}
