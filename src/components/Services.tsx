import React from 'react';
import { servicesData } from '../data/servicesData';
import { Language } from '../types';
import { translations } from '../data/translations';
import { DoorClosed, AppWindow, Layers, Umbrella, ShieldAlert, Grid, Wrench, Settings, ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  lang: Language;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ lang, onOpenQuoteModal }) => {
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'DoorClosed': return <DoorClosed className="w-6 h-6" />;
      case 'AppWindow': return <AppWindow className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Umbrella': return <Umbrella className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Grid': return <Grid className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Settings': return <Settings className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0F0F10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span>{t.navServices}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.servicesSectionTitle}
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Services Grid (All 8 Services) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="metal-card-bg rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1.5 border border-stone-800 hover:border-amber-500/40"
            >
              {/* Image Banner */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/30"></div>

                {/* Badge if exists */}
                {service.badge && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gold-gradient text-stone-950 text-xs font-extrabold shadow-md">
                    {service.badge[lang]}
                  </span>
                )}

                {/* Service Icon */}
                <div className="absolute bottom-3 left-3 w-12 h-12 rounded-xl bg-stone-900/90 border border-amber-500/40 text-amber-400 flex items-center justify-center shadow-lg">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Service Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title[lang]}
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    {service.shortDesc[lang]}
                  </p>

                  {/* Bullet Features */}
                  <div className="pt-2 border-t border-stone-800 space-y-2">
                    <p className="text-xs font-bold text-amber-400/90 uppercase tracking-wider">
                      {t.serviceFeaturesTitle}
                    </p>
                    <ul className="space-y-1.5 text-xs text-stone-400">
                      {service.features[lang].map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={() => onOpenQuoteModal(service.id)}
                  className="w-full mt-4 py-3 px-4 rounded-xl bg-stone-900 hover:bg-gold-gradient hover:text-stone-950 text-stone-200 border border-amber-500/30 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>{t.requestServiceQuote}</span>
                  {isRtl ? (
                    <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
