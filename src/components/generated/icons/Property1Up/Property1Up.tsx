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

export const Property1Up = ({ color = "#0B0F19", className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-1-up ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11 8.41406V18.0001H13V8.41406L17.293 12.7071L18.707 11.2931L12 4.58606L5.29297 11.2931L6.70697 12.7071L11 8.41406Z"
        fill={color}
      />
    </svg>
  );
};

Property1Up.propTypes = {
  color: PropTypes.string,
};
