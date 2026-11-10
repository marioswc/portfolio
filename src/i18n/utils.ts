import { ui, defaultLang, type Lang, type UIKey } from "./ui";

export function getLang(locale?: string): Lang {
  if (locale && locale in ui) {
    return locale as Lang;
  }
  return defaultLang;
}

export function useTranslations(locale?: string) {
  const lang = getLang(locale);
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
