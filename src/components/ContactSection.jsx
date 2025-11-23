import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const CONTACT_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    Nombre: '',
    Email: '',
    Edad: '',
    Residencia: '',
    Motivo: '',
    Horarios: '',
    Compromiso: false,
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Obtener token de reCAPTCHA v3
      const recaptchaToken = await window.grecaptcha.execute('6LccbxUsAAAAAErNnrc9XD8wb4ga74P4QNI-o7RH', {
        action: 'submit',
      });

      // Incluir token en el formulario
      const dataWithRecaptcha = {
        ...formData,
        'g-recaptcha-response': recaptchaToken,
      };

      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(dataWithRecaptcha),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          Nombre: '',
          Email: '',
          Edad: '',
          Residencia: '',
          Motivo: '',
          Horarios: '',
          Compromiso: false,
        });
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Hubo un error al enviar el formulario.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Error de conexión. Por favor, intentá de nuevo.');
    }
  };

  return (
    <section id="contacto" className="contact-section py-5 text-light">
      <Container>
        <Row className="g-5 align-items-center">
          <Col md={6}>
            <h2 className="section-title mb-3">¿Listo para trabajar con Urko?</h2>
            <p className="section-subtitle">
              Completá el formulario o escribime directo por WhatsApp con tu nombre, edad, ciudad, motivo y horarios
              disponibles para coordinar la primera llamada.
            </p>
            <div className="d-flex gap-3 flex-wrap mt-4">
              <a
                className="btn btn-outline-light btn-lg"
                href="https://wa.me/549XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp directo
              </a>
              <a
                className="btn btn-outline-light"
                href="https://www.instagram.com/urkotantric"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="btn btn-outline-light"
                href="https://www.tiktok.com/@urkotantric"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
              <a
                className="btn btn-outline-light"
                href="https://youtube.com/@lucasflesia"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </Col>
          <Col md={6}>
            {status === 'success' && (
              <Alert variant="success" onClose={() => setStatus('idle')} dismissible className="mb-3">
                <strong>¡Solicitud enviada!</strong> Gracias por tu interés. Te contactaremos pronto para coordinar la
                primera llamada.
              </Alert>
            )}

            {status === 'error' && (
              <Alert variant="danger" onClose={() => setStatus('idle')} dismissible className="mb-3">
                <strong>Error:</strong> {errorMessage}
              </Alert>
            )}

            <Form className="glass-card p-4 rounded-4 shadow-lg" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre completo *</Form.Label>
                <Form.Control
                  type="text"
                  name="Nombre"
                  value={formData.Nombre}
                  onChange={handleChange}
                  required
                  placeholder="Nombre y apellido"
                  disabled={status === 'submitting'}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  disabled={status === 'submitting'}
                />
              </Form.Group>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="edad">
                    <Form.Label>Edad *</Form.Label>
                    <Form.Control
                      type="number"
                      name="Edad"
                      value={formData.Edad}
                      onChange={handleChange}
                      min="18"
                      required
                      placeholder="33"
                      disabled={status === 'submitting'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="ciudad">
                    <Form.Label>Ciudad / País *</Form.Label>
                    <Form.Control
                      type="text"
                      name="Residencia"
                      value={formData.Residencia}
                      onChange={handleChange}
                      required
                      placeholder="Buenos Aires, Argentina"
                      disabled={status === 'submitting'}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="motivo">
                <Form.Label>¿Por qué querés trabajar con Urko? *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="Motivo"
                  value={formData.Motivo}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="horarios">
                <Form.Label>Horarios disponibles *</Form.Label>
                <Form.Control
                  type="text"
                  name="Horarios"
                  value={formData.Horarios}
                  onChange={handleChange}
                  required
                  placeholder="Lunes a viernes 18-21 hs"
                  disabled={status === 'submitting'}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="compromiso">
                <Form.Check
                  type="checkbox"
                  name="Compromiso"
                  checked={formData.Compromiso}
                  onChange={handleChange}
                  label="Confirmo mi compromiso para trabajar bajo la guía de Urko"
                  required
                  disabled={status === 'submitting'}
                />
              </Form.Group>
              <Button type="submit" variant="primary" size="lg" className="w-100" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Enviando...' : 'Enviar solicitud'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
