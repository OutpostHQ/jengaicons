import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ListBulletsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.087 9.043H26M12.088 16H26M12.088 22.956H26"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.304 10.348a1.304 1.304 0 1 0 0-2.609 1.304 1.304 0 0 0 0 2.609ZM7.304 17.304a1.304 1.304 0 1 0 0-2.608 1.304 1.304 0 0 0 0 2.608ZM7.304 24.26a1.304 1.304 0 1 0 0-2.608 1.304 1.304 0 0 0 0 2.609Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

ListBulletsRegular.displayName = "ListBulletsRegular";

export default ListBulletsRegular;
