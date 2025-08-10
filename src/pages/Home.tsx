import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ProductCard from "../components/ProductCard"
import { products } from "../data/products"

export default function Home() {
    const featured = products.slice(0, 3)

    return (
        <section className="space-y-10">
            <div className="space-y-4">
                <h1 className="text-2xl font-semibold tracking-tight">স্বাগতম 👋 MotionMart</h1>
                <p className="text-gray-600">
                    শেয়ার্ড ট্রানজিশন, মাইক্রো‑ইন্টারঅ্যাকশন এবং স্মুথ কার্ট ড্রয়ারসহ একটি অ্যানিমেটেড শপ ডেমো।
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                    <FeatureCard
                        icon={<TruckIcon className="h-6 w-6 text-gray-900" />}
                        title="ফ্রি শিপিং"
                        desc="$50+ অর্ডারে ফ্রি ডেলিভারি"
                    />
                    <FeatureCard
                        icon={<RefreshCwIcon className="h-6 w-6 text-gray-900" />}
                        title="সহজ রিটার্ন"
                        desc="৩০ দিনের সহজ রিটার্ন পলিসি"
                    />
                    <FeatureCard
                        icon={<ShieldIcon className="h-6 w-6 text-gray-900" />}
                        title="সিকিউর চেকআউট"
                        desc="PCI‑compliant, এনক্রিপটেড পেমেন্ট"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Featured</h2>
                    <Link to="/products" className="text-sm text-gray-600 hover:text-gray-900">
                        সব প্রোডাক্ট দেখুন →
                    </Link>
                </div>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {featured.map((p) => (
                        <motion.div key={p.id} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                            <ProductCard product={p} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

function FeatureCard({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode
    title: string
    desc: string
}) {
    return (
        <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gray-100">{icon}</div>
            <div>
                <div className="font-medium">{title}</div>
                <div className="text-sm text-gray-600">{desc}</div>
            </div>
        </div>
    )
}

/* Inline icons (simple, no external deps) */
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

function RefreshCwIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 1 1-3-6.7" />
            <polyline points="21 3 21 9 15 9" />
        </svg>
    )
}

function ShieldIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2l8 4v5c0 5-4 8.5-8 11-4-2.5-8-6-8-11V6l8-4z" />
        </svg>
    )
}