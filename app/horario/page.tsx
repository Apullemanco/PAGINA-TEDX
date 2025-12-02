"use client"

import { Clock } from "lucide-react"
import { useEffect, useState } from "react"

export default function HorarioPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const scheduleEvents = [
    {
      title: "Registro",
      time: "11:30 pm - 12:00 pm",
      description: "Registro de asistentes y entrega de materiales",
      type: "registration",
    },
    {
      title: "Primera sesión",
      time: "12:00 pm - 2:00 pm",
      description: "Charlas inspiradoras de nuestros speakers",
      type: "session",
    },
    {
      title: "Break",
      time: "2:00 pm - 3:00 pm",
      description: "Tiempo para networking y refrigerio",
      type: "break",
    },
    {
      title: "Segunda sesión",
      time: "3:00 pm - 5:00 pm",
      description: "Continuamos con más charlas transformadoras",
      type: "session",
    },
    {
      title: "Break",
      time: "5:00 pm - 6:00 pm",
      description: "Pausa para conectar con otros asistentes",
      type: "break",
    },
    {
      title: "Tercera sesión",
      time: "6:00 pm - 8:00 pm",
      description: "¡No te pierdas ningún momento!",
      type: "session",
    },
  ]

  useEffect(() => {
    const eventDate = new Date("2026-02-27T00:00:00").getTime()

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
    <main className="min-h-screen bg-background">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#E62B1E] to-[#FF4136] mb-6 shadow-xl">
                <Clock className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#E62B1E] to-[#FF4136] bg-clip-text text-transparent">
                  Horario del Evento
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Descubre la experiencia completa de TEDx con charlas inspiradoras y oportunidades de networking
              </p>
              <p className="text-base text-muted-foreground italic">
                Te recomendamos llegar 15 minutos antes del registro para asegurar tu lugar y disfrutar de toda la
                experiencia TEDx.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#E62B1E] to-[#FF4136] text-white">
                      <th className="px-6 py-4 text-left text-lg font-bold">Actividad</th>
                      <th className="px-6 py-4 text-left text-lg font-bold">Horario</th>
                      <th className="px-6 py-4 text-left text-lg font-bold">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleEvents.map((event, index) => (
                      <tr
                        key={index}
                        className={`transition-colors ${
                          event.type === "session"
                            ? "bg-red-50 hover:bg-red-100"
                            : event.type === "break"
                              ? "bg-gray-50 hover:bg-gray-100"
                              : "bg-white hover:bg-gray-50"
                        }`}
                      >
                        <td className="px-6 py-5 font-semibold text-lg border-b border-gray-200">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                event.type === "session"
                                  ? "bg-[#E62B1E]"
                                  : event.type === "break"
                                    ? "bg-black"
                                    : "bg-gray-400"
                              }`}
                            ></div>
                            {event.title}
                          </div>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground font-medium border-b border-gray-200 whitespace-nowrap">
                          {event.time}
                        </td>
                        <td className="px-6 py-5 text-muted-foreground border-b border-gray-200">
                          {event.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-[#E62B1E]/20">
                <div className="w-4 h-4 rounded-full bg-[#E62B1E] mb-3"></div>
                <h3 className="font-bold text-lg mb-2">Sesiones de charlas</h3>
                <p className="text-sm text-muted-foreground">Ideas inspiradoras que vale la pena difundir</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="w-4 h-4 rounded-full bg-black mb-3"></div>
                <h3 className="font-bold text-lg mb-2">Breaks y networking</h3>
                <p className="text-sm text-muted-foreground">Momentos para conectar con la comunidad</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <div className="w-4 h-4 rounded-full bg-gray-400 mb-3"></div>
                <h3 className="font-bold text-lg mb-2">Registro</h3>
                <p className="text-sm text-muted-foreground">Bienvenida y entrega de materiales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#E62B1E] to-[#FF4136]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Cuenta Regresiva para el Evento</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-5xl lg:text-6xl font-black mb-2">{timeLeft.days}</div>
                <div className="text-sm lg:text-base uppercase tracking-wider font-semibold">Días</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-5xl lg:text-6xl font-black mb-2">{timeLeft.hours}</div>
                <div className="text-sm lg:text-base uppercase tracking-wider font-semibold">Horas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-5xl lg:text-6xl font-black mb-2">{timeLeft.minutes}</div>
                <div className="text-sm lg:text-base uppercase tracking-wider font-semibold">Minutos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-5xl lg:text-6xl font-black mb-2">{timeLeft.seconds}</div>
                <div className="text-sm lg:text-base uppercase tracking-wider font-semibold">Segundos</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
