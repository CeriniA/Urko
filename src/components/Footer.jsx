import Container from 'react-bootstrap/Container';

const Footer = () => (
  <footer className="py-4 text-center text-light footer">
    <Container>
      <p className="mb-1">© {new Date().getFullYear()} Escuela Urko – La Senda del Varón Presente.</p>
      <small>
        Energía sexual es energía vital. Transformá tu vida desde la presencia, el cuerpo y el espíritu.
      </small>
      <div className="recaptcha-notice mt-3">
        Este sitio está protegido por reCAPTCHA y se aplican la{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Política de Privacidad
        </a>{' '}
        y los{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
          Términos de Servicio
        </a>{' '}
        de Google.
      </div>
    </Container>
  </footer>
);

export default Footer;
