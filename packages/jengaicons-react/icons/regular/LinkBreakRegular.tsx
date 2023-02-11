import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LinkBreakRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.2 7.6V4M20.8 28v-3.6M7.6 11.2H4M28 20.8h-3.6M7.454 16.06l-1.697 1.697a6 6 0 0 0 8.486 8.486l1.697-1.697M24.546 15.94l1.697-1.697a6 6 0 0 0-8.485-8.486L16.06 7.454"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

LinkBreakRegular.displayName = "LinkBreakRegular";

export default LinkBreakRegular;
