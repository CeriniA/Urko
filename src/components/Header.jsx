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
            <Nav.Link href="#sobre-urko" onClick={() => setExpanded(false)}>Sobre Urko</Nav.Link>
            <NavDropdown title="Recursos" id="recursos-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#recursos-gratuitos" onClick={() => setExpanded(false)}>Recursos gratuitos</NavDropdown.Item>
              <NavDropdown.Item href="#recursos-libros" onClick={() => setExpanded(false)}>Libros</NavDropdown.Item>
              <NavDropdown.Item href="#programas" onClick={() => setExpanded(false)}>Programas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#preguntas" onClick={() => setExpanded(false)}>Preguntas Frecuentes</Nav.Link>
            <Nav.Link href="#contacto" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
