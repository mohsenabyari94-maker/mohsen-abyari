# Quick Start Guide

## 🚀 Schnellstart

### 1. PDF-Datei verschieben
Die Datei `Lebenslauf (1).pdf` muss in den `public/` Ordner verschoben werden, damit sie von der Website aus heruntergeladen werden kann.

```powershell
# PowerShell
Move-Item "Lebenslauf (1).pdf" "public\"
```

### 2. Dependencies installieren
```bash
npm install
```

### 3. Development Server starten
```bash
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

## 📝 Wichtige Anpassungen

### Kontaktinformationen aktualisieren
1. **E-Mail**: `components/Contact.tsx` (Zeile 57, 17)
2. **Telefon**: `components/Contact.tsx` (Zeile 72)
3. **LinkedIn URL**: 
   - `components/Hero.tsx` (Zeile 37)
   - `components/Contact.tsx` (Zeile 85)
   - `components/Footer.tsx` (Zeile 29)
   - `components/Portfolio.tsx` (Zeile 30)

### Inhalte anpassen
Alle Inhalte können in den jeweiligen Komponenten-Dateien angepasst werden:

- `components/Profile.tsx` - Profilbeschreibung
- `components/Skills.tsx` - Kompetenzen und Fähigkeiten
- `components/WorkExperience.tsx` - Berufserfahrung
- `components/Education.tsx` - Ausbildung und Weiterbildung
- `components/ProjectHighlights.tsx` - Projekt-Highlights

### Farben ändern
Farben können in `tailwind.config.js` angepasst werden:
- `primary.dark`: #002E5D (Dunkelblau)
- `primary.turquoise`: #1ABC9C (Türkis)

## 🚢 Deployment

### Netlify Drop (Einfachste Methode)
1. Build für Production erstellen:
```bash
npm run build
```
2. Den `out/` Ordner finden (wird nach dem Build erstellt)
3. Auf [app.netlify.com/drop](https://app.netlify.com/drop) gehen
4. Den `out/` Ordner per Drag & Drop hochladen
5. Fertig! Die Website ist sofort live

### Netlify (mit Git Integration)
1. Repository auf GitHub pushen
2. Auf [netlify.com](https://netlify.com) einloggen
3. "Add new site" → "Import an existing project"
4. Repository auswählen
5. Build-Einstellungen:
   - Build command: `npm run build`
   - Publish directory: `out`
6. "Deploy site" klicken

### Vercel (Empfohlen)
1. Repository auf GitHub pushen
2. Auf [vercel.com](https://vercel.com) einloggen
3. "New Project" → Repository auswählen
4. Automatisches Deployment

### Alternativ: Vercel CLI
```bash
npm i -g vercel
vercel
```

## ✅ Checkliste vor dem Deployment

- [ ] PDF-Datei in `public/` Ordner verschoben
- [ ] Kontaktinformationen aktualisiert
- [ ] LinkedIn URL aktualisiert (falls vorhanden)
- [ ] Alle Inhalte überprüft
- [ ] Build erfolgreich: `npm run build`
- [ ] Lokal getestet: `npm run dev`
- [ ] `out/` Ordner wurde erstellt (für Netlify Drop)

## 📁 Projektstruktur

```
├── app/
│   ├── layout.tsx          # Root Layout (SEO, Meta-Tags)
│   ├── page.tsx            # Hauptseite
│   └── globals.css         # Globale Styles
├── components/
│   ├── Navigation.tsx      # Navigation Bar
│   ├── Hero.tsx            # Hero Section
│   ├── Profile.tsx         # Profil
│   ├── Skills.tsx          # Kompetenzen
│   ├── WorkExperience.tsx  # Berufserfahrung
│   ├── Education.tsx       # Ausbildung
│   ├── ProjectHighlights.tsx # Projekte
│   ├── LanguagesSkills.tsx # Sprachen & Soft Skills
│   ├── Portfolio.tsx       # Portfolio
│   ├── Contact.tsx         # Kontakt
│   ├── Footer.tsx          # Footer
│   └── icons/
│       └── LinkIcon.tsx    # Custom Icon
└── public/
    └── Lebenslauf (1).pdf  # CV PDF (hier verschieben!)
```

## 🎨 Design-Features

- ✅ Responsive Design (Mobile-first)
- ✅ Smooth Scrolling
- ✅ Animations & Hover-Effects
- ✅ Modern Card-Layout
- ✅ SEO-optimiert
- ✅ Accessibility-Features

## 📞 Support

Bei Fragen zur Anpassung der Website können Sie die Dokumentation konsultieren oder die Code-Kommentare in den Komponenten lesen.



