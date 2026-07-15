import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { scrollToElement } from '../utils/scrollHelpers';

const ComparacionProgramas = () => {
  const sectionRef = useRevealOnScroll();

  const features = [
    { name: 'Método Urko completo', fundamental: true, anual: true, trimestral: true, privado: true },
    { name: 'Biblioteca Urko', fundamental: true, anual: 'Completa', trimestral: false, privado: false },
    { name: 'Comunidad privada', fundamental: 'Bonus', anual: true, trimestral: true, privado: false },
    { name: 'Encuentros grupales en vivo', fundamental: '2 (bonus)', anual: '24 al año (2/mes)', trimestral: '6 (en 90 días)', privado: false },
    { name: 'Sesiones 1-1 privadas', fundamental: false, anual: '2 (inicial + estratégica)', trimestral: '1 (bonus)', privado: true },
    { name: 'Seguimiento directo', fundamental: false, anual: 'Anual', trimestral: 'Grupal', privado: 'Directo' },
    { name: 'Calendario de práctica', fundamental: false, anual: false, trimestral: true, privado: 'Plan adaptado' },
    { name: 'Trabajo completamente personalizado', fundamental: false, anual: false, trimestral: false, privado: true },
    { name: 'Encuentros presenciales', fundamental: false, anual: false, trimestral: false, privado: 'Según disponibilidad' },
    { name: 'Aplicación / evaluación previa', fundamental: false, anual: false, trimestral: false, privado: 'Requerida' },
  ];

  const renderCell = (value) => {
    if (value === true) return <span className="text-success">✓</span>;
    if (value === false) return <span className="text-muted">—</span>;
    return value;
  };

  const scrollToProgram = () => {
    scrollToElement('entrenamientos');
  };

  const scrollToSpecificProgram = (programId) => {
    scrollToElement('entrenamientos');
    setTimeout(() => {
      const programCard = document.querySelector(`[data-program-id="${programId}"]`);
      if (programCard) {
        const navbarHeight = 80;
        const cardTop = programCard.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
        window.scrollTo({ top: cardTop, behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <section ref={sectionRef} className="comparacion-programas py-5" id="comparacion">
      <Container>
        <h2 className="section-title text-center mb-4">Comparación de programas</h2>

        <div className="table-responsive">
          <Table striped bordered hover className="comparacion-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Programa Fundamental</th>
                <th>Escuela Urko Anual</th>
                <th className="table-recommended">Intensivo Trimestral</th>
                <th>Acompañamiento Privado</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx}>
                  <td className="fw-bold">{feature.name}</td>
                  <td className="text-center">{renderCell(feature.fundamental)}</td>
                  <td className="text-center">{renderCell(feature.anual)}</td>
                  <td className="text-center table-recommended">{renderCell(feature.trimestral)}</td>
                  <td className="text-center">{renderCell(feature.privado)}</td>
                </tr>
              ))}
              <tr className="tabla-compra-row">
                <td className="fw-bold"></td>
                <td className="text-center">
                  <Button variant="outline-light" size="sm" onClick={scrollToProgram} className="btn-tabla-compra">
                    Comprar
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="outline-light" size="sm" onClick={() => scrollToSpecificProgram('escuela-urko-anual')} className="btn-tabla-compra">
                    Comprar
                  </Button>
                </td>
                <td className="text-center table-recommended">
                  <Button variant="warning" size="sm" onClick={() => scrollToSpecificProgram('intensivo-trimestral')} className="btn-tabla-compra btn-tabla-compra-destacado">
                    Comprar Ahora
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="outline-light" size="sm" onClick={() => scrollToSpecificProgram('acompanamiento-individual')} className="btn-tabla-compra">
                    Aplicar
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default ComparacionProgramas;
