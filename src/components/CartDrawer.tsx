import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"
import { products } from "../data/products"
import React from "react"

function formatCurrency(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

export default function CartDrawer({ onClose }: { onClose: () => void }) {
    const { items, increment, decrement, remove, clear } = useCart()
    const navigate = useNavigate()

    const mapped = items.map(it => {
        const p = products.find(pr => pr.id === it.id)!
        return { ...p, qty: it.qty, lineTotal: p.price * it.qty }
    })
    const total = mapped.reduce((s, x) => s + x.lineTotal, 0)

    const handleClose = () => {
        onClose()
    }

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="absolute inset-0 bg-black/40" onClick={handleClose} />

                <motion.aside
                    role="dialog"
                    aria-modal="true"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white p-4 shadow-xl"
                >
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Your Cart</h2>
                        <button onClick={handleClose} className="rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100">
                            Close
                        </button>
                    </div>

                    {mapped.length === 0 ? (
                        <div className="py-10 text-center text-gray-600">Cart is empty</div>
                    ) : (
                        <div className="space-y-4">
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

                            <div className="flex items-center justify-between border-t pt-4">
                                <div className="text-sm text-gray-600">Subtotal</div>
                                <div className="font-semibold">{formatCurrency(total)}</div>
                            </div>

                            <button
                                className="w-full rounded-md bg-gray-900 py-2 text-sm font-medium text-white"
                                onClick={() => {
                                    clear()
                                    navigate(-1)
                                }}
                            >
                                Checkout
                            </button>
                        </div>
                    )}
                </motion.aside>
            </motion.div>
        </AnimatePresence>
    )
}