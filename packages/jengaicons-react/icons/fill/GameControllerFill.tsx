import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GameControllerFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M7.976 9.61 5.498 20.16a3.183 3.183 0 0 0 5.566 2.737l3.662-4.498a1.02 1.02 0 0 1 .79-.377h2.37c.029.055.063.107.103.157l4.304 5.344a4.097 4.097 0 0 0 7.212-3.354l-1.752-8.981a1.009 1.009 0 0 0-.039-.144 4.59 4.59 0 0 0-4.564-4.104H11.348A3.464 3.464 0 0 0 7.976 9.61Zm18.699 6.496a4.991 4.991 0 0 1-3.935 1.915H20.43l3.42 4.247a2.097 2.097 0 0 0 3.69-1.717l-.866-4.445Zm-12.457-5.298a1 1 0 1 0-2 0v.719H11.5a1 1 0 1 0 0 2h.72v.718a1 1 0 0 0 2 0v-.718h.718a1 1 0 0 0 0-2h-.719v-.72Zm4.875 1.719a1 1 0 0 1 1-1h3.437a1 1 0 1 1 0 2h-3.437a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GameControllerFill.displayName = "GameControllerFill";

export default GameControllerFill;
