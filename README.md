# Language World – V0.dev Integration Platform

A bilingual language-learning experience built with Next.js 15, Tailwind CSS 4, and Zustand. The project packages bespoke pages, content models, and AI-powered recommendation components that make V0.dev hand-offs production ready.

## Quick Links
- [Project Overview](docs/overview.md)
- [Architecture & Code Map](docs/architecture.md)
- [Internationalization Guide](docs/internationalization.md)
- [User Experience & Content Strategy](docs/user-experience.md)

## Getting Started
```bash
npm install
npm run dev
# open http://localhost:3000
```

```bash
npm run lint   # ESLint (Next.js config)
npm run build  # production build
npm start      # serve the build output
```

## Tech Stack
- Next.js 15 App Router with React 19 + TypeScript 5
- Tailwind CSS v4 (design tokens defined in `src/app/globals.css`)
- Zustand stores for app/session state and locale persistence
- Lucide icon set, Radix primitives, `class-variance-authority`, and `tailwind-merge`
- Remark / React Markdown for bilingual culture articles
- Scripts for large bilingual dataset generation (`scripts/`, `convert_remaining_articles.py`)

## Feature Overview
- **Marketing home** with popular language cards, culture highlights, statistics, and CTAs.
- **Survey → Recommendation flow** handled by V0.dev components plus a fully functional recommendation algorithm.
- **Language explorer** with filtering, favourites, and enhanced language detail pages.
- **Culture hub** serving localized long-form articles with table-of-contents navigation and contextual CTAs.
- **Bilingual data model** (`BilingualText`/`BilingualArray`) supported by localisation helpers (`src/lib/utils/i18n-data.ts`).

---

## Directory & File Reference

### Root
- `package.json` — scripts (`dev`, `build`, `start`, `lint`) and dependency manifest.
- `tsconfig.json` — base TypeScript configuration for Next.js 15 + React 19.
- `next.config.js` — active Next.js config (standalone output, image domains, relaxed build checks).
- `next.config.ts` — placeholder TypeScript config (currently unused).
- `tailwind.config.js` — Tailwind CSS v4 setup, content globs, brand color tokens.
- `postcss.config.mjs` — Tailwind CSS plugin wiring.
- `eslint.config.mjs` — Flat config enabling Next.js lint rules.
- `Dockerfile` — production image instructions (Node, dependencies, build).
- `railway.json` / `railway.toml` — deployment metadata for Railway.
- `translate-recommendation.sh`, `merge-languages.sh` — helper scripts for data translation/merging.
- `convert_remaining_articles.py` — template script for bringing remaining culture articles into bilingual format.
- `CLAUDE.md` — internal collaboration and documentation standards.

### `src/app/` (Next.js App Router)
- `layout.tsx` — root HTML shell, Inter font, header/footer injection, global background.
- `globals.css` — Tailwind theme tokens, gradient helpers, animation utilities, V0 compatibility classes.
- `page.tsx` — landing page marketing layout, featured languages, culture regions, stats, CTA.
- `coming-soon/page.tsx` — shared “coming soon” placeholder with CTA buttons.
- `languages/page.tsx` — searchable/filterable language catalog with favourites support.
- `languages/[id]/page.tsx` — language detail view: metrics, tabs (overview, culture, learning, resources), CTA integration.
- `culture/page.tsx` — article listing with region/theme/language filters.
- `culture/[slug]/page.tsx` — markdown renderer with synchronized table of contents, responsive layout, related articles.
- `survey/page.tsx` — mounts the survey V0 component and updates `document.title`.
- `survey/layout.tsx` — metadata for the survey route.
- `recommendation/page.tsx` — mounts the recommendation V0 component and updates `document.title`.
- `recommendation/layout.tsx` — metadata wrapper for recommendation results.

### `src/components/`
- `header.tsx` — sticky header with navigation links, language switcher (Zustand), and theme variants.
- `footer.tsx` — footer navigation groups, social links, and CTA copy.
- `culture-article-card.tsx` — card wrapper for article summaries with locale-aware badges.
- `related-articles.tsx` — pulls localized related articles based on current slug.
- `article-table-of-contents.tsx` — desktop and mobile TOC components (scroll syncing, sticky behaviour).
- `language-learning-cta.tsx` — CTA block linking from cultural content to the relevant language detail.
- `ui/` — canonical Radix-based primitives reused by pages and V0 components:
  - `button.tsx`, `card.tsx`, `badge.tsx`, `input.tsx`, `progress.tsx`, `select.tsx`, `separator.tsx`, `tabs.tsx`.

### `src/hooks/`
- `useTranslation.ts` — returns `{ t, locale, setLocale }` by reading the language store and locale dictionary.

