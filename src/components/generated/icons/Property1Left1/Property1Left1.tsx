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

export const Property1Left1 = ({ color = "#0B0F19", className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-1-left-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.0771 5.24414L6.32129 9.99997L11.0771 14.7558L12.2555 13.5775L8.67796 9.99997L12.2555 6.42247L11.0771 5.24414Z"
        fill={color}
      />
    </svg>
  );
};

Property1Left1.propTypes = {
  color: PropTypes.string,
};
