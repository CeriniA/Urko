import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
    >
      <Container>
        <Navbar.Brand href="#top" className="fw-bold text-uppercase">
          Urko Tántrico
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="align-items-lg-center">
            <Nav.Link href="#sobre-urko">Sobre Urko</Nav.Link>
            <NavDropdown title="Recursos" id="recursos-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#recursos-gratuitos">Gratuitos</NavDropdown.Item>
              <NavDropdown.Item href="#recursos-libros">Libros</NavDropdown.Item>
              <NavDropdown.Item href="#programas">Programas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#preguntas">Preguntas Frecuentes</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
