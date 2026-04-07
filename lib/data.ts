import type {
  BmiPageContent,
  FaqItem,
  FooterLink,
  FooterSocialLink,
  HeroStat,
  NavLink,
  PricingPlan,
  ProteinPageContent,
  Testimonial,
} from "@/lib/types";
import type { Locale } from "@/lib/i18n";

const footerSocialLinks: FooterSocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ashur.abdullayev/",
    viewBox: "0 0 24 24",
    iconPath:
      "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
  },
  {
    label: "YouTube",
    href: "#",
    viewBox: "0 0 24 24",
    iconPath:
      "M21.6 7.2a2.8 2.8 0 0 0-2-2C17.7 4.7 12 4.7 12 4.7s-5.7 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9.1 2 12 2 12s0 2.9.4 4.8a2.8 2.8 0 0 0 2 2c1.9.5 7.6.5 7.6.5s5.7 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.9.4-4.8.4-4.8s0-2.9-.4-4.8zM10 15.5V8.5L16 12l-6 3.5z",
  },
  {
    label: "LinkedIn",
    href: "#",
    viewBox: "0 0 24 24",
    iconPath:
      "M4.9 3.5a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8zM3 9.5h3.8V21H3V9.5zm6.3 0h3.7v1.6h.1c.5-1 1.8-2 3.8-2 4.1 0 4.9 2.7 4.9 6.2V21H18v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9.3V9.5z",
  },
];

const sharedSymbols = {
  arrow: "→",
  previous: "◀",
  next: "▶",
  currency: "₼",
  copyright: "©",
} as const;

const locationMapHref =
  "https://www.google.com/maps/search/?api=1&query=Yusif+V%C9%99zir+%C3%87%C9%99m%C9%99nz%C9%99minli+5A%2C+Baku%2C+Azerbaijan";

