'use client'

import { useEffect, useState } from 'react'
import { BrainCircuit, LoaderCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ProductCard } from './product-card'
import { products } from './products'
import { defaultSearch, quickSearches, semanticSearch, type SearchStatus, wait } from '@/lib/semantic-search'
import { SearchBar } from './searchbar'

export function SemanticSearch() {
  const [query, setQuery] = useState(defaultSearch)
  const [results, setResults] = useState(() => semanticSearch(defaultSearch, products))
  const [status, setStatus] = useState<SearchStatus>('loading-model')

  useEffect(() => {
    const timer = setTimeout(() => setStatus('idle'), 1300)
    return () => clearTimeout(timer)
  }, [])

  async function handleSearch() {
    if (!query.trim() || status === 'analyzing' || status === 'loading-model') return
    setStatus('analyzing')
    await wait(900)
    setResults(semanticSearch(query, products))
    setStatus('done')
    setTimeout(() => setStatus('idle'), 300)
  }

  return (
    <section id="buscador" className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 pb-24 pt-16 sm:px-8 lg:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="mb-5 rounded-full px-4 py-2 text-primary"><BrainCircuit className="mr-2 size-4" aria-hidden="true" /> Búsqueda con IA</Badge>
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">Encuentra tu próximo par <span className="text-primary">por cómo se siente.</span></h2>
        <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">Describe tu plan, tu ritmo o el terreno. Nuestro buscador entiende el significado y conecta tus necesidades con el par ideal.</p>
      </div>
      <div className="mx-auto w-full max-w-4xl">
        <SearchBar value={query} onChange={setQuery} onSubmit={handleSearch} disabled={status === 'loading-model' || status === 'analyzing'} />
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {quickSearches.map((example) => <button key={example} type="button" onClick={() => setQuery(example)} className="rounded-full border border-border bg-background px-3 py-2 text-left text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary">{example}</button>)}
        </div>
      </div>
      <div aria-live="polite" className="flex min-h-8 items-center justify-center gap-2 text-sm font-medium text-primary">
        {(status === 'loading-model' || status === 'analyzing') && <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />}
        {status === 'loading-model' && 'Cargando modelo de IA'}
        {status === 'analyzing' && 'Analizando significado de tu búsqueda'}
      </div>
      <div className="flex flex-col gap-5 pt-3 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-sm font-semibold text-primary">Resultados para</p><h3 className="mt-1 text-2xl font-bold tracking-tight">“{query}”</h3></div>
        <p className="text-sm text-muted-foreground">{results.length} productos encontrados · ordenados por relevancia</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{results.map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </section>
  )
}
