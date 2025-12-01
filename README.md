# Mohsen Abyari - Personal Website

Professionelle persönliche Website für Mohsen Abyari, Quality & Regulatory Affairs Specialist in der Medizintechnik.

## Features

- ✅ Modernes, responsives One-Page-Layout
- ✅ Optimiert für Recruiter und Arbeitgeber
- ✅ SEO-optimiert mit strukturierten Daten
- ✅ Smooth Scrolling Navigation
- ✅ Mobile-first Design
- ✅ Alle erforderlichen Sektionen:
  - Hero Section
  - Profil
  - Kompetenzen & Fähigkeiten
  - Berufserfahrung
  - Ausbildung & Weiterbildung
  - Projekt-Highlights
  - Sprachen & Soft Skills
  - Portfolio & Downloads
  - Kontaktformular

## Technologie-Stack

- **Next.js 14** - React Framework
- **TypeScript** - Type Safety
- **TailwindCSS** - Utility-first CSS Framework
- **HeroIcons** - Icon Library

## Installation

1. PDF-Datei in den public-Ordner verschieben:
```bash
# Die Datei "Lebenslauf (1).pdf" muss in den public-Ordner verschoben werden
move "Lebenslauf (1).pdf" public/
```

2. Dependencies installieren:
```bash
npm install
```

3. Development Server starten:
```bash
npm run dev
```
Die Website ist dann unter `http://localhost:3000` erreichbar.

4. Build für Production:
```bash
npm run build
npm start
```

## Deployment auf Vercel

Die Website ist direkt auf Vercel deploybar:

1. Projekt auf GitHub pushen
2. Auf [vercel.com](https://vercel.com) einloggen
3. Neues Projekt importieren
4. Automatisches Deployment starten

Oder über Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Anpassungen

### Kontaktinformationen
Die Kontaktinformationen können in folgenden Dateien angepasst werden:
- `components/Contact.tsx` - Kontaktformular und Kontaktdaten
- `components/Footer.tsx` - Footer-Kontaktdaten
- `components/Hero.tsx` - Hero Section Links

### Inhalte
Alle Inhalte können direkt in den jeweiligen Komponenten angepasst werden:
- `components/Profile.tsx` - Profilbeschreibung
- `components/Skills.tsx` - Kompetenzen
- `components/WorkExperience.tsx` - Berufserfahrung
- `components/Education.tsx` - Ausbildung

### Farben
Die Farben können in `tailwind.config.js` angepasst werden:
- `primary.dark`: #002E5D
- `primary.turquoise`: #1ABC9C

## Struktur

```
├── app/
│   ├── layout.tsx       # Root Layout mit SEO
│   ├── page.tsx         # Hauptseite
│   └── globals.css      # Globale Styles
├── components/
│   ├── Navigation.tsx   # Navigation Bar
│   ├── Hero.tsx         # Hero Section
│   ├── Profile.tsx      # Profil-Sektion
│   ├── Skills.tsx       # Kompetenzen
│   ├── WorkExperience.tsx # Berufserfahrung
│   ├── Education.tsx    # Ausbildung
│   ├── ProjectHighlights.tsx # Projekt-Highlights
│   ├── LanguagesSkills.tsx # Sprachen & Soft Skills
│   ├── Portfolio.tsx    # Portfolio & Downloads
│   ├── Contact.tsx      # Kontakt
│   └── Footer.tsx       # Footer
└── public/
    └── Lebenslauf (1).pdf # CV PDF
```

## Lizenz

Privat - Alle Rechte vorbehalten
"# mohsen-abyari" 
