"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

export default function SpeakersPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const bloques = [
    {
      nombre: "Bloque 1",
      horario: "12:30 pm - 2:00 pm",
      speakers: [
        { imagen: "/images/speakers/ana-paula.jpg" },
        { imagen: "/images/speakers/alex.jpg" },
        { imagen: "/images/speakers/melissa.jpg" },
        { imagen: "/images/speakers/ary.jpg" },
      ],
    },
    {
      nombre: "Bloque 2",
      horario: "3:00 pm - 4:30 pm",
      speakers: [
        { imagen: "/images/speakers/adrian.jpg" },
        { imagen: "/images/speakers/gladyz.jpg" },
        { imagen: "/images/speakers/karina.jpg" },
        { imagen: "/images/speakers/hernan.jpg" },
      ],
    },
    {
      nombre: "Bloque 3",
      horario: "5:30 pm - 6:30 pm",
      speakers: [
        { imagen: "/images/speakers/nayeli.jpg" },
        { imagen: "/images/speakers/gretta.jpg" },
        { imagen: "/images/speakers/arturo.jpg" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#E62B1E] to-[#FF4136] bg-clip-text text-transparent">Speakers</span>
          </h1>
          <p className="text-center text-xl text-gray-600 mb-16">Destellos del Desierto</p>

          {bloques.map((bloque, bloqueIndex) => (
            <div key={bloqueIndex} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">{bloque.nombre}</h2>
                <p className="text-lg text-gray-600">{bloque.horario}</p>
              </div>

              <div
                className={`grid gap-8 ${bloque.nombre === "Bloque 3" ? "md:grid-cols-3 justify-items-center max-w-6xl mx-auto" : "md:grid-cols-2 lg:grid-cols-4"}`}
              >
                {bloque.speakers.map((speaker, speakerIndex) => (
                  <div
                    key={speakerIndex}
                    className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedImage(speaker.imagen)}
                  >
                    <Image
                      src={speaker.imagen || "/placeholder.svg"}
                      alt="Speaker"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image src={selectedImage || "/placeholder.svg"} alt="Speaker" fill className="object-contain" />
          </div>
        </div>
      )}
    </main>
  )
}
