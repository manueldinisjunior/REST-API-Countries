import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

export const cn = (...classes: ClassValue[]) => {
  return twMerge(clsx(classes));
};

/**
 * @returns Country name based on the country code
 * @param code - Country code (ISO 3166-1 alpha-2)
 * @param locale - Locale to use for the country name
 * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 */
export const getCountryName = (code: string, locale?: string) => {
  return new Intl.DisplayNames([locale ? locale : 'en'], { type: 'region' }).of(
    code,
  );
};
