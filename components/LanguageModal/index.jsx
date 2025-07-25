'use client';

import { useEffect } from 'react';

const languages = [
  { name: 'English', code: 'EN', value: 'en', flag: '🇺🇸' },
  { name: '繁體中文', code: 'TW', value: 'zh-TW', flag: '🇹🇼' },
  { name: '简体中文', code: 'ZH', value: 'zh-CN', flag: '🇨🇳' },
  { name: 'ภาษาไทย', code: 'TH', value: 'th', flag: '🇹🇭' },
  { name: 'Русский', code: 'RU', value: 'ru', flag: '🇷🇺' },
  { name: '日本語', code: 'JA', value: 'ja', flag: '🇯🇵' },
];

export default function LanguageModal({ isOpen, onClose }) {
  const changeLanguage = (langValue) => {
    const iframe = document.querySelector('iframe');
    const innerDoc = iframe?.contentDocument || iframe?.contentWindow?.document;
    const select = innerDoc?.querySelector('.goog-te-combo');
    if (select) {
        select.value = langValue;
        select.dispatchEvent(new Event('change'));
    }
    onClose();
    };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 w-[90%] max-w-lg relative text-center shadow-lg">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-xl text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <h1 className="text-xl font-semibold text-yellow-600 mb-6">
          Choose your preferred language
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.value)}
              className="flex items-center gap-3 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition"
            >
              {lang.flag}
              <span className="text-sm font-medium">{lang.name}</span>
              <span className="ml-auto text-xs text-gray-500">{lang.code}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
