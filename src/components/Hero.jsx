import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Hero = () => (
  <section className="hero" id="top">
    <Container className="d-flex flex-column align-items-start justify-content-center hero__content">
      <h1 className="hero__title">ESCUELA URKO</h1>
      <h2 className="hero__subtitle">
        Reconocimiento y Dominio del Poder Sexual Masculino
      </h2>
      <p className="hero__description">
        Un sistema con raíces en las enseñanzas del tantra y el tao, adaptado a la realidad del hombre actual, para reconocer y reconectar con la energía primordial, recuperar firmeza, sostener estabilidad y construir dominio a través de práctica concreta.
      </p>
      <p className="hero__description">
        No promuevo soluciones rápidas ni atajos artificiales.<br />
        El camino es orgánico, natural y exige compromiso.
      </p>
      <div className="d-flex flex-column flex-md-row gap-3">
        <Button
          size="lg"
          variant="primary"
          href="#escuela-urko"
        >
          Bienvenido a la Escuela Urko
        </Button>
      </div>
    </Container>
  </section>
);

export default Hero;
