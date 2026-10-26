'use client'

import { ArrowRight, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SearchBar({ value, onChange, onSubmit, disabled }: { value: string; onChange: (value: string) => void; onSubmit: () => void; disabled?: boolean }) {
  return (
    <form className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-2 shadow-lg shadow-primary/5 sm:flex-row" onSubmit={(event) => { event.preventDefault(); onSubmit() }}>
      <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
        <Search className="size-5 shrink-0 text-primary" aria-hidden="true" />
        <Input value={value} onChange={(event) => onChange(event.target.value)} disabled={disabled} placeholder="Quiero zapatillas cómodas para salir a correr" aria-label="Describe qué zapatillas estás buscando" className="h-12 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0" />
      </div>
      <Button type="submit" disabled={disabled || !value.trim()} className="h-12 rounded-xl px-6 font-semibold sm:min-w-32">
        Buscar <ArrowRight data-icon="inline-end" aria-hidden="true" />
      </Button>
    </form>
  )
}
