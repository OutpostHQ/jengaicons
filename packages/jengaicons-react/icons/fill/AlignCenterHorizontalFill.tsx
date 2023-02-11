import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignCenterHorizontalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 4.283v2.402m0 21.598v-2.46m0-11.514v3.964"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          width="7.318"
          height="19.826"
          rx="1"
          transform="matrix(0 -1 -1 0 26.873 25.693)"
          fill="#1C1B1F"
        />
        <rect
          width="7.318"
          height="14.608"
          rx="1"
          transform="matrix(0 -1 -1 0 24.264 14.193)"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

AlignCenterHorizontalFill.displayName = "AlignCenterHorizontalFill";

export default AlignCenterHorizontalFill;
