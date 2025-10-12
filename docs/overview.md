# 项目概览

Language World 是一个基于 Next.js 15 的双语语言学习平台，用于将 V0.dev 设计快速落地。项目内置营销主页、文化内容中心、测评问卷与 AI 推荐、以及一套复用的 UI 组件，保证与 V0.dev 设计稿的一致性。

## 技术栈
- Next.js App Router（React 19 + TypeScript）
- Tailwind CSS v4 内联主题与工具类
- Zustand 轻量状态管理（导航、语言偏好、持久化数据）
- Lucide 图标与 Radix UI 组件，保证可访问性
- Remark / React Markdown 负责渲染富文本文化文章

## 本地开发
```bash
npm install
npm run dev
# 浏览 http://localhost:3000
```

```bash
npm run lint   # 执行 ESLint（Next.js 配置）
npm run build  # 生产环境构建
npm start      # 启动构建产物
```

## 核心用户路径
1. 访问 `/`：展示平台能力、热门语言卡片、文化亮点与 CTA。
2. 进入 `/survey`：多步骤问卷（V0 组件）收集学习需求，并将答案写入浏览器存储。
3. 前往 `/recommendation`：读取问卷数据，运行推荐引擎（`src/lib/recommendation`），输出个性化方案。
4. 浏览 `/languages` 与 `/languages/[id]`：检索语言数据，查看增强后的文化、学习信息。
5. 深入 `/culture` 与 `/culture/[slug]`：阅读富文本文化文章，配合目录导航与学习 CTA。

## 亮点功能
- **双语数据模型**：`BilingualText` / `BilingualArray` 确保语言与文章字段均有中英文。
- **本地化渲染工具**：`src/lib/utils/i18n-data.ts` 根据当前语言返回单语对象。
- **推荐流程**：问卷答案 → `convertSurveyDataToResponses` → `LanguageRecommendationEngine`，形成个性化推荐。
- **全局框架**：`src/app/layout.tsx` 整合固定头部、脚部与字体/主题配置。
- **组件库**：`src/components/ui` 提供 Button、Card、Select、Tabs 等基础组件，V0 组件与自研页面共用。

## 延伸阅读
- [架构与代码地图](architecture.md)：了解目录结构、数据流与推荐管线。
- [国际化指南](internationalization.md)：掌握翻译、数据本地化与语言切换机制。
- [用户体验与内容策略](user-experience.md)：梳理问卷、推荐体验与文化内容规划。

历史版本与深度技术方案保存在 `docs/archive/legacy/`，需要追溯背景时可查阅。
