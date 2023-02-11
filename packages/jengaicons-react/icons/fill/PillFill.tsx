import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PillFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M26.239 7.004a5.848 5.848 0 0 0-8.27 0L7.68 17.29a5.848 5.848 0 0 0 8.27 8.27L26.24 15.275a5.848 5.848 0 0 0 0-8.27Zm-6.857 1.414a3.848 3.848 0 0 1 5.442 5.442l-5.151 5.152-5.442-5.442 5.151-5.152Zm4.352 2.933a1 1 0 0 1-.024 1.414l-2.617 2.527a1 1 0 0 1-1.389-1.438l2.616-2.527a1 1 0 0 1 1.415.024Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

PillFill.displayName = "PillFill";

export default PillFill;
