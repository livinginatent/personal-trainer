import type {
  BmiPageContent,
  FaqItem,
  FooterLink,
  FooterSocialLink,
  HeroStat,
  MacroPageContent,
  NavLink,
  PricingPlan,
  PrivacyPageContent,
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
  /* {
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
  }, */
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
        privacyHref: "privacy",
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
      tools: {
        sectionId: "tools",
        title: "ALƏTLƏR",
        subtitle:
          "BMI, gündəlik protein və makro bölgüsünü sürətli yoxlamaq üçün üç kalkulyator.",
        openLabel: "Aç",
        bmi: {
          title: "BMI kalkulyatoru",
          description:
            "Boy və çəki ilə bədən kütlə indeksinizi təxmini hesablayın.",
        },
        protein: {
          title: "Protein kalkulyatoru",
          description:
            "Məşq səviyyənizə uyğun təxmini günlük protein diapazonu.",
        },
        macro: {
          title: "Makro kalkulyatoru",
          description:
            "Kaloriya hədəfinizdən zülal, karbohidrat və yağı qramla bölüşdürün.",
        },
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
      { label: "Makro", href: "macro" },
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
    macroPage: {
      metadata: {
        title: "ASHURXFIT.AZ | Makro kalkulyatoru",
        description:
          "Gündəlik kaloriya hədəfi və zülal / karbohidrat / yağ faizləri ilə makroları qramla hesablayın. Ümumi bələdçidir.",
      },
      pageTitle: "Makro kalkulyatoru",
      pageSubtitle:
        "Kaloriya məqsədi və əlverişli bölgü şablonu ilə makroları planlaşdırın.",
      intro:
        "Zülal və karbohidratlar təxminən 4 kkal/q, yağlar isə 9 kkal/q verir. Nəticələr yuvarlaqlaşdırılmış qramlardır; real qida seçimləriniz və həzm fərqləri ümumi balansı bir az dəyişə bilər.",
      caloriesLabel: "Gündəlik kaloriya hədəfi",
      caloriesHint: "Məsələn, kouç və ya dietoloq ilə razılaşdığınız məqsəd.",
      splitLabel: "Kaloriya bölgüsü",
      splitHint: "Hazır şablon seçin və ya «Fərdi» ilə faizləri özünüz yazın.",
      optionalHint:
        "Kaloriya və bölgü dəyişdikcə qramlar avtomatik yenilənir.",
      calculateLabel: "Hesabla",
      clearLabel: "Təmizlə",
      customSplitLabel: "Fərdi faizlər (P / KV / Y)",
      proteinPercentLabel: "Zülal %",
      carbsPercentLabel: "Karbohidrat %",
      fatPercentLabel: "Yağ %",
      percentSumError: "Üç faizin cəmi 100 olmalıdır (təxminən ±0.5 qəbul olunur).",
      percentHint: "Nümunə: 30 / 40 / 30",
      resultTitle: "Gündəlik makrolar (təxmini)",
      resultEmpty: "Keçərli kaloriya və bölgü daxil et — makrolar burada görünəcək.",
      totalCaloriesLabel: "Kaloriya hədəfi",
      energyNote:
        "Hesablama: 4 kkal/q zülal və karbohidrat, 9 kkal/q yağ (ümumi tibb tədrisi).",
      roundedMacrosEnergy: "Yuvarlaqlaşdırılmış qramlar təxminən {n} kkal edir.",
      proteinG: "Zülal",
      carbsG: "Karbohidrat",
      fatG: "Yağ",
      macroBreakdownLabel: "Qram təqdimatı",
      splitShortLabels: {
        protein: "Z",
        carbs: "KV",
        fat: "Y",
      },
      disclaimer:
        "Bu alət təhsil üçündür; tibbi və ya fərdi qidalanma terapiyası deyil. Xəstəlik, dərman və ya xüsusi dietlər üçün mütəxəssisə müraciət edin.",
      backHomeLabel: "Ana səhifəyə qayıt",
      presets: {
        balanced: {
          label: "Balanslı",
          description: "30% zülal · 40% KV · 30% yağ — geniş istifadə olunan başlanğıc.",
        },
        highProtein: {
          label: "Daha çox zülal",
          description: "35% zülal · 35% KV · 30% yağ — güc və bərpa üçün tez-tez seçilir.",
        },
        performance: {
          label: "Yüksək karbohidrat",
          description: "25% zülal · 45% KV · 30% yağ — daha çox enerji tərəfdarları üçün.",
        },
        lowerCarb: {
          label: "Aşağı karbohid",
          description: "35% zülal · 25% KV · 40% yağ — daha az KV, daha çox yağ.",
        },
        custom: {
          label: "Fərdi",
          description: "Faizləri aşağıda özünüz təyin edin (cəm 100%).",
        },
      },
      validation: {
        caloriesRange: "Adətən 1000–6000 kkal arası realistik hədəflər üçün istifadə olunur.",
        percentInvalid: "Faizlər üçün 0–100 arası ədəd daxil edin.",
      },
    } satisfies MacroPageContent,
    privacyPage: {
      metadata: {
        title: "ASHURXFIT.AZ | Məxfilik siyasəti",
        description:
          "ashurxfit.az saytında şəxsi məlumatların toplanması, istifadəsi və hüquqlarınız haqqında məlumat.",
      },
      pageTitle: "Məxfilik siyasəti",
      lastUpdatedLabel: "Son yenilənmə",
      lastUpdated: "7 aprel 2026",
      intro:
        "Bu Məxfilik Siyasəti ASHURXFIT.AZ veb saytı (bundan sonra «Sayt») istifadə etdikdə şəxsi məlumatlarınızın necə emal oluna biləcəyini izah edir. Sayt fərdi məşq və kouçinq xidmətləri haqqında məlumat təqdim edir; xidmətlərə qoşulduğunuzda əlavə razılaşmalar tətbiq oluna bilər.",
      sections: [
        {
          heading: "1. Məsuliyyətli şəxs",
          paragraphs: [
            "Saytın operatoru və bu siyasət üzrə əlaqə nöqtəsi: ASHURXFIT.AZ / Ashur Abdullayev fərdi məşqçilik fəaliyyəti çərçivəsində. Ünvan və əlaqə üçün səhifənin altbilgisində göstərilmiş e-poçt və telefondan istifadə edə bilərsiniz.",
          ],
        },
        {
          heading: "2. Hansı məlumatları toplaya bilərik",
          paragraphs: [
            "Əlaqə vasitələrindən bizə yazdığınız və ya zəng etdiyiniz zaman ötürdüyünüz məlumatlar (məsələn, ad, e-poçt, telefon nömrəsi, mesaj məzmunu və digər könüllü paylaşdıqlarınız).",
            "Texniki və məhdud log məlumatları: məsələn, brauzer növü, ümumi cihaz təsviri, səhifəyə daxilolma vaxtı kimi məlumatlar hosting və ya təhlükəsizlik provayderi tərəfindən avtomatik qeydə alına bilər.",
            "Hazırda veb sayt üzərində hesab yaradılması və ya ödəniş forması tələb etmir: kalkulyatorlar brauzerinizdə daxil etdiyiniz rəqəmləri adətən serverə saxlanılmadan hesablayır.",
          ],
        },
        {
          heading: "3. Məlumatdan istifadə məqsədləri",
          paragraphs: [
            "Sorğularınıza və əlaqə müraciətlərinizə cavab vermək, məşq və ya kouçinq xidmətləri barədə məlumat ötürmək, hüquqi öhdəlikləri yerinə yetirmək və Saytın təhlükəsiz işləməsini təmin etmək.",
            "Marketinq mesajları yalnız ayrıca razılığınız olduqda və həmin razılığın şərtlərinə uyğun göndərilə bilər; hazırda avtomatik bülleten sistemimiz göstərilməyibsə, belə bir məcburiyyət yoxdur.",
          ],
        },
        {
          heading: "4. Hüquqi əsas və saxlama",
          paragraphs: [
            "Emal könüllü əlaqə və ya müqəvilə öncəsi addımlar, eləcə də qanuni maraq (saytın təhlükəsizliyi) əsasında həyata keçirilə bilər.",
            "Əlaqə mesajları adətən sorğunun məzmununa və hüquqi tələblərə uyğun müddət ərzində saxlanılır; artıq ehtiyac olmayanda silinir və ya anonimləşdirilir.",
          ],
        },
        {
          heading: "5. Üçüncü tərəflər və ötürmələr",
          paragraphs: [
            "Saytın yerləşdirildiyi hosting, e-poçt göndərici və ya analitika alətləri (tətbiq olunarsa) məhdud texniki məlumat görə bilər. Belə provayderlər müqavilə əsasında öhdəliklərə riayət etməlidirlər.",
            "Ötürmə beynəlxalq serverlər vasitəsilə ola bilər; bu halda müvafiq qoruma tədbirləri və ya standart müqavilələr tətbiq edilə bilər.",
          ],
        },
        {
          heading: "6. Kukilər",
          paragraphs: [
            "Sayt əsasən zəruri texniki kukilərdən istifadə edə bilər (məsələn, dil seçimi). Analitik və ya reklam kukiləri əlavə edilərsə, bu səhifə və ya kukilər bildirişi yenilənəcək və sizə seçim təqdim olunacaq.",
          ],
        },
        {
          heading: "7. Sizin hüquqlarınız",
          paragraphs: [
            "Mövcud qanunvericiliyin icazə verdiyi hədddə məlumatlarınıza çıxış, düzəliş, silinmə, emalın məhdudlaşdırılması və ya etiraz hüquqlarınız ola bilər. Sorğular üçün coach@ashurxfit.az ünvanına yazın.",
          ],
        },
        {
          heading: "8. Uşaqlar",
          paragraphs: [
            "Sayt 16 yaşdan aşağı uşaqlardan qəsdən şəxsi məlumat toplamır. Valideynlər belə bir hal barədə bizimlə əlaqə saxlaya bilər.",
          ],
        },
        {
          heading: "9. Dəyişikliklər",
          paragraphs: [
            "Bu siyasəti vaxtaşırı yeniləyə bilərik. Əhəmiyyətli dəyişikliklər halında Saytda bildiriş və ya yenilənmiş tarix göstərilə bilər. Versiyanın aktuallığı üçün «Son yenilənmə» tarixinə baxın.",
          ],
        },
      ],
      backHomeLabel: "Ana səhifəyə qayıt",
    } satisfies PrivacyPageContent,
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
      { label: "BMI kalkulyatoru", href: "bmi" },
      { label: "Protein kalkulyatoru", href: "protein" },
      { label: "Makro kalkulyatoru", href: "macro" },
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
        privacyHref: "privacy",
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
      tools: {
        sectionId: "tools",
        title: "ИНСТРУМЕНТЫ",
        subtitle:
          "Три калькулятора: ИМТ, белок в день и разбиение макросов по калориям.",
        openLabel: "Открыть",
        bmi: {
          title: "Калькулятор ИМТ",
          description:
            "Быстрая оценка индекса массы тела по росту и весу.",
        },
        protein: {
          title: "Калькулятор белка",
          description:
            "Ориентировочная суточная норма белка от веса и нагрузки.",
        },
        macro: {
          title: "Калькулятор макросов",
          description:
            "Граммы белков, углеводов и жиров из калорий и процентов.",
        },
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
      { label: "Макросы", href: "macro" },
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
    macroPage: {
      metadata: {
        title: "ASHURXFIT.AZ | Калькулятор макросов",
        description:
          "Рассчитай граммы белков, углеводов и жиров из суточных калорий и процентов. Для ориентира, не вместо диетолога.",
      },
      pageTitle: "Калькулятор макросов",
      pageSubtitle:
        "Задай калории и шаблон разбивки — получи граммы БЖУ на день.",
      intro:
        "Белок и углеводы дают около 4 ккал/г, жир — около 9 ккал/г. Цифры округляются; реальные продукты и переваривание слегка сдвигают баланс.",
      caloriesLabel: "Суточная цель по калориям",
      caloriesHint: "Например, цель от тренера или калькулятора расхода.",
      splitLabel: "Распределение калорий",
      splitHint: "Выбери пресет или «Свой вариант» и введи проценты.",
      optionalHint:
        "Граммы обновляются при изменении калорий или раскладки.",
      calculateLabel: "Рассчитать",
      clearLabel: "Сбросить",
      customSplitLabel: "Свои проценты (Б / У / Ж)",
      proteinPercentLabel: "Белок %",
      carbsPercentLabel: "Углеводы %",
      fatPercentLabel: "Жиры %",
      percentSumError: "Сумма трёх процентов должна быть 100 (допуск ±0.5).",
      percentHint: "Пример: 30 / 40 / 30",
      resultTitle: "Макросы на день (ориентир)",
      resultEmpty: "Введи калории и корректную раскладку — здесь появятся граммы.",
      totalCaloriesLabel: "Цель по калориям",
      energyNote:
        "Расчёт: 4 ккал/г белка и углеводов, 9 ккал/г жира (учебная модель).",
      roundedMacrosEnergy: "Округлённые граммы дают около {n} ккал.",
      proteinG: "Белок",
      carbsG: "Углеводы",
      fatG: "Жиры",
      macroBreakdownLabel: "В граммах",
      splitShortLabels: {
        protein: "Б",
        carbs: "У",
        fat: "Ж",
      },
      disclaimer:
        "Информационный инструмент, не медицинская диета. Беременность, болезни почек и индивидуальные ограничения требуют очной консультации.",
      backHomeLabel: "На главную",
      presets: {
        balanced: {
          label: "Сбалансированно",
          description: "30% Б · 40% У · 30% Ж — частый стартовый вариант.",
        },
        highProtein: {
          label: "Больше белка",
          description: "35% Б · 35% У · 30% Ж — силовые и восстановление.",
        },
        performance: {
          label: "Больше углеводов",
          description: "25% Б · 45% У · 30% Ж — упор на энергию для нагрузки.",
        },
        lowerCarb: {
          label: "Меньше углеводов",
          description: "35% Б · 25% У · 40% Ж — ниже У, выше жир.",
        },
        custom: {
          label: "Свой вариант",
          description: "Введи проценты ниже (в сумме 100%).",
        },
      },
      validation: {
        caloriesRange: "Обычно используют цели от 1000 до 6000 ккал.",
        percentInvalid: "Вводи числа от 0 до 100 для каждого процента.",
      },
    } satisfies MacroPageContent,
    privacyPage: {
      metadata: {
        title: "ASHURXFIT.AZ | Политика конфиденциальности",
        description:
          "Как обрабатываются персональные данные на сайте ashurxfit.az и какие у вас есть права.",
      },
      pageTitle: "Политика конфиденциальности",
      lastUpdatedLabel: "Последнее обновление",
      lastUpdated: "7 апреля 2026 г.",
      intro:
        "Настоящая Политика конфиденциальности описывает, как при использовании сайта ASHURXFIT.AZ (далее — «Сайт») могут обрабатываться персональные данные. Сайт информирует о персональном тренинге и коучинге; при заключении договора могут действовать отдельные условия.",
      sections: [
        {
          heading: "1. Кто отвечает за обработку",
          paragraphs: [
            "Оператор и контакт по вопросам данной политики: деятельность персонального тренера Ashur Abdullayev в рамках бренда ASHURXFIT.AZ. Адрес и контакты указаны в подвале сайта (email и телефон).",
          ],
        },
        {
          heading: "2. Какие данные мы можем собирать",
          paragraphs: [
            "Данные, которые вы добровольно передаёте при обращении (имя, email, телефон, текст сообщения и т.п.).",
            "Технические и ограниченные журнальные данные (тип браузера, обобщённое описание устройства, время обращения) — могут фиксироваться хостингом или средствами безопасности.",
            "На сайте не требуется создавать учётную запись для калькуляторов: введённые значения обычно обрабатываются в браузере и не сохраняются нами для этих инструментов.",
          ],
        },
        {
          heading: "3. Цели использования",
          paragraphs: [
            "Ответ на запросы, организация связи по тренировкам и коучингу, выполнение обязанностей по закону, обеспечение безопасности и работоспособности Сайта.",
            "Маркетинговые сообщения — только при отдельном согласии и в рамках выбранных вами настроек; если отдельной рассылки нет, обязательств по ней не возникает.",
          ],
        },
        {
          heading: "4. Правовые основания и срок хранения",
          paragraphs: [
            "Обработка может опираться на ваше согласие, подготовку к договору или законный интерес (безопасность Сайта).",
            "Корреспонденция хранится столько, сколько нужно по содержанию запроса и требованиям закона, затем удаляется или обезличивается.",
          ],
        },
        {
          heading: "5. Третьи стороны и трансграничная передача",
          paragraphs: [
            "Хостинг-провайдер, почтовые сервисы и, при подключении, аналитика могут получать ограниченные технические данные. С ними обычно заключаются договоры с обязательствами по конфиденциальности.",
            "Данные могут обрабатываться на серверах за пределами вашей страны; при необходимости применяются стандартные меры защиты.",
          ],
        },
        {
          heading: "6. Файлы cookie",
          paragraphs: [
            "Мы можем использовать необходимые технические cookie (например, выбор языка). Если будут добавлены аналитика или реклама, политика и баннер cookie будут обновлены.",
          ],
        },
        {
          heading: "7. Ваши права",
          paragraphs: [
            "В пределах применимого права вы можете запросить доступ, исправление, удаление, ограничение обработки или возражение. Напишите на coach@ashurxfit.az.",
          ],
        },
        {
          heading: "8. Дети",
          paragraphs: [
            "Мы намеренно не собираем данные детей младше 16 лет. Родители могут связаться с нами, если считают, что ребёнок передал персональные данные.",
          ],
        },
        {
          heading: "9. Изменения",
          paragraphs: [
            "Мы можем обновлять эту политику; существенные изменения будут отражены на Сайте с указанием даты. Ориентируйтесь на поле «Последнее обновление».",
          ],
        },
      ],
      backHomeLabel: "На главную",
    } satisfies PrivacyPageContent,
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
      { label: "Калькулятор ИМТ", href: "bmi" },
      { label: "Калькулятор белка", href: "protein" },
      { label: "Калькулятор макросов", href: "macro" },
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
        privacyHref: "privacy",
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
      tools: {
        sectionId: "tools",
        title: "TOOLS",
        subtitle:
          "Three quick calculators: BMI, daily protein, and macro grams from calories.",
        openLabel: "Open",
        bmi: {
          title: "BMI calculator",
          description: "Estimate body mass index from height and weight.",
        },
        protein: {
          title: "ProteIn calculator",
          description: "A daily protein band from weight and training level.",
        },
        macro: {
          title: "Macro calculator",
          description: "Turn calories and ratios into protein, carbs, and fat (g).",
        },
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
      { label: "MACROS", href: "macro" },
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
    macroPage: {
      metadata: {
        title: "ASHURXFIT.AZ | Macro calculator",
        description:
          "Split daily calories into protein, carbs, and fat in grams using preset or custom percentages. Educational only.",
      },
      pageTitle: "Macro calculator",
      pageSubtitle:
        "Set a calorie target and a macro split to see grams per day.",
      intro:
        "Protein and carbs provide about 4 kcal per gram; fat provides about 9. Numbers are rounded—real foods and digestion can nudge the total slightly.",
      caloriesLabel: "DAILY CALORIE TARGET",
      caloriesHint: "For example, a goal from your coach or expenditure estimate.",
      splitLabel: "CALORIE SPLIT",
      splitHint: "Pick a template or choose Custom to enter your own percentages.",
      optionalHint: "Grams update as you change calories or the split.",
      calculateLabel: "Calculate",
      clearLabel: "Clear",
      customSplitLabel: "Custom percentages (P / C / F)",
      proteinPercentLabel: "Protein %",
      carbsPercentLabel: "Carbs %",
      fatPercentLabel: "Fat %",
      percentSumError: "The three percentages should add up to 100 (±0.5 accepted).",
      percentHint: "Example: 30 / 40 / 30",
      resultTitle: "DAILY MACROS (APPROX.)",
      resultEmpty: "Enter valid calories and a valid split—grams will show here.",
      totalCaloriesLabel: "CALORIE TARGET",
      energyNote:
        "Math: 4 kcal/g protein & carbs, 9 kcal/g fat (standard teaching model).",
      roundedMacrosEnergy: "Rounded grams work out to about {n} kcal.",
      proteinG: "Protein",
      carbsG: "Carbs",
      fatG: "Fat",
      macroBreakdownLabel: "Gram breakdown",
      splitShortLabels: {
        protein: "P",
        carbs: "C",
        fat: "F",
      },
      disclaimer:
        "For general education only, not medical nutrition therapy. Pregnancy, kidney disease, or prescribed limits need a qualified clinician.",
      backHomeLabel: "Back to home",
      presets: {
        balanced: {
          label: "Balanced",
          description: "30% P · 40% C · 30% F—a common starting template.",
        },
        highProtein: {
          label: "HIGHER PROTEIN",
          description: "35% P · 35% C · 30% F—popular for strength and recovery.",
        },
        performance: {
          label: "HIGHER CARB",
          description: "25% P · 45% C · 30% F—more fuel for hard training.",
        },
        lowerCarb: {
          label: "Lower carb",
          description: "35% P · 25% C · 40% F—fewer carbs, more fat.",
        },
        custom: {
          label: "Custom",
          description: "Enter percentages below (must sum to 100%).",
        },
      },
      validation: {
        caloriesRange: "Typical targets often fall between 1000 and 6000 kcal.",
        percentInvalid: "Use numbers from 0 to 100 for each percentage.",
      },
    } satisfies MacroPageContent,
    privacyPage: {
      metadata: {
        title: "ASHURXFIT.AZ | Privacy policy",
        description:
          "How ASHURXFIT.AZ handles personal data when you use the site, and the choices you have.",
      },
      pageTitle: "Privacy policy",
      lastUpdatedLabel: "Last updated",
      lastUpdated: "April 7, 2026",
      intro:
        "This Privacy Policy explains how personal data may be processed when you use the ASHURXFIT.AZ website (the “Site”). The Site provides information about personal training and coaching. If you sign up for services, separate terms may apply.",
      sections: [
        {
          heading: "1. Who is responsible",
          paragraphs: [
            "The Site is operated in connection with personal training services by Ashur Abdullayev under the ASHURXFIT.AZ brand. Contact details are listed in the site footer (email and phone).",
          ],
        },
        {
          heading: "2. Data we may collect",
          paragraphs: [
            "Information you voluntarily provide when you contact us (such as name, email, phone number, and the content of your message).",
            "Limited technical data (for example, browser type, general device information, timestamps) that may be logged by hosting or security infrastructure.",
            "The on-site calculators do not require an account; values you type are generally processed in your browser and are not stored by us for those tools.",
          ],
        },
        {
          heading: "3. How we use data",
          paragraphs: [
            "To respond to enquiries, discuss coaching or training services, meet legal obligations, and keep the Site secure and functional.",
            "Marketing communications would only be sent with separate consent and in line with that consent; nothing in this policy requires you to receive marketing.",
          ],
        },
        {
          heading: "4. Legal bases and retention",
          paragraphs: [
            "Processing may rely on your consent, steps prior to a contract, or legitimate interests (such as IT security), depending on the situation and applicable law.",
            "Messages are kept only as long as needed for the purpose and any legal requirements, then deleted or anonymised.",
          ],
        },
        {
          heading: "5. Processors and transfers",
          paragraphs: [
            "Hosting, email delivery, and (if enabled) analytics vendors may process limited technical data under contract. We expect them to safeguard personal data appropriately.",
            "Data may be processed in countries other than your own; where required, we rely on appropriate safeguards.",
          ],
        },
        {
          heading: "6. Cookies",
          paragraphs: [
            "We may use strictly necessary cookies (for example, language preference). If we add analytics or advertising cookies, we will update this policy and provide appropriate choices.",
          ],
        },
        {
          heading: "7. Your rights",
          paragraphs: [
            "Depending on applicable law, you may have rights to access, correct, delete, restrict, or object to processing of your personal data. Contact us at coach@ashurxfit.az.",
          ],
        },
        {
          heading: "8. Children",
          paragraphs: [
            "We do not knowingly collect personal data from children under 16. If you believe a child has shared data with us, please get in touch.",
          ],
        },
        {
          heading: "9. Changes",
          paragraphs: [
            "We may update this policy from time to time. Material changes will be reflected on the Site with an updated “Last updated” date.",
          ],
        },
      ],
      backHomeLabel: "Back to home",
    } satisfies PrivacyPageContent,
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
      { label: "BMI CALCULATOR", href: "bmi" },
      { label: "PROTEIN CALCULATOR", href: "protein" },
      { label: "MACRO CALCULATOR", href: "macro" },
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
