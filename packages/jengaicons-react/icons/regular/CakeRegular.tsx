import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CakeRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 13.23v-2.769M16 10.461C21.333 8.615 16 4 16 4s-5.539 4.615 0 6.461ZM19.923 17.615a3.923 3.923 0 0 1-7.846 0"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.077 17.615a3.923 3.923 0 0 1-3.847 3.923c-2.2.042-4-1.8-4-4V16A2.77 2.77 0 0 1 7 13.23h18A2.77 2.77 0 0 1 27.77 16v1.538c0 2.2-1.801 4.042-4 4a3.924 3.924 0 0 1-3.847-3.923"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.154 20.762v6.315a.923.923 0 0 1-.923.923H6.769a.923.923 0 0 1-.923-.923v-6.315"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CakeRegular.displayName = "CakeRegular";

export default CakeRegular;
