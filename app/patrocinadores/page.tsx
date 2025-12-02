import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"

export default function PatrocinadoresPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8">NUESTROS PATROCINADORES</h1>

          <Card className="mb-12">
            <CardContent className="p-12">
              <Building2 className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-muted-foreground mb-4">Próximamente</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estamos trabajando para establecer alianzas estratégicas con empresas y organizaciones que compartan
                nuestra visión de difundir ideas que vale la pena compartir.
              </p>
            </CardContent>
          </Card>

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
