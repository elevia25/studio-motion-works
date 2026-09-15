export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: "Sculpture" | "Typography" | "Installations" | "Process" | "Theory";
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  accent: string;
}

export const posts: Post[] = [
  {
    slug: "kinetic-typography-brand-identity",
    title: "How Kinetic Typography Strengthens Brand Identity",
    excerpt:
      "Movement in type isn't decoration — it's a language. We break down how controlled motion signals innovation, precision, and energy before a single word is read.",
    category: "Typography",
    author: "Elena Marchetti",
    date: "2026-08-14",
    readTime: "8 min",
    featured: true,
    accent: "#C5A065",
  },
  {
    slug: "blooming-project-aaron-preyer",
    title: "Inside Aaron Preyer's Blooming Project",
    excerpt:
      "A coffee table that unfolds. A shelf that breathes. We visit the studio where experimental kinetic furniture is redefining what function means.",
    category: "Sculpture",
    author: "James Okonkwo",
    date: "2026-07-22",
    readTime: "12 min",
    accent: "#B87333",
  },
  {
    slug: "sensor-based-installations-galleries",
    title: "Sensor-Based Installations Are Reshaping Galleries",
    excerpt:
      "When art responds to presence, the viewer becomes co-author. A survey of the most ambitious interactive installations of the past year.",
    category: "Installations",
    author: "Sofia Lindqvist",
    date: "2026-06-30",
    readTime: "10 min",
    accent: "#C0C0C0",
  },
  {
    slug: "bronze-patina-time-motion",
    title: "Bronze, Patina, and the Aesthetics of Time",
    excerpt:
      "Why we choose bronze over steel for kinetic pieces — and how patina turns every sculpture into a slow-motion performance of oxidation.",
    category: "Process",
    author: "Elena Marchetti",
    date: "2026-06-11",
    readTime: "6 min",
    accent: "#C5A065",
  },
  {
    slug: "kinetic-interiors-architecture",
    title: "Kinetic Interiors: When Architecture Learns to Move",
    excerpt:
      "Movable partitions, reconfigurable furniture, spaces that adapt. The architectural frontier where static walls give way to responsive surfaces.",
    category: "Theory",
    author: "James Okonkwo",
    date: "2026-05-28",
    readTime: "14 min",
    accent: "#B87333",
  },
  {
    slug: "magnet-cursor-haptic-design",
    title: "The Magnet Cursor: Designing for Haptic Expectation",
    excerpt:
      "Why a cursor that pulls feels more alive than one that points. A deep dive into the psychology of magnetic UI and its roots in physical object interaction.",
    category: "Typography",
    author: "Sofia Lindqvist",
    date: "2026-05-09",
    readTime: "9 min",
    accent: "#C0C0C0",
  },
];

export const categories = [
  "All",
  "Sculpture",
  "Typography",
  "Installations",
  "Process",
  "Theory",
] as const;
