import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GiftFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.97 19.57h8.99v6.673a1 1 0 0 1-1 1h-7.99V19.57ZM6.96 19.57h8.992v7.673H7.96a1 1 0 0 1-1-1V19.57ZM17.97 11.55h9.99a1 1 0 0 1 1 1v5H17.97v-6ZM4.96 12.55a1 1 0 0 1 1-1h9.992v6H4.96v-5Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M16.253 5.186a4 4 0 0 0-5.657 5.656l.707-.706-.707.707c.514.514 1.215.84 1.871 1.059.674.225 1.401.368 2.054.461.534.076 1.034.121 1.44.148V10.55h1.96a19.167 19.167 0 0 0-.148-1.44 11.973 11.973 0 0 0-.46-2.053c-.22-.656-.546-1.357-1.06-1.871ZM13.1 10.005c-.537-.18-.896-.383-1.09-.576A2 2 0 0 1 14.84 6.6c.193.194.397.553.576 1.09.173.52.295 1.118.378 1.703.057.4.095.78.12 1.11a16.89 16.89 0 0 1-1.11-.12 9.991 9.991 0 0 1-1.703-.378Z"
        clip-rule="evenodd"
      />
      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M17.689 5.186a4 4 0 0 1 5.656 5.656l-.707-.706.707.707c-.514.514-1.215.84-1.871 1.059-.674.225-1.401.368-2.053.461-.534.076-1.035.121-1.44.148V10.55h-1.96c.026-.405.07-.906.147-1.44.093-.652.236-1.379.461-2.053.219-.656.545-1.357 1.06-1.871Zm3.152 4.819c.537-.18.896-.383 1.09-.576A2 2 0 0 0 19.102 6.6c-.193.194-.397.553-.576 1.09a9.991 9.991 0 0 0-.378 1.703c-.057.4-.095.78-.12 1.11.33-.025.71-.063 1.11-.12a9.992 9.992 0 0 0 1.703-.378Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

GiftFill.displayName = "GiftFill";

export default GiftFill;