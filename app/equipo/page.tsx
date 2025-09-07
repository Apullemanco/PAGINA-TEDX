import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function EquipoPage() {
  const teamMembers = [
    {
      name: "David Gil Alvarado",
      quote: "Las manecillas marcan los minutos, pero tu marcas lo que significan",
      image: "/images/davidga.jpeg",
    },
    {
      name: "Claudia Sofía López Espinosa",
      quote: "Nada en la vida es estático. Somos átomos que siempre estan en constante vibración",
      image: "/images/clau.jpeg",
    },
    {
      name: "David Escudero Elizondo",
      quote: "El tiempo va a pasar de todos modos, haz lo mejor que puedas con él",
      image: "/images/davide.jpeg",
    },
    { name: "Ana Sofía Martínez Valero", quote: "PON TU FRASE AQUI", image: "/images/ana-sofi.jpeg" },
    { name: "Hugo Torres Miñón", quote: "PON TU FRASE AQUI", image: "/images/hugo.jpeg" },
    { name: "Daniela Garza Valdés", quote: "Lo imposible solo tarda un poco más", image: "/images/dani.jpeg" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in-up">
              Nuestro Equipo
            </h1>

            {/* Team Photo Section */}
            <div className="mb-16 animate-fade-in-up">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      src="/images/mesa.jpeg"
                      alt="Equipo organizador TEDxTecnológico de Monterrey"
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover object-[65%_40%] scale-100"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Individual Team Members */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="text-center animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Photo Placeholder - Circular and smaller */}
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover object-[55%_45%] scale-150"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">{member.name}</h3>

                  {/* Small separator */}
                  <div className="w-8 h-px bg-primary mx-auto mb-3"></div>

                  {/* Quote */}
                  <p className="text-muted-foreground italic text-sm">"{member.quote}"</p>
                </div>
              ))}
            </div>

            {/* Team Description */}
            <div className="mt-16 text-center animate-fade-in-up">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Estudiantes Apasionados por las Ideas</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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

      <Footer />
    </div>
  )
}
