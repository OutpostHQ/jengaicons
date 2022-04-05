import * as React from "react";
import { SVGProps } from "react";

const SvgArrowFatLinesUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 16 16 4l12 12h-6v4H10v-4H4ZM22 28H10M22 24H10"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowFatLinesUp;
