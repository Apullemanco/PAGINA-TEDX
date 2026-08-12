"use client"

import { useEffect, useState } from "react"
import { Plus, Save, Trash2, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useSiteConfig } from "@/context/site-config-context"
import type { SiteConfig, Speaker, ScheduleEvent } from "@/lib/site-config"

const emptySpeaker: Speaker = { imagen: "", nombre: "" }
const emptyEvent: ScheduleEvent = { title: "", time: "", description: "", type: "session" }

export default function ConfiguracionPage() {
  const config = useSiteConfig()
  const [password, setPassword] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [draft, setDraft] = useState<SiteConfig | null>(null)
  const [message, setMessage] = useState("")
  useEffect(() => { if (config && !draft) setDraft(config) }, [config, draft])

  if (!unlocked) return <main className="min-h-screen bg-background flex items-center justify-center p-6"><Card className="w-full max-w-md"><CardHeader><CardTitle>Configuración TEDx</CardTitle></CardHeader><CardContent className="flex flex-col gap-4"><p className="text-muted-foreground">Ingresa la contraseña para editar la edición activa.</p><Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" onKeyDown={(e) => { if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) { if (password === "262310") setUnlocked(true); else setMessage("Contraseña incorrecta") } }} /><Button onClick={() => password === "262310" ? setUnlocked(true) : setMessage("Contraseña incorrecta")}>Entrar</Button>{message && <p className="text-sm text-destructive">{message}</p>}</CardContent></Card></main>

  if (!draft) return <main className="min-h-screen flex items-center justify-center">Cargando configuración...</main>
  const update = (patch: Partial<SiteConfig>) => setDraft({ ...draft, ...patch })
  const save = async () => {
    setMessage("Guardando...")
    const response = await fetch("/api/site-config", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...draft, password }) })
    const data = await response.json()
    if (!response.ok) return setMessage(data.error || "No se pudo guardar")
    setDraft(data); setMessage("Publicado correctamente. La página pública se actualizará en segundos.")
  }
  return <main className="min-h-screen bg-muted/30 py-12"><div className="container mx-auto max-w-5xl px-4 flex flex-col gap-6"><div className="flex flex-wrap items-center justify-between gap-4"><div><h1 className="text-4xl font-bold">Configuración</h1><p className="text-muted-foreground">Edita la edición activa de TEDx sin complicaciones.</p></div><div className="flex gap-2"><Button onClick={save}><Save data-icon="inline-start" />Guardar y publicar</Button><Button variant="outline" onClick={() => setUnlocked(false)}><LogOut data-icon="inline-start" />Salir</Button></div></div><Card><CardHeader><CardTitle>Evento y boletos</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-3"><label className="flex flex-col gap-2 text-sm font-medium">Fecha y hora<Input type="datetime-local" value={draft.event_date.slice(0,16)} onChange={(e) => update({ event_date: new Date(e.target.value).toISOString() })} /></label><label className="flex flex-col gap-2 text-sm font-medium">Botón principal<Input value={draft.ticket_url} onChange={(e) => update({ ticket_url: e.target.value })} placeholder="https://..." /></label><label className="flex flex-col gap-2 text-sm font-medium">Botón secundario<Input value={draft.ticket_secondary_url} onChange={(e) => update({ ticket_secondary_url: e.target.value })} placeholder="https://..." /></label></CardContent></Card><Editor title="Speakers" items={draft.speakers} empty={emptySpeaker} render={(speaker, index) => <div className="grid gap-2 md:grid-cols-[1fr_2fr_auto]"><Input placeholder="Nombre" value={speaker.nombre || ""} onChange={(e) => { const speakers = [...draft.speakers]; speakers[index] = { ...speaker, nombre: e.target.value }; update({ speakers }) }} /><Input placeholder="URL de foto" value={speaker.imagen} onChange={(e) => { const speakers = [...draft.speakers]; speakers[index] = { ...speaker, imagen: e.target.value }; update({ speakers }) }} /><Button variant="outline" size="icon" aria-label="Eliminar speaker" onClick={() => update({ speakers: draft.speakers.filter((_, i) => i !== index) })}><Trash2 /></Button></div>} onAdd={() => update({ speakers: [...draft.speakers, emptySpeaker] })} /><Editor title="Horario" items={draft.schedule} empty={emptyEvent} render={(event, index) => <div className="grid gap-2 md:grid-cols-[1fr_1fr_2fr_auto]"><Input placeholder="Actividad" value={event.title} onChange={(e) => { const schedule = [...draft.schedule]; schedule[index] = { ...event, title: e.target.value }; update({ schedule }) }} /><Input placeholder="Horario" value={event.time} onChange={(e) => { const schedule = [...draft.schedule]; schedule[index] = { ...event, time: e.target.value }; update({ schedule }) }} /><Input placeholder="Descripción" value={event.description} onChange={(e) => { const schedule = [...draft.schedule]; schedule[index] = { ...event, description: e.target.value }; update({ schedule }) }} /><Button variant="outline" size="icon" aria-label="Eliminar evento" onClick={() => update({ schedule: draft.schedule.filter((_, i) => i !== index) })}><Trash2 /></Button></div>} onAdd={() => update({ schedule: [...draft.schedule, emptyEvent] })} /></div></main>
}

function Editor<T extends object>({ title, items, empty, render, onAdd }: { title: string; items: T[]; empty: T; render: (item: T, index: number) => React.ReactNode; onAdd: () => void }) { return <Card><CardHeader className="flex flex-row items-center justify-between"><CardTitle>{title}</CardTitle><Button variant="outline" size="sm" onClick={onAdd}><Plus data-icon="inline-start" />Agregar</Button></CardHeader><CardContent className="flex flex-col gap-3">{items.length ? items.map(render) : <p className="text-muted-foreground">Aún no hay elementos.</p>}</CardContent></Card> }
