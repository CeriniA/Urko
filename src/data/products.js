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
    price: 11,
    currency: 'USD',
    description: 'Testimonio directo de transformación. Desde la pérdida de firmeza y la eyaculación precoz, hasta la recuperación del vigor masculino.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-0a3d0046-ad76-4be8-a1dc-e306b96becde',
    paypalScriptId: 'paypal-libro-1',
    category: 'books',
  },
  {
    id: 'libro-2',
    title: 'El Entrenamiento Urko',
    price: 11,
    currency: 'USD',
    description: 'La guía definitiva de 10 pasos para el vigor masculino. Sistematización completa del método tántrico-taoísta aplicado.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-54d7b06d-d9e9-4712-b8d6-c7db21b24b49',
    paypalScriptId: 'paypal-libro-2',
    category: 'books',
  },
  {
    id: 'pack-libros',
    title: 'Pack Completo de Libros',
    price: 18,
    currency: 'USD',
    description: 'Ambos libros en un solo pack con precio especial.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-71721602-0f63-454d-82e5-f7eb0bc7d7bb',
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
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-4a623548-8bf3-4a06-b6a1-642b58c10a73',
    paypalScriptId: 'paypal-programa-fundamental',
    category: 'programs',
  },
  {
    id: 'entrenamiento-trimestral',
    title: 'ENTRENAMIENTO TRIMESTRAL',
    price: 750,
    currency: 'USD',
    description: 'Tres meses de estructura grupal con encuentros en vivo.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-8f8ef519-92c0-4a71-b791-de49317127c7',
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
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-23a5976f-0d7b-4e8b-a29b-14df98804696',
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
