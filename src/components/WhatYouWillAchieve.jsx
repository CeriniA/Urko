import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiLotus, GiSpiralBottle, GiYinYang, GiMeditation, GiUpgrade, GiSpellBook } from 'react-icons/gi';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const WhatYouWillAchieve = () => {
  const achievements = [
    'Erradicar la eyaculación precoz o la disfunción eréctil de raíz, para siempre.',
    'Recuperar tu identidad como hombre.',
    'Superar el miedo en el encuentro sexoafectivo.',
    'Complacer plenamente a tu mujer.',
    'Atraer a una mujer de alto valor.',
    'Sanar dolor por ruptura.',
    'Liberarte de traumas.',
    'Dejar hábitos autodestructivos.',
    'Crear al masculino que deseás ser.',
    'Vivir tu sexualidad de forma plena.',
    'Ver a tu mujer llegar al clímax y poder acompañarla en sus orgasmos.',
    'Comprender que la conciencia sexual, es conciencia social.',
    'Mejoras en todos los pilares de tu vida',
    'Salud física y mental, relaciones, espiritualidad, propósito, finanzas.',
    'Más presencia, menos eyaculaciones.',
    'Más placer, más conexión.'
  ];

  const learnings = [
    'Retención seminal consciente',
    'Transmutación real de energía sexual',
    'Control y gobierno de tu poder sexual',
    'Templanza emocional',
    'Reequilibrio energético',
    'Técnicas milenarias para construir el ser que deseas ser'
  ];

  const learningIcons = [
    GiLotus,        // Retención
    GiSpiralBottle, // Transmutación
    GiUpgrade,      // Control / gobierno
    GiMeditation,   // Templanza emocional
    GiYinYang,      // Reequilibrio energético
    GiSpellBook,    // Técnicas milenarias
  ];

  const sectionRef = useRevealOnScroll();

  return (
    <section ref={sectionRef} className="what-you-will-achieve py-5" id="que-vas-a-lograr">
      <Container>
        <h2 className="section-title text-center mb-5">Qué vas a lograr al iniciar este camino</h2>
        {/* Lista simple de logros con puntito discreto */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <div className="achievements-simple-list">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-simple-item">
                  <span className="achievement-dot" />
                  <p className="achievement-text mb-0">{achievement}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Aprendizajes también como cards */}
        <Row>
          <Col lg={10} className="mx-auto">
            <h3 className="section-title text-center mb-4">Aprenderás sobre:</h3>
            <Row className="g-4 learnings-grid">
              {learnings.map((learning, index) => (
                <Col key={index} md={6} lg={4}>
                  <div className="learning-card h-100">
                    <div className="learning-icon-wrapper">
                      {(() => {
                        const Icon = learningIcons[index] || GiLotus;
                        return <Icon className="learning-icon-svg" />;
                      })()}
                    </div>
                    <p className="learning-text mb-0"><strong>{learning}</strong></p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatYouWillAchieve;
