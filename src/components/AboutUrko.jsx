import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import sobreMiImg from '../assets/images/Sobre Mi.png';

const AboutUrko = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section ref={sectionRef} className="about-urko py-5" id="sobre-urko">
      <Container>
        <h2 className="section-title text-center mb-5">Sobre mí</h2>
        <Row className="align-items-center g-4 about-urko__row">
          <Col md={6}>
            <div className="about-content mx-auto" style={{ maxWidth: '900px' }}>
              <p className="lead text-center text-md-start mb-4">
                <strong>Soy Lucas Flesia.</strong>
              </p>
              <p className="mb-4">
                URKO TANTRICO deviene de "Urko Kjampis" que en lengua quechua significa cerro sanador, nombre asignado 
                por mis maestros de medicina ancestral.
              </p>
              <p className="mb-4">
                La doctrina tantrico taoista la aprendí luego de hacer un largo proceso de búsqueda interna, de atravesar 
                mi noche oscura del alma.
              </p>
              <p className="mb-4">
                Cuando resignado a vivir una vida sexual mediocre aparece mi maestro Norberto Litvinoff
              </p>
              <p>
                Decidí hacerme responsable y no dejar pendiente para otra vida que pudiera solucionar en esta. 
                Allí nació Urko tántrico.
              </p>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img
              src={sobreMiImg}
              alt="Lucas Flesia - Coach de Masculinidad Consciente y Tantra para Varones"
              className="about-urko__image img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUrko;
