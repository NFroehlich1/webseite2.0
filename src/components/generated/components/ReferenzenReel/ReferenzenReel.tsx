/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Chevron } from "../../icons/Chevron";
import { Property1Left1 } from "../../icons/Property1Left1";
import "./style.css";

interface Props {
  property1: "default";
  className: any;
  referenzRechts: string;
  referenzLinks: string;
  referenzMitteClassName: any;
  referenzMitte: string;
}

export const ReferenzenReel = ({
  property1,
  className,
  referenzRechts = "../../../../resources/referenz-rechts.svg", /* probieren: /img/referenz-links.svg"*/
  referenzLinks = "../../../../resources/referenz-links.svg", /*/img/referenz-links.svg"*/
  referenzMitteClassName,
  referenzMitte = "../../../../resources/referenz-mitte.svg", /* "/img/referenz-mitte.svg"*/
}: Props): JSX.Element => {
  return (
    <div className={`referenzen-reel ${className}`}>
      <div className="next-btn">
        <Chevron className="icon-instance-node" color="#33354D" />
      </div>
      <div className="prev-btn">
        <Property1Left1 className="icon-instance-node" color="#33354D" />
      </div>
      <img className="referenz-rechts" alt="Referenz rechts" src={referenzRechts} />
      <img className="referenz-links" alt="Referenz links" src={referenzLinks} />
      <img className={`referenz-mitte ${referenzMitteClassName}`} alt="Referenz mitte" src={referenzMitte} />
    </div>
  );
};

ReferenzenReel.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  referenzRechts: PropTypes.string,
  referenzLinks: PropTypes.string,
  referenzMitte: PropTypes.string,
};
