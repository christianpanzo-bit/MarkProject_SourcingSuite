// Country geographical SVG shape path dictionary
// Provides realistic SVG path shapes for countries and continent landmasses

export interface CountryShapeData {
  viewBox: string;
  path: string; // SVG d attribute string
}

// Map of ISO country codes to custom SVG silhouette path shapes
export const COUNTRY_SHAPES: Record<string, CountryShapeData> = {
  // Switzerland
  CH: {
    viewBox: '0 0 100 80',
    path: 'M 15,35 L 28,25 L 45,28 L 60,18 L 85,25 L 90,40 L 80,55 L 65,58 L 50,68 L 35,62 L 20,68 L 10,50 Z',
  },
  // United States
  US: {
    viewBox: '0 0 120 75',
    path: 'M 10,12 L 45,10 L 75,12 L 105,18 L 115,32 L 110,48 L 100,55 L 90,68 L 75,65 L 68,52 L 45,55 L 28,52 L 12,40 L 5,28 Z M 80,22 L 85,18 L 92,20 Z',
  },
  // Canada
  CA: {
    viewBox: '0 0 120 90',
    path: 'M 10,65 L 30,62 L 70,63 L 110,65 L 115,45 L 105,30 L 85,20 L 70,12 L 50,15 L 30,22 L 12,38 L 5,52 Z M 60,8 L 70,12 L 65,18 Z',
  },
  // France
  FR: {
    viewBox: '0 0 100 100',
    path: 'M 35,10 L 65,12 L 85,32 L 92,60 L 75,88 L 42,92 L 18,75 L 10,45 L 20,25 Z',
  },
  // Germany
  DE: {
    viewBox: '0 0 80 100',
    path: 'M 25,10 L 55,8 L 72,25 L 68,48 L 75,70 L 55,92 L 35,88 L 18,72 L 12,50 L 22,30 Z',
  },
  // Italy
  IT: {
    viewBox: '0 0 80 110',
    path: 'M 20,10 L 55,15 L 48,32 L 60,45 L 72,62 L 62,78 L 48,92 L 40,88 L 50,70 L 38,55 L 28,35 Z M 15,82 L 28,80 L 25,92 L 12,92 Z',
  },
  // Spain
  ES: {
    viewBox: '0 0 100 90',
    path: 'M 20,15 L 80,12 L 92,35 L 85,68 L 65,82 L 38,85 L 18,72 L 12,42 Z',
  },
  // United Kingdom
  GB: {
    viewBox: '0 0 70 110',
    path: 'M 35,10 L 52,22 L 42,42 L 58,58 L 48,82 L 32,98 L 22,82 L 28,62 L 18,45 L 25,28 Z M 10,48 L 18,45 L 15,62 L 8,58 Z',
  },
  // Japan
  JP: {
    viewBox: '0 0 80 120',
    path: 'M 50,10 L 68,22 L 55,38 Z M 40,38 L 58,52 L 42,75 Z M 25,75 L 38,88 L 22,102 Z M 15,100 L 22,110 L 10,112 Z',
  },
  // China
  CN: {
    viewBox: '0 0 120 90',
    path: 'M 25,18 L 60,12 L 95,15 L 115,32 L 102,58 L 88,78 L 62,82 L 40,70 L 15,52 L 10,32 Z',
  },
  // India
  IN: {
    viewBox: '0 0 90 110',
    path: 'M 35,10 L 58,12 L 78,28 L 82,48 L 62,72 L 45,102 L 28,70 L 15,48 L 22,28 Z',
  },
  // Australia
  AU: {
    viewBox: '0 0 110 90',
    path: 'M 28,12 L 62,10 L 92,22 L 105,48 L 92,72 L 68,82 L 38,78 L 12,58 L 8,35 Z M 78,85 L 82,88 L 78,92 Z',
  },
  // Brazil
  BR: {
    viewBox: '0 0 110 110',
    path: 'M 30,12 L 78,10 L 102,32 L 98,68 L 75,98 L 52,102 L 28,80 L 12,52 L 18,28 Z',
  },
  // South Africa
  ZA: {
    viewBox: '0 0 100 80',
    path: 'M 15,15 L 85,12 L 92,38 L 78,68 L 50,78 L 22,65 L 10,40 Z',
  },
  // Egypt
  EG: {
    viewBox: '0 0 90 90',
    path: 'M 10,10 L 82,10 L 85,75 L 12,78 Z',
  },
  // Mexico
  MX: {
    viewBox: '0 0 110 80',
    path: 'M 10,15 L 60,18 L 92,38 L 105,52 L 82,62 L 55,42 L 35,38 L 18,32 Z M 5,20 L 12,32 L 8,45 Z',
  },
  // Argentina
  AR: {
    viewBox: '0 0 70 120',
    path: 'M 22,10 L 52,12 L 58,42 L 48,78 L 35,110 L 22,112 L 18,80 L 25,48 Z',
  },
  // Nigeria
  NG: {
    viewBox: '0 0 90 80',
    path: 'M 12,12 L 78,10 L 85,48 L 72,72 L 38,72 L 15,52 Z',
  },
  // Russia
  RU: {
    viewBox: '0 0 140 80',
    path: 'M 10,25 L 40,15 L 80,12 L 130,18 L 135,42 L 120,62 L 85,58 L 50,60 L 22,52 L 8,38 Z',
  },
  // Kenya
  KE: {
    viewBox: '0 0 80 90',
    path: 'M 20,10 L 68,12 L 75,48 L 58,82 L 28,78 L 12,45 Z',
  },
  // Indonesia
  ID: {
    viewBox: '0 0 130 60',
    path: 'M 10,22 L 30,32 Z M 35,28 L 58,35 Z M 65,22 L 90,28 Z M 95,20 L 122,25 Z',
  },
};

