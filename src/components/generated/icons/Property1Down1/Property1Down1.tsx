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

export const Property1Down1 = ({ color = "#0B0F19", className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-1-down-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.862 6.19531L7.99998 9.05731L5.13798 6.19531L4.19531 7.13798L7.99998 10.9426L11.8046 7.13798L10.862 6.19531Z"
        fill={color}
      />
    </svg>
  );
};

Property1Down1.propTypes = {
  color: PropTypes.string,
};
