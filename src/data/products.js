const products = [
  // RECURSOS GRATUITOS
  {
    id: 'free-guide',
    title: 'Guía Gratuita: 10 Pasos para Superar EP/DE',
    description: 'Descargá gratis la guía completa con los 10 pasos fundamentales del Método Urko para superar la eyaculación precoz y disfunción eréctil.',
    pdfLink: '#', // AGREGAR LINK AL PDF
    videoLink: '#', // AGREGAR LINK AL VIDEO
    category: 'free',
  },
  
  // LIBROS
  {
    id: 'libro-1',
    title: 'Si yo pude, vos podés',
    price: 15, // ACTUALIZAR PRECIO
    currency: 'USD',
    description: 'Testimonio directo de transformación. Desde la pérdida de firmeza y la eyaculación precoz, hasta la recuperación del vigor masculino.',
    mpLink: '#', // AGREGAR LINK DE MERCADO PAGO
    paypalScriptId: 'paypal-libro-1',
    category: 'books',
  },
  {
    id: 'libro-2',
    title: 'El Entrenamiento Urko',
    price: 20, // ACTUALIZAR PRECIO
    currency: 'USD',
    description: 'La guía definitiva de 10 pasos para el vigor masculino. Sistematización completa del método tántrico-taoísta aplicado.',
    mpLink: '#', // AGREGAR LINK DE MERCADO PAGO
    paypalScriptId: 'paypal-libro-2',
    category: 'books',
  },
  {
    id: 'pack-libros',
    title: 'Pack Completo de Libros',
    price: 30, // ACTUALIZAR PRECIO
    currency: 'USD',
    description: 'Ambos libros en un solo pack con precio especial.',
    mpLink: '#', // AGREGAR LINK DE MERCADO PAGO
    paypalScriptId: 'paypal-pack-libros',
    category: 'books',
    isSpecial: true,
  },
  
  // PROGRAMAS DE ENTRENAMIENTO
  {
    id: 'programa-fundamental',
    title: 'PROGRAMA FUNDAMENTAL',
    price: 247,
    currency: 'USD',
    description: 'Acceso completo al método en formato autónomo.',
    mpLink: '#', // AGREGAR LINK DE MERCADO PAGO
    paypalScriptId: 'paypal-programa-fundamental',
    category: 'programs',
  },
  {
    id: 'entrenamiento-trimestral',
    title: 'ENTRENAMIENTO TRIMESTRAL',
    price: 497,
    currency: 'USD',
    description: 'Tres meses de estructura grupal con encuentros en vivo.',
    mpLink: '#', // AGREGAR LINK DE MERCADO PAGO
    paypalScriptId: 'paypal-entrenamiento-trimestral',
    recommended: true,
    category: 'programs',
  },
  {
    id: 'proceso-acompanado',
    title: 'PROCESO ACOMPAÑADO',
    price: 750,
    currency: 'USD',
    description: 'Tres meses con guía directa, seguimiento y videollamadas semanales.',
    whatsappLink: 'https://wa.me/5493492210169?text=Hola,%20quiero%20información%20sobre%20el%20Proceso%20Acompañado',
    category: 'programs',
  },
  {
    id: 'acompanamiento-individual',
    title: 'ACOMPAÑAMIENTO INDIVIDUAL 1-1',
    price: 3000,
    currency: 'USD',
    description: 'Trabajo exclusivo y personalizado según tu caso específico.',
    formLink: '#', // AGREGAR LINK AL FORMULARIO DE EVALUACIÓN
    category: 'programs',
  },
];

export default products;
