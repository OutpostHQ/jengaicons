import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NewspaperClippingRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18 14.099h6M18 18.099h6"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 6.099H4V26.9l3.885-1.941 3.95 1.941 4.286-1.941 3.817 1.941 4.151-1.941L28 26.9V6.1Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M8 12.099h6v8H8z"
        />
      </svg>
    );
  }
);

NewspaperClippingRegular.displayName = "NewspaperClippingRegular";

export default NewspaperClippingRegular;
