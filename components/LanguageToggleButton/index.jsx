'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LanguageModal from '@/components/LanguageModal';

const getLangCode = (pathname) => {
  const match = pathname.match(/^\/([a-z]{2})/);
  const lang = match?.[1]?.toUpperCase();
  return lang || 'EN';
};

export default function LanguageToggleButton() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [langCode, setLangCode] = useState('EN');

  useEffect(() => {
    setLangCode(getLangCode(pathname));
  }, [pathname]);

  return (
    <>
      <button
        className="font-cardo text-[12.5px] tracking-widest border border-white px-3.5 py-1.5 hover:bg-white hover:text-black transition-colors"
        onClick={() => setModalOpen(true)}
      >
        ENGLISH
      </button>
      <LanguageModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
