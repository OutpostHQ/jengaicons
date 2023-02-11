import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NewspaperClippingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.46 6.382h23a.5.5 0 0 1 .5.5v19.496a.5.5 0 0 1-.722.448l-2.973-1.476a.5.5 0 0 0-.434-.005l-3.712 1.736a.5.5 0 0 1-.439-.007l-3.385-1.723a.5.5 0 0 0-.433-.01l-3.851 1.746a.5.5 0 0 1-.427-.007l-3.516-1.728a.5.5 0 0 0-.445.001l-2.94 1.47a.5.5 0 0 1-.723-.448V6.883a.5.5 0 0 1 .5-.5Zm2.5 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-8Zm2 1v6h4v-6h-4Zm9 0a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-6Zm0 4a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-6Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

NewspaperClippingFill.displayName = "NewspaperClippingFill";

export default NewspaperClippingFill;
