import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb';
import RealEstateSection from '@/components/RealEstateSection';
import RealEstateCarousel from '@/components/RealEstateCarousel';
import KGKRealty from '@/components/KGKRealty';
import Newsletter from "@/components/Home/Newsletter";


import bgImage from '@/assets/images/banners/real-estate-banner.jpg';
import newsletterImg from '@/assets/images/real-estate-bg3.jpg';


export default async function RealEstate() {
  const data = await fetchFromAPI('real-estate');

  return (
    <>
      <Breadcrumb
        heading="Real Estate"
        subheading="TRANSFORMING SPACES INTO LANDMARKS"
        bgImage={bgImage}
        subheadingClassName="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px]"
      />
      <RealEstateSection />
      <RealEstateCarousel data={data.properties} />
      <KGKRealty />
      <Newsletter
        img={newsletterImg}
        showHeading={
            <>
              Contact KGK
              <br />
              about Real Estate
            </>
          }
        showSubtext={false}
      />

    </>
  );
}