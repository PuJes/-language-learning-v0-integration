# 文本/HTML 比率优化实施方案

## 目标与背景

- **目标**：将文化探索文章详情页（`/culture/[slug]`）的 text/HTML 比率从当前 ~0.04 提升到 ≥0.3，降低 Semrush 等 SEO 工具的“文本占比低”告警。
- **现状**：文章正文已经在服务端渲染，但首屏 HTML 仍包含大量内联脚本 `self.__next_f.push(...)`。这些脚本主要是为了水合客户端组件，将完整数据结构重复序列化到页面中，导致 HTML 体积远高于纯文本。

## 根因分析

1. **客户端目录组件**  
   `src/components/article-table-of-contents.tsx` 使用 `use client`，为了滚动高亮维护状态和 IntersectionObserver。Next.js 因此需把整个目录数据（含 Markdown 内容）注入客户端脚本。

2. **客户端 CTA / 相关推荐**  
   `LanguageLearningCTA` 与 `RelatedArticles` 组件依赖 `useTranslation` 和 `useMemo`，都在客户端执行，触发大块数据和翻译文本的 hydration。

3. **公共客户端组件的连锁影响**  
   Header 等必须保持客户端交互（语言切换）会带来一定开销，但只要文章页自身减少大型客户端组件，就能显著降低内联脚本体积。

## 优化策略

1. **目录组件改为服务端渲染**
   - 删除 `use client`，输出纯 HTML 目录。
   - 使用 `<a href="#id">` 直接跳转；移动端用 `<details>`/`<summary>` 提供折叠式目录，无需 JS。
   - 如需平滑滚动，可借助全局 CSS `scroll-behavior: smooth`，避免添加额外脚本。

2. **CTA 与相关推荐内联到服务端页面**
   - 在 `src/app/culture/[slug]/page.tsx` 中，根据当前 locale 直接渲染 CTA 与相关推荐内容。
   - 移除对应客户端组件文件，减少序列化的数据。

3. **减少额外客户端渲染点**
   - 清理文化文章页引用的剩余客户端组件，确保主结构、正文、元信息均由服务器输出。

4. **验证与监控**
   - 本地 `curl` + 文本长度测量，确认純文本占比提升。
   - 部署后用 Semrush 重新抓取，验证告警消失或降低。

## 任务拆解

| 序号 | 任务 | 输出/说明 |
| --- | --- | --- |
| 1 | 重构 `article-table-of-contents.tsx` 为纯服务端组件，同时提供移动端 `<details>` 版本 | 无客户端脚本，保留目录功能 |
| 2 | 在文化文章页面中直接渲染 CTA 与相关推荐，删除原客户端组件 | 减少 hydration 数据 |
| 3 | 审查页面，移除多余的 `useTranslation`（改为 `getTranslations`）及无用导入 | 保证编译通过 |
| 4 | 本地测量 text/HTML 比率，记录前后对比 | 目标 ≥0.3 |
| 5 | 若仍存在大量 `self.__next_f.push` 内联脚本，改为在服务端用 `remark/rehype` 预编译 Markdown，输出纯 HTML | 消除正文重复序列化 |
| 6 | 将头部/脚部替换为纯服务端组件，并通过 Server Action 写入语言 Cookie | 去除大体积客户端 hydration |

> 最近一次在开发环境的测量（`curl` + `sed`）显示，文化文章页 text/HTML 比率约 **0.06**。这仍受 Next.js Flight 数据和调试脚本影响；预计在生产构建下脚本会进一步缩减，后续部署后需要再次采样确认。

## 文化文章页“纯静态容器”可行性评估

### Hydration 来源
- **Header / Footer**：迁移前的 `src/components/header.tsx` 与 `src/components/footer.tsx` 均是 `use client` 组件，依赖 Zustand 存储的语言状态，需要在每个页面注入完整的 Next Flight 数据。
- **语言切换逻辑**：语言切换完全倚赖客户端状态（`useLanguageStore` + `useTranslation`），服务器不知道当前语言，也无法生成纯静态文案。
- **全局布局**：`src/app/layout.tsx` 全站共享 Header / Footer，任何子路由都无法绕过这些客户端组件。

### 可选方案
1. **静态 Header/Footer 版本（推荐方向）**  
   - 在服务器读取 `lang` 查询参数或 Cookie 选择翻译，渲染静态导航。  
   - 语言切换按钮改为普通链接（`/?lang=zh`），或提交到一个 server action 写入 Cookie。  
   - 需要拆分现有 Header/Footer：保留原客户端版本供首页等场景使用（已替换为 server 版本），并在静态头部内使用表单调用 `setLocaleAction` 改写 Cookie 以同步语言。  
   - 需要在 `layout.tsx` 中允许按路由选择不同 Header 组件（例如下沉至 `app/(marketing)/layout.tsx`、`app/(content)/layout.tsx`）。

2. **路由级独立布局**  
   - 在 `app/culture/[slug]/layout.tsx` 中重写整体结构，不渲染站点 Header/Footer，而是提供简化的面包屑导航。  
   - 代价是与其他页面的导航体验不一致，需要重新设计跨页跳转。

3. **局部交互拆分**  
   - 将 Header/Footer 保留在客户端，但提炼文章页所需的导航为一个纯服务端的“局部壳”，其他内容延迟加载。  
   - 对 text/HTML 比率帮助有限，因为大的 Flight payload 仍然存在。

### 结论
- 若要真正实现“纯静态容器”，必须至少落地方案 1 或 2，减轻 Header/Footer 带来的 hydration。  
- 从体验一致性与维护成本来看，**方案 1 更具可行性**：允许文章页保留全站导航，同时将语言切换改为基于 URL/Cookie 的服务器逻辑。  
- 后续如继续推进，应先：  
  1. 定义新的服务器端翻译获取接口（例如读取 Cookie）并同步更新 `useTranslation`；  
  2. 拆分 Header/Footer 为 server/client 两套实现；  
  3. 调整 `layout.tsx` 在文化文章页使用静态版本。

完成上述任务后，可按优先顺序持续优化其它页面，但本方案聚焦文化文章这一告警最集中的场景。
