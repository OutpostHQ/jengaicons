import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowCircleLeftsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12 0-6.628 5.373-12 12-12 6.628 0 12 5.372 12 12Zm-12.05-4.95a1 1 0 0 1 0 1.414l-2.536 2.536h7.586a1 1 0 1 1 0 2h-7.586l2.536 2.535a1 1 0 0 1-1.414 1.415l-4.238-4.238-.057-.06a.994.994 0 0 1-.24-.652.997.997 0 0 1 .297-.712l4.238-4.238a1 1 0 0 1 1.414 0Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

ArrowCircleLeftsvgFill.displayName = "ArrowCircleLeftsvgFill";

export default ArrowCircleLeftsvgFill;
