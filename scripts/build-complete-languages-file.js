#!/usr/bin/env node

/**
 * Build complete enhanced-languages.ts with all 10 languages
 * This script creates a new file with all converted bilingual language data
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Building complete enhanced-languages.ts with all 10 languages...\n');

// Read the current file with Spanish
const currentFile = path.join(__dirname, '..', 'src', 'data', 'enhanced-languages-new.ts');
const outputFile = path.join(__dirname, '..', 'src', 'data', 'enhanced-languages-complete.ts');

let content = fs.readFileSync(currentFile, 'utf8');

// Extract everything up to and including the Spanish closing brace
const spanishEndIndex = content.lastIndexOf('  }\n\n  // All 10 languages');
if (spanishEndIndex === -1) {
  console.error('❌ Could not find Spanish data ending');
  process.exit(1);
}

const header = content.substring(0, spanishEndIndex + 5); // Include "  },\n\n"

console.log('✅ Extracted Spanish data');
console.log('📝 Now reading converted language data from agents...\n');

// Language data will be added here
// Each language object comes from the Task agent conversions

const languagesData = `
  // Note: The following 9 languages have been fully converted to bilingual format
  // Italian, Portuguese, Russian, Arabic, French, Japanese, German, Chinese, Korean
  // Each includes: culturalInfo, learningGuide, learningResources, careerOpportunities, travelAdvantages

  // TODO: Insert Italian data here
  // TODO: Insert Portuguese data here
  // TODO: Insert Russian data here
  // TODO: Insert Arabic data here
  // TODO: Insert French data here
  // TODO: Insert Japanese data here
  // TODO: Insert German data here
  // TODO: Insert Chinese data here
  // TODO: Insert Korean data here
`;

const footer = `}
`;

// For now, create a template file
const templateContent = header + languagesData + footer;

fs.writeFileSync(outputFile, templateContent, 'utf8');

console.log('✅ Template file created: enhanced-languages-complete.ts');
console.log('📊 Current size:', templateContent.split('\n').length, 'lines');
console.log('\n⚠️  Next: The actual language data needs to be inserted');
console.log('   Each language is ~150-200 lines of code');
console.log('   Total expected: ~2000-2500 lines\n');
