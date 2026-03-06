import Container from 'react-bootstrap/Container';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const SobreUrko = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section ref={sectionRef} className="sobre-urko py-5" id="sobre-urko">
      <Container>
        <h2 className="section-title text-center mb-5">Sobre Urko</h2>
        <div className="sobre-urko-content mx-auto" style={{ maxWidth: '900px' }}>
          <p className="lead text-center mb-4">
            No llegué a este camino desde la teoría, sino desde la necesidad. Tras enfrentar la desconexión y la pérdida de firmeza, comprendí que la potencia masculina no depende de soluciones rápidas, sino de conciencia y disciplina. Luego de 6 años de estudio y práctica en gestión de energía sexual y fisiología, transformé mi restauración personal en un método real. No enseño lo que leí: enseño lo que he recorrido.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SobreUrko;
