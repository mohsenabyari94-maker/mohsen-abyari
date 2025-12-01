'use client'

import { ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import LinkIcon from './icons/LinkIcon'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 text-white pt-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Mohsen Abyari
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-primary-turquoise">
                Quality & Regulatory Affairs Specialist<br />(Medical Devices)
              </h2>
              <p className="text-lg md:text-xl mb-12 text-gray-200 leading-relaxed">
                Erfahrener Spezialist für Qualitäts- und Regulierungsangelegenheiten in der Medizintechnik mit umfassender Expertise in ISO 13485, ISO 9001, Medical Device Regulation (MDR), Risikomanagement nach ISO 14971 und technischer Dokumentation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/Lebenslauf (1).pdf"
                  download
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  Lebenslauf herunterladen
                </a>
                <a
                  href="#contact"
                  className="btn-outline border-primary-turquoise text-white hover:bg-primary-turquoise inline-flex items-center gap-2"
                >
                  <EnvelopeIcon className="h-5 w-5" />
                  Kontakt aufnehmen
                </a>
                <a
                  href="https://linkedin.com/in/mohsen-abyari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary-dark inline-flex items-center gap-2"
                >
                  <LinkIcon className="h-5 w-5" />
                  LinkedIn öffnen
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-primary-turquoise/20 rounded-3xl blur-2xl transform rotate-3"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-turquoise/30">
                  <Image
                    src="/mohsen_bild.jpeg"
                    alt="Mohsen Abyari - Quality & Regulatory Affairs Specialist"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="mt-20 flex justify-center">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-primary-turquoise"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
