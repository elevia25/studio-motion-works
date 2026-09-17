import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Instagram = ({ size = 24, strokeWidth = 2, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <path d="M16.5 7.5v.01" />
  </svg>
);

export default Instagram;
