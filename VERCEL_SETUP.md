# 🔧 Vercel Setup Instructions

## ⚠️ Error: "No Next.js version detected"

If you're seeing this error, follow these steps:

## ✅ Solution 1: Check Vercel Project Settings

1. Go to your Vercel project dashboard
2. Click on **Settings** → **General**
3. Scroll to **Root Directory**
4. **IMPORTANT**: Make sure it's set to **`./`** (root) or **leave it blank**
5. If it's set to a subdirectory, change it to root or clear it

## ✅ Solution 2: Verify package.json Location

Make sure `package.json` is in the repository root:
```
mohsen_abyari/
├── package.json  ← Must be here
├── next.config.js
├── app/
└── ...
```

## ✅ Solution 3: Clear Build Cache

1. Go to Vercel project settings
2. Click **Deployments**
3. Find the failed deployment
4. Click **Redeploy** → **Redeploy with existing Build Cache** → **Clear cache and redeploy**

## ✅ Solution 4: Verify Git Repository Structure

Make sure when you push to GitHub, the structure is:
```
your-repo/
├── package.json
├── next.config.js
├── app/
├── components/
└── ...
```

**NOT:**
```
your-repo/
└── mohsen_abyari/
    ├── package.json  ← Wrong! Vercel can't find it
    └── ...
```

## ✅ Solution 5: Manual Framework Selection

If auto-detection fails:

1. Go to **Settings** → **General**
2. Under **Framework Preset**, select **Next.js**
3. **Build Command**: `npm run build` (or leave default)
4. **Output Directory**: Leave blank (Vercel handles this)
5. **Install Command**: `npm install` (or leave default)
6. Save and redeploy

## ✅ Solution 6: Verify package.json is Committed

Make sure `package.json` is committed to Git:

```bash
git add package.json
git commit -m "Ensure package.json is committed"
git push
```

## 🔍 Check Build Logs

After redeploying, check the build logs. You should see:
- ✅ "Installing dependencies..."
- ✅ "Detected Next.js version: 14.0.4"
- ✅ "Running build..."

## 📝 Current Configuration

Your `package.json` is correct:
- ✅ Next.js is in `dependencies`: `"next": "^14.0.4"`
- ✅ Build script exists: `"build": "next build"`
- ✅ All required dependencies are present

## 🚀 Quick Fix Checklist

- [ ] Root Directory in Vercel is set to `./` or blank
- [ ] `package.json` is in repository root
- [ ] `package.json` is committed to Git
- [ ] Repository structure is flat (not nested)
- [ ] Clear build cache and redeploy
- [ ] Framework preset is set to "Next.js" (if auto-detect fails)

## 💡 Most Common Issue

**Root Directory is set incorrectly!**

90% of the time, this error happens because:
- Root Directory is set to a subdirectory
- Or the repository structure is nested

**Fix**: Set Root Directory to `./` or leave it blank in Vercel settings.
