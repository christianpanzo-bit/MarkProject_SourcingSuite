import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('🔍 Running pre-build JSON validation check...');

function findJsonFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const resPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      if (file.name !== 'node_modules' && file.name !== 'dist' && file.name !== '.git') {
        findJsonFiles(resPath, fileList);
      }
    } else if (file.name.endsWith('.json')) {
      fileList.push(resPath);
    }
  }
  return fileList;
}

const dataDir = path.join(projectRoot, 'src');
const jsonFiles = findJsonFiles(dataDir);

if (jsonFiles.length === 0) {
  console.log('⚠️ No JSON files found in src/ to validate.');
  process.exit(0);
}

let hasError = false;

for (const filePath of jsonFiles) {
  const relativePath = path.relative(projectRoot, filePath);
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    if (!content.trim()) {
      console.error(`❌ Error in ${relativePath}: File is empty.`);
      hasError = true;
      continue;
    }
    JSON.parse(content);
    const sizeMb = (fs.statSync(filePath).size / (1024 * 1024)).toFixed(2);
    console.log(`✅ ${relativePath} (${sizeMb} MB) - Valid JSON.`);
  } catch (err) {
    console.error(`❌ Invalid JSON in ${relativePath}: ${err.message}`);
    hasError = true;
  }
}

if (hasError) {
  console.error('\n🚨 Pre-build JSON validation failed! Fix the invalid JSON files above before building.\n');
  process.exit(1);
} else {
  console.log('✨ Pre-build JSON validation passed successfully.\n');
}
