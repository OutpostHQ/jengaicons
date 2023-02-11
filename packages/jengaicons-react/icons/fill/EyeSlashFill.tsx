import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EyeSlashFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M18.317 10.264c-.584-.647-.117-1.596.72-1.355 2.794.803 5.74 3.025 9.274 6.622a.982.982 0 0 1 .02 1.356 57.85 57.85 0 0 1-1.368 1.428.982.982 0 0 1-1.428-.042l-7.218-8.009ZM5.562 16.861a.98.98 0 0 1-.006-1.325c1.667-1.832 3.206-3.298 4.67-4.404a.965.965 0 0 1 1.264.101l10.053 10.048c.45.45.373 1.203-.187 1.505-5.075 2.731-9.505.88-15.794-5.925Zm11.398 3.172a3.75 3.75 0 0 1-3.538-4.996c.199-.564.908-.629 1.344-.22l3.794 3.564c.436.409.416 1.12-.134 1.355-.45.191-.946.297-1.466.297Z"
        fill="#1C1B1F"
      />
      <path
        d="m7.636 6.959 18.648 18.648"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
});

EyeSlashFill.displayName = "EyeSlashFill";

export default EyeSlashFill;
