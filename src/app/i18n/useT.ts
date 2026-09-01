import { useEffect, useState } from 'react';
import { cookieLocale, t, type Locale } from './index';

export function useT() {
  const [locale, setLocale] = useState<Locale>('es');

  useEffect(() => {
    setLocale(cookieLocale());
  }, []);

  return (key: string, params?: Record<string, string | number>) => t(key, params, locale);
}
