// components/LanguageModal.jsx
export default function LanguageModal({ isOpen, onClose, onSelectLanguage }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center transition-opacity">
      <div className="bg-white w-full sm:w-80 rounded-t-3xl sm:rounded-xl p-6 shadow-lg animate-slide-up">
        <div className="text-center">
          <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h2 className="text-base font-medium text-gray-800 mb-4">Select Language</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {['EN', 'ZH', 'ZT', 'TH', 'RU', 'JA'].map((lang) => (
            <button
              key={lang}
              className="w-full py-3 text-sm text-gray-800 hover:bg-gray-100 text-center"
              onClick={() => {
                onSelectLanguage(lang);
                onClose();
              }}
            >
              {lang}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-5 w-full py-3 text-sm font-medium text-blue-600 border-t border-gray-200 hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
