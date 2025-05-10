import React from "react";
import { UnsereRessorts } from "../generated/components/UnsereRessorts";
import { UnsereSchirmherren } from "../generated/components/UnsereSchirmherren";
import { Chevron } from "../generated/icons/AboutUsPageIcons/Chevron";
import { Chevron1 } from "../generated/icons/AboutUsPageIcons/Chevron1";
import { User } from "../generated/icons/AboutUsPageIcons/User";
import { useTranslation } from "react-i18next";
import "./style.css";

// Import images
import dscImage from "../../resources/dsc-04928.png";
import analyticsImage from "../../resources/analytics-1.svg";
import launchImage from "../../resources/launch.svg";
import dividersImage from "../../resources/dividers.png";
import divider21Image from "../../resources/divider-21.svg";
import divider22Image from "../../resources/divider-22.svg";
import divider23Image from "../../resources/divider-23.svg";
import group6Image from "../../resources/group-48095450-6.png";
import group7Image from "../../resources/group-48095450-7.png";
import group8Image from "../../resources/group-48095450-8.png";
import group9Image from "../../resources/group-48095450-9.png";
import group10Image from "../../resources/group-48095450-10.png";
import group11Image from "../../resources/group-48095450-11.png";

export const AboutUs = (): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <div className="about-us">
      <div className="div-2">
        <div className="overlap-2">
          <div className="group-2">
            <div className="overlap-group-5">
              <div className="about">
                <div className="text-5">
                  <p className="text-wrapper-3">
                    {t("ueber_uns_description")}
                  </p>
                </div>
              </div>
              <div className="text-wrapper-4">{t("about")}</div>
              <img className="dsc" alt="Dsc" src={dscImage} />
            </div>
          </div>
          <div className="cards">
            <div className="icon-box-7">
              <div className="icon">
                <User className="user-instance" />
              </div>
              <div className="numbers">
                <div className="title-6">100</div>
              </div>
              <div className="title-7">{t("info_members")}</div>
            </div>
          </div>
          <div className="icon-box-wrapper">
            <div className="icon-box-7">
              <div className="icon">
                <img className="img-2" alt="Analytics" src={analyticsImage} />
              </div>
              <div className="numbers">
                <div className="title-6">80</div>
              </div>
              <div className="title-8">
                {t("info_events")}
              </div>
            </div>
          </div>
          <div className="cards-2">
            <div className="icon-box-8">
              <div className="launch-wrapper">
                <img className="img-2" alt="Launch" src={launchImage} />
              </div>
              <div className="title-wrapper">
                <div className="title-6">5</div>
              </div>
              <div className="title-9">
                {t("info_partners")}
              </div>
            </div>
          </div>
        </div>
        <div className="unsere-rollen">
          <div className="text-wrapper-5">{t("roles", "Unsere Rollen")}</div>
          <div className="text-6">
            <div className="title-10">{t("board")}</div>
            <p className="subtitle">
              {t("board_description", "Führe den Verein und über 100 Mitglieder.")}
              <br />
              {t("board_time", "Mind. 10h pro Woche")}
            </p>
          </div>
          <div className="text-7">
            <div className="title-10">{t("department_head", "Ressortleiterin")}</div>
            <p className="subtitle-2">
              {t("department_head_description", "Übernimm Verantwortung als Ressortleiter und führe dein Ressort mit bis zu 15 Mitgliedern.")}
              <br />
              {t("department_head_time", "Mind. 5h pro Woche")}
            </p>
          </div>
          <div className="text-8">
            <div className="title-10">{t("department_member", "Ressortmitglied")}</div>
            <p className="subtitle-2">
              {t("department_member_description", "Schließe dich einem Ressort deiner Wahl an und gestalte aktiv linkit mit.")} <br />
              {t("department_member_time", "Mind. 3h pro Woche")}
            </p>
          </div>
          <div className="steps">
            <div className="overlap-3">
              <img className="dividers" alt="Dividers" src={dividersImage} />
              <div className="step">
                <div className="overlap-group-6">
                  <div className="text-wrapper-6">2</div>
                </div>
              </div>
            </div>
            <div className="step-2">
              <div className="overlap-group-6">
                <div className="text-wrapper-6">1</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group-6">
                <div className="text-wrapper-6">3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-7">{t("network", "Unser Netzwerk")}</div>
        <UnsereRessorts
          className="unsere-ressorts-instance"
          divider={divider21Image}
          divider1={divider23Image}
          dividerClassName="unsere-ressorts-3"
          dividerClassNameOverride="unsere-ressorts-4"
          iconBoxClassName="design-component-instance-node"
          iconBoxClassNameOverride="unsere-ressorts-2"
          img={divider22Image}
          property1="default"
        />
        <div className="unsere-schirmherren-2">
          <div className="title-11">{t("advisory_board", "Unser Beirat")}</div>
          <div className="frame">
            <div className="highlight-reel-3">
              <div className="overlap-group-7">
                <div className="rectangle-3" />
                <img className="group-3" alt="Group" src={group6Image} />
                <p className="title-12">
                  <span className="text-wrapper-8">
                    Paul Liepe
                    <br />
                  </span>
                  <span className="text-wrapper-9">
                    Sr Software Architect @Siemens Tech
                    <br />
                    Co-Gründer
                  </span>
                </p>
              </div>
            </div>
            <div className="highlight-reel-3">
              <div className="overlap-group-7">
                <div className="rectangle-3" />
                <img className="group-3" alt="Group" src={group7Image} />
                <p className="title-12">
                  <span className="text-wrapper-8">
                    Henri Felsenstein
                    <br />
                  </span>
                  <span className="text-wrapper-9">
                    AI Specialist @Deutsche Bahn
                    <br />
                    Leitung Industrieprojekte 2018/19
                  </span>
                </p>
              </div>
            </div>
            <div className="highlight-reel-3">
              <div className="overlap-group-7">
                <div className="rectangle-3" />
                <img className="group-3" alt="Group" src={group8Image} />
                <p className="title-12">
                  <span className="text-wrapper-8">
                    Patrick Schmid
                    <br />
                  </span>
                  <span className="text-wrapper-9">
                    Product Owner @Bosch
                    <br />
                    Leitung Corporate Design 2017/18
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="slider-btns">
            <div className="chevron-wrapper">
              <Chevron className="icon-instance-node" color="white" />
            </div>
            <div className="chevron-wrapper">
              <Chevron1 className="icon-instance-node" color="white" />
            </div>
          </div>
        </div>
        <UnsereSchirmherren
          className="unsere-schirmherren-instance"
          group={group9Image}
          group1={group11Image}
          img={group10Image}
          property1="default"
        />
      </div>
    </div>
  );
};
