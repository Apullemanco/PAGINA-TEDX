"use client"

import Image from "next/image"

export default function EquipoPage() {
  const teamMembers = [
    {
      name: "David Gil Alvarado",
      role: "Organizador",
      phrase: "Las manecillas marcan los minutos, pero tu marcas lo que significan",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/davidg%20nuevo-ab2MvgZ7YlgELH40pEGBZFzO0ayBQ2.png",
      bgColor: "bg-[#E62B1E]",
    },
    {
      name: "Claudia Sofía López Espinosa",
      role: "Co-organizadora",
      phrase: "Nada en la vida es estático. Somos átomos que siempre estan en constante vibración",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clau%20nuevo-jslx88GgNKVXAeFd31Du1hNXvJJd0V.png",
      bgColor: "bg-black",
    },
    {
      name: "David Escudero Elizondo",
      role: "Marketing/Comunicaciones",
      phrase: "El tiempo va a pasar de todos modos, haz lo mejor que puedas con él",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/davide%20nuevo-XZUwblEaX1dRWVv5xOzA5uGEZ3UQ7a.png",
      bgColor: "bg-[#E62B1E]",
    },
    {
      name: "Ana Sofía Martínez Valero",
      role: "Curaduría",
      phrase: "En cada pequeño cambio, hay infinitas posibilidades de transformación",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anasofi%20nuevo-6xyGI5iEXPtbEeL0CWoiC4Af9badDH.png",
      bgColor: "bg-black",
    },
    {
      name: "Hugo Torres Miñón",
      role: "Operaciones",
      phrase: "¡Si vas a SOÑAR, EXAGERA!",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hugo%20nuevo-txTtvykNrkDWsFb7v2yJq7eXNNIPn4.png",
      bgColor: "bg-[#E62B1E]",
    },
    {
      name: "Daniela Garza Valdés",
      role: "Alianzas/Patrocinios",
      phrase: "Lo imposible solo tarda un poco más",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dani%20nuevo-10ed8pSvP631A5eZTWKz1vDWbu08ZK.png",
      bgColor: "bg-black",
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MESA.png-9kX4i5Zf09K9KUhPPsh5mv9awkV2YE.jpeg"
                alt="Equipo completo TEDx Tecnológico de Monterrey"
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="group perspective-1000">
                <div className="relative w-full h-[680px] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                  {/* Frente de la tarjeta */}
                  <div
                    className={`absolute inset-0 ${member.bgColor} rounded-2xl overflow-hidden backface-hidden shadow-xl flex flex-col p-6`}
                  >
                    {/* Foto grande en la parte superior */}
                    <div className="w-full flex-1 flex items-center justify-center mb-4">
                      <div className="w-full h-[480px] rounded-xl overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={350}
                          height={480}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Nombre y puesto en la parte inferior */}
                    <div className="text-center text-white pb-2">
                      <h3 className="text-2xl font-bold mb-1 leading-tight">{member.name}</h3>
                      <p className="text-sm uppercase tracking-wide opacity-90">{member.role}</p>
                    </div>
                  </div>

                  {/* Reverso de la tarjeta */}
                  <div
                    className={`absolute inset-0 ${member.bgColor} rounded-2xl backface-hidden rotate-y-180 shadow-xl p-8 flex flex-col justify-center items-center text-white`}
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
                      <p className="text-base italic mb-6 leading-relaxed">"{member.phrase}"</p>
                      <p className="text-base leading-relaxed">Biografía</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </main>
  )
}
