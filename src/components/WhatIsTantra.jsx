import Container from 'react-bootstrap/Container';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const WhatIsTantra = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section ref={sectionRef} className="what-is-tantra py-5" id="que-es-tantra">
      <Container>
        <h2 className="section-title text-center mb-4">Origen de la Doctrina Tántrico Taoísta</h2>
        <div className="tantra-description text-center mx-auto" style={{ maxWidth: '900px' }}>
          <p className="lead mb-4">
            <strong>De linaje Litvinoff</strong>
          </p>
          <p className="mb-4">
            <strong>TAO ES CAMINO, ES SANACIÓN. TANTRA ES CONEXIÓN.</strong>
          </p>
          <p className="lead">
            URKO TÁNTRICO es integridad, es un camino de reconexión y desarrollo del hombre nuevo. 
            Es armonía entre la sexualidad consciente y la presencia masculina, entre la fuerza y la sensibilidad, 
            entre el liderazgo y la vulnerabilidad. Una escuela donde cada varón descubre su verdadero potencial 
            y transforma su vida desde la sexualidad sana y la masculinidad consciente.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default WhatIsTantra;
