import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import perfilImg from '../assets/images/Nuevafotoperfil.jpeg';

const SobreMi = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section ref={sectionRef} className="sobre-mi py-5" id="sobre-mi">
      <Container>
        <h2 className="section-title text-center mb-5">Sobre mí</h2>
        <Row className="align-items-center g-4">
          <Col md={6}>
            <div className="sobre-mi-content">
              <p className="lead mb-4">
                <strong>Soy Lucas Flesia.</strong>
              </p>
              <p className="mb-4">
                No llegué a este camino desde la teoría, sino desde la necesidad. Tras enfrentar la desconexión y la pérdida de firmeza, comprendí que la potencia masculina no depende de soluciones rápidas, sino de conciencia y disciplina.
              </p>
              <p className="mb-4">
                Luego de 6 años de estudio y práctica en gestión de energía sexual y fisiología, transformé mi restauración personal en un método real.
              </p>
              <p className="fw-bold">
                No enseño lo que leí: enseño lo que he recorrido.
              </p>
              <div className="mt-4">
                <Link to="/biografia">
                  <Button variant="primary">
                    Más sobre mí
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img
              src={perfilImg}
              alt="Lucas Flesia - Fundador de Escuela Urko"
              className="sobre-mi-image img-fluid rounded"
              style={{ maxWidth: '400px' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SobreMi;
