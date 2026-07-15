import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import products from '../data/products';
import libro1Img from '../assets/images/libro 1.png';
import libro2Img from '../assets/images/Libro 2.png';

const BibliotecaUrko = () => {
  const sectionRef = useRevealOnScroll();

  const books = products.filter(
    (product) => product.category === 'books' && product.isHidden !== true
  );

  return (
    <section ref={sectionRef} className="biblioteca-urko py-5" id="biblioteca">
      <Container>
        <h2 className="section-title text-center mb-4">Biblioteca Urko</h2>
        <p className="text-center lead mb-5 fst-italic">
          Cada libro es una senda.<br />
          Disciplina, conciencia y transformación masculina real.
        </p>

        <Row className="g-4">
          {books.map((book) => (
            <Col key={book.id} md={12} lg={book.isSpecial ? 12 : 6}>
              <div className={`libro-card h-100 p-4 ${book.isSpecial ? 'libro-card--special' : ''}`}>
                <div className="libro-header mb-4">
                  {book.id === 'libro-1' && (
                    <img
                      src={libro2Img}
                      alt={book.title}
                      className="book-cover-img mb-3"
                      loading="lazy"
                      width="180"
                      height="270"
                    />
                  )}
                  {book.id === 'libro-2' && (
                    <img
                      src={libro1Img}
                      alt={book.title}
                      className="book-cover-img mb-3"
                      loading="lazy"
                      width="180"
                      height="270"
                    />
                  )}
                  <h4 className="libro-title libro-title--colored mb-3">{book.title}</h4>
                  {book.subtitle && <p className="libro-subtitle fst-italic mb-3">{book.subtitle}</p>}
                </div>

                <div className="libro-body mb-4">
                  <p className="mb-3">{book.description}</p>

                  {book.parts && (
                    <div className="mb-3">
                      <p className="fw-bold mb-2">El libro se divide en:</p>
                      <ul>
                        {book.parts.map((part, idx) => (
                          <li key={idx}>{part}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {book.includes && (
                    <div className="mb-3">
                      <p className="fw-bold mb-2">Contiene:</p>
                      <ul>
                        {book.includes.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {book.features && (
                    <ul className="mb-3">
                      {book.features.map((feature, idx) => (
                        <li key={idx}><strong>{feature}</strong></li>
                      ))}
                    </ul>
                  )}

                  {book.conclusion && (
                    <p className="fst-italic mb-3">{book.conclusion}</p>
                  )}
                </div>

                <div className="libro-footer">
                  <div className="d-grid gap-2">
                    {book.amazonLink && (
                      <a
                        href={book.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-warning text-dark fw-bold"
                      >
                        🛒 Comprar en Amazon
                      </a>
                    )}
                    {book.appleLink && (
                      <a
                        href={book.appleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark fw-bold"
                      >
                        🍎 Comprar en Apple Books
                      </a>
                    )}
                    {book.googlePlayLink && (
                      <a
                        href={book.googlePlayLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success fw-bold"
                      >
                        ▶ Comprar en Google Play
                      </a>
                    )}
                  </div>
                </div>

                {book.testimonials && (
                  <div className="libro-testimonials mt-4">
                    <h5 className="mb-3">Testimonios</h5>
                    <Row className="g-3">
                      {book.testimonials.map((testimonial) => (
                        <Col key={testimonial.id} md={12}>
                          <div className="testimonial-mini p-3">
                            <p className="mb-0 fst-italic">"{testimonial.text}"</p>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BibliotecaUrko;
