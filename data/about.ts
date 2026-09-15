export interface Milestone {
  phase: string;
  title: string;
  description: string;
  tag: string;
}

export interface NotableProject {
  id: string;
  title: string;
  client: string;
  location: string;
  category: string;
  accent: string;
  note: string;
}

export interface Value {
  number: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    phase: "01",
    title: "The Drawing Board",
    description:
      "Anuj Anjaria completes his Bachelor's in Interior Design at CEPT University, Ahmedabad — where the question of how people move through space first meets the question of how space itself might move.",
    tag: "CEPT University",
  },
  {
    phase: "02",
    title: "The Studio Is Founded",
    description:
      "Studio Motionworks takes shape in Ahmedabad as a multidisciplinary art practice — one part design studio, one part fabrication workshop, one part research laboratory for the study of movement.",
    tag: "Motionworks Founded",
  },
  {
    phase: "03",
    title: "Scale Arrives",
    description:
      "Commissioned works at Mumbai's Chhatrapati Shivaji Maharaj International Airport — the White Peacock and the Wood in Wood Kinetic Wall — push the practice into architectural scale, where a single piece must speak to thousands of travelers every day.",
    tag: "T2 International Airport",
  },
  {
    phase: "04",
    title: "Space Kinematics",
    description:
      "Anuj introduces Space Kinematics as a formal field of study and begins teaching it as Visiting Faculty at CEPT University — codifying the studio's lived practice into a discipline that can be taught, tested, and passed on.",
    tag: "Visiting Faculty",
  },
  {
    phase: "05",
    title: "The Work Keeps Moving",
    description:
      "Public art, museum installations, and private commissions across India — the JP Narayan Museum in Lucknow, Sadbhav Engineering, and beyond. The studio's work continues to expand where movement meets architecture, memory, and place.",
    tag: "Now",
  },
];

export const notableProjects: NotableProject[] = [
  {
    id: "white-peacock",
    title: "White Peacock",
    client: "Mumbai T2 International Airport",
    location: "Mumbai, India",
    category: "Kinetic Installation",
    accent: "#C5A065",
    note: "A suspended kinetic sculpture inspired by the unfolding plumage of the peacock — a national symbol rendered in motion.",
  },
  {
    id: "wood-in-wood",
    title: "Wood in Wood Kinetic Wall",
    client: "Mumbai T2 International Airport",
    location: "Mumbai, India",
    category: "Kinetic Wall",
    accent: "#B87333",
    note: "A monumental kinetic wall where wooden elements slide, rotate, and rearrange — a warm, organic counterpoint to the terminal's steel.",
  },
  {
    id: "intersecting-thoughts",
    title: "Intersecting Thoughts",
    client: "JP Narayan Museum",
    location: "Lucknow, India",
    category: "Museum Installation",
    accent: "#C0C0C0",
    note: "A kinetic meditation on civic thought and dialogue — intersecting paths of motion that echo a museum of ideas.",
  },
  {
    id: "effulgence",
    title: "Effulgence",
    client: "Shree Shakti Greens",
    location: "Ahmedabad, India",
    category: "Public Art",
    accent: "#C5A065",
    note: "A radiant kinetic work celebrating light and movement — a landmark piece rooted in the studio's home city.",
  },
  {
    id: "spine-34",
    title: "Spine 34",
    client: "Sadbhav Engineering",
    location: "Ahmedabad, India",
    category: "Corporate Commission",
    accent: "#B87333",
    note: "A structural, spine-like kinetic form — commissioned work that brings the language of movement into the workplace.",
  },
];

export const values: Value[] = [
  {
    number: "01",
    title: "Imagination → Movement",
    description:
      "Every commission begins as an artist's vision. Our work is to translate it — faithfully and surprisingly — into a physical vocabulary of motion, balance, and time.",
  },
  {
    number: "02",
    title: "Multidisciplinary by Default",
    description:
      "We work across sculpture, design, fabrication, engineering, and music. The best kinetic ideas rarely arrive from a single discipline.",
  },
  {
    number: "03",
    title: "Built to Endure",
    description:
      "Public kinetic art must live outdoors, in airports, in museums, in the weather. We design for decades of daily motion, not a gallery opening.",
  },
  {
    number: "04",
    title: "Space Is a Material",
    description:
      "We treat the space around an object — the air it moves through, the shadows it casts, the paths it invites — as part of the work itself.",
  },
];

export const founder = {
  name: "Anuj Anjaria",
  role: "Founder & Principal Artist",
  location: "Ahmedabad, India",
  bio: [
    "Anuj Anjaria is the founder of Studio Motionworks, where he leads a multidisciplinary practice that translates artistic imagination into physical movement.",
    "He holds a Bachelor's in Interior Design from CEPT University, Ahmedabad. Alongside his work as a kinetic artist, Anuj is a musician — he plays the Santoor, the hammered dulcimer whose hundred strings are struck with small wooden mallets. It is a practice of precision, resonance, and invisible force producing visible movement — a philosophy that runs straight through his kinetic work.",
    "Anuj has introduced Space Kinematics as a distinct field of study and teaches it as Visiting Faculty at CEPT University, where a new generation of designers learns to think about movement as a fundamental property of space.",
  ],
  facts: [
    { label: "Education", value: "CEPT University, Ahmedabad" },
    { label: "Discipline", value: "Interior Design" },
    { label: "Practice", value: "Kinetic Art" },
    { label: "Instrument", value: "Santoor (Hammered Dulcimer)" },
    { label: "Teaching", value: "Visiting Faculty, CEPT" },
    { label: "Based In", value: "Ahmedabad, India" },
  ],
};

export const philosophyQuote =
  "We don't just design objects. We translate imagination into movement.";