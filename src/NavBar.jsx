import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { useI18n } from './i18n/useI18n.js';

function NavBar() {
    const { locale, toggleLanguage, t } = useI18n();

    return (
        <Navbar expand="lg" className="NavBarHomePage" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" role="navigation">
                    <Nav className="me-auto text-color">
                        <Nav.Link href="#Home">{t('nav.home')}</Nav.Link>
                        <Nav.Link href="#about">{t('nav.about')}</Nav.Link>
                        <Nav.Link href="#competences">{t('nav.skills')}</Nav.Link>
                        <Nav.Link href="#projet">{t('nav.projects')}</Nav.Link>
                    </Nav>
                    <button
                        type="button"
                        className="btn btn-outline-light btn-sm ms-auto"
                        onClick={toggleLanguage}
                        aria-label={t('nav.switchLanguage')}
                    >
                        {locale === 'fr' ? 'EN' : 'FR'}
                    </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
