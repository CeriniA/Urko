import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const RecursosGratuitos = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section ref={sectionRef} className="recursos-gratuitos py-5" id="recursos-gratuitos">
      <Container>
        <h2 className="section-title text-center mb-4">Recursos Gratuitos</h2>
        <p className="text-center lead mb-5">
          Comenzá a desarrollar tu masculinidad y sexualidad consciente con estos recursos gratuitos de la escuela urko. Entrenamientos especializados para varones
        </p>

        <div className="recursos-gratuitos-content mx-auto" style={{ maxWidth: '900px' }}>
          <div className="recurso-gratuito-card p-4 mb-4">
            <h3 className="mb-3">ENTRENAMIENTO URKO:</h3>
            <h4 className="mb-4">Guía Gratuita: 10 pasos para recuperar control y estabilidad sexual</h4>
            
            <p className="mb-3">
              Una guía práctica de 12 páginas donde sintetizo los fundamentos reales del entrenamiento aplicado al varón moderno.
            </p>

            <div className="mb-4">
              <p className="fw-bold mb-2">Incluye:</p>
              <ul>
                <li>Los pilares del Método Urko</li>
                <li>Ejercicios prácticos y aplicables desde el primer día</li>
                <li>Un enfoque claro, directo y sin misticismo innecesario</li>
              </ul>
            </div>

            <p className="mb-3">
              La guía está acompañada por una clase gratuita de 40 minutos donde explico en profundidad cómo aplicar correctamente cada paso y evitar los errores más comunes.
            </p>

            <p className="mb-4 fst-italic">
              Este material es suficiente para que cualquier hombre comprometido - incluso sin experiencia o recursos económicos - pueda iniciar y sostener su proceso de recuperación.
            </p>

            <p className="text-center fw-bold mb-4">
              Acceso libre. Compromiso personal.
            </p>

            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <Button
                variant="primary"
                size="lg"
                href="https://drive.google.com/file/d/10QBRg2TAFkV7rZSLadpJLNz4sJRQCZC0/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar PDF
              </Button>
              <Button
                variant="outline-primary"
                size="lg"
                href="https://www.youtube.com/live/LsdhL9xcZlE?si=IfJQkWIVvd8EClGH"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Video (40 min)
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecursosGratuitos;
