/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  property1: "default" | "variant-5" | "variant-2" | "variant-3" | "variant-4" | "variant-7" | "variant-6";
  className: any;
  iconBoxClassName: any;
  iconBoxClassNameOverride: any;
  divider: string;
  dividerClassName: any;
  img: string;
  dividerClassNameOverride: any;
  divider1: string;
}

export const UnsereRessorts = ({
  property1,
  className,
  iconBoxClassName,
  iconBoxClassNameOverride,
  divider = "/img/divider-18.svg",
  dividerClassName,
  img = "/img/divider-19.svg",
  dividerClassNameOverride,
  divider1 = "/img/divider-20.svg",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`unsere-ressorts ${className}`}>
      <div className="text-wrapper">Unsere Ressorts</div>
      <div className="content">
        <div className="overlap-group">
          <div
            className={`icon-box ${state.property1}`}
            onMouseEnter={() => {
              dispatch("mouse_enter");
            }}
            onMouseLeave={() => {
              dispatch("mouse_leave");
            }}
          >
            <div className="text">
              <div className="partner-events">Partner &amp; Events</div>
            </div>
            {state.property1 === "variant-7" && (
              <p className="div">
                Wir stellen sicher, dass wir mit den besten und innovativsten Unternehmen der Welt kooperieren! Unser
                starkes Unternehmens-Netzwerk ist die Basis für ambitionierte Events und Projekte.
              </p>
            )}
          </div>
          <div
            className={`icon-box-2 property-1-1-${state.property1}`}
            onMouseEnter={() => {
              dispatch("mouse_enter_210");
            }}
            onMouseLeave={() => {
              dispatch("mouse_leave_210");
            }}
          >
            <div className="div-wrapper">
              <div className="text-wrapper-2">Knowledge Department</div>
            </div>
            {state.property1 === "variant-4" && (
              <p className="p">
                Wir wollen Data Science Experten sein. Dafür entwickeln wir eigene Schulungsformate, Challenges und
                anderen Content, um das Wissen einiger Mitglieder für alle zu teilen.
              </p>
            )}
          </div>
          <div
            className={`icon-box-3 property-1-3-${state.property1} ${iconBoxClassName}`}
            onMouseEnter={() => {
              dispatch("mouse_enter_213");
            }}
            onMouseLeave={() => {
              dispatch("mouse_leave_213");
            }}
          >
            <div className="text-2">
              <div className="text-wrapper-2">IT</div>
            </div>
            {state.property1 === "variant-2" && (
              <p className="die-IT-ist">
                Die IT ist essenziell damit linkit effizient, modern, und kollaborativ läuft.
                <br />
                Webseitengestaltung, Automatisierung, Cloud Services und SaaS Infrastruktur. Die Aufgaben sind
                vielseitig, herausfordernd, und lehrsam!
              </p>
            )}
          </div>
          <div
            className={`icon-box-4 property-1-5-${state.property1}`}
            onMouseEnter={() => {
              dispatch("mouse_enter_216");
            }}
            onMouseLeave={() => {
              dispatch("mouse_leave_216");
            }}
          >
            <div className="text-3">
              <div className="text-wrapper-2">Marketing</div>
            </div>
            {state.property1 === "variant-3" && (
              <p className="wir-tragen-vision">
                Wir tragen Vision &amp; Mission nach außen, sorgen dafür, dass linkit konsistent auftritt, und erhöhen
                kontinuierlich die Reichweite des Vereins damit noch mehr Studierende von unseren Angeboten profitieren
                können.
              </p>
            )}
          </div>
          <div
            className={`icon-box-5 property-1-7-${state.property1} ${iconBoxClassNameOverride}`}
            onMouseEnter={() => {
              dispatch("mouse_enter_219");
            }}
            onMouseLeave={() => {
              dispatch("mouse_leave_219");
            }}
          >
            <div className="externe-projekte-wrapper">
              <div className="externe-projekte">Externe Projekte &amp; Schulungen</div>
            </div>
            {state.property1 === "variant-5" && (
              <p className="theorie-ist-gut">
                Theorie ist gut, Praxis ist besser!
                <br />
                Wir bieten Unternehmen das volle Spektrum von Einführungen in Data Science bis hin zu konkreten
                Projekten und Studierenden die Chance ihr Wissen zu präsentieren und umzusetzen.
              </p>
            )}
          </div>
          <div
            className={`icon-box-6 property-1-10-${state.property1}`}
            onMouseEnter={() => {
              dispatch("mouse_enter_222");
            }}
            onMouseLeave={() => {
              dispatch("mouse_leave_222");
            }}
          >
            <div className="text-4">
              <div className="text-wrapper-2">HR</div>
            </div>
            {state.property1 === "variant-6" && (
              <p className="div">
                Unsere Mitglieder sind das wichtigste Gut bei Linkit! Für eine HSG sind sie der Treiber von Innovation
                und Fortschritt und damit den Gesamterfolg der HSG. HR organisiert unsere Team-Events, den Recruitment
                Prozess und das Mentoren-Programm.
              </p>
            )}
          </div>
          <img className="divider" alt="Divider" src={divider} />
          <img className={`img ${dividerClassName}`} alt="Divider" src={img} />
          <img className={`divider-2 ${dividerClassNameOverride}`} alt="Divider" src={divider1} />
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "variant-7",
        };

      case "mouse_enter_210":
        return {
          property1: "variant-4",
        };

      case "mouse_enter_213":
        return {
          property1: "variant-2",
        };

      case "mouse_enter_216":
        return {
          property1: "variant-3",
        };

      case "mouse_enter_219":
        return {
          property1: "variant-5",
        };

      case "mouse_enter_222":
        return {
          property1: "variant-6",
        };
    }
  }

  if (state.property1 === "variant-7") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "variant-4") {
    switch (action) {
      case "mouse_leave_210":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "mouse_leave_213":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "mouse_leave_216":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "mouse_leave_219":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "variant-6") {
    switch (action) {
      case "mouse_leave_222":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

UnsereRessorts.propTypes = {
  property1: PropTypes.oneOf(["default", "variant-5", "variant-2", "variant-3", "variant-4", "variant-7", "variant-6"]),
  divider: PropTypes.string,
  img: PropTypes.string,
  divider1: PropTypes.string,
};
