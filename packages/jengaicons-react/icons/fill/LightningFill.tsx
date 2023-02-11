import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LightningFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m18.811 12.292 1.223-6.337c.095-.49-.508-.8-.852-.44L8.697 16.51a.5.5 0 0 0 .187.814l6.045 2.243a.5.5 0 0 1 .315.574l-1.381 6.41c-.106.493.502.815.85.45l10.52-11.026a.5.5 0 0 0-.18-.811l-5.932-2.31a.5.5 0 0 1-.31-.561Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

LightningFill.displayName = "LightningFill";

export default LightningFill;
