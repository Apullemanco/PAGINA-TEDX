"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "¿Qué es TEDx?",
    answer:
      "TEDx es un programa de eventos locales autoorganizados que reúne a las personas para compartir una experiencia similar a la de TED. En un evento TEDx, el video de TED Talks y los oradores en vivo se combinan para generar una discusión y una conexión profundas. Estos eventos locales autoorganizados tienen la marca TEDx, donde x = evento TED organizado de forma independiente.",
  },
  {
    question: "¿Cuándo y dónde será el evento TEDxTecnológico de Monterrey?",
    answer:
      "El evento TEDxTecnológico de Monterrey se realizará en 2026 en el Campus Saltillo del Tecnológico de Monterrey. Las fechas específicas y la ubicación exacta se anunciarán próximamente a través de nuestros canales oficiales.",
  },
  {
    question: "¿Cómo puedo obtener boletos para el evento?",
    answer:
      "La información sobre la venta de boletos se publicará en nuestro sitio web y redes sociales oficiales cuando esté disponible. Te recomendamos seguir nuestras redes sociales para estar al tanto de los anuncios importantes.",
  },
  {
    question: "¿Puedo proponer un tema o speaker para el evento?",
    answer:
      "¡Por supuesto! Valoramos las propuestas de la comunidad. Puedes enviarnos tus sugerencias de temas o speakers a través de nuestros canales de contacto. Todas las propuestas serán evaluadas por nuestro equipo organizador.",
  },
  {
    question: "¿El evento es gratuito?",
    answer:
      "Los eventos TEDx pueden tener diferentes modelos de acceso. La información específica sobre costos y disponibilidad de boletos se anunciará oportunamente en nuestros canales oficiales.",
  },
  {
    question: "¿Cómo puedo ser voluntario en el evento?",
    answer:
      "Nos encanta contar con el apoyo de voluntarios apasionados. Si estás interesado en formar parte del equipo de voluntarios, mantente atento a nuestras convocatorias que publicaremos en nuestras redes sociales y sitio web.",
  },
  {
    question: "¿Habrá transmisión en vivo del evento?",
    answer:
      "Estamos evaluando las opciones de transmisión para hacer el evento accesible a más personas. La información sobre transmisión en vivo se anunciará más cerca de la fecha del evento.",
  },
  {
    question: "¿Puedo grabar o tomar fotos durante el evento?",
    answer:
      "Las políticas de grabación y fotografía se comunicarán antes del evento. Generalmente, se permite la fotografía personal, pero la grabación profesional está restringida para proteger los derechos de los speakers y la experiencia de los asistentes.",
  },
]

export default function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Preguntas Frecuentes</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Encuentra respuestas a las preguntas más comunes sobre TEDxTecnológico de Monterrey
            </p>
          </div>

          <div className="space-y-4 animate-slide-in-left">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
