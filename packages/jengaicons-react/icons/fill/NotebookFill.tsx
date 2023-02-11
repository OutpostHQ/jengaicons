import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NotebookFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 3.283a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-24a1 1 0 0 0-1-1h-24Zm1 24v-22h5v22h-5Zm10-14a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 4a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

NotebookFill.displayName = "NotebookFill";

export default NotebookFill;
