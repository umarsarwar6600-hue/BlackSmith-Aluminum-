import { ReviewItem } from '../types';

export const reviewsData: ReviewItem[] = [
  {
    id: 'r1',
    author: { ar: 'أبو فهد القحطاني', en: 'Abu Fahad Al-Qahtani' },
    district: { ar: 'حي الملقا، الرياض', en: 'Al Malqa, Riyadh' },
    rating: 5,
    date: { ar: 'قبل أسبوعين', en: '2 weeks ago' },
    comment: {
      ar: 'ما شاء الله تبارك الله، تعامل راقي وشغل نظيف جداً! فصّلت عندهم بوابات ليزر للفيلا وشبابيك ألمنيوم دبل جلاس. الالتزام بالمواعيد والجودة عندهم فوق الممتازة.',
      en: 'Mashallah, superb professional craftsmanship and extremely clean work! I had my villa laser gates and double-glazed aluminum windows made here. On-time delivery and high quality.'
    },
    serviceUsed: { ar: 'بوابات ليزر وشبابيك ألمنيوم', en: 'Laser Gates & Aluminum Windows' }
  },
  {
    id: 'r2',
    author: { ar: 'المهندس عبدالمجيد العتيبي', en: 'Eng. Abdulmajeed Al-Otaibi' },
    district: { ar: 'حي الرمال، الرياض', en: 'Ar Rimal, Riyadh' },
    rating: 5,
    date: { ar: 'قبل شهر', en: '1 month ago' },
    comment: {
      ar: 'ورشة ممتازة وقريبة منا في حي الرمال. سويت عندهم مظلة سيارات كابولي ودرابزين استيل للسلالم. الدهان والمقاسات دقيقة للغاية والشباب في الورشة حريصين على أدق التفاصيل.',
      en: 'Top quality workshop in Ar Rimal. I got a cantilever car parking shade and stair railings. The paint finish and measurement precision are outstanding.'
    },
    serviceUsed: { ar: 'مظلات سيارات ودرابزين', en: 'Car Shades & Stair Railings' }
  },
  {
    id: 'r3',
    author: { ar: 'د. خالد الشمري', en: 'Dr. Khaled Al-Shammari' },
    district: { ar: 'حي الياسمين، الرياض', en: 'Al Yasmin, Riyadh' },
    rating: 5,
    date: { ar: 'قبل شهرين', en: '2 months ago' },
    comment: {
      ar: 'من أفضل ورش الحدادة والألمنيوم بالرياض. السعر منافس والمهندس حريص يعطيك الحل الأنسب بدون مبالغة. شغل الأبواب الحديد الدبل والنوافذ ممتاز وعازل تماماً.',
      en: 'One of the best metal & aluminum workshops in Riyadh. Competitive direct pricing and honest advice. The doors and soundproof windows turned out magnificent.'
    },
    serviceUsed: { ar: 'أبواب حديد ونوافذ معزولة', en: 'Iron Doors & Insulated Windows' }
  },
  {
    id: 'r4',
    author: { ar: 'أبو سارة الدوسري', en: 'Abu Sarah Al-Dossary' },
    district: { ar: 'حي النرجس، الرياض', en: 'An Narjis, Riyadh' },
    rating: 5,
    date: { ar: 'قبل 3 أشهر', en: '3 months ago' },
    comment: {
      ar: 'ركبوا لي قواطع زجاج وألمنيوم للمكتب وسور حديد حماية للمستودع. سرعة في التنفيذ وضمان مكتوب بالسجل التجاري. أنصح بالتعامل معهم وبشدة.',
      en: 'They installed aluminum glass partitions for my office and a security fence. Fast execution, written official CR warranty. Highly recommended!'
    },
    serviceUsed: { ar: 'قواطع زجاج وأسوار حماية', en: 'Glass Partitions & Fences' }
  },
  {
    id: 'r5',
    author: { ar: 'سلطان المطيري', en: 'Sultan Al-Mutairi' },
    district: { ar: 'حي اليرموك، الرياض', en: 'Al Yarmouk, Riyadh' },
    rating: 5,
    date: { ar: 'قبل 4 أشهر', en: '4 months ago' },
    comment: {
      ar: 'اتصلت عليهم لحالة صيانة عاجلة لباب الكراج والشبابيك السحاب. وصلوا في نفس اليوم وضبطوا كل شيء باحترافية وبسعر منطقي جداً.',
      en: 'Called them for urgent garage door & sliding window repair. Their team arrived same day and fixed everything professionally at a very fair price.'
    },
    serviceUsed: { ar: 'صيانة وإصلاح أبواب وشبابيك', en: 'Door & Window Maintenance' }
  }
];
