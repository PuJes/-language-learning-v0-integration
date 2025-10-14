# Learning Resources & Tools 页面规划 (草案)

> **文档版本**: v0.1  
> **最后更新**: 2025-10-14  
> **状态**: 待评审

## 一、页面定位与目标

- **定位**: 为学习者提供高质量的语言学习资源与工具大全,支持多维筛选与直达外部资源。
- **核心目标**:
  - 快速找到符合自身需求的资源与工具(按语言、技能、价格等维度)。
  - 了解工具/资源的关键信息、适用人群、优势与局限。
  - 支持中英文界面,并可直接跳转至官方站点或下载页面。

## 二、信息架构

- **入口**: 顶部导航增加 `Resources` 菜单项,首页新增资源推荐预览。
- **页面结构**:
  1. Hero 区: 页面简介 + 资源统计。
  2. 筛选与排序工具条。
  3. 资源卡片网格 / 列表。
  4. 特辑推荐(精选合集、限时活动)。
  5. 常见问题(FAQ)或选购指南。

## 三、数据模型建议 (`src/types/learning-resources.ts`)

```typescript
export type ResourceCategory =
  | 'app'
  | 'course'
  | 'podcast'
  | 'youtube'
  | 'book'
  | 'community'
  | 'extension'

export type SkillFocus =
  | 'listening'
  | 'speaking'
  | 'reading'
  | 'writing'
  | 'vocabulary'
  | 'grammar'
  | 'culture'
  | 'test-prep'

export interface LearningResource {
  id: string
  slug: string
  name: BilingualText
  summary: BilingualText
  category: ResourceCategory
  skillFocus: SkillFocus[]
  languages: string[]        // 使用语言 or 目标语言
  proficiency: LearningLevel // 复用 existing type
  platforms: ('web' | 'ios' | 'android' | 'desktop')[]
  price: 'free' | 'freemium' | 'paid' | 'subscription'
  tags: string[]
  websiteUrl: string
  downloadLinks?: Partial<Record<'ios' | 'android' | 'desktop', string>>
  ratings?: {
    average: number          // 1-5
    basedOn?: number         // 人数
    sources?: string[]       // 第三方评测
  }
  userFeedback?: {
    averageUserRating?: number      // 用户实时评分(1-5)
    totalUserRatings?: number
    reviews?: Array<{
      id: string
      userName: string
      locale: Locale
      rating: number
      title?: string
      content: string
      createdAt: string
      updatedAt?: string
    }>
  }
  description: BilingualText // Markdown
  highlights: BilingualArray // 3-5条亮点
  idealFor: BilingualArray   // 适合人群
  limitations?: BilingualArray
  tutorials?: Array<{
    title: BilingualText
    url: string
    type: 'article' | 'video' | 'webinar'
  }>
  updatedAt: string
  featured?: boolean
}
```

### 标签常量
- `RESOURCE_CATEGORY_LABELS`: 参照方法模块写法,含 icon。
- `SKILL_FOCUS_LABELS`: skill → 中英文。
- `PRICE_LABELS`: free / freemium / paid / subscription。
- 语言列表复用 `src/lib/data/languages` 内 `slug`。

## 四、内容来源与维护

- **初始数据**: 选取 20-24 个高质量资源,覆盖常见语言(英语/日语/韩语/法语/中文)与技能方向。
- **数据源**:
  - 内部已有推荐清单。
  - 市场调研文章(需人工整理,避免版权问题)。
  - 官方站点信息 + 截图。
- **维护策略**:
  - `updatedAt` 字段用于 SEO 与可信度展示。
  - 后续可接入外部 API(App Store/Play Store) 做增量更新(不在本次范围内)。

## 五、页面交互设计

1. **筛选面板**:
   - 类别单选(Select)。
   - 技能方向多选(Checkbox Group)。
   - 适用语言多选(Combobox, 支持搜索)。
   - 学习阶段(Beginner / Intermediate / Advanced / All)。
   - 价格类型(Segmented Control)。
2. **排序选项**:
   - 最新更新。
   - 评分最高。
   - 最多教程资源。
3. **标签过滤条**: 显示已选过滤条件,支持一键移除。
4. **资源卡片**: 展示平台、价格、评分、亮点摘要、行动按钮("访问官网"/"下载")。
   - 支持显示用户平均评分与评论数量。
