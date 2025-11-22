import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Hubo un error al enviar el mensaje.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Error de conexión. Por favor, intentá de nuevo.');
    }
  };

  return (
    <section id="contacto" className="py-5 contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="text-center text-light mb-4">
              <h2 className="section-title">Contacto</h2>
              <p className="section-subtitle">
                ¿Tenés dudas o querés más información? Escribinos y te respondemos a la brevedad.
              </p>
            </div>

            {status === 'success' && (
              <Alert variant="success" onClose={() => setStatus('idle')} dismissible>
                <strong>¡Mensaje enviado!</strong> Gracias por contactarnos. Te responderemos pronto.
              </Alert>
            )}

            {status === 'error' && (
              <Alert variant="danger" onClose={() => setStatus('idle')} dismissible>
                <strong>Error:</strong> {errorMessage}
              </Alert>
            )}

            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="text-light">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className="text-light">Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Contanos tu consulta..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                />
              </Form.Group>

              <div className="d-grid">
                <Button
                  variant="outline-light"
                  size="lg"
                  type="submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
