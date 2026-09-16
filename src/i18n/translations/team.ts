import type { Language } from '../languages';

type TeamTranslations = {
  label: string;
  heading: string;
  description: string;
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
