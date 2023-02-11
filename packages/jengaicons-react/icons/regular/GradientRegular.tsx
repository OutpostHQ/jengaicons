import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GradientRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.5 13.75h10M18.5 13.75h10M4.5 18.75H10M23 18.75h5.5M13.5 18.75h6M4.5 23.75h3M11.5 23.75h3M18.5 23.75h3M25.5 23.75h3M4.5 8.75h24"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

GradientRegular.displayName = "GradientRegular";

export default GradientRegular;
