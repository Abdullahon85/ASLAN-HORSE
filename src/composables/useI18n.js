import { ref, computed } from "vue";

// Guard for SSG/SSR build environment where localStorage is unavailable
const lang = ref(
  typeof localStorage !== "undefined"
    ? localStorage.getItem("aslan_lang") || "ru"
    : "ru",
);

export function useI18n() {
  const setLang = (l) => {
    lang.value = l;
    localStorage.setItem("aslan_lang", l);
    document.documentElement.lang = l;
  };

  const t = computed(() => translations[lang.value] || translations.ru);

  return { lang, setLang, t };
}

const translations = {
  ru: {
    // SiteHeader
    header: {
      logoSub: "Конный клуб",
      logoAria: "ASLAN Конный клуб — главная",
      nav: {
        services: "Услуги",
        about: "О нас",
        prices: "Цены",
        gallery: "Галерея",
        faq: "FAQ",
        contacts: "Контакты",
      },
      callAria: "Позвонить нам",
      waAria: "Написать в Telegram",
      book: "Записаться",
      menuAria: "Открыть меню",
      mobileNavAria: "Мобильная навигация",
      callBtn: "Позвонить",
    },
    // StickyMobileBar
    sticky: {
      aria: "Быстрый контакт",
      callAria: "Позвонить нам",
      call: "Позвонить",
      waAria: "Написать в Telegram",
    },
    // HeroSection
    hero: {
      aria: "Главный баннер",
      imgAlt: "Занятия в конном клубе ASLAN, Чиланзар, Ташкент",
      scrollAria: "Прокрутить вниз",
      callAria: "Позвонить и записаться",
      chip1: "Работаем с 07:00",
      chip2: "500+ учеников",
      chip3: "Безопасно для детей",
      label: "Чиланзар, Ташкент · у ипподрома",
      h1: "Конный клуб",
      h1em: "в Чиланзаре",
      sub1: "Уроки верховой езды у ипподрома — для детей от 6 лет и взрослых. Тренировки по конкуру, прогулки и фотосессии с лошадьми.",
      sub2strong: "Пробный урок",
      sub2rest: " — по записи через звонок или Telegram.",
      btnCall: "Позвонить сейчас",
      btnWa: "Написать в Telegram",
      or: "Или",
      leaveApp: "оставьте заявку",
      callback: " — перезвоним в течение 1 часа",
    },
    // BenefitsSection
    benefits: {
      label: "Почему выбирают нас",
      title: "4 причины заниматься в ASLAN",
      subtitle:
        "Профессиональный конный клуб у ипподрома — безопасно, удобно, результативно.",
      ctaText: "Готовы попробовать? Первый урок — без обязательств.",
      ctaBtn: "Записаться на пробный урок",
      items: [
        {
          title: "Опытные тренеры",
          text: "Подготовка от чемпионов — индивидуальный план, работа над посадкой и техникой управления.",
        },
        {
          title: "Удобное расположение",
          text: "Чиланзар, рядом с ипподромом — парковка у клуба, удобный подъезд из любой части города.",
        },
        {
          title: "Безопасность",
          text: "Сертифицированное снаряжение, инструктаж для новичков, детское оборудование и постоянный присмотр.",
        },
        {
          title: "Фотосессии",
          text: "Организуем профессиональные фото и видео с лошадьми для любого события — результат уже на следующий день.",
        },
      ],
    },
    // ServicesSection
    services: {
      label: "Что мы предлагаем",
      title: "Услуги клуба ASLAN",
      subtitle:
        "Для детей от 6 лет и взрослых любого уровня — от первого урока до соревнований.",
      cta: "Уточнить цену и время",
      btnWa: "Задать вопрос в Telegram",
      btnBook: "Оставить заявку онлайн",
      items: [
        {
          name: "Индивидуальные занятия",
          text: "Работа один на один с тренером — техника езды, посадка, управление лошадью. Оптимально для быстрого прогресса.",
          tag: "Популярно",
        },
        {
          name: "Групповые уроки",
          text: "Небольшие группы для детей и взрослых — весело, мотивирующе и доступно по цене.",
          tag: "",
        },
        {
          name: "Пробный урок",
          text: "Безопасная вводная программа для новичков — знакомство с лошадью, основы посадки, первые шаги в седле.",
          tag: "Для новичков",
        },
        {
          name: "Тренировки по конкуру",
          text: "Подготовка к соревнованиям — работа на корде, прыжки, техника на трассе препятствий.",
          tag: "Для спортсменов",
        },
        {
          name: "Фотосессии с лошадьми",
          text: "Организуем профессиональные фото и видео — дни рождения, свидания, семейные сессии и fashion-съёмки.",
          tag: "",
        },
      ],
    },
    // TestimonialsSection
    testimonials: {
      label: "Отзывы клиентов",
      title: "Что говорят наши ученики",
      subtitle:
        "Реальные истории семей, спортсменов и фотографов, которые уже занимаются в ASLAN.",
      starsAria: "5 звёзд",
      reviews: [
        {
          text: "Записали дочку на пробный урок — она в восторге! Тренер терпеливый, объясняет понятно. Записались сразу на месяц. Рекомендую всем семьям с детьми в Чиланзаре.",
          name: "Дилноза М.",
          role: "Мама ученицы, 8 лет",
          date: "Февраль 2026",
        },
        {
          text: "Заказывали фотосессию с лошадьми для годовщины свадьбы. Всё прошло отлично — лошади спокойные, место красивое. Фото получились невероятные. Спасибо команде ASLAN!",
          name: "Камила и Акбар",
          role: "Фотосессия на годовщину",
          date: "Январь 2026",
        },
        {
          text: "Тренируюсь по конкуру уже 4 месяца. Изначально был на нулевом уровне, сейчас готовлюсь к первым соревнованиям. Тренер профессиональный, видно, что любит своё дело.",
          name: "Тимур Р.",
          role: "Спортсмен, конкур",
          date: "Декабрь 2025",
        },
        {
          text: "Отличное место для детей! Безопасно, лошади добрые, персонал внимательный. Сын ждёт каждой субботы как праздника.",
          name: "Шахло Х.",
          role: "Мама ученика, 10 лет",
          date: "Ноябрь 2025",
        },
      ],
      stats: [
        { number: "500+", label: "учеников прошли обучение" },
        { number: "5+", label: "лет клуб работает в Ташкенте" },
        { number: "4.9★", label: "средняя оценка клиентов" },
        { number: "30+", label: "фотосессий проведено" },
      ],
    },
    // AboutSection
    about: {
      imgAlt: "Команда тренеров конного клуба ASLAN",
      imgPlaceholder: "Фото команды",
      chip1: "Опыт 5+ лет",
      chip2: "Сертифицированные тренеры",
      chip3: "Безопасность для детей от 6 лет",
      label: "О клубе",
      title: "Команда ASLAN — тренеры и инфраструктура",
      lead: "Конный клуб ASLAN расположен у Чиланзарского ипподрома — одного из лучших площадок для верховой езды в Ташкенте. Мы работаем для тех, кто делает первые шаги в седле, и для тех, кто готовится к соревнованиям по конкуру.",
      btnContact: "Связаться с тренером",
      btnPrices: "Посмотреть цены",
      features: [
        {
          title: "Профессиональные тренеры",
          text: "Наши инструкторы — участники соревнований по конкуру с многолетним опытом преподавания для детей и взрослых.",
        },
        {
          title: "Инфраструктура ипподрома",
          text: "Крытый и открытый манежи, конные трассы, трасса препятствий для конкура, современное снаряжение.",
        },
        {
          title: "Безопасность — приоритет",
          text: "Обязательный инструктаж, сертифицированные сёдла, шлемы для всех всадников, постоянное присутствие инструктора.",
        },
      ],
    },
    // PricesSection
    prices: {
      label: "Цены и расписание",
      title: "Расписание и стоимость занятий",
      subtitle:
        "Работаем ежедневно с 07:00. Точные цены — по запросу (возможны групповые скидки).",
      featuresAria: "Что включено",
      btn: "Записаться по телефону",
      note: "* Цены уточняются при записи — возможны скидки для групп, детей и постоянных клиентов. Звоните:",
      noteOr: "или",
      schedule: [
        { days: "Пн – Пт", hours: "07:00 – 20:00" },
        { days: "Суббота", hours: "07:00 – 19:00" },
        { days: "Воскресенье", hours: "08:00 – 18:00" },
      ],
      plans: [
        {
          name: "Пробный урок",
          desc: "Идеально для начинающих — 45 минут с инструктором.",
          price: "По запросу",
          unit: "· 1 занятие",
          badge: "",
          features: [
            "45 мин с инструктором",
            "Проверенное снаряжение",
            "Инструктаж по безопасности",
            "Без предоплаты",
          ],
        },
        {
          name: "Индивидуальные занятия",
          desc: "Персональная программа с тренером — самый быстрый прогресс.",
          price: "По запросу",
          unit: "· 1 занятие",
          badge: "Популярно",
          features: [
            "1 на 1 с тренером",
            "Индивидуальный план",
            "Гибкое расписание",
            "Видео разбор по запросу",
          ],
        },
        {
          name: "Групповые занятия",
          desc: "Для детей и взрослых — веселее и доступнее по стоимости.",
          price: "По запросу",
          unit: "· 1 занятие",
          badge: "",
          features: [
            "До 5 человек в группе",
            "Подходит для детей от 6 лет",
            "Фиксированное расписание",
            "Скидка при абонементе",
          ],
        },
        {
          name: "Конкур / Соревнования",
          desc: "Подготовка к турнирам — работа на трассе и отработка прыжков.",
          price: "По запросу",
          unit: "· 1 занятие",
          badge: "Популярно",
          features: [
            "Трасса препятствий",
            "Работа с тренером по конкуру",
            "Оценка и разбор техники",
            "Подготовка к чемпионатам",
          ],
        },
      ],
    },
    // GallerySection
    gallery: {
      label: "Фотогалерея",
      title: "Наши занятия и соревнования",
      subtitle:
        "Тренировки, конкур, фотосессии и праздники в конном клубе ASLAN.",
      filterAria: "Фильтр галереи",
      btnWa: "Заказать фотосессию",
      btnWaSub: "Быстрый ответ в Telegram",
      closeLightbox: "Закрыть",
      prevPhoto: "Предыдущее фото",
      nextPhoto: "Следующее фото",
      tabs: [
        { id: "all", label: "Все" },
        { id: "training", label: "Тренировки" },
        { id: "competition", label: "Соревнования" },
        { id: "photo", label: "Фотосессии" },
      ],
      items: [
        {
          label: "Тренировка",
          alt: "Индивидуальная тренировка по верховой езде",
        },
        { label: "Конкур", alt: "Соревнования по конкуру в ASLAN" },
        { label: "Фотосессия", alt: "Профессиональная фотосессия с лошадьми" },
        { label: "Группа", alt: "Групповые уроки верховой езды для детей" },
        { label: "Прыжок", alt: "Прыжки на соревнованиях" },
        { label: "Пара", alt: "Романтическая фотосессия с лошадью" },
        { label: "Корда", alt: "Работа на корде с тренером" },
        { label: "Победа", alt: "Награждение победителей конкура" },
        { label: "Дети", alt: "Детская фотосессия с лошадьми" },
        { label: "Новичок", alt: "Пробный урок для новичков" },
        { label: "Чемпионат", alt: "Чемпионат по конкуру" },
        { label: "Свадьба", alt: "Свадебная фотосессия с лошадьми" },
      ],
    },
    // FAQSection
    faq: {
      label: "FAQ",
      title: "Частые вопросы",
      subtitle:
        "Не нашли ответ? Позвоните или напишите — ответим за несколько минут.",
      ctaTitle: "Остались вопросы?",
      ctaText: "Позвоните или напишите — ответим быстро.",
      btnCall: "Позвонить",
      items: [
        {
          q: "Как записаться на пробный урок?",
          a: "Позвоните по номеру +998 88 258-65-65 или напишите в Telegram — менеджер подтвердит удобное время в течение нескольких минут. Также можно оставить заявку через форму на сайте.",
        },
        {
          q: "С какого возраста можно заниматься верховой ездой?",
          a: "У нас занимаются дети от 6 лет. Для малышей предусмотрено специальное детское снаряжение, шлемы и постоянное присутствие инструктора. Взрослый возрастной порог — нет: начать можно в любом возрасте.",
        },
        {
          q: "Что взять на первый урок?",
          a: "Достаточно прийти в удобной одежде: закрытые брюки (джинсы или леггинсы), закрытая обувь на небольшом каблуке (кроссовки без платформы или ботинки). Шлем выдаём на прокат бесплатно, если нет своего.",
        },
        {
          q: "Есть ли прокат лошадей для прогулок?",
          a: "Да — предоставляем лошадей для прогулок на территории клуба. Стоимость и продолжительность уточняйте при записи по телефону или Telegram.",
        },
        {
          q: "Как организовать фотосессию с лошадьми?",
          a: "Напишите нам в Telegram или позвоните — обсудим дату, время, пожелания по формату (на природе/в манеже). Работаем также с приглашёнными фотографами по согласованию.",
        },
        {
          q: "Есть ли групповые занятия для детей?",
          a: "Да, групповые занятия доступны для детей и взрослых. Группы небольшие — до 5 человек, чтобы тренер мог уделить внимание каждому. Занятия по фиксированному расписанию.",
        },
        {
          q: "Где именно расположен клуб?",
          a: "Мы находимся в Чиланзарском районе Ташкента, рядом с ипподромом. Ориентир — АЗС LUKOIL на проспекте Бунийодкор. Есть удобная парковка для автомобилей.",
        },
        {
          q: "Как подготовиться к соревнованиям по конкуру?",
          a: "Запишитесь на тренировки по конкуру с нашим специализированным тренером. Составим индивидуальный план подготовки: базовая техника, работа на корде, отработка прыжков на трассе препятствий.",
        },
      ],
    },
    // LeadFormSection
    form: {
      label: "Запись онлайн",
      title: "Оставьте заявку — мы перезвоним",
      desc1: "Заполните форму и менеджер свяжется с вами в течение ",
      desc1strong: "1 рабочего часа",
      desc2:
        ", чтобы подтвердить дату и время, ответить на вопросы и помочь с выбором услуги.",
      orContact: "Или свяжитесь сразу:",
      successTitle: "Заявка принята!",
      successText:
        "Мы свяжемся с вами в течение 1 рабочего часа. Если нужно срочно — позвоните прямо сейчас:",
      ariaLabel: "Форма записи на занятие",
      labelName: "Имя",
      labelPhone: "Телефон",
      labelTelegram: "Telegram",
      labelService: "Услуга",
      placeholderName: "Имя Фамилия",
      placeholderPhone: "+998 90 999 99 99",
      placeholderTelegram: "@telegram user",
      placeholderComment: "Расскажите о себе, уровне подготовки, пожеланиях...",
      selectPlaceholder: "Выберите услугу...",
      serviceOptions: [
        "Пробный урок",
        "Индивидуальные занятия",
        "Групповые занятия",
        "Фотосессия с лошадьми",
        "Тренировки по конкуру",
      ],
      consent:
        "Согласен(а) на обработку персональных данных согласно политике конфиденциальности",
      btnSubmit: "Оставить заявку",
      btnSubmitting: "Отправляем...",
      consentNote: "Нажимая на кнопку, я соглашаюсь на",
      consentLink: "обработку персональных данных",
      errName: "Введите имя (минимум 2 символа)",
      errPhone: "Введите корректный номер телефона",
      errService: "Выберите услугу",
      errConsent: "Необходимо согласие на обработку данных",
    },
    // ContactSection
    contact: {
      label: "Как нас найти",
      title: "Контакты и как добраться",
      subtitle:
        "Мы в Чиланзаре — рядом с ипподромом. Удобная парковка, работаем каждый день с 07:00.",
      btnCall: "Позвонить:",
      btnWa: "Написать в Telegram",
      mapAria: "Карта расположения конного клуба ASLAN",
      mapAddress: "пр-т Бунийодкор, Чиланзар",
      mapLandmark: "Ориентир: Чиланзарский ипподром / АЗС LUKOIL",
      mapsBtn: "Открыть в Google Maps",
      cards: [
        { label: "Телефон (основной)" },
        { label: "Телефон (дополнительный)" },
        {
          label: "Адрес",
          value: "пр-т Бунийодкор, Чиланзар, Ташкент",
          sub: "Ориентир: Чиланзарский ипподром / АЗС LUKOIL",
        },
        {
          label: "Режим работы",
          value: "Ежедневно с 07:00 до 20:00",
          sub: "В воскресенье до 18:00",
        },
      ],
    },
    // SiteFooter
    footer: {
      logoAria: "ASLAN — к началу страницы",
      brandDesc:
        "Профессиональный конный клуб в Чиланзаре, Ташкент. Уроки верховой езды, конкур, фотосессии с лошадьми.",
      hours: "Ежедневно с 07:00 до 20:00",
      ctaTitle: "Готовы начать? Позвоните прямо сейчас",
      ctaSub: "Первый пробный урок — просто позвоните или напишите в Telegram.",
      navTitle: "Навигация",
      servicesTitle: "Услуги",
      contactTitle: "Контакты",
      copyright: "ASLAN Конный клуб. Все права защищены.",
      seo: "Конный клуб Ташкент · Уроки верховой езды Чиланзар · Тренировки по конкуру",
      navLinks: [
        "Главная",
        "Услуги",
        "О нас",
        "Цены",
        "Галерея",
        "FAQ",
        "Контакты",
        "Записаться",
      ],
      serviceLinks: [
        "Пробный урок",
        "Индивидуальные занятия",
        "Групповые занятия",
        "Тренировки по конкуру",
        "Фотосессии с лошадьми",
      ],
      address: "пр-т Бунийодкор, Чиланзар",
    },
  },

  en: {
    header: {
      logoSub: "Horse Club",
      logoAria: "ASLAN Horse Club — home",
      nav: {
        services: "Services",
        about: "About",
        prices: "Prices",
        gallery: "Gallery",
        faq: "FAQ",
        contacts: "Contacts",
      },
      callAria: "Call us",
      waAria: "Write on Telegram",
      book: "Book now",
      menuAria: "Open menu",
      mobileNavAria: "Mobile navigation",
      callBtn: "Call",
    },
    sticky: {
      aria: "Quick contact",
      callAria: "Call us",
      call: "Call",
      waAria: "Write on Telegram",
    },
    hero: {
      aria: "Main banner",
      imgAlt: "Riding lessons at ASLAN Horse Club, Chilanzar, Tashkent",
      scrollAria: "Scroll down",
      callAria: "Call and book",
      chip1: "Open from 07:00",
      chip2: "500+ students",
      chip3: "Safe for children",
      label: "Chilanzar, Tashkent · near the hippodrome",
      h1: "Horse Club",
      h1em: "in Chilanzar",
      sub1: "Horse riding lessons by the hippodrome — for children from age 6 and adults. Show jumping training, rides and photo sessions with horses.",
      sub2strong: "Trial lesson",
      sub2rest: " — bookable by phone or Telegram.",
      btnCall: "Call now",
      btnWa: "Write on Telegram",
      or: "Or",
      leaveApp: "leave a request",
      callback: " — we'll call back within 1 hour",
    },
    benefits: {
      label: "Why choose us",
      title: "4 reasons to train at ASLAN",
      subtitle:
        "Professional horse club by the hippodrome — safe, convenient, effective.",
      ctaText: "Ready to try? First lesson — no commitments.",
      ctaBtn: "Book a trial lesson",
      items: [
        {
          title: "Experienced trainers",
          text: "Coaching by champions — individual plan, work on seat and control technique.",
        },
        {
          title: "Great location",
          text: "Chilanzar, next to the hippodrome — parking on site, easy access from anywhere in the city.",
        },
        {
          title: "Safety",
          text: "Certified equipment, briefing for beginners, children's gear and constant supervision.",
        },
        {
          title: "Photo sessions",
          text: "We organise professional photo and video sessions with horses for any occasion — results ready the next day.",
        },
      ],
    },
    services: {
      label: "What we offer",
      title: "ASLAN Club Services",
      subtitle:
        "For children from age 6 and adults of any level — from first lesson to competitions.",
      cta: "Check price & schedule",
      btnWa: "Ask a question on Telegram",
      btnBook: "Leave a request online",
      items: [
        {
          name: "Individual lessons",
          text: "One-on-one with a trainer — riding technique, seat, horse control. Best for rapid progress.",
          tag: "Popular",
        },
        {
          name: "Group lessons",
          text: "Small groups for children and adults — fun, motivating and affordable.",
          tag: "",
        },
        {
          name: "Trial lesson",
          text: "Safe intro programme for beginners — meet the horse, basic seat, first steps in the saddle.",
          tag: "For beginners",
        },
        {
          name: "Show jumping training",
          text: "Competition preparation — lunge work, jumps, technique on the obstacle course.",
          tag: "For athletes",
        },
        {
          name: "Photo sessions with horses",
          text: "We organise professional photo & video — birthdays, dates, family sessions and fashion shoots.",
          tag: "",
        },
      ],
    },
    testimonials: {
      label: "Client reviews",
      title: "What our students say",
      subtitle:
        "Real stories from families, athletes and photographers who already train at ASLAN.",
      starsAria: "5 stars",
      reviews: [
        {
          text: "We signed our daughter up for a trial lesson — she's thrilled! The trainer is patient and explains everything clearly. We signed up for a full month right away. Highly recommend to all families in Chilanzar.",
          name: "Dilnoza M.",
          role: "Mother of student, age 8",
          date: "February 2026",
        },
        {
          text: "We ordered a photo session with horses for our wedding anniversary. Everything went perfectly — the horses were calm, the setting was beautiful. The photos came out incredible. Thank you ASLAN team!",
          name: "Kamila & Akbar",
          role: "Anniversary photo session",
          date: "January 2026",
        },
        {
          text: "I've been training in show jumping for 4 months. I started from zero and now I'm preparing for my first competition. The trainer is professional and clearly loves what he does.",
          name: "Timur R.",
          role: "Athlete, show jumping",
          date: "December 2025",
        },
        {
          text: "A great place for children! Safe, the horses are gentle, the staff is attentive. My son looks forward to every Saturday like a holiday.",
          name: "Shahlo Kh.",
          role: "Mother of student, age 10",
          date: "November 2025",
        },
      ],
      stats: [
        { number: "500+", label: "students trained" },
        { number: "5+", label: "years operating in Tashkent" },
        { number: "4.9★", label: "average client rating" },
        { number: "30+", label: "photo sessions held" },
      ],
    },
    about: {
      imgAlt: "ASLAN Horse Club trainer team",
      imgPlaceholder: "Team photo",
      chip1: "5+ years experience",
      chip2: "Certified trainers",
      chip3: "Safe for children from age 6",
      label: "About the club",
      title: "ASLAN Team — trainers and facilities",
      lead: "ASLAN Horse Club is located at the Chilanzar Hippodrome — one of the best equestrian venues in Tashkent. We serve both beginners taking their first steps in the saddle and athletes preparing for show jumping competitions.",
      btnContact: "Contact a trainer",
      btnPrices: "View prices",
      features: [
        {
          title: "Professional trainers",
          text: "Our instructors are show jumping competitors with years of teaching experience for children and adults.",
        },
        {
          title: "Hippodrome facilities",
          text: "Indoor and outdoor arenas, riding tracks, a show jumping obstacle course, modern equipment.",
        },
        {
          title: "Safety first",
          text: "Mandatory briefing, certified saddles, helmets for all riders, constant instructor presence.",
        },
      ],
    },
    prices: {
      label: "Prices & schedule",
      title: "Schedule and lesson prices",
      subtitle:
        "Open daily from 07:00. Exact prices on request (group discounts available).",
      featuresAria: "What's included",
      btn: "Book by phone",
      note: "* Prices confirmed at booking — discounts available for groups, children and regular clients. Call:",
      noteOr: "or",
      schedule: [
        { days: "Mon – Fri", hours: "07:00 – 20:00" },
        { days: "Saturday", hours: "07:00 – 19:00" },
        { days: "Sunday", hours: "08:00 – 18:00" },
      ],
      plans: [
        {
          name: "Trial lesson",
          desc: "Perfect for beginners — 45 minutes with an instructor.",
          price: "On request",
          unit: "· per lesson",
          badge: "",
          features: [
            "45 min with instructor",
            "Verified equipment",
            "Safety briefing",
            "No prepayment",
          ],
        },
        {
          name: "Individual lessons",
          desc: "Personal programme with a trainer — fastest progress.",
          price: "On request",
          unit: "· per lesson",
          badge: "Popular",
          features: [
            "1-on-1 with trainer",
            "Individual plan",
            "Flexible schedule",
            "Video review on request",
          ],
        },
        {
          name: "Group lessons",
          desc: "For children and adults — more fun and affordable.",
          price: "On request",
          unit: "· per lesson",
          badge: "",
          features: [
            "Up to 5 per group",
            "Suitable for children 6+",
            "Fixed schedule",
            "Subscription discount",
          ],
        },
        {
          name: "Show jumping / Competitions",
          desc: "Tournament preparation — course work and jump technique.",
          price: "On request",
          unit: "· per lesson",
          badge: "Popular",
          features: [
            "Obstacle course",
            "Work with jumping trainer",
            "Technique review",
            "Championship prep",
          ],
        },
      ],
    },
    gallery: {
      label: "Photo gallery",
      title: "Our lessons and competitions",
      subtitle:
        "Training, show jumping, photo sessions and celebrations at ASLAN Horse Club.",
      filterAria: "Gallery filter",
      btnWa: "Order a photo session",
      btnWaSub: "Quick reply on Telegram",
      closeLightbox: "Close",
      prevPhoto: "Previous photo",
      nextPhoto: "Next photo",
      tabs: [
        { id: "all", label: "All" },
        { id: "training", label: "Training" },
        { id: "competition", label: "Competitions" },
        { id: "photo", label: "Photo sessions" },
      ],
      items: [
        { label: "Training", alt: "Individual horse riding lesson" },
        { label: "Jumping", alt: "Show jumping competition at ASLAN" },
        { label: "Photo", alt: "Professional photo session with horses" },
        { label: "Group", alt: "Group riding lessons for children" },
        { label: "Jump", alt: "Jumping at competition" },
        { label: "Couple", alt: "Romantic photo session with a horse" },
        { label: "Lunge", alt: "Lunge work with trainer" },
        { label: "Victory", alt: "Show jumping award ceremony" },
        { label: "Kids", alt: "Children's photo session with horses" },
        { label: "Beginner", alt: "Trial lesson for beginners" },
        { label: "Championship", alt: "Show jumping championship" },
        { label: "Wedding", alt: "Wedding photo session with horses" },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Frequently asked questions",
      subtitle:
        "Didn't find an answer? Call or write — we reply within minutes.",
      ctaTitle: "Still have questions?",
      ctaText: "Call or write — we reply quickly.",
      btnCall: "Call",
      items: [
        {
          q: "How do I book a trial lesson?",
          a: "Call +998 88 258-65-65 or write on Telegram — a manager will confirm a convenient time within minutes. You can also leave a request via the form on the website.",
        },
        {
          q: "From what age can children take riding lessons?",
          a: "We teach children from age 6. Younger riders have dedicated children's equipment, helmets and constant instructor supervision. There is no upper age limit — you can start at any age.",
        },
        {
          q: "What should I bring to my first lesson?",
          a: "Just come in comfortable clothes: full-length trousers (jeans or leggings) and closed shoes with a small heel (trainers without platform soles or boots). Helmets are available for free if you don't have your own.",
        },
        {
          q: "Is there horse rental for leisure rides?",
          a: "Yes — we provide horses for rides within the club grounds. Contact us by phone or Telegram for pricing and duration.",
        },
        {
          q: "How do I organise a photo session with horses?",
          a: "Write to us on Telegram or call — we'll discuss the date, time and your preferences (outdoor / indoor arena). We also work with invited photographers by arrangement.",
        },
        {
          q: "Are there group lessons for children?",
          a: "Yes, group lessons are available for children and adults. Groups are kept small — up to 5 people — so the trainer can give everyone individual attention. Lessons follow a fixed schedule.",
        },
        {
          q: "Where exactly is the club located?",
          a: "We are in the Chilanzar district of Tashkent, next to the hippodrome. Landmark — LUKOIL filling station on Bunyodkor Avenue. Convenient parking is available.",
        },
        {
          q: "How do I prepare for show jumping competitions?",
          a: "Sign up for show jumping training with our specialist trainer. We'll build an individual preparation plan: basic technique, lunge work, jump practice on the obstacle course.",
        },
      ],
    },
    form: {
      label: "Book online",
      title: "Leave a request — we'll call back",
      desc1: "Fill in the form and a manager will contact you within ",
      desc1strong: "1 working hour",
      desc2:
        " to confirm the date and time, answer questions and help choose a service.",
      orContact: "Or contact us directly:",
      successTitle: "Request received!",
      successText:
        "We'll contact you within 1 working hour. If urgent — call right now:",
      ariaLabel: "Lesson booking form",
      labelName: "Name",
      labelPhone: "Phone",
      labelTelegram: "Telegram",
      labelService: "Service",
      placeholderName: "First Last",
      placeholderPhone: "+998 90 999 99 99",
      placeholderTelegram: "@telegram user",
      selectPlaceholder: "Select a service...",
      serviceOptions: [
        "Trial lesson",
        "Individual lessons",
        "Group lessons",
        "Photo session with horses",
        "Show jumping training",
      ],
      consent:
        "I agree to the processing of personal data in accordance with the privacy policy",
      btnSubmit: "Send request",
      btnSubmitting: "Sending...",
      consentNote: "By clicking the button, I agree to the",
      consentLink: "processing of personal data",
      errName: "Please enter your name (min. 2 characters)",
      errPhone: "Please enter a valid phone number",
      errService: "Please select a service",
      errConsent: "Consent to data processing is required",
    },
    contact: {
      label: "Find us",
      title: "Contacts and directions",
      subtitle:
        "We're in Chilanzar — next to the hippodrome. Easy parking, open every day from 07:00.",
      btnCall: "Call:",
      btnWa: "Write on Telegram",
      mapAria: "Map of ASLAN Horse Club location",
      mapAddress: "Bunyodkor Ave, Chilanzar",
      mapLandmark: "Landmark: Chilanzar Hippodrome / LUKOIL station",
      mapsBtn: "Open in Google Maps",
      cards: [
        { label: "Main phone" },
        { label: "Additional phone" },
        {
          label: "Address",
          value: "Bunyodkor Ave, Chilanzar, Tashkent",
          sub: "Landmark: Chilanzar Hippodrome / LUKOIL station",
        },
        {
          label: "Working hours",
          value: "Daily 07:00 – 20:00",
          sub: "Sunday until 18:00",
        },
      ],
    },
    footer: {
      logoAria: "ASLAN — back to top",
      brandDesc:
        "Professional horse club in Chilanzar, Tashkent. Riding lessons, show jumping, photo sessions with horses.",
      hours: "Daily 07:00 – 20:00",
      ctaTitle: "Ready to start? Call us now",
      ctaSub: "First trial lesson — just call or write on Telegram.",
      navTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contacts",
      copyright: "ASLAN Horse Club. All rights reserved.",
      seo: "Horse Club Tashkent · Riding lessons Chilanzar · Show jumping training",
      navLinks: [
        "Home",
        "Services",
        "About",
        "Prices",
        "Gallery",
        "FAQ",
        "Contacts",
        "Book now",
      ],
      serviceLinks: [
        "Trial lesson",
        "Individual lessons",
        "Group lessons",
        "Show jumping training",
        "Photo sessions with horses",
      ],
      address: "Bunyodkor Ave, Chilanzar",
    },
  },

  uz: {
    header: {
      logoSub: "Ot klubi",
      logoAria: "ASLAN Ot klubi — bosh sahifa",
      nav: {
        services: "Xizmatlar",
        about: "Biz haqimizda",
        prices: "Narxlar",
        gallery: "Galereya",
        faq: "FAQ",
        contacts: "Kontaktlar",
      },
      callAria: "Bizga qo'ng'iroq qiling",
      waAria: "Telegram da yozing",
      book: "Yozilish",
      menuAria: "Menyuni ochish",
      mobileNavAria: "Mobil navigatsiya",
      callBtn: "Qo'ng'iroq",
    },
    sticky: {
      aria: "Tezkor aloqa",
      callAria: "Bizga qo'ng'iroq qiling",
      call: "Qo'ng'iroq",
      waAria: "Telegram da yozing",
    },
    hero: {
      aria: "Asosiy banner",
      imgAlt: "ASLAN ot klubida mashg'ulotlar, Chilonzor, Toshkent",
      scrollAria: "Pastga aylantiring",
      callAria: "Qo'ng'iroq qiling va yoziling",
      chip1: "07:00 dan ishlaymiz",
      chip2: "500+ o'quvchi",
      chip3: "Bolalar uchun xavfsiz",
      label: "Chilonzor, Toshkent · gippodrom yonida",
      h1: "Ot klubi",
      h1em: "Chilonzorda",
      sub1: "Gippodrom yonida chavandozlik darslari — 6 yoshdan bolalar va kattalar uchun. Konkur bo'yicha trenirovkalar, sayrlar va otlar bilan fotosessiyalar.",
      sub2strong: "Sinov darsi",
      sub2rest: " — telefon yoki Telegram orqali yozilish.",
      btnCall: "Hozir qo'ng'iroq qiling",
      btnWa: "Telegram da yozing",
      or: "Yoki",
      leaveApp: "ariza qoldiring",
      callback: " — 1 soat ichida qayta qo'ng'iroq qilamiz",
    },
    benefits: {
      label: "Nima uchun bizni tanlashadi",
      title: "ASLAN da mashg'ulot qilishning 4 sababi",
      subtitle:
        "Gippodrom yonidagi professional ot klubi — xavfsiz, qulay, samarali.",
      ctaText: "Sinab ko'rishga tayyormisiz? Birinchi dars — majburiyatsiz.",
      ctaBtn: "Sinov darsiga yozilish",
      items: [
        {
          title: "Tajribali murabbiylar",
          text: "Chempionlar tayyorlovi — individual reja, o'tirish va boshqaruv texnikasi ustida ishlash.",
        },
        {
          title: "Qulay joylashuv",
          text: "Chilonzor, gippodrom yonida — klub oldida avtoturargoh, shaharning istalgan nuqtasidan qulay kirish.",
        },
        {
          title: "Xavfsizlik",
          text: "Sertifikatlangan jihozlar, yangi boshlovchilar uchun yo'riqnoma, bolalar uskunalari va doimiy nazorat.",
        },
        {
          title: "Fotosessiyalar",
          text: "Istalgan tadbir uchun otlar bilan professional foto va video tashkil qilamiz — natija ertasi kun tayyor.",
        },
      ],
    },
    services: {
      label: "Nima taklif qilamiz",
      title: "ASLAN klubi xizmatlari",
      subtitle:
        "6 yoshdan bolalar va har qanday darajadagi kattalar uchun — birinchi darsdan musobaqalargacha.",
      cta: "Narx va vaqtni aniqlang",
      btnWa: "Telegram da savol bering",
      btnBook: "Onlayn ariza qoldirish",
      items: [
        {
          name: "Individual darslar",
          text: "Murabbiy bilan bittama-bitta — chavandozlik texnikasi, o'tirish, otni boshqarish. Tez rivojlanish uchun eng yaxshisi.",
          tag: "Mashhur",
        },
        {
          name: "Guruh darslari",
          text: "Bolalar va kattalar uchun kichik guruhlar — qiziqarli, rag'batlantiruvchi va hamyonbop.",
          tag: "",
        },
        {
          name: "Sinov darsi",
          text: "Yangi boshlovchilar uchun xavfsiz kirish dasturi — ot bilan tanishish, o'tirishning asoslari, egarda birinchi qadamlar.",
          tag: "Yangi boshlovchilar uchun",
        },
        {
          name: "Konkur bo'yicha trenirovkalar",
          text: "Musobaqa tayyorligi — korda ishlash, sakrashlar, to'siqlar kursasida texnika.",
          tag: "Sportchilar uchun",
        },
        {
          name: "Otlar bilan fotosessiyalar",
          text: "Professional foto va video tashkil qilamiz — tug'ilgan kunlar, uchrashuvlar, oilaviy sessiyalar va fashion suratlar.",
          tag: "",
        },
      ],
    },
    testimonials: {
      label: "Mijozlar sharhlari",
      title: "O'quvchilarimiz nima deydi",
      subtitle:
        "ASLAN da allaqachon mashg'ulot qilayotgan oilalar, sportchilar va fotogrflarning haqiqiy hikoyalari.",
      starsAria: "5 yulduz",
      reviews: [
        {
          text: "Qizimizni sinov darsiga yozib oldik — u hayratda! Murabbiy sabr-toqatli, aniq tushuntiradi. Darhol bir oyga yozildik. Chilonzordagi barcha oilalarga tavsiya qilaman.",
          name: "Dilnoza M.",
          role: "O'quvchining onasi, 8 yosh",
          date: "2026 yil Fevral",
        },
        {
          text: "To'y yilligimiz uchun otlar bilan fotosessiya buyurtma qildik. Hammasi zo'r o'tdi — otlar sokin, joy chiroyli. Rasmlar ajoyib chiqdi. ASLAN jamoasiga rahmat!",
          name: "Kamila va Akbar",
          role: "Yillik fotosessiya",
          date: "2026 yil Yanvar",
        },
        {
          text: "4 oydan beri konkur bo'yicha mashg'ulot qilaman. Avvaliga noldan boshlagan edim, hozir birinchi musobaqaga tayyorlanmoqdaman. Murabbiy professional, ishini sevishi seziladi.",
          name: "Timur R.",
          role: "Sportchi, konkur",
          date: "2025 yil Dekabr",
        },
        {
          text: "Bolalar uchun ajoyib joy! Xavfsiz, otlar muloyim, xodimlar diqqatli. O'g'lim har shanba kunini bayram kabi kutadi.",
          name: "Shahlo X.",
          role: "O'quvchining onasi, 10 yosh",
          date: "2025 yil Noyabr",
        },
      ],
      stats: [
        { number: "500+", label: "o'quvchi o'qitildi" },
        { number: "5+", label: "yil Toshkentda ishlamoqda" },
        { number: "4.9★", label: "o'rtacha mijozlar bahosi" },
        { number: "30+", label: "fotosessiya o'tkazildi" },
      ],
    },
    about: {
      imgAlt: "ASLAN ot klubi murabbiylar jamoasi",
      imgPlaceholder: "Jamoa fotosi",
      chip1: "5+ yil tajriba",
      chip2: "Sertifikatlangan murabbiylar",
      chip3: "6 yoshdan bolalar uchun xavfsiz",
      label: "Klub haqida",
      title: "ASLAN jamoasi — murabbiylar va infratuzilma",
      lead: "ASLAN ot klubi Chilonzor gippodromi yonida joylashgan — Toshkentdagi eng yaxshi chavandozlik maydonlaridan biri. Biz egarda birinchi qadamlarini qo'yayotganlar uchun ham, konkur musobaqalariga tayyorlanayotganlar uchun ham ishlaydi.",
      btnContact: "Murabbiy bilan bog'lanish",
      btnPrices: "Narxlarni ko'rish",
      features: [
        {
          title: "Professional murabbiylar",
          text: "Instruktorlarimiz bolalar va kattalar uchun ko'p yillik o'qitish tajribasiga ega konkur musobaqa ishtirokchilari.",
        },
        {
          title: "Gippodrom infratuzilmasi",
          text: "Yopiq va ochiq manejlar, chavandozlik treklari, konkur to'siqlar kurasi, zamonaviy jihozlar.",
        },
        {
          title: "Xavfsizlik — ustuvor",
          text: "Majburiy yo'riqnoma, sertifikatlangan egarlar, barcha chavandozlar uchun dubulg'alar, instruktorning doimiy mavjudligi.",
        },
      ],
    },
    prices: {
      label: "Narxlar va jadval",
      title: "Mashg'ulotlar jadvali va narxi",
      subtitle:
        "Har kuni 07:00 dan ishlaymiz. Aniq narxlar so'rov asosida (guruh chegirmalari mavjud).",
      featuresAria: "Nima kiritilgan",
      btn: "Telefon orqali yozilish",
      note: "* Narxlar yozilishda aniqlanadi — guruhlar, bolalar va doimiy mijozlar uchun chegirmalar mavjud. Qo'ng'iroq qiling:",
      noteOr: "yoki",
      schedule: [
        { days: "Du – Ju", hours: "07:00 – 20:00" },
        { days: "Shanba", hours: "07:00 – 19:00" },
        { days: "Yakshanba", hours: "08:00 – 18:00" },
      ],
      plans: [
        {
          name: "Sinov darsi",
          desc: "Yangi boshlovchilar uchun ideal — instruktor bilan 45 daqiqa.",
          price: "So'rov asosida",
          unit: "· 1 mashg'ulot",
          badge: "",
          features: [
            "Instruktor bilan 45 daqiqa",
            "Tekshirilgan jihozlar",
            "Xavfsizlik yo'riqnomasi",
            "Oldindan to'lovsiz",
          ],
        },
        {
          name: "Individual darslar",
          desc: "Murabbiy bilan shaxsiy dastur — eng tez taraqqiyot.",
          price: "So'rov asosida",
          unit: "· 1 mashg'ulot",
          badge: "Mashhur",
          features: [
            "Murabbiy bilan 1-ga-1",
            "Individual reja",
            "Moslashuvchan jadval",
            "So'rov bo'yicha video tahlil",
          ],
        },
        {
          name: "Guruh darslari",
          desc: "Bolalar va kattalar uchun — qiziqarliroq va hamyonbop.",
          price: "So'rov asosida",
          unit: "· 1 mashg'ulot",
          badge: "",
          features: [
            "Guruhda 5 kishigacha",
            "6 yoshdan bolalarga mos",
            "Belgilangan jadval",
            "Obuna chegirmasi",
          ],
        },
        {
          name: "Konkur / Musobaqalar",
          desc: "Turnir tayyorligi — kurs ishlash va sakrash texnikasi.",
          price: "So'rov asosida",
          unit: "· 1 mashg'ulot",
          badge: "Mashhur",
          features: [
            "To'siqlar kurasi",
            "Konkur murabbiysi bilan ishlash",
            "Texnikani baholash va tahlil",
            "Chempionatlarga tayyorlik",
          ],
        },
      ],
    },
    gallery: {
      label: "Fotogalereya",
      title: "Mashg'ulotlarimiz va musobaqalar",
      subtitle:
        "ASLAN ot klubida trenirovkalar, konkur, fotosessiyalar va bayramlar.",
      filterAria: "Galereya filtri",
      btnWa: "Fotosessiya buyurtma qilish",
      btnWaSub: "Telegram da tezkor javob",
      closeLightbox: "Yopish",
      prevPhoto: "Oldingi foto",
      nextPhoto: "Keyingi foto",
      tabs: [
        { id: "all", label: "Hammasi" },
        { id: "training", label: "Trenirovkalar" },
        { id: "competition", label: "Musobaqalar" },
        { id: "photo", label: "Fotosessiyalar" },
      ],
      items: [
        { label: "Trenirovka", alt: "Individual chavandozlik darsi" },
        { label: "Konkur", alt: "ASLAN da konkur musobaqasi" },
        { label: "Fotosessiya", alt: "Otlar bilan professional fotosessiya" },
        { label: "Guruh", alt: "Bolalar uchun guruh chavandozlik darslari" },
        { label: "Sakrash", alt: "Musobaqada sakrashlar" },
        { label: "Juft", alt: "Ot bilan romantik fotosessiya" },
        { label: "Korda", alt: "Murabbiy bilan korda ishlash" },
        { label: "G'alaba", alt: "Konkur g'oliblarini taqdirlaш" },
        { label: "Bolalar", alt: "Otlar bilan bolalar fotosessiyasi" },
        { label: "Yangi", alt: "Yangi boshlovchilar uchun sinov darsi" },
        { label: "Chempionat", alt: "Konkur chempionati" },
        { label: "To'y", alt: "Otlar bilan to'y fotosessiyasi" },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Ko'p so'raladigan savollar",
      subtitle:
        "Javob topa olmadingizmi? Qo'ng'iroq qiling yoki yozing — bir necha daqiqada javob beramiz.",
      ctaTitle: "Savollar qoldimi?",
      ctaText: "Qo'ng'iroq qiling yoki yozing — tez javob beramiz.",
      btnCall: "Qo'ng'iroq",
      items: [
        {
          q: "Sinov darsiga qanday yozilish mumkin?",
          a: "+998 88 258-65-65 raqamiga qo'ng'iroq qiling yoki Telegram da yozing — menejer bir necha daqiqa ichida qulay vaqtni tasdiqlaydi. Shuningdek, saytdagi forma orqali ariza qoldirishingiz mumkin.",
        },
        {
          q: "Necha yoshdan chavandozlik bilан shug'ullanish mumkin?",
          a: "Bizda 6 yoshdan bolalar mashg'ulot qiladi. Kichkintoylar uchun maxsus bolalar jihozlari, dubulg'alar va instruktorning doimiy mavjudligi ta'minlangan. Yuqori yosh chegarasi yo'q — istalgan yoshda boshlash mumkin.",
        },
        {
          q: "Birinchi darsga nima olib kelish kerak?",
          a: "Qulay kiyimda kelish kifoya: yopiq shimlar (jinsi yoki leggings), kichik poshnali yopiq oyoq kiyimi (platformasiz krossovka yoki etik). Agar o'zingiznikini olib kelmagan bo'lsangiz, dubulg'a bepul beriladi.",
        },
        {
          q: "Sayr uchun ot ijarasi bormi?",
          a: "Ha — klub hududida sayr uchun otlar taqdim etamiz. Narx va davomiyligi haqida telefon yoki Telegram orqali yozilishda so'rang.",
        },
        {
          q: "Otlar bilan fotosessiyani qanday tashkil qilish mumkin?",
          a: "Telegram da yozing yoki qo'ng'iroq qiling — sana, vaqt va format bo'yicha (tabiatda/manejda) istaklarni muhokama qilamiz. Kelishilgan holda taklif etilgan fotogrflar bilan ham ishlaymiz.",
        },
        {
          q: "Bolalar uchun guruh darslari bormi?",
          a: "Ha, guruh darslari bolalar va kattalar uchun mavjud. Guruhlar kichik — 5 kishigacha, shunda murabbiy har biriga e'tibor bera oladi. Darslar belgilangan jadval bo'yicha.",
        },
        {
          q: "Klub qayerda joylashgan?",
          a: "Biz Toshkentning Chilonzor tumanida, gippodrom yonida joylashganmiz. Mo'ljal — Bunyodkor prospektidagi LUKOIL AZS. Avtomobillar uchun qulay to'xtash joyi mavjud.",
        },
        {
          q: "Konkur musobaqalariga qanday tayyorlanish mumkin?",
          a: "Ixtisoslashgan murabbiyimiz bilan konkur bo'yicha trenirovkalarga yoziling. Individual tayyorgarlik rejasini tuzamiz: asosiy texnika, korda ishlash, to'siqlar kursasida sakrashlarni mashq qilish.",
        },
      ],
    },
    form: {
      label: "Onlayn yozilish",
      title: "Ariza qoldiring — qayta qo'ng'iroq qilamiz",
      desc1: "Formani to'ldiring va menejer ",
      desc1strong: "1 ish soati",
      desc2:
        " ichida siz bilan bog'lanadi — sanani va vaqtni tasdiqlash, savollarga javob berish va xizmatni tanlashda yordam berish uchun.",
      orContact: "Yoki bevosita bog'laning:",
      successTitle: "Ariza qabul qilindi!",
      successText:
        "1 ish soati ichida siz bilan bog'lanamiz. Shoshilinch bo'lsa — hozir qo'ng'iroq qiling:",
      ariaLabel: "Mashg'ulotga yozilish formasi",
      labelName: "Ism",
      labelPhone: "Telefon",
      labelTelegram: "Telegram",
      labelService: "Xizmat",
      placeholderName: "Ism Familiya",
      placeholderPhone: "+998 90 999 99 99",
      placeholderTelegram: "@telegram user",
      selectPlaceholder: "Xizmatni tanlang...",
      serviceOptions: [
        "Sinov darsi",
        "Individual darslar",
        "Guruh darslari",
        "Otlar bilan fotosessiya",
        "Konkur bo'yicha trenirovkalar",
      ],
      consent:
        "Maxfiylik siyosatiga muvofiq shaxsiy ma'lumotlarni qayta ishlashga roziman",
      btnSubmit: "Ariza yuborish",
      btnSubmitting: "Yuborilmoqda...",
      consentNote: "Tugmani bosib, men rozilik beraman",
      consentLink: "shaxsiy ma'lumotlarni qayta ishlashga",
      errName: "Ismingizni kiriting (kamida 2 ta belgi)",
      errPhone: "To'g'ri telefon raqamini kiriting",
      errService: "Xizmatni tanlang",
      errConsent: "Ma'lumotlarni qayta ishlashga rozilik talab qilinadi",
    },
    contact: {
      label: "Bizni qayerdan topish mumkin",
      title: "Kontaktlar va qanday borish",
      subtitle:
        "Biz Chilonzordamiz — gippodrom yonida. Qulay to'xtash joyi, har kuni 07:00 dan ishlaymiz.",
      btnCall: "Qo'ng'iroq:",
      btnWa: "Telegram da yozing",
      mapAria: "ASLAN ot klubi joylashuv xaritasi",
      mapAddress: "Bunyodkor pr-ti, Chilonzor",
      mapLandmark: "Mo'ljal: Chilonzor gippodromi / LUKOIL AZS",
      mapsBtn: "Google Maps da ochish",
      cards: [
        { label: "Asosiy telefon" },
        { label: "Qo'shimcha telefon" },
        {
          label: "Manzil",
          value: "Bunyodkor pr-ti, Chilonzor, Toshkent",
          sub: "Mo'ljal: Chilonzor gippodromi / LUKOIL AZS",
        },
        {
          label: "Ish vaqti",
          value: "Har kuni 07:00 dan 20:00 gacha",
          sub: "Yakshanbada 18:00 gacha",
        },
      ],
    },
    footer: {
      logoAria: "ASLAN — sahifa boshiga",
      brandDesc:
        "Chilonzor, Toshkentdagi professional ot klubi. Chavandozlik darslari, konkur, otlar bilan fotosessiyalar.",
      hours: "Har kuni 07:00 dan 20:00 gacha",
      ctaTitle: "Boshlashga tayyormisiz? Hozir qo'ng'iroq qiling",
      ctaSub:
        "Birinchi sinov darsi — shunchaki qo'ng'iroq qiling yoki Telegram da yozing.",
      navTitle: "Navigatsiya",
      servicesTitle: "Xizmatlar",
      contactTitle: "Kontaktlar",
      copyright: "ASLAN Ot klubi. Barcha huquqlar himoyalangan.",
      seo: "Ot klubi Toshkent · Chavandozlik darslari Chilonzor · Konkur trenirovkalari",
      navLinks: [
        "Bosh sahifa",
        "Xizmatlar",
        "Biz haqimizda",
        "Narxlar",
        "Galereya",
        "FAQ",
        "Kontaktlar",
        "Yozilish",
      ],
      serviceLinks: [
        "Sinov darsi",
        "Individual darslar",
        "Guruh darslari",
        "Konkur bo'yicha trenirovkalar",
        "Otlar bilan fotosessiyalar",
      ],
      address: "Bunyodkor pr-ti, Chilonzor",
    },
  },
};
