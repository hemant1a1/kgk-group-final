'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LanguageModal from '@/components/LanguageModal';

const getLangCode = (pathname) => {
  const match = pathname.match(/^\/([a-z]{2})/);
  const lang = match?.[1]?.toUpperCase();
  return lang || 'EN';
};

export default function LanguageToggle() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [langCode, setLangCode] = useState('EN');

  useEffect(() => {
    setLangCode(getLangCode(pathname));
  }, [pathname]);

  return (
    <>
      <button
        className="bg-primary text-white w-10 h-10 text-xs flex items-center justify-center"
        onClick={() => setModalOpen(true)}
      >
        {langCode}
      </button>
      <LanguageModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
