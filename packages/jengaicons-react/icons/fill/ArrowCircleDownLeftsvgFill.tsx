import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowCircleDownLeftsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12ZM12.648 13.85a1 1 0 0 1 1.225.708l.928 3.463 3.793-6.57a1 1 0 1 1 1.732 1l-3.793 6.57 3.464-.928a1 1 0 1 1 .517 1.932l-5.788 1.551a1.035 1.035 0 0 1-.351.033.996.996 0 0 1-.883-.744l-1.55-5.79a1 1 0 0 1 .706-1.225Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

ArrowCircleDownLeftsvgFill.displayName = "ArrowCircleDownLeftsvgFill";

export default ArrowCircleDownLeftsvgFill;
