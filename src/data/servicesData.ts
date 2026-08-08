import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'iron-gates',
    iconName: 'DoorClosed',
    badge: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    title: {
      ar: 'بوابات وأبواب حديد ليزر وفاخرة',
      en: 'Custom Iron Gates & Doors'
    },
    shortDesc: {
      ar: 'تصنيع أبواب وبوابات ليزر فورجيه مع طلاء حراري ناري حامي من الصدأ والعوامل الجوية بالرياض.',
      en: 'Custom laser-cut and wrought iron villa gates with weather-proof electrostatic thermo-coating.'
    },
    fullDesc: {
      ar: 'نصمم وننفذ أرقى بوابات الفلل والقصور بالليزر (CNC) والحديد المشغول، مجهزة بأقفال إلكترونية ومحركات إيطالية مع ضمان عدم يتغير اللون أو يتأثر بأشعة الشمس.',
      en: 'Precision engineered CNC laser-cut and hand-forged gates equipped with smart digital lock compatibility, automated heavy-duty motors, and anti-rust oven coatings.'
    },
    features: {
      ar: ['قص بالليزر ثلاثي الأبعاد دقيق', 'دهان ناري حراري مقاوم للصدأ والشمس', 'إمكانية دمج الخشب الصافي أو اللكسان', 'تركيب أقفال ذكية ومحركات كهربائية'],
      en: ['Precision 3D CNC laser cutting', 'Thermo-baked electrostatic rustproof paint', 'Optional natural wood or poly-carbonate inserts', 'Smart lock & automatic gate motor readiness']
    },
    image: '/src/assets/images/luxury_iron_gate_1786145969029.jpg'
  },
  {
    id: 'aluminum-windows',
    iconName: 'AppWindow',
    badge: { ar: 'دبل جلاس عازل', en: 'Double Glazed' },
    title: {
      ar: 'شبابيك وأبواب ألمنيوم معزولة',
      en: 'Aluminum Windows & Doors'
    },
    shortDesc: {
      ar: 'تركيب نوافذ وأبواب ألمنيوم سرايا وسحب مع زجاج مضاعف عازل للصوت والغبار والحرارة.',
      en: 'Thermal & sound insulated double-glazed aluminum window systems and sliding patio doors.'
    },
    fullDesc: {
      ar: 'تصنيع شبابيك الألمنيوم بقطاعات معتمدة (سرايا، جامبو، وسحاب) مجهزة بزجاج دبل جلاس معزول حرارياً لتوفير الطاقة وتقليل الضوضاء في شوارع الرياض.',
      en: 'Fabrication using KSA certified aluminum structural profiles (Saraya, Jumbo, Sliding) with double-glazed low-E glass that blocks heat and urban noise.'
    },
    features: {
      ar: ['قطاعات ألمنيوم معتمدة ومقاومة للحرارة', 'زجاج مضاعف (Double Glass) عازل للصوت', 'إكسسوارات ومقابض إيطالية فاخرة', 'مانع تسريب الغبار والماء محكم'],
      en: ['Certified structural thermal-break profiles', 'Soundproof & UV heat reflecting double glass', 'Premium Italian locking handles & rollers', 'High-density dust and water seal rubber gaskets']
    },
    image: '/src/assets/images/aluminum_window_works_1786146507952.jpg'
  },
  {
    id: 'stair-railings',
    iconName: 'Layers',
    title: {
      ar: 'درابزين السلالم واللكسان والاستيل',
      en: 'Staircase Railings & Handrails'
    },
    shortDesc: {
      ar: 'تفصيل درابزين حديد، استانلس ستيل وزجاج سيكوريت للسلالم الداخلية والبلكونات بتصاميم مودرن.',
      en: 'Modern interior staircase railings, stainless steel, and tempered glass balcony handrails.'
    },
    fullDesc: {
      ar: 'نوفر درابزين بتصاميم عصرية وكلاسيكية تناسب ديكورات الفلل والعمائر، مصممة بدقة لتضمن الأمان التام واللمسة الجمالية الفاخرة.',
      en: 'Crafting bespoke wrought iron, stainless steel, and frameless toughened glass handrails that complement luxury interior and exterior architecture.'
    },
    features: {
      ar: ['استيل 316 مقاوم للصدأ والخدش', 'دمج الزجاج المعشق أو السيكوريت 12 ملم', 'تصاميم مودرن وكلاسيك حسب الطلب', 'لحام وإخفاء الوصلات باحترافية عالية'],
      en: ['Grade 316 corrosion resistant stainless steel', '12mm heavy-duty tempered safety glass', 'Modern minimalism or classic gold ornamental patterns', 'Seamless invisible weld finishing']
    },
    image: '/src/assets/images/staircase_railing_metal_1786146520730.jpg'
  },
  {
    id: 'car-shades',
    iconName: 'Umbrella',
    badge: { ar: 'قماش الكابولي وقماش PVC', en: 'PVC & Cantilever' },
    title: {
      ar: 'مظلات وسواتر سيارات وحدائق',
      en: 'Shades & Parking Canopies'
    },
    shortDesc: {
      ar: 'تركيب مظلات سيارات كابولي ومظلات حدائق قماش PVC ألماني وكوري وهياكل حديدية معزولة.',
      en: 'Heavy-duty steel car parking shade structures and garden canopies with high-density PVC membrane.'
    },
    fullDesc: {
      ar: 'نصمم ونركب مظلات السيارات والسواتر الجدارية بمواصفات عالية تتحمل الرياح والحرارة العالية بالرياض مع أغطية PVC عازلة للأشعة فوق البنفسجية 100%.',
      en: 'Engineering cantilevered steel shade frameworks covered with high-tier German/Korean PVC or Polyethylene cloth, certified to withstand strong thermal winds.'
    },
    features: {
      ar: ['قماش PVC ألماني/كوري عازل للحرارة 100%', 'هياكل حديدية مدهونة بطلاء أيبوكسي مقاوم', 'تصاميم كابولي وهرمية ومودرن', 'سواتر حديد مجدول وشرائح للخصوصية'],
      en: ['100% UV block German/Korean PVC fabric', 'Epoxy primer anti-corrosion steel trusses', 'Cantilevered, pyramid, and arched modern styles', 'Privacy louvers & decorative fencing strips']
    },
    image: '/src/assets/images/car_parking_shade_1786146533849.jpg'
  },
  {
    id: 'steel-fences',
    iconName: 'ShieldAlert',
    title: {
      ar: 'أسوار حديدية وشباك حماية',
      en: 'Steel Fences & Security Grilles'
    },
    shortDesc: {
      ar: 'تصنيع أسوار الحديد الأمنية وحماية النوافذ والأسوار الخارجية بتصاميم فاخرة ومتينة.',
      en: 'Decorative perimeter steel fencing, window protection grilles, and boundary barriers.'
    },
    fullDesc: {
      ar: 'تأمين المباني والفلل بأسوار حديدية قوية وشباك حماية للنوافذ والأرتواز بلمسات جمالية مكملة للواجهات دون التضحية بالمظهر الهندسي.',
      en: 'Enhance security with elegant yet heavy-duty perimeter steel fencing, security spikes, and window guards designed to match your exterior villa aesthetic.'
    },
    features: {
      ar: ['حديد قطاعات ثقيلة ومجلفن', 'شبك حماية ديكوري للنوافذ', 'طلاء ضد عوامل الرطوبة والصدأ', 'تركيب قواعد خرسانية محكمة'],
      en: ['Heavy gauge galvanized structural steel', 'Decorative security window grilles', 'Multi-layer anti-rust primer and topcoat', 'Anchor bolt concrete foundation mounting']
    },
    image: '/src/assets/images/steel_fence_security_1786146547256.jpg'
  },
  {
    id: 'glass-partitions',
    iconName: 'Grid',
    title: {
      ar: 'قواطع زجاج وألمنيوم للمكاتب والفلل',
      en: 'Glass & Aluminum Partitions'
    },
    shortDesc: {
      ar: 'تنفيذ قواطع ألمنيوم مع زجاج سيكوريت وفواصل مكتبية ومجالس بتصاميم أنيقة.',
      en: 'Frameless glass and slim aluminum grid office partitions and villa space dividers.'
    },
    fullDesc: {
      ar: 'حلول قواطع الزجاج والألمنيوم المودرن للمكاتب والمنازل بأسلوب بوهيمي أو أسود أسود فاخر (Black Frame)، يمنح إضاءة طبيعية وعزل ضوضائي.',
      en: 'Architectural aluminum and glass partitions featuring sleek black anodized frames, frosted/clear toughened glass, and sliding acoustic doors.'
    },
    features: {
      ar: ['قطاعات ألمنيوم رفيعة المظهر (Slim Profile)', 'زجاج سيكوريت 10ملم - 12ملم معتم أو شفاف', 'عزل صوتي ممتاز للمكاتب', 'أبواب سحاب أو مفصلية بمفصلات إيطالية'],
      en: ['Ultra-slim architectural aluminum grid profiles', '10mm - 12mm clear or frosted safety glass', 'Superior acoustic insulation for workspaces', 'Soft-close sliding or swing doors']
    },
    image: '/src/assets/images/glass_aluminum_partition_1786146559357.jpg'
  },
  {
    id: 'custom-fabrication',
    iconName: 'Wrench',
    title: {
      ar: 'تصنيع حديد وألمنيوم حسب الطلب',
      en: 'Custom Metal & Aluminum Fabrication'
    },
    shortDesc: {
      ar: 'تنفيذ كافة الأفكار والمخططات الهندسية الخاصة بدقة متناهية من الصفر.',
      en: 'Bespoke custom metal fabrication tailored directly from engineer CAD drawings or client blueprints.'
    },
    fullDesc: {
      ar: 'إذا كان لديك تصميم خاص أو فكرة هندسية، فريقنا قادر على تحويل المخططات إلى واقع ملموس بدقة قص وتجميع لا مثيل لها.',
      en: 'From unique architectural features, metal pergolas, customized planter boxes, to ornamental art panels, we manufacture custom specs from start to finish.'
    },
    features: {
      ar: ['تنفيذ حسب المخططات الهندسية وCAD', 'نمذجة ومعاينة قبل التنفيذ', 'مرونة في دمج المعادن المختلفة', 'حلول مخصصة للمشاريع الفندقية والتجارية'],
      en: ['Direct execution from CAD/3D blueprints', 'Pre-fabrication 3D model approval', 'Multi-metal integration (Brass, Steel, Alum)', 'Bespoke hotel & luxury villa solutions']
    },
    image: '/src/assets/images/blacksmith_hero_bg_1786145955790.jpg'
  },
  {
    id: 'repair-maintenance',
    iconName: 'Settings',
    title: {
      ar: 'خدمات الصيانة والإصلاح الفوري',
      en: 'Repair & Maintenance Services'
    },
    shortDesc: {
      ar: 'صيانة وتجديد الأبواب، تغيير المفصلات، تعديل النوافذ، وإعادة طلاء الحديد.',
      en: 'Emergency repair, hinge replacement, window realignment, and metal repainting.'
    },
    fullDesc: {
      ar: 'فريق صيانة متخصص ومجهز للوصول لموقعك في الرياض لإصلاح مشاكل الأبواب والشبابيك، استبدال المفصلات والمكائن، أو تجديد دهان الأبواب القديمة.',
      en: 'A mobile rapid response unit in Riyadh ready for window realignment, hardware swaps, hinge reinforcement, and fresh thermo-paint renewal.'
    },
    features: {
      ar: ['زيارة سريعة للموقع في كافة أحياء الرياض', 'استبدال الإكسسوارات والمفصلات التالفة', 'معالجة الصدأ وتجديد دهان الأبواب', 'تعديل وزنية الشبابيك وسكك السحاب'],
      en: ['Rapid dispatch team across all Riyadh districts', 'Hardware and hinge swaps with high-durability parts', 'Rust removal & fresh electrostatic recoating', 'Sliding track repair & door alignment']
    },
    image: '/src/assets/images/metal_repair_welding_1786146571821.jpg'
  }
];
