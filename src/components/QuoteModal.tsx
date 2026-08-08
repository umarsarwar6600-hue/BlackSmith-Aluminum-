import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { Language } from '../types';
import { translations } from '../data/translations';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface QuoteModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  defaultServiceId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ lang, isOpen, onClose, defaultServiceId }) => {
  if (!isOpen) return null;

  const t = translations[lang];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState(defaultServiceId || 'iron-gates');
  const [district, setDistrict] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const selectedServiceObj = servicesData.find(s => s.id === serviceId);
    const serviceName = selectedServiceObj ? selectedServiceObj.title[lang] : serviceId;

    const msg = `طلب سعر جديد عبر الموقع:\n- الاسم: ${fullName}\n- الجوال: ${phone}\n- الخدمة: ${serviceName}\n- الحي: ${district}\n- التفاصيل: ${details}`;

    setTimeout(() => {
      window.open(`https://wa.me/966550737499?text=${encodeURIComponent(msg)}`, '_blank');
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#18181B] border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl my-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            {t.crNumber}
          </span>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Send className="w-5 h-5 text-amber-400" />
            <span>{t.getQuoteBtn}</span>
          </h3>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
            <h4 className="text-xl font-bold text-white">
              {t.formSuccessMsg}
            </h4>
            <p className="text-xs text-stone-400">
              {lang === 'ar' ? 'جاري تحويلك للواتساب للتواصل المباشر مع المهندس...' : 'Redirecting to WhatsApp for direct consultation...'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            
            <div>
              <label className="block text-stone-300 font-bold mb-1">
                {t.formFullName} <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t.formFullNamePlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white focus:border-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-stone-300 font-bold mb-1">
                {t.formPhone} <span className="text-amber-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.formPhonePlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white focus:border-amber-500 outline-none font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-300 font-bold mb-1">
                  {t.formServiceRequired}
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white focus:border-amber-500 outline-none cursor-pointer"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-stone-300 font-bold mb-1">
                  {t.formDistrict}
                </label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder={t.formDistrictPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white focus:border-amber-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-300 font-bold mb-1">
                {t.formDetails}
              </label>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={t.formDetailsPlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white focus:border-amber-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gold-gradient text-stone-950 font-extrabold text-sm shadow-md hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.formSubmitBtn}</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
