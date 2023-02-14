import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UserSwitchFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M19.864 6.923a10.269 10.269 0 0 0-11.537 4.288 1 1 0 1 0 1.681 1.083 8.27 8.27 0 0 1 15.22 4.391l-1.023-1.023a1 1 0 1 0-1.414 1.414l2.718 2.718a.997.997 0 0 0 1.427.013l2.731-2.73a1 1 0 0 0-1.414-1.415l-1.025 1.024a10.269 10.269 0 0 0-7.364-9.763Zm6.365 9.86.902.001.001-.001h-.903ZM8.094 13.55a.997.997 0 0 0-1.116.215l-2.725 2.724a1 1 0 0 0 1.414 1.415l1.024-1.024a10.27 10.27 0 0 0 18.901 5.475 1 1 0 0 0-1.68-1.083 8.27 8.27 0 0 1-2.134 2.242 4.937 4.937 0 0 0-4.808-3.862 3.696 3.696 0 1 0-.02 0 4.937 4.937 0 0 0-4.808 3.861 8.268 8.268 0 0 1-3.45-6.633l1.023 1.024a1 1 0 1 0 1.414-1.415l-2.73-2.729a1.048 1.048 0 0 0-.305-.21Zm-1.306 3.233v-.001l.903.001h-.903Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

UserSwitchFill.displayName = "UserSwitchFill";

export default UserSwitchFill;
