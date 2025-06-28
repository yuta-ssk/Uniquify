# Troubleshooting

Common issues and solutions for GitHub Pages deployment.

## Build Errors

### TypeScript Errors

**Problem**: Build fails with TypeScript errors

**Solution**:
1. Run locally to see detailed errors:
   ```bash
   npm run build
   ```
2. Fix all type errors
3. Ensure all imports are correct
4. Check for missing type definitions

### Missing Dependencies

**Problem**: Module not found errors

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 404 Errors

### Wrong Base Path

**Problem**: Site shows 404 after deployment

**Solution**:
1. Check `next.config.js`:
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '/uniquify' : ''
   ```
2. Ensure `basePath` matches your repository name
3. Repository name: `uniquify`
4. Base path: `/uniquify`

### GitHub Pages Not Enabled

**Problem**: No GitHub Pages site found

**Solution**:
1. Go to Settings → Pages
2. Select "GitHub Actions" as source
3. Wait for first deployment

## Styling Issues

### CSS Not Loading

**Problem**: Page loads but without styles

**Solution**:
1. Check browser console for 404 errors
2. Verify base path in all asset URLs
3. Ensure Tailwind CSS is properly configured

### Fonts Not Loading

**Problem**: Custom fonts show 404

**Solution**:
1. Use web-safe fonts or
2. Host fonts in `public` directory
3. Reference with proper base path

## Deployment Issues

### Actions Failing

**Problem**: GitHub Actions workflow fails

**Solution**:
1. Check Actions tab for error logs
2. Common issues:
   - Node version mismatch
   - Permission errors
   - Build script problems

### Slow Deployments

**Problem**: Deployment takes too long

**Solution**:
1. Check for large files in repository
2. Optimize images
3. Use `.gitignore` for unnecessary files

## Runtime Issues

### Language Switching Not Working

**Problem**: Language preference not saved

**Solution**:
- localStorage might be blocked
- Check browser settings
- Try incognito mode

### CSV Upload Fails

**Problem**: File upload doesn't work

**Solution**:
1. Check file size (browser limitations)
2. Verify CSV format
3. Check browser console for errors

## Debug Checklist

When something goes wrong, check:

- [ ] GitHub Actions logs
- [ ] Browser developer console
- [ ] Network tab for 404s
- [ ] `next.config.js` settings
- [ ] Repository settings
- [ ] Local build works (`npm run build`)

## Getting Help

If you're still stuck:

1. Check [GitHub Issues](https://github.com/your-username/uniquify/issues)
2. Review [Next.js deployment docs](https://nextjs.org/docs/deployment)
3. Ask in [GitHub Discussions](https://github.com/your-username/uniquify/discussions)