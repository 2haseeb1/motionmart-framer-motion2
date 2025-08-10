import { useParams } from "react-router-dom";
import { useMemo, useRef } from "react";
import { useScroll } from "framer-motion";
import { stories } from "../data/stories";
import HeroParallax from "../components/HeroParallax";
import PinnedSection from "../components/PinnedSection";
import GalleryMosaic from "../components/GalleryMosaic";
import TimelineProgress from "../components/TimelineProgress";
import FooterCTA from "../components/FooterCTA";

export default function Story() {
    const { slug } = useParams();
    const story = useMemo(
        () => stories.find((s) => s.slug === slug) ?? stories[0],
        [slug]
    );

    // Track page-level scroll progress for the vertical timeline
    const pageRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: pageRef,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={pageRef} className="relative">
            <TimelineProgress progress={scrollYProgress} />

            <HeroParallax
                title={story.title}
                subtitle={story.subtitle}
                layers={story.layers}
            />

            <PinnedSection
                heading="Challenge"
                copy="Acme needed a modern identity that feels premium without losing its playful roots. We focused on clarity, motion, and vibrant storytelling."
                image={story.layers[1].src}
            />

            <PinnedSection
                heading="Approach"
                copy="We introduced a modular system: bold typography, dynamic color ramps, and motion as a first-class ingredient."
                image={story.layers[2].src}
                reverse
            />

            <GalleryMosaic images={story.gallery} />

            <FooterCTA />
        </div>
    );
}