import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { scrollToElement } from '../utils/scrollHelpers';

const ComparacionProgramas = () => {
  const sectionRef = useRevealOnScroll();

  const features = [
    { name: 'Método completo paso a paso', fundamental: true, trimestral: true, acompanado: true, individual: true },
    { name: 'Protocolos prácticos', fundamental: true, trimestral: true, acompanado: true, individual: true },
    { name: 'Ejercicios progresivos', fundamental: true, trimestral: true, acompanado: true, individual: true },
    { name: 'Acceso de por vida', fundamental: true, trimestral: true, acompanado: true, individual: true },
    { name: 'Actualizaciones futuras', fundamental: true, trimestral: true, acompanado: true, individual: true },
    { name: 'Calendario de práctica definido', fundamental: false, trimestral: true, acompanado: true, individual: true },
    { name: 'Encuentros grupales en vivo', fundamental: false, trimestral: '6 encuentros', acompanado: 'Semanales', individual: false },
    { name: 'Videollamadas personalizadas', fundamental: false, trimestral: false, acompanado: 'Semanales', individual: '2 por mes' },
    { name: 'Seguimiento personalizado', fundamental: false, trimestral: false, acompanado: true, individual: true },
    { name: 'Correcciones y guía directa', fundamental: false, trimestral: false, acompanado: true, individual: true },
    { name: 'Contacto directo vía WhatsApp', fundamental: false, trimestral: false, acompanado: true, individual: true },
    { name: 'Trabajo específico según tu caso', fundamental: false, trimestral: false, acompanado: false, individual: true },
    { name: 'Precio (USD)', fundamental: '$247', trimestral: '$497', acompanado: '$750', individual: '$3000' },
  ];

  const renderCell = (value) => {
    if (value === true) return <span className="text-success">✓</span>;
    if (value === false) return <span className="text-muted">—</span>;
    return value;
  };

  const scrollToProgram = () => {
    scrollToElement('entrenamientos');
  };

  return (
    <section ref={sectionRef} className="comparacion-programas py-5" id="comparacion">
      <Container>
        <h2 className="section-title text-center mb-5">Comparación de Programas</h2>
        
        <div className="table-responsive">
          <Table striped bordered hover className="comparacion-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Programa Fundamental</th>
                <th className="table-recommended">Entrenamiento Trimestral</th>
                <th>Proceso Acompañado</th>
                <th>Individual 1-1</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx}>
                  <td className="fw-bold">{feature.name}</td>
                  <td className="text-center">{renderCell(feature.fundamental)}</td>
                  <td className="text-center table-recommended">{renderCell(feature.trimestral)}</td>
                  <td className="text-center">{renderCell(feature.acompanado)}</td>
                  <td className="text-center">{renderCell(feature.individual)}</td>
                </tr>
              ))}
              <tr className="tabla-compra-row">
                <td className="fw-bold"></td>
                <td className="text-center">
                  <Button 
                    variant="outline-light" 
                    size="sm" 
                    onClick={scrollToProgram}
                    className="btn-tabla-compra"
                  >
                    Comprar
                  </Button>
                </td>
                <td className="text-center table-recommended">
                  <Button 
                    variant="warning" 
                    size="sm" 
                    onClick={scrollToProgram}
                    className="btn-tabla-compra btn-tabla-compra-destacado"
                  >
                    Comprar Ahora
                  </Button>
                </td>
                <td className="text-center">
                  <Button 
                    variant="outline-light" 
                    size="sm" 
                    onClick={scrollToProgram}
                    className="btn-tabla-compra"
                  >
                    Comprar
                  </Button>
                </td>
                <td className="text-center">
                  <Button 
                    variant="outline-light" 
                    size="sm" 
                    onClick={scrollToProgram}
                    className="btn-tabla-compra"
                  >
                    Comprar
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
