import type { Language } from './languages';

type NavigationTranslations = {
  home: string;
  product: string;
  technology: string;
  institutions: string;
  team: string;
  company: string;
  contact: string;
};

type HeroTranslations = {
  label: string;
  heading: string;
  description: string;
};

type ProductTranslations = {
  label: string;
  heading: string;
  description: string;
};

type TechnologyTranslations = {
  label: string;
  heading: string;
  description: string;
};

type InstitutionsTranslations = {
  label: string;
  heading: string;
  description: string;
};

type TeamTranslations = {
  label: string;
  heading: string;
  description: string;
};

type CompanyTranslations = {
  label: string;
  heading: string;
  description: string;
};

type ContactTranslations = {
  label: string;
  heading: string;
  description: string;
};

type FooterTranslations = {
  developedBy: string;
  location: string;
};

export const navigationTranslations: Record<Language, NavigationTranslations> = {
  es: {
    home: 'Inicio',
    product: 'Producto',
    technology: 'Tecnología',
    institutions: 'Instituciones',
    team: 'Equipo',
    company: 'Empresa',
    contact: 'Contacto',
  },

  pt: {
    home: 'Início',
    product: 'Produto',
    technology: 'Tecnologia',
    institutions: 'Instituições',
    team: 'Equipe',
    company: 'Empresa',
    contact: 'Contato',
  },

  en: {
    home: 'Home',
    product: 'Product',
    technology: 'Technology',
    institutions: 'Institutions',
    team: 'Team',
    company: 'Company',
    contact: 'Contact',
  },

  ru: {
    home: 'Главная',
    product: 'Продукт',
    technology: 'Технологии',
    institutions: 'Организации',
    team: 'Команда',
    company: 'Компания',
    contact: 'Контакты',
  },

  fr: {
    home: 'Accueil',
    product: 'Produit',
    technology: 'Technologie',
    institutions: 'Institutions',
    team: 'Équipe',
    company: 'Entreprise',
    contact: 'Contact',
  },

  de: {
    home: 'Startseite',
    product: 'Produkt',
    technology: 'Technologie',
    institutions: 'Institutionen',
    team: 'Team',
    company: 'Unternehmen',
    contact: 'Kontakt',
  },
};

export const heroTranslations: Record<Language, HeroTranslations> = {
  es: {
    label: 'Movilidad urbana inteligente',
    heading: 'Una plataforma digital unificada para la movilidad urbana.',
    description: 'Transporte, rutas, tarjeta STM y servicios en una sola aplicación.',
  },

  pt: {
    label: 'Mobilidade urbana inteligente',
    heading: 'Uma plataforma digital unificada para a mobilidade urbana.',
    description: 'Transporte, rotas, cartão STM e serviços em um só aplicativo.',
  },

  en: {
    label: 'Smart urban mobility',
    heading: 'A unified digital platform for urban mobility.',
    description: 'Transport, routes, STM card and services in one app.',
  },

  ru: {
    label: 'Умная городская мобильность',
    heading: 'Единая цифровая платформа для городской мобильности.',
    description: 'Транспорт, маршруты, карта STM и сервисы — в одном приложении.',
  },

  fr: {
    label: 'Mobilité urbaine intelligente',
    heading: 'Une plateforme numérique unifiée pour la mobilité urbaine.',
    description: 'Transports, itinéraires, carte STM et services dans une seule application.',
  },

  de: {
    label: 'Intelligente urbane Mobilität',
    heading: 'Eine einheitliche digitale Plattform für urbane Mobilität.',
    description: 'Verkehr, Routen, STM-Karte und Services in einer einzigen App.',
  },
};

export const productTranslations: Record<Language, ProductTranslations> = {
  es: {
    label: 'Producto',
    heading: 'Todo STM en una sola aplicación',
    description: 'STM Balance reúne las funciones esenciales de movilidad y gestión de la tarjeta STM en una experiencia digital unificada.',
  },

  pt: {
    label: 'Produto',
    heading: 'Tudo do STM em um só aplicativo',
    description: 'STM Balance reúne as funções essenciais de mobilidade e gestão do cartão STM em uma experiência digital unificada.',
  },

  en: {
    label: 'Product',
    heading: 'Everything STM in one app',
    description: 'STM Balance brings together essential mobility and STM card management features in one unified digital experience.',
  },

  ru: {
    label: 'Продукт',
    heading: 'Всё STM в одном приложении',
    description: 'STM Balance объединяет основные функции городской мобильности и управления картой STM в едином цифровом интерфейсе.',
  },

  fr: {
    label: 'Produit',
    heading: 'Tout STM dans une seule application',
    description: 'STM Balance réunit les fonctions essentielles de mobilité et de gestion de la carte STM dans une expérience numérique unifiée.',
  },

  de: {
    label: 'Produkt',
    heading: 'Alles rund um STM in einer einzigen App',
    description: 'STM Balance vereint die wichtigsten Funktionen für Mobilität und die Verwaltung der STM-Karte in einer einheitlichen digitalen Anwendung.',
  },
};

