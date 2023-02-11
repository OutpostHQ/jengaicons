import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GasPumpRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 26.15h18.456M15.996 14.154H10.46"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M6.768 5.849h12.919v20.302H6.768z"
        />
        <path
          d="M19.695 14.132h1.885a2.782 2.782 0 0 1 2.782 2.781v3.744a1.82 1.82 0 0 0 1.819 1.82v0A1.82 1.82 0 0 0 28 20.656V10.572l-2.81-2.81"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

GasPumpRegular.displayName = "GasPumpRegular";

export default GasPumpRegular;
