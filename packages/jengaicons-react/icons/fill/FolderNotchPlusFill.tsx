import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderNotchPlusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 6.052a1 1 0 0 0-1 1v6.272c0 .033.002.066.005.1v11.09a1 1 0 0 0 1 1H27.96a1 1 0 0 0 1-1V10.983a1 1 0 0 0-1-1H16.69l-3.638-3.638a1 1 0 0 0-.707-.293H4.96Zm1 4.692V8.052h5.97l2.556 2.556-2.456 1.716H5.96v-1.58Zm7.402 7.039a1 1 0 1 0 0 2h2.12v2.12a1 1 0 0 0 2 0v-2.12h2.12a1 1 0 0 0 0-2h-2.12v-2.12a1 1 0 0 0-2 0v2.12h-2.12Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

FolderNotchPlusFill.displayName = "FolderNotchPlusFill";

export default FolderNotchPlusFill;
