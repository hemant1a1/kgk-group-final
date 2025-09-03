import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb3';
import VisitSection from '@/components/VisitSection';
import EventsSection from '@/components/EventsSection';

import bgImage from '@/assets/images/banners/event-banner.jpg';

import { getMetadata } from "@/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata("/events-&-media");
}

export default async function EventsAndMedia() {
  const data = await fetchFromAPI('events');

  return (
    <>
      <Breadcrumb
        heading="Events & Media"
        bgImage={bgImage}
      />
      <VisitSection data={data.feature} />
      <EventsSection data={data.more} />
    </>
  );
}