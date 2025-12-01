import {
  ArrowDownTrayIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline'
import LinkIcon from './icons/LinkIcon'

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Lebenslauf (PDF)',
      description: 'Meinen vollständigen Lebenslauf herunterladen',
      icon: ArrowDownTrayIcon,
      href: '/Lebenslauf (1).pdf',
      download: true,
      color: 'bg-primary-dark',
    },
    {
      title: 'Lehrmaterialien',
      description: 'Kurse, Videos & Pakete zu QMS & Regulatory Affairs',
      icon: BookOpenIcon,
      href: '/teaching',
      download: false,
      color: 'bg-primary-turquoise',
    },
    {
      title: 'Zertifikate',
      description: 'Zeugnisse und Zertifizierungen',
      icon: AcademicCapIcon,
      href: '#certificates',
      download: false,
      color: 'bg-blue-600',
    },
    {
      title: 'LinkedIn Profil',
      description: 'Besuchen Sie mein LinkedIn-Profil',
      icon: LinkIcon,
      href: 'https://www.linkedin.com/in/mohsen-abyari-rizi/?originalSubdomain=de',
      download: false,
      color: 'bg-gray-700',
      external: true,
    },
    {
      title: 'GitHub Profil',
      description: 'Code-Repositories und Projekte',
      icon: CodeBracketIcon,
      href: 'https://github.com/mohsenabyari94-maker',
      download: false,
      color: 'bg-gray-800',
      external: true,
    },
  ]

  return (
    <section id="portfolio" className="section-container bg-gray-50">
      <h2 className="section-title">Portfolio & Downloads</h2>
      <p className="section-subtitle">
        Dokumente, Zertifikate und weitere Ressourcen
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioItems.map((item, index) => {
          const IconComponent = item.icon
          const linkProps = item.download
            ? { download: true }
            : item.external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <a
              key={index}
              href={item.href}
              {...linkProps}
              className="card hover:scale-105 transition-all duration-300 text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
