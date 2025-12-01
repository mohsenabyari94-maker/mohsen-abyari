# Netlify Drop Deployment Guide

This site is configured for static export and ready for Netlify Drop deployment.

## Quick Deploy Steps

1. **Build the site:**
   ```powershell
   npm install
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `out` folder that was created after building
   - Your site will be live in seconds!

## What's Configured

- ✅ Static export enabled in `next.config.js`
- ✅ Images set to unoptimized (required for static export)
- ✅ All components are compatible with static export
- ✅ No server-side features that would prevent static export

## Build Output

After running `npm run build`, Next.js will create an `out` folder containing all static files. This is the folder you drag to Netlify Drop.

## Troubleshooting

If the build fails:
- Make sure all dependencies are installed: `npm install`
- Check that all files in `public/` are present (especially the PDF and images)
- Verify TypeScript compilation: `npm run lint`

## Alternative: Netlify CLI

If you prefer using Netlify CLI instead of Drop:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

