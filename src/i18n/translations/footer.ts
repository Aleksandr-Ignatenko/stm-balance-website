import type { Language } from '../languages';

type FooterTranslations = {
  developedBy: string;
  location: string;
  privacy: string;
  terms: string;
};

export const footerTranslations: Record<Language, FooterTranslations> = {
  es: {
    developedBy: 'Desarrollado por Platforma SAS',
    location: 'Montevideo — 2026',
    privacy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
  },

  pt: {
    developedBy: 'Desenvolvido pela Platforma SAS',
    location: 'Montevidéu — 2026',
    privacy: 'Política de Privacidade',
    terms: 'Termos e Condições',
  },

  en: {
    developedBy: 'Developed by Platforma SAS',
    location: 'Montevideo — 2026',
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
  },

  ru: {
    developedBy: 'Разработано Platforma SAS',
    location: 'Монтевидео — 2026',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
  },

  fr: {
    developedBy: 'Développé par Platforma SAS',
    location: 'Montevideo — 2026',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales',
  },

  de: {
    developedBy: 'Entwickelt von Platforma SAS',
    location: 'Montevideo — 2026',
    privacy: 'Datenschutzerklärung',
    terms: 'Allgemeine Geschäftsbedingungen',
  },
};
