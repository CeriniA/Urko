import Container from 'react-bootstrap/Container';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const EscuelaUrko = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section ref={sectionRef} className="escuela-urko py-5" id="escuela-urko">
      <Container>
        <h2 className="section-title text-center mb-5">Escuela Urko</h2>
        <div className="escuela-urko-content mx-auto" style={{ maxWidth: '900px' }}>
          <p className="lead text-center mb-4">
            Un espacio diseñado para el hombre que busca recuperar su estabilidad y dominio. Aquí no encontrarás atajos ni soluciones rápidas. El trabajo está basado en:
          </p>
          <ul className="escuela-urko-list mb-4">
            <li><strong>Gestión de la energía:</strong> Técnicas ancestrales aplicadas al hombre moderno.</li>
            <li><strong>Regulación biológica:</strong> Control del sistema nervioso y de la respiración.</li>
            <li><strong>Fortalecimiento físico:</strong> Entrenamiento del centro y control eyaculatorio.</li>
          </ul>
          <p className="text-center lead fst-italic">
            "Es momento de asumir tu masculinidad con responsabilidad. Te acompaño en el proceso."
          </p>
        </div>
      </Container>
    </section>
  );
};

export default EscuelaUrko;
