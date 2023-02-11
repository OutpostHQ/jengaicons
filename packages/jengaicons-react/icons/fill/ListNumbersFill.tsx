import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ListNumbersFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.898 7.648a1 1 0 0 1 .519.877v5.87a1 1 0 0 1-2 0v-4.048a1 1 0 0 1-1.038-1.71l1.5-.955a1 1 0 0 1 1.019-.034Zm3.551 2.135a1 1 0 0 1 1-1h11.742a1 1 0 1 1 0 2H14.448a1 1 0 0 1-1-1Zm0 6.71a1 1 0 0 1 1-1h11.742a1 1 0 1 1 0 2H14.448a1 1 0 0 1-1-1Zm1 5.71a1 1 0 1 0 0 2h11.742a1 1 0 1 0 0-2H14.449ZM8.576 19.45a.593.593 0 0 1 1.098.355.533.533 0 0 1-.048.084l-.091.126-.325.436a643.639 643.639 0 0 1-1.86 2.442l-.3.391-.084.109-.022.029-.006.007-.001.002.792.61-.793-.61a1 1 0 0 0 .793 1.61h2.946a1 1 0 1 0 0-2h-.92l.103-.136a242.69 242.69 0 0 0 1.29-1.707c.07-.095.164-.225.214-.31.223-.381.313-.718.313-1.123a2.595 2.595 0 0 0-4.793-1.38 1 1 0 0 0 1.694 1.064Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

ListNumbersFill.displayName = "ListNumbersFill";

export default ListNumbersFill;
