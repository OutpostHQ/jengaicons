import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UsersFourRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.594 24.094a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6ZM11.594 11.099a3.3 3.3 0 1 0 0-6.599 3.3 3.3 0 0 0 0 6.599ZM20.407 24.094a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6ZM20.407 11.099a3.3 3.3 0 1 0 0-6.599 3.3 3.3 0 0 0 0 6.599Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 28.5a4.406 4.406 0 1 0-8.813 0M16 15.505a4.406 4.406 0 1 0-8.813 0"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.813 28.5a4.406 4.406 0 1 0-8.813 0M24.813 15.505a4.406 4.406 0 1 0-8.813 0"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

UsersFourRegular.displayName = "UsersFourRegular";

export default UsersFourRegular;
