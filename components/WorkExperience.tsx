import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline'

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Glomin GmbH',
      position: 'Quality Assurance & Regulatory Affairs Specialist',
      location: 'Deutschland',
      period: '2020 - August 2024',
      description: [
        'Entwicklung und Implementierung von Qualitätsmanagementsystemen nach ISO 13485',
        'Erstellung und Pflege technischer Dokumentation gemäß MDR-Anforderungen',
        'Durchführung interner und externer Audits nach ISO 19011',
        'Risikomanagement nach ISO 14971 für Medizinprodukte',
        'Koordination von Zertifizierungsprozessen und CE-Kennzeichnung',
        'Schulung und Weiterbildung von Mitarbeitern in Qualitätsprozessen',
        'Post-Market Surveillance (PMS) und Vigilance-Aktivitäten',
      ],
    },
    {
      company: 'OFOGH Lab',
      position: 'Quality Control & Project Management',
      location: 'Iran',
      period: '2017 - 2020',
      description: [
        'Leitung von Qualitätskontrollprojekten im Laborumfeld',
        'Entwicklung und Implementierung von QC-Verfahren',
        'Projektplanung und -steuerung für Qualitätsinitiativen',
        'Datenanalyse und Berichterstellung',
        'Koordination mit interdisziplinären Teams',
        'Verbesserung von Qualitätsprozessen durch Methoden wie SWOT und PESTEL',
      ],
    },
    {
      company: 'Milad Hospital',
      position: 'Biomedical Technician / Medizintechnik',
      location: 'Iran',
      period: '2014 - 2017',
      description: [
        'Installation, Wartung und Kalibrierung medizintechnischer Geräte',
        'Fehlerdiagnose und Reparatur von biomedizinischen Geräten',
        'Dokumentation von Wartungs- und Reparaturarbeiten',
        'Schulung von medizinischem Personal im Umgang mit Geräten',
        'Einhaltung von Sicherheits- und Qualitätsstandards',
        'Unterstützung bei der Beschaffung neuer Medizinprodukte',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-gray-50">
      <h2 className="section-title">Berufserfahrung</h2>
      <p className="section-subtitle">
        Langjährige Erfahrung in Qualitätsmanagement, Regulatory Affairs und Medizintechnik
      </p>

      <div className="mt-12 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="card border-l-4 border-primary-turquoise">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark mb-1">{exp.position}</h3>
                <h4 className="text-xl text-primary-turquoise font-semibold">{exp.company}</h4>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end space-y-1">
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  {exp.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  {exp.period}
                </div>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              {exp.description.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="text-primary-turquoise mr-3 mt-1">▸</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience




