'use client'

import { useState } from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend
    const mailtoLink = `mailto:mohsen.abyari@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-container bg-white">
      <h2 className="section-title">Kontakt</h2>
      <p className="section-subtitle">
        Lassen Sie uns in Kontakt treten – ich freue mich auf Ihre Nachricht
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold text-primary-dark mb-6">Kontaktinformationen</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MapPinIcon className="h-6 w-6 text-primary-turquoise" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800 mb-1">Standort</h4>
                <p className="text-gray-600">Hamburg, Deutschland</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <EnvelopeIcon className="h-6 w-6 text-primary-turquoise" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800 mb-1">E-Mail</h4>
                <a
                  href="mailto:mohsen.abyari@example.com"
                  className="text-primary-turquoise hover:underline"
                >
                  mohsen.abyari@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <PhoneIcon className="h-6 w-6 text-primary-turquoise" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800 mb-1">Telefon</h4>
                <a
                  href="tel:+491234567890"
                  className="text-primary-turquoise hover:underline"
                >
                  +49 (0) 123 456 7890
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-gray-800 mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/mohsen-abyari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-dark text-white hover:bg-primary-turquoise transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold text-primary-dark mb-6">Nachricht senden</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-turquoise focus:border-transparent transition-all duration-200"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-turquoise focus:border-transparent transition-all duration-200"
                placeholder="ihre.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Betreff *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-turquoise focus:border-transparent transition-all duration-200"
                placeholder="Betreff Ihrer Nachricht"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-turquoise focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Ihre Nachricht..."
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
