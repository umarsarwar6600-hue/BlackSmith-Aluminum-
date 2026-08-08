import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { Language, QuoteFormData } from '../types';
import { translations } from '../data/translations';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2, ShieldCheck, Map } from 'lucide-react';

interface ContactProps {
  lang: Language;
  preselectedServiceId?: string;
}

export const Contact: React.FC<ContactProps> = ({ lang, preselectedServiceId }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    serviceId: preselectedServiceId || 'iron-gates',
    district: '',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Also construct WhatsApp message link for direct send option
      const selectedServiceObj = servicesData.find(s => s.id === formData.serviceId);
      const serviceName = selectedServiceObj ? selectedServiceObj.title[lang] : formData.serviceId;
      
      const whatsappMsg = `طلب جديد من الموقع:\n- الاسم: ${formData.fullName}\n- الجوال: ${formData.phone}\n- الخدمة: ${serviceName}\n- الحي: ${formData.district}\n- التفاصيل: ${formData.projectDetails}`;
      
      window.open(`https://wa.me/966550737499?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#141416] relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span>{t.navContact}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.contactSectionTitle}
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Quote Form */}
          <div className="lg:col-span-7 metal-card-bg p-6 sm:p-10 rounded-2xl border border-stone-800 shadow-2xl space-y-6">
            
            <div className="border-b border-stone-800 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Send className="w-5 h-5 text-amber-400" />
                <span>{t.getQuoteBtn}</span>
              </h3>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h4 className="text-2xl font-bold text-white">
                  {t.formSuccessMsg}
                </h4>
                <p className="text-stone-400 text-sm max-w-md mx-auto">
                  {lang === 'ar' ? 'تم فتح تطبيق الواتساب بنجاح لتأكيد طلبك وتزويدك بعرض السعر المكتوب.' : 'WhatsApp chat opened to confirm your quote request details.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-200 text-xs font-bold hover:bg-stone-800"
                >
                  {lang === 'ar' ? 'إرسال طلب جديد' : 'Submit Another Request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                
                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-stone-300 font-bold">
                      {t.formFullName} <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={t.formFullNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-stone-300 font-bold">
                      {t.formPhone} <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.formPhonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white focus:border-amber-500 outline-none transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Service & District */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-stone-300 font-bold">
                      {t.formServiceRequired}
                    </label>
                    <select
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white focus:border-amber-500 outline-none transition-colors cursor-pointer"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title[lang]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-stone-300 font-bold">
                      {t.formDistrict}
                    </label>
                    <input
                      type="text"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      placeholder={t.formDistrictPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <label className="block text-stone-300 font-bold">
                    {t.formDetails}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder={t.formDetailsPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white focus:border-amber-500 outline-none transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-gold-gradient text-stone-950 font-extrabold text-base tracking-wide shadow-lg hover:shadow-amber-500/20 bg-gold-gradient-hover transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 text-stone-950" />
                  <span>{submitting ? t.formSubmitting : t.formSubmitBtn}</span>
                </button>

              </form>
            )}

          </div>

          {/* Workshop Details & Google Map Frame */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Box */}
            <div className="metal-card-bg p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-6">
              
              <div className="space-y-4">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{t.workshopAddressTitle}</h4>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">{t.workshopAddress}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{t.workingHoursTitle}</h4>
                    <p className="text-stone-300 text-xs sm:text-sm">{t.workingHoursWeekdays}</p>
                    <p className="text-stone-400 text-xs">{t.workingHoursFriday}</p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{t.phoneLabel}</h4>
                    <a href="tel:+966550737499" className="text-amber-400 font-mono font-bold text-base hover:underline block">
                      +966 55 073 7499
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{t.emailLabel}</h4>
                    <a href="mailto:junaidmehmood7091@gmail.com" className="text-stone-300 hover:text-white text-xs font-mono underline block">
                      junaidmehmood7091@gmail.com
                    </a>
                  </div>
                </div>

                {/* CR Registration */}
                <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                  <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    {t.crNumber}
                  </span>
                  <span>الرياض / Riyadh</span>
                </div>

              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="metal-card-bg rounded-2xl overflow-hidden border border-stone-800 relative h-64 shadow-xl">
              <iframe
                title="Workshop Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.6109923838087!2d46.8189!3d24.8471!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUwJzE5LjYiTiA0NsKwNDknMDguMCJF!5e0!3m2!1sen!2ssa!4v1680000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.6) contrast(1.2) invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://maps.google.com/?q=24.8471,46.8189"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-stone-900/90 text-amber-400 text-xs font-bold border border-amber-500/40 flex items-center gap-1 hover:bg-stone-900"
              >
                <Map className="w-3.5 h-3.5" />
                <span>{t.openInGoogleMaps}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
