export const languages = {
  es: 'Español',
  pt: 'Português',
  en: 'English',
  ru: 'Русский',
  fr: 'Français',
  de: 'Deutsch',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'es';
