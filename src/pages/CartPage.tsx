import { useCart } from "../context/CartContext"
import { products } from "../data/products"

function formatCurrency(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

export default function CartPage() {
    const { items, increment, decrement, remove, clear } = useCart()
    const mapped = items.map(it => {
        const p = products.find(pr => pr.id === it.id)!
        return { ...p, qty: it.qty, lineTotal: p.price * it.qty }
    })
    const total = mapped.reduce((s, x) => s + x.lineTotal, 0)

    return (
        <section className="space-y-4">
            <h2 className="text-xl font-semibold">Your Cart</h2>

            {mapped.length === 0 ? (
                <div className="grid place-items-center gap-4 py-16">
                    <EmptyCartArt className="h-36 w-36 text-gray-300" />
                    <div className="text-gray-600">Your cart is empty</div>
                </div>
            ) : (
                <>
                    <div className="space-y-3">
                        {mapped.map(item => (
                            <div key={item.id} className="flex items-center gap-3 rounded-lg border p-3">
                                <img src={item.image} alt={item.name} className="h-14 w-14 rounded-md object-cover" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <div className="font-medium">{item.name}</div>
                                        <div className="text-sm text-gray-600">{formatCurrency(item.price)}</div>
                                    </div>
                                    <div className="mt-2 flex items-center gap-2">
                                        <button onClick={() => decrement(item.id)} className="h-7 w-7 rounded-md bg-gray-100">-</button>
                                        <div className="w-6 text-center text-sm">{item.qty}</div>
                                        <button onClick={() => increment(item.id)} className="h-7 w-7 rounded-md bg-gray-100">+</button>
                                        <button onClick={() => remove(item.id)} className="ml-auto text-xs text-red-600">Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between border-t pt-4">
                        <div className="text-sm text-gray-600">Subtotal</div>
                        <div className="font-semibold">{formatCurrency(total)}</div>
                    </div>

                    <button onClick={clear} className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white">
                        <CheckoutIcon className="h-5 w-5" />
                        Checkout
                    </button>
                </>
            )}
        </section>
    )
}

function CheckoutIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 10h18" />
            <path d="M7 15h3" />
        </svg>
    )
}

function EmptyCartArt({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="20" y="35" width="70" height="40" rx="6" />
            <path d="M90 50h10l-6 25H35l-8-40H15" />
            <circle cx="45" cy="92" r="6" />
            <circle cx="82" cy="92" r="6" />
            <path d="M32 28l8 7" />
            <path d="M40 28l8 7" />
        </svg>
    )
}