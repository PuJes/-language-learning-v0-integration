# Railway 部署问题解决方案

**日期:** 2025-10-12

## 问题描述

在 Railway 部署时遇到错误：
```
ERROR: failed to build: failed to solve: failed to read dockerfile: too many links
```

## 问题原因

主要问题出在 `.dockerignore` 文件配置错误：

1. **致命错误**: `.dockerignore` 文件第一行写了 `Dockerfile`，导致 Docker 无法读取 Dockerfile 本身
2. `node_modules` 目录包含大量符号链接，也会导致问题

## 解决方案

### 1. 修复 `.dockerignore` 文件

已将文件更新为：
```
# .dockerignore
node_modules
npm-debug.log
README.md
.next
.git
.gitignore
.env*.local
.vscode
.claude
.DS_Store
*.md
!package*.json
```

**关键变更：**
- ✅ 删除了 `Dockerfile` 这一行（不能忽略 Dockerfile 本身！）
- ✅ 保留 `node_modules`（Docker 会重新安装依赖）
- ✅ 添加常见需要忽略的文件

### 2. 更新 `railway.json` 配置

将构建器改为使用 Docker：
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "Dockerfile"
  },
  "deploy": {
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### 3. 确认 `next.config.js` 配置

Next.js 配置文件已包含 standalone 输出模式（Docker 部署必需）：
```javascript
const nextConfig = {
  output: 'standalone',  // ← 必须有这个配置
  images: {
    domains: ['images.unsplash.com', 'placehold.co'],
  },
}
```

## 部署步骤

### 方法一：通过 Railway Dashboard（推荐）

1. **提交更改到 Git**
   ```bash
   git add .
   git commit -m "修复 Docker 配置用于 Railway 部署"
   git push origin main
   ```

2. **在 Railway 部署**
   - 访问 [railway.app](https://railway.app)
   - 点击 "New Project" → "Deploy from GitHub repo"
   - 选择你的仓库
   - Railway 会自动检测 Dockerfile
   - 点击 "Deploy"

3. **等待构建完成**
   - 查看构建日志
   - 部署成功后会获得一个 URL（如：`https://your-app.railway.app`）

### 方法二：使用 Railway CLI

```bash
# 1. 安装 Railway CLI
npm install -g @railway/cli

# 2. 登录
railway login

# 3. 链接项目
railway link

# 4. 部署
railway up
```

## 验证部署

部署完成后：
1. ✅ 检查 Railway Dashboard 中的构建日志
2. ✅ 访问 Railway 提供的 URL
3. ✅ 确认应用正常运行

## 文件变更总结

| 文件 | 变更 | 原因 |
|------|------|------|
| `.dockerignore` | 删除 `Dockerfile` 行 | 不能忽略 Dockerfile 本身 |
| `railway.json` | 改用 `DOCKERFILE` builder | 明确使用 Docker 构建 |
| `next.config.js` | 已有 `output: 'standalone'` | Docker 部署必需配置 |
| `Dockerfile` | 优化配置 | 多阶段构建，生产优化 |

## 常见问题

**Q: 为什么不能在 .dockerignore 中写 Dockerfile？**
A: Docker 需要读取 Dockerfile 来构建镜像，如果在 .dockerignore 中忽略它，Docker 就找不到构建指令了。

**Q: node_modules 为什么要忽略？**
A: Docker 会在容器内重新安装依赖，本地的 node_modules 不需要也不应该复制到容器中。

**Q: 部署成功但应用无法访问怎么办？**
A: 检查：
1. Railway 日志中是否有错误
2. `next.config.js` 是否有 `output: 'standalone'`
3. 端口是否正确（应该是 3000）

## 下一步

部署成功后可以：
1. 配置自定义域名
2. 设置环境变量（如 API keys）
3. 配置监控和告警
4. 考虑添加 CDN 加速静态资源

## 相关文档

完整英文部署指南请查看：`docs/railway-deployment-guide.md`
