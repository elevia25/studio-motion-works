export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category:
    | "Kinetic Luminaries"
    | "Kinetic Arts"
    | "Comissioned Works"
  year: string;
  client?: string;
  location: string;
  materials: string[];
  dimensions: string;
  duration: string;
  accent: string;
  description: string;
  story: string;
  specs: { label: string; value: string }[];
  images: { src: string; alt: string }[];
  video?: string;
  modelUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "helix",
    slug: "helix-table",
    title: "Helix Table",
    subtitle: "A coffee table that unfolds",
    category: "Kinetic Luminaries",
    year: "2025",
    client: "Private Commission",
    location: "Milan, Italy",
    materials: ["Brushed Bronze", "Smoked Glass", "Titanium Hinge"],
    dimensions: "120 × 80 × 42 cm",
    duration: "14 weeks",
    accent: "#C5A065",
    description:
      "A low table whose surface rotates and expands outward on a bronze helix, transforming from coffee table to dining surface in one continuous motion.",
    story:
      "Commissioned for a Milanese apartment overlooking the Navigli, the Helix Table was designed to solve a specific problem: a client who loved to entertain but lived in 68 square meters. The brief was simple — one surface, two functions, no visible mechanism. We spent the first six weeks prototyping hinge geometries before settling on a counter-rotating double helix. The motion is deceptively simple: a single hand on the edge and the surface unfolds, the bronze arms tracing a slow spiral outward. Each arm is machined from a single billet, then hand-finished to a satin sheen that catches evening light like the surface of still water.",
    specs: [
      { label: "Motion Type", value: "Counter-rotating double helix" },
      { label: "Cycle Time", value: "4.2 seconds (full extension)" },
      { label: "Load Capacity", value: "85 kg distributed" },
      { label: "Finish", value: "Hand-satin bronze, sealed" },
      { label: "Assembly", value: "Modular, 6 components" },
    ],
    images: [
      { src: "/projects/helix-01.jpg", alt: "Helix Table in closed position" },
      { src: "/projects/helix-02.jpg", alt: "Helix Table mid-unfold" },
      {
        src: "/projects/helix-03.jpg",
        alt: "Helix Table in dining configuration",
      },
    ],
    video: "/projects/helix-loop.mp4",
    modelUrl: "/models/helix-table.glb",
    featured: true,
  },
  {
    id: "orbit",
    slug: "orbital-chandelier",
    title: "Orbital Chandelier",
    subtitle: "Light in constant motion",
    category: "Kinetic Arts",
    year: "2024",
    client: "Atelier Nord",
    location: "Copenhagen, Denmark",
    materials: ["Copper", "Opal Glass", "Brass Armature"],
    dimensions: "Ø 180 × 220 cm",
    duration: "22 weeks",
    accent: "#B87333",
    description:
      "A suspended kinetic sculpture of nine illuminated spheres, each orbiting a central axis at a different rate, casting shifting shadows across the room.",
    story:
      "Atelier Nord approached us with an unusual request: a chandelier that would feel different every time you looked at it. The result is a system of nine opal glass spheres, each mounted on a copper arm of different length, each driven by an independent motor. Over the course of an hour, the spheres drift through a slow choreography — sometimes clustering, sometimes dispersing, never quite repeating. The shadows they cast on the ceiling and walls become a second, ambient sculpture. We tuned the motor speeds by hand over three months, watching the patterns emerge in a full-scale mockup of the gallery space.",
    specs: [
      { label: "Spheres", value: "9 opal glass, 18–32 cm" },
      { label: "Orbit Period", value: "47 minutes (full cycle)" },
      { label: "Light Source", value: "2700K dimmable LED" },
      { label: "Suspension", value: "Single-point, concealed cable" },
      { label: "Power", value: "24V DC, <180W total" },
    ],
    images: [
      {
        src: "/projects/orbit-01.jpg",
        alt: "Orbital Chandelier installation view",
      },
      { src: "/projects/orbit-02.jpg", alt: "Detail of copper armature" },
      { src: "/projects/orbit-03.jpg", alt: "Shadow patterns on ceiling" },
    ],
    video: "/projects/orbit-loop.mp4",
    featured: true,
  },
  {
    id: "tide",
    slug: "tidal-wall",
    title: "Tidal Wall",
    subtitle: "A wall that breathes",
    category: "Comissioned Works",
    year: "2025",
    client: "Museum of Contemporary Art",
    location: "Rotterdam, Netherlands",
    materials: ["Anodized Aluminum", "Sensor Array", "Custom PCB"],
    dimensions: "1200 × 300 × 40 cm",
    duration: "18 weeks",
    accent: "#C0C0C0",
    description:
      "A 12-meter responsive wall of 4,800 individually actuated aluminum panels that ripple and part as visitors approach, then slowly return to stillness.",
    story:
      "The Tidal Wall began as a question: what if a wall could acknowledge you? Installed in the entrance hall of a Rotterdam museum, the piece uses a grid of ultrasonic sensors to track visitor movement. As someone approaches, the panels nearest to them recede, creating a soft opening in the surface. Walk past, and they close again. The effect is somewhere between water parting and a crowd making way. We built and tested forty-eight iterations of the panel mechanism before finding one that moved quietly enough to be unnoticed, and fast enough to feel alive.",
    specs: [
      { label: "Panels", value: "4,800 anodized aluminum units" },
      { label: "Response Time", value: "180ms to first movement" },
      { label: "Sensing", value: "48 ultrasonic, 3m range" },
      { label: "Power", value: "48V DC, 240W peak" },
      { label: "Control", value: "Custom CAN bus architecture" },
    ],
    images: [
      { src: "/projects/tide-01.jpg", alt: "Tidal Wall full installation" },
      {
        src: "/projects/tide-02.jpg",
        alt: "Panels parting as visitor approaches",
      },
      { src: "/projects/tide-03.jpg", alt: "Detail of actuated panels" },
    ],
    video: "/projects/tide-loop.mp4",
    featured: true,
  },
  {
    id: "pulse",
    slug: "pulse-bench",
    title: "Pulse Bench",
    subtitle: "Seating that responds to presence",
    category: "Kinetic Luminaries",
    year: "2023",
    client: "Studio Motion Works",
    location: "Studio Prototype",
    materials: ["Walnut", "Bronze", "Memory Alloy"],
    dimensions: "240 × 60 × 45 cm",
    duration: "10 weeks",
    accent: "#C5A065",
    description:
      "A public bench whose slats subtly rise and fall in response to the weight and movement of those seated, creating a shared, gentle rhythm.",
    story:
      "Pulse Bench was our first experiment with shape-memory alloys in furniture. The slats are mounted on small pistons connected to a memory-alloy spring system — when someone sits, the slats under them compress slightly, and when they shift, the neighboring slats respond. The effect is a slow, breathing surface that makes sitting feel like a collective activity. We showed the prototype at a design week in Eindhoven and watched people sit in silence for ten minutes, just feeling the bench move beneath them.",
    specs: [
      { label: "Slats", value: "48 walnut, individually sprung" },
      { label: "Response", value: "Smooth, ~2s settle time" },
      { label: "Load", value: "Up to 4 seated adults" },
      { label: "Mechanism", value: "NiTi memory alloy + hydraulic damping" },
      { label: "Weight", value: "68 kg" },
    ],
    images: [
      { src: "/projects/pulse-01.jpg", alt: "Pulse Bench in studio" },
      { src: "/projects/pulse-02.jpg", alt: "Detail of slat mechanism" },
      { src: "/projects/pulse-03.jpg", alt: "Visitors seated on Pulse Bench" },
    ],
    modelUrl: "/models/pulse-bench.glb",
  },
  {
    id: "drift",
    slug: "drift-pavilion",
    title: "Drift Pavilion",
    subtitle: "A structure that follows the sun",
    category: "Comissioned Works",
    year: "2024",
    client: "Biennale Architettura",
    location: "Venice, Italy",
    materials: ["Weathering Steel", "Solar Array", "Hydraulic Actuators"],
    dimensions: "800 × 500 × 600 cm",
    duration: "28 weeks",
    accent: "#B87333",
    description:
      "A temporary pavilion whose steel canopy rotates through the day, tracking the sun and casting a moving field of shade across the visitors below.",
    story:
      "For the Venice Biennale, we were asked to create a space for conversation. The Drift Pavilion is a canopy of weathering steel that rotates on a single central bearing, driven by a small solar array and hydraulic actuators. As the sun moves across the sky, the canopy follows, and the shade it casts moves with it — so that at any moment, there is always a place to sit in comfort, and always a place in full sun. The pavilion was dismantled after the Biennale and reinstalled in a public park in Turin, where it continues to move with the seasons.",
    specs: [
      { label: "Canopy", value: "Weathering steel, 12 panels" },
      { label: "Rotation", value: "180° daily range" },
      { label: "Power", value: "Off-grid solar, 400W array" },
      { label: "Actuation", value: "4 hydraulic cylinders" },
      { label: "Foundation", value: "Temporary ballast, no excavation" },
    ],
    images: [
      { src: "/projects/drift-01.jpg", alt: "Drift Pavilion at Biennale" },
      { src: "/projects/drift-02.jpg", alt: "Moving shade across visitors" },
      { src: "/projects/drift-03.jpg", alt: "Detail of central bearing" },
    ],
    video: "/projects/drift-loop.mp4",
  },
  {
    id: "weave",
    slug: "weave-shelving",
    title: "Weave Shelving",
    subtitle: "Storage that reconfigures",
    category: "Kinetic Luminaries",
    year: "2023",
    client: "Private Collection",
    location: "London, UK",
    materials: ["Ash Wood", "Bronze Rods", "Magnetic Detents"],
    dimensions: "180 × 40 × 220 cm",
    duration: "12 weeks",
    accent: "#C0C0C0",
    description:
      "A shelving system whose horizontal planes rotate and translate, allowing the user to reshape the storage from open display to closed cabinet in a single gesture.",
    story:
      "The Weave Shelving system began with a frustration: why should a bookshelf be a fixed object? The client, a collector of ceramics, wanted something that could shift from open display to protected storage without moving the objects. The solution is a set of ash planes mounted on bronze rods, each with a magnetic detent system that allows it to rotate and slide. A single gesture can transform the shelf from a display wall to a closed cabinet. The motion is quiet — a soft click as each plane settles into position.",
    specs: [
      { label: "Planes", value: "6 ash, individually mobile" },
      { label: "Mechanism", value: "Bronze rod + magnetic detent" },
      { label: "Configurations", value: "12 discrete positions" },
      { label: "Finish", value: "Hand-oiled ash, patinated bronze" },
      { label: "Assembly", value: "Wall-mounted, concealed brackets" },
    ],
    images: [
      {
        src: "/projects/weave-01.jpg",
        alt: "Weave Shelving open configuration",
      },
      { src: "/projects/weave-02.jpg", alt: "Mid-transition" },
      { src: "/projects/weave-03.jpg", alt: "Closed configuration" },
    ],
  },
];

export const projectCategories = [
  "All",
  "Kinetic Arts",
  "Kinetic Luminaries",
  "Comissioned Works",
] as const;
