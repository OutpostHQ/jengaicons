import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NyTimesLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.608 19.828a1.532 1.532 0 1 0 0-3.063 1.532 1.532 0 0 0 0 3.063Z"
          fill="#1C1B1F"
        />
        <path
          d="M25.902 20.257A10.213 10.213 0 1 1 15.99 7.574"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.245 11.131A3.574 3.574 0 0 1 8.596 4l14.808 7.148a3.574 3.574 0 1 0 0-7.148M5.863 19.103 15.991 13.7v14.297M11.906 15.88v11.268"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

NyTimesLogoRegular.displayName = "NyTimesLogoRegular";

export default NyTimesLogoRegular;
