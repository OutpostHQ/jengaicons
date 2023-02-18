import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GithubLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M20.122 29.09c5.651-1.413 9.838-6.524 9.838-12.613 0-7.18-5.82-13-13-13s-13 5.82-13 13c0 6.089 4.186 11.2 9.838 12.612a3.243 3.243 0 0 1-.067-.658V25.63c-.975.288-3.143.444-4.163-1.203-.203-.535-.785-1.716-1.497-2.157-.89-.551-.595-.723-.462-.798.345-.091 1.214-.089 1.92.648.133.147.43.493.55.701l.01.017c.177.309 1.127 1.972 3.66 1.007l.093-.028a3.227 3.227 0 0 1 .907-1.51 12.708 12.708 0 0 1-1.784-.386c-2.464-.616-4.27-2.82-4.27-5.852 0-1.638.514-2.914 1.352-3.91-.519-1.195-.118-2.715.151-3.333 1.182-.154 2.84.846 3.446 1.261.987-.235 2.125-.358 3.388-.358 1.186 0 2.308.124 3.295.35.663-.437 2.235-1.406 3.42-1.24.269.58.674 2.023.2 3.26a6.262 6.262 0 0 1 1.391 3.97c0 2.421-1.339 4.554-3.254 5.461-.816.355-1.807.626-2.907.782a3.22 3.22 0 0 1 1.012 2.348v3.772c0 .226-.023.446-.067.658Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GithubLogoFill.displayName = "GithubLogoFill";

export default GithubLogoFill;
