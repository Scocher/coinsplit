import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';

export const SUPPORTED_LANGUAGES = ['en'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

function resolveLocale(pickerLanguage: SupportedLanguage | null): SupportedLanguage {
  if (pickerLanguage && SUPPORTED_LANGUAGES.includes(pickerLanguage)) {
    return pickerLanguage;
  }
  const systemTag = getLocales()[0]?.languageCode ?? null;
  if (systemTag && SUPPORTED_LANGUAGES.includes(systemTag as SupportedLanguage)) {
    return systemTag as SupportedLanguage;
  }
  return 'en';
}

export function initI18n(pickerLanguage: SupportedLanguage | null = null) {
  // eslint-disable-next-line import/no-named-as-default-member
  i18n.use(initReactI18next).init({
    lng: resolveLocale(pickerLanguage),
    fallbackLng: 'en',
    resources: { en: { translation: en } },
    interpolation: { escapeValue: false },
  });
}

export default i18n;
