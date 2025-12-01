const LanguagesSkills = () => {
  const languages = [
    { language: 'Deutsch', level: 'Verhandlungssicher (C1)', percentage: 95 },
    { language: 'Englisch', level: 'Fluent (C1)', percentage: 90 },
    { language: 'Farsi', level: 'Muttersprache', percentage: 100 },
  ]

  const softSkills = [
    { skill: 'Analytisches Denken', description: 'Systematische Problemanalyse und datengetriebene Entscheidungsfindung' },
    { skill: 'Teamführung', description: 'Erfolgreiche Leitung interdisziplinärer Teams und Projektgruppen' },
    { skill: 'Kommunikation', description: 'Klare und effektive Kommunikation auf allen Ebenen' },
    { skill: 'Problemlösung', description: 'Kreative Lösungsansätze für komplexe Herausforderungen' },
    { skill: 'Aufmerksamkeit für Details', description: 'Präzision und Sorgfalt in der Qualitätssicherung' },
    { skill: 'Zeitmanagement', description: 'Effiziente Organisation und Priorisierung von Aufgaben' },
  ]

  return (
    <section className="section-container bg-white">
      <h2 className="section-title">Sprachen & Soft Skills</h2>
      <p className="section-subtitle">
        Mehrsprachigkeit und wichtige persönliche Kompetenzen für erfolgreiche Zusammenarbeit
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Languages */}
        <div>
          <h3 className="text-2xl font-bold text-primary-dark mb-6">Sprachen</h3>
          <div className="space-y-6">
            {languages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">{lang.language}</span>
                  <span className="text-sm text-gray-600">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary-turquoise h-3 rounded-full transition-all duration-500"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-primary-dark mb-6">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="card border-l-4 border-primary-turquoise">
                <h4 className="font-bold text-primary-dark mb-2">{item.skill}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LanguagesSkills




