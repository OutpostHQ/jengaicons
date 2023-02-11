import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GitPullRequestFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.596 8.101A3.82 3.82 0 0 1 9.77 11.79c.005.043.008.086.008.13v8.728c0 .044-.003.087-.008.13a3.82 3.82 0 0 1-.992 7.506 3.818 3.818 0 0 1-.991-7.506 1.01 1.01 0 0 1-.009-.13v-8.728c0-.044.003-.087.009-.13a3.82 3.82 0 0 1 .991-7.506 3.818 3.818 0 0 1 3.818 3.818ZM28.96 24.465a3.818 3.818 0 1 1-5.253-3.54 1.002 1.002 0 0 1-.039-.278v-7.474l-4.617-5.176v3.922a1 1 0 1 1-2 0V5.374a.995.995 0 0 1 .25-.662.998.998 0 0 1 .75-.338h6.545a1 1 0 1 1 0 2h-4.313l5.131 5.752a1 1 0 0 1 .254.665V20.683a3.819 3.819 0 0 1 3.292 3.782Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

GitPullRequestFill.displayName = "GitPullRequestFill";

export default GitPullRequestFill;
