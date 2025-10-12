# Bug Analysis: Chinese Text Showing When English Selected

**Date:** 2025-10-11
**Bug Location:** Language detail page (`/languages/[id]`)
**Affected Component:** [src/app/languages/[id]/page.tsx](../src/app/languages/[id]/page.tsx)

## Problem Description

When the user selects English in the language switcher, the language detail page still shows Chinese text in certain areas (specifically the title "韩语" and description "韩流文化的载体...").

![Bug Screenshot](The red circled area shows: 韩语 / Korean • 한국어 / 韩流文化的载体, 科技产业重要语言)

## Root Cause Analysis

### Data Flow

1. **Step 1**: `getLocalizedLanguageById()` correctly converts bilingual data → localized data
   - Source: [src/lib/data/languages.ts](../src/lib/data/languages.ts)
   - Process: `localizeLanguage()` in [src/lib/utils/i18n-data.ts](../src/lib/utils/i18n-data.ts)
   - Result: `baseLanguage` with correct English text ✅

2. **Step 2**: `enhancedLanguageData` is retrieved
   - Source: [src/data/enhanced-languages.ts](../src/data/enhanced-languages.ts)
   - Problem: Contains raw Chinese strings, NOT bilingual objects ❌
   - Structure:
     ```typescript
     {
       name: "西班牙语",  // ❌ Should be "Spanish"
       description: "世界第二大母语...",  // ❌ Should be { zh: "...", en: "..." }
       regions: ["欧洲", "北美洲"],  // ❌ Should be { zh: [...], en: [...] }
       // ... all other fields in Chinese
     }
     ```

3. **Step 3**: Data merge **OVERWRITES** localized data
   ```typescript
   // Line 84-86 in page.tsx
   const enhancedData = enhancedLanguageData[languageId]
   const language = baseLanguage && enhancedData
     ? { ...baseLanguage, ...enhancedData }  // ❌ Chinese overwrites English!
     : baseLanguage
   ```

### Why the Bug Occurs

The spread operator `{ ...baseLanguage, ...enhancedData }` gives priority to `enhancedData`, which means:
- `baseLanguage.name` = "Korean" (✅ English, localized)
- `enhancedData.name` = "韩语" (❌ Chinese, hardcoded)
- **Result**: `language.name` = "韩语" (Chinese wins!)

Same issue for:
- `description`
- `regions`
- `family`
- `metadata.family`
- All `culturalInfo` fields
- All `learningGuide` fields
- etc.

## Impact Analysis

### Affected Fields

All fields in the red circle come from `enhancedLanguageData`:
- **Title**: `language.name` → Shows "韩语" instead of "Korean"
- **Description**: `language.description` → Shows "韩流文化的载体..." instead of English
- **Language Family**: `language.metadata.family` → Shows "朝鲜语族" instead of "Koreanic"

### Unaffected Fields

These work correctly because they're not in `enhancedLanguageData`:
- Native name ("한국어") - only in base data
- Flag emoji
- Difficulty rating
- Speaker counts
- Time estimates (partially)

## Solution Options

### Option 1: ✅ **RECOMMENDED** - Remove `enhanced-languages.ts` merge

**Pros:**
- Simplest immediate fix
- No data conversion needed
- Uses properly structured base data

**Cons:**
- Loses detailed cultural/learning guide information

**Implementation:**
```typescript
// In src/app/languages/[id]/page.tsx
// BEFORE (line 81-87):
const baseLanguage = getLocalizedLanguageById(languages, languageId, locale)
const enhancedData = enhancedLanguageData[languageId]
const language = baseLanguage && enhancedData
  ? { ...baseLanguage, ...enhancedData }
  : baseLanguage

// AFTER:
const language = getLocalizedLanguageById(languages, languageId, locale)
// Remove enhancedLanguageData merge entirely
```

### Option 2: Convert `enhanced-languages.ts` to bilingual format

**Pros:**
- Keeps all detailed information
- Follows project's i18n architecture
- Complete solution

**Cons:**
- Requires converting 1,393 lines of data
- Time-consuming (estimated 4-6 hours)
- Need to translate all Chinese content to English

**Example conversion:**
```typescript
// BEFORE:
{
  name: "西班牙语",
  description: "世界第二大母语，职场和旅游热门选择",
  regions: ["欧洲", "北美洲", "南美洲", "中美洲"],
  metadata: {
    family: "印欧语系",
    branch: "罗曼语族",
    writingSystem: ["拉丁字母"]
  }
}

// AFTER:
{
  name: "Spanish",  // Use English as primary
  nameZh: "西班牙语",
  description: {
    zh: "世界第二大母语,职场和旅游热门选择",
    en: "World's second most spoken native language, popular for work and travel"
  },
  regions: {
    zh: ["欧洲", "北美洲", "南美洲", "中美洲"],
    en: ["Europe", "North America", "South America", "Central America"]
  },
  metadata: {
    family: {
      zh: "印欧语系",
      en: "Indo-European"
    },
    branch: {
      zh: "罗曼语族",
      en: "Romance languages"
    },
    writingSystem: {
      zh: ["拉丁字母"],
      en: ["Latin alphabet"]
    }
  }
}
```

Then update merge logic:
```typescript
const baseLanguage = getLocalizedLanguageById(languages, languageId, locale)
const enhancedData = enhancedLanguageData[languageId]
const language = baseLanguage && enhancedData
  ? {
      ...localizeLanguage(enhancedData, locale),  // ✅ Localize enhanced data first!
      ...baseLanguage  // Let base data override if conflicts
    }
  : baseLanguage
```

### Option 3: Add localization to merge logic

**Pros:**
- Temporary fix without data conversion
- Keeps enhanced data

**Cons:**
- Hacky solution
- Doesn't fix the root cause
- Still shows Chinese if enhanced data doesn't match expected structure

## Recommended Action Plan

### Immediate Fix (5 minutes)
1. Remove `enhancedLanguageData` import and merge
2. Test language detail pages work with base data only

### Long-term Solution (4-6 hours)
1. Convert `enhanced-languages.ts` to proper bilingual structure
2. Update all 10 languages with English translations
3. Update merge logic to use `localizeLanguage()`
4. Test all language pages in both EN and ZH modes

## Related Files

- 🔴 **Bug Location**: [src/app/languages/[id]/page.tsx:84-86](../src/app/languages/[id]/page.tsx#L84-L86)
- 🔴 **Root Cause**: [src/data/enhanced-languages.ts](../src/data/enhanced-languages.ts) (1,393 lines)
- ✅ **Working Data**: [src/lib/data/languages.ts](../src/lib/data/languages.ts)
- ✅ **Localization Utility**: [src/lib/utils/i18n-data.ts](../src/lib/utils/i18n-data.ts)

## Testing Checklist

After implementing fix:
- [ ] Visit `/languages/korean` in English mode → Should show "Korean" not "韩语"
- [ ] Visit `/languages/spanish` in English mode → Should show "Spanish" not "西班牙语"
- [ ] Switch to Chinese mode → Should show Chinese text
- [ ] Check all 10 languages work in both modes
- [ ] Verify description text is in correct language
- [ ] Verify metadata fields show correct language

---

**Conclusion**: The bug is caused by `enhanced-languages.ts` containing Chinese-only data that overwrites the properly localized base data. Quick fix: remove the merge. Complete fix: convert enhanced-languages.ts to bilingual format.
