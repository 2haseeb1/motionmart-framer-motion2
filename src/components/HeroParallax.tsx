import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Layer = { src: string; speed: number; alt?: string };

export default function HeroParallax({
    title,
    subtitle,
    layers,
}: {
    title: string;
    subtitle: string;
    layers: Layer[];
}) {
    const ref = useRef<HTMLElement>(null);
    // Progress while hero scrolls out (parallax)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    return (
        <section ref={ref} className="relative isolate overflow-hidden">
            <div className="relative h-[120svh]">
                <div className="absolute inset-0">
                    {layers.map((layer, i) => {
                        const y = useTransform(
                            scrollYProgress,
                            [0, 1],
                            ["0%", `${-layer.speed * 100}%`]
                        );
                        const scale = useTransform(
                            scrollYProgress,
                            [0, 1],
                            [1, 1 + layer.speed * 0.2]
                        );
                        return (
                            <motion.img
                                key={i}
                                src={layer.src}
                                alt={layer.alt ?? `Layer ${i + 1}`}
                                style={{ y, scale }}
                                className={`absolute inset-0 h-full w-full object-cover ${i === layers.length - 1 ? "mix-blend-normal" : "mix-blend-multiply"
                                    }`}
                            />
                        );
                    })}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white/70" />
                </div>

                <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-4 pb-20">
                    <div className="max-w-3xl">
                        <motion.h1
                            className="text-4xl font-bold text-white drop-shadow md:text-6xl"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            className="mt-4 max-w-prose text-white/90"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                        >
                            {subtitle}
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}