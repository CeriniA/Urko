import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const EscuelaUrko = () => {
  const sectionRef = useRevealOnScroll();

  const pilares = [
    {
      icon: '⚛',
      title: 'Gestión de la energía',
      description: 'Técnicas ancestrales aplicadas al hombre moderno.'
    },
    {
      icon: '☯',
      title: 'Regulación biológica',
      description: 'Control del sistema nervioso y de la respiración.'
    },
    {
      icon: '⬡',
      title: 'Fortalecimiento físico',
      description: 'Entrenamiento del centro y control eyaculatorio.'
    }
  ];

  return (
    <section ref={sectionRef} className="escuela-urko py-5" id="escuela-urko">
      <Container>
        <h2 className="section-title text-center mb-5">Escuela Urko</h2>
        <div className="escuela-urko-content mx-auto" style={{ maxWidth: '1100px' }}>
          <p className="lead text-center mb-5">
            Un espacio diseñado para el hombre que busca recuperar su estabilidad y dominio. Aquí no encontrarás atajos ni soluciones rápidas. El trabajo está basado en:
          </p>
          
          <Row className="g-4 mb-5">
            {pilares.map((pilar, index) => (
              <Col key={index} md={4}>
                <div className="pilar-card text-center h-100 p-4">
                  <div className="pilar-icon mb-3">
                    {pilar.icon}
                  </div>
                  <h4 className="pilar-title mb-3">{pilar.title}</h4>
                  <p className="pilar-description mb-0">{pilar.description}</p>
                </div>
              </Col>
            ))}
          </Row>

          <p className="text-center lead fst-italic">
            "Es momento de asumir tu masculinidad con responsabilidad. Te acompaño en el proceso."
          </p>
        </div>
      </Container>
    </section>
  );
};

export default EscuelaUrko;
