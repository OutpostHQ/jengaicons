import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RepeatOnceFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M25.424 4.833a1 1 0 1 0-1.414 1.414l2.536 2.536H12.96a9 9 0 0 0-9 9 1 1 0 0 0 2 0 7 7 0 0 1 7-7h13.586l-2.536 2.536a1 1 0 0 0 1.414 1.414l4.236-4.236a1.001 1.001 0 0 0 .007-1.421m-4.243-4.243 4.243 4.243-4.243-4.243ZM29.96 16.783a1 1 0 0 0-2 0 7 7 0 0 1-7 7H7.374l2.536-2.536a1 1 0 1 0-1.414-1.414l-4.243 4.243a.998.998 0 0 0 .007 1.421l4.236 4.236a1 1 0 0 0 1.414-1.415l-2.536-2.535H20.96a9 9 0 0 0 9-9Z"
          fill="#1C1B1F"
        />
        <path
          d="M17.727 20.283v-5.089a.5.5 0 0 0-.769-.421l-.765.487"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

RepeatOnceFill.displayName = "RepeatOnceFill";

export default RepeatOnceFill;
