import Container from 'react-bootstrap/Container';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const WhatIsTantra = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section ref={sectionRef} className="what-is-tantra py-5" id="que-es-tantra">
      <Container>
        <h2 className="section-title text-center mb-4">¿Qué es el Tantra para Varones?</h2>
        <div className="tantra-description text-center mx-auto" style={{ maxWidth: '800px' }}>
          <p className="lead">
            El tantra para varones es un camino de desarrollo integral del hombre moderno. Es la armonía entre la sexualidad consciente 
            y la presencia masculina, entre la fuerza y la sensibilidad, entre el liderazgo y la vulnerabilidad. 
            Una escuela donde cada varón descubre su verdadero potencial masculino y transforma su vida desde la sexualidad consciente y la masculinidad sana.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default WhatIsTantra;
