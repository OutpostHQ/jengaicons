import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrosoftWordLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.96 12.424h7M20.96 20.424h7"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.96 9.327V5.424a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-3.951"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M6.96 9.424a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-13Zm11.008 4.366a1 1 0 1 0-1.93-.527l-.866 3.166-.799-1.876c-.378-.89-1.638-.892-2.021-.005l-.755 1.746-.707-2.997a1 1 0 0 0-1.946.459l1.33 5.644c.244 1.03 1.661 1.156 2.081.183l1-2.316.991 2.325c.409.959 1.798.864 2.073-.141l1.549-5.66Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

MicrosoftWordLogosvgFill.displayName = "MicrosoftWordLogosvgFill";

export default MicrosoftWordLogosvgFill;
