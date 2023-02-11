import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SidebarPlayfulFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        <rect
          x="15.683"
          y="14.724"
          width="5.165"
          height="5.165"
          rx=".5"
          transform="rotate(-60 15.683 14.724)"
          fill="#1C1B1F"
        />
        <path
          d="M23.948 19.191a.5.5 0 0 1 .837-.224l4.845 4.846a.5.5 0 0 1-.224.837l-6.62 1.773a.5.5 0 0 1-.612-.612l1.774-6.62Z"
          fill="#1C1B1F"
        />
        <path
          d="M28.96 19.073V6.283h-24v20h15.17M12 6.5v19.784"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path fill="#1C1B1F" d="M4.96 6.392H12v20H4.96z" />
      </svg>
    );
  }
);

SidebarPlayfulFill.displayName = "SidebarPlayfulFill";

export default SidebarPlayfulFill;
