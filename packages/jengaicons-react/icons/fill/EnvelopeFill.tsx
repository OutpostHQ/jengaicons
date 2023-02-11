import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EnvelopeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.96 7.283a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1h-22Zm9.017 10.603-7.306 6.428a1 1 0 1 1-1.321-1.502l7.18-6.316-7.138-6.85a.872.872 0 0 1 0-1.27.963.963 0 0 1 1.323 0l9.218 8.847 9.332-8.958a.963.963 0 0 1 1.323 0c.365.351.365.92 0 1.27l-7.14 6.852 7.137 6.279a1 1 0 0 1-1.322 1.501L19 17.777l-2.067 1.985-1.956-1.876Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

EnvelopeFill.displayName = "EnvelopeFill";

export default EnvelopeFill;
