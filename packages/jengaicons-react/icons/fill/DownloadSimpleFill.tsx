import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DownloadSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m17.96 16.668 2.535-2.536a1 1 0 1 1 1.415 1.414l-4.24 4.24a.996.996 0 0 1-1.049.237.996.996 0 0 1-.368-.234l-4.243-4.243a1 1 0 0 1 1.414-1.414l2.536 2.536V7.082a1 1 0 1 1 2 0v9.586ZM7.358 20.082a1 1 0 0 1 1 1v3.402h17.203v-3.402a1 1 0 0 1 2 0v3.902a1.5 1.5 0 0 1-1.5 1.5H7.858a1.5 1.5 0 0 1-1.5-1.5v-3.902a1 1 0 0 1 1-1Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

DownloadSimpleFill.displayName = "DownloadSimpleFill";

export default DownloadSimpleFill;
