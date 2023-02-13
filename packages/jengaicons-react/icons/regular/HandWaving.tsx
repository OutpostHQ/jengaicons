import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const HandWaving = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M10.203 28.5a12.809 12.809 0 0 1-3.8-4.135M21.101 4.5a5.968 5.968 0 0 1 5.17 2.986"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m12.16 17.451-4.288-7.425a2.041 2.041 0 0 1 .748-2.789v0a2.041 2.041 0 0 1 2.788.747l4.287 7.426"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m12.16 17.451-2.622-4.54a2.041 2.041 0 0 0-3.536 2.042l4.328 7.496c2.214 3.835 7.149 5.131 11.022 2.896a8.106 8.106 0 0 0 4.065-7.274l-.212-6.243a2.041 2.041 0 1 0-4.077.215l.135 2.745c.028.582-.745.81-1.036.305L15.889 7.58a2.042 2.042 0 0 0-3.536 2.042l3.342 5.789"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M19.333 19.732c-.847-1.466-.055-3.509 1.768-4.562"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HandWaving.displayName = "HandWaving";

export default HandWaving;