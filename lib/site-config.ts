import { createClient } from "@supabase/supabase-js"

export type Speaker = { imagen: string; nombre?: string }
export type ScheduleEvent = { title: string; time: string; description: string; type?: string }
export type SiteConfig = {
  id: number
  event_date: string
  ticket_url: string
  ticket_secondary_url: string
  speakers: Speaker[]
  schedule: ScheduleEvent[]
  version: number
  updated_at: string
}

const fallbackConfig: SiteConfig = {
  id: 1,
  event_date: "2026-11-14T09:00:00-06:00",
  ticket_url: "#",
  ticket_secondary_url: "#",
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
    return data as SiteConfig
  } catch {
    return fallbackConfig
  }
}

export { fallbackConfig }
