import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

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

  const programs = [
    {
      id: 'fundamental',
      title: 'PROGRAMA FUNDAMENTAL',
      icon: '🔹',
      price: 247,
      currency: 'USD',
      description: 'El punto de partida estructurado para iniciar tu proceso con autonomía y disciplina personal.',
      subtitle: 'Para hombres que pueden sostener su entrenamiento sin acompañamiento.',
      access: '🔓 Acceso inmediato.',
      includes: [
        'Método completo paso a paso.',
        'Protocolos prácticos.',
        'Ejercicios progresivos.',
        'Actualizaciones futuras.',
        'Acceso de por vida.'
      ],
      notIncludes: 'No incluye acompañamiento personalizado.',
      mpLink: '#',
      paypalScriptId: 'paypal-fundamental',
      buttonText: 'Comenzar ahora',
      buttonType: 'buy'
    },
    {
      id: 'trimestral',
      title: 'ENTRENAMIENTO TRIMESTRAL',
      icon: '🔸',
      price: 497,
      currency: 'USD',
      description: 'Para quienes desean más orden y dinámica grupal sin ingresar aún al proceso completo acompañado. Ideal si buscás estructura y ritmo sin seguimiento individual.',
      includes: [
        'Acceso completo al Programa Fundamental',
        'Calendario de práctica definido.',
        '6 encuentros grupales en vivo.',
        'Espacio de integración y consultas generales.',
        'Plan estructurado de 90 días.'
      ],
      mpLink: '#',
      paypalScriptId: 'paypal-trimestral',
      buttonText: 'Ingresar al Intensivo',
      buttonType: 'buy'
    },
    {
      id: 'acompanado',
      title: 'PROCESO TRIMESTRAL ACOMPAÑADO',
      icon: '🔥',
      price: 750,
      currency: 'USD',
      description: 'La experiencia completa de la Escuela Urko.',
      subtitle: 'Tres meses de evolución progresiva diseñados para llevarte desde el punto cero hasta el dominio total. Con acompañamiento real en grupos reducidos. Cupos limitados por cohorte.',
      includes: [
        'Videollamadas semanales.',
        'Seguimiento durante el proceso.',
        'Correcciones y guía directa.',
        'Plan estructurado de 90 días.'
      ],
      notIncludes: '(no se puede comprar por acá)',
      whatsappLink: 'https://wa.me/5491234567890',
      buttonText: 'Aplicar al proceso',
      buttonType: 'whatsapp'
    },
    {
      id: 'individual',
      title: 'ACOMPAÑAMIENTO INDIVIDUAL 1-1',
      icon: '🔒',
      price: 3000,
      currency: 'USD',
      description: 'Modalidad personalizada para quienes requieren profundidad y seguimiento directo.',
      subtitle: 'Acceso solo mediante evaluación previa.',
      notIncludes: '(no se puede comprar por acá)',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfLX9CAuPe1KbbLUhiOoK8OiyzvyBxnV-49rRe0xVny_SzIUg/viewform',
      buttonText: 'Solicitar evaluación',
      buttonType: 'form'
    }
  ];

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
                    <p className="text-muted fst-italic">{program.notIncludes}</p>
                  )}
                </div>

                <div className="programa-footer">
                  <p className="text-center mb-3">
                    <strong className="fs-4">💰 Inversión{program.id === 'fundamental' ? ' única' : ''}: ${program.price} {program.currency}</strong>
                  </p>

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
