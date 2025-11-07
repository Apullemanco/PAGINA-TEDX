import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function EquipoPage() {
  const teamMembers = [
    {
      name: "David Gil Alvarado",
      role: "Organizador",
      quote: "Las manecillas marcan los minutos, pero tu marcas lo que significan",
      image: "/images/davidga.jpeg",
    },
    {
      name: "Claudia Sofía López Espinosa",
      role: "Co-organizadora",
      quote: "Nada en la vida es estático. Somos átomos que siempre estan en constante vibración",
      image: "/images/clau.jpeg",
    },
    {
      name: "David Escudero Elizondo",
      role: "Marketing/Comunicaciones",
      quote: "El tiempo va a pasar de todos modos, haz lo mejor que puedas con él",
      image: "/images/davide.jpeg",
    },
    {
      name: "Ana Sofía Martínez Valero",
      role: "Curaduría",
      quote: "En cada pequeño cambio, hay infinitas posibilidades de transformación",
      image: "/images/ana-sofi.jpeg",
    },
    {
      name: "Hugo Torres Miñón",
      role: "Operaciones",
      quote: "¡Si vas a SOÑAR, EXAGERA!",
      image: "/images/hugo.jpeg",
    },
    {
      name: "Daniela Garza Valdés",
      role: "Alianzas/Patrocinios",
      quote: "Lo imposible solo tarda un poco más",
      image: "/images/dani.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-center mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-[#E62B1E] to-[#FF4136] bg-clip-text text-transparent">
                Nuestro Equipo
              </span>
            </h1>
            <p className="text-center text-xl text-muted-foreground mb-16 animate-fade-in-up">
              Estudiantes apasionados creando experiencias transformadoras
            </p>

            {/* Team Photo Section */}
            <div className="mb-20 animate-fade-in-up">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/mesa.jpeg"
                  alt="Equipo organizador TEDxTecnológico de Monterrey"
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover object-[65%_40%] scale-100"
                />
              </div>
            </div>

            {/* Individual Team Members */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {teamMembers.map((member, index) => (
                <div key={index} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="p-6 text-center">
                    {/* Photo without hover effects */}
                    <div className="relative w-40 h-40 mx-auto mb-4">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover object-[55%_45%] scale-150"
                        />
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>

                    {/* Role */}
                    <p className="text-sm font-semibold text-[#E62B1E] uppercase tracking-wide mb-3">{member.role}</p>

                    {/* Separator */}
                    <div className="w-12 h-1 bg-gradient-to-r from-[#E62B1E] to-[#FF4136] mx-auto mb-4 rounded-full"></div>

                    {/* Quote */}
                    <p className="text-muted-foreground italic text-sm leading-relaxed">"{member.quote}"</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Description */}
            <div className="animate-fade-in-up">
              <Card className="bg-gradient-to-br from-gray-50 to-white border-2 hover:shadow-2xl transition-shadow duration-500">
                <CardContent className="p-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-1 w-16 bg-[#E62B1E] rounded-full"></div>
                    <h2 className="text-3xl font-bold text-center mx-4">Estudiantes Apasionados por las Ideas</h2>
                    <div className="h-1 w-16 bg-[#E62B1E] rounded-full"></div>
                  </div>
                  <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                    Nuestro equipo está conformado por estudiantes del Tecnológico de Monterrey Campus Saltillo, unidos
                    por la pasión de crear un evento que inspire y conecte a nuestra comunidad. Cada miembro aporta su
                    talento único para hacer realidad esta experiencia transformadora.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
