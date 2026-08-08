import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Globe, ShieldCheck, Star } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const navLinks = [
    { href: '#home', label: t.navHome },
    { href: '#about', label: t.navAbout },
    { href: '#services', label: t.navServices },
    { href: '#gallery', label: t.navGallery },
    { href: '#estimator', label: t.navEstimator },
    { href: '#why-us', label: t.navWhyUs },
    { href: '#reviews', label: t.navReviews },
    { href: '#contact', label: t.navContact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0F0F10]/95 backdrop-blur-md border-b border-amber-500/20">
      {/* Top Bar - Trust & CR Info */}
      <div className="bg-[#18181B] py-1.5 px-4 border-b border-white/5 text-xs text-stone-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t.crNumber}
            </span>
            <span className="hidden sm:inline-block text-stone-500">|</span>
            <span className="hidden sm:flex items-center gap-1 text-stone-300">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              {t.googleRatingText}
            </span>
          </div>

          <div className="flex items-center gap-4 ms-auto">
            <a 
              href="tel:+966550737499" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span dir="ltr" className="font-mono">055 073 7499</span>
            </a>
            <a 
              href="https://wa.me/966550737499" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">واتساب / WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gold-gradient p-0.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#0F0F10] rounded-[7px] flex items-center justify-center">
              <span className="text-amber-400 font-bold text-xl tracking-wider">الرمال</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg text-white leading-tight group-hover:text-amber-400 transition-colors">
              {t.brandName}
            </span>
            <span className="text-xs text-amber-500/90 font-medium tracking-wide">
              {t.brandSub}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => onLanguageChange(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800/80 border border-amber-500/30 text-xs font-semibold text-stone-200 hover:border-amber-400 hover:bg-stone-800 transition-all"
            title="Switch Language / تغيير اللغة"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ar' ? 'English (EN)' : 'العربية (AR)'}</span>
          </button>

          {/* Get Quote CTA */}
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-4 py-2 rounded-lg bg-gold-gradient text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/20 bg-gold-gradient-hover transition-all transform hover:-translate-y-0.5"
          >
            {t.getQuoteBtn}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onLanguageChange(lang === 'ar' ? 'en' : 'ar')}
            className="px-2.5 py-1.5 rounded-md bg-stone-800 border border-amber-500/30 text-xs font-bold text-amber-400"
          >
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-stone-800 text-stone-200 hover:text-amber-400 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141416] border-b border-amber-500/20 px-4 py-5 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-stone-200 hover:bg-stone-800 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 rounded-lg bg-gold-gradient text-stone-950 font-bold text-sm text-center shadow-md"
            >
              {t.getQuoteBtn}
            </button>

            <a
              href="https://wa.me/966550737499"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              {t.whatsappUs}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
