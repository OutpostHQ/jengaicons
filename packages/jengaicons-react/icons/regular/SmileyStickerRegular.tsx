import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SmileyStickerRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.5 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          fill="#1C1B1F"
        />
        <path
          d="M21.197 19.5a6 6 0 0 1-10.394 0"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 16.5c0 6.627 5.373 12 12 12 1.005 0 1.98-.123 2.913-.356a.49.49 0 0 0 .222-.124l8.277-8.012a.489.489 0 0 0 .131-.217c.298-1.046.457-2.15.457-3.291 0-6.627-5.373-12-12-12S4 9.873 4 16.5Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    );
  }
);

SmileyStickerRegular.displayName = "SmileyStickerRegular";

export default SmileyStickerRegular;
