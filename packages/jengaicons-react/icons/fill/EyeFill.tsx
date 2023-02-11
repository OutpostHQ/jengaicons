import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EyeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.262 15.862a.508.508 0 0 0 .003.675c9.24 10.133 14.458 9.755 23.377.013a.508.508 0 0 0-.01-.69c-9.308-9.598-14.536-9.846-23.37.002Zm15.448.421a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

EyeFill.displayName = "EyeFill";

export default EyeFill;
