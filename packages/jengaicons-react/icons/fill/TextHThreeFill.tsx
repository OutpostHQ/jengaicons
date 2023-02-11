import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextHThreeFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.73 9.309a1 1 0 1 0-2 0v11.076a1 1 0 1 0 2 0v-4.538h7.6v4.538a1 1 0 1 0 2 0V9.31a1 1 0 1 0-2 0v4.538h-7.6V9.309Zm13.03 3.799a1 1 0 1 0 0 2h2.526l-1.793 2.598a1 1 0 0 0 .823 1.568c.434 0 .932.183 1.317.501.386.318.558.68.558.99a1.492 1.492 0 0 1-2.653.936 1 1 0 0 0-1.556 1.257 3.492 3.492 0 0 0 6.21-2.192c-.001-1.066-.578-1.95-1.286-2.533a4.273 4.273 0 0 0-.94-.588l2.048-2.97a1 1 0 0 0-.823-1.567H21.76Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

TextHThreeFill.displayName = "TextHThreeFill";

export default TextHThreeFill;
