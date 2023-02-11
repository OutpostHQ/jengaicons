import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextAaFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size = 32 } = props;

  return (
    <svg
      style={{ width: size, height: size }}
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="m15.858 17.08-2.396-4.458-2.376 4.459h4.772Zm2.502.43-3.579-6.658c-.567-1.056-2.081-1.053-2.645.004l-5.29 9.927a1 1 0 0 0 1.766.94l1.408-2.642h6.913l1.422 2.646a1 1 0 1 0 1.762-.947l-1.65-3.068a.998.998 0 0 0-.107-.202Zm2.361-3.348a1 1 0 0 1 1-1h1.47a4 4 0 0 1 4 4V21.504a1 1 0 0 1-1.813.583 3.85 3.85 0 0 1-1.741.417c-1.833 0-3.553-1.327-3.553-3.234 0-1.908 1.72-3.235 3.553-3.235.466 0 .924.086 1.349.245a2 2 0 0 0-1.796-1.118h-1.469a1 1 0 0 1-1-1Zm2.916 6.342c.975 0 1.54-.657 1.553-1.213v-.043c-.014-.556-.578-1.213-1.553-1.213-.988 0-1.553.674-1.553 1.235 0 .56.565 1.234 1.553 1.234Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

TextAaFill.displayName = "TextAaFill";

export default TextAaFill;
