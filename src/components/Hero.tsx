import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, ArrowLeft, ArrowRight, MessageSquare, Award, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  lang: Language;
  onOpenQuoteModal: (serviceId?: string) => void;
}

const heroCarouselSlides = [
  {
    image: '/src/assets/images/luxury_iron_gate_1786145969029.jpg',
    captionAr: 'بوابة حديد ليزر فاخرة — تم التسليم والتركيب، الرياض',
    captionEn: 'Custom Laser-Cut Iron Gate — Installed in Riyadh',
  },
  {
    image: '/src/assets/images/aluminum_window_works_1786146507952.jpg',
    captionAr: 'شبابيك وأبواب ألمنيوم دبل جلاس عازل للصوت والحرارة',
    captionEn: 'Double-Glazed Soundproof & Thermal Aluminum Windows',
  },
  {
    image: '/src/assets/images/staircase_railing_metal_1786146520730.jpg',
    captionAr: 'درابزين سلالـم مودرن زجاج وزخارف ذهبية راقية',
    captionEn: 'Modern Glass & Gold Accent Staircase Railings',
  },
  {
    image: '/src/assets/images/car_parking_shade_1786146533849.jpg',
    captionAr: 'مظلات سيارات كابولي قماش PVC عالي الكثافة',
    captionEn: 'Heavy-Duty Cantilever PVC Car Parking Shades',
  },
];

export const Hero: React.FC<HeroProps> = ({ lang, onOpenQuoteModal }) => {
  const t = translations[lang];
  const isRtl = lang === 'ar';
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroCarouselSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroCarouselSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroCarouselSlides.length) % heroCarouselSlides.length);

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden py-12 lg:py-20">
      {/* Background Hero Images Carousel */}
      <div className="absolute inset-0 z-0">
        {heroCarouselSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={isRtl ? slide.captionAr : slide.captionEn}
              className="w-full h-full object-cover object-center filter brightness-65 contrast-125"
            />
          </div>
        ))}
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/85 to-[#0F0F10]/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-start w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Official Business Banner */}
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-stone-900/90 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-semibold shadow-xl backdrop-blur-md">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.heroBadge}</span>
              <span className="hidden sm:inline text-amber-500/50">•</span>
              <span className="text-stone-300 font-mono">{t.crNumber}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              {isRtl ? (
                <>
                  ورشة حداد و المنيوم الرمال <br />
                  <span className="text-gold-gradient">دقة وفخامة التصنيع بالرياض</span>
                </>
              ) : (
                <>
                  Al Rimal Blacksmith & Aluminum <br />
                  <span className="text-gold-gradient">Precision Craftsmanship in Riyadh</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-stone-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-normal">
              {t.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient text-stone-950 font-extrabold text-base tracking-wide shadow-xl shadow-amber-500/10 hover:shadow-amber-500/30 bg-gold-gradient-hover transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <span>{t.getQuoteBtn}</span>
                {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </button>

              <a
                href="https://wa.me/966550737499"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-stone-900/90 border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 hover:bg-stone-800 font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>{t.whatsappUs}</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-stone-300 border-t border-stone-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isRtl ? 'تصاميم ليزر مخصصة' : 'Custom Laser Cut'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isRtl ? 'ضمان 10 سنوات مكتوب' : '10-Year Written Warranty'}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isRtl ? 'معاينة ومقاسات مجانية' : 'Free Site Measurement'}</span>
              </div>
            </div>

          </div>

          {/* Right Column - Work Carousel Feature Card & Google Rating */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Live Work Carousel Card */}
            <div className="metal-card-bg p-4 sm:p-5 rounded-2xl shadow-2xl relative overflow-hidden border border-amber-500/30">
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-3 group">
                <img
                  src={heroCarouselSlides[activeSlide].image}
                  alt={isRtl ? heroCarouselSlides[activeSlide].captionAr : heroCarouselSlides[activeSlide].captionEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                  <p className="text-xs sm:text-sm font-semibold text-amber-300 drop-shadow-md">
                    {isRtl ? heroCarouselSlides[activeSlide].captionAr : heroCarouselSlides[activeSlide].captionEn}
                  </p>
                </div>

                {/* Nav Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-colors"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-colors"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center justify-center gap-1.5 pb-2">
                {heroCarouselSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activeSlide ? 'w-6 bg-amber-400' : 'w-2 bg-stone-700'
                    }`}
                  />
                ))}
              </div>

              {/* Google Review Box */}
              <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                    ))}
                    <span className="ms-1 font-bold text-white">4.6</span>
                  </div>
                  <span className="text-stone-300 font-medium">{t.googleRatingText}</span>
                </div>

                <div className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-center">
                  <ShieldCheck className="w-4 h-4 text-amber-400 mx-auto" />
                  <span className="text-[10px] text-amber-400 font-mono font-bold">CR 7005006387</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
