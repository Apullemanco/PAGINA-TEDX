"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { SiteConfig } from "@/lib/site-config"

const SiteConfigContext = createContext<SiteConfig | null>(null)

export function SiteConfigProvider({ children, initialConfig }: { children: ReactNode; initialConfig: SiteConfig }) {
  const [config, setConfig] = useState(initialConfig)
  useEffect(() => {
    const refresh = async () => {
      const response = await fetch(`/api/site-config?ts=${Date.now()}`, { cache: "no-store" })
      if (response.ok) setConfig(await response.json())
    }
    const interval = window.setInterval(refresh, 5000)
    return () => window.clearInterval(interval)
  }, [])
  return <SiteConfigContext.Provider value={config}>{children}</SiteConfigContext.Provider>
}

export function useSiteConfig() {
  return useContext(SiteConfigContext)
}
