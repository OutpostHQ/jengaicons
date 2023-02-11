import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrosoftTeamsLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M14.597 10.186a3.84 3.84 0 1 1 5.243 1.404"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.532 6.97a3.12 3.12 0 1 1-.408 3.408"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.477 23.145a5.28 5.28 0 0 0 5.28 5.28h1.021a6.301 6.301 0 0 0 6.301-6.302v-9.936a.081.081 0 0 0-.081-.081h-4.141"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M5.441 11.186a1 1 0 0 1 1-1H18.84a1 1 0 0 1 1 1v11.439a1 1 0 0 1-1 1H6.441a1 1 0 0 1-1-1v-11.44Zm4.04 2.84a1 1 0 0 1 1-1h4.32a1 1 0 1 1 0 2h-1.16v-.002h-2v.002h-1.16a1 1 0 0 1-1-1Zm2.16 1v4.76a1 1 0 0 0 2 0v-4.76h-2Z"
          fill="#1C1B1F"
        />
        <path
          d="M19.84 12.106h8.582c.032 0 .057.025.057.057v7.142a4.32 4.32 0 0 1-4.32 4.32"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

MicrosoftTeamsLogosvgFill.displayName = "MicrosoftTeamsLogosvgFill";

export default MicrosoftTeamsLogosvgFill;
