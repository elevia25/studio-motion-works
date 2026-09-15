export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "divider" }
  | { type: "code"; language: string; code: string }
  | { type: "callout"; title: string; text: string };

export interface PostContent {
  blocks: ContentBlock[];
  authorBio: string;
  authorRole: string;
}

export const postContent: Record<string, PostContent> = {
  "kinetic-typography-brand-identity": {
    authorBio:
      "Elena Marchetti is a motion designer and typographer based in Milan. She has led kinetic identity systems for galleries, fashion houses, and cultural institutions across Europe.",
    authorRole: "Design Director, Studio Motion Works",
    blocks: [
      {
        type: "paragraph",
        text: "For most of typographic history, letters were built to sit still. The Gutenberg press, the Linotype machine, the desktop publishing revolution — each innovation pushed toward sharper resolution, better kerning, cleaner grids. Motion was something done to type after the fact, an effect applied on top of a static foundation.",
      },
      {
        type: "paragraph",
        text: "That assumption has quietly collapsed. In 2026, the most compelling brand identities are built around type that moves with intention — not as decoration, but as the primary carrier of meaning. The motion is the message.",
      },
      {
        type: "heading",
        level: 2,
        id: "signal-before-reading",
        text: "Signal Before Reading",
      },
      {
        type: "paragraph",
        text: "When a headline splits, rotates, or slides into place, the reader absorbs something before a single word registers. Rhythm. Precision. Energy. Or its opposite — hesitation, drift, decay. Kinetic typography lets a brand communicate its temperament in the fraction of a second it takes the eye to travel across a word.",
      },
      {
        type: "quote",
        text: "Static type tells you what a brand says. Kinetic type tells you how it thinks.",
        attribution: "Elena Marchetti",
      },
      {
        type: "paragraph",
        text: "This is why so many design systems have started to treat motion as a first-class primitive — sitting alongside color, spacing, and type scale in the foundation layer. When motion is bolted on afterward, it always reads as decorative. When it's baked in, it becomes inseparable from the identity itself.",
      },
      {
        type: "heading",
        level: 3,
        id: "the-stagger-principle",
        text: "The Stagger Principle",
      },
      {
        type: "paragraph",
        text: "The most effective kinetic typography we've shipped uses a stagger of 30–60 milliseconds per character. Slower than that feels theatrical and self-conscious. Faster, and the individual movements blur into a single fade — losing the very thing that made the motion legible.",
      },
      {
        type: "code",
        language: "ts",
        code: `const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};`,
      },
      {
        type: "paragraph",
        text: "The eye needs to perceive the sequence. Not the whole animation, but the rhythm of it. This is the same principle that governs musical phrasing — you don't hear individual notes, you hear the shape they form together.",
      },
      {
        type: "heading",
        level: 2,
        id: "from-decoration-to-infrastructure",
        text: "From Decoration to Infrastructure",
      },
      {
        type: "paragraph",
        text: "Five years ago, kinetic type was a flourish. A site would animate its hero headline and stop there. Today, the most ambitious identities treat every text surface as a possible motion surface — navigation labels, form fields, error states, loading sequences. Every letter is potentially part of a larger choreography.",
      },
      {
        type: "list",
        items: [
          "Navigation that reflows on hover, revealing hierarchy through movement",
          "Form labels that lift and shift to signal focus without a border",
          "Error states that communicate urgency through a specific, consistent tempo",
          "Loading sequences that carry the brand voice through the wait itself",
        ],
      },
      {
        type: "callout",
        title: "The discipline test",
        text: "If you can't describe the motion in one sentence — its tempo, its direction, its emotional register — it's probably not yet part of the identity. It's still decoration.",
      },
      {
        type: "heading",
        level: 2,
        id: "when-not-to-move",
        text: "When Not to Move",
      },
      {
        type: "paragraph",
        text: "The strongest kinetic systems are conservative in exactly one way: they know where motion does not belong. Body copy. Table data. Legal disclaimers. Anywhere a reader needs to scan, compare, or verify — stillness is the design choice, and motion would be a failure of restraint.",
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        text: "This is the final principle, and in some ways the most important. Kinetic typography is a vocabulary, not a default. Its power comes from being used selectively — reserved for the moments where the brand needs to say something a static mark cannot.",
      },
    ],
  },
};

// Fallback for posts without full content yet
export const defaultContent: PostContent = {
  authorBio:
    "The Studio Motion Works editorial team writes on sculpture, typography, and the architecture of movement.",
  authorRole: "Studio Motion Works",
  blocks: [
    {
      type: "paragraph",
      text: "This article is coming soon. In the meantime, explore our collection of kinetic sculptures and moving furnishings.",
    },
    {
      type: "callout",
      title: "Want the full story?",
      text: "Subscribe to our journal and receive each new essay the moment it's published.",
    },
  ],
};
