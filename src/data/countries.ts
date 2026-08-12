import { Country } from '../types';
import { AFRICA_DATA } from './regions/africa';
import { AMERICAS_DATA } from './regions/americas';
import { EUROPE_DATA } from './regions/europe';
import { ASIA_DATA } from './regions/asia';
import { OCEANIA_DATA } from './regions/oceania';
import { getCountryGdpData } from './gdpData';

const RAW_COUNTRIES_DATA: Country[] = [
  ...AFRICA_DATA,
  ...AMERICAS_DATA,
  ...EUROPE_DATA,
  ...ASIA_DATA,
  ...OCEANIA_DATA,
];

export const COUNTRIES_DATA: Country[] = RAW_COUNTRIES_DATA.map((c) => ({
  ...c,
  gdp: c.gdp || getCountryGdpData(c.code, c.name, c.population),
}));

export interface UniqueLanguage {
  id: string;
  name: string;
  nativeName: string;
  script?: string;
  family?: string;
  countriesCount: number;
}

export function getAllUniqueLanguages(): UniqueLanguage[] {
  const langMap = new Map<string, UniqueLanguage>();

  COUNTRIES_DATA.forEach((country) => {
    country.languages?.forEach((lang) => {
      if (!lang || !lang.name) return;
      const key = lang.name.trim().toLowerCase();
      if (!langMap.has(key)) {
        langMap.set(key, {
          id: lang.id || key,
          name: lang.name,
          nativeName: lang.nativeName || lang.name,
          script: lang.script || 'Latin',
          family: lang.family || 'Indo-European',
          countriesCount: 1,
        });
      } else {
        const existing = langMap.get(key)!;
        existing.countriesCount += 1;
        if (!existing.script && lang.script) existing.script = lang.script;
        if (!existing.family && lang.family) existing.family = lang.family;
      }
    });
  });

  return Array.from(langMap.values()).sort((a, b) => b.countriesCount - a.countriesCount);
}
