import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  const faqs = [
    {
      question: '¿Qué vas a lograr al iniciar este camino?',
      answer: (
        <div>
          <ul className="mb-3">
            <li>Erradicar la eyaculación precoz o la disfunción eréctil de raíz, para siempre.</li>
            <li>Recuperar tu identidad como hombre.</li>
            <li>Superar el miedo en el encuentro sexoafectivo.</li>
            <li>Complacer plenamente a tu mujer.</li>
            <li>Atraer a una mujer de alto valor.</li>
            <li>Sanar dolor por ruptura.</li>
            <li>Liberarte de traumas.</li>
            <li>Dejar hábitos autodestructivos.</li>
            <li>Crear al masculino que deseás ser.</li>
            <li>Vivir tu sexualidad de forma plena.</li>
            <li>Ver a tu mujer llegar al clímax y poder acompañarla en sus orgasmos.</li>
            <li>Comprender que la conciencia sexual, es conciencia social.</li>
          </ul>
          <p className="fw-bold mb-2">Mejoras en todos los pilares de tu vida:</p>
          <p className="mb-2">Salud física y mental, relaciones, espiritualidad, propósito, finanzas.</p>
          <p className="mb-1"><strong>Más presencia, menos eyaculaciones.</strong></p>
          <p className="mb-0"><strong>Más placer, más conexión.</strong></p>
        </div>
      )
    },
    {
      question: '¿Cuáles son las ganancias de trabajar en equipo?',
      answer: 'El trabajo grupal te brinda: apertura, apoyo real, comprensión y contención, feedback constante, actualización permanente y contacto directo con Urko. Es un espacio donde podés compartir tu proceso con otros hombres que están transitando el mismo camino.'
    },
    {
      question: '¿Qué incluyen los programas?',
      answer: 'Cada programa tiene diferentes niveles de acompañamiento. Desde el trabajo en solitario con acceso al material privado, hasta el acompañamiento 1 a 1 exclusivo con videollamadas mensuales y contacto directo por WhatsApp. Todos incluyen acceso al entrenamiento, guías de trabajo, video terapia y biblioteca.'
    },
    {
      question: '¿Cómo funcionan los pagos?',
      answer: 'Podés pagar con Mercado Pago o PayPal. Algunos programas tienen opción de pago único o en cuotas mensuales. Una vez realizado el pago, recibirás acceso inmediato al material correspondiente.'
    }
  ];

  return (
    <section className="faq-section py-5" id="preguntas">
      <Container>
        <h2 className="section-title text-center mb-5">Preguntas Frecuentes</h2>
        <div className="mx-auto" style={{ maxWidth: '800px' }}>
          <Accordion>
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
