import Container from 'react-bootstrap/Container';
import products from '../data/products';

const FreeResources = () => {
  const free = products.find((item) => item.id === 'free');

  if (!free) return null;

  return (
    <section id="recursos" className="free-resources-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Recursos gratuitos para empezar hoy</h2>
          <p className="section-subtitle">
            Accedé al material y comenzá a entrenar tu presencia, energía y enfoque
          </p>
        </div>
        <div className="free-resources-grid">
          {free.driveLinks.map((link) => (
            <div key={link.url} className="free-resource-card">
              <div className="free-resource-header">
                <h3 className="free-resource-title">{link.label}</h3>
              </div>
              <div className="free-resource-body">
                <p className="free-resource-description">
                  Material descargable para comenzar tu transformación
                </p>
                <a
                  className="free-resource-button"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir en Google Drive →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FreeResources;
