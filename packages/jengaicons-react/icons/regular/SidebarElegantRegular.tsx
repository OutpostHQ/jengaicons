import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SidebarElegantRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11 6.5v20M28 13.71V26.5H4v-20h15.17"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m25.55 4.405.797 2.455h2.581L26.84 8.377l.798 2.454-2.088-1.517-2.088 1.518.797-2.455-2.088-1.517h2.581l.798-2.455ZM18.445 13.96l.461 1.42h1.492l-1.207.876.461 1.42-1.207-.878-1.207.877.461-1.419-1.206-.876h1.491l.461-1.42Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SidebarElegantRegular.displayName = "SidebarElegantRegular";

export default SidebarElegantRegular;
