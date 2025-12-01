'use client'

import {
  BookOpenIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PresentationChartBarIcon,
  CheckCircleIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const TeachingMaterials = () => {
  const coursePackages = [
    {
      id: 'qms-iso13485',
      title: 'QMS nach ISO 13485:2016',
      category: 'Qualitätsmanagement',
      description: 'Umfassendes Paket zur Implementierung und Zertifizierung von Qualitätsmanagementsystemen nach ISO 13485:2016 für Medizinprodukte.',
      level: 'Grundlagen bis Fortgeschritten',
      duration: '40+ Stunden',
      format: 'Videos, PDFs, Vorlagen, Übungen',
      price: 'Auf Anfrage',
      includes: [
        'Videokurs mit 15+ Modulen',
        'Dokumentenvorlagen (QMS-Handbuch, SOPs)',
        'Audit-Checklisten',
        'Praxisbeispiele und Fallstudien',
        'Zertifikat nach Abschluss',
        '6 Monate Zugang zu Updates',
      ],
      icon: DocumentCheckIcon,
      color: 'bg-primary-dark',
    },
    {
      id: 'mdr-compliance',
      title: 'Medical Device Regulation (MDR)',
      category: 'Regulatory Affairs',
      description: 'Vollständiger Leitfaden zur MDR-Compliance, technischer Dokumentation und CE-Kennzeichnung von Medizinprodukten.',
      level: 'Fortgeschritten',
      duration: '30+ Stunden',
      format: 'Videos, Checklisten, Templates',
      price: 'Auf Anfrage',
      includes: [
        'MDR-Anforderungen im Detail',
        'Technische Dokumentation erstellen',
        'Clinical Evaluation Process',
        'Post-Market Surveillance',
        'Notified Body Vorbereitung',
        'Praxisnahe Beispiele',
      ],
      icon: ShieldCheckIcon,
      color: 'bg-primary-turquoise',
    },
    {
      id: 'risk-management',
      title: 'Risikomanagement nach ISO 14971',
      category: 'Risikomanagement',
      description: 'Systematisches Risikomanagement für Medizinprodukte gemäß ISO 14971 mit praktischen Anwendungsbeispielen.',
      level: 'Mittelstufe bis Fortgeschritten',
      duration: '25+ Stunden',
      format: 'Videos, Excel-Tools, Vorlagen',
      price: 'Auf Anfrage',
      includes: [
        'Risikoanalyse und -bewertung',
        'FMEA/FMECA Methoden',
        'Excel-basierte Tools',
        'Risk Management File Vorlagen',
        'Integration in QMS',
        'Fallstudien aus der Praxis',
      ],
      icon: ChartBarIcon,
      color: 'bg-blue-600',
    },
    {
      id: 'audit-training',
      title: 'Audit-Schulung nach ISO 19011',
      category: 'Auditing',
      description: 'Professionelle Schulung zum internen und externen Auditor mit praktischen Übungen und Zertifizierungsvorbereitung.',
      level: 'Alle Level',
      duration: '20+ Stunden',
      format: 'Videos, Übungen, Zertifikat',
      price: 'Auf Anfrage',
      includes: [
        'Audit-Grundlagen und -prinzipien',
        'Audit-Planung und -Durchführung',
        'Audit-Berichte erstellen',
        'Korrekturmaßnahmen verfolgen',
        'Interne vs. externe Audits',
        'Auditor-Zertifizierung Vorbereitung',
      ],
      icon: CheckCircleIcon,
      color: 'bg-green-600',
    },
  ]

  const videoCourses = [
    {
      title: 'ISO 13485:2016 – Einführung',
      duration: '2h 30min',
      level: 'Grundlagen',
      description: 'Einführung in die ISO 13485:2016 und ihre Bedeutung für Medizinprodukte.',
      category: 'Qualitätsmanagement',
    },
    {
      title: 'MDR – Technische Dokumentation',
      duration: '3h 15min',
      level: 'Fortgeschritten',
      description: 'Schritt-für-Schritt Anleitung zur Erstellung technischer Dokumentation gemäß MDR.',
      category: 'Regulatory Affairs',
    },
    {
      title: 'Risikomanagement ISO 14971',
      duration: '2h 45min',
      level: 'Mittelstufe',
      description: 'Praktische Anwendung des Risikomanagements für Medizinprodukte.',
      category: 'Risikomanagement',
    },
    {
      title: 'Audit-Durchführung',
      duration: '1h 50min',
      level: 'Alle Level',
      description: 'Best Practices für die Durchführung erfolgreicher Audits.',
      category: 'Auditing',
    },
  ]

  const resources = [
    {
      title: 'QMS-Handbuch Vorlage',
      type: 'Template',
      description: 'Vollständige Vorlage für ein QMS-Handbuch nach ISO 13485:2016',
      format: 'Word/PDF',
    },
    {
      title: 'SOP-Sammlung',
      type: 'Templates',
      description: '20+ Standard Operating Procedures für QMS',
      format: 'Word/PDF',
    },
    {
      title: 'Audit-Checklisten',
      type: 'Checklist',
      description: 'Umfassende Checklisten für interne und externe Audits',
      format: 'Excel/PDF',
    },
    {
      title: 'Risk Management File',
      type: 'Template',
      description: 'Vorlage für Risk Management File nach ISO 14971',
      format: 'Word/Excel',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Lehrmaterialien & Kurse
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Professionelle Schulungen, Kurse und Materialien zu Qualitätsmanagement, 
              Regulatory Affairs und Medizintechnik
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Von ISO 13485 über MDR-Compliance bis hin zu Risikomanagement – 
              umfassende Lernressourcen für Fachkräfte in der Medizintechnik
            </p>
          </div>
        </div>
      </section>

      {/* Course Packages */}
      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="section-title">Kurs-Pakete</h2>
          <p className="section-subtitle">
            Umfassende Lernpakete mit Videos, Materialien und Zertifikaten
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coursePackages.map((pkg) => {
            const IconComponent = pkg.icon
            return (
              <div key={pkg.id} className="card border-t-4 border-primary-turquoise hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`${pkg.color} p-3 rounded-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary-turquoise uppercase tracking-wide">
                        {pkg.category}
                      </span>
                      <h3 className="text-2xl font-bold text-primary-dark mt-1">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="font-semibold text-gray-600">Level:</span>
                    <p className="text-gray-800">{pkg.level}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Dauer:</span>
                    <p className="text-gray-800">{pkg.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Format:</span>
                    <p className="text-gray-800">{pkg.format}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Preis:</span>
                    <p className="text-primary-turquoise font-bold">{pkg.price}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary-dark mb-3">Das Paket enthält:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-primary-turquoise mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/#contact"
                  className="btn-primary w-full text-center inline-block"
                >
                  Jetzt anfragen
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* Video Courses */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="section-title">Video-Kurse</h2>
          <p className="section-subtitle">
            Einzelne Videokurse zu spezifischen Themen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoCourses.map((course, index) => (
            <div key={index} className="card hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary-turquoise/10 p-3 rounded-lg flex-shrink-0">
                  <VideoCameraIcon className="h-6 w-6 text-primary-turquoise" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary-turquoise bg-primary-turquoise/10 px-2 py-1 rounded">
                      {course.category}
                    </span>
                    <span className="text-xs text-gray-500">{course.level}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 mb-3">{course.description}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <VideoCameraIcon className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources & Templates */}
      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="section-title">Vorlagen & Ressourcen</h2>
          <p className="section-subtitle">
            Professionelle Vorlagen und Tools für den sofortigen Einsatz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-primary-dark/10 p-4 rounded-lg inline-flex mb-4">
                <DocumentTextIcon className="h-8 w-8 text-primary-dark" />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
              <div className="text-xs text-gray-500">
                Format: {resource.format}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-br from-primary-dark to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AcademicCapIcon className="h-16 w-16 mx-auto mb-6 text-primary-turquoise" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Individuelle Schulungen & Beratung
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Benötigen Sie maßgeschneiderte Schulungen für Ihr Team? 
            Ich biete auch individuelle Inhouse-Schulungen und Beratungsleistungen an.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="btn-primary bg-primary-turquoise hover:bg-primary-turquoise/90"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="/"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-dark"
            >
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeachingMaterials
