import { useEffect, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import products from '../data/products.js';

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

const OffersSection = () => {
  const paidOffers = useMemo(() => products.filter((product) => product.id !== 'free'), []);

  useEffect(() => {
    if (!PAYPAL_CLIENT_ID) return;

    const script = loadPayPalScript();

    const renderButtons = () => {
      paidOffers.forEach((product) => {
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
                  custom_id: product.id, // Usado en Make para rutear emails (como external_reference en MP)
                },
              ],
            }),
          onApprove: (_, actions) =>
            actions.order.capture().then((details) => {
              console.log('PayPal pago completado:', product.id, details.id);
              alert(
                `¡Gracias por sumarte a ${product.title}! Recibirás un email con los accesos en breve.`
              );
            }),
        }).render(`#${product.paypalScriptId}`);
      });
    };

    if (window.paypal) {
      renderButtons();
    } else {
      script.addEventListener('load', renderButtons, { once: true });
    }

    return () => {
      paidOffers.forEach((product) => {
        if (!product.paypalScriptId) return;
        const container = document.getElementById(product.paypalScriptId);
        if (container) container.innerHTML = '';
      });
    };
  }, [paidOffers]);

  return (
    <section id="ofertas" className="offers-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Programas de la Escuela Urko</h2>
          <p className="section-subtitle">
            Elegí el nivel de compromiso que mejor se adapte a tu camino. Todos los planes incluyen acompañamiento
            directo y accesos al material exclusivo de Urko.
          </p>
        </div>
        <div className="offers-grid">
          {paidOffers.map((product) => (
            <div key={product.id} className={`offer-item ${product.recommended ? 'offer-item--featured' : ''}`}>
              {/* Badges */}
              <div className="offer-badges">
                {product.recommended && (
                  <span className="offer-badge offer-badge--recommended">⭐ Recomendado</span>
                )}
                {product.badge && (
                  <span className="offer-badge offer-badge--info">{product.badge}</span>
                )}
              </div>

              {/* Título y Descripción */}
              <h3 className="offer-title">{product.title}</h3>
              <p className="offer-description">{product.description}</p>

              {/* Precio destacado */}
              <div className="offer-price-box">
                <div className="offer-price">
                  <span className="offer-currency">{product.currency}</span>
                  <span className="offer-amount">{product.price}</span>
                </div>
              </div>

              {/* Botones de pago */}
              <div className="offer-actions">
                <a
                  className="offer-button offer-button--primary btn-mp"
                  href={product.mpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💳 Comprar con Mercado Pago
                </a>
                {product.paypalScriptId && PAYPAL_CLIENT_ID && (
                  <>
                    <div className="offer-divider">
                      <span>o</span>
                    </div>
                    <div id={product.paypalScriptId} className="offer-paypal" />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OffersSection;
