import React, { createContext, useContext, useMemo, useState } from "react"

type CartItem = { id: string; qty: number }
type CartContextType = {
    items: CartItem[]
    add: (id: string, qty?: number) => void
    remove: (id: string) => void
    increment: (id: string) => void
    decrement: (id: string) => void
    clear: () => void
    count: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])

    const add = (id: string, qty = 1) =>
        setItems(prev => {
            const i = prev.find(x => x.id === id)
            if (i) return prev.map(x => (x.id === id ? { ...x, qty: x.qty + qty } : x))
            return [...prev, { id, qty }]
        })

    const remove = (id: string) => setItems(prev => prev.filter(x => x.id !== id))
    const increment = (id: string) => add(id, 1)
    const decrement = (id: string) =>
        setItems(prev =>
            prev
                .map(x => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
                .filter(x => x.qty > 0)
        )
    const clear = () => setItems([])
    const count = items.reduce((s, x) => s + x.qty, 0)

    const value = useMemo<CartContextType>(
        () => ({ items, add, remove, increment, decrement, clear, count }),
        [items]
    )

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error("useCart must be used within CartProvider")
    return ctx
}