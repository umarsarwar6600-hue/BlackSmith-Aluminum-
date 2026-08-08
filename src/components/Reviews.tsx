import React, { useState } from 'react';
import { reviewsData } from '../data/reviewsData';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Star, MapPin, ExternalLink, PlusCircle, CheckCircle2, X } from 'lucide-react';

interface ReviewsProps {
  lang: Language;
}

export const Reviews: React.FC<ReviewsProps> = ({ lang }) => {
  const t = translations[lang];
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');
  const [comment, setComment] = useState('');

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setName('');
      setDistrict('');
      setComment('');
    }, 2500);
  };

  return (
    <section id="reviews" className="py-24 bg-[#0F0F10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Rating Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <span>{t.navReviews}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t.reviewsSectionTitle}
            </h2>
            <p className="text-stone-400 text-base sm:text-lg">
              {t.reviewsSubtitle}
            </p>
          </div>

          {/* Google Badge Box */}
          <div className="metal-card-bg p-5 rounded-2xl border border-amber-500/30 flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center font-bold text-2xl text-white">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
                <span className="ms-1 font-bold text-white text-base">4.6</span>
              </div>
              <p className="text-xs text-stone-300 font-semibold mt-0.5">{t.basedOnReviews}</p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="ms-auto px-3.5 py-2 rounded-xl bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 text-xs font-bold transition-all border border-amber-500/40 flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{t.writeReviewModalBtn}</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="metal-card-bg p-6 rounded-2xl border border-stone-800 flex flex-col justify-between space-y-4 hover:border-amber-500/30 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-400 font-medium">{rev.date[lang]}</span>
                </div>

                <p className="text-stone-300 text-sm leading-relaxed italic">
                  "{rev.comment[lang]}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm">{rev.author[lang]}</h4>
                  <p className="text-xs text-amber-400/90 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{rev.district[lang]}</span>
                  </p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-1 rounded bg-stone-900 border border-stone-800 text-stone-400">
                  {rev.serviceUsed[lang]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#18181B] border border-amber-500/40 rounded-2xl max-w-md w-full p-6 relative space-y-6 shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white">
              {t.writeReviewModalBtn}
            </h3>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <p className="text-white font-bold text-base">
                  {lang === 'ar' ? 'شكراً لتقييمك! تم حفظ مشاركتك بنجاح.' : 'Thank you for your review! Saved successfully.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-stone-300 font-semibold mb-1">
                    {lang === 'ar' ? 'التقييم:' : 'Rating:'}
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className="text-yellow-400 focus:outline-none"
                      >
                        <Star className={`w-6 h-6 ${star <= newRating ? 'fill-yellow-400' : 'text-stone-600'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-stone-300 font-semibold mb-1">
                    {t.formFullName}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.formFullNamePlaceholder}
                    className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-700 text-white focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-semibold mb-1">
                    {t.formDistrict}
                  </label>
                  <input
                    type="text"
                    required
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder={t.formDistrictPlaceholder}
                    className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-700 text-white focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-semibold mb-1">
                    {lang === 'ar' ? 'رأيك بالخدمة:' : 'Your Feedback:'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-700 text-white focus:border-amber-500 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gold-gradient text-stone-950 font-bold text-sm shadow-md"
                >
                  {lang === 'ar' ? 'إرسال التقييم' : 'Submit Review'}
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
