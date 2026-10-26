import { ArrowDown, ArrowUpRight, Menu, ShoppingBag, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SemanticSearch } from '@/components/semantic-search'

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2 text-xl font-black tracking-tight"><span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Sparkles className="size-4" aria-hidden="true" /></span>Zaprunner</a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex"><a href="#buscador" className="transition-colors hover:text-foreground">Buscar zapatillas</a><a href="#ranking" className="transition-colors hover:text-foreground">Tendencias</a><a href="#about" className="transition-colors hover:text-foreground">Nuestra misión</a></nav>
        <div className="flex items-center gap-2"><Button variant="ghost" size="icon" aria-label="Abrir menú" className="md:hidden"><Menu aria-hidden="true" /></Button><Button variant="outline" size="icon" aria-label="Ver bolsa de compras" className="rounded-full"><ShoppingBag aria-hidden="true" /></Button></div>
      </header>
      <section id="inicio" className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 sm:px-8 md:grid-cols-[1.03fr_.97fr] md:items-center md:pb-24 md:pt-20">
        <div className="relative z-10 flex flex-col items-start gap-6">
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary"><span className="size-2 rounded-full bg-primary" /> Selección inteligente 2025</div>
          <h1 className="max-w-2xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-7xl">Corre hacia lo que <span className="text-primary">te mueve.</span></h1>
          <p className="max-w-lg text-pretty text-base leading-7 text-muted-foreground sm:text-lg">Tu próxima zapatilla favorita no se busca por filtros. Se encuentra cuando nos cuentas qué quieres hacer.</p>
          <a href="#buscador" className="group inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">Explorar colección <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" /></a>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground"><div className="flex -space-x-2"><span className="size-8 rounded-full border-2 border-background bg-secondary" /><span className="size-8 rounded-full border-2 border-background bg-muted" /><span className="size-8 rounded-full border-2 border-background bg-accent" /></div><span>+2,000 runners encontraron su match</span></div>
        </div>
        <div id="ranking" className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-primary p-5 sm:min-h-[510px] sm:p-8">
          <div className="absolute -right-10 -top-10 size-52 rounded-full border-[32px] border-primary-foreground/10" /><div className="absolute -bottom-16 -left-16 size-64 rounded-full border-[40px] border-primary-foreground/10" />
          <div className="relative flex h-full flex-col justify-between gap-12 text-primary-foreground"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/70">Top ranked</p><h2 className="mt-2 text-3xl font-black tracking-tight">Para tus mejores días.</h2></div><span className="rounded-full bg-primary-foreground/15 px-3 py-1.5 text-xs font-semibold">01 / 03</span></div><div className="relative mx-auto w-full max-w-sm"><div className="absolute inset-x-8 bottom-2 h-10 rounded-[50%] bg-primary-foreground/20 blur-xl" /><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90" alt="Zapatilla deportiva roja destacada" className="relative aspect-square w-full rounded-[2rem] object-cover shadow-2xl rotate-[-8deg] transition-transform duration-500 hover:rotate-0" /></div><div className="flex items-end justify-between"><div><p className="text-sm text-primary-foreground/70">Más buscada para running</p><p className="mt-1 text-xl font-bold">Cloudswift 3 · On</p></div><ArrowUpRight className="size-6" aria-hidden="true" /></div></div>
        </div>
      </section>
      <SemanticSearch />
      <footer id="about" className="border-t border-border bg-secondary/40"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8"><p className="font-semibold text-foreground">Zaprunner</p><p>La búsqueda de tu próximo movimiento.</p><p>© 2025 Zaprunner. Hecho para moverse.</p></div></footer>
    </main>
  )
}
