import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EjectSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.305 5.878a.5.5 0 0 0-.79 0L5.584 19.977a.5.5 0 0 0 .395.806H27.84a.5.5 0 0 0 .395-.806L17.304 5.878ZM4.96 25.783a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2h-24Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

EjectSimpleFill.displayName = "EjectSimpleFill";

export default EjectSimpleFill;
