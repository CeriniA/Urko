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
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-49614842-ff67-44bb-8564-5bbd069aead7',
    paypalScriptId: 'paypal-libro-1',
    category: 'books',
  },
  {
    id: 'libro-2',
    title: 'El Entrenamiento Urko',
    price: 20,
    currency: 'USD',
    description: 'La guía definitiva de 10 pasos para el vigor masculino. Sistematización completa del método tántrico-taoísta aplicado.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-43a6f7d1-e18f-46ca-9687-3d759e114429',
    paypalScriptId: 'paypal-libro-2',
    category: 'books',
  },
  {
    id: 'pack-libros',
    title: 'Pack Completo de Libros',
    price: 30,
    currency: 'USD',
    description: 'Ambos libros en un solo pack con precio especial.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-822ae480-3626-4abd-8084-588f201f1144',
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
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-743c0e4a-cbfe-4098-a3e4-4c9fb7ac203d',
    paypalScriptId: 'paypal-programa-fundamental',
    category: 'programs',
  },
  {
    id: 'entrenamiento-trimestral',
    title: 'ENTRENAMIENTO TRIMESTRAL',
    price: 497,
    currency: 'USD',
    description: 'Tres meses de estructura grupal con encuentros en vivo.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-65f0293c-20e2-4278-90cd-429026318fce',
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
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-5e5a96da-238c-428b-991c-ce4ef8029d65',
    paypalScriptId: 'paypal-proceso-acompanado',
    whatsappLink: 'https://wa.me/5493492210169?text=Hola,%20quiero%20información%20sobre%20el%20Proceso%20Acompañado',
    category: 'programs',
  },
  {
    id: 'acompanamiento-individual',
    title: 'ACOMPAÑAMIENTO INDIVIDUAL 1-1',
    price: 3000,
    currency: 'USD',
    description: 'Trabajo exclusivo y personalizado según tu caso específico.',
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfLX9CAuPe1KbbLUhiOoK8OiyzvyBxnV-49rRe0xVny_SzIUg/viewform',
    category: 'programs',
  },
];

export default products;
