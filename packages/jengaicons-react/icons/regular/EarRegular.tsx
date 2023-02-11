import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EarRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M22 19.27a2.308 2.308 0 1 1-4.615 0c0-2.77 3.23-2.77 3.23-5.54a4.615 4.615 0 1 0-9.23 0"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.916 26.654a5.077 5.077 0 0 1-8.993-3.23c0-4.788-4.154-3.232-4.154-9.693a9.23 9.23 0 1 1 18.462 0"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

EarRegular.displayName = "EarRegular";

export default EarRegular;