### `src/store/`
- `index.ts` — main app store (user/session data, filters, recommendations), V0 component registry, navigation store.
- `language.ts` — persisted locale store backing the header switcher.

### `src/types/`
- `index.ts` — master type definitions for languages (bilingual), surveys, recommendations, users, navigation.
- `culture.ts` — culture article models, table-of-contents shape, region/theme label maps.
- `i18n.ts` — translation key contract and locale enumeration.

### `src/locales/`
- `en.ts`, `zh.ts` — English and Simplified Chinese dictionaries, matching `TranslationKeys`.
- `index.ts` — dictionary registry and `getTranslations` helper with fallback behaviour.

### `src/lib/`
- `utils.ts` — Tailwind class merging (`cn`), number/date formatting, debounce, error handling, search helpers.
- `utils/i18n-data.ts` — localises bilingual language and article datasets into single-locale objects.
- `utils/survey-converter.ts` — normalises stored survey answers to the structure expected by the recommendation engine.
- `data/languages.ts` — bilingual language dataset + helper getters (`getLanguageById`, `getAllLanguages`).
- `data/culture-articles.ts` — bilingual culture article metadata and markdown content.
- `recommendation/recommendation-algorithm.ts` — full recommendation engine (scoring weights, cultural/difficulty matching, learning path generation).
- `types/language.ts`, `types/survey.ts` — legacy type definitions leveraged by the recommendation engine.
- `v0-integration.tsx` — (not currently imported) helper scaffold for integrating V0 components.

### `src/data/`
- `enhanced-languages-new.ts` — extended language metadata (learning guides, cultural info, resources) used to enrich detail pages.
- `enhanced-languages.ts.backup` — older dataset snapshot retained for reference.

### `v0-components/`
- `LanguageSurveyPage.tsx` — multi-step survey UI, question bank, state management, localStorage persistence.
- `LanguageRecommendationPage.tsx` — loads survey data, invokes the recommendation engine, renders rich comparison panels.
- `*.backup` files — prior iterations preserved for rollback.
- `README.md` — guidance on working with V0 components.

### `docs/`
- Active guides (`overview.md`, `architecture.md`, `internationalization.md`, `user-experience.md`) replace the older scattered documentation.
- `archive/completed-tasks/` — historical implementation logs.
- `archive/legacy/` — previous deep-dive docs on data structures, i18n rollout, algorithm scoring.

### Other Assets
- `public/` — shared SVG assets (logos, icons) used across marketing sections.
- `node_modules/` — dependency tree (excluded from version control but present locally).

---

## Key Workflows
1. **Survey Completion**
   - `v0-components/LanguageSurveyPage` stores structured answers in `localStorage`.
   - `src/lib/utils/survey-converter.ts` converts persisted answers into `SurveyResponses`.
2. **Recommendation Generation**
   - `v0-components/LanguageRecommendationPage` fetches `getAllLanguages()`, merges with enhanced data when available, and calls `getLanguageRecommendations`.
   - Results render with dimension scores, personalised difficulty, and CTA actions.
3. **Localized Rendering**
   - `useTranslation()` supplies UI strings.
   - `getLocalizedLanguages` / `getLocalizedArticles` flatten bilingual datasets per active locale.
   - Global navigation renders在服务器 (`src/components/header-static.tsx`)，头部语言切换通过服务端表单调用 `setLocaleAction` 写入 Cookie，与客户端 Zustand 同步保持一致。

## Known Gaps & Improvement Opportunities
- **Name localisation** — `LocalizedLanguage.name` still reflects the English label. Prefer `nameZh` or an explicit mapping for Chinese views.
- **Enhanced dataset IDs** — `enhanced-languages-new.ts` includes `mandarin`, but the base dataset uses `chinese`. Align IDs so enrichment works.
- **Component duplication** — V0 components and the header/footer reimplement Button/Card/etc. Consolidate on `src/components/ui` primitives.
- **Routing helpers** — Replace `window.location.href` usage in V0 components with Next.js router navigation and remove debug `console.log` statements when productionising.
- **Unused helpers** — Functions like `processMarkdown` in `culture/[slug]/page.tsx` are defined but unused; remove or integrate to avoid confusion.

## Testing & Quality
- Run `npm run lint` locally before committing.
- Recommendation engine output depends on deterministic configuration in `src/lib/recommendation/recommendation-algorithm.ts`; update unit data carefully to preserve score ranges.

## Deployment Notes
- `next.config.js` is already configured for `output: 'standalone'` builds and whitelists `images.unsplash.com` / `placehold.co`.
- Tailwind 4 inline theming lives in `src/app/globals.css`; updates should keep palette variables in sync with design requirements.
- Locale preference persists under `language-storage`; clearing it resets the default locale to English.

