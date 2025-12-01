import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Education from '@/components/Education'
import ProjectHighlights from '@/components/ProjectHighlights'
import LanguagesSkills from '@/components/LanguagesSkills'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Profile />
      <Skills />
      <WorkExperience />
      <Education />
      <ProjectHighlights />
      <LanguagesSkills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}




