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

export const Property1Left2 = ({ color = "#131022", className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-1-left-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.707 17.293L8.414 13H18V11H8.414L12.707 6.707L11.293 5.293L4.586 12L11.293 18.707L12.707 17.293Z"
        fill={color}
      />
    </svg>
  );
};

Property1Left2.propTypes = {
  color: PropTypes.string,
};