export const technologyTranslations: Record<Language, TechnologyTranslations> = {
  es: {
    label: 'Tecnología',
    heading: 'Tecnología preparada para la movilidad urbana',
    description: 'STM Balance combina tecnologías móviles, geolocalización, datos en tiempo real y NFC para construir una experiencia de transporte moderna y unificada.',
  },

  pt: {
    label: 'Tecnologia',
    heading: 'Tecnologia preparada para a mobilidade urbana',
    description: 'STM Balance combina tecnologias móveis, geolocalização, dados em tempo real e NFC para construir uma experiência de transporte moderna e unificada.',
  },

  en: {
    label: 'Technology',
    heading: 'Technology built for urban mobility',
    description: 'STM Balance combines mobile technologies, geolocation, real-time data and NFC to create a modern and unified transport experience.',
  },

  ru: {
    label: 'Технологии',
    heading: 'Технологии для современной городской мобильности',
    description: 'STM Balance объединяет мобильные технологии, геолокацию, данные в реальном времени и NFC для создания современной единой транспортной среды.',
  },

  fr: {
    label: 'Technologie',
    heading: 'Une technologie conçue pour la mobilité urbaine',
    description: 'STM Balance combine les technologies mobiles, la géolocalisation, les données en temps réel et le NFC pour créer une expérience de transport moderne et unifiée.',
  },

  de: {
    label: 'Technologie',
    heading: 'Technologie für moderne urbane Mobilität',
    description: 'STM Balance verbindet mobile Technologien, Geolokalisierung, Echtzeitdaten und NFC zu einem modernen und einheitlichen Mobilitätserlebnis.',
  },
};

export const institutionsTranslations: Record<Language, InstitutionsTranslations> = {
  es: {
    label: 'Instituciones',
    heading: 'Colaboración para desarrollar la movilidad del futuro',
    description: 'STM Balance busca colaborar con instituciones públicas, operadores de transporte y organizaciones del ecosistema de movilidad para impulsar nuevas soluciones digitales para los usuarios.',
  },

  pt: {
    label: 'Instituições',
    heading: 'Colaboração para desenvolver a mobilidade do futuro',
    description: 'STM Balance busca colaborar com instituições públicas, operadores de transporte e organizações do ecossistema de mobilidade para impulsionar novas soluções digitais para os usuários.',
  },

  en: {
    label: 'Institutions',
    heading: 'Collaboration to build the mobility of the future',
    description: 'STM Balance seeks to collaborate with public institutions, transport operators and mobility ecosystem organizations to develop new digital solutions for users.',
  },

  ru: {
    label: 'Организации',
    heading: 'Сотрудничество для развития мобильности будущего',
    description: 'STM Balance стремится сотрудничать с государственными учреждениями, транспортными операторами и организациями экосистемы городской мобильности для развития новых цифровых решений для пользователей.',
  },

  fr: {
    label: 'Institutions',
    heading: 'Collaborer pour développer la mobilité de demain',
    description: 'STM Balance souhaite collaborer avec les institutions publiques, les opérateurs de transport et les organisations de l’écosystème de la mobilité afin de développer de nouvelles solutions numériques pour les utilisateurs.',
  },

  de: {
    label: 'Institutionen',
    heading: 'Gemeinsam die Mobilität der Zukunft entwickeln',
    description: 'STM Balance möchte mit öffentlichen Institutionen, Verkehrsunternehmen und Organisationen des Mobilitätsökosystems zusammenarbeiten, um neue digitale Lösungen für die Nutzer zu entwickeln.',
  },
};

