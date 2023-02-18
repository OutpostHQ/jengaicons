import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const TShirt = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          d="M19.18 8.032v-1a1 1 0 0 0-1 1.011l1-.011Zm2.992 0 .992.128a1 1 0 0 0-.992-1.128v1Zm-.103 16.082.997-.073-.997.073Zm.103 1.42v1a1 1 0 0 0 .997-1.072l-.997.072Zm-12.423 0-.996-.09a1 1 0 0 0 .996 1.09v-1Zm.051-.571-.995-.09.995.09ZM9.75 8.032v-1a1 1 0 0 0-.99 1.143l.99-.143Zm3.067 0 1 .011a1 1 0 0 0-1-1.011v1Zm5.364.037a2.182 2.182 0 0 1-2.182 2.182v2A4.182 4.182 0 0 0 20.18 8.07h-2Zm0-.026v.026h2V8.02l-2 .023Zm1 .989h2.992v-2H19.18v2Zm2-1.129c-.83 6.4-.547 10.263-.108 16.284l1.994-.146c-.437-6.003-.705-9.694.098-15.88l-1.984-.258Zm-.108 16.284.103 1.418 1.994-.143-.103-1.42-1.994.145Zm1.1.347H9.749v2h12.423v-2Zm-11.428 1.09.052-.57-1.991-.182-.052.572 1.991.18Zm.052-.57c.585-6.429.938-10.294-.058-17.166l-1.98.287c.96 6.628.628 10.298.047 16.697l1.991.181ZM9.75 9.032h3.067v-2H9.749v2Zm4.067-.963v-.026l-2-.023v.05h2Zm2.182 2.182a2.182 2.182 0 0 1-2.182-2.182h-2a4.182 4.182 0 0 0 4.182 4.182v-2Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m3.96 10.952 5.789-2.92c.457 3.399.573 5.26.513 8.495H6.88l-2.92-5.575ZM27.96 10.952l-5.788-2.92c-.398 3.543-.564 5.464-.382 8.495h3.25l2.92-5.575Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TShirt.displayName = "TShirt";

export default TShirt;
