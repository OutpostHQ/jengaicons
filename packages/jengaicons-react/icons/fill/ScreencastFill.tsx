import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ScreencastFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.46 6.783a.5.5 0 0 0-.5.5v5.154c0 .27.216.49.485.508 7.15.463 12.863 6.194 13.297 13.35.017.271.238.488.508.488h9.21a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5h-23Zm-1.5 10a1 1 0 0 1 1-1 11 11 0 0 1 11 11 1 1 0 0 1-2 0 9 9 0 0 0-9-9 1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2 5 5 0 0 1 5 5 1 1 0 0 0 2 0 7 7 0 0 0-7-7Zm0 4a1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

ScreencastFill.displayName = "ScreencastFill";

export default ScreencastFill;
