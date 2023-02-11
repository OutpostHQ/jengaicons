import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserGearRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.27 18.302a1.802 1.802 0 1 0 0-3.604 1.802 1.802 0 0 0 0 3.604ZM25.27 14.698v-1.351M23.709 15.6l-1.17-.676M23.709 17.4l-1.17.677M25.27 18.302v1.351M26.83 17.4l1.17.677M26.83 15.6l1.17-.676M12.657 18.654a6.482 6.482 0 1 0 0-12.965 6.482 6.482 0 0 0 0 12.965Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.314 27.31A8.657 8.657 0 0 0 4 27.31"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

UserGearRegular.displayName = "UserGearRegular";

export default UserGearRegular;
