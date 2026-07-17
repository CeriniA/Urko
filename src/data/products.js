const WHATSAPP_GENERIC = 'https://wa.me/5493492210169?text=Buen%20d%C3%ADa%20Urko.%0A%0AMi%20nombre%20es%3A%20...%0A%0AQuisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20este%20programa%20espec%C3%ADfico%3A%20...';

// WhatsApp links específicos por programa
const WHATSAPP_PROGRAMA_FUNDAMENTAL = 'https://wa.me/5493492210169?text=Buen%20d%C3%ADa%20Urko.%0A%0AMi%20nombre%20es%3A%20...%0A%0AQuisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20este%20programa%20espec%C3%ADfico%3A%20Programa%20Fundamental';

const WHATSAPP_INTENSIVO_TRIMESTRAL = 'https://wa.me/5493492210169?text=Buen%20d%C3%ADa%20Urko.%0A%0AMi%20nombre%20es%3A%20...%0A%0AQuisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20este%20programa%20espec%C3%ADfico%3A%20Intensivo%20Trimestral';

const WHATSAPP_ESCUELA_ANUAL = 'https://wa.me/5493492210169?text=Buen%20d%C3%ADa%20Urko.%0A%0AMi%20nombre%20es%3A%20...%0A%0AQuisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20este%20programa%20espec%C3%ADfico%3A%20Escuela%20Urko%20Anual';

const WHATSAPP_ACOMPANAMIENTO_PRIVADO = 'https://wa.me/5493492210169?text=Buen%20d%C3%ADa%20Urko.%0A%0AMi%20nombre%20es%3A%20...%0A%0AQuisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20este%20programa%20espec%C3%ADfico%3A%20Acompa%C3%B1amiento%20Privado';

