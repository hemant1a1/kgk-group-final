import { fetchFromAPI } from '@/lib/api';
import Breadcrumb from '@/components/Breadcrumb';
import KGKStonesSection from '@/components/KGKStonesSection';
import StonesSemiPrecious from '@/components/StonesSemiPrecious';
import NaturalStones from '@/components/NaturalStones';
import HalfIntro from '@/components/HalfIntro';
import Newsletter from "@/components/Home/Newsletter";


import bgImage from '@/assets/images/banners/stones-banner.jpg';
import newsletterImg from '@/assets/images/stones-bg1.jpg';

import { getMetadata } from "@/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata("/our-business/stones");
}

export default async function Stones() {
  const data = await fetchFromAPI('stones');

  return (
    <>
      <Breadcrumb
        heading="Natural Stones"
        subheading="A SYMPHONY OF ART & ARCHITECTURE "
        bgImage={bgImage}
      />
      <KGKStonesSection />
      <StonesSemiPrecious />
      <NaturalStones data={data.stones} />
      <HalfIntro buttonHref="https://kgkstones.com/" />
      <Newsletter
        img={newsletterImg}
        showHeading={
            <>
              Contact KGK
              <br />
              about Stones
            </>
          }
        showSubtext={false}
      />
    </>
  );
}