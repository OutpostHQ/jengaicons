import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WifiXFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.796 7.872c.592-.004 1.223-.007 1.683.043a1 1 0 1 0 .215-1.989c-.587-.063-1.375-.058-1.967-.054l-.349.001a18.602 18.602 0 0 0-13.121 5.378 1 1 0 0 0 1.406 1.421 16.602 16.602 0 0 1 11.712-4.799h.003l.418-.001Zm11.87-.292a1 1 0 0 0-1.413-1.414l-2.189 2.188-2.188-2.188a1 1 0 0 0-1.414 1.414l2.188 2.188-2.188 2.189a1 1 0 0 0 1.414 1.414l2.188-2.189 2.189 2.189a1 1 0 0 0 1.414-1.414l-2.188-2.189 2.188-2.188Zm-15.83 13.294a5.126 5.126 0 0 1 7.082 0 1 1 0 1 0 1.381-1.446 7.125 7.125 0 0 0-9.844 0 1 1 0 1 0 1.382 1.446Zm3.971-7.213c-.135.002-.278.003-.43.003h-.002a10.836 10.836 0 0 0-7.623 3.106 1 1 0 0 1-1.401-1.427 12.837 12.837 0 0 1 9.027-3.679l.332-.003c.522-.006 1.144-.013 1.752.086a1 1 0 0 1-.32 1.974c-.422-.068-.83-.065-1.335-.06Zm1.02 10.584a1.448 1.448 0 1 1-2.896 0 1.448 1.448 0 0 1 2.895 0Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

WifiXFill.displayName = "WifiXFill";

export default WifiXFill;
