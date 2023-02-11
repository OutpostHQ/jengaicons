import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignCenterHorizontalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 4v2.403M16 28v-2.459m0-11.515v3.965"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M25.913 25.41v-7.318H6.087v7.318zM23.304 13.91V6.592H8.696v7.318z"
        />
      </svg>
    );
  }
);

AlignCenterHorizontalRegular.displayName = "AlignCenterHorizontalRegular";

export default AlignCenterHorizontalRegular;
