import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MoonStarsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28 12.503h-5.649M19.527 4.97v3.767M21.41 6.854h-3.766M25.258 20.105A10.816 10.816 0 0 1 11.924 6.771a10.827 10.827 0 1 0 13.334 13.334Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

MoonStarsRegular.displayName = "MoonStarsRegular";

export default MoonStarsRegular;
