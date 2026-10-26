export type Product = {
  id: string
  name: string
  brand: string
  category: string
  price: number
  description: string
  image: string
  tags: string[]
}

export const products: Product[] = [
  {
    id: 'cloudswift-3', name: 'Cloudswift 3', brand: 'On', category: 'Running', price: 549,
    description: 'Amortiguación suave y respuesta ligera para tus kilómetros diarios en ciudad.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85', tags: ['correr', 'running', 'ciudad', 'comodidad'],
  },
  {
    id: 'terrex-ax4', name: 'Terrex AX4', brand: 'Adidas', category: 'Outdoor', price: 479,
    description: 'Tracción firme y protección para explorar senderos, montaña y rutas exigentes.',
    image: 'https://images.unsplash.com/photo-1554135755-2b9b4f3d5f8e?auto=format&fit=crop&w=900&q=85', tags: ['montaña', 'senderismo', 'outdoor', 'trail'],
  },
  {
    id: 'metcon-9', name: 'Metcon 9', brand: 'Nike', category: 'Training', price: 429,
    description: 'Estabilidad y soporte para tus sesiones de fuerza, pesas y entrenamiento funcional.',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85', tags: ['pesas', 'gym', 'entrenar', 'fuerza'],
  },
  {
    id: '574-core', name: '574 Core', brand: 'New Balance', category: 'Lifestyle', price: 359,
    description: 'El clásico que combina confort y estilo para acompañarte todos los días.',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85', tags: ['caminar', 'ciudad', 'urbano', 'diario'],
  },
  {
    id: 'pegasus-41', name: 'Pegasus 41', brand: 'Nike', category: 'Running', price: 399,
    description: 'Sensación elástica y cómoda para entrenamientos de running de cualquier distancia.',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85', tags: ['correr', 'running', 'entrenar', 'comodidad'],
  },
  {
    id: 'speedcross-6', name: 'Speedcross 6', brand: 'Salomon', category: 'Trail', price: 519,
    description: 'Agarre agresivo y ajuste seguro para moverte rápido fuera de la ciudad.',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85', tags: ['montaña', 'trail', 'senderismo', 'outdoor'],
  },
]
