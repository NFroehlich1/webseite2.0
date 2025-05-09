import React from 'react';
import { Link } from 'react-router-dom';
import FooterButton from './FooterButton';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Footer-Content">
            <div className="Footer-Text"> {/* left side */}
                
                <div className="Footer-Logo"></div>

                <p>linkit e.V. ist seit 2016 die erste Industrie 4.0 und Data Science Hochschulgruppe in Deutschland. </p>
                <p>Aktueller Vorstand sind Nico Fröhlich und Patrick Schneider</p>

                <div className="Copyright">© 2025 linkit e.V. - All rights reserved</div>

            </div>
            <div className="Footer-Links"> {/* right side */}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/students">Studierende</Link></li>
                    <li><Link to="/companies">Unternehmen</Link></li>
                    <li><Link to="/about">Über uns</Link></li>
                </ul>
                <ul>
                    <li><a href="https://www.facebook.com/linkit.tech/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.linkedin.com/company/linkit-e.v./" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://www.youtube.com/channel/UCCZ4YhtLadnbIqxmvuBu0sA" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                    <li><a href="https://www.instagram.com/linkit_karlsruhe/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
                <ul>
                    <li><Link to="/imprint">Impressum</Link></li>
                    <li><Link to="/privacy">Datenschutzerklärung</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                </ul>
            </div>
        </div>
    </div>
  );
}
export default Footer;