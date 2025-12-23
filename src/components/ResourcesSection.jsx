import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import products from '../data/products';
import ProgramDetail from './ProgramDetail';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import libro1Img from '../assets/images/libro 1.png';
import libro2Img from '../assets/images/Libro 2.png';

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID;

const loadPayPalScript = () => {
  const src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`;
  let script = document.querySelector(`script[src="${src}"]`);

  if (!script) {
    script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }

  return script;
};

const ResourcesSection = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState('idle');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    website: '', // Honeypot field - should remain empty
    consent: false
  });
  
  const freeResources = products.filter(p => p.category === 'free');
  const books = products.filter(p => p.category === 'books');
  const programs = products.filter(p => p.category === 'programs');

  const { ref: sectionRef, isVisible } = useRevealOnScroll();

  // Cargar botones de PayPal para libros y programas (siempre visibles)
  useEffect(() => {
    if (!PAYPAL_CLIENT_ID) return;

    const script = loadPayPalScript();

    const renderButtons = () => {
      const paidProducts = [...books, ...programs];
      
      paidProducts.forEach((product) => {
        if (!product.paypalScriptId) return;
        const container = document.getElementById(product.paypalScriptId);
        if (!container || container.children.length > 0) return;

        window.paypal.Buttons({
          style: { 
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
            height: 40,
            tagline: false
          },
          createOrder: (_, actions) =>
            actions.order.create({
              purchase_units: [
                {
                  amount: { value: product.price.toFixed(2) },
                  description: product.title,
                  custom_id: product.id,
                },
              ],
            }),
          onApprove: async (_, actions) => {
            const order = await actions.order.capture();
            alert(`Pago exitoso! ID de orden: ${order.id}`);
          },
          onError: (err) => {
            console.error('Error en PayPal:', err);
            alert('Hubo un error procesando el pago. Por favor, intentá de nuevo.');
          },
        }).render(`#${product.paypalScriptId}`);
      });
    };

    if (window.paypal) {
      renderButtons();
    } else {
      script.addEventListener('load', renderButtons);
    }

    return () => {
      script.removeEventListener('load', renderButtons);
    };
  }, [books, programs]);

  const handleShowProgram = (programId) => {
    setSelectedProgram(programId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProgram(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterStatus('submitting');

    // Anti-spam: Si el honeypot tiene contenido, es probable que sea un bot
    if (formData.website) {
      console.log('Bot detected - honeypot filled');
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 5000);
      return;
    }

    try {
      // Usar variables de entorno para mayor seguridad
      const formUrl = import.meta.env.VITE_NEWSLETTER_FORM_URL;
      const nameField = import.meta.env.VITE_NEWSLETTER_NAME_FIELD;
      const emailField = import.meta.env.VITE_NEWSLETTER_EMAIL_FIELD;
      const consentField = import.meta.env.VITE_NEWSLETTER_CONSENT_FIELD;
      const consentSentinel = import.meta.env.VITE_NEWSLETTER_CONSENT_SENTINEL;

      if (!formUrl || !nameField || !emailField || !consentField || !consentSentinel) {
        throw new Error('Newsletter form configuration missing');
      }

      // Crear FormData para envío silencioso a Google Forms
      const formDataToSend = new FormData();
      formDataToSend.append(nameField, formData.nombre);
      formDataToSend.append(emailField, formData.email);
      
      // Checkbox: Google Forms requiere DOS campos
      if (formData.consent) {
        formDataToSend.append(consentField, 'Si, acepto.');
        formDataToSend.append(consentSentinel, '');
      }
      
      // Campos del sistema que Google Forms espera
      formDataToSend.append('fvv', '1');
      formDataToSend.append('pageHistory', '0');

      // Debug: Ver qué se está enviando (puedes comentar esto después)
      console.log('📧 Enviando a Google Forms:');
      console.log('URL:', formUrl);
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`  ${key}: ${value}`);
      }

      // Enviar a Google Forms sin redirección
      await fetch(formUrl, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // Importante para evitar errores CORS
      });

      // Mostrar mensaje de éxito
      setNewsletterStatus('success');
      setFormData({ nombre: '', email: '', website: '', consent: false });

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        setNewsletterStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Newsletter submission error:', error);
      setNewsletterStatus('error');
      
      // Ocultar mensaje de error después de 5 segundos
      setTimeout(() => {
        setNewsletterStatus('idle');
      }, 5000);
    }
  };

  return (
    <section ref={sectionRef} className="resources-section py-5" id="recursos">
      <Container>
        {/* RECURSOS GRATUITOS */}
        <div className="mb-5" id="recursos-gratuitos">
          <h2 className="section-title text-center mb-4">Recursos Gratuitos método Urko. cura/control/conexión</h2>
          <p className="text-center lead mb-4">
            Comenzá a desarrollar tu masculinidad y sexualidad consciente con estos recursos gratuitos de la escuela urko. Entrenamientos especializados para varones y guía para parejas que buscan crecimiento auténtico:
          </p>
            
          <Row className="g-4">
            {freeResources.map((resource) => (
              <Col key={resource.id} md={6}>
                <div className="free-resource-card h-100">
                  <div className="free-resource-header">
                    <h4 className="free-resource-title">{resource.title}</h4>
                  </div>
                  <div className="free-resource-body">
                    <p className="free-resource-description">{resource.description}</p>
                    {resource.driveLinks && resource.driveLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="free-resource-button"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
            
          {/* Mini formulario para nuevo contenido */}
          <div className="mt-5 text-center">
            <div className="newsletter-box mx-auto p-4" style={{ maxWidth: '600px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
              <h4 className="mb-3">Recibí nuevo contenido gratuito</h4>
              <p className="mb-3">Dejanos tu contacto</p>
              
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

              <form
                className="d-flex flex-column gap-3"
                onSubmit={handleNewsletterSubmit}
              >
                {/* Honeypot field - invisible to users, but bots might fill it */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                <div className="d-flex flex-column flex-md-row gap-3">
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Nombre"
                    required
                    disabled={newsletterStatus === 'submitting'}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Email"
                    required
                    disabled={newsletterStatus === 'submitting'}
                  />
                </div>
                <div className="d-flex align-items-center text-start">
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
                    className="me-2"
                  />
                  <label htmlFor="newsletter-consent" className="mb-0 small">
                    Acepto recibir información y novedades por email.
                  </label>
                </div>
                <Button 
                  variant="primary" 
                  type="submit"
                  className="w-100"
                  disabled={newsletterStatus === 'submitting'}
                >
                  {newsletterStatus === 'submitting' ? 'Enviando...' : 'Enviar'}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* LIBROS */}
        <div className="mb-5" id="recursos-libros">
          <h2 className="section-title text-center mb-4">Libros</h2>
          <Row className="g-4 justify-content-center">
            {books.map((book) => (
              <Col key={book.id} md={6} lg={4}>
                <div className="free-resource-card free-resource-card--book h-100 d-flex flex-column">
                  <div className="free-resource-header">
                    {book.id === 'book-entrenamiento-urko' && (
                      <img src={libro1Img} alt={book.title} className="book-cover-img " />
                    )}
                    {book.id === 'book-si-yo-pude' && (
                      <img src={libro2Img} alt={book.title} className="book-cover-img" />
                    )}
                    <h4 className="free-resource-title">{book.title}</h4>
                    <p className="text-center mt-2 mb-0"><strong className="fs-4">${book.price} {book.currency}</strong></p>
                  </div>
                  <div className="free-resource-body flex-grow-1 d-flex flex-column">
                    {/* Botones de pago */}
                    <div className="payment-buttons mb-3">
                      {book.comingSoon ? (
                        <div className="text-center">
                          <p className="text-warning mb-2"><strong>PRÓXIMAMENTE</strong></p>
                          <p className="text-muted small">Este libro estará disponible muy pronto</p>
                        </div>
                      ) : (
                        <>
                          <a 
                            href={book.mpLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-mp w-100 mb-2"
                          >
                            Comprar con Mercado Pago
                          </a>
                          <div id={book.paypalScriptId} className="paypal-button-container"></div>
                        </>
                      )}
                    </div>
                    
                    {/* Botón ver detalles siempre al final */}
                    <div className="mt-auto">
                      <Button 
                        variant="outline-secondary" 
                        size="sm" 
                        className="w-100"
                        onClick={() => handleShowProgram(book.id)}
                      >
                        Ver detalles del libro
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* PROGRAMAS */}
        <div className="mb-5" id="programas">
          <h2 className="section-title text-center mb-4">Programas</h2>
          <p className="text-center lead mb-4">
            Transformá tu vida con nuestros programas de acompañamiento
          </p>
            
          <Row className="g-4">
            {programs.map((program) => (
              <Col key={program.id} md={6} lg={4}>
                <div className="free-resource-card h-100 d-flex flex-column">
                  <div className="free-resource-header">
                    {program.recommended && <span className="badge bg-warning text-dark mb-2">Recomendado</span>}
                    {program.badge && <span className="badge bg-info text-dark mb-2">{program.badge}</span>}
                    <h4 className="free-resource-title">{program.title}</h4>
                    <p className="text-center mt-2 mb-0"><strong className="fs-4">${program.price} {program.currency}</strong></p>
                  </div>
                  <div className="free-resource-body flex-grow-1 d-flex flex-column">
                    {/* Botones de pago */}
                    <div className="payment-buttons mb-3">
                      <a 
                        href={program.mpLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-mp w-100 mb-2"
                      >
                        Comprar con Mercado Pago
                      </a>
                      <div id={program.paypalScriptId} className="paypal-button-container"></div>
                    </div>
                    
                    {/* Botón ver detalles siempre al final */}
                    <div className="mt-auto">
                      <Button 
                        variant="outline-secondary" 
                        size="sm" 
                        className="w-100"
                        onClick={() => handleShowProgram(program.id)}
                      >
                        Ver detalles del programa
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      {/* Modal de detalles del programa */}
      <ProgramDetail 
        programId={selectedProgram} 
        show={showModal} 
        onHide={handleCloseModal} 
      />
    </section>
  );
};

export default ResourcesSection;
