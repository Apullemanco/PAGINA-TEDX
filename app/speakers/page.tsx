import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8">SPEAKERS</h1>
            <h2 className="text-2xl lg:text-3xl text-primary mb-12">PRÓXIMAMENTE</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Estamos trabajando para traerte a los mejores speakers que compartirán ideas innovadoras y
              transformadoras. ¡Mantente atento para conocer quiénes serán nuestros ponentes!
            </p>

            <Button asChild size="lg">
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver al Inicio
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
