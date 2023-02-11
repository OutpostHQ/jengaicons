import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatsCircleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.304 21.532a8.304 8.304 0 1 0-7.38-4.492c.057.11.075.235.047.355l-.783 3.336a.5.5 0 0 0 .61.599l3.228-.82a.517.517 0 0 1 .37.047 8.267 8.267 0 0 0 3.908.975Z"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
        <path
          d="M11.874 21.567a8.308 8.308 0 0 0 11.73 4.534.517.517 0 0 1 .37-.047l3.228.82a.5.5 0 0 0 .61-.6l-.783-3.335a.516.516 0 0 1 .047-.355A8.305 8.305 0 0 0 20.44 10.5"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

ChatsCircleRegular.displayName = "ChatsCircleRegular";

export default ChatsCircleRegular;
