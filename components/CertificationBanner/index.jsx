// components/CertificationBanner.jsx
'use client';

import { FileText } from 'lucide-react';
import Link from 'next/link';

export default function CertificationBanner() {
  return (
    <div className="text-center py-16">
      <div className="container">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-heading mb-2">Our Certifications</h2>
      <p className="text-gray-600 mb-4">
        We are proud to be <strong>BPP Compliant</strong> and certified by the <strong>Responsible Jewellery Council (RJC)</strong>.
      </p>
      <Link
        href="/certificates/BPP_RJC_Certification.pdf"
        target="_blank"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary transition"
      >
        <FileText className="w-5 h-5" />
        View Certificate
      </Link>
    </div>  
    </div>
  );
}
