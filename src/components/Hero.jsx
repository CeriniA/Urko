import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Hero = () => (
  <section className="hero" id="top">
    <Container className="d-flex flex-column align-items-start justify-content-center hero__content">
      <span className="hero__eyebrow">Buen día, Varón.</span>
      <h1 className="hero__title">La Senda del Varón Presente</h1>
      <p className="hero__subtitle">
        Transformá tu energía sexual en presencia, poder vital y resultados reales. Escuela Urko para hombres
        comprometidos con su despertar.
      </p>
      <div className="d-flex flex-column flex-md-row gap-3">
        <Button
          size="lg"
          variant="primary"
          href="https://drive.google.com/drive/folders/1-z_BmV_TJ2WhzjCsQVxhD-DZFvRrbeEh?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrenamiento gratuito
        </Button>
        <Button
          size="lg"
          variant="outline-light"
          href="#ofertas"
        >
          Ingresar a la Escuela Urko
        </Button>
      </div>
    </Container>
  </section>
);

export default Hero;
