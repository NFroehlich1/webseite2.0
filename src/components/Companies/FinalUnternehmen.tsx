import React from "react";
import { Btn } from "../generated/components/Btn";
import { IconsBxlLinkedinWrapper } from "../generated/components/IconsBxlLinkedinWrapper";
import { PropertyLWrapper } from "../generated/components/PropertyLWrapper";
import { ReferenzenReel } from "../generated/components/ReferenzenReel";
import { Schulungen } from "../generated/components/Schulungen";
import { IconsBxBriefcaseAlt2 } from "../generated/icons/IconsBxBriefcaseAlt2";
import { IconsBxConversation } from "../generated/icons/IconsBxConversation";
import { IconsBxEdit } from "../generated/icons/IconsBxEdit";
import { IconsBxRss1 } from "../generated/icons/IconsBxRss1";
import { IconsBxWrench1 } from "../generated/icons/IconsBxWrench1";
import { Property1Down1 } from "../generated/icons/Property1Down1";
import { User } from "../generated/icons/User";
import { useNavigate } from "react-router-dom";

/*
You should not use the public folder, use resources instead, pictures were already copied
This is an example and should be done for all other images,
even for those components in the generated folder.
You can refer to the home (landing) page for guidance.
*/
import ReferenceLeft from "../../resources/referenz-links-1.svg";
import ReferenceMiddle from "../../resources/referenz-mitte-1.svg";
import ReferenceRight from "../../resources/referenz-rechts-1.svg";
import VortragImage from "../../resources/img-2115.png";
import SchulungImage from "../../resources/mohammad-rahmani-cdbkmnzmd7o-unsplash-3.png";
import IndustrieImage from "../../resources/headway-5qgiuubxkwm-unsplash-2.png";
import GrafikImage from "../../resources/grafik-15.png";

import "./style.css";
import "./sections.css";
import "./vertical-layout.css";

