import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

export default function EquipoPage() {
  const teamMembers = [
    { name: "Nombre del Organizador 1", quote: "PON TU FRASE AQUI" },
    { name: "Nombre del Organizador 2", quote: "PON TU FRASE AQUI" },
    { name: "Nombre del Organizador 3", quote: "PON TU FRASE AQUI" },
    { name: "Nombre del Organizador 4", quote: "PON TU FRASE AQUI" },
    { name: "Nombre del Organizador 5", quote: "PON TU FRASE AQUI" },
    { name: "Nombre del Organizador 6", quote: "PON TU FRASE AQUI" },
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
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center">
                      <Users className="h-24 w-24 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-foreground mb-2">Foto del Equipo Organizador</h3>
                      <p className="text-muted-foreground">Próximamente - Foto grupal de todos los organizadores</p>
                    </div>
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
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary/60" />
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
