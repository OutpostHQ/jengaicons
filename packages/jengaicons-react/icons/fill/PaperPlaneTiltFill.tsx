import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PaperPlaneTiltFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.212 11.143a.5.5 0 0 0-.069.931l9.251 4.346 5.413-5.413a1 1 0 0 1 1.414 1.414l-5.404 5.404 4.385 9.253a.5.5 0 0 0 .93-.07l6.56-21.804a.5.5 0 0 0-.622-.623L6.212 11.143Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

PaperPlaneTiltFill.displayName = "PaperPlaneTiltFill";

export default PaperPlaneTiltFill;
