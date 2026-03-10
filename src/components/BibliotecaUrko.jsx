import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
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

  const books = [
    {
      id: 'libro-1',
      icon: '📘',
      title: 'Libro 1: Si yo pude, vos podés',
      price: 11,
      currency: 'USD',
      description: 'Una guía testimonial y práctica. En este libro relato mi proceso real de transformación: desde la disfunción y la desconexión hasta el encuentro con mi maestro y la doctrina tántrico–taoísta.',
      subtitle: 'No es solo una historia. Desde las primeras páginas encontrarás herramientas concretas para comenzar a aplicar.',
      parts: [
        'Primera parte: el recorrido personal y el cambio de paradigma.',
        'Segunda parte: técnicas prácticas y una guía clara para llevar lo aprendido al encuentro íntimo con una mujer.'
      ],
      conclusion: 'Es el puente entre la identificación y la acción.',
      mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-35bd627f-68d0-4f9d-bc10-b73a70a0f6ad',
      paypalScriptId: 'paypal-libro-1',
      testimonials: [
        { 
          id: 1, 
          text: 'Te agradezco de corazón. Lo puse en práctica. Y volví a enamorar a mi mujer!!! Estoy trabajando mucho para seguir mejorando y voy a leerlo de nuevo... pero mejore notablemente.... y me gustaría tener una charla con vos...',
          author: 'Lector del libro'
        }
      ]
    },
    {
      id: 'libro-2',
      icon: '📕',
      title: 'Libro 2: Entrenamiento Urko',
      subtitle: '"El que no tiene maestro, pierde."',
      price: 11,
      currency: 'USD',
      description: 'Este libro sistematiza el método Urko.',
      includes: [
        'Técnicas centrales de la doctrina tántrico–taoísta',
        'Ejercicios desarrollados desde mi experiencia directa',
        'Adaptaciones prácticas para la realidad del varón actual',
        'Protocolos progresivos de entrenamiento'
      ],
      conclusion: 'Es un manual de práctica. Claro, directo y aplicable. Diseñado para hombres que buscan disciplina, estructura y resultados.',
      mpLink: '#',
      paypalScriptId: 'paypal-libro-2',
      testimonials: [
        { 
          id: 1, 
          text: 'Hola quería decirte que seguí la guía y funcionó!! Padecía EP, pero seguir los pasos hizo que pueda disfrutar de los encuentros. Un saludo! Muchas gracias!! Solucioné un problema que últimamente me hacía ganas de no estar con mujeres, pero ahora todo es distinto. Sos crack!',
          author: 'Lector del libro'
        }
      ]
    },
    {
      id: 'pack-2',
      icon: '📚',
      title: 'Pack x 2: "Si yo pude vos podes" + "Entrenamiento Urko"',
      price: 18,
      currency: 'USD',
      description: 'Ambos libros que pueden leerse por separado pero juntos forman el proceso completo:',
      features: [
        'Conciencia + Método',
        'Historia + Sistema',
        'Identificación + Entrenamiento'
      ],
      conclusion: 'Si querés entender el camino y aplicarlo con estructura, este es el formato recomendado.',
      mpLink: '#',
      paypalScriptId: 'paypal-pack-2',
      isSpecial: true
    }
  ];

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
          createOrder: (_, actions) =>
            actions.order.create({
              purchase_units: [
                {
                  amount: { value: book.price.toFixed(2) },
                  description: book.title,
                  custom_id: book.id,
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
                    <img src={libro2Img} alt={book.title} className="book-cover-img mb-3" />
                  )}
                  {book.id === 'libro-2' && (
                    <img src={libro1Img} alt={book.title} className="book-cover-img mb-3" />
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

                  <a 
                    href={book.mpLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-mp w-100 mb-2"
                  >
                    Comprar con Mercado Pago
                  </a>
                  <div id={book.paypalScriptId} className="paypal-button-container"></div>
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
    </section>
  );
};

export default BibliotecaUrko;
