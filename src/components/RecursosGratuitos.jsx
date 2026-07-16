import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import guiaImg from '../assets/images/Guia.png';

const YOUTUBE_VIDEO_ID = '6QLo79_UUSo';
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`;
const YOUTUBE_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&rel=0`;

const RecursosGratuitos = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section ref={sectionRef} className="recursos-gratuitos py-5" id="recursos-gratuitos">
      <Container>
        <h2 className="section-title text-center mb-4">Recursos gratuitos</h2>
        <p className="text-center lead mb-5">
          Comenzá a desarrollar tu masculinidad y sexualidad consciente con estos recursos gratuitos de la Escuela Urko. Entrenamientos especializados para varones.
        </p>

        <div className="recursos-guia-content mx-auto guia-imagen-wrapper" style={{ maxWidth: '900px', position: 'relative' }}>
          <img
            src={guiaImg}
            alt="Guía gratuita: 10 pasos para recuperar control y estabilidad sexual"
            className="guia-imagen img-fluid"
            loading="lazy"
            width="900"
          />

          <Button
            variant="primary"
            size="lg"
            href="https://drive.google.com/file/d/1tnBWJDB4DINCs0AdAvYFpgJzCAJSK8Md/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="guia-boton-descarga"
          >
            Descargar PDF
          </Button>
        </div>

        <div className="masterclass-section mt-5 pt-5">
          <h2 className="masterclass-title text-center mb-4">Masterclass</h2>

          <div className="masterclass-video-wrapper mx-auto">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="Masterclass Urko"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="text-center mt-4">
            <Button
              variant="primary"
              size="lg"
              href={YOUTUBE_WATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              ▶ Ver en YouTube
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecursosGratuitos;
