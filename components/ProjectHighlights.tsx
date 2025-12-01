import {
  CheckCircleIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'

const ProjectHighlights = () => {
  const highlights = [
    {
      title: 'QMS-Implementierung',
      icon: CheckCircleIcon,
      description:
        'Erfolgreiche Implementierung eines vollständigen Qualitätsmanagementsystems nach ISO 13485:2016 in einem mittelständischen Medizintechnikunternehmen. Dies führte zu einer erfolgreichen Zertifizierung und verbesserte die Prozesseffizienz um 30%.',
    },
    {
      title: 'Audit-Erfahrung',
      icon: DocumentTextIcon,
      description:
        'Durchführung von über 100 internen und externen Audits nach ISO 19011. Expertise in der Vorbereitung, Durchführung und Nachbearbeitung von Zertifizierungsaudits sowie Notified Body Audits gemäß MDR.',
    },
    {
      title: 'Technische Dokumentation & MDR',
      icon: DocumentTextIcon,
      description:
        'Erstellung und Pflege umfangreicher technischer Dokumentation gemäß MDR-Anforderungen. Erfolgreiche Einreichung mehrerer Medizinprodukte zur CE-Kennzeichnung mit vollständiger technischer Dokumentation.',
    },
    {
      title: 'Qualitätskontrolle',
      icon: BeakerIcon,
      description:
        'Entwicklung und Implementierung innovativer QC-Verfahren in Laborumgebungen. Verbesserung der Qualitätskennzahlen durch datengetriebene Analysen und kontinuierliche Prozessverbesserung.',
    },
    {
      title: 'Trainings & Schulungen',
      icon: UserGroupIcon,
      description:
        'Durchführung zahlreicher Schulungen und Workshops für Mitarbeiter zu Themen wie Qualitätsmanagement, MDR-Compliance und Risikomanagement. Entwicklung von Schulungsmaterialien und E-Learning-Modulen.',
    },
    {
      title: 'Projektmanagement',
      icon: ChartBarIcon,
      description:
        'Leitung komplexer Projekte zur Qualitätsverbesserung und regulatorischen Compliance. Erfolgreiche Umsetzung von Projekten unter Anwendung bewährter Projektmanagementmethoden und Tools.',
    },
  ]

  return (
    <section id="projects" className="section-container bg-gray-50">
      <h2 className="section-title">Projekt-Highlights & Erfolge</h2>
      <p className="section-subtitle">
        Herausragende Projekte und Erfolge in Qualitätsmanagement und Regulatory Affairs
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => {
          const IconComponent = highlight.icon
          return (
            <div key={index} className="card hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-turquoise/10 mb-4">
                <IconComponent className="h-6 w-6 text-primary-turquoise" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">{highlight.title}</h3>
              <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectHighlights




