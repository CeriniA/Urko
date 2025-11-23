import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeSwitcher from './ThemeSwitcher';

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
          La Senda del Varón Presente
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="align-items-lg-center">
            <Nav.Link href="#recursos">Recursos gratuitos</Nav.Link>
            <Nav.Link href="#ofertas">Programas</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <ThemeSwitcher />
            <a
              className="btn btn-sm btn-outline-light ms-lg-3 mt-3 mt-lg-0"
              href="https://wa.me/549XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar por WhatsApp
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
