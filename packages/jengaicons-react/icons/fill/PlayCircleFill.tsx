import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlayCircleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.783c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12Zm-15.197-5.526 8.212 5.101a.5.5 0 0 1 0 .85l-8.212 5.1a.5.5 0 0 1-.764-.424V11.682a.5.5 0 0 1 .764-.425Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

PlayCircleFill.displayName = "PlayCircleFill";

export default PlayCircleFill;
