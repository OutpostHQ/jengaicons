import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TriangleFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.094 7.39a1 1 0 0 1 1.732 0l10.268 17.785a1 1 0 0 1-.866 1.5H6.692a1 1 0 0 1-.866-1.5L16.094 7.391Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

TriangleFill.displayName = "TriangleFill";

export default TriangleFill;
