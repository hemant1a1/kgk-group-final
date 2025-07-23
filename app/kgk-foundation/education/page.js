
import Breadcrumb from '@/components/Breadcrumb4';
import HealthcareSection from '@/components/HealthcareSection';
import HealthcareInitiatives from '@/components/HealthcareInitiatives';
import BMCHRCSection from '@/components/BMCHRCSection';
import HalfIntro from '@/components/HalfIntro';

import bgImage from '@/assets/images/banners/healthcare-banner.jpg';

import healthcareImg from '@/assets/images/healthcare-1.jpg'; 

export default function Education() {
  return (
    <>
      <Breadcrumb
        heading="Education"
        subheading={
          <>
            Shaping Tomorrow Through
            <span className="inline-block lg:hidden">&nbsp;</span>
            <br className="hidden lg:block" />
            Knowledge
          </>
        }
        bgImage={bgImage}
      />
      <HealthcareSection
        image={healthcareImg}
        title="Advancing Medical Care, Transforming Lives"
        description={
          <>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-lg lg:pr-6 mb-3">
              Dedicated to fostering a holistic learning environment that nurtures curiosity, innovation, and leadership for a brighter tomorrow.
            </p>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-lg lg:pr-6 mt-4">
              KGK Foundation believes that education is the key to unlocking potential, fostering innovation, and shaping the leaders of tomorrow. With a commitment to holistic development, the foundation works to create learning environments that go beyond traditional academics, equipping students with the skills, confidence, and values needed to excel in a rapidly changing world.
            </p>
          </>
        }
      />
       <HealthcareInitiatives
        heading="Expanding Access to Quality Healthcare"
        highlightLabel="Key Education Initiatives:"
        description={
          <>
            <p>
              Recognizing that education is a lifelong journey, KGK Foundation supports initiatives that enhance learning opportunities for students across diverse backgrounds. Through modern infrastructure, innovative teaching methodologies, and value-driven programs, the foundation nurtures future leaders who are not only academically strong but also socially responsible.
            </p>
          </>
        }
        initiatives={[
          {
            title: 'Scholarships & Financial Aid',
            description:
              'Supporting meritorious and underprivileged students to ensure education is accessible to all.',
          },
          {
            title: 'Teacher Training & Development',
            description:
              'Investing in educators to enhance teaching methodologies and student engagement.',
          },
          {
            title: 'Skill Development & Innovation Programs',
            description:
              'Encouraging experiential learning, critical thinking, and leadership skills to prepare students for the future.',
          },
        ]}
      />
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
