import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PushPinSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.05 4.958a1 1 0 0 0-1.415 1.414l5.062 5.062c-1.5-.3-3.117.13-4.28 1.293l-.75.75a1 1 0 0 0 0 1.415l5.44 5.438a.995.995 0 0 0-.396.243l-4.732 4.73a1 1 0 1 0 1.414 1.415l4.732-4.73a.997.997 0 0 0 .243-.397l5.987 5.985a1 1 0 0 0 1.414 0l.751-.75a4.726 4.726 0 0 0 1.294-4.275l5.057 5.057a1 1 0 0 0 1.414-1.415L7.049 4.958Zm14.264.032 6.939 6.937a1 1 0 0 1 0 1.414l-3.57 3.568a1 1 0 0 1-1.431-.018L16.49 9.777a1 1 0 0 1 .018-1.396L19.9 4.99a1 1 0 0 1 1.414 0Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

PushPinSlashFill.displayName = "PushPinSlashFill";

export default PushPinSlashFill;
