import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const sponsors = [
  { nombre: "Coahuila Pa' Delante", logo: "/images/sponsors/coahuila.jpg" },
  { nombre: "Soltran", logo: "/images/sponsors/soltran.png" },
  { nombre: "Juan Rodriguez DMS3 - Diseno de Madera", logo: "/images/sponsors/diseno-madera.jpg" },
  { nombre: "Museo del Desierto", logo: "/images/sponsors/museo-desierto.png" },
  { nombre: "Pepewates", logo: "/images/sponsors/pepewates.png" },
  { nombre: "Notaria 8 Ocho", logo: "/images/sponsors/notaria8.jpg" },
  { nombre: "Promanuez", logo: "/images/sponsors/promanuez.jpg" },
  { nombre: "Doctor", logo: "/images/sponsors/doctor.png" },
]

export default function PatrocinadoresPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">NUESTROS PATROCINADORES</h1>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            Gracias a nuestros patrocinadores por hacer posible este evento y compartir nuestra
            vision de difundir ideas que vale la pena compartir.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.nombre}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex items-center justify-center border border-gray-100"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.nombre}
                  width={220}
                  height={220}
                  className="object-contain max-h-36 w-auto"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-[#E62B1E] hover:bg-[#C62317] text-white">
              <a href="mailto:tedxtecnologicodemonterrey@gmail.com?subject=Interés en Patrocinio TEDx Tecnológico de Monterrey">
                <Mail className="mr-2 h-5 w-5" />
                Conviértete en Patrocinador
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
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
