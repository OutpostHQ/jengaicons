import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TicketFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 8.475a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v4.742a3.066 3.066 0 1 0 0 6.132v4.742a.5.5 0 0 1-.5.5h-23a.5.5 0 0 1-.5-.5v-4.742a3.066 3.066 0 0 0 0-6.132V8.476Zm7.258 16.1V7.985h2v16.592h-2Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

TicketFill.displayName = "TicketFill";

export default TicketFill;