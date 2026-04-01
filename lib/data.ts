import type {
  FaqItem,
  FooterLink,
  FooterSocialLink,
  HeroStat,
  NavLink,
  PricingPlan,
  Testimonial,
} from "@/lib/types";
import type { Locale } from "@/lib/i18n";

const footerSocialLinks: FooterSocialLink[] = [
  {
    label: "Instagram",
    href: "#",
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
  currency: "$",
  copyright: "©",
} as const;

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
        headline: "SƏRT MƏŞQ ET. İNTİZAMLI QAL. GÜCLÜ YAŞA.",
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
        body: "ASHURXFIT.AZ praktik proqramlaşdırmanı hesabatlılıqla birləşdirir. Hər plan qrafikinə, təcrübə səviyyənə və ölçülə bilən nəticələrə uyğun hazırlanır.",
      },
      pricing: {
        sectionId: "pricing",
        title: "PROQRAMINI SEÇ",
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
        contactLabel: "ASHUR İLƏ ƏLAQƏ",
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
        phoneValue: "+1 (555) 214-7780",
        locationValue: "Austin, Texas",
      },
    },
    navLinks: [
      { label: "Haqqımızda", href: "#about" },
      { label: "Proqramlar", href: "#pricing" },
      { label: "Rəylər", href: "#testimonials" },
      { label: "Qiymətlər", href: "#pricing" },
    ] satisfies NavLink[],
    pricingPlans: [
      {
        name: "Başlanğıc",
        price: 79,
        description: "Aydın həftəlik struktur istəyən yeni başlayanlar üçün ideal seçim.",
        features: [
          "Fərdi 4 həftəlik məşq planı",
          "Forma və hərəkət texnikası üzrə istiqamətləndirmə",
          "Həftəlik irəliləyiş yoxlaması",
        ],
      },
      {
        name: "Performans",
        price: 129,
        description: "Davamlı məşq edən və nəticələrini sürətləndirmək istəyənlər üçün qurulub.",
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
        description: "Tam performans nəzarəti ilə yüksək səviyyəli fərdi kouçinq.",
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
          "Ashur idmanda özümə inamımı yenidən qurdu. Dörd aydan az müddətdə 18 funt çəki itirdim və görünən güc qazandım.",
        name: "Maya L.",
        avatar: "M",
      },
      {
        quote:
          "Struktur sadə və effektivdir. Nəhayət, davamlı qala bildim və ilk turnik hədəfimə çatdım.",
        name: "Daniel R.",
        avatar: "D",
      },
      {
        quote:
          "İş üçün tez-tez səyahət etsəm də, Ashur proqramımı hər həftə cədvəlimə uyğunlaşdırdığı üçün irəliləyiş əldə etdim.",
        name: "Avery K.",
        avatar: "A",
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
        body: "ASHURXFIT.AZ сочетает практичные программы и ответственность. Каждый план создается под твое расписание, уровень подготовки и измеримые результаты.",
      },
      pricing: {
        sectionId: "pricing",
        title: "ВЫБЕРИ ПРОГРАММУ",
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
        phoneValue: "+1 (555) 214-7780",
        locationValue: "Austin, Texas",
      },
    },
    navLinks: [
      { label: "Обо мне", href: "#about" },
      { label: "Программы", href: "#pricing" },
      { label: "Отзывы", href: "#testimonials" },
      { label: "Цены", href: "#pricing" },
    ] satisfies NavLink[],
    pricingPlans: [
      {
        name: "Старт",
        price: 79,
        description: "Отлично подходит новичкам, которым нужен понятный недельный план.",
        features: [
          "Индивидуальный 4-недельный план тренировок",
          "Рекомендации по технике и движениям",
          "Еженедельная проверка прогресса",
        ],
      },
      {
        name: "Результат",
        price: 129,
        description: "Для тех, кто тренируется стабильно и готов ускорить прогресс.",
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
        description: "Плотное сопровождение с полным контролем твоих результатов.",
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
        name: "Maya L.",
        avatar: "M",
      },
      {
        quote:
          "Структура простая и эффективная. Я наконец-то держу стабильность и достиг цели по первому подтягиванию.",
        name: "Daniel R.",
        avatar: "D",
      },
      {
        quote:
          "Я часто в командировках, но все равно прогрессировал, потому что Ashur каждую неделю адаптировал план под мой график.",
        name: "Avery K.",
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
        footerRights: "All rights reserved.",
        privacyLabel: "Privacy Policy",
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
        languageLabel: "Language selector",
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
        body: "ASHURXFIT.AZ combines practical programming with accountability. Every plan is designed around your schedule, experience level, and measurable outcomes.",
      },
      pricing: {
        sectionId: "pricing",
        title: "CHOOSE YOUR PROGRAM",
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
        linksTitle: "Links",
        contactTitle: "Contact",
        socialsTitle: "Socials",
        emailLabel: "Email",
        phoneLabel: "Phone",
        locationLabel: "Location",
        emailValue: "coach@ashurxfit.az",
        phoneValue: "+1 (555) 214-7780",
        locationValue: "Austin, Texas",
      },
    },
    navLinks: [
      { label: "ABOUT", href: "#about" },
      { label: "PROGRAMS", href: "#pricing" },
      { label: "TESTIMONIALS", href: "#testimonials" },
      { label: "PRICING", href: "#pricing" },
    ] satisfies NavLink[],
    pricingPlans: [
      {
        name: "Starter",
        price: 79,
        description: "Great for beginners who need clear weekly structure.",
        features: [
          "Custom 4-week training plan",
          "Form and movement guidance",
          "Weekly progress check-in",
        ],
      },
      {
        name: "Performance",
        price: 129,
        description: "Built for consistent trainees ready to accelerate results.",
        features: [
          "Custom 8-week performance block",
          "Nutrition habit framework",
          "Twice-weekly accountability support",
          "Priority coaching response",
        ],
        featured: true,
      },
      {
        name: "Elite Coaching",
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
        name: "Maya L.",
        avatar: "M",
      },
      {
        quote:
          "The structure is simple and effective. I finally stayed consistent and hit my first pull-up goal.",
        name: "Daniel R.",
        avatar: "D",
      },
      {
        quote:
          "I travel for work and still made progress because Ashur adapted my program every week around my schedule.",
        name: "Avery K.",
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
      { label: "About", href: "#about" },
      { label: "Programs", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ] satisfies FooterLink[],
    heroStats: [
      { value: "250+", label: "Clients Coached" },
      { value: "97%", label: "Retention Rate" },
    ] satisfies HeroStat[],
    footerSocialLinks,
  },
} as const;

export type LocaleContent = (typeof localizedContent)[Locale];

export function getLocaleContent(locale: Locale): LocaleContent {
  return localizedContent[locale];
}
