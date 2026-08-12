import fs from 'fs';
import path from 'path';

// Master script to write all 195+ world countries into src/data/countries.ts

// We will load or import our country definitions, then format and save to src/data/countries.ts
const targetFile = path.resolve(process.cwd(), 'src/data/countries.ts');

console.log('Target file path:', targetFile);