export const Companies = (): JSX.Element => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };
  
  return (
    <div className="companies-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Ihr Unternehmen bei <span className="highlight">linkit</span></h1>
          <p className="subtitle">Werden Sie Teil unseres innovativen Netzwerks und profitieren Sie von der Expertise unserer Studierenden in den Bereichen Data Science, KI und Digitalisierung.</p>
          <div className="benefits-container">
            <div className="benefits-row">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <IconsBxBriefcaseAlt2 className="icon-instance-node-2" />
                </div>
                <div className="benefit-text">Zugang zu Top-Talenten</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <IconsBxWrench1 className="icon-instance-node-2" />
                </div>
                <div className="benefit-text">Innovative Lösungsansätze</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <IconsBxRss1 className="icons-bx-rss" />
                </div>
                <div className="benefit-text">Starkes Netzwerk</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="vortraege-events">
        <div className="section-content">
          <h2>Vorträge und Events</h2>
          <p className="section-subtitle">
            Organisieren Sie zusammen mit Linkit einen Vortrag oder ein Event im nächsten Semester, lernen Sie
            unsere Studierenden kennen und kommen Sie ins Gespräch - am besten in geselliger Runde!
          </p>
          <div className="section-with-image">
            <div className="section-text">
              <div className="event-types">
                <div className="event-type">
                  <h3>Vorträge bei linkit</h3>
                  <p>Geben Sie Ihr Wissen aus der Industrie an die Studierenden weiter und kommen Sie ins Gespräch</p>
                </div>
                <div className="event-type">
                  <h3>Exkursionen zu Ihnen</h3>
                  <p>Zeigen Sie uns wie Sie brandneue Technologien bei sich im Unternehmen umsetzen</p>
                </div>
                <div className="event-type">
                  <h3>Hackathons</h3>
                  <p>Lassen SIe sich von der Kompetenz unserer Studierenden überzeugen</p>
                </div>
                <div className="event-type">
                  <h3>Andere Ideen?</h3>
                  <p>Wir sind offen für Vorschläge und freuen uns auf eine Anfrage Ihrerseits</p>
                </div>
              </div>
              <button className="contact-btn">Kontakt</button>
            </div>
            <div className="section-image">
              <img src={VortragImage} alt="Vorträge und Events" className="transparent-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="angebot">
        <div className="section-content">
          <h2>Das bieten wir Ihrem Unternehmen</h2>
          <p className="section-subtitle"><span className="highlight">linkit</span> ist die Schnittstelle zwischen Studierenden und Industrie</p>
          <div className="offerings-grid">
            <div className="offering-item">
              <div className="offering-icon">
                <IconsBxBriefcaseAlt2 className="icon-instance-node-2" />
              </div>
              <h3>Fachkräfte von morgen</h3>
              <p>Lernen Sie die Talente des KIT in Data Science und ML kennen</p>
            </div>
            <div className="offering-item">
              <div className="offering-icon">
                <User className="icon-instance-node-2" />
              </div>
              <h3>Multidisziplinarität</h3>
              <p>Profitieren Sie von Mitgliedern aus allen Fachrichtungen</p>
            </div>
            <div className="offering-item">
              <div className="offering-icon">
                <IconsBxWrench1 className="icon-instance-node-2" />
              </div>
              <h3>Forschungskompetenz</h3>
              <p>Arbeiten Sie mit uns zusammen an neuen Technologien</p>
            </div>
            <div className="offering-item">
              <div className="offering-icon">
                <IconsBxRss1 className="icons-bx-rss" />
              </div>
              <h3>Netzwerk</h3>
              <p>Nutzen Sie unser Netzwerk aus Mitgliedern und Alumni</p>
            </div>
            <div className="offering-item">
              <div className="offering-icon">
                <IconsBxEdit className="icon-instance-node-2" />
              </div>
              <h3>Kooperation</h3>
              <p>Tauschen Sie mit uns Wissen und Expertise aus</p>
            </div>
            <div className="offering-item">
              <div className="offering-icon">
                <IconsBxConversation className="icon-instance-node-2" />
              </div>
              <h3>Erhöhung der Reichweite</h3>
              <p>Präsentieren Sie sich als Technologieführer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="schulungen">
        <div className="section-content">
          <h2>Schulungen</h2>
          <p className="section-subtitle">
            Machen Sie sicherstellen, dass Ihr Unternehmen auf dem neuesten Stand der Technologie bleibt und Ihre Mitarbeiter Einblicke aus erster Hand gewinnen!
          </p>
          <div className="section-with-image">
            <div className="section-text">
              <div className="centered-image-container">
                <img src={GrafikImage} alt="" className="centered-image" />
              </div>
            </div>
            <div className="section-image">
              <img src={SchulungImage} alt="Schulungen - Data Science & Machine Learning" className="transparent-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="industrieprojekte">
        <div className="section-content">
          <h2>Industrieprojekte</h2>
          <p className="section-subtitle">
            Unsere Industrieprojekte bieten Ihnen eine einzigartige Gelegenheit, an innovativen Projekten und Forschungsarbeiten teilzunehmen.
          </p>
          <div className="section-with-image">
            <div className="section-image">
              <img src={IndustrieImage} alt="Industrieprojekte" className="transparent-image" />
            </div>
          </div>
          <div className="contact-button-container">
            <button className="outline-btn" onClick={handleContactClick}>Jetzt Kontakt aufnehmen</button>
          </div>
        </div>
      </div>

      <div className="section" id="referenzen">
        <div className="section-content">
          <h2>Referenzen</h2>
          <div className="referenzen">
            <ReferenzenReel
              className="referenzen-reel-instance"
              property1="default"
              referenzLinks={ReferenceLeft} 
              referenzMitte={ReferenceMiddle}
              referenzMitteClassName="referenzen-reel-2"
              referenzRechts={ReferenceRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
