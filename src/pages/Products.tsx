import { motion } from "framer-motion"
import { products } from "../data/products"
import ProductCard from "../components/ProductCard"

export default function Products() {
    return (
        <section>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">Products</h2>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-black/5">
                        <span role="img" aria-label="sparkles">✨</span> New arrivals
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-black/5">
                        <span role="img" aria-label="thumbs up">👍</span> Best rated
                    </span>
                </div>
            </div>

            <motion.div
                initial="hidden"
                animate="show"
                variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.06 } }
                }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
                {products.map(p => (
                    <motion.div key={p.id} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                        <ProductCard product={p} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}