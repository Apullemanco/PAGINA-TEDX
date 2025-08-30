"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, MapPin, Users, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              TEDx<span className="text-primary">Tecnológico de Monterrey</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty">
              Ideas que vale la pena difundir
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
              Únete a nosotros en 2026 para una experiencia única de ideas innovadoras, inspiración y conexión en el
              Campus Saltillo del Tecnológico de Monterrey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-glow bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200"
                asChild
              >
                <Link href="https://www.ted.com/tedx/events/66014" target="_blank" rel="noopener noreferrer">
                  Próximamente
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="btn-outline-glow border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black bg-transparent"
              >
                <Link href="/acerca-de-ted">Conoce más sobre TED</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-in-left">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fecha</h3>
                <p className="text-muted-foreground">2026</p>
                <p className="text-sm text-muted-foreground">Fecha por confirmar</p>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
                <p className="text-muted-foreground">Tecnológico de Monterrey</p>
                <p className="text-sm text-muted-foreground">Campus Saltillo</p>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-in-left"
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Evento</h3>
                <p className="text-muted-foreground">TEDx</p>
                <p className="text-sm text-muted-foreground">Evento independiente</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Lightbulb className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Ideas que Transforman</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              TEDxTecnológico de Monterrey es más que un evento, es una plataforma donde estudiantes, académicos y
              líderes de pensamiento se reúnen para compartir ideas que pueden cambiar el mundo.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 border-2 border-muted transition-colors rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Nuestra Misión</h3>
                <p className="text-muted-foreground">
                  Crear un espacio de diálogo e inspiración donde las ideas innovadoras encuentren su voz y puedan
                  impactar positivamente en nuestra comunidad.
                </p>
              </div>
              <div className="p-6 border-2 border-muted transition-colors rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Nuestra Visión</h3>
                <p className="text-muted-foreground">
                  Ser el evento TEDx más influyente del noreste de México, conectando mentes brillantes y fomentando la
                  innovación desde el Tecnológico de Monterrey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
