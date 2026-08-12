import fs from 'fs';
import path from 'path';

// Master data file that exports all 197 UN member states & territories
import { Country } from '../src/types.js';

// We will construct the complete dataset array
const fileHeader = `import { Country } from '../types';

export const COUNTRIES_DATA: Country[] = [
`;

const fileFooter = `];
`;

console.log('Building full dataset script initialized...');
