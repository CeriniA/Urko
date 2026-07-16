import { WHATSAPP_GENERIC } from '../data/products';

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_GENERIC}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsAppFloat;
