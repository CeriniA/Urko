import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { scrollToElement, scrollToTop } from '../utils/scrollHelpers';
import perfilImg from '../assets/images/Nuevafotoperfil.jpeg';

const SobreMiCompleto = () => {
  const sectionRef = useRevealOnScroll();
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate('/');
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  return (
    <section ref={sectionRef} className="sobre-mi-completo py-5" id="sobre-mi-completo">
      <Container>
        <div className="mb-4">
          <Button 
            variant="outline-light" 
            onClick={handleVolver}
            className="btn-volver-biografia"
          >
            ← Volver al Inicio
          </Button>
        </div>

        <Row className="justify-content-center align-items-center mb-5">
          <Col md={5} lg={4} className="text-center mb-4 mb-md-0">
            <img
              src={perfilImg}
              alt="Lucas Flesia - Fundador de Escuela Urko"
              className="img-fluid rounded"
              style={{ maxWidth: '350px' }}
            />
          </Col>
          <Col md={7} lg={6}>
            <h1 className="section-title mb-3">Lucas Flesia</h1>
            <h2 className="h4 text-muted mb-3">Fundador de URKO TÁNTRICO</h2>
            <p className="lead fst-italic">Sitio terapéutico y educativo</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10} xl={9}>
            {/* Origen del nombre */}
            <div className="bio-section mb-5">
              <h3 className="bio-title mb-4">El origen de URKO</h3>
              <p className="bio-text">
                Urko Tántrico proviene de <strong>"Urko Kjampis"</strong>, expresión en lengua quechua que significa <em>Cerro Sanador</em>, nombre otorgado por mis maestros de medicina ancestral andina como reconocimiento a un proceso profundo de iniciación y transformación.
              </p>
              <p className="bio-text">
                URKO no nació de una inspiración casual. Proviene de un proceso de iniciación que cambió mi vida. Lo que comenzó como una búsqueda de sanación personal ante la pérdida de firmeza y la desconexión, se convirtió en mi misión de vida.
              </p>
            </div>

            {/* Formación */}
            <div className="bio-section mb-5">
              <h3 className="bio-title mb-4">Un puente entre lo ancestral y lo moderno</h3>
              <p className="bio-text">
                Mi camino comienza en la medicina tradicional de los Andes, donde fui iniciado y acompañado por maestros <strong>Jampiq Qmayoc y Mamacuna</strong>, dentro del linaje ancestral andino. Allí comprendí la dimensión energética, espiritual y ritual del proceso de sanación.
              </p>
              <p className="bio-text">
                Mi formación integra la sabiduría de dos mundos: la dimensión energética de la medicina ancestral andina y el rigor de la doctrina tántrico-taoísta.
              </p>
              <p className="bio-text">
                Posteriormente inicié un profundo trabajo de transformación personal a través de la doctrina tántrico–taoísta, realizando mi tratamiento y formación directa con el maestro <strong>Norberto Litvinoff</strong>.
              </p>
              <p className="bio-text">
                Tras superar mis propias disfunciones sexuales y reordenar integralmente mi vida, continué trabajando junto a él, convirtiéndome en uno de los referentes de su grupo privado —espacio al que sigo aportando activamente— y en el <strong>primer discípulo del linaje en abrir una escuela propia</strong>: la Escuela Urko.
              </p>
              <p className="bio-text">
                Mi método sistematiza años de estudio con referentes globales como <strong>Mantak Chia</strong> y <strong>José Toirán</strong>, integrando herramientas de control mental (Método Silva), Yoga Kundalini y reprogramación a través del Arte Ritual.
              </p>
            </div>

            {/* Obras */}
            <div className="bio-section mb-5">
              <h3 className="bio-title mb-4">Obras publicadas</h3>
              <p className="bio-text mb-3">
                He volcado mi recorrido en tres obras fundamentales:
              </p>
              <ul className="bio-list">
                <li>
                  <strong>"Entrenamiento URKO, guía gratuita con 10 pasos para superar EP/DE"</strong> – Guía práctica de acceso libre.
                </li>
                <li>
                  <strong>"Si yo pude, vos podés"</strong> – Mi testimonio sobre la superación de la eyaculación precoz y la reconexión con el vigor masculino.
                </li>
                <li>
                  <strong>"Entrenamiento Urko"</strong> – La guía definitiva de 10 pasos para el vigor masculino. Sistematización de la práctica tántrico-taoísta aplicada al hombre actual.
                </li>
              </ul>
            </div>

            {/* Formación Complementaria */}
            <div className="bio-section mb-5">
              <h3 className="bio-title mb-4">Formación complementaria</h3>
              <ul className="bio-list">
                <li>
                  <strong>Método Silva de Ultracontrol Mental</strong>, desarrollado por José Silva.
                </li>
                <li>
                  Formación con <strong>José Toirán</strong>, discípulo directo del maestro Mantak Chia (autor de más de 60 libros referentes a la doctrina taoísta).
                </li>
                <li>
                  Participación en diferentes <strong>masterclass dictadas por Mantak Chia</strong>.
                </li>
                <li>
                  Formación en <strong>Pranayamas, meditación y prácticas de Yoga Kundalini</strong> en la escuela DUNIA.YOGA.
                </li>
                <li>
                  Iniciación en <strong>Curso Práctico de Arte Ritual – Nivel 33</strong>, con Brosa Leython, enfocado en reprogramación a través de la acción cotidiana.
                </li>
                <li>
                  Formación en <strong>Llados University</strong>,participante activo del campus y sala vip, sumando intereaccion personal con su fundador Amadeo Llados.
                </li>
                <li>
                  Participación en grabaciones y debates sobre los cuatro pilares que atraviesan la sexualidad masculina —mente, emociones, cuerpo y vínculos— junto a <strong>Alexander Gomez</strong>, reconocido terapeuta sexual de amplia trayectoria, con quien mantengo intercambio y estudio permanente.
                </li>
              </ul>
            </div>

            {/* Experiencia y Misión */}
            <div className="bio-section mb-5">
              <h3 className="bio-title mb-4">Experiencia y misión</h3>
              <p className="bio-text">
                En este recorrido he acompañado a <strong>cientos de hombres</strong> en dispersión de conflictos de índole sexual , especialmente eyaculación precoz y bajo vigor, observando cómo la recuperación de la energía sexual impacta directamente en los pilares fundamentales del ser: <strong>autoestima, propósito, presencia, vínculos y liderazgo personal</strong>.
              </p>
              <p className="bio-text">
                He comprobado que cuando un hombre recupera su energía sexual, transforma automáticamente su autoestima, su propósito y su capacidad de liderazgo.
              </p>
              <p className="bio-text">
                Actualmente continúo en formación constante dentro de la doctrina tántrica y taoísta, sosteniendo una práctica activa y una actualización permanente.
              </p>
              <p className="bio-text">
                Sigo en formación constante —actualmente profundizando en mentalidad y desarrollo personal— porque entiendo que <strong>el  trabajo en uno mismo es un proceso constante y permanente</strong>.
              </p>
            </div>

            {/* Cierre */}
            <div className="bio-section mb-5 text-center">
              <div className="bio-quote p-4">
                <p className="h5 mb-0 fst-italic">
                  "Urko Tántrico no es una propuesta teórica.<br />
                  Es un método basado en linaje, práctica, experiencia directa<br />
                  y resultados comprobables en la vida real."
                </p>
              </div>
            </div>

            <div className="text-center mt-5">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    scrollToElement('entrenamientos');
                  }, 300);
                }}
              >
                Conocer los entrenamientos
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SobreMiCompleto;
