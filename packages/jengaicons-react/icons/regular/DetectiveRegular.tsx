import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DetectiveRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.76 26.604a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72ZM22.24 26.604a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72ZM13.12 23.244h5.76M4 16.044h24"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.047 12.545v3.5h17.906v-2.969c0-4.288-3.5-8.33-6.08-4.906-.745.987-1.508 1.87-2.873 1.87-1.526 0-2.371-1.16-3.26-2.32-2.447-3.197-5.693.8-5.693 4.825Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

DetectiveRegular.displayName = "DetectiveRegular";

export default DetectiveRegular;
