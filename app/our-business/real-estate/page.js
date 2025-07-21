
import Breadcrumb from '@/components/Breadcrumb';
import RealEstateSection from '@/components/RealEstateSection';
import RealEstateCarousel from '@/components/RealEstateCarousel';
import KGKRealty from '@/components/KGKRealty';
import Newsletter from "@/components/Home/Newsletter";


import bgImage from '@/assets/images/banners/real-estate-banner.jpg';
import newsletterImg from '@/assets/images/real-estate-bg3.jpg';


export default function RealEstate() {
  return (
    <>
      <Breadcrumb
        heading="Real Estate"
        subheading="TRANSFORMING SPACES INTO LANDMARKS"
        bgImage={bgImage}
        subheadingClassName="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px]"
      />
      <RealEstateSection />
      <RealEstateCarousel />
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