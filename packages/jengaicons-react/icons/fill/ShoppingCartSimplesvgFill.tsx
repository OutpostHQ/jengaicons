import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShoppingCartSimplesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.046 27.513a1.797 1.797 0 1 0 0-3.594 1.797 1.797 0 0 0 0 3.594ZM24.725 27.513a1.797 1.797 0 1 0 0-3.594 1.797 1.797 0 0 0 0 3.594Z"
          fill="#1C1B1F"
        />
        <path
          d="M28.96 9.545H8.81l2.965 10.376a1.797 1.797 0 0 0 1.728 1.303h10.765a1.797 1.797 0 0 0 1.728-1.303L28.96 9.545Z"
          fill="#1C1B1F"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.96 5.053h1.857c.192 0 .378.064.531.181a.899.899 0 0 1 .318.47l1.256 4.202"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ShoppingCartSimplesvgFill.displayName = "ShoppingCartSimplesvgFill";

export default ShoppingCartSimplesvgFill;
