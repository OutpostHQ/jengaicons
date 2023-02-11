import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChevronCircleUpsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12s5.373-12 12-12c6.628 0 12 5.373 12 12Zm-6.293 1.793-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414l4.293-4.293 4.293 4.293a1 1 0 0 0 1.414-1.414Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

ChevronCircleUpsvgFill.displayName = "ChevronCircleUpsvgFill";

export default ChevronCircleUpsvgFill;
