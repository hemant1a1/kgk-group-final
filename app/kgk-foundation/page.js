
import Breadcrumb from '@/components/Breadcrumb3';
import FoundationSection from '@/components/FoundationSection';
import FoundationLegacy from '@/components/FoundationLegacy';

import bgImage from '@/assets/images/banners/foundation-banner.jpg';

export default function KgkFoundation() {
  return (
    <>
      <Breadcrumb
        heading="A Mission of Purpose"
        subheading="Inspiring Lives, Nurturing Dreams"
        bgImage={bgImage}
        showDivider={false}
      />
      <FoundationSection />
      <FoundationLegacy />
    </>
  );
}
