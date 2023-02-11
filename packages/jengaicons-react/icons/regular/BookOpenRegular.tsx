import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BookOpenRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12 5.753H4v16.745h7.633a4 4 0 0 1 3.557 2.173l.621 1.208c.048.093.189.059.189-.046V9.753a4 4 0 0 0-4-4ZM20 5.753h8v16.745h-7.633a4 4 0 0 0-3.557 2.173l-.621 1.208c-.048.093-.189.059-.189-.046V9.753a4 4 0 0 1 4-4Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

BookOpenRegular.displayName = "BookOpenRegular";

export default BookOpenRegular;
