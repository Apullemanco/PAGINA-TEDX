import { createClient } from "@supabase/supabase-js"

export type Speaker = { imagen: string; nombre?: string; bio?: string; cargo?: string }
export type ScheduleEvent = { title: string; time: string; description: string; type?: string }
export type SiteConfig = {
  id: number
  edition_name: string
  edition_tagline: string
  event_date: string
  hero_image: string
  venue_name: string
  venue_detail: string
  intro_text: string
  contact_email: string
  social_links: Record<string, string>
  primary_cta_label: string
  secondary_cta_label: string
  ticket_url: string
  ticket_secondary_url: string
  map_url: string
  speakers: Speaker[]
  schedule: ScheduleEvent[]
  version: number
  updated_at: string
}

const fallbackConfig: SiteConfig = {
  id: 1,
  edition_name: "TEDxTecnológico de Monterrey",
  edition_tagline: "",
  event_date: "2026-11-14T09:00:00-06:00",
  hero_image: "/images/tedx.jpg",
  venue_name: "Tecnológico de Monterrey",
  venue_detail: "Campus Saltillo",
  intro_text: "Ideas que transforman nuestra comunidad.",
  contact_email: "",
  social_links: {},
  primary_cta_label: "Compra tus Boletos",
  secondary_cta_label: "Contáctanos",
  ticket_url: "#",
  ticket_secondary_url: "#",
  map_url: "",
  speakers: [],
  schedule: [],
  version: 1,
  updated_at: new Date(0).toISOString(),
}

function adminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY
  if (!url || !key) throw new Error("Supabase no está configurado")
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } })
}

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const { data, error } = await adminClient().from("site_config").select("*").eq("id", 1).single()
    if (error || !data) return fallbackConfig
    return { ...fallbackConfig, ...data } as SiteConfig
  } catch {
    return fallbackConfig
  }
}

export { fallbackConfig }

export const archiveDestellos = {
  edition_name: "TEDxTecnológico de Monterrey",
  edition_tagline: "Destellos del Desierto",
  event_date: "2026-02-27T12:00:00-06:00",
  venue_name: "Tecnológico de Monterrey",
  venue_detail: "Campus Saltillo",
  hero_image: "/images/tedx.jpg",
  intro_text: "Una edición dedicada a las ideas, voces y encuentros que dejaron huella en nuestra comunidad.",
  speakers: [],
  schedule: [],
}
export type ArchiveConfig = typeof archiveDestellos
