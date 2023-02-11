import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrosoftExcelLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.96 12.424h7M20.96 20.424h7M18.96 23.424v5M18.96 4.424v5"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M6.96 9.424a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-13Zm3.65 3.2a1 1 0 0 1 1.4.2l1.45 1.934 1.45-1.934a1 1 0 0 1 1.6 1.2l-1.8 2.4 1.8 2.4a1 1 0 1 1-1.6 1.2l-1.45-1.933-1.45 1.933a1 1 0 1 1-1.6-1.2l1.8-2.4-1.8-2.4a1 1 0 0 1 .2-1.4Z"
          fill="#1C1B1F"
        />
        <path
          d="M9.96 9.327V5.424a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-3.951"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

MicrosoftExcelLogosvgFill.displayName = "MicrosoftExcelLogosvgFill";

export default MicrosoftExcelLogosvgFill;
