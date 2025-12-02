import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const testimonials = [
  {
    id: 1,
    name: "Alumno de Urko",
    text: "Tuve una primera semana muy buena, aguanté 5 días teniendo relaciones sin eyacular, la erección mejoró con cada día, aún falta pero cada día se pone mejor. El pranayama está funcionando increíblemente.",
    category: "Control y Erección"
  },
  {
    id: 2,
    name: "Seguidor del Método",
    text: "Quería decirte que seguí la guía y funcionó! Padecía EP, pero seguir los pasos hizo que pueda disfrutar los encuentros. Muchas gracias!! Solucioné un problema que últimamente me hacía ganas de no estar con mujeres pero ahora todo es distinto. Sos crack!",
    category: "Eyaculación Precoz"
  },
  {
    id: 3,
    name: "Participante del Programa",
    text: "Hola Lucas, me gustaría compartirte mi historia. Llegué acá tras meses de ir a doctores y psicólogos que nunca me dieron opciones concretas de mejoras. Antes me sentía derrotado no sólo en lo sexual sino en la vida sufriendo DE. Y ahora me siento renovado y feliz a un nivel inimaginable. Fue un cambio de la noche a la mañana. Años peleando con algo que en menos de un mes me transformó.",
    category: "Disfunción Eréctil"
  },
  {
    id: 4,
    name: "Hombre Transformado",
    text: "Lo bueno también es que ella quedó muy contenta, yo antes pensaba sólo en mí, ahora quiero que disfrutemos los dos. Lo que me puso feliz también es que tengo 40 años y después de eyacular cuesta la erección y, rápido vino de vuelta.",
    category: "Pareja y Conexión"
  },
  {
    id: 5,
    name: "Estudiante Avanzado",
    text: "Es la primera vez que me dicen 'qué bien que cojes hdp' 😂 Antes ni entraba al portal. Y así estuvimos unos 50 minutos... Pero hermano...yo no me animaba a penetrar y lo máximo que había penetrado eran 5 minutos como mucho... Con el espejo estaba así 😎 se me inflaba el pecho.",
    category: "Confianza Sexual"
  },
  {
    id: 6,
    name: "Varón Presente",
    text: "Como andas maestro, quería agradecerte y decirte que apliqué todo el entrenamiento y de verdad que me cambió todo. Bueno primero empecé hacer los ejercicios de respiración el pranayama y aplicar el mantras, eso me ayudó bastante a la hora de empezar con la penetración fue de mucha ayuda. Ahora controlo todo. Y mi pareja está encantada! Pasé de eyacular en 3 y 5 minutos, a tener el control de todo. Te puedo decir que la última vez, fue de más de 40 minutos hasta una hora y quedó encantada. Si de verdad, fue un cambio radical y estoy muy agradecido de poder haber charlado con vos y seguir tus guías.",
    category: "Transformación Completa"
  }
];

const Testimonials = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section ref={sectionRef} className="testimonials py-5" id="testimonios">
      <Container>
        <h2 className="section-title text-center mb-5">Testimonios</h2>
        <p className="text-center lead mb-5">
          Conocé las experiencias de hombres que transformaron su vida con el método Urko
        </p>
        
        <Row className="g-4">
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} md={6} lg={4}>
              <div className="testimonial-card h-100 d-flex flex-column">
                <div className="testimonial-category mb-3">
                  <span className="badge bg-warning text-dark">{testimonial.category}</span>
                </div>
                <blockquote className="testimonial-text flex-grow-1 mb-3">
                  "{testimonial.text}"
                </blockquote>
                <div className="testimonial-author mt-auto">
                  <strong>— {testimonial.name}</strong>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
