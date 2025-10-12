const fs = require('fs');
const path = require('path');

// Read the current file
const filePath = path.join(__dirname, '..', 'src', 'data', 'enhanced-languages.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find where to insert (after Spanish, before TODO comment)
const insertPoint = content.indexOf('  },\n\n  // TODO:');

if (insertPoint === -1) {
  // Try alternate pattern (after closing brace of italian partial)
  const altPoint = content.indexOf('  }\n\n  // TODO:');
  if (altPoint === -1) {
    console.error('Could not find insertion point!');
    process.exit(1);
  }
  
  // Remove the incomplete italian entry first
  content = content.replace(/,\n\n  italian: \{[\s\S]*?\n  \}\n\n  \/\/ TODO:/, ',\n\n  // TODO:');
}

console.log('File loaded, preparing to add all 9 languages...');
console.log('This will add approximately 1500+ lines of code');
console.log('Creating backup first...');

// Create backup
fs.writeFileSync(filePath + '.backup', content, 'utf8');
console.log('✅ Backup created: enhanced-languages.ts.backup');

console.log('\n⚠️  Due to file size, languages will be added in the next step');
console.log('Run: node scripts/add-remaining-languages.js');

