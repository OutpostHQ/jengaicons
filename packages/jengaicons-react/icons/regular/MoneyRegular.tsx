import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MoneyRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 19.428a3.429 3.429 0 1 0 0-6.857 3.429 3.429 0 0 0 0 6.857ZM21.143 9.143l6.857 6M21.143 22.857l6.857-6M10.857 9.143l-6.857 6M10.857 22.857l-6.857-6"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M4 9.143h24v13.714H4z"
      />
    </svg>
  );
});

MoneyRegular.displayName = "MoneyRegular";

export default MoneyRegular;
