"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, MapPin, Users, Lightbulb, Ticket, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/context/language-context"

export default function HomePage() {
  const { t } = useLanguage()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const eventDate = new Date("2026-02-27T12:00:00").getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/images/tedx.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E62B1E] to-[#FF4136] blur-3xl opacity-50 animate-pulse"></div>
                <h1 className="relative text-7xl lg:text-9xl font-black tracking-tight">
                  <span className="text-white">TED</span>
                  <span className="bg-gradient-to-r from-[#E62B1E] to-[#FF4136] bg-clip-text text-transparent">x</span>
                </h1>
              </div>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 text-balance">Tecnológico de Monterrey</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-1 w-12 bg-[#E62B1E] rounded-full"></div>
              <p className="text-xl lg:text-2xl text-[#E62B1E] font-semibold">Destellos del Desierto</p>
              <div className="h-1 w-12 bg-[#E62B1E] rounded-full"></div>
            </div>

            <p className="text-lg lg:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
              {t(
                "Únete a nosotros el ",
                "Join us on "
              )}
              <span className="font-bold text-[#E62B1E]">{t("27 de febrero de 2026", "February 27, 2026")}</span>
              {t(
                " para una experiencia única de ideas innovadoras, inspiración y conexión en el Campus Saltillo del Tecnológico de Monterrey.",
                " for a unique experience of innovative ideas, inspiration and connection at the Saltillo Campus of Tecnológico de Monterrey."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#E62B1E] to-[#FF4136] hover:from-[#C62616] hover:to-[#E62B1E] text-white shadow-2xl hover:shadow-[0_0_40px_rgba(230,43,30,0.5)] transition-all duration-300 text-xl px-12 py-8 group animate-pulse hover:animate-none font-bold"
                asChild
              >
                <a 
                  href="https://eventos.tec.mx/s/lt-event?language=es_MX&id=a5uUG000000LhQ9YAK&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnhNu9ATLig8roBX6AkoAZHu6g8-7MhgUd49kaWyBu4va82nr5c0C9m-WLT6g_aem_vWu7nzVT3NNVXsoooPMC7w" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Ticket className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  {t("Compra tus Boletos", "Get Your Tickets")}
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#E62B1E] to-[#FF4136]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">{t("Cuenta Regresiva para el Evento", "Event Countdown")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-5xl lg:text-6xl font-black mb-2">{timeLeft.days}</div>
                <div className="text-sm lg:text-base uppercase tracking-wider font-semibold">{t("Días", "Days")}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-5xl lg:text-6xl font-black mb-2">{timeLeft.hours}</div>
                <div className="text-sm lg:text-base uppercase tracking-wider font-semibold">{t("Horas", "Hours")}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-5xl lg:text-6xl font-black mb-2">{timeLeft.minutes}</div>
                <div className="text-sm lg:text-base uppercase tracking-wider font-semibold">{t("Minutos", "Minutes")}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-5xl lg:text-6xl font-black mb-2">{timeLeft.seconds}</div>
                <div className="text-sm lg:text-base uppercase tracking-wider font-semibold">{t("Segundos", "Seconds")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 animate-slide-in-left border-2 hover:border-[#E62B1E] overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E62B1E]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E62B1E]/10 group-hover:bg-[#E62B1E]/20 transition-colors mb-4">
                    <Calendar className="h-10 w-10 text-[#E62B1E]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("Fecha", "Date")}</h3>
                  <p className="text-2xl font-bold text-[#E62B1E]">{t("27 de Febrero", "February 27")}</p>
                  <p className="text-sm text-muted-foreground mt-2">2026</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-2xl transition-all duration-500 animate-slide-in-left border-2 hover:border-[#E62B1E] overflow-hidden"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E62B1E]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E62B1E]/10 group-hover:bg-[#E62B1E]/20 transition-colors mb-4">
                    <MapPin className="h-10 w-10 text-[#E62B1E]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("Ubicación", "Location")}</h3>
                  <p className="text-lg font-semibold text-foreground">Tecnológico de Monterrey</p>
                  <p className="text-sm text-muted-foreground mt-2">Campus Saltillo</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-2xl transition-all duration-500 animate-slide-in-left border-2 hover:border-[#E62B1E] overflow-hidden"
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E62B1E]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E62B1E]/10 group-hover:bg-[#E62B1E]/20 transition-colors mb-4">
                    <Users className="h-10 w-10 text-[#E62B1E]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("Evento", "Event")}</h3>
                  <p className="text-lg font-semibold text-foreground">TEDx</p>
                  <p className="text-sm text-muted-foreground mt-2">{t("Evento independiente", "Independent event")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#E62B1E] to-[#FF4136] mb-6 shadow-xl">
                <Lightbulb className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#E62B1E] to-[#FF4136] bg-clip-text text-transparent">
                  {t("Ideas que Transforman", "Ideas that Transform")}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t(
                  "TEDxTecnológico de Monterrey es más que un evento, es una plataforma donde estudiantes, académicos y líderes de pensamiento se reúnen para compartir ideas que pueden cambiar el mundo.",
                  "TEDxTecnológico de Monterrey is more than an event, it's a platform where students, academics and thought leaders come together to share ideas that can change the world."
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#E62B1E] overflow-hidden">
                <CardContent className="p-8 relative h-full">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E62B1E] to-[#FF4136]"></div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-[#E62B1E]">•</span> {t("Nuestra Misión", "Our Mission")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(
                      "Crear un espacio de diálogo e inspiración donde las ideas innovadoras encuentren su voz y puedan impactar positivamente en nuestra comunidad.",
                      "Create a space for dialogue and inspiration where innovative ideas find their voice and can positively impact our community."
                    )}
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#E62B1E] overflow-hidden">
                <CardContent className="p-8 relative h-full">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E62B1E] to-[#FF4136]"></div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-[#E62B1E]">•</span> {t("Nuestra Visión", "Our Vision")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(
                      "Ser el evento TEDx más influyente del noreste de México, conectando mentes brillantes y fomentando la innovación desde el Tecnológico de Monterrey.",
                      "Be the most influential TEDx event in northeastern Mexico, connecting brilliant minds and fostering innovation from Tecnológico de Monterrey."
                    )}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#E62B1E] to-[#FF4136] bg-clip-text text-transparent">
                  {t("Ubicación del Evento", "Event Location")}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tecnológico de Monterrey, Campus Saltillo
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#E62B1E]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.2882775287844!2d-100.97787682421786!3d25.448317926923746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868812ac2643084d%3A0x7ca23e9fab4fc5e2!2sInstituto%20Tecnol%C3%B3gico%20y%20de%20Estudios%20Superiores%20de%20Monterrey!5e0!3m2!1ses!2smx!4v1732762443421!5m2!1ses!2smx"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t("¿Listo para ser parte de algo extraordinario?", "Ready to be part of something extraordinary?")}</h2>
            <p className="text-lg mb-8 text-white/90">
              {t(
                "Mantente atento a nuestras próximas actualizaciones y no te pierdas la oportunidad de vivir TEDx.",
                "Stay tuned for our upcoming updates and don't miss the opportunity to experience TEDx."
              )}
            </p>
            <Button
              size="lg"
              className="bg-[#E62B1E] text-white hover:bg-[#C62616] shadow-lg text-lg px-8 py-6 font-semibold"
              asChild
            >
              <Link href="/contacto">
                {t("Contáctanos", "Contact Us")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
