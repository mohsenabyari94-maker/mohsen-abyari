/** @type {import('next').NextConfig} */
// Detect deployment platform
const isVercel = process.env.VERCEL === '1'
const isNetlify = process.env.NETLIFY === 'true' || process.env.NETLIFY === '1'
// Use static export for Netlify, but NOT for Vercel (Vercel works better natively)
const useStaticExport = !isVercel // Export for Netlify and local builds, but not for Vercel

const nextConfig = {
  reactStrictMode: true,
  // Only use static export when NOT on Vercel
  ...(useStaticExport && { output: 'export' }),
  images: {
    // Vercel can optimize images natively, static export cannot
    unoptimized: useStaticExport,
  },
}

module.exports = nextConfig



