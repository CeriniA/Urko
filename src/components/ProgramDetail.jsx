import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import products from '../data/products';

const ProgramDetail = ({ programId, show, onHide }) => {
  const program = products.find(p => p.id === programId);
  
  if (!program) return null;

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      size="lg" 
      centered 
      scrollable
      className="program-detail-modal"
      contentClassName="bg-dark text-light"
    >
      <Modal.Header closeButton className="border-secondary">
        <Modal.Title className="w-100">
          <div className="text-center">
            {program.recommended && (
              <span className="badge bg-warning text-dark me-2">⭐ Recomendado</span>
            )}
            {program.badge && (
              <span className="badge bg-info text-dark">{program.badge}</span>
            )}
            <h3 className="mt-2 mb-0">{program.title}</h3>
            <p className="fs-4 text-primary mt-2 mb-0">
              <strong>${program.price} {program.currency}</strong>
            </p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4 py-4">
        <div className="program-detail-content">
          <h5 className="mb-3 text-center">
            {program.category === 'books' ? 'Sobre el Libro' : 'Detalles del Programa'}
          </h5>
          
          <div 
            className="program-description" 
            style={{ 
              whiteSpace: 'pre-line', 
              lineHeight: '1.8',
              fontSize: '1rem'
            }}
          >
            {program.description}
          </div>

          <hr className="my-4 border-secondary" />

          <div className="text-center">
            <p className="text-muted mb-2">
              <small>Métodos de pago disponibles en la tarjeta principal</small>
            </p>
            <p className="text-muted">
              <small>También aceptamos: Western Union · Transferencia Bancaria</small>
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-secondary justify-content-center">
        <Button variant="outline-light" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProgramDetail;
