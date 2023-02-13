import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const WifiSlash = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="m6.674 5.74 18.654 20.52M13.568 7.777A17.298 17.298 0 0 1 16 7.607a17.01 17.01 0 0 1 12 4.916M4 12.523a17.009 17.009 0 0 1 5.522-3.65M18.813 13.547a11.412 11.412 0 0 1 5.233 2.933M7.954 16.48a11.414 11.414 0 0 1 5.717-3.043M11.911 20.438a5.925 5.925 0 0 1 7.878-.27"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M16 25.793a1.399 1.399 0 1 0 0-2.798 1.399 1.399 0 0 0 0 2.798Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

WifiSlash.displayName = "WifiSlash";

export default WifiSlash;