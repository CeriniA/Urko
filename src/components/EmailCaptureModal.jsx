import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EmailCaptureModal = ({ show, onHide, onConfirm, productTitle }) => {
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    onConfirm(email);
  };

  const handleClose = () => {
    setEmail('');
    setValidated(false);
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar compra</Modal.Title>
      </Modal.Header>
      
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          <p className="mb-3">
            <strong>Producto:</strong> {productTitle}
          </p>
          
          <Form.Group className="mb-3">
            <Form.Label>
              Email para acceso al contenido <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresá un email válido.
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              A este email te enviaremos el acceso a Google Drive con el contenido.
            </Form.Text>
          </Form.Group>

          <div className="alert alert-info mb-0">
            <small>
              <strong>Importante:</strong> Asegurate de ingresar correctamente tu email. 
              El acceso al contenido se enviará a esta dirección.
            </small>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Continuar al pago
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EmailCaptureModal;
