/** @type {import('next').NextConfig} */
// Only use static export when explicitly building for Netlify
// Default: No static export (works best for Vercel and most platforms)
const isNetlify = process.env.NETLIFY === 'true' || process.env.NETLIFY === '1'
const useStaticExport = isNetlify // Only export when NETLIFY env var is set

const nextConfig = {
  reactStrictMode: true,
  // Only use static export when explicitly building for Netlify
  ...(useStaticExport && { output: 'export' }),
  images: {
    // Vercel can optimize images natively, static export cannot
    unoptimized: useStaticExport,
  },
}

module.exports = nextConfig



