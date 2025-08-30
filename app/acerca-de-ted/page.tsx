import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Zap } from "lucide-react"
import Link from "next/link"

export default function AcercaDeTedPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in-up">
              Acerca de TED
            </h1>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-slide-in-left">
                <Card className="h-full border-2 hover:border-black dark:hover:border-white transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Lightbulb className="h-12 w-12 text-primary mr-4" />
                      <h2 className="text-3xl font-bold text-foreground">Acerca de TED</h2>
                    </div>

                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        TED es una organización sin fines de lucro dedicada a difundir ideas, a menudo en forma de
                        charlas breves pronunciadas por destacados pensadores y hacedores. Muchas de estas charlas se
                        dan en conferencias TED, salones TED íntimos y miles de eventos TEDx organizados de forma
                        independiente en todo el mundo. Los videos de estas charlas están disponibles, gratis, en{" "}
                        <Link
                          href="https://www.ted.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          TED.com
                        </Link>{" "}
                        y otras plataformas.
                      </p>

                      <p>
                        Las versiones de audio de TED Talks se publican en{" "}
                        <Link
                          href="https://www.ted.com/podcasts/ted-talks-daily"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          TED Talks Daily
                        </Link>
                        , disponibles en todas las plataformas de podcast. Las iniciativas abiertas y gratuitas de TED
                        para difundir ideas incluyen{" "}
                        <Link
                          href="https://www.ted.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          TED.com
                        </Link>
                        , donde se publican diariamente nuevos videos de TED Talk;{" "}
                        <Link
                          href="https://www.ted.com/about/programs-initiatives/tedx-program"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          TEDx
                        </Link>
                        , que otorga licencias a miles de personas y grupos para organizar eventos de estilo TED locales
                        y autoorganizados en todo el mundo.
                      </p>

                      <p>
                        El programa{" "}
                        <Link
                          href="https://www.ted.com/about/programs-initiatives/ted-fellows-program"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          TED Fellows
                        </Link>{" "}
                        selecciona innovadores de todo el mundo para amplificar el impacto de sus notables proyectos y
                        actividades;{" "}
                        <Link
                          href="https://audaciousproject.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          The Audacious Project
                        </Link>
                        , que emerge y financia ideas críticas que tienen el potencial de impactar millones de vidas;{" "}
                        <Link
                          href="https://www.ted.com/about/programs-initiatives/ted-translators"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          Programa de traductores de TED
                        </Link>
                        , que subtitula las charlas de TED para que las grandes ideas puedan difundirse a través de
                        idiomas y fronteras; y la iniciativa educativa{" "}
                        <Link
                          href="https://ed.ted.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          TED-Ed
                        </Link>
                        .
                      </p>

                      <p>
                        TED también ofrece{" "}
                        <Link
                          href="https://www.ted.com/about/programs-initiatives/ted-at-work"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          TED@Work
                        </Link>
                        , un programa que reinventa las charlas TED para el aprendizaje en el lugar de trabajo. TED
                        también tiene una biblioteca cada vez mayor de podcasts originales, que incluyen{" "}
                        <Link
                          href="https://www.ted.com/podcasts/the-ted-interview"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          The TED Interview
                        </Link>{" "}
                        with Chris Anderson,{" "}
                        <Link
                          href="https://www.ted.com/podcasts/worklife-with-adam-grant"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          WorkLife with Adam Grant
                        </Link>
                        ,{" "}
                        <Link
                          href="https://www.ted.com/podcasts/far-flung"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          Far Flung with Saleem Reshamwala
                        </Link>{" "}
                        y{" "}
                        <Link
                          href="https://www.ted.com/podcasts/how-to-be-a-better-human"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          How to Be a Better Human
                        </Link>
                        .
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                <Card className="h-full border-2 hover:border-black dark:hover:border-white transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Zap className="h-12 w-12 text-red-600 mr-4" />
                      <h2 className="text-3xl font-bold text-foreground">Acerca de TEDx</h2>
                    </div>

                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong className="text-red-600">x = evento organizado de forma independiente</strong>
                      </p>

                      <p>
                        En el espíritu de difundir ideas, TEDx es un programa de eventos locales autoorganizados que
                        reúne a las personas para compartir una experiencia similar a la de TED. En un evento TEDx, el
                        video de TED Talks y los oradores en vivo se combinan para generar una discusión y una conexión
                        profundas. Estos eventos locales autoorganizados tienen la marca TEDx, donde x = evento TED
                        organizado de forma independiente. La Conferencia TED brinda orientación general para el
                        programa TEDx, pero los eventos individuales de TEDx son autoorganizados. (Sujeto a ciertas
                        reglas y regulaciones.)
                      </p>

                      <div className="mt-8">
                        <p className="text-red-600 font-semibold mb-4">Sigue a TED en:</p>
                        <div className="flex flex-wrap gap-4">
                          <Link
                            href="https://twitter.com/tedtalks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium hover:text-red-600 transition-colors"
                          >
                            Twitter
                          </Link>
                          <Link
                            href="https://www.facebook.com/TED"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium hover:text-red-600 transition-colors"
                          >
                            Facebook
                          </Link>
                          <Link
                            href="https://www.instagram.com/ted"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium hover:text-red-600 transition-colors"
                          >
                            Instagram
                          </Link>
                          <Link
                            href="https://www.linkedin.com/company/ted-conferences"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium hover:text-red-600 transition-colors"
                          >
                            LinkedIn
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
