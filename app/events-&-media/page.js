import Breadcrumb from '@/components/Breadcrumb3';
import VisitSection from '@/components/VisitSection';
import EventsSection from '@/components/EventsSection';

import bgImage from '@/assets/images/banners/event-banner.jpg';

export default function EventsAndMedia() {
  return (
    <>
      <Breadcrumb
        heading="Events & Media"
        bgImage={bgImage}
      />
      <VisitSection />
      <EventsSection />
    </>
  );
}