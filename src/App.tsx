import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { CostEstimator } from './components/CostEstimator';
import { WhyUs } from './components/WhyUs';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  // Auto-detect browser language or read stored preference
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('alrimal_site_lang') as Language;
    if (saved && (saved === 'ar' || saved === 'en')) {
      return saved;
    }
    const browserLang = navigator.language || (navigator as any).userLanguage || 'ar';
    return browserLang.toLowerCase().startsWith('ar') ? 'ar' : 'en';
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Sync HTML lang and dir attributes dynamically whenever lang changes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('alrimal_site_lang', lang);
  }, [lang]);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0F0F10] text-[#F5F5F0] overflow-x-hidden selection:bg-amber-500 selection:text-black">
      {/* Header Navigation */}
      <Header
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          lang={lang}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        <About lang={lang} />

        <Services
          lang={lang}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        <Gallery
          lang={lang}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        <CostEstimator lang={lang} />

        <WhyUs lang={lang} />

        <Reviews lang={lang} />

        <Contact
          lang={lang}
          preselectedServiceId={selectedServiceId}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onLanguageChange={handleLanguageChange}
      />

      {/* Floating Action Controls */}
      <FloatingControls lang={lang} />

      {/* Interactive Free Quote Modal */}
      <QuoteModal
        lang={lang}
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultServiceId={selectedServiceId}
      />
    </div>
  );
}
