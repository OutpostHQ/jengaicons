import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Flower = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M14.6 13.524c-.876-1.848-1.8-4.152-1.8-5.664a3.36 3.36 0 0 1 6.72 0c0 1.512-.924 3.816-1.8 5.664M12.8 16.356c-2.04-.156-4.5-.516-5.808-1.272a3.36 3.36 0 0 1 3.36-5.808c1.307.744 2.843 2.7 4.008 4.392M14.36 19.332c-1.164 1.692-2.7 3.648-4.008 4.392a3.362 3.362 0 0 1-5.061-3.767 3.36 3.36 0 0 1 1.7-2.041C8.3 17.16 10.76 16.8 12.8 16.644M17.72 19.476c.876 1.848 1.8 4.152 1.8 5.664a3.36 3.36 0 1 1-6.72 0c0-1.512.924-3.816 1.8-5.664M19.52 16.644c2.04.156 4.5.516 5.808 1.272a3.36 3.36 0 0 1-3.36 5.808c-1.308-.744-2.844-2.7-4.008-4.392M17.96 13.668c1.164-1.692 2.7-3.648 4.008-4.392a3.36 3.36 0 0 1 3.36 5.808c-1.308.756-3.768 1.116-5.808 1.272"
        />
        <circle
          cx="16.12"
          cy="16.639"
          r="3.36"
          fill={color || colorCtx || "#000000"}
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Flower.displayName = "Flower";

export default Flower;