export const navItems = [
  ["01", "HOME", "#home"],
  ["02", "ABOUT", "#about"],
  ["03", "PROCESS", "#process"],
  ["04", "PORTFOLIO", "#portfolio"],
  ["05", "PROJECT", "#project"],
  ["06", "CONTACT", "#contact"],
] as const;

export const projects = [
  { id: "FAÇADE ALPHA", tag: "KINETIC / EXTERIOR", className: "h-[180px]" },
  { id: "GALLERY DELTA", tag: "SCULPT / INTERIOR", className: "h-[180px]" },
  { id: "PAVILION OMEGA", tag: "EVENT / TEMPORARY", className: "h-[150px]" },
  { id: "SCULPTURE EPSILON", tag: "OBJECT / KINETIC", className: "h-[150px]" },
] as const;
