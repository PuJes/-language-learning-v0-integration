# 架构与代码地图

本文按目录梳理代码结构，便于快速了解项目组成。

## 应用外壳与路由
- `src/app/layout.tsx`：全局 HTML 模板，负责字体加载、头部/脚部挂载与背景样式。
- `src/app/globals.css`：Tailwind v4 主题变量、渐变与动画工具类。
- `src/app/page.tsx`：首页内容，包括营销模块、热门语言卡片、文化区域与统计数据。
- `src/app/coming-soon/page.tsx`：尚未上线功能的通用占位页。

### 功能路由
- `src/app/languages/page.tsx`：带搜索与筛选的语言列表。
- `src/app/languages/[id]/page.tsx`：语言详情页，展示增强后的文化与学习信息。
- `src/app/culture/page.tsx`：文化文章列表，支持按地区/主题/语言过滤。
- `src/app/culture/[slug]/page.tsx`：文化文章正文页，含目录联动与相关推荐。
- `src/app/survey/page.tsx`、`src/app/recommendation/page.tsx`：加载 V0 组件并设置页面标题。
- `src/app/survey/layout.tsx`、`src/app/recommendation/layout.tsx`：为测评与推荐页面提供单独的 metadata。

## 组件层
- `src/components/header-static.tsx` / `footer-static.tsx`：服务器渲染的全局导航与脚部链接，内建表单调用 `setLocaleAction` 完成语言切换；`LocaleHydrator` 仅用于在客户端同步 Zustand 状态。
- `src/components/culture-article-card.tsx`、`related-articles.tsx`、`article-table-of-contents.tsx`、`language-learning-cta.tsx`：文化与语言详情场景的专用组件。
- `src/components/ui/*`：基于 Radix + Tailwind 的通用组件（Button / Card / Input / Select / Tabs 等），推荐统一复用。

## 数据与类型
- `src/lib/data/languages.ts`：双语语言数据源及获取函数。
- `src/data/enhanced-languages-new.ts`：语言扩展信息（学习路径、文化素材），用于详情页增强展示。
- `src/lib/data/culture-articles.ts`：文化文章数据，含 Markdown 正文与双语元信息。
- `src/types/index.ts`、`src/types/culture.ts`、`src/types/i18n.ts`：语言、问卷、文化文章、翻译键等核心类型。
- `src/locales/*.ts`：UI 文案字典。
- `src/lib/utils/i18n-data.ts`：将双语数据转换为当前语言的单语对象。

## 状态与钩子
- `src/store/language.ts`：语言偏好 Store，使用 Zustand 持久化。
- `src/store/index.ts`：应用级 Store，管理用户、问卷、推荐结果、V0 组件注册表与导航状态。
- `src/hooks/useTranslation.ts`：暴露 `{ t, locale, setLocale }` 的翻译钩子。

## 工具方法
- `src/lib/utils.ts`：`cn` 合并工具、数值/日期格式化、防抖等通用函数。
- `src/lib/utils/survey-converter.ts`：将问卷数据转换为推荐引擎所需结构。

## 推荐流程
- `src/lib/recommendation/recommendation-algorithm.ts`：核心推荐算法，提供 `LanguageRecommendationEngine` 与 `getLanguageRecommendations`。
- `v0-components/LanguageSurveyPage.tsx`：问卷流程组件，结果存储在 `localStorage`。
- `v0-components/LanguageRecommendationPage.tsx`：读取问卷数据、调用推荐引擎并展示结果。

## 辅助脚本与配置
- `scripts/`：构建增强语言数据的脚本集合。
- `convert_remaining_articles.py`、`merge-languages.sh` 等：内容转换、数据合并工具。
- 根目录配置（`eslint.config.mjs`、`tailwind.config.js`、`next.config.ts` 等）：Lint、Tailwind 与 Next.js 的统一设置。

更多背景请参阅 [项目概览](overview.md)，国际化细节见 [国际化指南](internationalization.md)，产品体验请参考 [用户体验与内容策略](user-experience.md)。
