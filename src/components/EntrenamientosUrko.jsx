import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import products from '../data/products';

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID;
const MAKE_WEBHOOK_URL_PAYPAL = import.meta.env.VITE_MAKE_WEBHOOK_URL_PAYPAL
  || 'https://hook.us2.make.com/ylhtebvebmkrge47jkl2oq41qynzuswb';

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

const notifyMake = async (payload) => {
  try {
    await fetch(MAKE_WEBHOOK_URL_PAYPAL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('Error notificando a make.com:', err);
  }
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
            const purchaseUnit = order.purchase_units?.[0] || {};
            const payer = order.payer || {};

            await notifyMake({
              source: 'paypal',
              order_id: order.id,
              status: order.status,
              product_id: purchaseUnit.custom_id || program.id,
              product_title: purchaseUnit.description || program.title,
              amount: purchaseUnit.amount?.value || program.price.toFixed(2),
              currency: purchaseUnit.amount?.currency_code || 'USD',
              payer_email: payer.email_address || '',
              payer_name: `${payer.name?.given_name || ''} ${payer.name?.surname || ''}`.trim(),
            });

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
                      {program.whatsappLink && (
                        <a 
                          href={program.whatsappLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-outline-success w-100 mt-2"
                        >
                          <i className="bi bi-whatsapp me-2"></i>
                          Consultar por WhatsApp
                        </a>
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
