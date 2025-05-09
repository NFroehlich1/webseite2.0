/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Chevron = ({ color = "#33354D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`chevron ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.707 17.707L16.414 12L10.707 6.293L9.29303 7.707L13.586 12L9.29303 16.293L10.707 17.707Z"
        fill={color}
      />
    </svg>
  );
};

Chevron.propTypes = {
  color: PropTypes.string,
};
