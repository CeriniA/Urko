import Container from 'react-bootstrap/Container';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Erradicar EP o DE',
      description: 'De raíz, para siempre. No más parches temporales ni soluciones superficiales.',
    },
    {
      title: 'Recuperar tu identidad',
      description: 'Como hombre auténtico. Reconectá con tu esencia masculina sin máscaras.',
    },
    {
      title: 'Superar el miedo',
      description: 'En el encuentro sexoafectivo. Transformá la ansiedad en presencia y confianza.',
    },
    {
      title: 'Atraer mujeres de alto valor',
      description: 'Desde tu presencia. No desde técnicas, sino desde quién realmente sos.',
    },
    {
      title: 'Sanar dolor por ruptura',
      description: 'Liberarte de traumas. Cerrá ciclos y abrí espacio para nuevas experiencias.',
    },
    {
      title: 'Dejar hábitos autodestructivos',
      description: 'Transformar tu energía. Canalizá tu fuerza vital hacia tu propósito.',
    },
    {
      title: 'Retención consciente',
      description: 'Más presencia, menos eyaculaciones. Aprendé a manejar tu energía sexual.',
    },
    {
      title: 'Placer pleno',
      description: 'Más placer, más conexión. Descubrí niveles de placer que no conocías.',
    },
    {
      title: 'Sexualidad plena',
      description: 'Acompañar a tu mujer en sus orgasmos. Convertite en un amante consciente.',
    },
    {
      title: 'Conciencia sexual',
      description: 'Es conciencia social. Tu transformación impacta en todos tus vínculos.',
    },
    {
      title: 'Mejoras en todos los pilares',
      description: 'Salud, relaciones, espiritualidad, propósito, finanzas. Todo está conectado.',
    },
    {
      title: 'Crear al masculino que deseás ser',
      description: 'Tu mejor versión. No la que te impusieron, sino la que elegís.',
    },
  ];

  return (
    <section className="benefits-section">
      <Container>
        <div className="benefits-intro">
          <h2 className="section-title">¿Qué vas a lograr al iniciar este camino?</h2>
          <p className="section-subtitle">
            No es solo un entrenamiento. Es una transformación real desde el Ser. Es alinearte con tu Ser.
          </p>
        </div>
        <div className="benefits-columns">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="team-section">
          <h3 className="team-title">Ganancias del Trabajo en Equipo</h3>
          <div className="team-list">
            <div className="team-item">Apertura y vulnerabilidad auténtica</div>
            <div className="team-item">Apoyo real de otros hombres en el camino</div>
            <div className="team-item">Comprensión y contención sin juicio</div>
            <div className="team-item">Feedback constante y honesto</div>
            <div className="team-item">Actualización permanente de herramientas</div>
            <div className="team-item">Contacto directo con Urko</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
