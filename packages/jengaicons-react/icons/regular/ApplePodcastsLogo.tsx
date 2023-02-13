import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const ApplePodcastsLogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M16 18.003a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M8.537 18.903A7.996 7.996 0 0 1 16 8.023a8.002 8.002 0 0 1 7.946 7.07 7.996 7.996 0 0 1-.484 3.81"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M9.55 26.113a11.997 11.997 0 0 1-5.07-13.475A11.996 11.996 0 0 1 16 4a12.002 12.002 0 0 1 11.52 8.638 11.994 11.994 0 0 1-5.07 13.475"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          d="M12.916 20.395a2 2 0 0 1 1.96-2.392h2.247a2 2 0 0 1 1.961 2.392l-1.215 6.073a1.907 1.907 0 0 1-3.739 0l-1.214-6.073Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ApplePodcastsLogo.displayName = "ApplePodcastsLogo";

export default ApplePodcastsLogo;