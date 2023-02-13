import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SunglassesFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28.96 18.283h-24"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M10.078 6.783H9.96a5 5 0 0 0-5 5v9.675M23.843 6.783h.117a5 5 0 0 1 5 5v9.675"
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M20.317 18.283a.357.357 0 0 0-.357.357v2.643a4.5 4.5 0 0 0 9 0V18.64a.357.357 0 0 0-.357-.357h-8.286Zm5.215.743a2 2 0 1 0-2.829 2.829l1.61 1.61a2 2 0 0 0 2.829-2.829l-1.61-1.61Z"
          clip-rule="evenodd"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m25.532 19.026.707-.707-.707.707Zm-2.829 2.829-.707.707.707-.707Zm1.61 1.61.708-.707-.707.707Zm2.829 0 .707.707-.707-.707Zm0-2.829.707-.707-.707.707ZM20.96 18.64a.643.643 0 0 1-.643.643v-2c-.75 0-1.357.608-1.357 1.357h2Zm0 2.643V18.64h-2v2.643h2Zm3.5 3.5a3.5 3.5 0 0 1-3.5-3.5h-2a5.5 5.5 0 0 0 5.5 5.5v-2Zm3.5-3.5a3.5 3.5 0 0 1-3.5 3.5v2a5.5 5.5 0 0 0 5.5-5.5h-2Zm0-2.643v2.643h2V18.64h-2Zm.643.643a.643.643 0 0 1-.643-.643h2c0-.75-.607-1.357-1.357-1.357v2Zm-8.286 0h8.286v-2h-8.286v2Zm3.094.45a1 1 0 0 1 1.414 0l1.414-1.414a3 3 0 0 0-4.243 0l1.415 1.414Zm0 1.415a1 1 0 0 1 0-1.415l-1.415-1.414a3 3 0 0 0 0 4.243l1.415-1.414Zm1.61 1.61-1.61-1.61-1.415 1.414 1.61 1.61 1.415-1.414Zm1.414 0a1 1 0 0 1-1.414 0l-1.415 1.414a3 3 0 0 0 4.243 0l-1.414-1.414Zm0-1.415a1 1 0 0 1 0 1.415l1.414 1.414a3 3 0 0 0 0-4.243l-1.414 1.414Zm-1.61-1.61 1.61 1.61 1.414-1.414-1.61-1.61-1.414 1.414Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M5.317 18.283a.357.357 0 0 0-.357.357v2.643a4.5 4.5 0 0 0 9 0V18.64a.357.357 0 0 0-.357-.357H5.317Zm5.215.743a2 2 0 1 0-2.829 2.829l1.61 1.61a2 2 0 0 0 2.829-2.829l-1.61-1.61Z"
          clip-rule="evenodd"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m10.532 19.026.707-.707-.707.707Zm-2.829 2.829-.707.707.707-.707Zm1.61 1.61.708-.707-.707.707Zm2.829 0 .707.707-.707-.707Zm0-2.829.707-.707-.707.707ZM5.96 18.64a.643.643 0 0 1-.643.643v-2c-.75 0-1.357.608-1.357 1.357h2Zm0 2.643V18.64h-2v2.643h2Zm3.5 3.5a3.5 3.5 0 0 1-3.5-3.5h-2a5.5 5.5 0 0 0 5.5 5.5v-2Zm3.5-3.5a3.5 3.5 0 0 1-3.5 3.5v2a5.5 5.5 0 0 0 5.5-5.5h-2Zm0-2.643v2.643h2V18.64h-2Zm.643.643a.643.643 0 0 1-.643-.643h2c0-.75-.607-1.357-1.357-1.357v2Zm-8.286 0h8.286v-2H5.317v2Zm3.094.45a1 1 0 0 1 1.414 0l1.414-1.414a3 3 0 0 0-4.243 0l1.415 1.414Zm0 1.415a1 1 0 0 1 0-1.415L6.996 18.32a3 3 0 0 0 0 4.243l1.415-1.414Zm1.61 1.61-1.61-1.61-1.415 1.414 1.61 1.61 1.415-1.414Zm1.414 0a1 1 0 0 1-1.414 0l-1.415 1.414a3 3 0 0 0 4.243 0l-1.414-1.414Zm0-1.415a1 1 0 0 1 0 1.415l1.414 1.414a3 3 0 0 0 0-4.243l-1.414 1.414Zm-1.61-1.61 1.61 1.61 1.414-1.414-1.61-1.61-1.414 1.414Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SunglassesFill.displayName = "SunglassesFill";

export default SunglassesFill;