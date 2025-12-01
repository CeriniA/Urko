import Container from 'react-bootstrap/Container';
import products from '../data/products';
import OffersSection from './OffersSection';

const ProgramsSection = () => {
  return (
    <section className="programs-section" id="programas">
      <Container className="text-center mb-5">
        <h2 className="mb-4">Programas</h2>
        <p className="lead mb-3">No es solo un entrenamiento.</p>
        <p className="lead mb-3">Es una transformación real desde el Ser.</p>
        <p className="lead">Es Alinearte con tu Ser</p>
      </Container>
      
      {/* Reutilizamos OffersSection que ya tiene toda la lógica de pagos */}
      <OffersSection />
    </section>
  );
};

export default ProgramsSection;
