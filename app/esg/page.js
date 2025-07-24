import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb4';
import ESGSection from '@/components/ESGSection';
import CommitmentSwiper from '@/components/CommitmentSwiper';

import bgImage from '@/assets/images/banners/esg-banner.jpg';

export default async function ESG() {
  const data = await fetchFromAPI('esg');

  return (
    <>
      <Breadcrumb
        heading="ESG"
        subheading={
          <>
            Our Commitment to People, Planet
            <span className="inline-block lg:hidden">&nbsp;</span>
            <br className="hidden lg:block" />
            & Principles
          </>
        }
        bgImage={bgImage}
      />
      <ESGSection data={data.esg}  />
      <CommitmentSwiper data={data.commitment}  />
    </>
  );
}
