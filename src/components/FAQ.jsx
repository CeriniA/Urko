import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  const faqs = [
    {
      question: '¿Qué voy a lograr al iniciar este camino?',
      answer: 'Vas a erradicar la eyaculación precoz o disfunción eréctil de raíz, recuperar tu identidad como hombre, superar miedos en el encuentro sexoafectivo, complacer plenamente a tu mujer, y experimentar mejoras en todos los pilares de tu vida: salud física y mental, relaciones, espiritualidad, propósito y finanzas.'
    },
    {
      question: '¿Cuáles son las ganancias del trabajo en equipo?',
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
        <h2 className="text-center mb-5">Preguntas Frecuentes</h2>
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
