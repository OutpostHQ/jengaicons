import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const VolleyballFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.009 4.32c-1.55.122-3.016.537-4.345 1.192l2.759 4.777.025.045 2.921 5.059h4.91A12.736 12.736 0 0 0 16.01 4.32Zm-6.06 2.222 2.233 3.866a14.736 14.736 0 0 0-6.879 8.735 12.029 12.029 0 0 1-.343-2.86c0-4.01 1.967-7.562 4.99-9.74Zm.09 19.546a12.065 12.065 0 0 1-3.295-3.506 12.736 12.736 0 0 1 6.438-10.442l2.455 4.253-5.597 9.695Zm13.183-8.695h5.687a11.922 11.922 0 0 1-1.262 4.354 12.736 12.736 0 0 1-12.733-.102l2.455-4.252h5.853Zm-9.308 5.984-2.15 3.726a11.954 11.954 0 0 0 5.196 1.18 11.96 11.96 0 0 0 8.402-3.433 14.728 14.728 0 0 1-11.448-1.473Zm10.366-7.984A14.736 14.736 0 0 0 19.674 4.59c5.04 1.165 8.865 5.506 9.253 10.802H24.28Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

VolleyballFill.displayName = "VolleyballFill";

export default VolleyballFill;
