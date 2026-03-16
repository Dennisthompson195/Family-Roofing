import type { Locale } from "./i18n";

export type IconName =
  | "building"
  | "check"
  | "clipboard"
  | "gutter"
  | "home"
  | "map"
  | "messages"
  | "phone"
  | "roof"
  | "shield"
  | "spark"
  | "wrench";

type NavLink = {
  label: string;
  href: string;
};

type InfoCard = {
  icon: IconName;
  label: string;
  value: string;
  detail: string;
  href?: string;
  external?: boolean;
};

type Stat = {
  value: string;
  label: string;
};

type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

type Service = {
  icon: IconName;
  title: string;
  description: string;
  points: string[];
};

type Step = {
  step: string;
  title: string;
  description: string;
};

type Audience = {
  icon: IconName;
  title: string;
  description: string;
};

type Faq = {
  question: string;
  answer: string;
};

export type SiteContent = {
  metadata: {
    title: string;
    description: string;
  };
  announcement: string;
  nav: {
    phoneLabel: string;
    cta: string;
    links: NavLink[];
  };
  hero: {
    kicker: string;
    title: string;
    description: string;
    badges: string[];
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    captionLabel: string;
    caption: string;
    quickFacts: InfoCard[];
    stats: Stat[];
  };
  trust: {
    eyebrow: string;
    title: string;
    description: string;
    items: Feature[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: Service[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Step[];
  };
  languageCallout: {
    eyebrow: string;
    title: string;
    description: string;
    citiesLabel: string;
    cities: string[];
    switchCta: string;
  };
  audiences: {
    eyebrow: string;
    title: string;
    description: string;
    items: Audience[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: Faq[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    details: InfoCard[];
    checklistTitle: string;
    checklist: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    tagline: string;
    bottomLine: string;
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    metadata: {
      title: "Family Roofing | Bilingual Roofing in Lincoln, Nebraska",
      description:
        "Residential roofing, commercial roofing, storm response, gutters, and bilingual support for Lincoln, Omaha, Crete, Seward, Milford, and nearby Nebraska communities.",
    },
    announcement:
      "Hispanic-owned, family-operated roofing in Lincoln, Omaha, Crete, Seward, Milford, and nearby Nebraska communities. Se habla español.",
    nav: {
      phoneLabel: "Call now",
      cta: "Free inspection",
      links: [
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Who We Help", href: "#who-we-help" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
    hero: {
      kicker: "Residential + Commercial Roofing",
      title:
        "Clear estimates, dependable roofing, and bilingual support for Nebraska properties.",
      description:
        "Family Roofing helps homeowners, property managers, and business owners move from leak or storm concern to a confident plan quickly. English and Spanish support is available from the first call to the final walkthrough.",
      badges: ["Free inspections", "24/7 emergency response", "English + Spanish"],
      primaryCta: "Request a free inspection",
      secondaryCta: "Call (800) 818-1354",
      imageAlt: "Family Roofing crew working on a Nebraska roofing project.",
      captionLabel: "Based in Lincoln",
      caption:
        "Serving Omaha, Crete, Seward, Milford, and surrounding Nebraska communities.",
      quickFacts: [
        {
          icon: "phone",
          label: "Call today",
          value: "(800) 818-1354",
          detail: "Fastest way to start an inspection or emergency response.",
          href: "tel:+18008181354",
        },
        {
          icon: "messages",
          label: "Email",
          value: "info@familyrestorationne.com",
          detail: "Share photos, project details, or preferred callback info.",
          href: "mailto:info@familyrestorationne.com",
        },
        {
          icon: "map",
          label: "Office",
          value: "3625 Adams Street, Lincoln, NE 68504",
          detail: "Local base for Nebraska projects.",
          href: "https://maps.google.com/?q=3625+Adams+Street+Lincoln+NE+68504",
          external: true,
        },
      ],
      stats: [
        {
          value: "Homes + businesses",
          label: "Residential and commercial roofing under one brand.",
        },
        {
          value: "Storm-ready",
          label: "Emergency roof repair and tarping available 24/7.",
        },
        {
          value: "Bilingual",
          label: "Inspections, scopes, and scheduling in English or Spanish.",
        },
      ],
    },
    trust: {
      eyebrow: "Why people feel confident calling",
      title: "Credentials and support that customers want to see up front",
      description:
        "Licensing, training, reputation, warranty coverage, and emergency response are the basics people look for when they need a roofer fast.",
      items: [
        {
          icon: "shield",
          title: "Licensed and insured",
          description:
            "Professional protection for residential and commercial projects.",
        },
        {
          icon: "check",
          title: "A+ BBB rating",
          description:
            "Public reputation proof that helps customers compare with confidence.",
        },
        {
          icon: "roof",
          title: "Certified master shingle applicators",
          description:
            "Manufacturer-aligned installation standards for shingle systems.",
        },
        {
          icon: "spark",
          title: "Factory-trained installers",
          description:
            "Crews trained for cleaner workmanship and better long-term performance.",
        },
        {
          icon: "clipboard",
          title: "Limited lifetime shingle warranty",
          description: "Manufacturer-backed warranty support where applicable.",
        },
        {
          icon: "wrench",
          title: "24/7 emergency response",
          description:
            "Tarping, temporary protection, and urgent storm follow-up when timing matters.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Start with the service that matches what changed on your property",
      description:
        "Most customers arrive with one urgent question. This version makes the right entry point obvious.",
      items: [
        {
          icon: "home",
          title: "Residential roofing",
          description:
            "Roof repair, replacement planning, leak resolution, and material guidance for homeowners.",
          points: [
            "Shingle repair and replacement",
            "Storm damage inspections",
            "Flashing, ventilation, and leak troubleshooting",
          ],
        },
        {
          icon: "building",
          title: "Commercial roofing",
          description:
            "Flat and low-slope roofing support for occupied buildings, retail sites, and commercial properties.",
          points: [
            "Repairs and restoration scopes",
            "Maintenance planning",
            "Coating and membrane system guidance",
          ],
        },
        {
          icon: "shield",
          title: "Storm damage and claims",
          description:
            "Fast inspections, emergency protection, and documentation that helps owners move quickly after bad weather.",
          points: [
            "24/7 emergency roof repair",
            "Temporary tarping and sealing",
            "Insurance claim support",
          ],
        },
        {
          icon: "gutter",
          title: "Gutters and drainage",
          description:
            "Repair, replacement, and drainage planning that protects siding, fascia, landscaping, and foundations.",
          points: [
            "Seamless gutter installation",
            "Downspout and drainage corrections",
            "Gutter guards and maintenance",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "A calm path from first call to final walkthrough",
      description: "Roofing decisions get easier when the next step is clear.",
      steps: [
        {
          step: "01",
          title: "Inspect and document",
          description:
            "We assess the roof, capture the problem, and explain what we see in plain language.",
        },
        {
          step: "02",
          title: "Build the scope",
          description:
            "Repair, replacement, or emergency protection is laid out clearly so you can decide fast.",
        },
        {
          step: "03",
          title: "Schedule and protect",
          description:
            "Work is planned around the property, with special care for occupied homes and active businesses.",
        },
        {
          step: "04",
          title: "Walk through the finish",
          description:
            "The project closes with a clear review so nothing feels uncertain at the end.",
        },
      ],
    },
    languageCallout: {
      eyebrow: "Atención en español",
      title: "Prefer Spanish? The estimate and walkthrough can happen in Spanish.",
      description:
        "From the first call through scheduling and project updates, English and Spanish support is available.",
      citiesLabel: "Local coverage",
      cities: [
        "Lincoln",
        "Omaha",
        "Crete",
        "Seward",
        "Milford",
        "Nearby Nebraska communities",
      ],
      switchCta: "Ver en español",
    },
    audiences: {
      eyebrow: "Who we help",
      title: "Built for the way different properties operate",
      description:
        "The same roof issue feels different for a homeowner, a tenant-occupied building, or a business that needs to stay open.",
      items: [
        {
          icon: "home",
          title: "Homeowners",
          description:
            "Clear repair and replacement guidance without the jargon.",
        },
        {
          icon: "clipboard",
          title: "Property managers",
          description:
            "Updates that help coordinate budgets, tenants, and scheduling.",
        },
        {
          icon: "building",
          title: "Business owners",
          description:
            "Roofing work planned around active sites and daily operations.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions customers usually want answered before they call",
      description: "Practical answers up front help people decide faster.",
      items: [
        {
          question: "Do I need a repair or a full replacement?",
          answer:
            "That depends on roof age, spread of damage, and whether the issue is isolated or system-wide. The first step is a free inspection so the scope can be explained clearly.",
        },
        {
          question: "Can you help after hail or storm damage?",
          answer:
            "Yes. Family Roofing offers emergency roof repair, tarping, and storm documentation, plus support for owners working through insurance claims.",
        },
        {
          question: "Do you handle both roofing and gutters?",
          answer:
            "Yes. Family Roofing handles roofing, gutter, drainage, and storm-related services so customers can keep the project with one team.",
        },
        {
          question: "Can we speak Spanish during the estimate?",
          answer:
            "Yes. English and Spanish support is available during inspections, estimates, scheduling, and project follow-up.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk to a roofing team that keeps the next step simple",
      description:
        "If you are dealing with leaks, storm damage, aging shingles, drainage problems, or a commercial roof issue, start with a quick call or email. The goal is to help you figure out the right next move fast.",
      details: [
        {
          icon: "phone",
          label: "Call",
          value: "(800) 818-1354",
          detail: "Fastest way to start an inspection or emergency response.",
          href: "tel:+18008181354",
        },
        {
          icon: "messages",
          label: "Email",
          value: "info@familyrestorationne.com",
          detail: "Share project details, photos, or preferred callback info.",
          href: "mailto:info@familyrestorationne.com",
        },
        {
          icon: "map",
          label: "Office",
          value: "3625 Adams Street, Lincoln, NE 68504",
          detail:
            "Serving Lincoln, Omaha, Crete, Seward, Milford, and surrounding Nebraska communities.",
          href: "https://maps.google.com/?q=3625+Adams+Street+Lincoln+NE+68504",
          external: true,
        },
      ],
      checklistTitle: "What helps the estimate move faster",
      checklist: [
        "Property address or nearby cross streets",
        "What changed: leak, storm damage, aging roof, or drainage issue",
        "Photos if you already have them",
        "Best phone number for a callback",
      ],
      primaryCta: "Call now",
      secondaryCta: "Email the team",
    },
    footer: {
      tagline:
        "Bilingual roofing for Nebraska homes, commercial properties, and storm response.",
      bottomLine:
        "Family-operated service with English and Spanish support across Lincoln and surrounding Nebraska communities.",
    },
  },
  es: {
    metadata: {
      title: "Family Roofing | Techos bilingües en Lincoln, Nebraska",
      description:
        "Techos residenciales y comerciales, respuesta a tormentas, canales y atención bilingüe para Lincoln, Omaha, Crete, Seward, Milford y comunidades cercanas de Nebraska.",
    },
    announcement:
      "Empresa hispana y familiar de techos en Lincoln, Omaha, Crete, Seward, Milford y comunidades cercanas de Nebraska. Se habla español.",
    nav: {
      phoneLabel: "Llámanos",
      cta: "Inspección gratis",
      links: [
        { label: "Servicios", href: "#services" },
        { label: "Proceso", href: "#process" },
        { label: "A quién ayudamos", href: "#who-we-help" },
        { label: "Preguntas", href: "#faq" },
        { label: "Contacto", href: "#contact" },
      ],
    },
    hero: {
      kicker: "Techos residenciales + comerciales",
      title:
        "Cotizaciones claras, techos confiables y atención bilingüe para propiedades de Nebraska.",
      description:
        "Family Roofing ayuda a dueños de casa, administradores y negocios a pasar de una fuga o daño por tormenta a un plan claro y confiable. La atención en inglés y español está disponible desde la primera llamada hasta la revisión final.",
      badges: ["Inspecciones gratis", "Respuesta 24/7", "Inglés + español"],
      primaryCta: "Solicita una inspección gratis",
      secondaryCta: "Llama al (800) 818-1354",
      imageAlt:
        "Equipo de Family Roofing trabajando en un proyecto de techos en Nebraska.",
      captionLabel: "Con base en Lincoln",
      caption:
        "Atendemos Omaha, Crete, Seward, Milford y comunidades cercanas de Nebraska.",
      quickFacts: [
        {
          icon: "phone",
          label: "Llámanos hoy",
          value: "(800) 818-1354",
          detail: "La forma más rápida de iniciar una inspección o emergencia.",
          href: "tel:+18008181354",
        },
        {
          icon: "messages",
          label: "Correo",
          value: "info@familyrestorationne.com",
          detail: "Comparte fotos, detalles del proyecto o tu mejor horario.",
          href: "mailto:info@familyrestorationne.com",
        },
        {
          icon: "map",
          label: "Oficina",
          value: "3625 Adams Street, Lincoln, NE 68504",
          detail: "Base local para proyectos en Nebraska.",
          href: "https://maps.google.com/?q=3625+Adams+Street+Lincoln+NE+68504",
          external: true,
        },
      ],
      stats: [
        {
          value: "Casas + negocios",
          label: "Techos residenciales y comerciales bajo una sola marca.",
        },
        {
          value: "Listos para tormentas",
          label: "Reparación de emergencia y lonas protectoras disponibles 24/7.",
        },
        {
          value: "Bilingüe",
          label: "Inspecciones, alcances y programación en inglés o español.",
        },
      ],
    },
    trust: {
      eyebrow: "Por qué la gente llama con confianza",
      title: "Credenciales y respaldo que los clientes quieren ver desde el inicio",
      description:
        "Licencia, capacitación, reputación, garantía y respuesta de emergencia son las bases que la gente busca cuando necesita un techador rápido.",
      items: [
        {
          icon: "shield",
          title: "Licenciados y asegurados",
          description:
            "Protección profesional para proyectos residenciales y comerciales.",
        },
        {
          icon: "check",
          title: "Calificación A+ con BBB",
          description:
            "Prueba pública de reputación para comparar con confianza.",
        },
        {
          icon: "roof",
          title: "Aplicadores maestros certificados",
          description:
            "Estándares de instalación alineados con el fabricante para sistemas de shingles.",
        },
        {
          icon: "spark",
          title: "Instaladores capacitados en fábrica",
          description:
            "Cuadrillas entrenadas para un trabajo más limpio y mejor rendimiento a largo plazo.",
        },
        {
          icon: "clipboard",
          title: "Garantía limitada de por vida",
          description: "Respaldo de garantía del fabricante cuando aplica.",
        },
        {
          icon: "wrench",
          title: "Respuesta de emergencia 24/7",
          description:
            "Lonas, protección temporal y seguimiento urgente cuando el tiempo importa.",
        },
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: "Empieza con el servicio que coincide con lo que cambió en tu propiedad",
      description:
        "La mayoría de las personas llega con una pregunta urgente. Esta versión hace obvia la mejor entrada.",
      items: [
        {
          icon: "home",
          title: "Techos residenciales",
          description:
            "Reparación, planeación de reemplazo, solución de fugas y guía de materiales para dueños de casa.",
          points: [
            "Reparación y reemplazo de shingles",
            "Inspecciones por daño de tormenta",
            "Revisión de flashing, ventilación y fugas",
          ],
        },
        {
          icon: "building",
          title: "Techos comerciales",
          description:
            "Apoyo para techos planos o de baja pendiente en edificios ocupados, locales y propiedades comerciales.",
          points: [
            "Alcances de reparación y restauración",
            "Planificación de mantenimiento",
            "Guía para recubrimientos y membranas",
          ],
        },
        {
          icon: "shield",
          title: "Daño por tormenta y reclamos",
          description:
            "Inspecciones rápidas, protección de emergencia y documentación para avanzar después del mal clima.",
          points: [
            "Reparación de emergencia 24/7",
            "Lonas y sellado temporal",
            "Apoyo con reclamos de seguro",
          ],
        },
        {
          icon: "gutter",
          title: "Canales y drenaje",
          description:
            "Reparación, reemplazo y planeación de drenaje para proteger siding, fascia, jardines y cimientos.",
          points: [
            "Instalación de canales sin costura",
            "Corrección de bajantes y drenaje",
            "Guarda hojas y mantenimiento",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Proceso",
      title: "Un camino claro desde la primera llamada hasta la revisión final",
      description:
        "Las decisiones sobre el techo se sienten más fáciles cuando el siguiente paso está claro.",
      steps: [
        {
          step: "01",
          title: "Inspeccionar y documentar",
          description:
            "Revisamos el techo, identificamos el problema y explicamos lo que vemos con lenguaje claro.",
        },
        {
          step: "02",
          title: "Definir el alcance",
          description:
            "Reparación, reemplazo o protección de emergencia se presentan con claridad para que decidas rápido.",
        },
        {
          step: "03",
          title: "Programar y proteger",
          description:
            "El trabajo se organiza alrededor de la propiedad, con cuidado especial para casas ocupadas y negocios activos.",
        },
        {
          step: "04",
          title: "Revisar el resultado",
          description:
            "Cerramos el proyecto con una revisión clara para que nada quede incierto al final.",
        },
      ],
    },
    languageCallout: {
      eyebrow: "Atención bilingüe",
      title:
        "¿Prefieres español? La inspección y la cotización pueden hacerse en español.",
      description:
        "Desde la primera llamada hasta la programación y las actualizaciones del proyecto, el apoyo está disponible en inglés y español.",
      citiesLabel: "Cobertura local",
      cities: [
        "Lincoln",
        "Omaha",
        "Crete",
        "Seward",
        "Milford",
        "Comunidades cercanas de Nebraska",
      ],
      switchCta: "View in English",
    },
    audiences: {
      eyebrow: "A quién ayudamos",
      title: "Diseñado para la forma en que operan distintas propiedades",
      description:
        "El mismo problema de techo se siente diferente para un dueño de casa, un edificio con inquilinos o un negocio que necesita seguir abierto.",
      items: [
        {
          icon: "home",
          title: "Dueños de casa",
          description:
            "Guía clara de reparación o reemplazo sin tanta jerga técnica.",
        },
        {
          icon: "clipboard",
          title: "Administradores",
          description:
            "Actualizaciones que ayudan a coordinar presupuesto, inquilinos y calendario.",
        },
        {
          icon: "building",
          title: "Negocios",
          description:
            "Trabajo planeado alrededor de sitios activos y operaciones diarias.",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas",
      title: "Lo que la mayoría quiere saber antes de llamar",
      description: "Respuestas prácticas al frente ayudan a decidir más rápido.",
      items: [
        {
          question: "¿Necesito reparación o reemplazo completo?",
          answer:
            "Depende de la edad del techo, cuánto se extendió el daño y si el problema está aislado o ya afecta todo el sistema. El primer paso es una inspección gratis para explicar el alcance con claridad.",
        },
        {
          question: "¿Pueden ayudar después de granizo o tormenta?",
          answer:
            "Sí. Family Roofing ofrece reparación de emergencia, colocación de lonas, documentación del daño y apoyo para propietarios que están manejando reclamos con el seguro.",
        },
        {
          question: "¿Trabajan techos y canales?",
          answer:
            "Sí. Family Roofing maneja techos, canales, drenaje y servicios relacionados con tormentas para que el proyecto pueda quedarse con un solo equipo.",
        },
        {
          question: "¿Podemos hablar en español durante la cotización?",
          answer:
            "Sí. El apoyo en inglés y español está disponible durante inspecciones, cotizaciones, programación y seguimiento del proyecto.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Habla con un equipo de techos que mantiene claro el siguiente paso",
      description:
        "Si tienes fugas, daño por tormenta, shingles viejos, problemas de drenaje o un tema comercial, empieza con una llamada o un correo. La meta es ayudarte a definir el siguiente movimiento rápido.",
      details: [
        {
          icon: "phone",
          label: "Llama",
          value: "(800) 818-1354",
          detail: "La forma más rápida de iniciar una inspección o emergencia.",
          href: "tel:+18008181354",
        },
        {
          icon: "messages",
          label: "Correo",
          value: "info@familyrestorationne.com",
          detail: "Comparte detalles del proyecto, fotos o tu mejor horario.",
          href: "mailto:info@familyrestorationne.com",
        },
        {
          icon: "map",
          label: "Oficina",
          value: "3625 Adams Street, Lincoln, NE 68504",
          detail:
            "Atendemos Lincoln, Omaha, Crete, Seward, Milford y comunidades cercanas de Nebraska.",
          href: "https://maps.google.com/?q=3625+Adams+Street+Lincoln+NE+68504",
          external: true,
        },
      ],
      checklistTitle: "Lo que ayuda a mover la cotización más rápido",
      checklist: [
        "Dirección de la propiedad o calles cercanas",
        "Qué cambió: fuga, tormenta, techo viejo o problema de drenaje",
        "Fotos si ya las tienes",
        "El mejor número para devolverte la llamada",
      ],
      primaryCta: "Llámanos",
      secondaryCta: "Escribe al equipo",
    },
    footer: {
      tagline:
        "Techos bilingües para casas, propiedades comerciales y respuesta a tormentas en Nebraska.",
      bottomLine:
        "Servicio familiar con atención en inglés y español para Lincoln y comunidades cercanas de Nebraska.",
    },
  },
};
