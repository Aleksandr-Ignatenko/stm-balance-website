import type { Language } from '../languages';

type FooterTranslations = {
  copyright: string;
  location: string;
  privacy: string;
  terms: string;
};

export const footerTranslations: Record<Language, FooterTranslations> = {
  es: {
    copyright: '© 2026 Platforma SAS',
    location: 'Montevideo, Uruguay',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Uso',
  },

  pt: {
    copyright: '© 2026 Platforma SAS',
    location: 'Montevidéu, Uruguai',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
  },

  en: {
    copyright: '© 2026 Platforma SAS',
    location: 'Montevideo, Uruguay',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
  },

  ru: {
    copyright: '© 2026 Platforma SAS',
    location: 'Монтевидео, Уругвай',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
  },

  fr: {
    copyright: '© 2026 Platforma SAS',
    location: 'Montevideo, Uruguay',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
  },

  de: {
    copyright: '© 2026 Platforma SAS',
    location: 'Montevideo, Uruguay',
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen',
  },
};
