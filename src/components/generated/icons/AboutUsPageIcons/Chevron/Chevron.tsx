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

export const Chevron = ({ color = "white", className }: Props): JSX.Element => {
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
        d="M13.293 6.293L7.586 12L13.293 17.707L14.707 16.293L10.414 12L14.707 7.707L13.293 6.293Z"
        fill={color}
      />
    </svg>
  );
};

Chevron.propTypes = {
  color: PropTypes.string,
};
