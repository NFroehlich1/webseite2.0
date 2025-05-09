import { useState } from  "react";
import { useTranslation } from 'react-i18next';
import "./styles.css"
import Team from "../../resources/IMG_5035.png";
import MainImg from "../../resources/landing_header.png"
import VideoIdle from "../../resources/video-idle.png"
import NextBtn from "../../resources/next-btn.png"
import LightBulb from "../../resources/LightBulb.svg"
import Award from "../../resources/award.svg"
import TeamIcon from "../../resources/team.svg"
import MockVideo from "../../resources/video.svg"
import IBM from "../../resources/image6.svg";
import QuantCo from "../../resources/image8.svg";
import Sick from "../../resources/image10.svg";
import BoschRexroth from "../../resources/image11.svg";
import Prenode from "../../resources/prenode.png"
import {Event, EventContainer, EventDisplay, monthMap} from "./Components"
import VortragIBM from "../../resources/vortrag_ibm.png"
import Felix from "../../resources/Felix_Moeller.jpg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TestimonialCarousel from "../TestimonialTiles";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [showEventNum,setshowEventNum] = useState(-1);
    const partners: string[] = [IBM,Sick,QuantCo,BoschRexroth,Prenode]
    const events: Event[] = [
        {image_src: VortragIBM, tag: t("lecture", "Vortrag"), date: new Date(2022,11,22),
            title: t("ibm_sustainability_lecture", "Vortrag zu Nachhaltigkeit von IBM"), author_img_src: Felix, author_name: "Felix Möller",
            description: t("ibm_lecture_description", "Am Dienstag den 22. November 2022 veranstaltete IBM einen spannenden Vortrag zum Thema Nachhaltigkeit."
            + "Nach dem Vortrag in unserem Linkit-Bürp ging es zu einem gemeinsamen Get-Together ins nahegelegene Oxford Pub. Bei"
            + " Bier und Burger konnten die Teilnehmer des Vortrags noch einmal mit den IBM-Mitarbeitern ins Gespräch kommen.")
        },
        {image_src: VortragIBM, tag: t("christmas_party", "Weihnachtsfeier"), date: new Date(2022,9,28),
            title: t("christmas_party_title", "linkit Weihnachtsfeier 2022"), author_img_src: Felix, author_name: "Felix Möller",
            description: t("christmas_party_description", "Test Weihnachtsfeier")
        },
        {image_src: VortragIBM, tag: t("gds_fall_conference", "GDS Herbsttagung"), date: new Date(2022,11,22),
            title: t("gds_presentation_title", "Präsentierung der Hochschulgruppe auf der Herbsttagung der GDS"), author_img_src: Felix, author_name: "Felix Möller",
            description: t("gds_description", "Coole Tagung etc.")
        }
    ]
    return (
        <main>
            {/* HERO SECTION */}
            <section className="hero-section">
                <img src={MainImg} className="hero-bg" alt="Background" />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Data. Knowledge.<br/>People.</h1>
                    <p className="hero-subtitle">{t('linkit_desc')}</p>
                    <div className="hero-buttons">
                        <button className="hero-btn primary" onClick={() => navigate('/companies')}>{t('unternehmen')}</button>
                        <button className="hero-btn secondary" onClick={() => navigate('/students')}>{t('studierende')}</button>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="features-section">
                <div className="features-row">
                    <div className="feature-card">
                        <img src={LightBulb} alt="Data Science" className="feature-icon" />
                        <h2>{t('data_science')}</h2>
                        <p>{t('data_science_desc')}</p>
                    </div>
                    <div className="feature-card">
                        <img src={Award} alt="Industry Projects" className="feature-icon" />
                        <h2>{t('industry_projects')}</h2>
                        <p>{t('industry_projects_desc')}</p>
                    </div>
                    <div className="feature-card">
                        <img src={TeamIcon} alt="Students" className="feature-icon" />
                        <h2>{t('students')}</h2>
                        <p>{t('students_desc')}</p>
                    </div>
                </div>
            </section>

            {/* ÜBER UNS & CALL TO ACTION */}
            <section className="about-section">
                <div className="about-content">
                    <h2>{t('about')}</h2>
                    <p>{t('home_about_description', 'Wir sind die Data Science Hochschulgruppe am KIT. Gemeinsam mit Studierenden, Unternehmen und Alumni gestalten wir die Zukunft von Data Science, KI und Digitalisierung. Werde Teil unseres Netzwerks!')}</p>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="stats-section">
                <div className="stats-row">
                    <div className="stat">
                        <div className="stat-value">100</div>
                        <div className="stat-label">{t('info_members')}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value">{'>'}80</div>
                        <div className="stat-label">{t('info_events')}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value">5</div>
                        <div className="stat-label">{t('info_partners')}</div>
                    </div>
                </div>
                <div className="cta-container">
                    <button className="cta-btn" onClick={() => navigate('/contact')}>{t('become_member', 'Jetzt Mitglied werden')}</button>
                </div>
            </section>

            {/* EVENTS SECTION */}
            <section className="events-section">
                <h2 className="section-title">{t('events', 'Events')}</h2>
                <div className="events-list">
                    {showEventNum === -1 && events.map((event: Event, idx) => (
                        <div key={idx} className="event-card" onClick={() => setshowEventNum(idx)}>
                            {EventContainer(event, () => setshowEventNum(idx))}
                        </div>
                    ))}
                    {showEventNum !== -1 && (
                        <div className="event-detail">
                            {EventDisplay(events[showEventNum], () => setshowEventNum(-1), showEventNum, events.length, setshowEventNum)}
                        </div>
                    )}
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="testimonials-section">
                <h2 className="section-title">{t('testimonial_intro')}</h2>
                <div className="testimonials-content">
                    <div className="testimonials-title">{t('testimonial_title')}</div>
                    <div className="testimonials-carousel">
                        <TestimonialCarousel/>
                    </div>
                </div>
            </section>

            {/* PARTNERS SECTION */}
            <section className="partners-section">
                <h2 className="section-title">{t('partners_intro')}</h2>
                <div className="partners-list">
                    {partners.map((partner: string, idx) => (
                        <div key={idx} className="partner-card">
                            <img src={partner} className="partner-img" alt="Partner logo" />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home;
