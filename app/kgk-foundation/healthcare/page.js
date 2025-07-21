import Breadcrumb from '@/components/Breadcrumb4';
import HealthcareSection from '@/components/HealthcareSection';
import HealthcareInitiatives from '@/components/HealthcareInitiatives';
import BMCHRCSection from '@/components/BMCHRCSection';
import HalfIntro from '@/components/HalfIntro';

import bgImage from '@/assets/images/banners/healthcare-banner.jpg';

export default function Healthcare() {
  return (
    <>
      <Breadcrumb
        heading="Healthcare"
        subheading={
          <>
            Advancing Medical Care,
            <br className="hidden lg:block" />
            Transforming Lives
          </>
        }
        bgImage={bgImage}
      />
      <HealthcareSection />
      <HealthcareInitiatives />
      <BMCHRCSection />
      <HalfIntro
          backgroundImage="/images/healthcare-bg2.jpg"
          title="A Commitment to Compassionate Healthcare"
          description={
              <>
              <p>KGK Foundation remains steadfast in its mission to bridge the healthcare gap, offering world-class treatment facilities and financial assistance to make a meaningful difference in people’s lives. Through continuous advancements and unwavering dedication, the foundation strives to create a healthier tomorrow for all.</p>
              </>
          }
          textColor="text-heading"
          headingCustomClass = "max-w-xl lg:pr-0"
          descriptionCustomClass = "max-w-lg lg:pr-24"
          showButton={false}
          paddingLeftClass="pl-[50px]"
      />
    </>
  );
}
