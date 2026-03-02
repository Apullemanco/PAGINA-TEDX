"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Mail, Ticket, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  const menuItems = [
    { href: "/", label: t("INICIO", "HOME") },
    { href: "/speakers", label: "SPEAKERS" },
    { href: "/horario", label: t("HORARIO", "SCHEDULE") },
    { href: "/acerca-de-ted", label: t("ACERCA DE TED", "ABOUT TED") },
    { href: "/equipo", label: t("EQUIPO", "TEAM") },
    { href: "/patrocinadores", label: t("PATROCINADORES", "SPONSORS") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo-black.png"
                alt="TEDx Tecnológico de Monterrey"
                width={280}
                height={93}
                className="h-20 w-auto transition-transform hover:scale-105"
                priority
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <nav className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-900 hover:text-red-600 transition-colors duration-200 hover:scale-105 transform whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex flex-1 justify-end items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-red-600 transition-all duration-300 gap-1.5"
            >
              <Globe className="h-4 w-4" />
              {language === "es" ? "EN" : "ES"}
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50 transition-all duration-300 bg-transparent"
            >
              <Link href="/contacto" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {t("Contacto", "Contact")}
              </Link>
            </Button>
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a 
                href="https://eventos.tec.mx/s/lt-event?language=es_MX&id=a5uUG000000LhQ9YAK&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnhNu9ATLig8roBX6AkoAZHu6g8-7MhgUd49kaWyBu4va82nr5c0C9m-WLT6g_aem_vWu7nzVT3NNVXsoooPMC7w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Ticket className="h-4 w-4" />
                {t("Boletos", "Tickets")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-900 hover:text-red-600 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className="w-full text-gray-700 hover:text-red-600 transition-all duration-300 gap-2"
              >
                <Globe className="h-4 w-4" />
                {language === "es" ? "English" : "Espanol"}
              </Button>
              <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 w-full bg-transparent">
                <Link
                  href="/contacto"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="h-4 w-4" />
                  {t("Contacto", "Contact")}
                </Link>
              </Button>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white shadow-lg w-full">
                <a
                  href="https://eventos.tec.mx/s/lt-event?language=es_MX&id=a5uUG000000LhQ9YAK&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnhNu9ATLig8roBX6AkoAZHu6g8-7MhgUd49kaWyBu4va82nr5c0C9m-WLT6g_aem_vWu7nzVT3NNVXsoooPMC7w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Ticket className="h-4 w-4" />
                  {t("Boletos", "Tickets")}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
