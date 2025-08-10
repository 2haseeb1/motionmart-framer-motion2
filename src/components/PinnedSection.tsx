import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PinnedSection({
    heading,
    copy,
    image,
    reverse = false,
}: {
    heading: string;
    copy: string;
    image: string;
    reverse?: boolean;
}) {
    // Outer container drives the sticky stage
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    const imgScale = useTransform(scrollYProgress, [0, 0.8, 1], [0.95, 1.05, 1]);
    const imgY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [0, 1, 1]);

    return (
        <section ref={ref} className="relative min-h-[200vh]">
            <div className="sticky top-20 z-10 mx-auto grid h-[80vh] max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
                <motion.div
                    style={{ y: reverse ? imgY : textY, opacity: textOpacity }}
                    className={reverse ? "md:order-2" : ""}
                >
                    <h2 className="text-2xl font-semibold md:text-3xl">{heading}</h2>
                    <p className="mt-3 max-w-prose text-neutral-600">{copy}</p>
                </motion.div>

                <motion.div
                    style={{ y: reverse ? textY : imgY, scale: imgScale }}
                    className={reverse ? "md:order-1" : ""}
                >
                    <div className="overflow-hidden rounded-xl border">
                        <img
                            src={image}
                            alt={heading}
                            className="h-[45vh] w-full object-cover md:h-[60vh]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}