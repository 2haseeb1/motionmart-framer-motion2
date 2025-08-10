import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FooterCTA() {
    return (
        <section className="mx-auto my-24 max-w-3xl rounded-2xl border bg-gradient-to-br from-neutral-50 to-white p-8 text-center">
            <motion.h4
                className="text-2xl font-semibold"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Ready to build your own scroll story?
            </motion.h4>
            <motion.p
                className="mt-2 text-neutral-600"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                viewport={{ once: true }}
            >
                This scaffold uses parallax layers, sticky scenes, and scroll‑linked SVG
                progress with Framer Motion.
            </motion.p>
            <div className="mt-6">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white hover:bg-neutral-800"
                >
                    Back to Home
                </Link>
            </div>
        </section>
    );
}