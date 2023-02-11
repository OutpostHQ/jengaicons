import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SelectionInverseFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 3.283h24a1 1 0 0 1 1 1v24a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2l-23-23v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm1 7a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0v-4Zm0 8a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0v-4Zm0 8a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2h-1v-1Zm5 1a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2h-4Zm8 0a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2h-4Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

SelectionInverseFill.displayName = "SelectionInverseFill";

export default SelectionInverseFill;
