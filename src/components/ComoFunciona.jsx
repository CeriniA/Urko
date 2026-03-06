import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { scrollToElement } from '../utils/scrollHelpers';

const ComoFunciona = () => {
  const sectionRef = useRevealOnScroll();
  
  const handleCardClick = (e) => {
    e.preventDefault();
    scrollToElement('entrenamientos');
  };

  return (
    <section ref={sectionRef} className="como-funciona py-5" id="como-funciona">
      <Container>
        <h2 className="section-title text-center mb-5">¿Cómo funciona el Método Urko?</h2>
        <div className="como-funciona-content mx-auto" style={{ maxWidth: '900px' }}>
          <p className="lead text-center mb-4">
            Este no es contenido para consumir, es un proceso para atravesar.<br />
            Aquí no acumulamos información, entrenamos la capacidad de dominio.
          </p>
          <p className="text-center mb-5">
            Para reordenar, fortalecer y estabilizar tu sistema, el compromiso mínimo recomendado es de tres meses. Es el tiempo necesario para que la biología integre el cambio.
          </p>

          <h3 className="text-center mb-4">Elige tu forma de transitar el camino:</h3>
          
          <Row className="g-4 mb-5">
            <Col md={6}>
              <a href="#entrenamientos" onClick={handleCardClick} className="metodo-card-link">
                <div className="metodo-card metodo-card--clickable h-100 p-4">
                  <h4 className="mb-3 text-white">1. Trabajo autónomo</h4>
                  <p className="mb-3">
                    Aplicás el método a tu propio ritmo, con acceso al material estructurado
                  </p>
                  <p className="metodo-card-ideal">
                    <strong>Ideal para:</strong> Hombres con alta autodisciplina y constancia.
                  </p>
                  <p className="mt-3 mb-0 text-end">
                    <small className="text-warning fw-bold">Ver Programa Fundamental →</small>
                  </p>
                </div>
              </a>
            </Col>
            <Col md={6}>
              <a href="#entrenamientos" onClick={handleCardClick} className="metodo-card-link">
                <div className="metodo-card metodo-card--clickable h-100 p-4">
                  <h4 className="mb-3 text-white">2. Proceso trimestral acompañado</h4>
                  <p className="mb-3">
                    Tres meses de guía directa, seguimiento y encuentros grupales de integración.
                  </p>
                  <p className="metodo-card-ideal">
                    <strong>Ideal para:</strong> Quienes buscan mayor profundidad, apoyo y responsabilidad grupal.
                  </p>
                  <p className="mt-3 mb-0 text-end">
                    <small className="text-warning fw-bold">Ver Proceso Acompañado →</small>
                  </p>
                </div>
              </a>
            </Col>
          </Row>

          <p className="text-center fst-italic">
            Al finalizar el primer trimestre, podés elegir extender el acompañamiento para profundizar en niveles avanzados. No es obligatorio seguir, pero sí es imprescindible comprometerse mientras estés dentro.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ComoFunciona;
