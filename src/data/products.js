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
    icon: '📘',
    title: 'Libro 1: Si yo pude, vos podés',
    price: 11,
    currency: 'USD',
    description: 'Una guía testimonial y práctica. En este libro relato mi proceso real de transformación: desde la disfunción y la desconexión hasta el encuentro con mi maestro y la doctrina tántrico–taoísta.',
    subtitle: 'No es solo una historia. Desde las primeras páginas encontrarás herramientas concretas para comenzar a aplicar.',
    parts: [
      'Primera parte: el recorrido personal y el cambio de paradigma.',
      'Segunda parte: técnicas prácticas y una guía clara para llevar lo aprendido al encuentro íntimo con una mujer.'
    ],
    conclusion: 'Es el puente entre la identificación y la acción.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-0a3d0046-ad76-4be8-a1dc-e306b96becde',
    paypalScriptId: 'paypal-libro-1',
    category: 'books',
    testimonials: [
      { 
        id: 1, 
        text: 'Te agradezco de corazón. Lo puse en práctica. Y volví a enamorar a mi mujer!!! Estoy trabajando mucho para seguir mejorando y voy a leerlo de nuevo... pero mejore notablemente.... y me gustaría tener una charla con vos...',
        author: 'Lector del libro'
      }
    ]
  },
  {
    id: 'libro-2',
    icon: '📕',
    title: 'Libro 2: Entrenamiento Urko',
    subtitle: '"El que no tiene maestro, pierde."',
    price: 11,
    currency: 'USD',
    description: 'Este libro sistematiza el método Urko.',
    includes: [
      'Técnicas centrales de la doctrina tántrico–taoísta',
      'Ejercicios desarrollados desde mi experiencia directa',
      'Adaptaciones prácticas para la realidad del varón actual',
      'Protocolos progresivos de entrenamiento'
    ],
    conclusion: 'Es un manual de práctica. Claro, directo y aplicable. Diseñado para hombres que buscan disciplina, estructura y resultados.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-54d7b06d-d9e9-4712-b8d6-c7db21b24b49',
    paypalScriptId: 'paypal-libro-2',
    category: 'books',
    testimonials: [
      { 
        id: 1, 
        text: 'Hola quería decirte que seguí la guía y funcionó!! Padecía EP, pero seguir los pasos hizo que pueda disfrutar de los encuentros. Un saludo! Muchas gracias!! Solucioné un problema que últimamente me hacía ganas de no estar con mujeres, pero ahora todo es distinto. Sos crack!',
        author: 'Lector del libro'
      }
    ]
  },
  {
    id: 'pack-libros',
    icon: '📚',
    title: 'Pack x 2: "Si yo pude, vos podes" + "Entrenamiento Urko"',
    price: 18,
    currency: 'USD',
    description: 'Ambos libros que pueden leerse por separado pero juntos forman el proceso completo:',
    features: [
      'Conciencia + Método',
      'Historia + Sistema',
      'Identificación + Entrenamiento'
    ],
    conclusion: 'Si querés entender el camino y aplicarlo con estructura, este es el formato recomendado.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-71721602-0f63-454d-82e5-f7eb0bc7d7bb',
    paypalScriptId: 'paypal-pack-libros',
    category: 'books',
    isSpecial: true,
  },
  
  // PROGRAMAS DE ENTRENAMIENTO
  {
    id: 'programa-fundamental',
    title: 'PROGRAMA FUNDAMENTAL',
    icon: '🔹',
    price: 369,
    currency: 'USD',
    description: 'El punto de partida estructurado para iniciar tu proceso con autonomía y disciplina personal.',
    subtitle: 'Para hombres que pueden sostener su entrenamiento sin acompañamiento.',
    access: '🔓 Acceso inmediato.',
    includes: [
      'Método completo paso a paso.',
      'Protocolos prácticos.',
      'Ejercicios progresivos.',
      'Actualizaciones futuras.',
      'Acceso de por vida.'
    ],
    notIncludes: 'No incluye acompañamiento personalizado.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-4a623548-8bf3-4a06-b6a1-642b58c10a73',
    paypalScriptId: 'paypal-programa-fundamental',
    buttonText: 'Comenzar ahora',
    buttonType: 'buy',
    category: 'programs',
  },
  {
    id: 'entrenamiento-trimestral',
    title: 'ENTRENAMIENTO TRIMESTRAL',
    icon: '🔸',
    price: 750,
    currency: 'USD',
    description: 'Para quienes desean más orden y dinámica grupal sin ingresar aún al proceso completo acompañado. Ideal si buscás estructura y ritmo sin seguimiento individual.',
    includes: [
      'Acceso completo al Programa Fundamental',
      'Calendario de práctica definido.',
      '6 encuentros grupales en vivo.',
      'Espacio de integración y consultas generales.',
      'Plan estructurado de 90 días.'
    ],
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-8f8ef519-92c0-4a71-b791-de49317127c7',
    paypalScriptId: 'paypal-entrenamiento-trimestral',
    buttonText: 'Ingresar al Intensivo',
    buttonType: 'buy',
    recommended: true,
    category: 'programs',
  },
  {
    id: 'proceso-acompanado',
    title: 'PROCESO TRIMESTRAL ACOMPAÑADO',
    icon: '🔥',
    price: 1500,
    currency: 'USD',
    description: 'La experiencia completa de la Escuela Urko.',
    subtitle: 'Tres meses de evolución progresiva diseñados para llevarte desde el punto cero hasta el dominio total. Con acompañamiento real en grupos reducidos. Cupos limitados por cohorte.',
    includes: [
      'Videollamadas semanales.',
      'Seguimiento durante el proceso.',
      'Correcciones y guía directa.',
      'Plan estructurado de 90 días.'
    ],
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-23a5976f-0d7b-4e8b-a29b-14df98804696',
    paypalScriptId: 'paypal-proceso-acompanado',
    whatsappLink: 'https://wa.me/5491234567890',
    buttonText: 'Aplicar al proceso',
    buttonType: 'whatsapp',
    category: 'programs',
  },
  {
    id: 'acompanamiento-individual',
    title: 'ACOMPAÑAMIENTO INDIVIDUAL 1-1',
    icon: '🔒',
    price: null,
    currency: 'USD',
    description: 'Modalidad personalizada para quienes requieren profundidad y seguimiento directo.',
    subtitle: 'Acceso solo mediante evaluación previa.',
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfLX9CAuPe1KbbLUhiOoK8OiyzvyBxnV-49rRe0xVny_SzIUg/viewform',
    buttonText: 'Solicitar evaluación',
    buttonType: 'form',
    category: 'programs',
  },
];

export default products;
