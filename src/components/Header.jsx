import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`urko-navbar ${scrolled ? 'urko-navbar--scrolled' : ''}`}
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
    >
      <Container>
        <Navbar.Brand href="#top" className="d-flex align-items-center">
          <img src={logo} alt="Urko Tántrico" className="site-logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="align-items-lg-center">
            <Nav.Link href="#escuela-urko" onClick={() => setExpanded(false)}>Escuela Urko</Nav.Link>
            <Nav.Link href="#entrenamientos" onClick={() => setExpanded(false)}>Entrenamientos</Nav.Link>
            <Nav.Link href="#biblioteca" onClick={() => setExpanded(false)}>Biblioteca</Nav.Link>
            <Nav.Link href="#recursos-gratuitos" onClick={() => setExpanded(false)}>Recursos Gratuitos</Nav.Link>
            <Nav.Link href="#testimonios" onClick={() => setExpanded(false)}>Testimonios</Nav.Link>
            <Nav.Link href="#sobre-mi" onClick={() => setExpanded(false)}>Sobre Mí</Nav.Link>
            <Nav.Link href="#contacto" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
