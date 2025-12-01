# 📁 Project Structure

Complete folder and file structure of the Mohsen Abyari website project.

```
mohsen_abyari/
│
├── .gitignore                          # Git ignore file (excludes node_modules, .next, out, etc.)
│
├── app/                                # Next.js App Router directory
│   ├── globals.css                     # Global CSS styles
│   ├── layout.tsx                      # Root layout component (SEO, metadata, HTML structure)
│   └── page.tsx                        # Main homepage component
│
├── components/                         # React components directory
│   ├── Contact.tsx                     # Contact section component
│   ├── Education.tsx                   # Education section component
│   ├── Footer.tsx                      # Footer component
│   ├── Hero.tsx                        # Hero section component
│   ├── LanguagesSkills.tsx             # Languages and soft skills component
│   ├── Navigation.tsx                  # Navigation bar component
│   ├── Portfolio.tsx                  # Portfolio section component
│   ├── Profile.tsx                     # Profile section component
│   ├── ProjectHighlights.tsx          # Project highlights component
│   ├── Skills.tsx                      # Skills section component
│   ├── WorkExperience.tsx              # Work experience section component
│   │
│   └── icons/                          # Custom icon components
│       └── LinkIcon.tsx                # Custom link icon component
│
├── public/                             # Static assets directory
│   ├── _redirects                      # Netlify redirects file (for SPA routing)
│   ├── .gitkeep                        # Git keep file (ensures folder is tracked)
│   ├── Lebenslauf (1).pdf              # CV/Resume PDF file
│   └── mohsen_bild.jpeg                # Profile image
│
├── logindaten/                         # Login credentials (private data)
│   ├── ionos.txt                       # IONOS login information
│   └── mohsen.abyari94@gmail.com.txt   # Email login information
│
├── BUILD_AND_DEPLOY.bat                # Windows batch script for building and deploying
├── build-and-deploy.bat                # Alternative build script
├── build-for-netlify.ps1               # PowerShell script for Netlify deployment
├── prepare-deploy.ps1                  # PowerShell script to prepare deployment folder
│
├── DEPLOY_READY.md                     # Deployment readiness documentation
├── NETLIFY_DEPLOY_INSTRUCTIONS.md      # Detailed Netlify deployment instructions
├── NETLIFY_DEPLOY.md                   # Netlify deployment guide
├── PROJECT_STRUCTURE.md                 # This file - project structure documentation
├── QUICKSTART.md                       # Quick start guide (German)
├── README_DEPLOY.md                    # Deployment README
├── README.md                           # Main project README
├── START_HERE.md                       # Quick deployment guide
│
├── netlify.toml                        # Netlify configuration file
├── next.config.js                      # Next.js configuration (static export enabled)
├── package.json                        # NPM package configuration and dependencies
├── package-lock.json                   # NPM lock file (dependency versions)
├── postcss.config.js                   # PostCSS configuration (for Tailwind)
├── tailwind.config.js                  # Tailwind CSS configuration
└── tsconfig.json                       # TypeScript configuration

```

## 📂 Directory Descriptions

### `/app`
Next.js 14 App Router directory. Contains the main application structure:
- **layout.tsx**: Root layout with metadata, SEO tags, and HTML structure
- **page.tsx**: Main homepage that imports and renders all components
- **globals.css**: Global CSS styles and Tailwind imports

### `/components`
All React components organized by functionality:
- **Navigation.tsx**: Top navigation bar with smooth scrolling
- **Hero.tsx**: Hero section with name, title, and CTA buttons
- **Profile.tsx**: Personal profile and introduction section
- **Skills.tsx**: Technical skills and competencies
- **WorkExperience.tsx**: Professional work experience timeline
- **Education.tsx**: Educational background and certifications
- **ProjectHighlights.tsx**: Featured projects showcase
- **LanguagesSkills.tsx**: Languages and soft skills
- **Portfolio.tsx**: Portfolio section with links and downloads
- **Contact.tsx**: Contact form and contact information
- **Footer.tsx**: Footer with links and copyright

### `/components/icons`
Custom icon components:
- **LinkIcon.tsx**: Custom SVG icon for external links

### `/public`
Static assets served directly:
- **mohsen_bild.jpeg**: Profile/hero image
- **Lebenslauf (1).pdf**: Resume/CV PDF file
- **_redirects**: Netlify redirects configuration for SPA routing
- **.gitkeep**: Ensures empty directory is tracked by Git

### `/logindaten`
Private login credentials (should be in .gitignore):
- Contains sensitive login information
- **Note**: This folder should not be committed to version control

## 📄 Configuration Files

### `next.config.js`
- Configures Next.js for static export (`output: 'export'`)
- Enables unoptimized images for static hosting
- React strict mode enabled

### `netlify.toml`
- Netlify build configuration
- Sets publish directory to `out`
- Configures build command
- Sets up redirects for SPA routing

### `package.json`
- Project metadata and dependencies
- Scripts: dev, build, start, lint
- Dependencies: Next.js, React, HeroIcons
- DevDependencies: TypeScript, Tailwind, PostCSS

### `tsconfig.json`
- TypeScript compiler configuration
- Path aliases configured (`@/*` maps to root)
- Strict mode enabled
- Next.js plugin configured

### `tailwind.config.js`
- Tailwind CSS configuration
- Custom color palette (primary.dark, primary.turquoise)
- Content paths for purging unused styles

### `postcss.config.js`
- PostCSS configuration for Tailwind CSS
- Autoprefixer configuration

## 🚀 Deployment Scripts

### `BUILD_AND_DEPLOY.bat`
Windows batch script that:
1. Installs dependencies
2. Builds the project
3. Opens the `out` folder in File Explorer

### `prepare-deploy.ps1`
PowerShell script that:
1. Builds the Next.js project
2. Verifies `out` folder creation
3. Opens the folder in File Explorer

## 📝 Documentation Files

- **START_HERE.md**: Quick start guide for deployment
- **QUICKSTART.md**: Comprehensive quick start guide (German)
- **README.md**: Main project documentation
- **README_DEPLOY.md**: Deployment-specific documentation
- **NETLIFY_DEPLOY_INSTRUCTIONS.md**: Detailed Netlify deployment steps
- **DEPLOY_READY.md**: Deployment readiness checklist
- **PROJECT_STRUCTURE.md**: This file - complete project structure

## 🔄 Generated Files (Not in Repository)

These files/folders are generated during build and are in `.gitignore`:

```
.next/          # Next.js build cache
out/            # Static export output (deploy-ready folder)
node_modules/   # NPM dependencies
```

## 📦 Build Output

After running `npm run build`, the following structure is created:

```
out/                                    # Deploy-ready static files
├── index.html                          # Main HTML file
├── _next/                              # Next.js static assets
│   ├── static/
│   │   ├── css/                        # Compiled CSS
│   │   └── chunks/                     # JavaScript bundles
├── mohsen_bild.jpeg                    # Images (from public/)
├── Lebenslauf (1).pdf                  # PDF files (from public/)
└── _redirects                          # Netlify redirects (from public/)
```

## 🔒 Files to Keep Private

The following files/folders contain sensitive information and should not be committed:
- `/logindaten` - Login credentials
- `.env*` - Environment variables (if any)
- Any files with passwords or API keys

---

**Last Updated**: Generated automatically
**Project**: Mohsen Abyari Personal Website
**Framework**: Next.js 14 with App Router
**Deployment**: Netlify Drop (Static Export)