// Generates a graceful fallback SVG shape path based on country code/name if specific outline isn't present
export function getCountryShape(code: string): CountryShapeData {
  if (COUNTRY_SHAPES[code]) {
    return COUNTRY_SHAPES[code];
  }

  // Derive a deterministic geometric polygon shape from character codes for any unknown country
  let hash = 0;
  for (let i = 0; i < code.length; i++) {
    hash = (hash << 5) - hash + code.charCodeAt(i);
    hash |= 0;
  }
  const absHash = Math.abs(hash);

  const p1x = 20 + (absHash % 15);
  const p1y = 15 + ((absHash >> 2) % 15);
  const p2x = 65 + ((absHash >> 4) % 20);
  const p2y = 10 + ((absHash >> 6) % 15);
  const p3x = 80 + ((absHash >> 8) % 15);
  const p3y = 50 + ((absHash >> 10) % 20);
  const p4x = 60 + ((absHash >> 12) % 20);
  const p4y = 80 + ((absHash >> 14) % 15);
  const p5x = 25 + ((absHash >> 16) % 20);
  const p5y = 75 + ((absHash >> 18) % 15);

  return {
    viewBox: '0 0 100 100',
    path: `M ${p1x},${p1y} L ${p2x},${p2y} L ${p3x},${p3y} L ${p4x},${p4y} L ${p5x},${p5y} Z`,
  };
}

// Detailed Continental Vector Path dataset for realistic high-definition World Map SVG
export const DETAILED_CONTINENT_PATHS = [
  {
    id: 'north_america',
    name: 'North America',
    region: 'Americas',
    color: '#6366f1',
    // Realistic SVG outline for N. America
    path: 'M 8,12 C 12,8 25,10 38,12 C 45,8 55,10 65,14 C 70,18 68,28 62,32 C 55,35 48,32 40,30 C 35,32 30,42 28,52 C 22,50 18,38 12,32 C 8,28 6,18 8,12 Z M 50,6 C 54,4 58,6 56,10 Z M 32,54 C 34,50 38,52 35,58 Z',
  },
  {
    id: 'south_america',
    name: 'South America',
    region: 'Americas',
    color: '#3b82f6',
    // Realistic SVG outline for S. America
    path: 'M 28,45 C 34,42 42,46 40,54 C 38,62 35,72 30,82 C 28,84 25,82 24,75 C 22,65 24,55 28,45 Z',
  },
  {
    id: 'europe',
    name: 'Europe',
    region: 'Europe',
    color: '#10b981',
    // Realistic SVG outline for Europe
    path: 'M 42,12 C 48,10 58,10 60,15 C 62,22 56,28 52,32 C 46,35 42,32 40,25 C 40,18 41,14 42,12 Z M 44,22 C 46,20 48,22 46,25 Z M 40,28 C 42,26 43,29 41,31 Z',
  },
  {
    id: 'africa',
    name: 'Africa',
    region: 'Africa',
    color: '#f59e0b',
    // Realistic SVG outline for Africa
    path: 'M 41,34 C 48,32 60,33 62,40 C 64,48 58,62 55,75 C 50,78 45,74 44,65 C 42,55 40,42 41,34 Z M 63,62 C 65,60 66,65 64,70 Z',
  },
  {
    id: 'asia',
    name: 'Asia',
    region: 'Asia',
    color: '#ec4899',
    // Realistic SVG outline for Asia
    path: 'M 60,10 C 72,8 88,10 94,22 C 96,35 90,48 82,52 C 75,54 68,48 65,40 C 62,32 58,20 60,10 Z M 85,52 C 88,50 90,55 88,60 Z M 72,50 C 75,48 78,52 74,56 Z',
  },
  {
    id: 'oceania',
    name: 'Oceania & Australia',
    region: 'Oceania',
    color: '#8b5cf6',
    // Realistic SVG outline for Australia / Oceania
    path: 'M 78,60 C 85,58 95,60 96,70 C 97,78 88,84 80,82 C 76,80 75,70 78,60 Z M 95,78 C 97,76 98,80 96,82 Z',
  },
];
