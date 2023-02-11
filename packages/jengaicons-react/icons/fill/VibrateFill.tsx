import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const VibrateFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.817 6.854a1 1 0 0 0-1 1v16.857a1 1 0 0 0 1 1h8.285a1 1 0 0 0 1-1V7.854a1 1 0 0 0-1-1h-8.285Zm-3.428 5.144a1 1 0 1 0-2 0v8.57a1 1 0 1 0 2 0v-8.57Zm16.142-1a1 1 0 0 1 1 1v8.57a1 1 0 1 1-2 0v-8.57a1 1 0 0 1 1-1Zm3.429 1.713a1 1 0 0 1 1 1v5.143a1 1 0 0 1-2 0v-5.143a1 1 0 0 1 1-1Zm-24 0a1 1 0 0 1 1 1v5.143a1 1 0 1 1-2 0v-5.143a1 1 0 0 1 1-1Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

VibrateFill.displayName = "VibrateFill";

export default VibrateFill;
