
import Breadcrumb from '@/components/Breadcrumb';
import KGKStonesSection from '@/components/KGKStonesSection';
import StonesSemiPrecious from '@/components/StonesSemiPrecious';
import NaturalStones from '@/components/NaturalStones';
import HalfIntro from '@/components/HalfIntro';
import Newsletter from "@/components/Home/Newsletter";


import bgImage from '@/assets/images/banners/stones-banner.jpg';
import newsletterImg from '@/assets/images/stones-bg1.jpg';

export default function Stones() {
  return (
    <>
      <Breadcrumb
        heading="Stones"
        subheading="A SYMPHONY OF ART & ARCHITECTURE "
        bgImage={bgImage}
      />
      <KGKStonesSection />
      <StonesSemiPrecious />
      <NaturalStones />
      <HalfIntro />
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