For further context, dive into the documentation set within `docs/`, or inspect the archived materials if you need the historical evolution of the data structures, i18n fixes, or recommendation scoring.
    <div>
      <p>用户: {user?.name}</p>
      <p>语言数量: {languages.length}</p>
    </div>
  )
}
```

### V0组件状态

```typescript
import { useV0ComponentData } from '@/lib/v0-integration'

function MyV0Component() {
  const { data, updateData } = useV0ComponentData('MyComponent')

  return (
    <button onClick={() => updateData({ clicked: true })}>
      点击次数: {data?.clicked ? '已点击' : '未点击'}
    </button>
  )
}
```

## 🛣️ 路由系统

### 自动路由

框架自动为每个V0组件生成路由：

- `MyComponent.tsx` → `/my-component`
- `ProgressTracker.tsx` → `/progress-tracker`
- `CommunityFeed.tsx` → `/community-feed`

### 导航集成

```typescript
// src/components/navigation.tsx
const navigation = [
  {
    title: '我的组件',
    href: '/my-component',
    icon: 'Star',
    description: 'V0设计的组件'
  }
]
```

## 🔌 数据集成

### API 接口

```typescript
// 示例：获取语言数据
async function fetchLanguages() {
  try {
    const response = await fetch('/api/languages')
    const languages = await response.json()
    return languages
  } catch (error) {
    console.error('获取语言数据失败:', error)
    return []
  }
}
```

### 组件数据绑定

```typescript
import { useStore } from '@/store'

function LanguageList() {
  const { languages, setLanguages } = useStore()

  useEffect(() => {
    fetchLanguages().then(setLanguages)
  }, [setLanguages])

  return (
    <div>
      {languages.map(lang => (
        <div key={lang.id}>{lang.name}</div>
      ))}
    </div>
  )
}
```

## 📱 响应式设计

### 移动端优化

```typescript
function ResponsiveComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="p-4 bg-white rounded-lg shadow">
        卡片内容
      </div>
    </div>
  )
}
```

### 导航适配

- 桌面端：固定侧边栏
- 移动端：可收缩的抽屉式导航
- 自动适配不同屏幕尺寸

## 🚀 部署

### 开发环境

```bash
npm run dev        # 启动开发服务器
npm run build      # 构建生产版本
npm run start      # 启动生产服务器
npm run lint       # 代码检查
```

### 生产部署

推荐部署平台：
- **Vercel** (推荐)
- Netlify
- AWS Amplify
- Railway

```bash
# Vercel 部署
npx vercel --prod
```

## 📚 技术栈

- **前端框架**: Next.js 15
- **UI框架**: React 19
- **样式**: Tailwind CSS 4
- **状态管理**: Zustand
- **类型安全**: TypeScript
- **图标**: Lucide React
- **开发工具**: ESLint

## 🔄 工作流程

### 您的工作
1. 在 v0.dev 中设计组件
2. 复制组件代码到 `/v0-components`
3. 告知我组件名称和功能

### 我的工作
1. 创建页面路由
2. 更新导航菜单
3. 集成数据接口
4. 优化样式布局
5. 处理状态管理

## 💡 最佳实践

### 组件设计
- 使用语义化的HTML结构
- 遵循响应式设计原则
- 保持组件的单一职责
- 考虑加载和错误状态

### 性能优化
- 使用 React.memo 包装纯组件
- 利用 useMemo 缓存计算结果
- 实现代码分割和懒加载
- 优化图片和资源加载

### 可访问性
- 使用正确的ARIA标签
- 确保键盘导航支持
- 提供充足的颜色对比度
- 为图片添加替代文本

## 🐛 故障排除

### 常见问题

1. **组件不显示**
   - 检查文件路径和命名
   - 确认组件导出方式
   - 查看浏览器控制台错误

2. **样式不生效**
   - 确认 Tailwind 类名正确
   - 检查 CSS 优先级
   - 验证响应式断点

3. **路由404错误**
   - 检查文件命名规则
   - 确认 Next.js 路由结构
   - 重启开发服务器

### 调试工具

```typescript
// 启用开发者工具
import { V0DevTools } from '@/lib/v0-integration'

{process.env.NODE_ENV === 'development' && <V0DevTools />}
```

## 📞 获取帮助

当您遇到问题时，请提供：

1. **具体错误信息**：控制台错误或截图
2. **组件代码**：相关的代码片段
3. **期望行为**：您希望实现的效果
4. **当前行为**：实际发生的情况

我会快速帮您解决问题并完成集成！

---

**Happy Coding! 🎉**

这个框架让您专注于在 v0.dev 中的创意设计，而我负责处理所有的技术集成工作。
