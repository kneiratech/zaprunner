import type { Product } from '@/components/products'

const keywordGroups = [
  ['correr', 'running', 'comod', 'marat', 'asfalto'],
  ['montaña', 'outdoor', 'sender', 'trekking', 'trail'],
  ['pesas', 'entrenar', 'gym', 'fuerza', 'crossfit'],
  ['caminar', 'ciudad', 'urbano', 'diario', 'pasear'],
]

export function semanticSearch(query: string, products: Product[]) {
  const normalized = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const terms = normalized.split(/\s+/).filter(Boolean)

  return products
    .map((product) => {
      const searchable = `${product.name} ${product.brand} ${product.category} ${product.description} ${product.tags.join(' ')}`.toLowerCase()
      const directMatches = terms.filter((term) => searchable.includes(term)).length
      const groupMatches = keywordGroups.filter((group) =>
        group.some((keyword) => terms.some((term) => term.includes(keyword) || keyword.includes(term))) &&
        group.some((keyword) => searchable.includes(keyword)),
      ).length
      const score = Math.min(98, Math.max(58, 62 + directMatches * 7 + groupMatches * 10))
      return { ...product, score }
    })
    .sort((a, b) => b.score - a.score)
}

export const quickSearches = [
  'Quiero zapatillas cómodas para correr',
  'Necesito calzado para ir a la montaña',
  'Busco algo para entrenar con pesas',
  'Quiero zapatillas para caminar por la ciudad',
]

export const defaultSearch = quickSearches[0]

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export type SearchStatus = 'idle' | 'loading-model' | 'analyzing' | 'done'
