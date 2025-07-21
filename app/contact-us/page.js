import WorldOfficeMap from '@/components/WorldOfficeMap';
import OfficeLocations from '@/components/OfficeLocations';
import ContactForm from '@/components/ContactForm';

export default function ContactUs() {
  return (
    <main className="min-h-screen">
      <WorldOfficeMap />
      <OfficeLocations />
      <ContactForm />
    </main>
  );
}
