# Railway 部署故障排除

## 问题：Dockerfile does not exist

错误信息：`Dockerfile language-learning-v0-integration/Dockerfile does not exist`

## 问题原因

Railway 在寻找 `language-learning-v0-integration/Dockerfile`，但实际上 Dockerfile 应该在项目根目录。这说明 Railway 的**根目录配置错误**。

## 解决方案

### 方案 1：在 Railway Dashboard 中修复根目录（推荐）

1. **登录 Railway Dashboard**
   - 访问 https://railway.app
   - 找到你的项目

2. **检查并修复根目录设置**
   - 点击项目
   - 进入 "Settings" 标签
   - 找到 "Root Directory" 或 "Service Root" 设置
   - **确保它是空的或设置为 `/`**（不要设置为 `language-learning-v0-integration`）
   - 如果设置了错误的路径，删除它或改为 `/`

3. **触发重新部署**
   - 在 "Deployments" 标签
   - 点击 "Redeploy" 或 "New Deployment"

### 方案 2：删除并重新创建 Railway 项目

如果方案 1 不起作用：

1. **删除当前 Railway 项目**
   - 在 Railway Dashboard 中
   - Settings → Danger Zone → Delete Service

2. **重新创建项目**
   - 点击 "New Project"
   - 选择 "Deploy from GitHub repo"
   - 选择仓库：`PuJes/-language-learning-v0-integration`
   - **重要：不要在任何地方设置 Root Directory**
   - Railway 会自动检测到根目录的 Dockerfile

### 方案 3：使用 Railway CLI 部署

```bash
# 1. 安装 Railway CLI
npm install -g @railway/cli

# 2. 登录
railway login

# 3. 初始化项目（在项目根目录）
cd /Users/jesspu/codes/EL_2/language-learning-v0-integration
railway init

# 4. 部署
railway up
```

### 方案 4：使用 Nixpacks 代替 Docker（备选）

如果 Docker 持续有问题，可以尝试 Nixpacks：

1. **删除或重命名 Dockerfile**
   ```bash
   mv Dockerfile Dockerfile.backup
   ```

2. **修改 railway.json**
   ```json
   {
     "build": {
       "builder": "NIXPACKS"
     }
   }
   ```

3. **推送更改**
   ```bash
   git add .
   git commit -m "尝试使用 Nixpacks 构建"
   git push
   ```

## 验证步骤

### 检查本地配置是否正确

```bash
# 1. 确认当前在项目根目录
pwd
# 应该显示：/Users/jesspu/codes/EL_2/language-learning-v0-integration

# 2. 确认 Dockerfile 存在于根目录
ls -la Dockerfile
# 应该显示文件存在

# 3. 确认 git 中包含 Dockerfile
git ls-files | grep Dockerfile
# 应该显示：Dockerfile

# 4. 确认最新提交已推送
git status
# 应该显示：Your branch is up to date with 'origin/main'
```

### 在 Railway Dashboard 中检查

1. **Project Settings**
   - Root Directory: 应该是空的或 `/`
   - Build Command: 可以留空（使用 Dockerfile）
   - Start Command: 可以留空（Dockerfile 中已定义）

2. **Build Logs**
   - 查看具体的错误信息
   - 确认 Railway 从哪个目录开始构建

## 当前文件状态

### ✅ 已确认正确的文件

```bash
# Dockerfile 位于根目录
./Dockerfile

# railway.json 配置
{
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "./Dockerfile"
  }
}

# next.config.js 包含 standalone
output: 'standalone'
```

## 推荐的立即操作

**最可能的解决方案：**

1. 登录 Railway Dashboard
2. 进入你的项目 Settings
3. 找到 "Root Directory" 设置
4. 如果它设置为 `language-learning-v0-integration`，**删除这个设置**
5. 保存并触发重新部署

这应该能立即解决问题，因为错误信息明确显示 Railway 在错误的子目录中查找 Dockerfile。

## 需要帮助？

如果以上方案都不起作用，请提供：
1. Railway Dashboard 中的完整构建日志
2. Railway 项目的 Settings 页面截图
3. 具体的错误信息

---

**下一步：请在 Railway Dashboard 中检查 Root Directory 设置！**
