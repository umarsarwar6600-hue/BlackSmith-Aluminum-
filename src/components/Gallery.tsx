import React, { useState } from 'react';
import { galleryData } from '../data/galleryData';
import { GalleryItem, Language } from '../types';
import { translations } from '../data/translations';
import { Eye, MapPin, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface GalleryProps {
  lang: Language;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ lang, onOpenQuoteModal }) => {
  const t = translations[lang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', name: t.catAll },
    { id: 'gates', name: t.catGates },
    { id: 'windows', name: t.catWindows },
    { id: 'railings', name: t.catRailings },
    { id: 'shades', name: t.catShades },
    { id: 'fences', name: t.catFences },
    { id: 'partitions', name: t.catPartitions },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-[#141416] relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span>{t.navGallery}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.gallerySectionTitle}
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            {t.gallerySubtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gold-gradient text-stone-950 shadow-lg shadow-amber-500/10 scale-105'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="metal-card-bg rounded-2xl overflow-hidden group cursor-pointer border border-stone-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3 text-amber-500" />
                    {item.location[lang]}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-amber-300 transition-colors">
                    {item.title[lang]}
                  </h3>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-900/80 border border-amber-500/40 flex items-center justify-center text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#18181B] border border-amber-500/30 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-stone-900/80 text-stone-200 hover:text-amber-400 flex items-center justify-center border border-stone-700"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-12">
              <div className="md:col-span-7 bg-black flex items-center justify-center min-h-[300px]">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title[lang]}
                  className="w-full h-full max-h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{lightboxItem.location[lang]}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {lightboxItem.title[lang]}
                  </h3>

                  <p className="text-stone-300 text-sm leading-relaxed">
                    {lightboxItem.description[lang]}
                  </p>

                  {lightboxItem.specs && (
                    <div className="pt-4 border-t border-stone-800 space-y-2">
                      <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        {lang === 'ar' ? 'المواصفات الفنية:' : 'Technical Specs:'}
                      </p>
                      <ul className="space-y-1.5 text-xs text-stone-300">
                        {lightboxItem.specs[lang].map((spec, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    setLightboxItem(null);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gold-gradient text-stone-950 font-bold text-sm text-center shadow-lg hover:shadow-amber-500/20 transition-all"
                >
                  {t.getQuoteBtn}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
