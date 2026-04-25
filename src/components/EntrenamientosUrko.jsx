import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import products from '../data/products';

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

const EntrenamientosUrko = () => {
  const sectionRef = useRevealOnScroll();

  // Filtrar solo los productos de categoría 'programs' desde products.js
  const programs = products.filter(product => product.category === 'programs');

  // Cargar botones de PayPal para programas con compra directa
  useEffect(() => {
    if (!PAYPAL_CLIENT_ID) return;

    const script = loadPayPalScript();

    const renderButtons = () => {
      programs.forEach((program) => {
        if (!program.paypalScriptId) return;
        const container = document.getElementById(program.paypalScriptId);
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
                  amount: { value: program.price.toFixed(2) },
                  description: program.title,
                  custom_id: program.id,
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
        }).render(`#${program.paypalScriptId}`);
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
    <section ref={sectionRef} className="entrenamientos-urko py-5" id="entrenamientos">
      <Container>
        <h2 className="section-title text-center mb-4">Entrenamientos Urko</h2>
        <p className="text-center lead mb-5">
          Transformá tu vida con los programas de entrenamiento para varones de la Escuela Urko
        </p>

        <Row className="g-4">
          {programs.map((program) => (
            <Col key={program.id} md={6} lg={6}>
              <div className="programa-card h-100 d-flex flex-column p-4" data-program-id={program.id}>
                <div className="programa-header mb-3">
                  <h4 className="programa-title programa-title--colored mb-3">{program.title}</h4>
                  {program.access && <p className="programa-access mb-2">{program.access}</p>}
                  <p className="programa-description mb-3">{program.description}</p>
                  {program.subtitle && <p className="programa-subtitle fst-italic mb-3">{program.subtitle}</p>}
                </div>

                <div className="programa-body flex-grow-1 mb-3">
                  {program.includes && (
                    <div className="mb-3">
                      <p className="fw-bold mb-2">Incluye:</p>
                      <ul className="programa-includes">
                        {program.includes.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {program.notIncludes && (
                    <p className="text-white fst-italic">{program.notIncludes}</p>
                  )}
                </div>

                <div className="programa-footer">
                  {program.buttonType === 'buy' && (
                    <>
                      <a 
                        href={program.mpLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-mp w-100 mb-2"
                      >
                        Comprar con Mercado Pago
                      </a>
                      {program.paypalScriptId && (
                        <div id={program.paypalScriptId} className="paypal-button-container"></div>
                      )}
                    </>
                  )}

                  {program.buttonType === 'whatsapp' && (
                    <a 
                      href={program.whatsappLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-success w-100"
                    >
                      {program.buttonText}
                    </a>
                  )}

                  {program.buttonType === 'form' && (
                    <a 
                      href={program.formLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-warning w-100"
                    >
                      {program.buttonText}
                    </a>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EntrenamientosUrko;
