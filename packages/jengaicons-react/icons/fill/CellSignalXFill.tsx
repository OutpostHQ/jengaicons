import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CellSignalXFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M6.167 26.95h19.626a.5.5 0 0 0 .5-.5V19.11l-1.252 1.253a2 2 0 0 1-2.829-2.829l1.253-1.252-1.252-1.253a2 2 0 0 1 2.828-2.828l1.252 1.252v-6.63a.5.5 0 0 0-.853-.354L5.814 26.096a.5.5 0 0 0 .353.854Z"
          fill="#1C1B1F"
        />
        <path
          d="m28.96 13.616-5.333 5.334M28.96 18.95l-5.333-5.334"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

CellSignalXFill.displayName = "CellSignalXFill";

export default CellSignalXFill;
