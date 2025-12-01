const Profile = () => {
  return (
    <section id="profile" className="section-container bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Mein Profil</h2>
        <p className="section-subtitle">
          Ein Überblick über meine Expertise und Leidenschaft für Qualität in der Medizintechnik
        </p>

        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            Als Quality & Regulatory Affairs Specialist verfüge ich über umfassende Erfahrung in der Medizintechnikbranche. 
            Mein Schwerpunkt liegt auf der Entwicklung und Implementierung von Qualitätsmanagementsystemen nach ISO 13485 und 
            ISO 9001 sowie der Einhaltung regulatorischer Anforderungen gemäß der Medical Device Regulation (MDR).
          </p>
          <p>
            Mit meiner Expertise im Risikomanagement nach ISO 14971, der Erstellung technischer Dokumentation und der 
            Durchführung von Audits trage ich maßgeblich zur Qualitätssicherung und Compliance in medizintechnischen 
            Unternehmen bei. Meine methodische Herangehensweise und mein tiefes Verständnis für regulatorische Anforderungen 
            ermöglichen es mir, komplexe Herausforderungen effizient zu lösen.
          </p>
          <p>
            Neben meinen technischen Fähigkeiten schätze ich die Zusammenarbeit in interdisziplinären Teams und die 
            kontinuierliche Weiterbildung in diesem sich ständig weiterentwickelnden Bereich. Ich bin motiviert, 
            durch innovative Lösungen und bewährte Praktiken zur Verbesserung der Patientensicherheit beizutragen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-turquoise mb-2">10+</div>
            <div className="text-gray-600">Jahre Erfahrung</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-turquoise mb-2">50+</div>
            <div className="text-gray-600">Erfolgreiche Projekte</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-turquoise mb-2">100+</div>
            <div className="text-gray-600">Audits durchgeführt</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile




