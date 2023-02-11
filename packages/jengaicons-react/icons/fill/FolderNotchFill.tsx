import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderNotchFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.46 6.552a1 1 0 0 0-1 1v6.272c0 .033.002.066.005.1v11.09a1 1 0 0 0 1 1H28.46a1 1 0 0 0 1-1V11.483a1 1 0 0 0-1-1H17.19l-3.638-3.638a1 1 0 0 0-.707-.293H5.46Zm1 4.692V8.552h5.97l2.556 2.556-2.456 1.716H6.46v-1.58Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

FolderNotchFill.displayName = "FolderNotchFill";

export default FolderNotchFill;
