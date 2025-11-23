import Container from 'react-bootstrap/Container';

const CTASection = () => (
  <section className="cta-section">
    <Container>
      <div className="cta-content">
        <blockquote className="cta-quote">
          Si sentís el fuego, es hora de actuar
        </blockquote>
        <p className="cta-author">— Urko</p>
        <p className="cta-text" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem', color: '#666' }}>
          Cambiá tu vida de una vez y para siempre.
          <br />
          <strong style={{ color: '#1a1a1a' }}>Si yo pude, vos podés.</strong>
          <br />
          Estoy para acompañarte.
        </p>
        <div className="cta-actions">
          <a className="cta-button cta-button--primary" href="#ofertas">
            Ver Programas
          </a>
          <a className="cta-button cta-button--secondary" href="#contacto">
            Contactar
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
