import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { products } from "../data/products"
import { useCart } from "../context/CartContext"

function formatCurrency(n: number) {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

export default function ProductDetail() {
    const { id } = useParams()
    const product = products.find(p => p.id === id)
    const { add } = useCart()

    if (!product) {
        return (
            <section className="py-10">
                <p className="text-gray-600">Product not found.</p>
                <Link to="/products" className="text-sm text-gray-900 underline">Back to products</Link>
            </section>
        )
    }

    const fullStars = Math.round(product.rating)

    return (
        <section className="grid gap-8 md:grid-cols-2">
            <motion.img
                src={product.image}
                alt={product.name}
                layoutId={`product-${product.id}-image`}
                className="w-full rounded-2xl object-cover"
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
            />

            <div className="space-y-5">
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold">{product.name}</h1>
                    <div className="text-lg font-medium">{formatCurrency(product.price)}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Stars value={fullStars} />
                        <span>{product.rating.toFixed(1)} • {product.reviews} reviews</span>
                    </div>
                </div>

                <p className="text-gray-700">{product.description}</p>

                {/* Specs with icons */}
                <div className="grid grid-cols-2 gap-3">
                    <SpecItem icon={<ShieldCheckIcon className="h-5 w-5 text-gray-900" />} label="Warranty" value={product.specs?.warranty ?? "1 year"} />
                    <SpecItem icon={<TruckIcon className="h-5 w-5 text-gray-900" />} label="Shipping" value="Free over $50" />
                    <SpecItem icon={<FeatherIcon className="h-5 w-5 text-gray-900" />} label="Material" value={product.specs?.material ?? "—"} />
                    <SpecItem icon={<ScaleIcon className="h-5 w-5 text-gray-900" />} label="Weight" value={product.specs?.weight ?? "—"} />
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => add(product.id, 1)}
                        className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white"
                    >
                        <CartIcon className="h-5 w-5" />
                        Add to cart
                    </button>
                    <Link to="/products" className="text-sm text-gray-600 hover:text-gray-900">← Back to products</Link>
                </div>
            </div>
        </section>
    )
}

function Stars({ value }: { value: number }) {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} viewBox="0 0 24 24" className={`h-4 w-4 ${i <= value ? "text-yellow-500" : "text-gray-300"}`} fill="currentColor" aria-hidden="true">
                    <path d="M12 3l2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 15.9l-4.8 2.46.92-5.34L4.24 8.64l5.36-.78L12 3z" />
                </svg>
            ))}
        </div>
    )
}

function SpecItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
            <div className="mt-0.5">{icon}</div>
            <div>
                <div className="text-sm font-medium">{label}</div>
                <div className="text-sm text-gray-600">{value}</div>
            </div>
        </div>
    )
}

/* Inline icons */
function CartIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="17" cy="20" r="1.5" />
            <path d="M3 4h2l2.2 10.5a1 1 0 0 0 1 .8H19a1 1 0 0 0 1-.8L21 9H6" />
        </svg>
    )
}

function ShieldCheckIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    )
}

function TruckIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 7h11v7H2.5z" />
            <path d="M13.5 9h4l4 4v1h-8z" />
            <circle cx="7" cy="17.5" r="1.5" />
            <circle cx="17" cy="17.5" r="1.5" />
        </svg>
    )
}

function FeatherIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 3c-6 0-13 7-13 13a5 5 0 0 0 5 5c6 0 13-7 13-13a5 5 0 0 0-5-5z" />
            <path d="M9 15l6-6" />
        </svg>
    )
}

function ScaleIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18" />
            <path d="M3 8l4 7 4-7H3zM13 8l4 7 4-7h-8z" />
        </svg>
    )
}