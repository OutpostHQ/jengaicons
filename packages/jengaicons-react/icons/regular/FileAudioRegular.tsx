import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileAudioRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.998 28H26V11.008L19.021 4H6v11.982"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.09 10.94V4.129l6.818 6.813h-6.819ZM17.717 19.128a4.37 4.37 0 0 1 0 6.18M9.287 19.978v4.687M13.656 28V16.47l-4.281 3.437h-.953a2.422 2.422 0 0 0 0 4.843h.953l4.28 3.25Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

FileAudioRegular.displayName = "FileAudioRegular";

export default FileAudioRegular;
