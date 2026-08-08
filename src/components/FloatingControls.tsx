import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { Language } from '../types';

interface FloatingControlsProps {
  lang: Language;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ lang }) => {
  const isRtl = lang === 'ar';

  return (
    <div className={`fixed bottom-6 z-40 flex flex-col gap-3 ${isRtl ? 'left-6' : 'right-6'}`}>
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/966550737499?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D8%B1%D8%B4%D8%A9%20%D8%A7%D9%84%D8%B1%D9%85%D8%A7%D9%84%2D%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-900/50 transition-all duration-300 transform hover:scale-110"
        aria-label="WhatsApp Us"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pe-2">
          {lang === 'ar' ? 'واتساب مباشر' : 'WhatsApp Us'}
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0F0F10] animate-ping"></span>
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+966550737499"
        className="p-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-2xl shadow-amber-900/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Call Us"
      >
        <Phone className="w-5 h-5" />
      </a>

    </div>
  );
};