export const localizedContent = {
  az: {
    siteContent: {
      symbols: sharedSymbols,
      brand: {
        name: "ASHURXFIT.AZ",
        trainerName: "Ashur",
        footerRights: "Bütün hüquqlar qorunur.",
        privacyLabel: "Məxfilik Siyasəti",
        privacyHref: "/privacy",
      },
      metadata: {
        title: "ASHURXFIT.AZ | Ashur Şəxsi Məşqçi",
        description:
          "ashurxfit.az-da Ashur-dan fərdi məşq proqramları, real nəticələr və davamlı inkişaf üçün kouçinq planları.",
      },
      navbar: {
        contactLabel: "ƏLAQƏ",
        contactHref: "#contact",
        navAriaLabel: "əsas naviqasiya",
        menuOpenLabel: "Naviqasiya menyusunu aç",
        menuCloseLabel: "Naviqasiya menyusunu bağla",
        languageLabel: "Dil seçimi",
      },
      hero: {
        sectionId: "home",
        headline: "GÜCLÜ MƏŞQ ET. İNTİZAMLI QAL. SAĞLAM YAŞA.",
        subtext:
          "Güc, dözümlülük və davamlılıq qurmağın üçün Ashur-dan fərdiləşdirilmiş fitnes kouçinqi.",
        ctaLabel: "İNDİ QOŞUL",
        ctaHref: "#pricing",
        imageSrc: "/images/trainer-placeholder.svg",
        imageAlt: "Ashur məşq portreti üçün yer tutucu şəkil",
      },
      about: {
        sectionId: "about",
        imageSrc: "/images/about-placeholder.svg",
        imageAlt: "Ashur-un müştəriyə kouçinq etməsi üçün yer tutucu şəkil",
        headingLines: ["MƏQSƏDLƏRİN", "ÜÇÜN", "MƏŞQÇİLİK"],
        body: "İdman Akademiyasının məzunu olan Aşur Abdullayev, fitnes və bodibildinq üzrə 3 illik təcrübəyə malik peşəkar fərdi məşqçidir. O, karyerası ərzində 6 qat Azərbaycan çempionu, Mütləq Avropa çempionu və 2 qat Mütləq Dünya çempionu titullarına layiq görülmüşdür. Peşəkar idmançı və mütəxəssis kimi fəaliyyət göstərərək, fərdi yanaşma ilə yüksək nəticələrin əldə olunmasını təmin edir.",
      },
      pricing: {
        sectionId: "pricing",
        title: "Mövcud Proqramlar",
        featuredLabel: "ƏN POPULYAR",
        ctaLabel: "BAŞLA",
      },
      testimonials: {
        sectionId: "testimonials",
        title: "MÜŞTƏRİ NƏTİCƏLƏRİ",
        previousLabel: "Əvvəlki rəy",
        nextLabel: "Növbəti rəy",
        quoteMark: '"',
      },
      faq: {
        sectionId: "faq",
        title: "TEZ-TEZ VERİLƏN SUALLAR",
        contactLabel: "AŞUR İLƏ ƏLAQƏ",
        contactHref: "#contact",
        expandLabel: "Sualı aç",
        collapseLabel: "Sualı bağla",
      },
      ctaBanner: {
        sectionId: "contact",
        headline: "ƏN GÜCLÜ MƏRHƏLƏNƏ BAŞLAMAĞA HAZIRSAN?",
        ctaLabel: "BAŞLAYAQ",
        ctaHref: "#home",
      },
      footer: {
        linksTitle: "Keçidlər",
        contactTitle: "Əlaqə",
        socialsTitle: "Sosial şəbəkələr",
        emailLabel: "E-poçt",
        phoneLabel: "Telefon",
        locationLabel: "Ünvan",
        emailValue: "coach@ashurxfit.az",
        phoneValue: "+994 70 836 00 73",
        locationValue: "Olimpik Fitness Klub",
        locationHref: locationMapHref,
      },
    },
    navLinks: [
      { label: "Haqqımda", href: "#about" },
      { label: "Proqramlar", href: "#pricing" },
      { label: "Qiymətlər", href: "#pricing" },
      { label: "Rəylər", href: "#testimonials" },
      { label: "BMI", href: "bmi" },
      { label: "Protein", href: "protein" },
    ] satisfies NavLink[],
    bmiPage: {
      metadata: {
        title: "ASHURXFIT.AZ | BMI kalkulyatoru",
        description:
          "Boy və çəkinizi daxil edərək bədən kütlə indeksinizi (BMI) hesablayın. Ümumi məlumat üçündür; fərdi məsləhət üçün məşqçi ilə əlaqə saxlayın.",
      },
      pageTitle: "BMI kalkulyatoru",
      pageSubtitle:
        "Boy və çəkini əsas götürərək ümumi bədən kütlə indeksini hesablayın.",
      intro:
        "Bu alət WHO (Dünya Sağlamlıq Təşkilatı) tərəfindən ən çox yayılmış BMI aralıqlarına əsaslanır. İndeks tək başına sağlamlıq diaqnozu deyil; əzələ kütləsi, sümük strukturu və ümumi rifah da rol oynayır.",
      heightLabel: "Boy (sm)",
      weightLabel: "Çəki (kq)",
      optionalHint: "Hər iki sahəni doldurduqca nəticə yenilənir.",
      calculateLabel: "Hesabla",
      clearLabel: "Təmizlə",
      resultTitle: "Nəticən",
      resultEmpty: "Boy və çəki daxil et — BMI burada görünəcək.",
      bmiAbbrev: "BMI",
      yourCategoryLabel: "Kateqoriya",
      categories: {
        underweight: {
          label: "Çəki azlığı",
          rangeLabel: "< 18.5",
        },
        normal: {
          label: "Normal",
          rangeLabel: "18.5 – 24.9",
        },
        overweight: {
          label: "Artıq çəki",
          rangeLabel: "25 – 29.9",
        },
        obese: {
          label: "Obezlik",
          rangeLabel: "≥ 30",
        },
      },
      disclaimer:
        "Bu kalkulyator təhsil xarakterli məlumat üçündür və həkim və ya peşəkar sağlamlıq məsləhətlərinin əvəzinə keçmir. Hamiləlik, idmançı bədən quruluşu və ya xroniki xəstəlik zamanı BMI şərhi fərqli ola bilər.",
      backHomeLabel: "Ana səhifəyə qayıt",
      gaugeCaption: "Ümumi BMI spektri (göstərici təxminidir)",
      validation: {
        heightRange: "Boy adətən 50–250 sm arasında olur.",
        weightRange: "Çəki adətən 20–300 kq arasında olur.",
        enterBoth: "Həm boyu, həm də çəkini daxil edin.",
      },
    } satisfies BmiPageContent,
    proteinPage: {
      metadata: {
        title: "ASHURXFIT.AZ | Gündəlik protein kalkulyatoru",
        description:
          "Çəkin və məşq səviyyənə görə təxmini gündəlik protein hədəfi hesabla. Ümumi bələdçidir; fərdi plan üçün məşqçi ilə danış.",
      },
      pageTitle: "Protein kalkulyatoru",
      pageSubtitle:
        "Bədən çəkisi və fəaliyyət səviyyəsinə uyğun təxmini protein qəbulunu hesablayın.",
      intro:
        "Dəyərlər idman məşqçilərində tez-tez istinad olunan q/kq miqdarlarına əsaslanır. Yaş, sağlamlıq vəziyyəti və istəyə görə dəqiq tənzimləmə fərqli ola bilər; gün boyu bir neçə qəbula bölünməsi adətən bir qəbulda hər şeyi yeməkdən daha rahat olur.",
      weightLabel: "Çəki (kq)",
      activityLabel: "Məşq və fəaliyyət",
      activityHint: "Özünə ən yaxın seçənəyi işarələ.",
      optionalHint:
        "Çəki daxil etdikcə nəticə yenilənir; səviyyəni dəyişdikdə miqdar təzələnir.",
      calculateLabel: "Hesabla",
      clearLabel: "Təmizlə",
      resultTitle: "Təxmini hədəf",
      resultEmpty: "Çəkini daxil et — gündəlik protein qəbulun burada görünəcək.",
      dailyTargetLabel: "Gündəlik protein (təxmini)",
      perKgCaption: "Bələdçi qəbul miqdarı (q/kq çəkiyə)",
      perMealTitle: "Qəbullara bölünsə (təxmin)",
      perMealMealsNote: "3 qəbul üçün orta təxmin — bölüşdürmə fərdi ola bilər.",
      disclaimer:
        "Bu alət təhsil xarakterlidir və diaqnoz və ya fərdi dietanın əvəzi deyil. Hamiləlik, xəstəlik və ya müəyyən dərzlər üçün ehtiyac fərqlidir.",
      backHomeLabel: "Ana səhifəyə qayıt",
      levels: {
        sedentary: {
          label: "Az hərəkətli",
          description: "Əsasən oturaq iş, az məşq və ya heç olmasın.",
        },
        light: {
          label: "Yüngül məşq",
          description: "Həftədə 1–3 yüngül orta intensivlikdə məşq.",
        },
        moderate: {
          label: "Orta səviyyə",
          description: "Həftədə təxmin 3–5 məşq, orta yüklənmə.",
        },
        active: {
          label: "Aktiv",
          description: "Həftədə 5–6 məşq və ya fiziki iş.",
        },
        athlete: {
          label: "İdmançı / çox yüksək yüklənmə",
          description: "Gündəlik iki məşq, ağır dövrələr və ya yarış hazırlığı.",
        },
      },
      validation: {
        weightRange: "Çəki adətən 30–250 kq arasında olur.",
      },
    } satisfies ProteinPageContent,
    pricingPlans: [
      {
        name: "Başlanğıc",
        price: 79,
        description:
          "Aydın həftəlik struktur istəyən yeni başlayanlar üçün ideal seçim.",
        features: [
          "Fərdi 4 həftəlik məşq planı",
          "Forma və hərəkət texnikası üzrə istiqamətləndirmə",
          "Həftəlik irəliləyiş yoxlaması",
        ],
      },
      {
        name: "Performans",
        price: 129,
        description:
          "Davamlı məşq edən və nəticələrini sürətləndirmək istəyənlər üçün qurulub.",
        features: [
          "Fərdi 8 həftəlik performans bloku",
          "Qidalanma vərdişləri çərçivəsi",
          "Həftədə iki dəfə hesabatlılıq dəstəyi",
          "Prioritet kouçinq cavabı",
        ],
        featured: true,
      },
      {
        name: "Elit Kouçinq",
        price: 199,
        description:
          "Tam performans nəzarəti ilə yüksək səviyyəli fərdi kouçinq.",
        features: [
          "Fərdi aylıq məşq dövrləri",
          "Tam qidalanma strategiyası dəstəyi",
          "Video forma analizləri",
          "Həftəlik fərdi zəng",
        ],
      },
    ] satisfies PricingPlan[],
    testimonials: [
      {
        quote:
          "Aşur idmanda özümə inamımı yenidən qurdu. Dörd ay ərzində 8 kq çəki verdim və gücümdə aydın artım gördüm.",
        name: "Aysel M.",
        avatar: "A",
      },
      {
        quote:
          "Plan həm sadə, həm də çox effektivdir. İş qrafikimə baxmayaraq davamlı qala bildim və ilk 5 dartınma hədəfimə çatdım.",
        name: "Murad H.",
        avatar: "M",
      },
      {
        quote:
          "Bakıda sıx iş rejimim olsa da, Aşur proqramı hər həftə qrafikimə uyğunlaşdırdı və 3 ayda həm dözümlülüyüm, həm də forma göstəricilərim xeyli yaxşılaşdı.",
        name: "Nigar S.",
        avatar: "N",
      },
    ] satisfies Testimonial[],
    faqItems: [
      {
        question: "Həftədə neçə dəfə məşq etməliyəm?",
        answer:
          "Müştərilərin çoxu həftədə üç-dörd məşqlə başlayır. Ashur həcmi qrafikinə, bərpana və məqsədlərinə uyğun tənzimləyir.",
      },
      {
        question: "Qoşulmaq üçün idman zalına çıxışım olmalıdır?",
        answer:
          "Xeyr. Proqramlar kommersiya zalı, ev zalı və ya minimum avadanlıqlı şərait üçün uyğun alternativlərlə hazırlanır.",
      },
      {
        question: "Planlara qidalanma da daxildir?",
        answer:
          "Bəli. Hər plan praktik qidalanma rəhbərliyi ilə gəlir ki, məşq və qida vərdişlərin davamlı irəliləyiş üçün birlikdə işləsin.",
      },
      {
        question: "Nəticələri nə qədər tez görəcəyəm?",
        answer:
          "Əksər müştərilər ilk dörd-səkkiz həftə ərzində enerji, güc və bədən kompozisiyasında ölçülə bilən inkişaf görür.",
      },
    ] satisfies FaqItem[],
    footerLinks: [
      { label: "Haqqımızda", href: "#about" },
      { label: "Proqramlar", href: "#pricing" },
      { label: "Rəylər", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ] satisfies FooterLink[],
    heroStats: [
      { value: "250+", label: "Məşq etdirdiyimiz müştəri" },
      { value: "97%", label: "Davamlılıq faizi" },
    ] satisfies HeroStat[],
    footerSocialLinks,
  },
  ru: {
    siteContent: {
      symbols: sharedSymbols,
      brand: {
        name: "ASHURXFIT.AZ",
        trainerName: "Ashur",
        footerRights: "Все права защищены.",
        privacyLabel: "Политика конфиденциальности",
        privacyHref: "/privacy",
      },
      metadata: {
        title: "ASHURXFIT.AZ | Персональный тренер Ashur",
        description:
          "Персональные тренировочные программы, результаты клиентов и коучинг от Ashur на ashurxfit.az для стабильного прогресса.",
      },
      navbar: {
        contactLabel: "КОНТАКТЫ",
        contactHref: "#contact",
        navAriaLabel: "основная навигация",
        menuOpenLabel: "Открыть меню навигации",
        menuCloseLabel: "Закрыть меню навигации",
        languageLabel: "Выбор языка",
      },
      hero: {
        sectionId: "home",
        headline: "ТРЕНИРУЙСЯ ЖЕСТКО. СОХРАНЯЙ ФОКУС. ЖИВИ СИЛЬНО.",
        subtext:
          "Персональный фитнес-коучинг от Ashur, чтобы развивать силу, выносливость и стабильность.",
        ctaLabel: "ПРИСОЕДИНИТЬСЯ",
        ctaHref: "#pricing",
        imageSrc: "/images/trainer-placeholder.svg",
        imageAlt: "Портрет Ashur во время тренировки",
      },
      about: {
        sectionId: "about",
        imageSrc: "/images/about-placeholder.svg",
        imageAlt: "Ashur тренирует клиента",
        headingLines: ["КОУЧИНГ", "ПОД ТВОИ", "ЦЕЛИ"],
        body: "Ашур Абдуллаев — профессиональный персональный тренер и эксперт по фитнесу и бодибилдингу с 6-летним стажем. Выпускник Спортивной Академии и титулованный атлет IFBB, он является 6-кратным чемпионом Азербайджана, Абсолютным чемпионом Европы и 2-кратным Абсолютным чемпионом мира. Сочетая глубокие теоретические знания и многолетний опыт на высшем спортивном уровне, он помогает клиентам достигать поставленных целей максимально эффективно.",
      },
      pricing: {
        sectionId: "pricing",
        title: "Доступные программы",
        featuredLabel: "САМЫЙ ПОПУЛЯРНЫЙ",
        ctaLabel: "НАЧАТЬ",
      },
      testimonials: {
        sectionId: "testimonials",
        title: "РЕЗУЛЬТАТЫ КЛИЕНТОВ",
        previousLabel: "Предыдущий отзыв",
        nextLabel: "Следующий отзыв",
        quoteMark: '"',
      },
      faq: {
        sectionId: "faq",
        title: "FAQ",
        contactLabel: "СВЯЗАТЬСЯ С ASHUR",
        contactHref: "#contact",
        expandLabel: "Открыть вопрос",
        collapseLabel: "Свернуть вопрос",
      },
      ctaBanner: {
        sectionId: "contact",
        headline: "ГОТОВ НАЧАТЬ СВОЙ САМЫЙ СИЛЬНЫЙ ЭТАП?",
        ctaLabel: "НАЧНЕМ",
        ctaHref: "#home",
      },
      footer: {
        linksTitle: "Ссылки",
        contactTitle: "Контакты",
        socialsTitle: "Соцсети",
        emailLabel: "Email",
        phoneLabel: "Телефон",
        locationLabel: "Локация",
        emailValue: "coach@ashurxfit.az",
        phoneValue: "+994 70 836 00 73",
        locationValue: "Olimpik Fitness Klub",
        locationHref: locationMapHref,
      },
    },
    navLinks: [
      { label: "Обо мне", href: "#about" },
      { label: "Программы", href: "#pricing" },
      { label: "Отзывы", href: "#testimonials" },
      { label: "ИМТ", href: "bmi" },
      { label: "Белок", href: "protein" },
      { label: "Цены", href: "#pricing" },
    ] satisfies NavLink[],
    bmiPage: {
      metadata: {
        title: "ASHURXFIT.AZ | Калькулятор ИМТ",
        description:
          "Узнайте индекс массы тела (ИМТ) по росту и весу. Это ориентир для общего понимания формы, а не медицинский диагноз.",
      },
      pageTitle: "Калькулятор ИМТ",
      pageSubtitle:
        "Быстрый расчёт индекса массы тела по росту (см) и весу (кг).",
      intro:
        "Мы используем распространённую шкалу ИМТ с разбивкой по диапазонам ВОЗ. ИМТ не отражает всю картину: мышечная масса, кости и самочувствие тоже важны.",
      heightLabel: "Рост (см)",
      weightLabel: "Вес (кг)",
      optionalHint: "Результат обновляется, когда заполнены оба поля.",
      calculateLabel: "Рассчитать",
      clearLabel: "Сбросить",
      resultTitle: "Ваш результат",
      resultEmpty: "Введите рост и вес — ИМТ появится здесь.",
      bmiAbbrev: "ИМТ",
      yourCategoryLabel: "Категория",
      categories: {
        underweight: {
          label: "Недостаточный вес",
          rangeLabel: "< 18.5",
        },
        normal: {
          label: "Норма",
          rangeLabel: "18.5 – 24.9",
        },
        overweight: {
          label: "Избыточный вес",
          rangeLabel: "25 – 29.9",
        },
        obese: {
          label: "Ожирение",
          rangeLabel: "≥ 30",
        },
      },
      disclaimer:
        "Калькулятор носит информационный характер и не заменяет консультацию врача или диетолога. Для беременности, подготовленных атлетов и хронических состояний интерпретация ИМТ может отличаться.",
      backHomeLabel: "На главную",
      gaugeCaption: "Ориентировочная шкала ИМТ",
      validation: {
        heightRange: "Обычно рост находится в диапазоне 50–250 см.",
        weightRange: "Обычно вес находится в диапазоне 20–300 кг.",
        enterBoth: "Укажите и рост, и вес.",
      },
    } satisfies BmiPageContent,
    proteinPage: {
      metadata: {
        title: "ASHURXFIT.AZ | Калькулятор белка",
        description:
          "Оцените ориентировочную суточную норму белка по весу и уровню активности. Это справочно, не замена консультации специалиста.",
      },
      pageTitle: "Калькулятор белка",
      pageSubtitle:
        "Диапазон граммов белка в день исходя из массы тела и типичной нагрузки.",
      intro:
        "Диапазоны основаны на распространённых ориентирах г/кг для тренирующихся людей. Возраст, здоровье и предпочтения могут менять цель; белок удобнее распределять на несколько приёмов пищи, а не за один раз.",
      weightLabel: "Вес (кг)",
      activityLabel: "Тренировки и активность",
      activityHint: "Выбери вариант, который лучше всего описывает твою неделю.",
      optionalHint:
        "Результат обновляется при вводе веса; смена уровня активности пересчитывает диапазон.",
      calculateLabel: "Рассчитать",
      clearLabel: "Сбросить",
      resultTitle: "Твой ориентир",
      resultEmpty: "Введи вес — здесь появится диапазон белка в день.",
      dailyTargetLabel: "Белка в день (ориентир)",
      perKgCaption: "Ориентир г/кг массы тела",
      perMealTitle: "Если делить на приёмы",
      perMealMealsNote: "Примерно на 3 приёма — реальное распределение индивидуально.",
      disclaimer:
        "Калькулятор носит информационный характер. Не является медицинской рекомендацией. Беременность, заболевания и ограничения по белку требуют индивидуального подхода.",
      backHomeLabel: "На главную",
      levels: {
        sedentary: {
          label: "Мало движения",
          description: "В основном сидячая работа, мало или нет тренировок.",
        },
        light: {
          label: "Лёгкие тренировки",
          description: "1–3 лёгких или умеренных занятия в неделю.",
        },
        moderate: {
          label: "Умеренно",
          description: "Примерно 3–5 тренировок в неделю, средняя нагрузка.",
        },
        active: {
          label: "Высокая активность",
          description: "5–6 тренировок в неделю или физически тяжёлая работа.",
        },
        athlete: {
          label: "Спорт / очень высокая нагрузка",
          description: "Два тяжёлых дня подряд, соревновательный блок или два раза в день.",
        },
      },
      validation: {
        weightRange: "Обычно вес в диапазоне 30–250 кг.",
      },
    } satisfies ProteinPageContent,
    pricingPlans: [
      {
        name: "Старт",
        price: 79,
        description:
          "Отлично подходит новичкам, которым нужен понятный недельный план.",
        features: [
          "Индивидуальный 4-недельный план тренировок",
          "Рекомендации по технике и движениям",
          "Еженедельная проверка прогресса",
        ],
      },
      {
        name: "Результат",
        price: 129,
        description:
          "Для тех, кто тренируется стабильно и готов ускорить прогресс.",
        features: [
          "Индивидуальный 8-недельный блок",
          "База привычек по питанию",
          "Поддержка и контроль 2 раза в неделю",
          "Приоритетная обратная связь от тренера",
        ],
        featured: true,
      },
      {
        name: "Элитный коучинг",
        price: 199,
        description:
          "Плотное сопровождение с полным контролем твоих результатов.",
        features: [
          "Индивидуальные месячные циклы тренировок",
          "Полная поддержка по стратегии питания",
          "Видеоразбор техники",
          "Еженедельный персональный звонок",
        ],
      },
    ] satisfies PricingPlan[],
    testimonials: [
      {
        quote:
          "Ashur вернул мне уверенность в зале. Я сбросила 18 фунтов и заметно стала сильнее меньше чем за четыре месяца.",
        name: "Айсель М.",
        avatar: "M",
      },
      {
        quote:
          "Структура простая и эффективная. Я наконец-то держу стабильность и достиг цели по первому подтягиванию.",
        name: "Мурад Х.",
        avatar: "D",
      },
      {
        quote:
          "Я часто в командировках, но все равно прогрессировал, потому что Ashur каждую неделю адаптировал план под мой график.",
        name: "Нигар С.",
        avatar: "A",
      },
    ] satisfies Testimonial[],
    faqItems: [
      {
        question: "Сколько раз в неделю мне тренироваться?",
        answer:
          "Большинство клиентов начинают с трех-четырех тренировок в неделю. Ashur регулирует объем под твой график, восстановление и цели.",
      },
      {
        question: "Нужен ли доступ в спортзал, чтобы начать?",
        answer:
          "Нет. Программы можно адаптировать под коммерческий зал, домашний зал или минимальное оборудование с понятными заменами упражнений.",
      },
      {
        question: "Включено ли питание в программы?",
        answer:
          "Да. Каждый план включает практические рекомендации по питанию, чтобы тренировки и питание работали вместе на устойчивый прогресс.",
      },
      {
        question: "Как быстро я увижу результат?",
        answer:
          "Большинство клиентов замечают измеримый рост энергии, силы и изменения композиции тела в первые 4-8 недель.",
      },
    ] satisfies FaqItem[],
    footerLinks: [
      { label: "Обо мне", href: "#about" },
      { label: "Программы", href: "#pricing" },
      { label: "Отзывы", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ] satisfies FooterLink[],
    heroStats: [
      { value: "250+", label: "Клиентов с коучингом" },
      { value: "97%", label: "Уровень удержания" },
    ] satisfies HeroStat[],
    footerSocialLinks,
  },
  en: {
    siteContent: {
      symbols: sharedSymbols,
      brand: {
        name: "ASHURXFIT.AZ",
        trainerName: "Ashur",
        footerRights: "ALL RIGHTS RESERVED.",
        privacyLabel: "PRIVACY POLICY",
        privacyHref: "/privacy",
      },
      metadata: {
        title: "ASHURXFIT.AZ | Ashur Personal Trainer",
        description:
          "ASHURXFIT.AZ by Ashur. Personal training programs, client results, and coaching plans built for real progress.",
      },
      navbar: {
        contactLabel: "CONTACT",
        contactHref: "#contact",
        navAriaLabel: "Primary navigation",
        menuOpenLabel: "Open navigation menu",
        menuCloseLabel: "Close navigation menu",
        languageLabel: "LANGUAGE SELECTOR",
      },
      hero: {
        sectionId: "home",
        headline: "TRAIN HARD. STAY SHARP. LIVE STRONG.",
        subtext:
          "Personalized fitness coaching from Ashur to help you build strength, endurance, and consistency.",
        ctaLabel: "JOIN NOW",
        ctaHref: "#pricing",
        imageSrc: "/images/trainer-placeholder.svg",
        imageAlt: "Ashur training portrait placeholder",
      },
      about: {
        sectionId: "about",
        imageSrc: "/images/about-placeholder.svg",
        imageAlt: "Ashur coaching a client placeholder",
        headingLines: ["COACHING", "BUILT FOR", "YOUR GOALS"],
        body: "Ashur Abdullayev is a professional personal trainer and fitness expert with 6 years of experience. A graduate of the Sports Academy and a distinguished IFBB athlete, his achievements include being a 6-time Azerbaijan Champion, an IFBB European Overall Champion, and a 2-time IFBB World Overall Champion. He combines academic knowledge with elite-level competitive experience to provide expert coaching and body transformation results.",
      },
      pricing: {
        sectionId: "pricing",
        title: "AVAILABLE PROGRAMS",
        featuredLabel: "MOST POPULAR",
        ctaLabel: "GET STARTED",
      },
      testimonials: {
        sectionId: "testimonials",
        title: "CLIENT RESULTS",
        previousLabel: "Previous testimonial",
        nextLabel: "Next testimonial",
        quoteMark: '"',
      },
      faq: {
        sectionId: "faq",
        title: "FAQ",
        contactLabel: "CONTACT ASHUR",
        contactHref: "#contact",
        expandLabel: "Expand FAQ item",
        collapseLabel: "Collapse FAQ item",
      },
      ctaBanner: {
        sectionId: "contact",
        headline: "READY TO START YOUR STRONGEST CHAPTER?",
        ctaLabel: "LET'S BEGIN",
        ctaHref: "#home",
      },
      footer: {
        linksTitle: "LINKS",
        contactTitle: "CONTACT",
        socialsTitle: "SOCIALS",
        emailLabel: "Email",
        phoneLabel: "Phone",
        locationLabel: "Location",
        emailValue: "coach@ashurxfit.az",
        phoneValue: "+994 70 836 00 73",
        locationValue: "Olimpik Fitness Klub",
        locationHref: locationMapHref,
      },
    },
    navLinks: [
      { label: "ABOUT", href: "#about" },
      { label: "PROGRAMS", href: "#pricing" },
      { label: "TESTIMONIALS", href: "#testimonials" },
      { label: "BMI", href: "bmi" },
      { label: "PROTEIN", href: "protein" },
      { label: "PRICING", href: "#pricing" },
    ] satisfies NavLink[],
    bmiPage: {
      metadata: {
        title: "ASHURXFIT.AZ | BMI Calculator",
        description:
          "Check your Body Mass Index from height and weight. Friendly guidance—BMI is one snapshot, not a full health picture.",
      },
      pageTitle: "BMI calculator",
      pageSubtitle:
        "Enter your height in centimeters and weight in kilograms for a quick estimate.",
      intro:
        "This tool uses common WHO-based BMI bands. BMI doesn’t tell the whole story—muscle mass, bone structure, and how you feel day to day matter too.",
      heightLabel: "Height (cm)",
      weightLabel: "Weight (kg)",
      optionalHint: "Your result updates automatically when both fields are valid.",
      calculateLabel: "Calculate",
      clearLabel: "Clear",
      resultTitle: "Your result",
      resultEmpty: "Add height and weight—your BMI will show here.",
      bmiAbbrev: "BMI",
      yourCategoryLabel: "Category",
      categories: {
        underweight: {
          label: "Underweight",
          rangeLabel: "< 18.5",
        },
        normal: {
          label: "Healthy range",
          rangeLabel: "18.5 – 24.9",
        },
        overweight: {
          label: "Overweight",
          rangeLabel: "25 – 29.9",
        },
        obese: {
          label: "Obesity",
          rangeLabel: "≥ 30",
        },
      },
      disclaimer:
        "This calculator is for general education and isn’t a substitute for medical advice. Pregnancy, high muscle mass, and certain health conditions can change how BMI should be read.",
      backHomeLabel: "Back to home",
      gaugeCaption: "Approximate BMI scale (marker is a guide)",
      validation: {
        heightRange: "Height is usually between 50 and 250 cm.",
        weightRange: "Weight is usually between 20 and 300 kg.",
        enterBoth: "Enter both height and weight.",
      },
    } satisfies BmiPageContent,
    proteinPage: {
      metadata: {
        title: "ASHURXFIT.AZ | Daily protein calculator",
        description:
          "Estimate a daily protein range from your weight and training level. A practical guide—not a substitute for personalized nutrition advice.",
      },
      pageTitle: "DAILY PROTEIN CALCULATOR",
      pageSubtitle:
        "A suggested grams-per-day band based on body weight and how you train.",
      intro:
        "Ranges follow common g-per-kg guidelines used in coaching. Age, health conditions, and food preferences can shift your ideal target; spreading protein across meals is usually easier than eating it all at once.",
      weightLabel: "WEIGHT (kg)",
      activityLabel: "Training & activity",
      activityHint: "Pick the option that best matches your typical week.",
      optionalHint:
        "The estimate updates as you type your weight. Changing activity level recalculates the range.",
      calculateLabel: "Calculate",
      clearLabel: "Clear",
      resultTitle: "YOUR GUIDE RANGE",
      resultEmpty: "Enter your weight—your daily protein band will appear here.",
      dailyTargetLabel: "Daily protein (approx.)",
      perKgCaption: "Guide band (g per kg body weight)",
      perMealTitle: "Split across meals (approx.)",
      perMealMealsNote: "Averaged across 3 meals—your schedule may vary.",
      disclaimer:
        "This calculator is for general education only. It is not medical nutrition therapy. Pregnancy, kidney issues, or prescribed limits need individual guidance from a qualified professional.",
      backHomeLabel: "Back to home",
      levels: {
        sedentary: {
          label: "Mostly sedentary",
          description: "Desk-based work and little to no structured training.",
        },
        light: {
          label: "LIGHT TRAINING",
          description: "1–3 easy or moderate sessions per week.",
        },
        moderate: {
          label: "Moderate",
          description: "Around 3–5 workouts weekly at moderate effort.",
        },
        active: {
          label: "ACTIVE",
          description: "5–6 training days or a physically demanding job.",
        },
        athlete: {
          label: "ATHLETE / VERY HIGH LOAD",
          description: "High-volume blocks, doubles, or competition prep.",
        },
      },
      validation: {
        weightRange: "Weight is usually between 30 and 250 kg.",
      },
    } satisfies ProteinPageContent,
    pricingPlans: [
      {
        name: "STARTER",
        price: 79,
        description: "Great for beginners who need clear weekly structure.",
        features: [
          "Custom 4-week training plan",
          "Form and movement guidance",
          "Weekly progress check-in",
        ],
      },
      {
        name: "PERFORMANCE",
        price: 129,
        description:
          "Built for consistent trainees ready to accelerate results.",
        features: [
          "Custom 8-week performance block",
          "Nutrition habit framework",
          "Twice-weekly accountability support",
          "Priority coaching response",
        ],
        featured: true,
      },
      {
        name: "ELITE COACHING",
        price: 199,
        description: "High-touch coaching with complete performance oversight.",
        features: [
          "Custom monthly training cycles",
          "Full nutrition strategy support",
          "Video form reviews",
          "Dedicated weekly call",
        ],
      },
    ] satisfies PricingPlan[],
    testimonials: [
      {
        quote:
          "Ashur rebuilt my confidence in the gym. I dropped 18 pounds and gained visible strength in less than four months.",
        name: "Aysel M.",
        avatar: "M",
      },
      {
        quote:
          "The structure is simple and effective. I finally stayed consistent and hit my first pull-up goal.",
        name: "Murad H.",
        avatar: "D",
      },
      {
        quote:
          "I travel for work and still made progress because Ashur adapted my program every week around my schedule.",
        name: "Nigar S.",
        avatar: "A",
      },
    ] satisfies Testimonial[],
    faqItems: [
      {
        question: "How often should I train each week?",
        answer:
          "Most clients start with three to four sessions weekly. Ashur adjusts volume based on your schedule, recovery, and goals.",
      },
      {
        question: "Do I need gym access to join?",
        answer:
          "No. Programs can be built for commercial gyms, home gyms, or minimal-equipment setups with clear exercise substitutions.",
      },
      {
        question: "Is nutrition included in the plans?",
        answer:
          "Yes. Every plan includes practical nutrition guidance so your training and food habits work together for steady progress.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Most clients notice measurable improvements in energy, strength, and body composition within the first four to eight weeks.",
      },
    ] satisfies FaqItem[],
    footerLinks: [
      { label: "ABOUT", href: "#about" },
      { label: "PROGRAMS", href: "#pricing" },
      { label: "TESTIMONIALS", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ] satisfies FooterLink[],
    heroStats: [
      { value: "250+", label: "CLIENTS COACHED" },
      { value: "97%", label: "RETENTION RATE" },
    ] satisfies HeroStat[],
    footerSocialLinks,
  },
} as const;

export type LocaleContent = (typeof localizedContent)[Locale];

export function getLocaleContent(locale: Locale): LocaleContent {
  return localizedContent[locale];
}
