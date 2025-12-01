# 📦 Deploy-Ready Folder for Netlify Drop

## ✅ Your Site is Ready to Deploy!

This project is configured for **Netlify Drop** deployment. The `out` folder contains everything you need.

## 🚀 How to Deploy (3 Simple Steps)

### Step 1: Build the Project

Run one of these commands in your terminal:

**Windows (Batch):**
```cmd
BUILD_AND_DEPLOY.bat
```

**PowerShell:**
```powershell
.\prepare-deploy.ps1
```

**Or manually:**
```bash
npm install
npm run build
```

### Step 2: Find the `out` Folder

After building, you'll see a folder called `out` in your project directory. This folder contains:
- All your HTML files
- All CSS and JavaScript
- All images and assets
- Everything needed for deployment

**Location:** `c:\Users\Sina\Desktop\mohsen_abyari\out\`

### Step 3: Drop on Netlify

1. Open [https://app.netlify.com/drop](https://app.netlify.com/drop) in your browser
2. Drag the entire `out` folder from File Explorer
3. Drop it onto the Netlify Drop page
4. Wait a few seconds
5. **Done!** Your site is live! 🎉

## 📁 What's in the `out` Folder?

```
out/
├── index.html          # Main page
├── _next/              # Next.js assets
├── mohsen_bild.jpeg   # Images
├── Lebenslauf (1).pdf # PDF file
├── _redirects          # Netlify routing
└── ...                 # All other static files
```

## ⚙️ Configuration Files

The following files ensure proper deployment:
- ✅ `next.config.js` - Configured for static export
- ✅ `netlify.toml` - Netlify build settings
- ✅ `public/_redirects` - Routing configuration

## 🔄 Rebuilding After Changes

If you make changes to your site:
1. Run `npm run build` again
2. A fresh `out` folder will be created
3. Drop the new `out` folder on Netlify Drop

## 💡 Tips

- The `out` folder is **automatically generated** - don't edit files inside it
- Always rebuild before deploying if you make changes
- The `out` folder is in `.gitignore` (it's not committed to git)
- You can deploy the same `out` folder multiple times

## ❓ Need Help?

See `NETLIFY_DEPLOY_INSTRUCTIONS.md` for detailed instructions and troubleshooting.

