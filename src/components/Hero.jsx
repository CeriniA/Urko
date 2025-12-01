import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Hero = () => (
  <section className="hero" id="top">
    <Container className="d-flex flex-column align-items-start justify-content-center hero__content">
      <span className="hero__eyebrow">¡Bienvenido!</span>
      <h1 className="hero__title">Escuela de Tantra para Varones</h1>
      <p className="hero__subtitle">
        Desarrollá tu sexualidad consciente y masculinidad sana
      </p>
      <p className="hero__description">
        Transformá tu vida como hombre a través del tantra masculino. Coaching especializado para varones que buscan desarrollar su presencia, sexualidad consciente y crecimiento auténtico.
      </p>
      <div className="d-flex flex-column flex-md-row gap-3">
        <Button
          size="lg"
          variant="primary"
          href="#recursos"
        >
          Activar mi fuego
        </Button>
      </div>
    </Container>
  </section>
);

export default Hero;
