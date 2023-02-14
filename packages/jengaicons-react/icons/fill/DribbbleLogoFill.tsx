import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DribbbleLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.148 27.997a12.017 12.017 0 0 1-3.188.427c-2.767 0-5.315-.936-7.345-2.51.317.244.615.45 1.037.72a19.198 19.198 0 0 1 6.97-6.76 13.007 13.007 0 0 1 2.477-1.225 18.99 18.99 0 0 1 .477 4.237 19.044 19.044 0 0 1-.55 4.559l-.116.324v.002l-.113.316c.13-.032.244-.061.35-.09Zm.42-.124Zm0 0Zm.418-.14h-.002l-.004.002.006-.002Zm0 0c.268-.096.531-.2.79-.314-.259.109-.592.238-.79.314Zm1.111-.46a12.076 12.076 0 0 0 0 0Zm-.081-9.212c.37 1.575.56 3.194.56 4.825a21.041 21.041 0 0 1-.457 4.374 12.001 12.001 0 0 0 6.824-11.477c0-.064-.002-.122-.003-.173h-.007A11.986 11.986 0 0 0 24.09 6.77a21.89 21.89 0 0 0-.434-.319l-.006.008a11.944 11.944 0 0 0-6.69-2.036 11.97 11.97 0 0 0-4.381.825 6.293 6.293 0 0 0-.874.384c-.2.098-.397.201-.591.31-.133.072-.27.149-.439.244a.743.743 0 0 1 .01.006 12.027 12.027 0 0 0-5.262 6.918h-.005c-.033.126-.063.243-.09.354-.24.947-.368 1.938-.368 2.96 0 3.597 1.584 6.825 4.092 9.025l-.005.008c.212.176.393.322.568.457-.192-.15-.38-.305-.563-.465 1.868-3.093 4.44-5.542 7.587-7.318.692-.393 1.714-.867 2.948-1.304a18.985 18.985 0 0 0-1.52-3.385l-.041-.07c.604-.29 1.192-.606 1.762-.949l.014.026a20.983 20.983 0 0 1 1.695 3.786c2.247-.598 4.886-.964 7.436-.627l.01.173c.008.51.008 1.365-.04 1.736-1.41-.147-4.123-.137-6.887.543Zm-5.092-6.38a18.991 18.991 0 0 0-5.65-5.138l-.188-.111h-.001c-.152-.092-.35-.209-.4-.239a12.043 12.043 0 0 1 1.016-.558l.004-.002c.285-.139.576-.267.874-.383.08-.029.167-.058.264-.09a20.992 20.992 0 0 1 5.867 5.578 18.957 18.957 0 0 1-1.786.942Zm0 0 .191-.09a18.786 18.786 0 0 0 6.534-5.13c.15.1.296.203.44.31.408.308.702.56 1.122.946a20.79 20.79 0 0 1-7.238 5.68 20.96 20.96 0 0 1-9.012 2.027c-1.328 0-2.618-.105-3.922-.353a11.92 11.92 0 0 1 .384-1.96c1.18.224 2.338.314 3.538.313h.001c2.75.003 5.466-.593 7.962-1.744Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DribbbleLogoFill.displayName = "DribbbleLogoFill";

export default DribbbleLogoFill;
