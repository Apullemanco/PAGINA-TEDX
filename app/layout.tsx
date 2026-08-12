import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/context/language-context"
import { SiteConfigProvider } from "@/context/site-config-context"
import { getSiteConfig } from "@/lib/site-config"
import "./globals.css"

export const metadata: Metadata = {
  title: "TEDxTecnológico de Monterrey | Saltillo 2026",
  description: "Evento TEDx organizado por estudiantes del Tecnológico de Monterrey Campus Saltillo",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteConfig = await getSiteConfig()
  return (
    <html lang="es">
      <body className="font-sans bg-white text-gray-900 antialiased">
        <LanguageProvider>
          <SiteConfigProvider initialConfig={siteConfig}>
            <Header />
            <Suspense fallback={null}>{children}</Suspense>
            <Footer />
          </SiteConfigProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
