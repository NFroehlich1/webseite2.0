/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconsBxPlay = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icons-bx-play ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M9 6V18L19 12L9 6Z" fill="#0B0F19" />
    </svg>
  );
};
