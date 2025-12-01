import Container from 'react-bootstrap/Container';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const WhatIsTantra = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section ref={sectionRef} className="what-is-tantra py-5" id="que-es-tantra">
      <Container>
        <h2 className="text-center mb-4">¿Qué es el Tantra?</h2>
        <div className="tantra-description text-center mx-auto" style={{ maxWidth: '800px' }}>
          <p className="lead">
            Tantra es la armonía entre el hombre y la mujer durante el maithuna. Pero también es la armonía entre 
            el espíritu y la materia, entre la razón y la emoción, entre el Yin y el Yang, entre la noche y el día, 
            entre lo humano y lo divino, entre tú y el universo.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default WhatIsTantra;
