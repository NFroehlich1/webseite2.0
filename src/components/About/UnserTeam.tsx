import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./unserTeam.css";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  email?: string;
}

interface Department {
  name: string;
  description: string;
  members: TeamMember[];
}

const departments: Department[] = [
  {
    name: "Vorstand",
    description: "Der Vorstand verantwortet die strategische Ausrichtung von linkit. Dazu übernimmt er die zentrale Koordination der Ressortaktivitäten, um alle Ressorts auf einen strategischen Kurs einzustimmen und einen ressort-übergreifenden Informationsaustausch zu ermöglichen. Darüber hinaus verantwortet der Vorstand die kontinuierliche Weiterentwicklung von linkit und übernimmt die Vertretung und Repräsentation von linkit nach außen.",
    members: [
      {
        name: "Nico Fröhlich",
        position: "1. Vorsitzender",
        image: require("../../resources/team/Nico_Froehlich.jpg"),
        linkedin: "https://www.linkedin.com/in/nico-froehlich",
        email: "vorsitz@linkit.tech"
      },
      {
        name: "Patrick Schneier",
        position: "2. Vorsitzender",
        image: require("../../resources/team/Patrick_Schneider.png"),
        linkedin: "https://www.linkedin.com/in/patrick-schneier",
        email: "vorsitz@linkit.tech"
      }
    ]
  },
  {
    name: "IT",
    description: "Das Ressort IT kümmert sich vornehmlich um alle Themen rund um die technische Infrastruktur (z.B. Verwaltung der Hochschulgruppe in der MS365-Umgebung, Dateimanagement, E-Mail, Benutzerverwaltung, First Level Support, etc.) und ist zudem für die Weiterentwicklung der linkit-Homepage zuständig. Weiterhin verantwortet das Ressort die Organisation von internen Veranstaltungen zur Vermittlung von Software- und Programmierkenntnissen.",
    members: [
      {
        name: "Andreas Ott",
        position: "Ressortleiter IT",
        image: require("../../resources/team/Andreas_Ott.jpg"),
        linkedin: "https://www.linkedin.com/in/andreas-ott",
        email: "it@linkit.tech"
      },
      {
        name: "Thomas Frank",
        position: "stellv. Ressortleiter IT",
        image: require("../../resources/team/Thomas_Frank.png"),
        linkedin: "https://www.linkedin.com/in/thomas-frank",
        email: "it@linkit.tech"
      }
    ]
  },
  {
    name: "Finanzen & Recht",
    description: "Die Hauptaufgabe des Ressorts Finanzen & Recht ist die Abwicklung der Geschäftsvorfälle von linkit. Auf Basis einer transparenten, übersichtlichen Buchführung wird unsere Liquidität gesichert, sodass Vereinsaktivitäten finanziell unterstützt werden können. Zudem befasst sich das Ressort mit den gesetzmäßigen Pflichten gegenüber den Behörden und Dritten. Darüber hinaus fallen Versicherungs- und Rechtsschutzaspekte ebenfalls in das Aufgabengebiet des Ressorts.",
    members: [
      {
        name: "Florian Beyer",
        position: "Ressortleiter Finanzen & Recht",
        image: require("../../resources/team/Florian_Beyer.jpg"),
        linkedin: "https://www.linkedin.com/in/florian-beyer",
        email: "finanzen@linkit.tech"
      }
    ]
  },
  {
    name: "Workshop- & Partnerakquise",
    description: "Die Workshop- & Partnerakquise kümmert sich darum, Events zu organisieren, bei denen die Mitglieder des Vereins praxisnahes Wissen erwerben und Kontakte zu Unternehmen knüpfen können. Das erlangte Wissen hilft den Mitgliedern, Projekte auf dem Gebiet Data Science und AI durchzuführen und Firmen durch beratende Tätigkeiten zu unterstützen.",
    members: [
      {
        name: "Robert Lindermann",
        position: "Ressortleiter Workshop- & Partnerakquise",
        image: require("../../resources/team/Robert_Fabian_Lindermann.png"),
        linkedin: "https://www.linkedin.com/in/robert-lindermann",
        email: "workshops@linkit.tech"
      }
    ]
  },
  {
    name: "Marketing",
    description: "Das Ressort Marketing ist für ein einheitliches äußeres Erscheinungsbild von linkit verantwortlich. Hierzu gehört insbesondere die Pflege des Online-Marketings, Erstellung von Printmedien, die Marketing-Events sowie die Erstellung unseres Newsletters. Wir haben uns zum Ziel gesetzt, alle Interessenten permanent auf dem Laufenden zu halten und die Reichweite sowie die Bekanntheit von linkit zu erhöhen.",
    members: [
      {
        name: "Nikolas Braunschweiger",
        position: "Ressortleiter Marketing",
        image: require("../../resources/team/Nikolas_Braunschweiger.jpg"),
        linkedin: "https://www.linkedin.com/in/nikolas-braunschweiger",
        email: "marketing@linkit.tech"
      },
      {
        name: "Rubén González",
        position: "Stellv. Ressortleiter Marketing",
        image: require("../../resources/team/Rubén_Félix_González_Niedoba.png"),
        linkedin: "https://www.linkedin.com/in/ruben-gonzalez",
        email: "marketing@linkit.tech"
      }
    ]
  },
  {
    name: "HR",
    description: "Das Ziel des Ressorts HR ist es, die Zufriedenheit der Mitglieder und das Zugehörigkeitsgefühl zu linkit zu stärken. Die Kernaufgabe liegt somit darin, die Mitglieder bei ihrer persönlichen Weiterentwicklung zu unterstützen und den Zusammenhalt des Teams durch die Organisation von Team-Events zu erhöhen. Neben der Werbung und Integration von neuen Mitgliedern, verantwortet das Ressort zusätzlich auch die Administration bestehender Mitglieder und der aktive Kontakt zu ehemaligen Mitgliedern.",
    members: [
      {
        name: "Jonathan Roth",
        position: "Ressortleiter HR",
        image: require("../../resources/team/Jonathan_Roth.jpg"),
        linkedin: "https://www.linkedin.com/in/jonathan-roth",
        email: "hr@linkit.tech"
      }
    ]
  },
  {
    name: "Knowledge Department",
    description: "Das Knowledge Department ist für die Weiterbildung von linkit-Mitgliedern verantwortlich, damit sie sich zu Data Science-Experten entwickeln. Zudem wird durch die interne und externe Verwendung der Schulungsinhalte das Vermitteln von Wissen (\"Lernen durch Lehren\") als zentrales Weiterbildungselement gestärkt.",
    members: [
      {
        name: "Erik Schulze",
        position: "Ressortleiter Knowledge Department",
        image: require("../../resources/team/Erik_Schulze.png"),
        linkedin: "https://www.linkedin.com/in/erik-schulze-830056253/",
        email: "schulungen@linkit.tech"
      }
    ]
  }
];

