import * as React from "react";
import { SVGProps } from "react";

const SvgArrowSquareLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={2}
      strokeLinejoin="round"
      d="M4 4h24v24H4z"
    />
    <path
      d="M15.243 11.757 11 16l4.243 4.243M11 16h10"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowSquareLeft;
