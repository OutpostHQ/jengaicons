import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DiscFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 28.783c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12Zm0-15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm9.168-8.32a1 1 0 0 0-.336 1.972 4.534 4.534 0 0 1 3.71 3.705 1 1 0 1 0 1.97-.338 6.534 6.534 0 0 0-5.345-5.339Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

DiscFill.displayName = "DiscFill";

export default DiscFill;
