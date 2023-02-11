import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const KnifesvgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m19.093 12.195 6.174 6.174S16.96 29.445 4.96 26.676L25.02 6.122a2.308 2.308 0 1 1 3.264 3.263l-5.812 6.19"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.769 5.621c-.28.116-.534.286-.749.5l-5.948 6.166 3.4 3.288 5.812-6.19a2.307 2.307 0 0 0-2.515-3.764Z"
        fill="#1C1B1F"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

KnifesvgFill.displayName = "KnifesvgFill";

export default KnifesvgFill;
