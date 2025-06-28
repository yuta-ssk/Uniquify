# Custom Domain Setup

Configure a custom domain for your Uniquify deployment.

## Prerequisites

- A domain name you own
- Access to your domain's DNS settings
- GitHub Pages enabled on your repository

## Setup Steps

### 1. Configure GitHub Repository

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `uniquify.yourdomain.com`)
3. Click **Save**

### 2. Configure DNS

Add one of the following DNS records:

#### For Subdomain (recommended)
```
Type: CNAME
Name: uniquify
Value: YOUR_USERNAME.github.io
```

#### For Apex Domain
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

### 3. Enable HTTPS

1. Wait for DNS propagation (5-30 minutes)
2. In GitHub Pages settings, check **Enforce HTTPS**

## Verification

- Check DNS propagation: `nslookup uniquify.yourdomain.com`
- Verify HTTPS: `https://uniquify.yourdomain.com`

## Troubleshooting

### DNS Not Resolving
- Wait up to 48 hours for full propagation
- Verify DNS records are correct
- Clear browser cache

### Certificate Errors
- Ensure "Enforce HTTPS" is enabled
- Wait for GitHub to provision SSL certificate
- May take up to 24 hours

### 404 Errors
- Verify custom domain in GitHub settings
- Check that deployment succeeded
- Ensure `basePath` in config matches