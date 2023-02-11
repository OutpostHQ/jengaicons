import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BellSimpleRingingRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.16 28h7.68M22.651 4a12.535 12.535 0 0 1 4.55 5.054M4.798 9.054A12.535 12.535 0 0 1 9.348 4"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.561 23.27s2.464-3.503 2.88-5.885c.139-.794.168-1.636.118-2.491-.278-4.738 2.695-9.933 7.44-9.933 4.747 0 7.72 5.195 7.442 9.933-.05.855-.02 1.697.118 2.491.416 2.381 2.88 5.885 2.88 5.885H5.56Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

BellSimpleRingingRegular.displayName = "BellSimpleRingingRegular";

export default BellSimpleRingingRegular;
