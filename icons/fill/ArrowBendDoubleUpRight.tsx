import * as React from "react";
import { SVGProps } from "react";

const SvgArrowBendDoubleUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.96 24.404a12 12 0 0 1 12-12h6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m18.718 8.162 4.242 4.242-4.242 4.243M24.718 8.162l4.242 4.242-4.242 4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowBendDoubleUpRight;
