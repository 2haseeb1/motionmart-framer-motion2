import { motion, cubicBezier, type Variants } from "framer-motion";

const itemEase = cubicBezier(0.22, 1, 0.36, 1); // same feel as easeOutExpo-ish

const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.35,
            ease: itemEase, // or: "ease-out" or "cubic-bezier(0.22, 1, 0.36, 1)"
        },
    }),
};

export default function GalleryMosaic({ images }: { images: string[] }) {
    return (
        <section className="mx-auto max-w-6xl px-1 py-16">
            <h3 className="px-3 text-lg font-semibold">Highlights</h3>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                {images.map((src, i) => (
                    <motion.div
                        key={src + i}
                        custom={i}
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="overflow-hidden rounded-lg"
                    >
                        <img
                            src={src}
                            alt={`Gallery ${i + 1}`}
                            className="h-40 w-full object-cover transition-transform duration-300 hover:scale-[1.03] md:h-48"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}