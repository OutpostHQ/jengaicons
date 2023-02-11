import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BoundingBoxFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.233 21.738v-10.91M22.415 25.01h-10.91M25.687 10.828v10.91M11.505 7.556h10.91"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="4.96"
          y="4.283"
          width="6.545"
          height="6.545"
          rx=".5"
          fill="#1C1B1F"
        />
        <rect
          x="4.96"
          y="21.737"
          width="6.545"
          height="6.545"
          rx=".5"
          fill="#1C1B1F"
        />
        <rect
          x="22.415"
          y="4.283"
          width="6.545"
          height="6.545"
          rx=".5"
          fill="#1C1B1F"
        />
        <rect
          x="22.415"
          y="21.737"
          width="6.545"
          height="6.545"
          rx=".5"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

BoundingBoxFill.displayName = "BoundingBoxFill";

export default BoundingBoxFill;
