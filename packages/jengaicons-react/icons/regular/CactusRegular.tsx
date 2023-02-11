import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CactusRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.846 27.577h20.308M12.308 27.577v-9.692h-1.385A6.923 6.923 0 0 1 4 10.962v0a2.32 2.32 0 0 1 2.308-2.308 2.32 2.32 0 0 1 2.307 2.308 2.32 2.32 0 0 0 2.308 2.307h1.385V9.115A3.692 3.692 0 0 1 16 5.423v0a3.692 3.692 0 0 1 3.692 3.692v8.77h1.385a2.32 2.32 0 0 0 2.308-2.308v0a2.32 2.32 0 0 1 2.307-2.308A2.32 2.32 0 0 1 28 15.577v0a6.923 6.923 0 0 1-6.923 6.923h-1.385v5.077"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

CactusRegular.displayName = "CactusRegular";

export default CactusRegular;
