import React from 'react';
import { servicesData } from '../data/servicesData';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ShieldCheck, Phone, MapPin, Globe, Star, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onLanguageChange }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0B] text-stone-300 border-t border-amber-500/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-gradient p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0F0F10] rounded-[7px] flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-lg">الرمال</span>
                </div>
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base leading-tight">
                  {t.brandName}
                </h3>
                <span className="text-xs text-amber-500 font-medium">
                  {t.brandSub}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {t.tagline}
            </p>

            <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-center gap-2 text-xs">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-bold text-white">{t.crNumber}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-stone-800 pb-2">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">{t.navHome}</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">{t.navAbout}</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{t.navServices}</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">{t.navGallery}</a></li>
              <li><a href="#estimator" className="hover:text-amber-400 transition-colors">{t.navEstimator}</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">{t.navWhyUs}</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">{t.navReviews}</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">{t.navContact}</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-stone-800 pb-2">
              {t.ourServicesHeader}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {servicesData.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-amber-400 transition-colors truncate block">
                    {s.title[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Lang Switcher */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-stone-800 pb-2">
              {t.navContact}
            </h4>

            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>الرياض - حي الرمال (شارع طالب الأزدي)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href="tel:+966550737499" className="hover:text-amber-400 transition-colors font-mono" dir="ltr">
                  +966 55 073 7499
                </a>
              </p>
              <p className="flex items-center gap-2 text-yellow-400 font-semibold">
                <Star className="w-3.5 h-3.5 fill-yellow-400" />
                <span>{t.googleRatingText}</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onLanguageChange(lang === 'ar' ? 'en' : 'ar')}
                className="w-full py-2 px-3 rounded-lg bg-stone-900 border border-stone-800 text-xs font-bold text-stone-200 hover:text-amber-400 flex items-center justify-center gap-2 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'ar' ? 'Switch to English' : 'التحويل للغة العربية'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="text-center sm:text-start">
            {t.copyright}
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span>{lang === 'ar' ? 'للأعلى' : 'Top'}</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
