/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconsBxSlideshow = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icons-bx-slideshow ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.667 2.5H3.33366C2.41449 2.5 1.66699 3.2475 1.66699 4.16667V12.5C1.66699 13.4192 2.41449 14.1667 3.33366 14.1667H9.16699V16.6667H6.66699V18.3333H9.16699H10.8337H13.3337V16.6667H10.8337V14.1667H16.667C17.5862 14.1667 18.3337 13.4192 18.3337 12.5V4.16667C18.3337 3.2475 17.5862 2.5 16.667 2.5ZM3.33366 12.5V4.16667H16.667L16.6678 12.5H3.33366Z"
        fill="white"
        fillOpacity="0.5"
      />
      <path
        className="path"
        d="M8.33301 10.8335L12.4997 8.3335L8.33301 5.8335V10.8335Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
};
