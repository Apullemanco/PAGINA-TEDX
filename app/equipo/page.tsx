"use client"

import Image from "next/image"

export default function EquipoPage() {
  const teamMembers = [
    {
      name: "David Gil Alvarado",
      role: "Organizador",
      phrase: "Las manecillas marcan los minutos, pero tu marcas lo que significan",
      image: "/images/davidg-20nuevo.png",
    },
    {
      name: "Claudia Sofía López Espinosa",
      role: "Co-organizadora",
      phrase: "Nada en la vida es estático. Somos átomos que siempre estan en constante vibración",
      image: "/images/clau-20nuevo.png",
    },
    {
      name: "David Escudero Elizondo",
      role: "Marketing/Comunicaciones",
      phrase: "El tiempo va a pasar de todos modos, haz lo mejor que puedas con él",
      image: "/images/davide-20nuevo.png",
    },
    {
      name: "Ana Sofía Martínez Valero",
      role: "Curaduría",
      phrase: "En cada pequeño cambio, hay infinitas posibilidades de transformación",
      image: "/images/anasofi-20nuevo.png",
    },
    {
      name: "Hugo Torres Miñón",
      role: "Operaciones",
      phrase: "¡Si vas a SOÑAR, EXAGERA!",
      image: "/images/hugo-20nuevo.png",
    },
    {
      name: "Daniela Garza Valdés",
      role: "Alianzas/Patrocinios",
      phrase: "Lo imposible solo tarda un poco más",
      image: "/images/dani-20nuevo.png",
    },
  ]

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#E62B1E] to-[#FF4136] bg-clip-text text-transparent">
              Nuestro Equipo
            </span>
          </h1>
          <p className="text-center text-xl text-gray-600 mb-16">
            Estudiantes apasionados creando experiencias transformadoras
          </p>

          <div className="mb-20">
            <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/mesa.jpeg"
                alt="Equipo completo TEDx Tecnológico de Monterrey"
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-[450px] object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="w-16 h-0.5 bg-[#E62B1E] mx-auto my-3"></div>
                  <p className="text-sm uppercase tracking-wide text-gray-600 mb-3">{member.role}</p>
                  <p className="text-sm italic text-gray-700">"{member.phrase}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
