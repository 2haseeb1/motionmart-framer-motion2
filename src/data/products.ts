export type Product = {
  id: string
  name: string
  price: number
  image: string
  description: string
  rating: number
  reviews: number
  specs?: {
    material: string
    weight: string
    warranty: string
  }
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Aero Backpack",
    price: 89.0,
    image: "https://images.piclumen.com/normal/20250810/23/2e76b25e462245dc9918200aa2f895dc.webp",
    description: "Lightweight everyday backpack with breathable straps.",
    rating: 4.6,
    reviews: 214,
    specs: { material: "Ripstop nylon", weight: "0.9 kg", warranty: "2 years" }
  },
  {
    id: "p2",
    name: "Nimbus Headphones",
    price: 129.0,
    image: "https://images.piclumen.com/normal/20250810/23/173f2dc66e2d41aab1514055260f6bd5.webp",
    description: "Wireless over-ear headphones with rich, balanced sound.",
    rating: 4.7,
    reviews: 412,
    specs: { material: "Aluminum + PU", weight: "0.3 kg", warranty: "2 years" }
  },
  {
    id: "p3",
    name: "Pulse Watch",
    price: 149.0,
    image: "https://images.piclumen.com/normal/20250810/23/8d0ab60e79374d9f8ccb10378cce1673.webp",
    description: "Fitness tracking smartwatch with heart-rate monitor.",
    rating: 4.5,
    reviews: 356,
    specs: { material: "Polycarbonate", weight: "0.08 kg", warranty: "1 year" }
  },
  {
    id: "p4",
    name: "Glide Sneakers",
    price: 99.0,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    description: "Comfort-first sneakers designed for all-day wear.",
    rating: 4.3,
    reviews: 189,
    specs: { material: "Mesh + Rubber", weight: "0.6 kg", warranty: "1 year" }
  },
  {
    id: "p5",
    name: "Summit Bottle",
    price: 35.0,
    image: "https://images.piclumen.com/normal/20250810/23/d96dfc87de164f05b2453313104f3bc3.webp",
    description: "Insulated stainless-steel bottle keeps drinks cold or hot.",
    rating: 4.8,
    reviews: 540,
    specs: { material: "Stainless steel", weight: "0.35 kg", warranty: "2 years" }
  },
  {
    id: "p6",
    name: "Cascade Jacket",
    price: 159.0,
    image: "https://images.piclumen.com/normal/20250810/23/342250b2ee6e4ce6a48461ee6c4099ae.webp",
    description: "Water-resistant jacket for urban adventures.",
    rating: 4.4,
    reviews: 267,
    specs: { material: "Softshell", weight: "0.7 kg", warranty: "2 years" }
  }
]