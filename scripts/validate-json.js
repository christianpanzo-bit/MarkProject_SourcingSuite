import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

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

function regenerateData() {
  console.log('⚡ Automatically regenerating dataset JSON files from python scripts...');
  try {
    execSync('python3 scripts/build_demographics_data.py && python3 scripts/build_field_of_studies_data.py', {
      cwd: projectRoot,
      stdio: 'inherit',
    });
    console.log('✅ Dataset files regenerated successfully.');
    return true;
  } catch (e) {
    console.error('❌ Failed to regenerate dataset files:', e.message);
    return false;
  }
}

let dataDir = path.join(projectRoot, 'src');
let jsonFiles = findJsonFiles(dataDir);

if (jsonFiles.length === 0) {
  console.log('⚠️ No JSON files found in src/ to validate. Triggering generator...');
  regenerateData();
  jsonFiles = findJsonFiles(dataDir);
}

let hasError = false;

for (const filePath of jsonFiles) {
  const relativePath = path.relative(projectRoot, filePath);
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    if (!content.trim()) {
      throw new Error('File is empty.');
    }
    JSON.parse(content);
    const sizeMb = (fs.statSync(filePath).size / (1024 * 1024)).toFixed(2);
    console.log(`✅ ${relativePath} (${sizeMb} MB) - Valid JSON.`);
  } catch (err) {
    console.warn(`⚠️ Invalid or truncated JSON in ${relativePath}: ${err.message}`);
    console.warn('🔄 Triggering self-healing regeneration...');
    const regenerated = regenerateData();
    if (regenerated) {
      try {
        const freshContent = fs.readFileSync(filePath, 'utf-8');
        JSON.parse(freshContent);
        const freshSizeMb = (fs.statSync(filePath).size / (1024 * 1024)).toFixed(2);
        console.log(`✅ ${relativePath} (${freshSizeMb} MB) - Fixed & Valid JSON.`);
        continue;
      } catch (freshErr) {
        console.error(`❌ Still invalid after regeneration: ${freshErr.message}`);
      }
    }
    hasError = true;
  }
}

if (hasError) {
  console.error('\n🚨 Pre-build JSON validation failed! Fix the invalid JSON files above before building.\n');
  process.exit(1);
} else {
  console.log('✨ Pre-build JSON validation passed successfully.\n');
}

