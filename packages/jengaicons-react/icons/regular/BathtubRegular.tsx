import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BathtubRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          d="M10 23.286v2.571M22 23.286v2.571"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 14.357a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v3.929a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3.929Z"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
        <rect
          x="16.857"
          y="13.857"
          width="6.857"
          height="4.286"
          rx=".5"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
        <path
          d="M8.286 13.857V8.143a2 2 0 0 1 2-2h.285a2 2 0 0 1 2 2v.143"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

BathtubRegular.displayName = "BathtubRegular";

export default BathtubRegular;
