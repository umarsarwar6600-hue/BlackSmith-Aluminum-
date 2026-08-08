import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Calculator, MessageSquare, Info, ShieldCheck, Check } from 'lucide-react';

interface CostEstimatorProps {
  lang: Language;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ lang }) => {
  const t = translations[lang];

  const [serviceType, setServiceType] = useState<string>('iron-gate');
  const [width, setWidth] = useState<number>(3);
  const [height, setHeight] = useState<number>(2.5);
  const [grade, setGrade] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [includeInstall, setIncludeInstall] = useState<boolean>(true);

  // Price calculation constants per square meter in SAR
  const rates: Record<string, { standard: number; premium: number; luxury: number }> = {
    'iron-gate': { standard: 450, premium: 650, luxury: 950 },
    'aluminum-window': { standard: 380, premium: 520, luxury: 750 },
    'stair-railing': { standard: 320, premium: 480, luxury: 680 },
    'car-shade': { standard: 180, premium: 260, luxury: 380 },
    'steel-fence': { standard: 220, premium: 340, luxury: 500 },
    'glass-partition': { standard: 400, premium: 580, luxury: 820 },
  };

  const selectedRate = rates[serviceType] || rates['iron-gate'];
  const baseRate = selectedRate[grade];
  const area = Math.max(1, width * height);
  const rawCost = Math.round(area * baseRate);
  const installCost = includeInstall ? Math.round(area * 50 + 300) : 0;
  const totalCost = rawCost + installCost;

  const serviceNames: Record<string, { ar: string; en: string }> = {
    'iron-gate': { ar: 'بوابة أو باب حديد ليزر', en: 'Iron Gate / Door' },
    'aluminum-window': { ar: 'شبابيك ونوافذ ألمنيوم دبل', en: 'Aluminum Windows' },
    'stair-railing': { ar: 'درابزين سلالم واستيل', en: 'Staircase Railings' },
    'car-shade': { ar: 'مظلة سيارات وقماش PVC', en: 'Car Parking Shade' },
    'steel-fence': { ar: 'سور حديد وشباك حماية', en: 'Steel Fence' },
    'glass-partition': { ar: 'قواطع زجاج وألمنيوم', en: 'Glass Partition' },
  };

  const gradeNames: Record<string, { ar: string; en: string }> = {
    standard: { ar: 'قياسي عالي الجودة', en: 'Standard High Quality' },
    premium: { ar: 'ممتاز دهان ناري وقص ليزر', en: 'Premium Thermo-Coated' },
    luxury: { ar: 'فاخر سوبر ديلوكس إكسسوار إيطالي', en: 'Luxury Super Deluxe' },
  };

  const handleSendWhatsapp = () => {
    const textAr = `مرحباً ورشة الرمال، أرغب بالحصول على كوتشين ومقاسات دقيقة بناءً على استفسار الحساب:\n- الخدمة: ${serviceNames[serviceType]?.ar}\n- الأبعاد: ${width}م × ${height}م (${area.toFixed(1)} م²)\n- الفئة: ${gradeNames[grade]?.ar}\n- التركيب: ${includeInstall ? 'شامل التركيب في الرياض' : 'بدون تركيب'}\n- التكلفة التقديرية: ${totalCost.toLocaleString()} ريال سعودي.`;
    const textEn = `Hello Al Rimal Workshop, I calculated an estimate on your site and want a free inspection:\n- Service: ${serviceNames[serviceType]?.en}\n- Size: ${width}m x ${height}m (${area.toFixed(1)} m²)\n- Grade: ${gradeNames[grade]?.en}\n- Installation: ${includeInstall ? 'Includes Riyadh Fitting' : 'No Fitting'}\n- Estimated Price: ${totalCost.toLocaleString()} SAR.`;

    const message = lang === 'ar' ? textAr : textEn;
    window.open(`https://wa.me/966550737499?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="estimator" className="py-24 bg-[#0F0F10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.navEstimator}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.estimatorTitle}
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            {t.estimatorSubtitle}
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Inputs */}
          <div className="lg:col-span-7 metal-card-bg p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-6">
            
            {/* Service Selector */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-stone-200">
                {t.selectServiceLabel}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.keys(rates).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setServiceType(key)}
                    className={`p-3 rounded-xl text-xs font-bold transition-all text-center border ${
                      serviceType === key
                        ? 'bg-amber-500/20 text-amber-400 border-amber-500'
                        : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    {serviceNames[key]?.[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders for Width and Height */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold text-stone-200">
                  <span>{t.widthLabel}</span>
                  <span className="text-amber-400 font-mono">{width} {lang === 'ar' ? 'متر' : 'm'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 bg-stone-800 rounded-lg cursor-pointer h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold text-stone-200">
                  <span>{t.heightLabel}</span>
                  <span className="text-amber-400 font-mono">{height} {lang === 'ar' ? 'متر' : 'm'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 bg-stone-800 rounded-lg cursor-pointer h-2"
                />
              </div>

            </div>

            {/* Material Grade Selection */}
            <div className="space-y-2 pt-2">
              <label className="block text-sm font-bold text-stone-200">
                {t.qualityGradeLabel}
              </label>
              <div className="space-y-2">
                {(['standard', 'premium', 'luxury'] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGrade(g)}
                    className={`w-full p-3 rounded-xl text-xs sm:text-sm font-medium transition-all text-start flex items-center justify-between border ${
                      grade === g
                        ? 'bg-amber-500/10 text-white border-amber-500/60'
                        : 'bg-stone-900/80 text-stone-400 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <span>{g === 'standard' ? t.gradeStandard : g === 'premium' ? t.gradePremium : t.gradeLuxury}</span>
                    {grade === g && <Check className="w-4 h-4 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkbox for Installation */}
            <div className="pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeInstall}
                  onChange={(e) => setIncludeInstall(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                />
                <span className="text-sm font-semibold text-stone-200">
                  {t.includeInstallLabel}
                </span>
              </label>
            </div>

          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 metal-card-bg p-6 sm:p-8 rounded-2xl border border-amber-500/40 space-y-6 shadow-2xl relative">
            
            <div className="border-b border-stone-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {t.estimatedTotal}
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                  {totalCost.toLocaleString()}
                </span>
                <span className="text-lg font-bold text-amber-400">
                  {t.sarCurrency}
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <div className="flex justify-between py-1 border-b border-stone-800/60">
                <span>{lang === 'ar' ? 'المساحة الإجمالية:' : 'Total Surface Area:'}</span>
                <span className="font-mono font-bold text-white">{area.toFixed(1)} {lang === 'ar' ? 'متر مربع' : 'sq.m'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800/60">
                <span>{lang === 'ar' ? 'نوع الخدمة والمواد:' : 'Service & Material:'}</span>
                <span className="font-bold text-amber-300">{serviceNames[serviceType]?.[lang]}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800/60">
                <span>{lang === 'ar' ? 'رسوم التركيب والمعاينة:' : 'Installation & Inspection:'}</span>
                <span className="font-bold text-emerald-400">{includeInstall ? (lang === 'ar' ? 'مشمول بالرياض' : 'Included in Riyadh') : (lang === 'ar' ? 'غير مشمول' : 'Excluded')}</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 flex items-start gap-2 text-xs text-stone-400">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p>{t.estimatorDisclaimer}</p>
            </div>

            <button
              onClick={handleSendWhatsapp}
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t.sendToWhatsapp}</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
