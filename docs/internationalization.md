# 国际化指南

平台从界面文案到数据内容均支持中英双语。本文说明数据如何在本地化系统中流转，以及如何扩展新的翻译内容。

## 核心概念
- **双语基础类型**（`src/types/index.ts`）  
  - `BilingualText`：`{ zh: string; en: string }`  
  - `BilingualArray`：`{ zh: string[]; en: string[] }`
- **翻译字典目录**：`src/locales/zh.ts`、`src/locales/en.ts`，结构遵循 `src/types/i18n.ts` 中的 `TranslationKeys`。
- **语言状态管理**：`src/store/language.ts` 使用 Zustand + `persist` 保存当前语言，`useTranslation()` 返回词典、语言代码和切换函数。

## 渲染本地化数据
### 在组件中
```tsx
import { useTranslation } from '@/hooks/useTranslation'

const { t, locale, setLocale } = useTranslation()
return <span>{t.common.languageRecommendation}</span>
```

### 处理结构化数据
`src/lib/utils/i18n-data.ts` 将双语数据转换为单语对象：
- `getLocalizedLanguages(languages, locale)` 返回 `LocalizedLanguage[]`，所有双语字段被压平为字符串/数组。
- `getLocalizedLanguageById(languages, id, locale)` 为语言详情页提供数据。
- `getLocalizedArticles` / `getLocalizedArticleById` 为文化文章列表与详情获取本地化内容。

当存在 `src/data/enhanced-languages-new.ts` 的扩展信息时，上述函数会自动合并，确保丰富数据只维护一份双语版本。

## 新增或更新翻译
1. **扩展翻译键**：若需要新命名空间或键，先更新 `TranslationKeys`，再同步修改 `src/locales/en.ts` 与 `src/locales/zh.ts`。
2. **双语数据建模**：新增语言、文章等时，请使用 `BilingualText` / `BilingualArray` 字段，主要修改位置在 `src/lib/data/languages.ts` 与 `src/lib/data/culture-articles.ts`。
3. **界面语言切换**：头部语言切换在 `src/components/header-static.tsx` 内通过服务端表单调用 `setLocaleAction` 写入 Cookie，并在提交时刷新页面。若增加新语言，需要添加对应字典文件、扩展切换按钮并更新 `setLocaleAction` 的可选值。
4. **语言持久化**：`useLanguageStore` 默认将语言写入 `localStorage` 的 `language-storage` 键，无需额外配置。

## 实践注意事项
- **语言名称**：`LocalizedLanguage` 目前保留原始 `name`（英文）。若需中文名称，请使用 `nameZh` 或自行映射。
- **扩展数据 ID**：确保 `enhancedLanguageData` 的键与 `src/lib/data/languages.ts` 中的 `id` 一致，例如避免 `mandarin` / `chinese` 不匹配。
- **Markdown 内容**：文化文章正文保存为双语 Markdown，渲染时调用 `getLocalizedArticleById` 并由 `ReactMarkdown` 输出。
- **降级策略**：`getTranslations(locale)` 若找不到对应语言，会回退到英文，避免运行时崩溃。

更多历史背景、实施记录可查看 `docs/archive/legacy/` 下的归档文档。
