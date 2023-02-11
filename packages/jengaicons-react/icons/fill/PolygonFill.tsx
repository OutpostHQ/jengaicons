import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PolygonFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.515 10.06c.873 0 1.647-.418 2.134-1.066.055.027.114.05.176.066l4.633 1.264c.061.017.123.027.185.032a2.66 2.66 0 0 0 .899 1.716c-.031.053-.058.11-.08.171l-3.557 10.08c-.022.061-.037.123-.046.184a2.653 2.653 0 0 0-1.317.406.997.997 0 0 0-.141-.125l-9.032-6.623a1 1 0 0 0-.162-.097 2.675 2.675 0 0 0-.08-1.602c.053-.032.103-.07.15-.112l4.926-4.433a1 1 0 0 0 .127-.138c.357.178.76.278 1.185.278Zm6.196 13.1a2.667 2.667 0 1 1-4.332 1.337 1.007 1.007 0 0 1-.161-.096l-9.032-6.623a1.006 1.006 0 0 1-.14-.125 2.667 2.667 0 1 1-.233-4.648 1 1 0 0 1 .127-.138l4.925-4.432c.047-.043.097-.08.15-.112a2.667 2.667 0 1 1 5.151-1.224c.061.004.123.015.185.032l4.633 1.263c.062.017.12.04.176.066a2.667 2.667 0 1 1 2.235 4.265 1 1 0 0 1-.046.184l-3.558 10.08a.999.999 0 0 1-.08.172Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

PolygonFill.displayName = "PolygonFill";

export default PolygonFill;
