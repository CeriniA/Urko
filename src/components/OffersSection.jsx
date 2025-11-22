import { useEffect, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
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
          style: { layout: 'horizontal', color: 'gold', shape: 'pill' },
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
    <section id="ofertas" className="py-5 offers-section">
      <Container>
        <div className="text-center text-light mb-5">
          <h2 className="section-title">Programas de la Escuela Urko</h2>
          <p className="section-subtitle">
            Elegí el nivel de compromiso que mejor se adapte a tu camino. Todos los planes incluyen acompañamiento
            directo y accesos al material exclusivo de Urko.
          </p>
        </div>
        <Row className="g-4">
          {paidOffers.map((product) => (
            <Col key={product.id} xs={12} md={6} xl={4}>
              <Card className="h-100 offer-card">
                <Card.Body>
                  <Badge bg="light" text="dark" className="mb-3">
                    {product.currency} {product.price}
                  </Badge>
                  <Card.Title className="mb-3">{product.title}</Card.Title>
                  <Card.Text className="mb-4">{product.description}</Card.Text>
                  <div className="d-flex flex-column gap-3">
                    <Button
                      variant="outline-light"
                      size="lg"
                      href={product.mpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pagar con Mercado Pago
                    </Button>
                    {product.paypalScriptId && PAYPAL_CLIENT_ID && (
                      <div id={product.paypalScriptId} />
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OffersSection;