const UnserTeam = () => {
  return (
    <div className="unser-team-page">
      <Container fluid className="team-container">
        <h1 className="team-title">Unser Team</h1>
        <p className="team-intro">
          Lernen Sie die Ressorts und Personen kennen, die linkit ausmachen. Jedes Ressort trägt mit seinen spezifischen Aufgaben zum Erfolg unserer Hochschulgruppe bei.
        </p>
        
        {departments.map((department, index) => (
          <div key={index} className="department-section">
            <h2 className="department-title">{department.name}</h2>
            <p className="department-description">{department.description}</p>
            
            {department.members.length > 0 && (
              <Row className="member-row">
                {department.members.map((member, memberIndex) => (
                  <Col key={memberIndex} xs={12} sm={6} md={6} lg={6} className="member-col">
                    <div className="member-card">
                      <div className="member-card-inner">
                        <div className="member-image-container">
                          <img src={member.image} alt={member.name} className="member-image" />
                        </div>
                        <div className="member-info">
                          <h3 className="member-name">{member.name}</h3>
                          <p className="member-position">{member.position}</p>
                          <div className="member-contact">
                            {member.linkedin && (
                              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-social-link">
                                <FaLinkedin className="member-social-icon linkedin" />
                              </a>
                            )}
                            {member.email && (
                              <a href={`mailto:${member.email}`} className="member-social-link">
                                <MdEmail className="member-social-icon email" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default UnserTeam;
