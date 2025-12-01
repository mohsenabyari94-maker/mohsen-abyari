import {
  DocumentCheckIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Qualitätsmanagement',
      icon: DocumentCheckIcon,
      color: 'text-primary-dark',
      bgColor: 'bg-primary-dark/10',
      skills: [
        'ISO 13485:2016',
        'ISO 9001',
        'ISO 14971 (Risikomanagement)',
        'GMP/EudraLex',
        'ISO 19011 Audits',
      ],
    },
    {
      title: 'Regulatory Affairs',
      icon: ShieldCheckIcon,
      color: 'text-primary-turquoise',
      bgColor: 'bg-primary-turquoise/10',
      skills: [
        'Medical Device Regulation (MDR)',
        'CE-Kennzeichnung',
        'Technische Dokumentation',
        'PMS/Vigilance',
        'Regulatory Compliance',
      ],
    },
    {
      title: 'Medizintechnik/Engineering',
      icon: WrenchScrewdriverIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
      skills: [
        'Installation & Wartung',
        'Kalibrierung',
        'Mechanik & Elektronik',
        'Medizintechnische Geräte',
        'Biomedical Engineering',
      ],
    },
    {
      title: 'Tools & Software',
      icon: ComputerDesktopIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-600/10',
      skills: [
        'SAP',
        'ERP-Systeme',
        'MATLAB',
        'Python',
        'Microsoft 365',
      ],
    },
    {
      title: 'Methoden & Projektmanagement',
      icon: ChartBarIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-600/10',
      skills: [
        'SWOT-Analyse',
        'PESTEL-Analyse',
        '7S-Modell',
        'Diagramme & Visualisierung',
        'Projektmanagement',
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-white">
      <h2 className="section-title">Kompetenzen & Fähigkeiten</h2>
      <p className="section-subtitle">
        Umfassende Expertise in Qualitätsmanagement, Regulatory Affairs und Medizintechnik
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon
          return (
            <div key={index} className={`card ${category.bgColor} border-t-4 ${category.color.replace('text-', 'border-')}`}>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.bgColor} mb-4`}>
                <IconComponent className={`h-6 w-6 ${category.color}`} />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <span className="text-primary-turquoise mr-2">▸</span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills




