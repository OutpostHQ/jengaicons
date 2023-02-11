import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SnowflakeFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M12.988 4.103a1 1 0 0 1 1.414 0l2.558 2.558 2.558-2.558a1 1 0 1 1 1.414 1.414L17.96 8.49v6.56l5.679-3.28 1.09-4.063a1 1 0 1 1 1.931.519l-.938 3.496 3.497.939a1 1 0 1 1-.518 1.931l-4.063-1.09-5.68 3.28 5.68 3.282 4.063-1.09a1 1 0 0 1 .518 1.931l-3.497.938.938 3.497a1 1 0 1 1-1.931.518l-1.09-4.062-5.68-3.28v6.56l2.973 2.973a1 1 0 0 1-1.414 1.414l-2.558-2.558-2.558 2.558a1 1 0 0 1-1.414-1.414l2.972-2.973v-6.56l-5.68 3.28-1.09 4.063a1 1 0 0 1-1.93-.519l.937-3.497-3.496-.938a1 1 0 0 1 .518-1.931l4.062 1.09 5.68-3.281-5.68-3.28-4.062 1.09A1 1 0 0 1 4.7 12.66l3.496-.939-.938-3.496a1 1 0 1 1 1.932-.519l1.09 4.063 5.679 3.28V8.49l-2.973-2.973a1 1 0 0 1 0-1.414Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

SnowflakeFill.displayName = "SnowflakeFill";

export default SnowflakeFill;
