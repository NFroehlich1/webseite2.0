import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Ovtcharova from "../../resources/Jivka_Ovtcharova.jpg";
import Feindt from "../../resources/Michael_Feindt.jpg";
import GDS from "../../resources/GDS.jpg";
import "./about-link.css";

const About = () => {
    return (
        <main>
            <Container fluid className="team-link-container">
                <Link to="/about/team" className="team-link-button">
                    Unser Team kennenlernen
                    <span className="arrow-icon">→</span>
                </Link>
            </Container>
            <Container fluid className="start">
                <h2>Unsere Schirmherren</h2>
                <Container fluid className="patron">
                    <Container className="patronImgAndName">
                        <img src={Ovtcharova} className="patron_img"/>
                        <h3>Prof. Dr. Dr.-Ing. Dr. h.c. Jivka Ovtcharova</h3>
                    </Container>
                    <Container className="patronDesc">
                        "Industrie 4.0 braucht Vordenker und Treiber. Die Zeit zu handeln ist jetzt!
                        Als allererste Hochschulgruppe hat linkit die Weichen für ein grundlegend neues Verständnis
                        für digitale Bildung, Qualifikation und Innovation im Umgang mit Industrie 4.0 gestellt.
                        Wissen in praktische Fähigkeiten schnell umsetzen und dabei den Blick für das große Ganze zu
                        behalten ist ein Markenzeichen von linkit. Als Schirmherrin unterstütze ich diese einzigartige
                        studentische Initiative voll und ganz und wünsche weiterhin viel Begeisterung und Erfolg bei der
                        Mitgestaltung der Arbeitswelt der Zukunft."
                    </Container>
                </Container>
                <Container fluid className="patron">
                    <Container className="patronImgAndName">
                        <img src={Feindt} className="patron_img"/>
                        <h3>Prof. Dr. Michael Feindt</h3>
                    </Container>
                    <Container className="patronDesc">
                        "1993 am CERN habe ich mein erstes neuronales Netz trainiert. Ich habe einen Großteil meiner wissenschaftlichen
                        Erfolge als Physiker an den größten Teilchenbeschleunigern der Welt (DESY, CERN, Fermilab (USA) und KEK (Japan)),
                        als Physik-Professor am KIT, und wirtschaftlichen Erfolge als Entrepreneur, Gründer und heute wissenschaftlicher
                        und strategischer Berater des inzwischen zum weltweiten Großunternehmen entwickelten Blue Yonder der Entwicklung
                        und konsequenten Anwendung von Data Science, Machine Learning und Artificial Intelligence zu verdanken. Das benötigt
                        eine Kombination von analytischem Denken, mathematischem und Statistik-Verständnis, Programmierfähigkeiten sowie
                        Neugier und Interesse am Verständnis von in der Realität vorhandenen Problemen und ihrer Lösung. Die Nachfrage ist
                        riesig und wird in Zukunft noch dramatisch steigen, das Angebot noch überschaubar. Ich unterstütze linkit, weil
                        solches Können, sowie Eigeninitiative und Engagement für die Bewältigung der großen Fragen der Zukunft, aber auch
                        zum Erhalt unseres Wohlstands in Deutschland und Europa, notwendig sind. Und es einfach Spaß macht."
                    </Container>
                </Container>
                <Container fluid className="patron">
                    <Container className="patronImgAndName">
                        <img src={GDS} className="patron_img"/>
                        <h3> </h3>
                    </Container>
                    <Container className="patronDesc">
                        "Ziel der German Data Science Society (GDS) e.V. ist es die führende Vereinigung der akademisch ausgebildeten Data
                        Scientists zu sein, bei Einbeziehung der entsprechenden Hochschul- und Universitätsaktivitäten. Für die GDS ist es
                        sehr wesentlich, dass eine Reihe großer weltweit tätiger Unternehmen, die für Data Science und KI Maßstäbe setzen,
                        als fördernde Mitglieder mitarbeiten. Für unsere persönlichen Mitglieder bedeutet das den Zugang zu den interessantesten
                        und bedeutendsten Entwicklungen."
                    </Container>
                </Container>
            </Container>
        </main>
    )
};

export default About;
