import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DiceSixRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          fill="#1C1B1F"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M4 4h24v24H4z"
        />
        <path
          d="M11.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          fill="#1C1B1F"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M4 4h24v24H4z"
        />
      </svg>
    );
  }
);

DiceSixRegular.displayName = "DiceSixRegular";

export default DiceSixRegular;
