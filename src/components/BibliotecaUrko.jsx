import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import EmailCaptureModal from './EmailCaptureModal';
import products from '../data/products';
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

const BibliotecaUrko = () => {
  const sectionRef = useRevealOnScroll();
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  // Filtrar solo los productos de categoría 'books' desde products.js
  const books = products.filter(product => product.category === 'books');

  const handlePaymentClick = (book, method) => {
    setSelectedProduct(book);
    setPaymentMethod(method);
    setShowEmailModal(true);
  };

  const handleEmailConfirm = async (email) => {
    setShowEmailModal(false);
    
    if (paymentMethod === 'mercadopago') {
      // Solicitar a Make que cree una preferencia con metadata
      try {
        const response = await fetch('https://hook.us2.make.com/ylhtebvebmkrge47jkl2oq41qynzuswb', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'create_preference',
            product_id: selectedProduct.id,
            product_title: selectedProduct.title,
            product_price: selectedProduct.price,
            access_email: email
          })
        });
        
        const data = await response.json();
        
        if (data.init_point) {
          window.open(data.init_point, '_blank');
        } else {
          alert('Error al crear el link de pago. Por favor, intentá nuevamente.');
        }
      } catch (error) {
        console.error('Error creando preferencia:', error);
        alert('Error al crear el link de pago. Por favor, intentá nuevamente.');
      }
    } else if (paymentMethod === 'paypal') {
      // Para PayPal, guardar email y abrir checkout
      sessionStorage.setItem('userAccessEmail', email);
      const paypalButton = document.querySelector(`#${selectedProduct.paypalScriptId} iframe`);
      if (paypalButton) {
        paypalButton.click();
      }
    }
  };

  // Cargar botones de PayPal
  useEffect(() => {
    if (!PAYPAL_CLIENT_ID) return;

    const script = loadPayPalScript();

    const renderButtons = () => {
      books.forEach((book) => {
        if (!book.paypalScriptId) return;
        const container = document.getElementById(book.paypalScriptId);
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
          createOrder: (_, actions) => {
            const accessEmail = sessionStorage.getItem('userAccessEmail') || '';
            return actions.order.create({
              purchase_units: [
                {
                  amount: { value: book.price.toFixed(2) },
                  description: book.title,
                  custom_id: `${book.id}|${accessEmail}`, // Incluir email en custom_id
                },
              ],
            });
          },
          onApprove: async (_, actions) => {
            const order = await actions.order.capture();
            const accessEmail = sessionStorage.getItem('userAccessEmail');
            
            // Enviar datos a Make
            await fetch('https://hook.us2.make.com/ylhtebvebmkrge47jkl2oq41qynzuswb', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                payment_id: order.id,
                product_id: book.id,
                product_title: book.title,
                access_email: accessEmail,
                amount: book.price,
                payment_method: 'paypal',
                status: 'approved'
              })
            });
            
            alert(`Pago exitoso! Recibirás el acceso en: ${accessEmail}`);
            sessionStorage.removeItem('userAccessEmail');
          },
          onError: (err) => {
            console.error('Error en PayPal:', err);
            alert('Hubo un error procesando el pago. Por favor, intentá de nuevo.');
          },
        }).render(`#${book.paypalScriptId}`);
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
  }, []);

  return (
    <section ref={sectionRef} className="biblioteca-urko py-5" id="biblioteca">
      <Container>
        <h2 className="section-title text-center mb-4">Biblioteca Urko</h2>
        <p className="text-center lead mb-5 fst-italic">
          Cada libro es una senda.<br />
          Disciplina, conciencia y transformación masculina real.
        </p>

        <Row className="g-4">
          {books.map((book) => (
            <Col key={book.id} md={12} lg={book.isSpecial ? 12 : 6}>
              <div className={`libro-card h-100 p-4 ${book.isSpecial ? 'libro-card--special' : ''}`}>
                <div className="libro-header mb-4">
                  {book.id === 'libro-1' && (
                    <img 
                      src={libro2Img} 
                      alt={book.title} 
                      className="book-cover-img mb-3"
                      loading="lazy"
                      width="180"
                      height="270"
                    />
                  )}
                  {book.id === 'libro-2' && (
                    <img 
                      src={libro1Img} 
                      alt={book.title} 
                      className="book-cover-img mb-3"
                      loading="lazy"
                      width="180"
                      height="270"
                    />
                  )}
                  <h4 className="libro-title libro-title--colored mb-3">{book.title}</h4>
                  {book.subtitle && <p className="libro-subtitle fst-italic mb-3">{book.subtitle}</p>}
                </div>

                <div className="libro-body mb-4">
                  <p className="mb-3">{book.description}</p>

                  {book.parts && (
                    <div className="mb-3">
                      <p className="fw-bold mb-2">El libro se divide en:</p>
                      <ul>
                        {book.parts.map((part, idx) => (
                          <li key={idx}>{part}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {book.includes && (
                    <div className="mb-3">
                      <p className="fw-bold mb-2">Contiene:</p>
                      <ul>
                        {book.includes.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {book.features && (
                    <ul className="mb-3">
                      {book.features.map((feature, idx) => (
                        <li key={idx}><strong>{feature}</strong></li>
                      ))}
                    </ul>
                  )}

                  {book.conclusion && (
                    <p className="fst-italic mb-3">{book.conclusion}</p>
                  )}
                </div>

                <div className="libro-footer">
                  <p className="text-center mb-3">
                    <strong className="fs-4">Valor: <span className="text-warning">${book.price} {book.currency}</span></strong>
                    {book.isSpecial && <span className="badge bg-warning text-dark ms-2">Valor especial</span>}
                  </p>

                  <button 
                    onClick={() => handlePaymentClick(book, 'mercadopago')}
                    className="btn btn-mp w-100 mb-2"
                  >
                    Comprar con Mercado Pago
                  </button>
                  <button 
                    onClick={() => handlePaymentClick(book, 'paypal')}
                    className="btn btn-primary w-100"
                    style={{ backgroundColor: '#0070ba', borderColor: '#0070ba' }}
                  >
                    Comprar con PayPal
                  </button>
                  <div id={book.paypalScriptId} className="paypal-button-container" style={{ display: 'none' }}></div>
                </div>

                {book.testimonials && (
                  <div className="libro-testimonials mt-4">
                    <h5 className="mb-3">Testimonios</h5>
                    <Row className="g-3">
                      {book.testimonials.map((testimonial) => (
                        <Col key={testimonial.id} md={12}>
                          <div className="testimonial-mini p-3">
                            <p className="mb-0 fst-italic">"{testimonial.text}"</p>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <EmailCaptureModal
        show={showEmailModal}
        onHide={() => setShowEmailModal(false)}
        onConfirm={handleEmailConfirm}
        productTitle={selectedProduct?.title || ''}
      />
    </section>
  );
};

export default BibliotecaUrko;
