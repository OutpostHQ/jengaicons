import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextAaRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.234 21.96c1.527 0 2.766-1.084 2.766-2.421 0-1.337-1.239-2.42-2.766-2.42-1.528 0-2.767 1.083-2.767 2.42s1.239 2.42 2.767 2.42ZM16.627 18.25H7.839"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.158 14.006H23a3 3 0 0 1 3 3v4.953M6 21.688l5.767-10.823a.5.5 0 0 1 .882-.001l5.817 10.824"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

TextAaRegular.displayName = "TextAaRegular";

export default TextAaRegular;
