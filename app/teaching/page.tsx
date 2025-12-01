import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TeachingMaterials from '@/components/TeachingMaterials'

export const metadata = {
  title: 'Lehrmaterialien – QMS, Regulatory Affairs & Medizintechnik | Mohsen Abyari',
  description: 'Professionelle Lehrmaterialien, Kurse, Videos und Pakete zu Qualitätsmanagement (QMS), Regulatory Affairs, ISO 13485, MDR und Medizintechnik.',
}

export default function TeachingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TeachingMaterials />
      <Footer />
    </main>
  )
}
