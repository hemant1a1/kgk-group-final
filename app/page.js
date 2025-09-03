import { fetchFromAPI } from '@/lib/api';

import HeroSlider from "@/components/Home/HeroSlider";
import Legacy from "@/components/Home/Legacy";
import OurBusiness from "@/components/Home/OurBusiness";
import OurPresence from "@/components/Home/OurPresence";
import LifeAtKGK from "@/components/Home/LifeAtKGK";
import BrandSlide from "@/components/Home/BrandSlide";
import EventsMedia from "@/components/Home/EventsMedia";
import Awards from "@/components/Home/Awards";
import UpcomingEvents from "@/components/Home/UpcomingEvents";
import Blogs from "@/components/Home/Blogs";
import Newsletter from "@/components/Home/Newsletter";

import { getMetadata } from "@/lib/getMetadata";

export async function generateMetadata() {
  return getMetadata("/");
}

export default async function Home() {
  const [data, blogsData, eventsData, awardsData] = await Promise.all([
    fetchFromAPI("homepage"),
    fetchFromAPI("blogs"),
    fetchFromAPI("events"),
    fetchFromAPI("awards"),
  ]);

  return (
    <>
      <HeroSlider data={data.hero_slider} />
      <Legacy />
      <OurBusiness data={data.businesses} />
      <OurPresence />
      <LifeAtKGK />
      <BrandSlide />
      <EventsMedia data={eventsData.more} />
      <Awards data={awardsData} />
      <UpcomingEvents />
      <Blogs data={blogsData.blogs} />
      <Newsletter />
    </>
  );
}
