import Container from 'react-bootstrap/Container';

const BenefitsSection = () => {
  // Lado Yang (Luz) - Transformaciones externas y activas
  const yangBenefits = [
    {
      title: 'Erradicar EP o DE',
      description: 'De raíz, para siempre',
    },
    {
      title: 'Recuperar tu identidad',
      description: 'Como hombre auténtico',
    },
    {
      title: 'Atraer mujeres de alto valor',
      description: 'Desde tu presencia',
    },
    {
      title: 'Dejar hábitos autodestructivos',
      description: 'Transformar tu energía',
    },
    {
      title: 'Mejoras en todos los pilares',
      description: 'Salud, relaciones, espiritualidad, propósito, finanzas',
    },
    {
      title: 'Crear al masculino que deseás ser',
      description: 'Tu mejor versión',
    },
  ];

  // Lado Yin (Sombra) - Transformaciones internas y receptivas
  const yinBenefits = [
    {
      title: 'Superar el miedo',
      description: 'En el encuentro sexoafectivo',
    },
    {
      title: 'Sanar dolor por ruptura',
      description: 'Liberarte de traumas',
    },
    {
      title: 'Retención consciente',
      description: 'Más presencia, menos eyaculaciones',
    },
    {
      title: 'Placer pleno',
      description: 'Más placer, más conexión',
    },
    {
      title: 'Sexualidad plena',
      description: 'Acompañar a tu mujer en sus orgasmos',
    },
    {
      title: 'Conciencia sexual',
      description: 'Es conciencia social',
    },
  ];

  return (
    <section className="benefits-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">¿Qué vas a lograr al iniciar este camino?</h2>
          <p className="section-subtitle">
            No es solo un entrenamiento. Es una transformación real desde el Ser. Es alinearte con tu Ser.
          </p>
        </div>
        
        <div className="yinyang-container">
          {/* Lado Yang - Luz/Activo */}
          <div className="yang-side">
            <div className="side-header">
              <h3 className="side-title">Yang · Acción</h3>
              <p className="side-subtitle">Transformación externa</p>
            </div>
            <div className="benefits-list">
              {yangBenefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <svg className="benefit-check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="benefit-content">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Símbolo Yin Yang Central */}
          <div className="yinyang-symbol">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2" fill="currentColor"/>
              <circle cx="50" cy="26" r="6" fill="var(--accent)"/>
              <circle cx="50" cy="74" r="6" fill="var(--yinyang-bg)"/>
            </svg>
          </div>

          {/* Lado Yin - Sombra/Receptivo */}
          <div className="yin-side">
            <div className="side-header">
              <h3 className="side-title">Yin · Receptividad</h3>
              <p className="side-subtitle">Transformación interna</p>
            </div>
            <div className="benefits-list">
              {yinBenefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <svg className="benefit-check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="benefit-content">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">Ganancias del Trabajo en Equipo</h3>
          <div className="team-list">
            <div className="team-item">
              <svg className="team-check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Apertura</span>
            </div>
            <div className="team-item">
              <svg className="team-check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Apoyo real</span>
            </div>
            <div className="team-item">
              <svg className="team-check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Comprensión y contención</span>
            </div>
            <div className="team-item">
              <svg className="team-check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Feedback constante</span>
            </div>
            <div className="team-item">
              <svg className="team-check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Actualización permanente</span>
            </div>
            <div className="team-item">
              <svg className="team-check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Contacto directo con Urko</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