const products = [
  // RECURSOS GRATUITOS
  {
    id: 'free-guide',
    title: 'Guía Gratuita: 10 Pasos para Superar EP/DE',
    description: 'Descargá gratis la guía completa con los 10 pasos fundamentales del Método Urko para superar la eyaculación precoz y disfunción eréctil.',
    pdfLink: '#',
    videoLink: '#',
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
    amazonLink: 'https://www.amazon.com/dp/B0H37GCFQN/',
    appleLink: 'https://books.apple.com/ar/book/si-yo-pude-vos-pod%C3%A9s/id6774260362',
    googlePlayLink: 'https://play.google.com/store/books/details?id=gr7eEQAAQBAJ&gl=ar',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-b417ca72-c711-4e4b-b0ac-d272a0621f92',
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
    amazonLink: 'https://www.amazon.com/dp/B0H37KXDZ6/',
    appleLink: 'https://books.apple.com/ar/book/entrenamiento-urko/id6774260595',
    googlePlayLink: 'https://play.google.com/store/books/details?id=8b3eEQAAQBAJ&gl=ar',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-53cf127f-2ddf-4537-b71c-5cfe7acb10f5',
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
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-ce22eafa-f3ac-4ad4-ad88-eaf8068fb725',
    paypalScriptId: 'paypal-pack-libros',
    category: 'books',
    isSpecial: true,
    isHidden: true,
  },

  // PROGRAMAS DE ENTRENAMIENTO
  {
    id: 'programa-fundamental',
    title: 'Programa Fundamental',
    icon: '🔹',
    price: 369,
    currency: 'USD',
    description: 'Para hombres que quieren empezar a trabajar seriamente en su proceso a su propio ritmo. El acceso al curso se entrega vía Google Drive con toda la información.',
    subtitle: 'Para hombres que pueden sostener su entrenamiento sin acompañamiento.',
    access: '🔓 Acceso inmediato al Drive con todo el material.',
    includes: [
      'Método Urko completo.',
      'Protocolos y ejercicios prácticos.',
      'Biblioteca Urko.'
    ],
    bonus: [
      '30 días dentro de Escuela Urko.',
      '2 videollamadas grupales de exposición y consulta.',
      'Acceso a "La senda del varón presente" — Comunidad privada de trabajo.'
    ],
    idealFor: 'Ideal para quienes necesitan algo más estructurado que información, pero todavía no buscan acompañamiento continuo.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-867592ff-f537-416f-b9bb-9c9c3ae882c0',
    paypalScriptId: 'paypal-programa-fundamental',
    whatsappLink: WHATSAPP_PROGRAMA_FUNDAMENTAL,
    buttonText: 'Comenzar ahora',
    buttonType: 'buy',
    category: 'programs',
  },
  {
    id: 'intensivo-trimestral',
    title: 'Intensivo Trimestral',
    icon: '🔥',
    price: 750,
    currency: 'USD',
    description: 'Un proceso grupal de 90 días para hombres que quieren recuperar control, presencia y seguridad masculina de forma guiada y estructurada. La idea no es solamente mejorar el rendimiento íntimo: es reconstruir seguridad, estabilidad y presencia masculina desde la raíz.',
    subtitle: 'Durante 3 meses trabajamos: regulación emocional y sexual, ansiedad sexual y pérdida de control, reconexión cuerpo-mente, presencia masculina, hábitos y dirección personal.',
    access: '🔓 Acceso al Drive con el programa completo + grabaciones.',
    includes: [
      'Programa completo Método Urko.',
      'Calendario de práctica.',
      '6 encuentros grupales en vivo.',
      'Espacio de integración y consultas.',
      'Comunidad privada.'
    ],
    bonus: [
      '1 sesión privada 1 a 1.',
      'Acceso a grabaciones anteriores.'
    ],
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-40b11e3b-cff5-4358-91af-586029499add',
    paypalScriptId: 'paypal-intensivo-trimestral',
    whatsappLink: WHATSAPP_INTENSIVO_TRIMESTRAL,
    buttonText: 'Ingresar al Intensivo',
    buttonType: 'buy',
    category: 'programs',
  },
  {
    id: 'escuela-urko-anual',
    title: 'Escuela Urko Anual',
    icon: '🔸',
    price: 1000,
    currency: 'USD',
    description: 'Nuestro espacio principal de acompañamiento y transformación masculina. El acceso al material y comunidad se entrega vía Google Drive.',
    subtitle: 'Pensado para hombres que quieren sostener cambios reales y construir presencia, seguridad y dirección masculina a largo plazo.',
    access: '🔓 Acceso al Drive con todo el material del año.',
    includes: [
      'Método Urko completo.',
      'Comunidad privada.',
      '2 encuentros grupales por mes (24 al año).',
      'Biblioteca completa.',
      'Actualizaciones futuras.'
    ],
    bonus: [
      'Sesión inicial 1 a 1.',
      'Sesión estratégica 1 a 1 durante el año.'
    ],
    idealFor: 'Para hombres que quieren sostener cambios reales y construir presencia, seguridad y dirección masculina a largo plazo.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=3020489059-c96c880a-ccc5-4c55-8678-ce0ef2c1e37a',
    paypalScriptId: 'paypal-escuela-anual',
    whatsappLink: WHATSAPP_ESCUELA_ANUAL,
    buttonText: 'Ingresar a la Escuela Anual',
    buttonType: 'buy',
    recommended: true,
    category: 'programs',
  },
  {
    id: 'acompanamiento-individual',
    title: 'Acompañamiento Privado',
    icon: '🔒',
    price: null,
    currency: 'USD',
    description: 'El nivel más personalizado dentro del Ecosistema Urko. Un proceso diseñado para hombres que quieren trabajar de forma directa conmigo para recuperar control, seguridad, presencia y dirección masculina. Cada proceso comienza con una evaluación personalizada para comprender tu situación y recomendar el nivel de acompañamiento más adecuado según tus objetivos, el momento que estás atravesando y el tipo de seguimiento que necesitás.',
    subtitle: 'Acceso solo mediante evaluación previa. Este no es un programa estándar: es un proceso de reconstrucción masculina diseñado específicamente para vos.',
    access: 'Aplicación previa requerida.',
    includes: [
      'Trabajo completamente personalizado.',
      'Acceso al Método Urko.',
      'Seguimiento y acompañamiento directo.',
      'Plan de trabajo adaptado a tu proceso.',
      'Posibilidad de encuentros presenciales (según disponibilidad).'
    ],
    whatsappLink: WHATSAPP_ACOMPANAMIENTO_PRIVADO,
    buttonText: 'Solicitar una entrevista',
    buttonType: 'whatsapp',
    category: 'programs',
  },
];

export default products;
export { WHATSAPP_GENERIC };
