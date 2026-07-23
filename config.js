const CONFIG = {
  company: {
    name: 'Белая Улыбка',
    slogan: 'Ваша улыбка — наша забота',
    description: 'Современная стоматологическая клиника в Москве. Лечение, имплантация, отбеливание и протезирование с гарантией на все виды работ.',
    city: 'Москва',
    yearFounded: 2015
  },

  contact: {
    phone: '+7 (495) 111-22-33',
    phoneLink: 'tel:+74951112233',
    email: 'info@belayulybka.ru',
    address: 'Москва, ул. Арбат, д. 24, стр. 1',
    workHours: 'Пн-Пт: 09:00–21:00, Сб-Вс: 10:00–18:00',
    whatsapp: '+74951112233',
    telegram: '@belayulybka'
  },

  seo: {
    title: 'Белая Улыбка — Стоматология в Москве',
    description: 'Современная стоматология в Москве. Лечение зубов, имплантация, отбеливание, протезирование. Опытные врачи, европейское оборудование, гарантия.',
    keywords: 'стоматология Москва, лечение зубов, имплантация зубов, отбеливание зубов, протезирование зубов, стоматолог Арбат',
    ogImage: '/assets/og-belayulybka.jpg',
    canonical: 'https://belayulybka.ru'
  },

  design: {
    bgPrimary: '#FFFFFF',
    bgSecondary: '#F0F7FA',
    bgCard: '#FFFFFF',
    bgGlass: 'rgba(255, 255, 255, 0.8)',
    textPrimary: '#1A1A2E',
    textSecondary: '#4A5568',
    textMuted: '#A0AEC0',
    accentBlue: '#0077B6',
    accentGreen: '#00B4D8',
    accentCyan: '#00B4D8',
    gradientPrimary: 'linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)',
    gradientBorder: 'linear-gradient(135deg, #0077B6, #00B4D8)',
    glassBlur: '20px',
    glassBorder: '1px solid rgba(0, 119, 182, 0.15)',
    fontPrimary: "'Inter', sans-serif",
    fontMono: "'JetBrains Mono', monospace"
  },

  hero: {
    headline: 'Ваша улыбка — наша забота',
    subheadline: 'Современная стоматология',
    description: 'Клиника полного цикла: от профилактики до имплантации. Европейское оборудование, опытные врачи и гарантия на все виды работ.',
    ctaText: 'Записаться на приём',
    ctaSecondaryText: 'Посмотреть услуги',
    ctaLink: '#pricing',
    showStats: true,
    stats: [
      { value: '8+', label: 'Лет опыта' },
      { value: '15 000+', label: 'Довольных пациентов' },
      { value: '12', label: 'Врачей-специалистов' },
      { value: '5 лет', label: 'Гарантия на импланты' }
    ],
    showVisualization: true
  },

  doctors: {
    showDoctors: true,
    title: 'Наши врачи',
    subtitle: 'Команда профессионалов с многолетним опытом',
    items: [
      {
        name: 'Алексей Викторович Морозов',
        role: 'Главный врач, хирург-имплантолог',
        experience: '18 лет стажа',
        education: 'РНИМУ им. Пирогова, ординатура по хирургической стоматологии',
        specializations: ['Имплантация', 'Костная пластика', 'Удаление зубов мудрости'],
        photo: '/assets/doctor-morozov.jpg'
      },
      {
        name: 'Елена Сергеевна Кузнецова',
        role: 'Врач-ортодонт',
        experience: '12 лет стажа',
        education: 'МГМСУ, ординатура по ортодонтии',
        specializations: ['Брекеты', 'Элайнеры', 'Исправление прикуса'],
        photo: '/assets/doctor-kuznetsova.jpg'
      },
      {
        name: 'Дарья Александровна Волкова',
        role: 'Врач-терапевт, эндодонтист',
        experience: '10 лет стажа',
        education: 'РНИМУ им. Пирогова, ординатура по терапевтической стоматологии',
        specializations: ['Лечение каналов', 'Восстановление зубов', 'Эндодонтия'],
        photo: '/assets/doctor-volkova.jpg'
      }
    ]
  },

  features: {
    title: 'Наши услуги',
    subtitle: 'Полный спектр стоматологических услуг',
    showBentoGrid: true,
    items: [
      {
        id: 'treatment',
        title: 'Лечение зубов',
        description: 'Лечение кариеса, пульпита, периодонтита. Современные материалы и технологии. Безболезненное лечение под микроскопом.',
        icon: '🦷',
        size: 'medium',
        type: 'feature',
        color: '#0077B6'
      },
      {
        id: 'implantation',
        title: 'Имплантация',
        description: 'Установка имплантов ведущих мировых брендов. Одноэтапная и двухэтапная имплантация. Нагрузка сразу или через 3–6 месяцев.',
        icon: '🔩',
        size: 'medium',
        type: 'feature',
        color: '#00B4D8'
      },
      {
        id: 'whitening',
        title: 'Отбеливание',
        description: 'Профессиональное отбеливание зубов системами Zoom и Air Flow. Безопасно для эмали, результат до 2 лет.',
        icon: '✨',
        size: 'medium',
        type: 'feature',
        color: '#0077B6'
      },
      {
        id: 'prosthetics',
        title: 'Протезирование',
        description: 'Коронки, мосты, съёмные протезы. Керамика, циркон, металлокерамика. Восстановление функции и эстетики.',
        icon: '🏥',
        size: 'medium',
        type: 'feature',
        color: '#00B4D8'
      },
      {
        id: 'surgery',
        title: 'Хирургия',
        description: 'Удаление зубов任何复杂度, костная пластика, синус-лифтинг. Минимальная травматичность, быстрое восстановление.',
        icon: '⚕️',
        size: 'medium',
        type: 'feature',
        color: '#0077B6'
      },
      {
        id: 'children',
        title: 'Детская стоматология',
        description: 'Лечение зубов детям от 3 лет. Дружелюбная атмосфера, современная анестезия, герметизация фиссур и профилактика.',
        icon: '👶',
        size: 'medium',
        type: 'feature',
        color: '#00B4D8'
      }
    ]
  },

  pricing: {
    showPricing: true,
    title: 'Стоимость услуг',
    subtitle: 'Прозрачные цены без скрытых доплат',
    plans: [
      {
        name: 'Лечение зубов',
        price: 'от 3 000',
        currency: '₽',
        period: '',
        description: 'Лечение кариеса и восстановление зуба',
        features: [
          'Диагностика и снимок',
          'Анестезия включена',
          'Лечение кариеса',
          'Восстановление формы зуба',
          'Гарантия 2 года'
        ],
        excludedFeatures: [],
        cta: 'Записаться',
        popular: false,
        yookassaAmount: 3000,
        yookassaDescription: 'Лечение зуба — Белая Улыбка'
      },
      {
        name: 'Имплантация',
        price: 'от 35 000',
        currency: '₽',
        period: '',
        description: 'Установка импланта с коронкой',
        features: [
          'Консультация и 3D-снимок',
          'Имплант премиум-класса',
          'Установка импланта',
          'Снятие слепков',
          'Установка коронки',
          'Гарантия 5 лет'
        ],
        excludedFeatures: [],
        cta: 'Записаться',
        popular: true,
        yookassaAmount: 35000,
        yookassaDescription: 'Имплантация — Белая Улыбка'
      },
      {
        name: 'Отбеливание',
        price: 'от 15 000',
        currency: '₽',
        period: '',
        description: 'Профессиональное отбеливание зубов',
        features: [
          'Консультация и гигиена',
          'Отбеливание Zoom / Air Flow',
          'Фторирование после процедуры',
          'Результат до 2 лет',
          'Рекомендации по уходу'
        ],
        excludedFeatures: [],
        cta: 'Записаться',
        popular: false,
        yookassaAmount: 15000,
        yookassaDescription: 'Отбеливание зубов — Белая Улыбка'
      }
    ]
  },

  testimonials: {
    showTestimonials: true,
    title: 'Отзывы пациентов',
    items: [
      {
        name: 'Ольга Иванова',
        role: 'Пациент клиники',
        text: 'Долго боялась идти к стоматологу, но в «Белой Улыбке» всё прошло абсолютно безболезненно. Врач Волкова — настоящий профессионал, всё объяснила и сделала быстро. Теперь хожу только сюда!',
        rating: 5
      },
      {
        name: 'Сергей Попов',
        role: 'Пациент клиники',
        text: 'Делал имплантацию у доктора Морозова. Весь процесс занял 4 месяца, результат превзошёл ожидания. Зуб как настоящий, не отличить. Рекомендую клинику всем знакомым.',
        rating: 5
      },
      {
        name: 'Екатерина Смирнова',
        role: 'Пациент клиники',
        text: 'Водила дочь (5 лет) на лечение зубов. Ребёнок не плакал, врач нашла подход к ребёнку. Очень довольна, что нашли стоматологию, куда孩子 хочет возвращаться.',
        rating: 5
      }
    ]
  },

  faq: {
    showFaq: true,
    title: 'Часто задаваемые вопросы',
    items: [
      {
        question: 'Больно ли лечить зубы?',
        answer: 'Мы используем современные анестетики нового поколения. Лечение проходит абсолютно безболезненно. При необходимости применяем седацию для пациентов с зубофобией.'
      },
      {
        question: 'Сколько времени занимает имплантация?',
        answer: 'Установка импланта занимает 30–60 минут. Полный цикл (от установки до коронки) занимает от 3 до 6 месяцев в зависимости от метода. Существует также одноэтапная имплантация с нагрузкой сразу.'
      },
      {
        question: 'Какие гарантии вы даёте?',
        answer: 'На лечение зубов — 2 года. На имплантацию — 5 лет. На протезирование — 3 года. При соблюдении рекомендаций врача срок гарантии может быть продлён.'
      },
      {
        question: 'Принимаете ли вы по ОМС?',
        answer: 'Клиника работает на платной основе, однако мы принимаем полисы ДМС от ведущих страховых компаний: АльфаСтрахование, Ренессанс, Согласие и других.'
      },
      {
        question: 'Можно ли оплатить лечение в рассрочку?',
        answer: 'Да, мы предлагаем рассрочку на 3–12 месяцев без переплат через банки-партнёры. Также доступна оплата кредитными картами с отложенным платежом.'
      },
      {
        question: 'Нужно ли приходить на консультацию перед лечением?',
        answer: 'Да, первичная консультация включает осмотр, цифровой снимок и составление плана лечения. Это помогает точно определить объём работ и стоимость.'
      }
    ]
  },

  form: {
    title: 'Запишитесь на приём',
    subtitle: 'Оставьте заявку и мы перезвоним в течение 15 минут',
    fields: [
      { name: 'name', label: 'Ваше имя', type: 'text', placeholder: 'Ольга', required: true },
      { name: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (___) ___-__-__', required: true },
      { name: 'service', label: 'Интересующая услуга', type: 'select', options: ['Лечение зубов', 'Имплантация', 'Отбеливание', 'Протезирование', 'Хирургия', 'Детская стоматология', 'Другое'], required: false },
      { name: 'message', label: 'Сообщение', type: 'textarea', placeholder: 'Опишите вашу проблему или вопрос', required: false }
    ],
    submitText: 'Записаться на приём',
    privacyText: 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности',
    formsubmitEmail: 'info@belayulybka.ru',
    autoResponse: 'Спасибо за заявку! Мы перезвоним вам в течение 15 минут для уточнения деталей.'
  },

  social: {
    vk: 'https://vk.com/belayulybka',
    telegram: 'https://t.me/belayulybka'
  },

  sections: {
    showHero: true,
    showBentoGrid: true,
    showPricing: true,
    showTestimonials: true,
    showFaq: true,
    showForm: true,
    showSocial: true,
    showWhatsapp: true,
    showTelegram: true
  },

  yookassa: {
    shopId: 'YOUR_SHOP_ID',
    secretKey: 'YOUR_SECRET_KEY',
    successUrl: 'https://belayulybka.ru/success',
    cancelUrl: 'https://belayulybka.ru/cancel'
  },

  analytics: {
    yandexMetrika: '',
    googleAnalytics: ''
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
