/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property1Down = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-1-down ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.293 9.293L12 13.586L7.70703 9.293L6.29303 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
        fill="#0B0F19"
      />
    </svg>
  );
};
