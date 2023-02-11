import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignCenterVerticalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283h-2.403m-21.597 0h2.459m11.515 0h-3.965"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          width="7.318"
          height="19.826"
          rx="1"
          transform="matrix(1 0 0 -1 7.55 26.196)"
          fill="#1C1B1F"
        />
        <rect
          width="7.318"
          height="14.608"
          rx="1"
          transform="matrix(1 0 0 -1 19.05 23.587)"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

AlignCenterVerticalFill.displayName = "AlignCenterVerticalFill";

export default AlignCenterVerticalFill;
