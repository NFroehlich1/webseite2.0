/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  property1: "l" | "m" | "s";
  property2: "solid" | "outline";
  className: any;
  btnTextClassName: any;
  text: string;
}

export const Btn = ({ property1, property2, className, btnTextClassName, text = "Button S" }: Props): JSX.Element => {
  return (
    <div className={`btn ${property2} ${property1} ${className}`}>
      <div className={`btn-text ${btnTextClassName}`}>
        {property1 === "l" && <>Button L</>}

        {property1 === "m" && <>Button M</>}

        {property1 === "s" && <>{text}</>}
      </div>
    </div>
  );
};

Btn.propTypes = {
  property1: PropTypes.oneOf(["l", "m", "s"]),
  property2: PropTypes.oneOf(["solid", "outline"]),
  text: PropTypes.string,
};
