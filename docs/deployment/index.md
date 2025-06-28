# GitHub Pages Deployment

This guide explains how to deploy Uniquify to GitHub Pages.

## Prerequisites

- GitHub repository created
- Node.js 20+ installed
- Git installed

## Deployment Steps

### 1. Repository Setup

Create a GitHub repository (e.g., `uniquify`) and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/uniquify.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository's **Settings** tab
2. Click **Pages** in the sidebar
3. Under **Source**, select **GitHub Actions**

### 3. Automatic Deployment

The deployment process is automated:

1. Push code to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Check progress in the **Actions** tab
4. Access your app at:
   ```
   https://YOUR_USERNAME.github.io/uniquify/
   ```

## Configuration Files

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file defines the deployment process:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

# ... (see full file in repository)
```

### Next.js Configuration

The `next.config.js` file configures the app for GitHub Pages:

```javascript
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/uniquify' : '',
  images: {
    unoptimized: true,
  },
}
```

::: tip
The `basePath` must match your repository name!
:::

## Updating the Application

To update your deployed app:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

The changes will be automatically deployed.

## Monitoring Deployment

1. Go to the **Actions** tab in your repository
2. Watch the workflow progress
3. Green checkmark = successful deployment
4. Red X = check the logs for errors

## Next Steps

- [Custom Domain Setup](./custom-domain.md)
- [Troubleshooting Guide](./troubleshooting.md)