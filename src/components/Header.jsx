import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logo.png';
import { scrollToElement, scrollToTop } from '../utils/scrollHelpers';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setExpanded(false);
    
    // Siempre navegar a home primero si no estamos ahí
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      // Esperar a que cargue la página y luego hacer scroll (más tiempo para mobile)
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 500);
    } else {
      // Si ya estamos en home, scroll inmediato
      scrollToElement(sectionId);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToTop();
      }, 100);
    } else {
      scrollToTop();
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`urko-navbar ${scrolled ? 'urko-navbar--scrolled' : ''}`}
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
    >
      <Container>
        <Navbar.Brand href="/" onClick={handleLogoClick} className="d-flex align-items-center">
          <img 
            src={logo} 
            alt="Urko Tántrico" 
            className="site-logo-img"
            width="105"
            height="41"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="align-items-lg-center">
            <Nav.Link onClick={() => handleNavClick('escuela-urko')}>Escuela Urko</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('entrenamientos')}>Entrenamientos</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('biblioteca')}>Libros</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('recursos-gratuitos')}>Recursos gratuitos</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('testimonios')}>Testimonios</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('sobre-mi')}>Sobre mí</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('contacto')}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
