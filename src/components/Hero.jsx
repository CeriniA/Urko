import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Hero = () => (
  <section className="hero" id="top">
    <Container className="d-flex flex-column align-items-start justify-content-center hero__content">
      <span className="hero__eyebrow">¡Bienvenido!</span>
      <h1 className="hero__title">Escuela Urko - Sexualidad Sana, Masculinidad Consciente</h1>
      <p className="hero__subtitle">
        Vivir una vida sexual plena es vivir una vida plena
      </p>
      <p className="hero__description">
        Transformá tu vida a través de tu sexualidad. Coaching especializado para varones que buscan desarrollarse en la vida y en la cama con presencia, vigor y vitalidad, eso es crecimiento auténtico.
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
