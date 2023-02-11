import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MoneysvgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 19.711a3.429 3.429 0 1 0 0-6.857 3.429 3.429 0 0 0 0 6.857ZM28.96 15.426l-6.857-6h6.857v6ZM28.96 17.14l-6.857 6h6.857v-6ZM4.96 15.426l6.857-6H4.96v6ZM4.96 17.14l6.857 6H4.96v-6Z"
        fill="#1C1B1F"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M4.96 9.426h24V23.14h-24z"
      />
    </svg>
  );
});

MoneysvgFill.displayName = "MoneysvgFill";

export default MoneysvgFill;
