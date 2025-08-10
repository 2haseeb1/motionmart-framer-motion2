import { motion, MotionValue, useTransform } from "framer-motion";

export default function TimelineProgress({
    progress,
}: {
    progress: MotionValue<number>;
}) {
    const pathLength = useTransform(progress, [0, 1], [0, 1]);

    return (
        <div className="pointer-events-none fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 md:block">
            <svg width="4" height="400" viewBox="0 0 4 400" className="opacity-60">
                <path d="M2 0 V 400" stroke="#e5e7eb" strokeWidth="4" />
                <motion.path
                    d="M2 0 V 400"
                    stroke="#111827"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ pathLength }}
                    initial={{ pathLength: 0 }}
                />
            </svg>
        </div>
    );
}