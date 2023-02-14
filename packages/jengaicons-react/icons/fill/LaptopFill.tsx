import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LaptopFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 6.92a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v14.363a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1V6.919Zm13.091 2.272a1.091 1.091 0 1 1-2.182 0 1.091 1.091 0 0 1 2.182 0ZM4.96 25.647a1 1 0 0 0 0 2h24a1 1 0 1 0 0-2h-24Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

LaptopFill.displayName = "LaptopFill";

export default LaptopFill;
