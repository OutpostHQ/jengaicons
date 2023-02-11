import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CarSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.635 5.783a.5.5 0 0 1 .457.297l3.868 8.703v11.5a.5.5 0 0 1-.5.5h-4.22a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 0-.5-.5H10.62a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-.5.5H5.46a.5.5 0 0 1-.5-.5v-11.5L8.828 6.08a.5.5 0 0 1 .457-.297h15.35ZM9.653 13.616a1.167 1.167 0 0 0 0 2.334h14.614a1.167 1.167 0 0 0 0-2.334H9.653Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

CarSimpleFill.displayName = "CarSimpleFill";

export default CarSimpleFill;
