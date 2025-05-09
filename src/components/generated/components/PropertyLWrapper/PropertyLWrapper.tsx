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

export const PropertyLWrapper = ({
  property1,
  property2,
  className,
  btnTextClassName,
  text = "Button M",
}: Props): JSX.Element => {
  return (
    <div className={`property-l-wrapper property-2-0-${property2} property-1-0-${property1} ${className}`}>
      <div className={`div ${btnTextClassName}`}>
        {property1 === "l" && <>Button L</>}

        {property1 === "m" && <>{text}</>}

        {property1 === "s" && <>Button S</>}
      </div>
    </div>
  );
};

PropertyLWrapper.propTypes = {
  property1: PropTypes.oneOf(["l", "m", "s"]),
  property2: PropTypes.oneOf(["solid", "outline"]),
  text: PropTypes.string,
};
