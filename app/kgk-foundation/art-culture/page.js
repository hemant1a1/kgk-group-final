
import Breadcrumb from '@/components/Breadcrumb4';
import HealthcareSection from '@/components/HealthcareSection';
import HealthcareInitiatives from '@/components/HealthcareInitiatives';
import BMCHRCSection from '@/components/BMCHRCSection';
import HalfIntro from '@/components/HalfIntro';

import bgImage from '@/assets/images/banners/healthcare-banner.jpg';

import healthcareImg from '@/assets/images/healthcare-1.jpg'; 


import logo from '@/assets/images/bmchrc-logo.png';
import hospitalImg from '@/assets/images/bmchrc-hospital.jpg';
import oncologyImg from '@/assets/images/oncology.jpg';
import ipdImg from '@/assets/images/ipd.jpg';
import careImg from '@/assets/images/cancer-care.jpg';

export default function ArtCulture() {
  return (
    <>
      <Breadcrumb
        heading="Art & Culture"
        subheading={
            <>
                Preserving Creative
                <span className="inline-block lg:hidden">&nbsp;</span>
                <br className="hidden lg:block" />
                Heritage
            </>
        }
        bgImage={bgImage}
      />
      <HealthcareSection
        image={healthcareImg}
        title="Celebrating Creativity and Heritage"
        description={
          <>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-lg lg:pr-6 mb-3">
              Celebrating artistic expression and cultural heritage, ensuring traditions thrive while inspiring future generations.
            </p>
            <p className="text-sm lg:text-[15px] leading-[25px] tracking-wide text-white max-w-lg lg:pr-6 mt-4">
              KGK Foundation is dedicated to preserving cultural heritage and fostering artistic expression, ensuring that traditions not only endure but also evolve to inspire future generations. Through its support for art, music, craftsmanship, and storytelling, the foundation strengthens the cultural fabric of communities while creating platforms for creative excellence.
            </p>
          </>
        }
      />
       <HealthcareInitiatives
        heading="Preserving Heritage Through Cultural Initiatives"
        highlightLabel="Key Focus Areas:"
        description={
          <>
            <p>
              Culture is a living narrative that connects the past, present, and future. KGK Foundation actively supports initiatives that safeguard traditional arts, promote indigenous craftsmanship, and celebrate cultural diversity, ensuring these invaluable legacies remain relevant in a modernizing world.
            </p>
          </>
        }
        initiatives={[
          {
            title: 'Reviving Traditional Art Forms',
            description:
              'Supporting artisans, musicians, and craftsmen in keeping age-old traditions alive.',
          },
          {
            title: 'Promoting Cultural Education',
            description:
              'Encouraging awareness and appreciation of heritage through storytelling and community engagement.',
          },
          {
            title: 'Providing Platforms for Artists',
            description:
              'Showcasing talent and creating opportunities for creative professionals.',
          },
        ]}
      />

      <BMCHRCSection
        title="Jaigarh Heritage Festival: A Grand Celebration of Art and Tradition"
        description={
          <>
            <p>
              As an associate sponsor of the Jaigarh Heritage Festival, KGK Foundation proudly contributed to an extraordinary celebration of India’s artistic and cultural legacy. Committed to preserving and promoting art, heritage, and cultural innovation, KGK Foundation welcomes future collaborations and sponsorship opportunities that celebrate creativity and craftsmanship.
            </p>
          </>
        }
        logo={logo}
        hospitalImage={hospitalImg}
        cards={[
          {
            img: oncologyImg,
            title: 'Safeguarding Endangered Art Forms',
            desc: 'Investing in traditional arts at risk of being forgotten.',
          },
          {
            img: ipdImg,
            title: 'Empowering Artists & Performers',
            desc: 'Providing exposure, financial support, and mentorship.',
          },
          {
            img: careImg,
            title: 'Encouraging Cultural Exchange',
            desc: 'Bringing together artists, enthusiasts, and communities to foster shared appreciation.',
          },
        ]}
      />

    </>
  );
}
