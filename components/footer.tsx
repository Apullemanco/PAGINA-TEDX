import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-sm text-gray-300 dark:text-gray-700 leading-relaxed max-w-4xl">
            Este evento TEDx independiente se realiza bajo licencia de TED. En el espíritu de las ideas que vale la pena
            difundir, TEDx es un programa de eventos locales autoorganizados que reúne a las personas para compartir una
            experiencia similar a la de TED. En un evento TEDx, el video de TED Talks y los oradores en vivo se combinan
            para generar una discusión y una conexión profundas. Estos eventos locales autoorganizados tienen la marca
            TEDx, donde x = evento TED organizado de forma independiente. La Conferencia TED brinda orientación general
            para el programa TEDx, pero los eventos individuales de TEDx son autoorganizados. (Sujeto a ciertas reglas y
            regulaciones.)
          </p>
        </div>

        {/* Links */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-6">
            <Link
              href="/preguntas-frecuentes"
              className="text-sm text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors"
            >
              Preguntas frecuentes
            </Link>
            <Link
              href="/terminos"
              className="text-sm text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors"
            >
              Términos y condiciones
            </Link>
            <Link
              href="/privacidad"
              className="text-sm text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors"
            >
              Aviso de privacidad
            </Link>
            <Link
              href="/contacto"
              className="text-sm text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex space-x-4">
            <Link
              href="#"
              className="w-10 h-10 bg-white text-black dark:bg-black dark:text-white rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-white text-black dark:bg-black dark:text-white rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-white text-black dark:bg-black dark:text-white rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-white text-black dark:bg-black dark:text-white rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="text-xs font-bold">TT</div>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-200 pt-8">
          <p className="text-sm text-gray-300 dark:text-gray-700">
            2025-2026 TECNOLÓGICO DE MONTERREY SALTILLO – TODOS LOS DERECHOS RESERVADOS TEDx
          </p>
        </div>
      </div>
    </footer>
  )
}
