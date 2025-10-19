# 问卷数据存储与部署指南

本方案将问卷数据优先写入 PostgreSQL，未配置数据库时退回到本地 JSON 文件。以下步骤帮助你在本地测试并在 Railway 上部署。

## 1. 关键改动速览
- `src/lib/survey-storage.ts`：增加 PostgreSQL 连接与自动建表逻辑，使用 `SURVEY_DATABASE_URL` / `DATABASE_URL` 等环境变量。
- `src/app/api/survey/route.ts` 和 `/survey-backdata` 页面：运行在 Node.js Runtime，复用统一存储层。
- `data/survey-submissions.json`：作为无数据库时的本地备份。

## 2. 本地测试流程
1. **准备环境变量**
   ```bash
   # 如需验证数据库模式，可先启动本地 PostgreSQL，并导出连接串
   export SURVEY_DATABASE_URL="postgresql://user:password@localhost:5432/survey"
   ```
   未设置数据库变量时，代码会自动写入 `data/survey-submissions.json`。

2. **启动开发服务器**
   ```bash
   npm install
   npm run dev
   ```

3. **填写问卷并提交**
   - 浏览 `http://localhost:3000/survey`，完成问卷。
   - 完成页点击「View Recommendations」，会先向 `/api/survey` 发送 `POST`。

4. **验证数据是否写入**
   - 数据库模式：连接 PostgreSQL 执行 `SELECT * FROM survey_submissions ORDER BY created_at DESC LIMIT 5;`。
   - 文件模式：查看 `data/survey-submissions.json`。

5. **查看可视化回显**
   - 打开 `http://localhost:3000/survey-backdata`，确认列表展示与「View raw answers」内容正确。

6. **Lint（当前存在已知告警）**
   ```bash
  npm run lint
  # 脚本目录仍使用 require 与 any，需后续单独处理；与本改动无关。
  ```

## 3. Railway 部署步骤
1. **创建服务**
   - 在 Railway 新建 PostgreSQL 插件，记录它的 `postgresql://...` 连接串。
   - 新建或打开 Next.js Web 服务，挂载当前仓库。

2. **配置环境变量**
   - 在 Web 服务的变量面板新增 `SURVEY_DATABASE_URL`（或使用 Railway 默认的 `DATABASE_URL`），值填 PostgreSQL 连接串。
   - 如需保护 `/survey-backdata`，可额外设置 `SURVEY_DASHBOARD_TOKEN` 等自定义变量并在页面中校验。

3. **部署**
   - Railway 将运行 `npm install` / `npm run build` / `npm start`（请确认 `package.json` 脚本）。
   - 首次请求 `/survey` 或 `/api/survey` 时，会自动执行建表语句：
     ```sql
     CREATE TABLE IF NOT EXISTS survey_submissions (
       id UUID PRIMARY KEY,
       created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
       survey JSONB NOT NULL
     );
     ```

4. **验收**
   - 访问生产环境 `/survey` 填写一次问卷。
   - 在 Railway 数据库控制台或使用 `psql` 检查 `survey_submissions` 是否新增记录。
   - 打开 `/survey-backdata` 查看可视化结果。
   - 检查日志，确认 `/api/survey` 无错误输出。

## 4. 故障排查
- **提交按钮提示「sync failed」**：检查环境变量是否正确、数据库安全组是否放行、Railway 日志中是否有连接失败记录。
- **/survey-backdata 空白**：确保至少提交一份问卷，并确认后端未返回 500；数据库模式下若表为空，会收到同样提示。
- **Lint 失败**：当前仓库已有旧脚本使用 `require` 和 `any`，需后续统一修复；本功能不影响线上稳定性。

完成以上步骤后，即可在 Railway 上持久化问卷数据，并通过 `/survey-backdata` 页面快速查看。欢迎后续为该页面补充访问控制或导出功能。

---

## 5. 推荐反馈存储扩展
- 推荐页新增评分表单，调用 `/api/recommendation-feedback` 保存 1~5 分评分、可选评论、推荐语言快照，以及关联的 `surveySubmissionId`。
- 存储层在数据库模式下会自动创建：
  ```sql
  CREATE TABLE IF NOT EXISTS recommendation_feedback (
    id UUID PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    payload JSONB NOT NULL
  );
  ```
- `/recommendation-feedback` 页面会聚合评分、对应问卷字段和推荐语言列表，方便人工复盘算法效果。
- Railway 部署无需额外配置，再次部署后即可持久化评分数据；若无数据库仍会写入 `data/recommendation-feedback.json`。
