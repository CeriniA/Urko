import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const NewsletterSection = () => {
  const sectionRef = useRevealOnScroll();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    website: '', // Honeypot field
    consent: false
  });
  const [newsletterStatus, setNewsletterStatus] = useState('idle');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const handleConfirm = async () => {
    setShowConfirmModal(false);
    setNewsletterStatus('submitting');

    // Anti-spam: Si el honeypot tiene contenido, es probable que sea un bot
    if (formData.website) {
      console.log('Bot detected - honeypot filled');
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 5000);
      return;
    }

    try {
      const formUrl = import.meta.env.VITE_NEWSLETTER_FORM_URL;
      const nameField = import.meta.env.VITE_NEWSLETTER_NAME_FIELD;
      const emailField = import.meta.env.VITE_NEWSLETTER_EMAIL_FIELD;
      const consentField = import.meta.env.VITE_NEWSLETTER_CONSENT_FIELD;
      const consentSentinel = import.meta.env.VITE_NEWSLETTER_CONSENT_SENTINEL;

      if (!formUrl || !nameField || !emailField || !consentField || !consentSentinel) {
        throw new Error('Newsletter form configuration missing');
      }

      const formDataToSend = new FormData();
      formDataToSend.append(nameField, formData.nombre);
      formDataToSend.append(emailField, formData.email);
      
      if (formData.consent) {
        formDataToSend.append(consentField, 'Si, acepto.');
        formDataToSend.append(consentSentinel, '');
      }
      
      formDataToSend.append('fvv', '1');
      formDataToSend.append('pageHistory', '0');

      await fetch(formUrl, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });

      setNewsletterStatus('success');
      setFormData({ nombre: '', email: '', website: '', consent: false });

      setTimeout(() => {
        setNewsletterStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Newsletter submission error:', error);
      setNewsletterStatus('error');
      
      setTimeout(() => {
        setNewsletterStatus('idle');
      }, 5000);
    }
  };

  return (
    <section ref={sectionRef} className="newsletter-section py-5" id="newsletter">
      <Container>
        <div className="newsletter-box mx-auto p-5" style={{ maxWidth: '700px' }}>
          <h2 className="section-title text-center mb-3">SUMATE AL NEWSLETTER</h2>
          <h3 className="text-center mb-4">"ESCRITOS PARA EL VARÓN PRESENTE"</h3>
          <p className="text-center lead mb-4">
            Recibí nuevo contenido gratuito todos los meses
          </p>
          <p className="text-center mb-4">Déjanos tu contacto</p>

          {newsletterStatus === 'success' && (
            <Alert variant="success" className="mb-3">
              <strong>¡Gracias!</strong> Te has suscrito correctamente. Pronto recibirás contenido exclusivo.
            </Alert>
          )}

          {newsletterStatus === 'error' && (
            <Alert variant="danger" className="mb-3">
              <strong>Error:</strong> Hubo un problema al enviar el formulario. Intentá de nuevo.
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="newsletter-form">
            {/* Honeypot field */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="mb-3">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="form-control form-control-lg"
                placeholder="NOMBRE"
                required
                disabled={newsletterStatus === 'submitting'}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control form-control-lg"
                placeholder="MAIL"
                required
                disabled={newsletterStatus === 'submitting'}
              />
            </div>

            <div className="mb-4 d-flex align-items-start">
              <input
                type="checkbox"
                id="newsletter-consent"
                name="consent"
                checked={formData.consent}
                onChange={(e) =>
                  setFormData(prev => ({
                    ...prev,
                    consent: e.target.checked
                  }))
                }
                required
                disabled={newsletterStatus === 'submitting'}
                className="me-2 mt-1"
              />
              <label htmlFor="newsletter-consent" className="mb-0">
                Acepto recibir información y novedades por email.
              </label>
            </div>

            <Button 
              variant="primary" 
              type="submit"
              size="lg"
              className="w-100"
              disabled={newsletterStatus === 'submitting'}
            >
              {newsletterStatus === 'submitting' ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        </div>
      </Container>

      {/* Modal de confirmación */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Nombre:</strong> {formData.nombre}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p className="mb-0">¿Los datos son correctos?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Sí, es correcto
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default NewsletterSection;
