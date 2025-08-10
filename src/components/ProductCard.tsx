import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { useCart } from "../context/CartContext"
import type { Product } from "../data/products"

function formatCurrency(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

export default function ProductCard({ product }: { product: Product }) {
    const { add } = useCart()
    const location = useLocation()

    return (
        <motion.div
            layout
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
        >
            <Link
                to={`/products/${product.id}`}
                state={{ from: location.pathname }}
                className="block"
            >
                <motion.img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    layoutId={`product-${product.id}-image`}
                    className="h-48 w-full object-cover"
                />
            </Link>

            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="text-sm text-gray-600">{formatCurrency(product.price)}</div>
                </div>
                <button
                    onClick={() => add(product.id, 1)}
                    className="mt-3 inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                >
                    <motion.span whileTap={{ scale: 0.95 }}>Add to cart</motion.span>
                </button>
            </div>
        </motion.div>
    )
}