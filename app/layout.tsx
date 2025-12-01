import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohsen Abyari – Quality & Regulatory Affairs Specialist | Medical Devices',
  description: 'Experienced Quality & Regulatory Affairs Specialist in Medical Technology. Expertise in ISO 13485, ISO 9001, MDR, Risk Management ISO 14971, Technical Documentation, and Audits.',
  keywords: 'Quality Management, Regulatory Affairs, Medical Devices, ISO 13485, ISO 9001, MDR, ISO 14971, Medical Technology, Hamburg',
  authors: [{ name: 'Mohsen Abyari' }],
  openGraph: {
    title: 'Mohsen Abyari – Quality & Regulatory Affairs Specialist',
    description: 'Experienced Quality & Regulatory Affairs Specialist in Medical Technology',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohsen Abyari",
              "jobTitle": "Quality & Regulatory Affairs Specialist",
              "worksFor": {
                "@type": "Organization",
                "name": "Medical Devices Industry"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hamburg",
                "addressCountry": "DE"
              },
              "knowsAbout": [
                "ISO 13485",
                "ISO 9001",
                "Medical Device Regulation (MDR)",
                "Risk Management ISO 14971",
                "Quality Management",
                "Regulatory Affairs",
                "Technical Documentation",
                "Audits"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}




