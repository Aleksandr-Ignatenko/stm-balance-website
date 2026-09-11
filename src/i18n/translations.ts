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
