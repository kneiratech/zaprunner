import { ArrowUpRight, Heart, Sparkles } from 'lucide-react'
import type { Product } from './products'
import { Button } from '@/components/ui/button'

export function ProductCard({ product }: { product: Product & { score: number } }) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[1.12] overflow-hidden bg-muted">
        <img src={product.image} alt={`${product.brand} ${product.name}`} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
          <Sparkles className="size-3.5 text-primary" aria-hidden="true" /> {product.score}% match
        </div>
        <Button variant="secondary" size="icon" aria-label={`Guardar ${product.name}`} className="absolute right-4 top-4 size-9 rounded-full bg-background/90 backdrop-blur hover:bg-background">
          <Heart className="size-4" aria-hidden="true" />
        </Button>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{product.brand}</p>
            <h3 className="mt-1 text-xl font-bold tracking-tight">{product.name}</h3>
          </div>
          <p className="text-lg font-bold">S/. {product.price}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{product.category}</span>
          <span className="text-xs font-medium text-primary">Similitud semántica</span>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{product.description}</p>
        <Button variant="outline" className="w-full rounded-xl font-semibold">
          Ver producto <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
        </Button>
      </div>
    </article>
  )
}
