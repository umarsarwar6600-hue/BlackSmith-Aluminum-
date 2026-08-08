import React from 'react';
import { ShieldCheck, Cpu, Clock, Award, Building2, Sparkles, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="about" className="py-20 bg-[#141416] relative overflow-hidden border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.navAbout}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.aboutSectionTitle}
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            {t.aboutSubtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>{lang === 'ar' ? 'الرياض - حي الرمال (طالب الأزدي)' : 'Riyadh - Ar Rimal District (Talib Al Azdi)'}</span>
            </div>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {t.aboutStoryP1}
            </p>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              {t.aboutStoryP2}
            </p>

            {/* CR & Trust Box */}
            <div className="p-4 rounded-xl bg-stone-900 border border-amber-500/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-gradient p-0.5 flex items-center justify-center text-stone-950 font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{t.crNumber}</h4>
                  <p className="text-xs text-stone-400">{lang === 'ar' ? 'سجل تجاري موثق رسمي لدى وزارة التجارة' : 'Officially Registered with Ministry of Commerce'}</p>
                </div>
              </div>
              <div className="hidden sm:block text-end font-mono text-xs text-amber-400 font-bold">
                CR: 7005006387
              </div>
            </div>

            {/* Meet the Owner / CEO Section */}
            <div className="p-6 rounded-2xl bg-[#1A1A1C] border border-amber-500/40 relative overflow-hidden shadow-xl mt-6">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gold-gradient p-0.5 shrink-0 shadow-lg">
                  <div className="w-full h-full bg-stone-950 rounded-[14px] flex items-center justify-center text-amber-400 font-bold text-xl">
                    JM
                  </div>
                </div>
                <div className="space-y-1.5 text-center sm:text-start flex-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    {t.ceoTitle}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {t.ceoName}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {t.ceoBio}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono">
                    <a
                      href="tel:+966550737499"
                      className="text-amber-400 hover:underline flex items-center gap-1"
                    >
                      📞 0550737499
                    </a>
                    <a
                      href="https://wa.me/966550737499"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      💬 WhatsApp
                    </a>
                    <a
                      href="mailto:junaidmehmood7091@gmail.com"
                      className="text-stone-300 hover:text-white underline flex items-center gap-1"
                    >
                      ✉️ junaidmehmood7091@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="metal-card-bg p-5 rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">{t.aboutPillar1Title}</h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-normal">{t.aboutPillar1Desc}</p>
              </div>
            </div>

            <div className="metal-card-bg p-5 rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">{t.aboutPillar2Title}</h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-normal">{t.aboutPillar2Desc}</p>
              </div>
            </div>

            <div className="metal-card-bg p-5 rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">{t.aboutPillar3Title}</h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-normal">{t.aboutPillar3Desc}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
