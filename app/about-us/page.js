import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb2';
import KGKAdvantage from '@/components/KGKAdvantage';
import TheLegacy from '@/components/TheLegacy';
import LeadershipSection from '@/components/LeadershipSection';
import MilestoneTimeline from '@/components/MilestoneTimeline';
import OurBusiness from "@/components/Home/OurBusiness";
import CertificationBanner from "@/components/CertificationBanner";
import Newsletter from "@/components/Home/Newsletter";

import bgImage from '@/assets/images/banners/about-banner-1.jpg';

export default async function AboutUs() {
  const homeData = await fetchFromAPI('homepage');
  const data = await fetchFromAPI('about-us');
  return (
    <>
      <Breadcrumb
        heading={
          <>
            Where Brilliance
            <br className="hidden lg:block" />
            Meets Integrity
          </>
        }
        subheading={
          <>
            Creating timeless masterpieces
            <br className="hidden lg:block" />
            through innovation and skill
          </>
        }
        bgImage={bgImage}
      />
      <KGKAdvantage />
      <TheLegacy />
      <LeadershipSection />
      <MilestoneTimeline data={data.milestones} />
      <OurBusiness data={homeData.businesses} />
      <CertificationBanner />
      <Newsletter />
    </>
  );
}
