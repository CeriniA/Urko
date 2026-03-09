import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const EsTuCamino = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section ref={sectionRef} className="es-tu-camino py-5" id="es-tu-camino">
      <Container>
        <h2 className="section-title text-center mb-5">¿Es este tu camino?</h2>
        <div className="es-tu-camino-content mx-auto" style={{ maxWidth: '900px' }}>
          <p className="lead text-center mb-5">
            Este proceso no es una formación teórica; es un entrenamiento de vida. Está diseñado para hombres que han decidido dejar de ignorar su realidad y están listos para reclamar su dominio.
          </p>

          <Row className="g-4 mb-5">
            <Col md={6}>
              <div className="camino-card camino-card--si h-100 p-4">
                <h3 className="mb-4 text-center">Este camino ES para vos si:</h3>
                <ul className="camino-list">
                  <li><strong>Buscás una transformación real:</strong> Estás atravesando pérdida de firmeza, inestabilidad o desconexión y te negás a una sexualidad mediocre.</li>
                  <li><strong>Querés profundidad:</strong> Entendés que la sexualidad no es solo rendimiento, sino presencia, estabilidad y poder interior.</li>
                  <li><strong>Sos un hombre de acción:</strong> Buscás fortalecer tu energía y elevar tu dominio, aunque no estés en una crisis profunda.</li>
                  <li><strong>Asumís el compromiso:</strong> Estás dispuesto a entrenar, sostener la disciplina y atravesar el proceso con responsabilidad.</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="camino-card camino-card--no h-100 p-4">
                <h3 className="mb-4 text-center">Este camino NO es para vos si:</h3>
                <p className="mb-3">
                  Este proceso no es para hombres que buscan una solución rápida sin asumir responsabilidad.
                </p>
                <ul className="camino-list">
                  <li>No es para quienes esperan que alguien más resuelva lo que ellos no están dispuestos a trabajar.</li>
                  <li>No es para quienes quieren resultados sin disciplina ni constancia.</li>
                  <li>No es para quienes prefieren anestesiar el síntoma en lugar de comprender el origen.</li>
                  <li>No es para curiosos que solo desean "probar" sin compromiso real.</li>
                </ul>
              </div>
            </Col>
          </Row>

          <div className="text-center mt-5 pt-4 border-top">
            <p className="lead fw-bold text-warning mb-3">
              ⚠️ Advertencia
            </p>
            <p className="fs-5 fst-italic">
              Este espacio exige presencia, práctica y decisión. Si no estás dispuesto a sostener el proceso, este no es tu lugar.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EsTuCamino;
