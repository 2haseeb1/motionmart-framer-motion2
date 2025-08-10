import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { stories } from "../data/stories";

export default function Home() {
    return (
        <section className="space-y-12">
            <div className="mx-auto max-w-3xl text-center">
                <motion.h1
                    className="text-4xl font-bold tracking-tight md:text-6xl"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Scroll‑Story Case Studies
                </motion.h1>
                <motion.p
                    className="mt-4 text-neutral-600"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                >
                    Immersive narrative pages with parallax, pinned sections, and scroll‑linked
                    motion powered by Framer Motion.
                </motion.p>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2">
                {stories.map((s) => (
                    <li key={s.slug}>
                        <Link
                            to={`/stories/${s.slug}`}
                            className="group block overflow-hidden rounded-xl border"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <motion.img
                                    src={s.cover}
                                    alt={s.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    initial={{ scale: 1.02 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="text-lg font-semibold">{s.title}</h3>
                                    <p className="text-sm/5 opacity-90">{s.subtitle}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}