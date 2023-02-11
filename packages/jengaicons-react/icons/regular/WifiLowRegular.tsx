import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WifiLowRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.911 14.142a5.92 5.92 0 0 1 8.178 0"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 19.497a1.399 1.399 0 1 0 0-2.798 1.399 1.399 0 0 0 0 2.798Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

WifiLowRegular.displayName = "WifiLowRegular";

export default WifiLowRegular;