5. **特辑推荐**: 按标签聚合(如 "TOP 5 Free Apps", "Exam Prep Essentials")。
6. **FAQ/指南**: 采用 Accordion, 解答常见选择问题。
7. **用户反馈区域**:
   - 展示最新评论与评分分布。
   - 支持登录用户提交评分与评论(首期可使用模拟提交或占位流程)。

## 六、组件规划

- 复用:
  - `Select`, `Checkbox`, `Badge`, `Tabs`, `Card`, `Accordion`。
  - `useTranslation`, `getLocalizedArray`。
- 新增:
  - `ResourceCard` (`src/components/resource-card.tsx`)。
  - `ResourceFilters` (`src/components/resource-filters.tsx`) → 负责筛选状态,与 URL 同步(可选)。
  - `PriceBadge` (可内联,也可扩展 `Badge`)。
  - `FeatureHighlight` (复用 `Card` + 图标)。
- 图标库继续使用 `lucide-react`。

## 七、状态管理与数据获取

- 首期可直接引入静态数据(`src/lib/data/learning-resources.ts`)。
- 页面分层:
  - Server Component (`page.tsx`) 读取数据 + 基础 SEO。
  - Client Component 承担筛选逻辑及交互。
- 数据确定后可考虑使用 `URLSearchParams` 保留筛选状态。

## 八、实现步骤 (建议拆解)

### Phase 1: 基础设施 (1.5-2h)
1. [x] 创建 `src/types/learning-resources.ts`。
2. [x] 更新 `src/types/index.ts` 导出。
3. [x] 新建 `src/lib/data/learning-resources.ts` 初始数据(20+条)。

### Phase 2: 国际化与工具 (1.5h)
4. [x] 更新 `src/locales/zh.ts` / `en.ts` → 文案、标签、FAQ 字段。
5. [x] 扩展 `src/lib/utils/i18n-data.ts` → `getLocalizedResources`, `filterResources`。

### Phase 3: UI 组件 (3h)
6. [x] 实现 `ResourceCard`。
7. [x] 实现 `ResourceFilters`。
8. [x] 新增 `ResourceReviews` 组件,展示评分与评论列表。
9. [x] 可选: `ResourceHighlights` / `FeaturedSection`。

### Phase 4: 页面开发 (4h)
10. [x] 创建 `src/app/resources/page.tsx`。
11. [x] 构建筛选交互 + 排序。
12. [x] 添加特辑、FAQ 与用户反馈区块。
13. [x] 接入 SEO metadata。

### Phase 5: 集成与验收 (2h)
14. [x] 更新导航(`src/components/header.tsx`)与首页宣传位(`src/app/page.tsx` 可选)。
15. [ ] 手动双语检查 + 响应式验证,重点确认用户反馈区的本地化。
16. [ ] 跑 `npm run lint`。

## 九、验收标准

- **功能**:
  - [ ] 各筛选项可组合使用,结果实时更新。
  - [ ] 排序切换正确生效。
  - [ ] 资源卡片信息完整,行动按钮跳转目标链接(新标签)。
  - [ ] Featured / FAQ / 用户反馈 内容仅在数据存在时渲染。
  - [ ] 用户可提交评分与评论,并在刷新后看到最新反馈(首期可基于本地存储/模拟 API)。
  - [ ] 评论列表展示评分、昵称、时间与内容,支持分页或“加载更多”。
- **国际化**:
  - [ ] 所有 UI 文案、数据字段具有中英文版本。
  - [ ] 语言 / 技能标签自动使用翻译常量。
  - [ ] 评论表单与提示信息提供中英文文案。
- **响应式**:
  - [ ] 移动端筛选采用 Drawer / Accordion, 保持可用性。
  - [ ] 桌面端筛选固定在顶部或侧栏,布局 3 列。
  - [ ] 用户反馈区在移动端以折叠或分页方式呈现,避免过长滚动。
- **性能**:
  - [ ] 首屏渲染 < 2 秒(静态数据)。
  - [ ] 滚动加载或分页策略(如资源 > 24, 可后续扩展)。

## 十、开放问题

1. 是否需要记录用户收藏/评分?(若需要,需加入后端/API)。
2. 用户评分/评论是否需要后台审核或防刷机制?
3. 特辑内容是否由 CMS 下发还是手动维护?
4. 是否需要导出 PDF / CSV 功能?(例如课堂整合需求)。
5. 首页预览区块是否展示最新更新或精选?

> **下一步**: 评审数据字段与筛选维度,确认首批资源清单后,可按 Phase 推进开发; 同时明确用户反馈的存储方案与权限策略。
