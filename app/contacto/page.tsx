import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Mail, Instagram, ArrowLeft } from "lucide-react"

export default function ContactoPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Contacto</h1>
            <p className="text-lg text-muted-foreground">¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#E62B1E] overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E62B1E]/10 group-hover:bg-[#E62B1E]/20 transition-colors mb-6">
                  <Mail className="h-10 w-10 text-[#E62B1E]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Correo Electrónico</h3>
                <a
                  href="mailto:tedxtecnologicodemonterrey@gmail.com"
                  className="text-[#E62B1E] hover:underline text-lg break-all"
                >
                  tedxtecnologicodemonterrey@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#E62B1E] overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E62B1E]/10 group-hover:bg-[#E62B1E]/20 transition-colors mb-6">
                  <Instagram className="h-10 w-10 text-[#E62B1E]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Instagram</h3>
                <a
                  href="https://www.instagram.com/tedxtecnologicodemonterrey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline text-lg"
                >
                  @tedxtecnologicodemonterrey
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-2 bg-transparent">
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver al Inicio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