export const teamTranslations: Record<Language, TeamTranslations> = {
  es: {
    label: 'Equipo',
    heading: 'Un equipo multidisciplinario detrás de STM Balance',
    description: 'STM Balance es desarrollado por un equipo con experiencia en producto, desarrollo móvil, infraestructura, DevOps, diseño y calidad.',
  },

  pt: {
    label: 'Equipe',
    heading: 'Uma equipe multidisciplinar por trás do STM Balance',
    description: 'STM Balance é desenvolvido por uma equipe com experiência em produto, desenvolvimento móvel, infraestrutura, DevOps, design e qualidade.',
  },

  en: {
    label: 'Team',
    heading: 'A multidisciplinary team behind STM Balance',
    description: 'STM Balance is developed by a team with experience in product, mobile development, infrastructure, DevOps, design and quality.',
  },

  ru: {
    label: 'Команда',
    heading: 'Междисциплинарная команда STM Balance',
    description: 'STM Balance разрабатывается командой с опытом в продуктовой разработке, мобильных приложениях, инфраструктуре, DevOps, дизайне и качестве.',
  },

  fr: {
    label: 'Équipe',
    heading: 'Une équipe multidisciplinaire derrière STM Balance',
    description: 'STM Balance est développé par une équipe expérimentée en produit, développement mobile, infrastructure, DevOps, design et qualité.',
  },

  de: {
    label: 'Team',
    heading: 'Ein multidisziplinäres Team hinter STM Balance',
    description: 'STM Balance wird von einem Team mit Erfahrung in Produktentwicklung, mobiler Entwicklung, Infrastruktur, DevOps, Design und Qualität entwickelt.',
  },
};

export const companyTranslations: Record<Language, CompanyTranslations> = {
  es: {
    label: 'Empresa',
    heading: 'Platforma SAS',
    description: 'STM Balance es un producto desarrollado por Platforma SAS, una empresa uruguaya de tecnología enfocada en soluciones digitales y movilidad urbana.',
  },

  pt: {
    label: 'Empresa',
    heading: 'Platforma SAS',
    description: 'STM Balance é um produto desenvolvido pela Platforma SAS, uma empresa uruguaia de tecnologia focada em soluções digitais e mobilidade urbana.',
  },

  en: {
    label: 'Company',
    heading: 'Platforma SAS',
    description: 'STM Balance is a product developed by Platforma SAS, a Uruguayan technology company focused on digital solutions and urban mobility.',
  },

  ru: {
    label: 'Компания',
    heading: 'Platforma SAS',
    description: 'STM Balance — продукт компании Platforma SAS, уругвайской технологической компании, специализирующейся на цифровых решениях и городской мобильности.',
  },

  fr: {
    label: 'Entreprise',
    heading: 'Platforma SAS',
    description: 'STM Balance est un produit développé par Platforma SAS, une entreprise technologique uruguayenne spécialisée dans les solutions numériques et la mobilité urbaine.',
  },

  de: {
    label: 'Unternehmen',
    heading: 'Platforma SAS',
    description: 'STM Balance ist ein Produkt von Platforma SAS, einem uruguayischen Technologieunternehmen mit Schwerpunkt auf digitalen Lösungen und urbaner Mobilität.',
  },
};

export const contactTranslations: Record<Language, ContactTranslations> = {
  es: {
    label: 'Contacto',
    heading: 'Hablemos sobre STM Balance',
    description: 'Para consultas institucionales, colaboraciones y oportunidades de desarrollo, puede comunicarse con el equipo de STM Balance.',
  },

  pt: {
    label: 'Contato',
    heading: 'Vamos conversar sobre o STM Balance',
    description: 'Para consultas institucionais, colaborações e oportunidades de desenvolvimento, entre em contato com a equipe do STM Balance.',
  },

  en: {
    label: 'Contact',
    heading: 'Let’s talk about STM Balance',
    description: 'For institutional inquiries, collaborations and development opportunities, you can contact the STM Balance team.',
  },

  ru: {
    label: 'Контакты',
    heading: 'Давайте поговорим о STM Balance',
    description: 'По вопросам институционального сотрудничества, партнёрства и возможностей развития можно связаться с командой STM Balance.',
  },

  fr: {
    label: 'Contact',
    heading: 'Parlons de STM Balance',
    description: 'Pour les demandes institutionnelles, les collaborations et les opportunités de développement, vous pouvez contacter l’équipe de STM Balance.',
  },

  de: {
    label: 'Kontakt',
    heading: 'Sprechen wir über STM Balance',
    description: 'Für institutionelle Anfragen, Kooperationen und Entwicklungsmöglichkeiten können Sie das STM-Balance-Team kontaktieren.',
  },
};

export const footerTranslations: Record<Language, FooterTranslations> = {
  es: {
    developedBy: 'Desarrollado por Platforma SAS',
    location: 'Montevideo — 2026',
  },

  pt: {
    developedBy: 'Desenvolvido pela Platforma SAS',
    location: 'Montevidéu — 2026',
  },

  en: {
    developedBy: 'Developed by Platforma SAS',
    location: 'Montevideo — 2026',
  },

  ru: {
    developedBy: 'Разработано Platforma SAS',
    location: 'Монтевидео — 2026',
  },

  fr: {
    developedBy: 'Développé par Platforma SAS',
    location: 'Montevideo — 2026',
  },

  de: {
    developedBy: 'Entwickelt von Platforma SAS',
    location: 'Montevideo — 2026',
  },
};
