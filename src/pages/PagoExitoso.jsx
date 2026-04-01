import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const PagoExitoso = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const paymentId = searchParams.get('payment_id');
  const status = searchParams.get('status');
  const externalReference = searchParams.get('external_reference');

  useEffect(() => {
    // Aquí podrías enviar los datos a tu backend o analytics
    console.log('Pago exitoso:', { paymentId, status, externalReference });
    
    // Opcional: redirigir a home después de 5 segundos
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [paymentId, status, externalReference, navigate]);

  return (
    <section className="py-5 min-vh-100 d-flex align-items-center">
      <Container>
        <div className="text-center">
          <div className="mb-4">
            <span style={{ fontSize: '5rem' }}>✅</span>
          </div>
          <h1 className="display-4 mb-4">¡Pago Exitoso!</h1>
          <p className="lead mb-4">
            Tu pago ha sido procesado correctamente.
          </p>
          
          {paymentId && (
            <div className="mb-4">
              <p className="text-muted">
                <strong>ID de pago:</strong> {paymentId}
              </p>
              {externalReference && (
                <p className="text-muted">
                  <strong>Producto:</strong> {externalReference}
                </p>
              )}
            </div>
          )}

          <div className="alert alert-info mx-auto" style={{ maxWidth: '600px' }}>
            <p className="mb-0">
              <strong>📧 Próximos pasos:</strong><br />
              Recibirás un email con los detalles de tu compra y las instrucciones de acceso.
            </p>
          </div>

          <button 
            onClick={() => navigate('/')} 
            className="btn btn-primary btn-lg mt-4"
          >
            Volver al inicio
          </button>
        </div>
      </Container>
    </section>
  );
};

export default PagoExitoso;
