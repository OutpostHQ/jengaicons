import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SkipBackCircleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.783c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12Zm-16.75-6.5a1 1 0 0 1 1 1v4.868l7.733-4.884a.5.5 0 0 1 .767.423v10.186a.5.5 0 0 1-.767.423l-7.733-4.884v4.869a1 1 0 0 1-2 0V11.281a1 1 0 0 1 1-1Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

SkipBackCircleFill.displayName = "SkipBackCircleFill";

export default SkipBackCircleFill;
