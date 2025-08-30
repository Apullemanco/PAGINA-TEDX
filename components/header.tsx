"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "INICIO" },
    { href: "/speakers", label: "SPEAKERS" },
    { href: "/acerca-de-ted", label: "ACERCA DE TED" },
    { href: "/equipo", label: "EQUIPO" },
    { href: "/patrocinadores", label: "PATROCINADORES" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo-black.png"
                alt="TEDx Tecnológico de Monterrey"
                width={240}
                height={80}
                className="h-16 w-auto transition-transform hover:scale-105"
                priority
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <nav className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex flex-1 justify-end"></div>

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
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
