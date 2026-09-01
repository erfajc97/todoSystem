import { es } from './locales/es';
import { en } from './locales/en';

export type Locale = 'es' | 'en';

const dictionaries = { es, en } as const;

function lookup(dict: unknown, key: string): unknown {
  return key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict);
}

export function getServerLocale(): Locale {
  return 'es';
}

export function cookieLocale(): Locale {
  if (typeof document === 'undefined') return 'es';
  const match = document.cookie.match(/(?:^|; )locale=(es|en)/);
  return (match?.[1] as Locale) ?? 'es';
}

export function t(
  key: string,
  params?: Record<string, string | number>,
  locale: Locale = getServerLocale()
): string {
  const raw = lookup(dictionaries[locale], key);
  const fallback = lookup(dictionaries.es, key);
  const value = typeof raw === 'string' ? raw : typeof fallback === 'string' ? fallback : key;
  if (!params) return value;
  return value.replace(/\{(\w+)\}/g, (_, name: string) => String(params[name] ?? ''));
}

export { es, en };
