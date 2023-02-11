import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextOutdentFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.737 8.902a1 1 0 1 1 1.414 1.415l-3.008 3.007 3.008 3.008a1 1 0 0 1-1.414 1.415L7.022 14.03a1 1 0 0 1 0-1.414l3.715-3.715Zm5.019.212a1 1 0 1 0 0 2H26.19a1 1 0 1 0 0-2H15.756Zm0 6.421a1 1 0 1 0 0 2H26.19a1 1 0 1 0 0-2H15.756Zm-8.224 7.421a1 1 0 0 1 1-1H26.19a1 1 0 1 1 0 2H8.53a1 1 0 0 1-1-1Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

TextOutdentFill.displayName = "TextOutdentFill";

export default TextOutdentFill;
