import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShowersvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.512 26.628a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483ZM12.408 23.731a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483ZM6.202 23.317a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483ZM9.098 20.42a1.241 1.241 0 1 0 0-2.482 1.241 1.241 0 0 0 0 2.483Z"
          fill="#1C1B1F"
        />
        <path
          d="m9.03 11.467 13.31-2.219-2.219 13.31a.828.828 0 0 1-1.401.45L8.58 12.868a.828.828 0 0 1 .45-1.401Z"
          fill="#1C1B1F"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.96 5.938h-2.967a.828.828 0 0 0-.585.242L22.34 9.248"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ShowersvgFill.displayName = "ShowersvgFill";

export default ShowersvgFill;
