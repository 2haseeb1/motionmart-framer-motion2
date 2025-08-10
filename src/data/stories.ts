export type StoryData = {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  layers: { src: string; speed: number; alt?: string }[];
  gallery: string[];
};

export const stories: StoryData[] = [
  {
    slug: "acme-rebrand",
    title: "Acme Rebrand Case Study",
    subtitle:
      "A modern identity system brought to life with motion—bold, modular, and expressive.",
    cover:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    layers: [
      {
        src: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop",
        speed: 0.1,
        alt: "Background layer",
      },
      {
        src: "https://images.piclumen.com/normal/20250811/00/7d9450e5efb44d4da585481809d384ea.webp",
        speed: 0.25,
        alt: "Mid layer",
      },
      {
        src: "https://images.piclumen.com/normal/20250811/00/7d9450e5efb44d4da585481809d384ea.webp",
        speed: 0.45,
        alt: "Foreground layer",
      },
    ],
    gallery: [
      "",
      "",
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475274223703-6e1e8d15f9a2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];