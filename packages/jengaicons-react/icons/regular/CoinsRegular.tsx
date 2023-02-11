import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CoinsRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.571 15.453c4.734 0 8.572-1.76 8.572-3.932 0-2.171-3.838-3.932-8.572-3.932C7.838 7.59 4 9.35 4 11.521c0 2.171 3.838 3.931 8.571 3.931ZM12.571 15.452v3.932"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 11.727v2.916c0 1.244.436 2.497 1.491 3.155 3.656 2.28 10.104 2.483 14.076.034 1.103-.68 1.576-1.98 1.576-3.275v-2.83"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17.846 14.642v3.932M7.297 14.642v3.932M20.949 12.472c4.008.33 7.05 1.937 7.05 3.87 0 2.172-3.837 3.932-8.57 3.932-1.8 0-3.469-.254-4.848-.689M19.428 20.274v3.931"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 16.549v2.83c0 1.295-.473 2.594-1.575 3.274-4.014 2.475-10.554 2.242-14.188-.105-.975-.628-1.38-1.792-1.38-2.952v0"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24.703 19.464v3.931M14.154 19.59v3.805"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CoinsRegular.displayName = "CoinsRegular";

export default CoinsRegular;
