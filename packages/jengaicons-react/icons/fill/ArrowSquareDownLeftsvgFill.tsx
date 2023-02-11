import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowSquareDownLeftsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.96 4.283a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2h-20Zm5.757 16.243a.997.997 0 0 0 .715.292h5.992a1 1 0 1 0 0-2H15.84l5.364-5.364a1 1 0 0 0-1.415-1.414l-5.364 5.364v-3.586a1 1 0 0 0-2 0v6a.997.997 0 0 0 .293.708Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

ArrowSquareDownLeftsvgFill.displayName = "ArrowSquareDownLeftsvgFill";

export default ArrowSquareDownLeftsvgFill;
