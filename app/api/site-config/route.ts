import { NextResponse } from "next/server"
import { getSiteConfig } from "@/lib/site-config"
import { createClient } from "@supabase/supabase-js"

export const dynamic = "force-dynamic"

export async function GET() {
  return NextResponse.json(await getSiteConfig(), { headers: { "Cache-Control": "no-store" } })
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    if (body.password !== "262310") return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 })
    const current = await getSiteConfig()
    if (body.version !== current.version) return NextResponse.json({ error: "La configuración cambió en otra sesión. Recarga antes de guardar." }, { status: 409 })
    const eventDate = new Date(body.event_date)
    if (Number.isNaN(eventDate.getTime())) return NextResponse.json({ error: "La fecha del evento no es válida" }, { status: 400 })
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY
    if (!url || !key) throw new Error("Supabase no está configurado")
    const supabase = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } })
    const { data, error } = await supabase.from("site_config").update({
      event_date: eventDate.toISOString(),
      ticket_url: String(body.ticket_url || "#"),
      ticket_secondary_url: String(body.ticket_secondary_url || "#"),
      speakers: Array.isArray(body.speakers) ? body.speakers : [],
      schedule: Array.isArray(body.schedule) ? body.schedule : [],
      version: current.version + 1,
      updated_at: new Date().toISOString(),
    }).eq("id", 1).eq("version", current.version).select().single()
    if (error || !data) return NextResponse.json({ error: "No se pudo guardar la configuración" }, { status: 500 })
    return NextResponse.json(data, { headers: { "Cache-Control": "no-store" } })
  } catch {
    return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 })
  }
}
