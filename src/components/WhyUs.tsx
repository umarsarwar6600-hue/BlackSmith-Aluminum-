import React from 'react';
import { ShieldCheck, Award, Ruler, DollarSign, Users, Wrench } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface WhyUsProps {
  lang: Language;
}

export const WhyUs: React.FC<WhyUsProps> = ({ lang }) => {
  const t = translations[lang];

  const pillars = [
    {
      icon: ShieldCheck,
      title: t.why1Title,
      desc: t.why1Desc,
    },
    {
      icon: Award,
      title: t.why2Title,
      desc: t.why2Desc,
    },
    {
      icon: Ruler,
      title: t.why3Title,
      desc: t.why3Desc,
    },
    {
      icon: DollarSign,
      title: t.why4Title,
      desc: t.why4Desc,
    },
    {
      icon: Users,
      title: t.why5Title,
      desc: t.why5Desc,
    },
    {
      icon: Wrench,
      title: t.why6Title,
      desc: t.why6Desc,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#141416] relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span>{t.navWhyUs}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.whyUsSectionTitle}
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            {t.whyUsSubtitle}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="metal-card-bg p-6 sm:p-8 rounded-2xl border border-stone-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
