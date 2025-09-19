import { Clock, Coffee, Users, Mic } from "lucide-react"

export default function HorarioPage() {
  const horarioItems = [
    {
      titulo: "Registro",
      hora: "12:00 pm - 12:30 pm",
      descripcion: "Registro de asistentes y entrega de materiales",
      icono: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      titulo: "Primera sesión",
      hora: "12:30 pm - 2:00 pm",
      descripcion: "Charlas inspiradoras de nuestros speakers",
      icono: Mic,
      color: "bg-red-100 text-red-600",
    },
    {
      titulo: "Break",
      hora: "2:00 pm - 3:00 pm",
      descripcion: "Tiempo para networking y refrigerio",
      icono: Coffee,
      color: "bg-green-100 text-green-600",
    },
    {
      titulo: "Segunda sesión",
      hora: "3:00 pm - 4:30 pm",
      descripcion: "Continuamos con más charlas transformadoras",
      icono: Mic,
      color: "bg-red-100 text-red-600",
    },
    {
      titulo: "Break",
      hora: "4:30 pm - 5:00 pm",
      descripcion: "Pausa para conectar con otros asistentes",
      icono: Coffee,
      color: "bg-green-100 text-green-600",
    },
    {
      titulo: "Tercera sesión",
      hora: "5:00 pm - 6:30 pm",
      descripción: "Cierre del evento con las últimas presentaciones",
      icono: Mic,
      color: "bg-red-100 text-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-foreground">Horario del Evento</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoce la agenda completa de TEDxTecnológico de Monterrey
          </p>
          <p className="text-sm text-muted-foreground mt-2">Horario de México</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {horarioItems.map((item, index) => {
              const IconComponent = item.icono
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-lg border border-border p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${item.color} flex-shrink-0`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{item.titulo}</h3>
                        <span className="text-lg font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {item.hora}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{item.descripcion}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-card rounded-xl shadow-lg border border-border p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">¡No te pierdas ningún momento!</h3>
              <p className="text-muted-foreground mb-6">
                Te recomendamos llegar 15 minutos antes del registro para asegurar tu lugar y disfrutar de toda la
                experiencia TEDx.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  Sesiones de charlas
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  Breaks y networking
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  Registro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
