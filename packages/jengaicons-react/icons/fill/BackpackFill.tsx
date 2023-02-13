import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BackpackFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        d="M8.389 13.569a5 5 0 0 1 5-5h7.143a5 5 0 0 1 5 5v13.357a.5.5 0 0 1-.5.5H8.889a.5.5 0 0 1-.5-.5V13.569Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M20.389 8.569V7.14a2 2 0 0 0-2-2h-2.857a2 2 0 0 0-2 2V8.57M8.389 19.299H6.96a2 2 0 0 0-2 2v2.857a2 2 0 0 0 2 2H8.39M25.532 19.299h1.428a2 2 0 0 1 2 2v2.857a2 2 0 0 1-2 2h-1.428"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M22.527 20.687v-1h-2v1h2Zm-2 .255a1 1 0 0 0 2 0h-2Zm0-.255v.255h2v-.255h-2Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M13.561 19.752c2.22.445 4.713.453 6.966-.029v1.22a1 1 0 0 0 2 0v-1.807c.444-.17.87-.364 1.27-.582 1.202-.652 1.735-2.017 1.735-3.384v-2.326a4.275 4.275 0 0 0-4.275-4.275h-8.593a4.275 4.275 0 0 0-4.275 4.275v2.413c0 1.316.494 2.633 1.647 3.266.47.257.98.483 1.525.679v1.74a1 1 0 0 0 2 0v-1.19Zm0 0v-2.096a1 1 0 0 0-2 0v1.546c.629.225 1.3.41 2 .55Zm8.966-.616v-1.48a1 1 0 0 0-2 0v2.067a13.437 13.437 0 0 0 2-.587Z"
        clip-rule="evenodd"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M13.561 20.687v-1h-2v1h2Zm-2 .255a1 1 0 0 0 2 0h-2Zm0-.255v.255h2v-.255h-2Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

BackpackFill.displayName = "BackpackFill";

export default BackpackFill;