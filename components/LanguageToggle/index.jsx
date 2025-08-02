'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LanguageModal from '@/components/LanguageModal';

const langMap = {
  EN: 'en',
  ZH: 'zh-CN',
  ZT: 'zh-TW',
  TH: 'th',
  RU: 'ru',
  JA: 'ja',
};

function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getLangCodeFromCookie() {
  const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
  if (match && match[1]) {
    const code = match[1];
    const key = Object.keys(langMap).find((k) => langMap[k] === code);
    return key || 'EN';
  }
  return 'EN';
}

export default function LanguageToggle() {
  const pathname = usePathname(); // still useful for re-rendering on route change
  const [modalOpen, setModalOpen] = useState(false);
  const [langCode, setLangCode] = useState('EN');

  useEffect(() => {
    setLangCode(getLangCodeFromCookie());
  }, [pathname]);

  const changeLanguage = (targetCode) => {
    const googleLangCode = langMap[targetCode];
    if (!googleLangCode) return;

    setCookie('googtrans', `/en/${googleLangCode}`);
    localStorage.setItem('googtrans', `/en/${googleLangCode}`); // Optional
    location.reload();
  };

  return (
    <>
      <button
        className="bg-primary text-white w-10 h-10 text-xs flex items-center justify-center"
        onClick={() => setModalOpen(true)}
      >
        {langCode}
      </button>
      <LanguageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectLanguage={changeLanguage}
      />
    </>
  );
}
