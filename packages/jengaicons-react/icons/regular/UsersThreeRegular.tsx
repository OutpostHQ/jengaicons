import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UsersThreeRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.96 20.317a3.534 3.534 0 1 0 0-7.068 3.534 3.534 0 0 0 0 7.068Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.68 25.037a4.72 4.72 0 1 0-9.44 0M27.96 20.317a4.72 4.72 0 0 0-5.016-4.71"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.939 15.585a3.534 3.534 0 1 0-3.037-4.684M3.96 20.317a4.72 4.72 0 0 1 5.017-4.71"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.981 15.585a3.534 3.534 0 1 1 3.037-4.684"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

UsersThreeRegular.displayName = "UsersThreeRegular";

export default UsersThreeRegular;
