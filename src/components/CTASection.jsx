import Container from 'react-bootstrap/Container';

const CTASection = () => (
  <section className="cta-section">
    <Container>
      <div className="cta-content">
        <h2 className="section-title">Si sentís el fuego, es hora de actuar</h2>
        <p className="cta-text">
          Cambiá tu vida de una vez y para siempre.
          <br />
          <strong>Si yo pude, vos podes.</strong>
        </p>
        <div className="cta-actions">
          <a className="cta-button cta-button--primary" href="#programas">
            Siento el fuego
          </a>
        </div>
        <div className="payment-methods">
          <p className="payment-title">Medios de pago disponibles</p>
          <p className="payment-list">
            PayPal · Mercado Pago · Western Union · Transferencia Bancaria
          </p>
        </div>
      </div>
    </Container>
  </section>
);

export default CTASection;
