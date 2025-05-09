/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsBxCheckCircle3 } from "../../icons/IconsBxCheckCircle3";
import { IconsBxDownload1 } from "../../icons/IconsBxDownload1";
import { IconsBxFile } from "../../icons/IconsBxFile";
import { IconsBxInfinite } from "../../icons/IconsBxInfinite";
import { IconsBxSlideshow } from "../../icons/IconsBxSlideshow";
import "./style.css";


/*Bilder werden nicht erkannt  "../../../../../static/img"
Test Images in: "../../img" */

interface Props {
  property1: "variant-2" | "variant-3" | "default";
  className: any;
  btnShadowClassName: any;
}

export const Schulungen = ({ property1, className, btnShadowClassName }: Props): JSX.Element => {
  return (
    <div className={`schulungen ${className}`}>
      <div className="content">
        <div className="description">
          <div className="title">Schulungen</div>
          <p className="text-wrapper">
            Möchten Sie sicherstellen, dass Ihr Unternehmen auf dem neuesten Stand der Technologie bleibt und die
            wertvollsten Einblicke aus seinen Daten gewinnt? Dann ist unser Data Science und Machine Learning Kurs genau
            das Richtige für Sie und ihre MitarbeiterInnen!
          </p>
          <div className="toggles">
            <div className="title-2">Inhalte der Schulung</div>
            <img
              className="vector"
              alt="Vector"
              src={
                property1 === "variant-3"
                  ? "img/vector-4.svg"
                  : property1 === "default"
                  ? "img/vector-3.svg"
                  : "img/vector-2.svg"
              }
            />
            <div className="title-3">Unser Schulungsangebot</div>
            <img
              className="vector"
              alt="Vector"
              src={property1 === "variant-3" ? "/img/vector-5.svg" : "/img/vector-3.svg"}
            />
          </div>
          <div className={`btn-shadow ${property1 === "default" ? btnShadowClassName : undefined}`}>
            <div className="btn-text-2">Kontakt</div>
          </div>
        </div>
      </div>
      <img
        className="benjaminbarth-SICK"
        alt="Benjaminbarth SICK"
        src={property1 === "default" ? "/img/benjaminbarth-sick-1.png" : "/img/benjaminbarth-sick-1-2.png"}
      />
      {property1 === "variant-2" && (
        <div className="inhalte-der-schulung">
          <div className="title-4">Inhalte der Schulung</div>
          <div className="list">
            <div className="line">
              <IconsBxCheckCircle3 className="instance-node" />
              <p className="p">Einführung in die Themen Data Science und Machine Learning</p>
            </div>
            <div className="line">
              <IconsBxCheckCircle3 className="instance-node" />
              <p className="p">Verständnis über die Bedeutung und Möglichkeiten Künstlicher Intelligenz</p>
            </div>
            <div className="line">
              <IconsBxCheckCircle3 className="instance-node" />
              <p className="p">Überblick über Lösungsstrategien für die identifizierten Problemfelder</p>
            </div>
            <div className="line">
              <IconsBxCheckCircle3 className="instance-node" />
              <p className="p">Implementierung gängiger Ansätze in praxisnahen Beispielen</p>
            </div>
          </div>
        </div>
      )}

      {property1 === "variant-3" && (
        <>
          <div className="list-2">
            <div className="line-2">
              <IconsBxSlideshow className="instance-node" />
              <p className="title-5">Schulung vor Ort oder Online</p>
            </div>
            <div className="line-2">
              <IconsBxInfinite className="instance-node" />
              <div className="title-5">Betreuung durch hochqualifizierte Studenten</div>
            </div>
            <div className="line-2">
              <IconsBxFile className="instance-node" />
              <p className="title-5">Vermittlung praktischer &amp; theoretischer Konzepte</p>
            </div>
            <div className="line-2">
              <IconsBxDownload1 className="instance-node" />
              <div className="title-5">Individuell anpassbare Inhalte</div>
            </div>
            <div className="line-2">
              <IconsBxDownload1 className="instance-node" />
              <div className="title-5">Zugriff auf Schulungsmaterial</div>
            </div>
          </div>
          <div className="title-6">Unser Schulungsangebot</div>
        </>
      )}
    </div>
  );
};

Schulungen.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
