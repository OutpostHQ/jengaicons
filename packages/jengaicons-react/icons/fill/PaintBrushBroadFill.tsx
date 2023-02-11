import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PaintBrushBroadFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.383 3.283a6 6 0 0 0-6 6v9.24a1 1 0 0 0 1 1h6.881l-.503 4.95a4.369 4.369 0 1 0 8.694 0l-.503-4.95h6.585a1 1 0 0 0 1-1V4.284a1 1 0 0 0-1-1H11.383Zm11.308 2v4.73a1 1 0 0 0 2 0v-4.73h1.846v8.576H7.383V9.283a4 4 0 0 1 4-4H22.69Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

PaintBrushBroadFill.displayName = "PaintBrushBroadFill";

export default PaintBrushBroadFill;
