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
    price: 15,
    currency: 'USD',
    description: 'Testimonio directo de transformación. Desde la pérdida de firmeza y la eyaculación precoz, hasta la recuperación del vigor masculino.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-ce6d06dd-1ae5-4514-99a1-0aa3d66f40e5',
    paypalScriptId: 'paypal-libro-1',
    category: 'books',
  },
  {
    id: 'libro-2',
    title: 'El Entrenamiento Urko',
    price: 20,
    currency: 'USD',
    description: 'La guía definitiva de 10 pasos para el vigor masculino. Sistematización completa del método tántrico-taoísta aplicado.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-ee9b3c15-b9e6-464b-9ebe-078807a7299b',
    paypalScriptId: 'paypal-libro-2',
    category: 'books',
  },
  {
    id: 'pack-libros',
    title: 'Pack Completo de Libros',
    price: 30,
    currency: 'USD',
    description: 'Ambos libros en un solo pack con precio especial.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-49bb77e3-45a3-4a6e-9be4-b3a64151e513',
    paypalScriptId: 'paypal-pack-libros',
    category: 'books',
    isSpecial: true,
  },
  
  // PROGRAMAS DE ENTRENAMIENTO
  {
    id: 'programa-fundamental',
    title: 'PROGRAMA FUNDAMENTAL',
    price: 369,
    currency: 'USD',
    description: 'Acceso completo al método en formato autónomo.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-6e6dabc5-2600-4380-8c4d-5d27aee5e100',
    paypalScriptId: 'paypal-programa-fundamental',
    category: 'programs',
  },
  {
    id: 'entrenamiento-trimestral',
    title: 'ENTRENAMIENTO TRIMESTRAL',
    price: 750,
    currency: 'USD',
    description: 'Tres meses de estructura grupal con encuentros en vivo.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-f3f928a3-9f29-4685-848b-6027f12ce5d0',
    paypalScriptId: 'paypal-entrenamiento-trimestral',
    recommended: true,
    category: 'programs',
  },
  {
    id: 'proceso-acompanado',
    title: 'PROCESO ACOMPAÑADO',
    price: 1500,
    currency: 'USD',
    description: 'Tres meses con guía directa, seguimiento y videollamadas semanales.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-3635fdeb-8f40-442f-8149-3c8c98c139aa',
    paypalScriptId: 'paypal-proceso-acompanado',
    whatsappLink: 'https://wa.me/5493492210169?text=Hola,%20quiero%20información%20sobre%20el%20Proceso%20Acompañado',
    category: 'programs',
  },
  {
    id: 'acompanamiento-individual',
    title: 'ACOMPAÑAMIENTO INDIVIDUAL 1-1',
    price: null,
    currency: 'USD',
    description: 'Trabajo exclusivo y personalizado según tu caso específico.',
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfLX9CAuPe1KbbLUhiOoK8OiyzvyBxnV-49rRe0xVny_SzIUg/viewform',
    category: 'programs',
  },
];

export default products;
