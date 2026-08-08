import { GalleryItem } from '../types';

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    category: 'gates',
    title: {
      ar: 'بوابة ليزر ذهبي فاخرة لفيلا مودرن',
      en: 'Luxury Golden Laser-Cut Villa Gate'
    },
    location: { ar: 'حي الملقا - الرياض', en: 'Al Malqa, Riyadh' },
    image: '/src/assets/images/luxury_iron_gate_1786145969029.jpg',
    description: {
      ar: 'تصميم بوابات ليزر أسود مطفي مع زخارف ذهبية مقاومة للشمس ومجهزة بمحرك سحاب إيطالي.',
      en: 'Matte black laser-cut gate with gold leaf inserts and automated Italian sliding system.'
    },
    specs: {
      ar: ['حديد قص ليزر 6 ملم', 'دهان ناري إيبوكسي حراري', 'محرك فتح أوتوماتيكي 1000 كجم'],
      en: ['6mm CNC laser-cut steel', 'Thermo-baked epoxy paint', '1000kg heavy-duty automatic motor']
    }
  },
  {
    id: 'g2',
    category: 'gates',
    title: {
      ar: 'باب حديد فورجيه كلاسيك قص ليزر',
      en: 'Classic Wrought Iron Main Entrance Gate'
    },
    location: { ar: 'حي الياسمين - الرياض', en: 'Al Yasmin, Riyadh' },
    image: '/src/assets/images/luxury_iron_gate_1786145969029.jpg',
    description: {
      ar: 'باب حديد مشغول يدوي مع إطار ليزر لمجالس وقصر فاخر بلمسات أثريّة زاهية.',
      en: 'Hand-forged ornamental iron entry gate with antique bronze patina for a luxury palace.'
    },
    specs: {
      ar: ['حديد صلب مشغول باليد', 'زجاج معشق عازل للحرارة', 'قفل إلكتروني ببصمة الإصبع'],
      en: ['Hand-forged solid steel', 'Heat-insulating stained glass', 'Biometric fingerprint smart lock']
    }
  },
  {
    id: 'g3',
    category: 'windows',
    title: {
      ar: 'شبابيك ألمنيوم سرايا دبل جلاس عازل',
      en: 'Saraya Double-Glazed Aluminum Windows'
    },
    location: { ar: 'حي النرجس - الرياض', en: 'An Narjis, Riyadh' },
    image: '/src/assets/images/aluminum_window_works_1786146507952.jpg',
    description: {
      ar: 'تركيب واجهة نوافذ ألمنيوم دبل جلاس عاكس للشمس مع إطار أسود أنيق للفيلا.',
      en: 'Modern black frame aluminum double-glazed windows blocking heat and glare.'
    },
    specs: {
      ar: ['قطاع ألمنيوم معزول thermal-break', 'زجاج عاكس 24 ملم دبل', 'ضمان 10 سنوات على التسريب'],
      en: ['Thermal-break aluminum section', '24mm reflective double glass', '10-year leakproof warranty']
    }
  },
  {
    id: 'g4',
    category: 'railings',
    title: {
      ar: 'درابزين سلم زجاج سيكوريت مع استيل ذهبي',
      en: 'Frameless Glass & Gold Steel Stair Railing'
    },
    location: { ar: 'حي حطين - الرياض', en: 'Hittin, Riyadh' },
    image: '/src/assets/images/staircase_railing_metal_1786146520730.jpg',
    description: {
      ar: 'درابزين داخلي للسلالم بالزجاج الشفاف والسيكوريت 12ملم مع مقبض استيل ناعم.',
      en: 'Interior floating stair railing featuring 12mm toughened safety glass and gold steel capping.'
    },
    specs: {
      ar: ['زجاج سيكوريت معالج 12 ملم', 'استيل 316 لميع مضاد للبصمات', 'ثبات وهندسة أمان عالية'],
      en: ['12mm clear tempered glass', 'Grade 316 anti-fingerprint steel', 'Certified safety anchor fixings']
    }
  },
  {
    id: 'g5',
    category: 'shades',
    title: {
      ar: 'مظلة سيارات كابولي قماش PVC ألماني',
      en: 'Cantilevered PVC Car Parking Shade'
    },
    location: { ar: 'حي الرمال - الرياض', en: 'Ar Rimal, Riyadh' },
    image: '/src/assets/images/car_parking_shade_1786146533849.jpg',
    description: {
      ar: 'تغطية موقف سيارتين بمظلة كابولي بدون أعمدة أمامية تعيق الحركة بقماش PVC عالي الكثافة.',
      en: 'Dual-car parking shade with front obstruction-free cantilever steel design.'
    },
    specs: {
      ar: ['قماش PVC ألماني 1100 جرام', 'هيكل حديد مجلفن مدهون إيبوكسي', 'مقاوم للرياح حتى 120 كم/س'],
      en: ['1100g German PVC membrane', 'Epoxy powder coated steel truss', 'Wind resistance up to 120km/h']
    }
  },
  {
    id: 'g6',
    category: 'fences',
    title: {
      ar: 'سور حديد مجلفن وسواتر ليزر جانبية',
      en: 'Galvanized Steel Fence & Privacy Laser Panel'
    },
    location: { ar: 'حي اليرموك - الرياض', en: 'Al Yarmouk, Riyadh' },
    image: '/src/assets/images/steel_fence_security_1786146547256.jpg',
    description: {
      ar: 'سور حماية خارجي للفيلا مدمج بساتر ليزر لمنح الخصوصية التامة مع الحفاظ على التهوئة.',
      en: 'Boundary steel security fence with laser-etched privacy louvers.'
    },
    specs: {
      ar: ['حدادة جلفنة ساخنة ضد الصدأ', 'قص ليزر هندسي مودرن', 'تركيب خرساني قوي'],
      en: ['Hot-dip galvanized anti-rust steel', 'Modern geometric CNC cut pattern', 'Heavy concrete anchor fixings']
    }
  },
  {
    id: 'g7',
    category: 'partitions',
    title: {
      ar: 'قواطع زجاج وألمنيوم سوداء للمكاتب والمجالس',
      en: 'Black Grid Aluminum & Glass Partition'
    },
    location: { ar: 'حي الصحافة - الرياض', en: 'As Sahafah, Riyadh' },
    image: '/src/assets/images/glass_aluminum_partition_1786146559357.jpg',
    description: {
      ar: 'تقسيم مساحات مع إطارات ألمنيوم سوداء نحيفة وزجاج عازل للصوت للشركات والفلل.',
      en: 'Architectural aluminum grid glass wall divider with soft-close sliding doors.'
    },
    specs: {
      ar: ['ألمنيوم نحيف سمك 25 ملم', 'زجاج عازل للصوت 10 ملم', 'أبواب سحاب بنظام هيدروليكي'],
      en: ['Ultra-slim 25mm profile', '10mm acoustic safety glass', 'Soft-closing hydraulic sliding system']
    }
  },
  {
    id: 'g8',
    category: 'gates',
    title: {
      ar: 'لحام وتجديد أبواب حديد وصيانة فوريّة',
      en: 'Precision Gate Welding & Maintenance'
    },
    location: { ar: 'حي العارض - الرياض', en: 'Al Arid, Riyadh' },
    image: '/src/assets/images/metal_repair_welding_1786146571821.jpg',
    description: {
      ar: 'صيانة وتجديد الأبواب، إعادة طلاء حراري ناري ومعالجة الصدأ وتعديل المظلات والشبابيك.',
      en: 'On-site precision welding, hinge reinforcement, and rustproof electrostatic painting.'
    },
    specs: {
      ar: ['لحام احترافي بدون آثار شروخ', 'معالجة صدأ وضمان الدهان', 'استبدال سليم للمفصلات'],
      en: ['Seamless structural welding', 'Anti-rust chemical wash & recoat', 'Heavy-duty hardware replacement']
    }
  }
];
