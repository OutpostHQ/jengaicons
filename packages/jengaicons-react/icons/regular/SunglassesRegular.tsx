import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SunglassesRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28 18H4M21 18l5.925 5.925M6 18l5.925 5.925"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.117 6.5H9a5 5 0 0 0-5 5v9.675M22.883 6.5H23a5 5 0 0 1 5 5v9.675"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 18.357c0-.197.16-.357.357-.357h8.286c.197 0 .357.16.357.357V21a4.5 4.5 0 1 1-9 0v-2.643ZM19 18.357c0-.197.16-.357.357-.357h8.286c.197 0 .357.16.357.357V21a4.5 4.5 0 1 1-9 0v-2.643Z"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

SunglassesRegular.displayName = "SunglassesRegular";

export default SunglassesRegular;
