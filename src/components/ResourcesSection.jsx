import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
  
  const freeResources = products.filter(p => p.category === 'free');
  const books = products.filter(p => p.category === 'books');
  const programs = products.filter(p => p.category === 'programs');

  const sectionRef = useRevealOnScroll();

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
            layout: 'horizontal',
            color: 'gold',
            shape: 'rect',
            label: 'paypal',
            height: 45,
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

  return (
    <section ref={sectionRef} className="resources-section py-5" id="recursos">
      <Container>
        <h2 className="section-title text-center mb-4">Recursos</h2>
        
        {/* RECURSOS GRATUITOS */}
        <div className="mb-5" id="recursos-gratuitos">
          <h3 className="text-center mb-4">Recursos Gratuitos</h3>
          <p className="text-center lead mb-4">
            Comenza a entrenar tu presencia, energía y enfoque con estos entrenamientos gratuitos de Urko tántrico:
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
              <form className="d-flex flex-column flex-md-row gap-3">
                <input type="text" className="form-control" placeholder="Nombre" />
                <input type="email" className="form-control" placeholder="Email" />
                <Button variant="primary" type="submit">Enviar</Button>
              </form>
            </div>
          </div>
        </div>

        {/* LIBROS */}
        <div className="mb-5" id="recursos-libros">
          <h3 className="text-center mb-4">Libros</h3>
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
                      <a 
                        href={book.mpLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary w-100 mb-2"
                      >
                        Comprar con Mercado Pago
                      </a>
                      <div id={book.paypalScriptId} className="paypal-button-container"></div>
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
          <h3 className="text-center mb-4">Programas</h3>
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
                        className="btn btn-primary w-100 mb-2"
                      >
                        Pagar con Mercado Pago
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
