import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderButton from './HeaderButton';
import LightSwitch from './LightSwitch';
import {Link, useLocation} from 'react-router-dom';
import './Header.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/config';
import { useState, useEffect } from 'react';

const Header = () => {
    const { t } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language || 'de');
    const location = useLocation();
    
    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };
    
    useEffect(() => {
        // Listen for language changes
        const handleLanguageChanged = () => {
            setCurrentLang(i18n.language);
        };
        
        i18n.on('languageChanged', handleLanguageChanged);
        
        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, []);
    
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
        setCurrentLang(lng);
    };
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="Header-Navbar">
            <Container>
                <Navbar.Brand as={Link} to="/" className="Header-Logo" ></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/students" className={`Header-Link ${isActive('/students') ? 'Header-Link-Active' : ''}`} >{t('studierende')}</Nav.Link>
                        <Nav.Link as={Link} to="/companies" className={`Header-Link ${isActive('/companies') ? 'Header-Link-Active' : ''}`} >{t('unternehmen')}</Nav.Link>
                        <NavDropdown 
                            title={t('ueber_uns')} 
                            id="basic-nav-dropdown" 
                            className={`Header-Link ${isActive('/about') || isActive('/contact') ? 'Header-Link-Active' : ''}`} 
                        >
                            <NavDropdown.Item as={Link} to="/about" className={`Header-Link-Sub ${isActive('/about') ? 'Header-Link-Sub-Active' : ''}`} >{t('about')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/contact" className={`Header-Link-Sub ${isActive('/contact') ? 'Header-Link-Sub-Active' : ''}`} >{t('kontakt')}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="Header-Social">
                        <a href="https://www.facebook.com/linkit.tech/" target="_blank" rel="noopener noreferrer" className="Header-Social-Link Header-Social-Link-Facebook">
                        </a>
                        <a href="https://www.instagram.com/linkit_karlsruhe/" target="_blank" rel="noopener noreferrer" className="Header-Social-Link Header-Social-Link-Instagram">
                        </a>
                        <a href="https://www.linkedin.com/company/linkit-e.v./" target="_blank" rel="noopener noreferrer" className="Header-Social-Link Header-Social-Link-Linkedin">
                        </a>
                    </div>
                    <div className="Header-LanguageSwitcher">
                        <button 
                            onClick={() => changeLanguage('de')} 
                            className={`lang-btn ${currentLang === 'de' ? 'active' : ''}`}
                        >
                            DE
                        </button>
                        <button 
                            onClick={() => changeLanguage('en')} 
                            className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                        >
                            EN
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
