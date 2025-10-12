# Railway Deployment Guide

**Date:** 2025-10-12
**Version:** v1
**Author:** Claude Code

## Overview

This guide provides instructions for deploying the Language Learning Platform to Railway using Docker.

## Issue Resolution

### Problem
The original deployment failed with the error:
```
ERROR: failed to build: failed to solve: failed to read dockerfile: too many links
```

### Root Cause
The `.dockerignore` file was incorrectly configured:
1. It contained `Dockerfile` on line 1, which prevented Docker from reading the Dockerfile itself
2. The `node_modules` directory with symlinks was being copied to the build context

### Solution
Fixed the `.dockerignore` file by:
1. Removing `Dockerfile` from the ignore list
2. Keeping `node_modules` ignored (Docker installs fresh dependencies)
3. Adding additional common files to ignore (.DS_Store, etc.)

## Configuration Files

### 1. Dockerfile (Multi-stage Build)

The Dockerfile uses a 3-stage build process:

**Stage 1 - deps:** Installs production dependencies
```dockerfile
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
```

**Stage 2 - builder:** Builds the Next.js application
```dockerfile
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build
```

**Stage 3 - runner:** Production runtime
```dockerfile
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
CMD ["node", "server.js"]
```

### 2. next.config.js

The Next.js configuration **must** include `output: 'standalone'` for Docker deployment:

```javascript
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'placehold.co'],
  },
}
```

### 3. railway.json

Railway configuration for Docker builds:

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

### 4. .dockerignore

Optimized for Next.js builds:

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

## Deployment Steps

### Step 1: Verify Local Configuration

1. Ensure all configuration files are properly set up:
   ```bash
   # Check if files exist
   ls -la Dockerfile railway.json next.config.js .dockerignore
   ```

2. Verify `next.config.js` has `output: 'standalone'`:
   ```bash
   grep "standalone" next.config.js
   ```

### Step 2: Test Build Locally (Optional)

If you have Docker installed locally:

```bash
# Build the Docker image
docker build -t language-learning .

# Test run the container
docker run -p 3000:3000 language-learning
```

Visit [http://localhost:3000](http://localhost:3000) to verify.

### Step 3: Push to Git Repository

```bash
# Add changes
git add .

# Commit
git commit -m "Fix Docker configuration for Railway deployment

- Remove Dockerfile from .dockerignore
- Update railway.json to use DOCKERFILE builder
- Ensure next.config.js has standalone output"

# Push to your repository
git push origin main
```

### Step 4: Deploy on Railway

#### Option A: Using Railway CLI

1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login and link project:
   ```bash
   railway login
   railway link
   ```

3. Deploy:
   ```bash
   railway up
   ```

#### Option B: Using Railway Dashboard

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will automatically detect the Dockerfile
5. Click "Deploy"

### Step 5: Configure Environment Variables (if needed)

In Railway Dashboard:
1. Go to your project
2. Click "Variables" tab
3. Add any required environment variables:
   - `NODE_ENV=production` (already set in Dockerfile)
   - Add any API keys or secrets if needed

### Step 6: Verify Deployment

1. Check build logs in Railway dashboard
2. Once deployed, Railway will provide a URL (e.g., `https://your-app.railway.app`)
3. Visit the URL to verify the application is running

## Troubleshooting

### Build Fails with "too many links"
- Check `.dockerignore` doesn't include `Dockerfile`
- Ensure `node_modules` is in `.dockerignore`

### Build Succeeds but App Doesn't Start
- Verify `next.config.js` has `output: 'standalone'`
- Check Railway logs for runtime errors
- Ensure port 3000 is exposed (already configured)

### Images Not Loading
- Add image domains to `next.config.js`:
  ```javascript
  images: {
    domains: ['your-image-domain.com'],
  }
  ```

### Application Crashes on Startup
- Check Railway logs for error messages
- Verify all dependencies are in `package.json`
- Ensure `npm run build` works locally

## Railway-Specific Features

### Custom Domains
1. Go to Railway project settings
2. Click "Domains" tab
3. Add your custom domain
4. Configure DNS as instructed

### Auto-Deploy on Git Push
Railway automatically deploys when you push to your connected branch:
- Default: `main` branch
- Can be changed in project settings

### Monitoring
- View logs: Railway Dashboard → Your Project → Deployments → Logs
- Metrics: Railway provides CPU, memory, and network metrics

## Next Steps

After successful deployment:
1. Set up custom domain (optional)
2. Configure environment variables for production
3. Set up monitoring and alerts
4. Consider adding a CDN for static assets

## Additional Resources

- [Railway Documentation](https://docs.railway.app)
- [Next.js Docker Deployment](https://nextjs.org/docs/deployment#docker-image)
- [Next.js Standalone Output](https://nextjs.org/docs/advanced-features/output-file-tracing)
