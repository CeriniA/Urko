import Container from 'react-bootstrap/Container';

const Footer = () => (
  <footer className="py-4 text-center text-light footer">
    <Container>
      <p className="mb-1">© {new Date().getFullYear()} Escuela Urko – La Senda del Varón Presente.</p>
      <small>
        Energía sexual es energía vital. Transformá tu vida desde la presencia, el cuerpo y el espíritu.
      </small>
    </Container>
  </footer>
);

export default Footer;
