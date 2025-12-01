import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Medizintechnik',
      institution: 'Azad University',
      location: 'Iran',
      period: '2010 - 2014',
      focus: ['Brain-Computer Interface (BCI)', 'Elektronik', 'Mechanik'],
      projects: [
        'Entwicklung eines Brain-Computer Interface Systems',
        'Elektronische Schaltungsentwicklung für medizinische Anwendungen',
        'Mechanische Konstruktion medizintechnischer Komponenten',
      ],
    },
  ]

  const furtherEducation = [
    {
      title: 'ISO 13485:2016 Zertifizierung',
      organization: 'TÜV / Zertifizierungsstelle',
      year: '2021',
    },
    {
      title: 'Project Management Hospital',
      organization: 'Weiterbildungsinstitut',
      year: '2019',
    },
    {
      title: 'TÜV-Seminare: Qualitätsmanagement',
      organization: 'TÜV',
      year: '2018 - 2020',
    },
    {
      title: 'McKinsey-Kurse: Strategisches Management',
      organization: 'McKinsey & Company',
      year: '2018',
    },
    {
      title: 'Risk Management nach ISO 14971',
      organization: 'Weiterbildungsinstitut',
      year: '2018',
    },
    {
      title: 'Medical Device Regulation (MDR)',
      organization: 'Regulatory Affairs Training',
      year: '2020',
    },
  ]

  return (
    <section id="education" className="section-container bg-white">
      <h2 className="section-title">Ausbildung & Weiterbildung</h2>
      <p className="section-subtitle">
        Fundierte akademische Ausbildung und kontinuierliche berufliche Weiterentwicklung
      </p>

      <div className="mt-12 space-y-12">
        {/* Academic Education */}
        <div>
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="h-8 w-8 text-primary-turquoise mr-3" />
            <h3 className="text-2xl font-bold text-primary-dark">Akademische Ausbildung</h3>
          </div>
          {education.map((edu, index) => (
            <div key={index} className="card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-primary-dark mb-1">{edu.degree}</h4>
                  <p className="text-lg text-primary-turquoise font-semibold">{edu.institution}</p>
                  <p className="text-gray-600">{edu.location} • {edu.period}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-semibold text-primary-dark mb-3">Schwerpunkte:</h5>
                <div className="flex flex-wrap gap-2 mb-6">
                  {edu.focus.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary-dark/10 text-primary-dark rounded-lg text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
                <h5 className="font-semibold text-primary-dark mb-3">Abschlussprojekte:</h5>
                <ul className="space-y-2">
                  {edu.projects.map((project, idx) => (
                    <li key={idx} className="flex items-start">
                      <TrophyIcon className="h-5 w-5 text-primary-turquoise mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Further Education */}
        <div>
          <div className="flex items-center mb-6">
            <TrophyIcon className="h-8 w-8 text-primary-turquoise mr-3" />
            <h3 className="text-2xl font-bold text-primary-dark">Weiterbildungen & Zertifizierungen</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {furtherEducation.map((course, index) => (
              <div key={index} className="card border-t-4 border-primary-turquoise">
                <h4 className="text-lg font-bold text-primary-dark mb-2">{course.title}</h4>
                <p className="text-gray-600 mb-1">{course.organization}</p>
                <p className="text-sm text-primary-turquoise font-medium">{course.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education




