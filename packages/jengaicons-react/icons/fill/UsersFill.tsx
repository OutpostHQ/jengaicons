import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UsersFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.813 18.56a5.351 5.351 0 1 0-.074 0 7.148 7.148 0 0 0-7.04 6.15c-.077.547.379.997.93.997h12.293c.552 0 1.007-.45.93-.997a7.148 7.148 0 0 0-7.04-6.15Zm7.2.015a4.682 4.682 0 0 1-.091-.034c2.068-.8 2.535-2.806 2.535-5.157a5.527 5.527 0 0 0-3.535-5.156 5.525 5.525 0 0 1 7.515 5.156c0 2.375-.893 4.4-2.727 5.182 2.656.744 4.245 3.16 4.533 6.142.053.55-.4.999-.953.999h-2.98c0-3.386-1.28-6.24-4.388-7.108l.09-.024Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

UsersFill.displayName = "UsersFill";

export default UsersFill;
