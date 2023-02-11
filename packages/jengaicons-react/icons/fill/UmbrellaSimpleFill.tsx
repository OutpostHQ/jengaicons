import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UmbrellaSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 5.32c-6.628 0-12 5.373-12 12v.605c0 .07.056.127.126.127h10.892a1.016 1.016 0 0 0-.008.128v7.298a3.768 3.768 0 0 0 7.536 0v-.252a1 1 0 0 0-2 0v.252a1.768 1.768 0 0 1-3.536 0V18.18c0-.043-.003-.086-.008-.128h10.872c.07 0 .126-.057.126-.127v-.605c0-6.627-5.373-12-12-12Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

UmbrellaSimpleFill.displayName = "UmbrellaSimpleFill";

export default UmbrellaSimpleFill;
