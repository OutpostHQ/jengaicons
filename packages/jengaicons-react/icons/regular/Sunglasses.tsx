import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Sunglasses = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M28 18H4M21 18l5.925 5.925M6 18l5.925 5.925"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M9.117 6.5H9a5 5 0 0 0-5 5v9.675M22.883 6.5H23a5 5 0 0 1 5 5v9.675"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          d="M4 18.357c0-.197.16-.357.357-.357h8.286c.197 0 .357.16.357.357V21a4.5 4.5 0 1 1-9 0v-2.643ZM19 18.357c0-.197.16-.357.357-.357h8.286c.197 0 .357.16.357.357V21a4.5 4.5 0 1 1-9 0v-2.643Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Sunglasses.displayName = "Sunglasses";

export default Sunglasses;