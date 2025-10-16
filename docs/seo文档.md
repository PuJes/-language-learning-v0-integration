基础元信息

已完成 | 全局标题/描述：Next Metadata 定义了标题模板、描述、关键词与站点图标（src/app/layout.tsx:8）。
部分完成 | 页面级标题/描述：主要页面提供 metadata，但详情页仅含基础字段且缺少增强信息，调查/推荐页依赖客户端 document.title（src/app/survey/page.tsx:1，src/app/recommendation/page.tsx:1）。
部分完成 | Canonical：仅学习方法详情声明了 canonical，其余路由缺少规范化链接（src/app/learning-methods/[slug]/page.tsx:33）。
未完成 | Open Graph/Twitter：除学习方法详情外暂无 OG/Twitter 元数据，社交分享无法生成摘要卡片（src/app/learning-methods/[slug]/page.tsx:55）。
部分完成 | Sitemap：存在静态 sitemap.xml，但 lastmod 使用未来日期且需要自动更新流程（public/sitemap.xml:5）。
已完成 | Robots：动态 robots.txt 放行全站并声明 sitemap（src/app/robots.ts:5）。
未完成 | PWA Manifest：public/ 下缺少 manifest.json，Chrome “添加到桌面” 无法识别（public）。
未完成 | HTML lang/hreflang：<html> 固定为 en 且未输出 alternates.languages，与实际中英切换不符（src/app/layout.tsx:40）。
未完成 | 结构化数据：未检测到 JSON-LD/Schema.org，用于语言与文化文章的增强缺失（仓库未见相关实现）。
已完成 | Analytics：全局 head 已异步加载 GA4 脚本（src/app/layout.tsx:42）。
内容与结构

部分完成 | H1 层级：核心页面具备唯一 H1，但推荐页加载成功后仍缺主标题，影响可读性（v0-components/LanguageRecommendationPage.tsx:648）。
已完成 | 内部链接：头部与底部提供清晰导航与 CTA（src/components/header-static.tsx，src/components/footer-static.tsx）。
未完成 | 面包屑：语言/文化/资源详情页未提供面包屑或上级链接，降低爬虫理解与用户返回路径体验（src/app/languages/[id]/page.tsx:16 等）。
部分完成 | 图片替代文本：卡片/Logo 已设置 alt，但首页首屏背景图为纯空字符串，建议考虑 aria-hidden 或描述性文案（src/app/home-page-client.tsx:964）。
部分完成 | 多语言一致性：页面文案可切换，但服务器端初始数据固定使用中文，导致首屏/metadata 与实际所见语言不一致（src/app/learning-methods/[slug]/page.tsx:8）。
技术与索引

部分完成 | 内容可索引性：推荐页依赖 localStorage 才渲染主体内容，爬虫将看到“Survey data not found”提示，应提供 SSR 兜底或 noindex（v0-components/LanguageRecommendationPage.tsx:591）。
未完成 | 自定义 404/500：仓库缺少 src/app/not-found.tsx 和 error.tsx，无品牌化错误页（src/app）。
部分完成 | 性能优化：全站使用 next/image，但首屏远程大图 + 多彩渐变会拉低 LCP，可改为本地图/CDN与更低分辨率（src/app/home-page-client.tsx:964）。
未完成 | 资源压缩与预加载：未见关键 CSS/字体的 preload 或 next/font 使用，首屏字体回退概率高（src/app/globals.css）。
部分完成 | 表单可访问性：调查问卷采用自定义控件，缺少语义 label/ARIA，将影响屏幕阅读器（v0-components/LanguageSurveyPage.tsx:108）。
需人工处理

需人工 | 关键词研究与映射：根据目标市场重新梳理关键词，并将结果映射到标题、H1 与正文语义块。
需人工 | Search Console & Bing Webmaster 验证：在 <head> 添加验证 meta，并提交 sitemap。
需人工 | 内容审校：补充英语版 metadata、文化/语言文章的长描述，并避免中英文混排。
需人工 | 数据更新流程：建立脚本定期生成最新 sitemap lastmod，同步更新 GA/业务数据。
后续建议

统一改造 generateMetadata：为所有页面输出 canonical、OG/Twitter、hreflang，并移除客户端 document.title 逻辑。
为推荐/调查等纯客户端页面提供 SSR 兜底内容或设置 noindex，同时补充 H1 与结构化数据（Language、Article schema）。
新增 manifest、404/500 页面，并优化首屏媒体资源与字体策略以改善 LCP 与 CLS。
