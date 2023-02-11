import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WindRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4 16.55h21.343A2.664 2.664 0 0 0 28 13.886v0a2.647 2.647 0 0 0-2.64-2.648v0a2.64 2.64 0 0 0-2.64 2.64v.035M4 11.237h10.729a2.664 2.664 0 0 0 2.657-2.666v0a2.647 2.647 0 0 0-2.64-2.648v0a2.64 2.64 0 0 0-2.64 2.64v.035M4 21.763h10.729a2.664 2.664 0 0 1 2.657 2.665v0a2.647 2.647 0 0 1-2.64 2.649v0a2.64 2.64 0 0 1-2.64-2.64V24.4"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

WindRegular.displayName = "WindRegular";

export default WindRegular;
