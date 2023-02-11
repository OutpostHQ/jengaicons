import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatsTeardropRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.302 21.541c4.596 0 8.322-3.721 8.322-8.312 0-4.59-3.726-8.312-8.322-8.312A8.315 8.315 0 0 0 4 12.636v8.905h8.302Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M11.908 21.7a8.325 8.325 0 0 0 7.79 5.383H28v-8.906a8.316 8.316 0 0 0-7.595-7.689"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ChatsTeardropRegular.displayName = "ChatsTeardropRegular";

export default ChatsTeardropRegular;
