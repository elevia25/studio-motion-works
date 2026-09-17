export interface InquiryType {
  id: string;
  label: string;
  description: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "phone" | "location" | "calendar";
}

export const inquiryTypes: InquiryType[] = [
  {
    id: "commission",
    label: "New Commission",
    description: "Kinetic sculpture, installation, or furnishing project",
  },
  {
    id: "collaboration",
    label: "Collaboration",
    description: "Artist, architect, or institution partnership",
  },
  {
    id: "press",
    label: "Press & Media",
    description: "Interviews, features, and editorial requests",
  },
  {
    id: "teaching",
    label: "Teaching & Lectures",
    description: "Space Kinematics workshops, talks, and guest faculty",
  },
  {
    id: "general",
    label: "General Inquiry",
    description: "Anything else — we read every message",
  },
];

export const channels: ContactChannel[] = [
  {
    label: "Studio",
    value: "Ahmedabad, Gujarat, India",
    href: "#map",
    icon: "location",
  },
  {
    label: "Email",
    value: "studio@motionworks.in",
    href: "mailto:studio@motionworks.in",
    icon: "mail",
  },
  {
    label: "Phone",
    value: "+91 79 4000 0000",
    href: "tel:+917940000000",
    icon: "phone",
  },
  {
    label: "Studio Visits",
    value: "By appointment · Tue–Sat",
    href: "#schedule",
    icon: "calendar",
  },
];

export const socialLinks = [
  { label: "Instagram", handle: "@studio.motionworks", href: "#" },
  { label: "Behance", handle: "/motionworks", href: "#" },
  { label: "LinkedIn", handle: "/studio-motionworks", href: "#" },
  { label: "Vimeo", handle: "/motionworks", href: "#" },
];

// Ahmedabad — Studio Motionworks
export const studioLocation = {
  city: "Ahmedabad",
  state: "Gujarat",
  country: "India",
  lat: 23.0225,
  lng: 72.5714,
};