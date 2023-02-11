import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowArcLeftsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 22.283c0-2.373-.69-4.694-1.982-6.667a11.816 11.816 0 0 0-5.279-4.42 11.546 11.546 0 0 0-6.796-.682 11.692 11.692 0 0 0-6.022 3.284l-3.92 4"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.96 11.798v6h6"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ArrowArcLeftsvgFill.displayName = "ArrowArcLeftsvgFill";

export default ArrowArcLeftsvgFill;
