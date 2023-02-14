import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const EggCrackFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M23.487 25.58a9.23 9.23 0 0 0 2.704-6.528c0-3.942-1.579-7.885-3.612-10.704-.21-.298-.402-.553-.685-.886-1.618-1.953-3.43-3.179-4.934-3.179-3.692 0-9.23 7.385-9.23 14.77a9.23 9.23 0 0 0 15.757 6.526ZM21.894 7.461a17.701 17.701 0 0 0-.176-.204l-5.35 5.301a1.1 1.1 0 0 0 .438 1.824l2.583.839-.638 3.68a1 1 0 1 0 1.97.342l.772-4.45a1.1 1.1 0 0 0-.744-1.233l-1.928-.626 4.112-4.075-.058-.085-.296-.427c-.224-.31-.452-.605-.685-.886Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

EggCrackFill.displayName = "EggCrackFill";

export default EggCrackFill;
