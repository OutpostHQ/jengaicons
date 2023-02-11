import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SlidersHorizontalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.727 22.5H4M28 22.5h-3.818M21.455 25.227a2.727 2.727 0 1 0 0-5.454 2.727 2.727 0 0 0 0 5.454ZM10 10.5H4M28 10.5H15.455M12.727 13.227a2.727 2.727 0 1 0 0-5.454 2.727 2.727 0 0 0 0 5.454Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SlidersHorizontalRegular.displayName = "SlidersHorizontalRegular";

export default SlidersHorizontalRegular;
