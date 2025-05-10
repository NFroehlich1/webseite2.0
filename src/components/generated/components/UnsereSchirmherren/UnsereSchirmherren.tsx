/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

// Import images
import jivkaImage from "../../../../resources/Jivka_Ovtcharova.jpg";
import michaelFeindtImage from "../../../../resources/Michael_Feindt.jpg";
import gdsImage from "../../../../resources/GDS.jpg";
import quotes1Image from "../../../../resources/quotes-1.svg";
import quotes2Image from "../../../../resources/quotes-2.svg";
import quotesImage from "../../../../resources/quotes.svg";

interface Props {
  property1: "variant-4" | "variant-2" | "variant-3" | "default";
  className: any;
  group: string;
  img: string;
  group1: string;
}

export const UnsereSchirmherren = ({
  property1,
  className,
  group = jivkaImage,
  img = michaelFeindtImage,
  group1 = gdsImage,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`unsere-schirmherren ${className}`}>
      <div className={`schirmherren property-1-12-${state.property1}`}>
        {state.property1 === "default" && (
          <>
            <div
              className="highlight-reel"
              onClick={() => {
                dispatch("click");
              }}
            >
              <div className="overlap-group-2">
                <div className="rectangle" />
                <img className="group" alt="Group" src={group} />
                <p className="title">
                  <span className="span">
                    Prof. Dr. Dr.-Ing. Dr. h.c. Jivka Ovtcharova
                    <br />
                  </span>
                  <span className="span-2">Professorin am KIT</span>
                </p>
              </div>
            </div>
            <div className="highlight-reel">
              <div className="overlap-group-2">
                <div
                  className="rectangle"
                  onClick={() => {
                    dispatch("click_141");
                  }}
                />
                <img className="group" alt="Group" src={img} />
                <p className="title">
                  <span className="span">
                    Prof. Michael Feindt
                    <br />
                  </span>
                  <span className="span-2">
                    Professor am KIT
                    <br />
                    Co-Gründer von Blue Yonder
                  </span>
                </p>
              </div>
            </div>
          </>
        )}

        {["default", "variant-3", "variant-4"].includes(state.property1) && (
          <div className="highlight-reel-2">
            {state.property1 === "default" && (
              <div className="overlap-group-2">
                <div className="rectangle" />
                <img className="group" alt="Group" src={group1} />
                <p className="title">
                  <span className="span">
                    German Data Science Society <br />
                  </span>
                  <span className="span-2">Führende Vereinigung der akademisch ausgebildeten Data Scientist</span>
                </p>
              </div>
            )}

            {["variant-3", "variant-4"].includes(state.property1) && (
              <>
                <div className="quote">
                  <div className="overlap-group-3">
                    <div className="rectangle-2" />
                    {state.property1 === "variant-3" && (
                      <p className="title-2">
                        [Die Entwicklung und konsequente Anwendung von Data Science, Machine Learning und Artificial
                        Intelligence] benötigt eine Kombination von analytischem Denken, mathematischem und
                        Statistik-Verständnis, Programmierfähigkeiten sowie Neugier und Interesse am Verständnis von in
                        der Realität vorhandenen Problemen und ihrer Lösung. Die Nachfrage ist riesig [...], das Angebot
                        noch überschaubar. Ich unterstütze linkit, weil solches Können, sowie Eigeninitiative und
                        Engagement für die Bewältigung der großen Fragen der Zukunft [...] notwendig sind. Und es
                        einfach Spaß macht.&#34;
                      </p>
                    )}

                    <img
                      className="quotes"
                      alt="Quotes"
                      src={state.property1 === "variant-3" ? quotes1Image : quotes2Image}
                    />
                  </div>
                </div>
                <div className="overlap">
                  <div
                    className="rectangle"
                    onClick={() => {
                      dispatch("click_176");
                    }}
                  />
                  <img
                    className="group"
                    alt="Group"
                    src={state.property1 === "variant-4" ? gdsImage : michaelFeindtImage}
                  />
                  <div className="title">
                    <span className="span">
                      {state.property1 === "variant-3" && (
                        <>
                          Prof. Michael Feindt
                          <br />
                        </>
                      )}

                      {state.property1 === "variant-4" && (
                        <>
                          German Data Science Society <br />
                        </>
                      )}
                    </span>
                    <span className="span-2">
                      {state.property1 === "variant-3" && (
                        <>
                          Professor am KIT
                          <br />
                          Co-Gründer von Blue Yonder
                        </>
                      )}

                      {state.property1 === "variant-4" && (
                        <>Führende Vereinigung der akademisch ausgebildeten Data Scientist</>
                      )}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {state.property1 === "variant-2" && (
          <>
            <img className="group" alt="Group" src={jivkaImage} />
            <p className="title-3">
              <span className="span">
                Prof. Dr. Dr.-Ing. Dr. h.c. Jivka Ovtcharova
                <br />
              </span>
              <span className="span-2">Professorin am KIT</span>
            </p>
            <div
              className="rectangle"
              onClick={() => {
                dispatch("click_162");
              }}
            />
            <div className="overlap-group-wrapper">
              <div className="overlap-group-4">
                <div className="rectangle-2" />
                <p className="title-4">
                  Industrie 4.0 braucht Vordenker und Treiber. Die Zeit zu handeln ist jetzt! (...) Wissen in praktische
                  Fähigkeiten schnell umsetzen und dabei den Blick für das große Ganze zu behalten ist ein Markenzeichen
                  von linkit. Als Schirmherrin unterstütze ich diese einzigartige studentische Initiative voll und ganz
                  und wünsche weiterhin viel Begeisterung und Erfolg bei der Mitgestaltung der Arbeitswelt der Zukunft.
                </p>
                <img className="quotes" alt="Quotes" src={quotesImage} />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="title-5">Unsere Schirmherren</div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };

      case "click_141":
        return {
          property1: "variant-3",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click_162":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "click_176":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

UnsereSchirmherren.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-2", "variant-3", "default"]),
  group: PropTypes.string,
  img: PropTypes.string,
  group1: PropTypes.string,
};
