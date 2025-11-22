import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import products from '../data/products';

const FreeResources = () => {
  const free = products.find((item) => item.id === 'free');

  if (!free) return null;

  return (
    <section id="recursos" className="text-light">
      <h2 className="section-title text-center mb-4">Recursos gratuitos para empezar hoy</h2>
      <Row className="g-4">
        {free.driveLinks.map((link) => (
          <Col key={link.url} xs={12} md={4}>
            <Card className="h-100 bg-transparent border border-light-subtle shadow-sm">
              <Card.Body>
                <Card.Title>{link.label}</Card.Title>
                <Card.Text>
                  Accedé al material y comenzá a entrenar tu presencia, energía y enfoque.
                </Card.Text>
                <a
                  className="stretched-link text-decoration-none fw-semibold"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir en Google Drive →
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default FreeResources;
