import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const KeyRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M21.891 11.63a1.433 1.433 0 1 0 0-2.866 1.433 1.433 0 0 0 0 2.866Z"
        fill="#1C1B1F"
      />
      <path
        d="m4.053 22.468 7.564-7.509a8.429 8.429 0 1 1 5.063 5.356l-1.03 1.12a.478.478 0 0 1-.338.14h-2.735a.478.478 0 0 0-.478.478V24.2a.478.478 0 0 1-.477.478H9.607a.478.478 0 0 0-.478.478v2.366a.478.478 0 0 1-.478.478h-4.26a.478.478 0 0 1-.478-.478v-4.716c0-.127.05-.249.14-.338Z"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

KeyRegular.displayName = "KeyRegular";

export default KeyRegular;
