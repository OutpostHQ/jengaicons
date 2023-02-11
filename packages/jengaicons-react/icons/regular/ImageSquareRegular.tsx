import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ImageSquareRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.5 14.1c.828 0 1.5-.806 1.5-1.8s-.672-1.8-1.5-1.8-1.5.806-1.5 1.8.672 1.8 1.5 1.8Z"
          fill="#1C1B1F"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M4 4.5h24v24H4z"
        />
        <path
          d="m4.088 22.368 6.65-7.98 6.65 7.98 4.504-5.406 5.935 7.122"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ImageSquareRegular.displayName = "ImageSquareRegular";

export default ImageSquareRegular;
