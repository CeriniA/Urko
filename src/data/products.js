const products = [
  // RECURSOS GRATUITOS
  {
    id: 'free-beginners',
    title: 'Guía para principiantes',
    description: 'Comienza tu transformación con este entrenamiento gratuito. Tómalo como un regalo divino.',
    driveLinks: [
      {
        label: 'Acceder al entrenamiento',
        url: 'https://drive.google.com/drive/folders/1-z_BmV_TJ2WhzjCsQVxhD-DZFvRrbeEh?usp=drive_link',
      },
    ],
    category: 'free',
  },
  {
    id: 'free-couples',
    title: 'Guía para parejas',
    description: 'Prácticas y ejercicios para conectar con el placer sexual en pareja. ✅ Prácticas individuales para llevarlo al encuentro. ✅ Prácticas en equipo para vivir mejor.',
    driveLinks: [
      {
        label: 'Acceder a la guía',
        url: 'https://drive.google.com/drive/folders/12g02DC2gq6jJBBTPZy1ruAt-St580TMI',
      },
    ],
    category: 'free',
  },
  
  // LIBROS
  {
    id: 'book-si-yo-pude',
    title: 'Si yo pude, vos podes',
    price: 11,
    currency: 'USD',
    description: 'Guia testimonial de cómo transformar tu vida desde la sexualidad tántrica taoista en el mundo real.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-dcb07c33-8660-47bb-b539-ce5e5072bbb4',
    paypalScriptId: 'paypal-book-si-yo-pude',
    category: 'books',
  },
  {
    id: 'book-entrenamiento-urko',
    title: 'Entrenamiento URKO, El que no tiene maestro pierde',
    price: 11,
    currency: 'USD',
    description: '"El que no tiene maestro, pierde"\n\nEl camino del conocimiento se pasa de maestro alumno desde hace cientos o miles de años. Los secretos se develan al alumno, este toma el conocimiento de su maestro, lo entrena, lo practica, lo interioriza y lo traduce a sabiduría cuando empieza a vivir lo aprendido.\n\nEse conocimiento se solidifica y ese alumno pasa a ser un discípulo que conjuga ese saber con la experiencia propia, honrar el linaje y le suma valores para expandir la doctrina con tintes personales.\n\nLos tiempos cambian y adaptar el lenguaje es fundamental para no morir. Lo único permanente es el cambio. Lo vemos en la simplicidad de la naturaleza: la raíz es lo que sostiene el árbol en pie; mientras más profunda esa raíz, más frondosa será la copa que alberga a innumerables brotes.\n\nRomper creencias limitantes y trascender dolores es crecer y crecer es estar vivo; cuando entendemos este concepto todo en la vida progresa, avanzás.\n\nLa energía sexual es energía de vida; si se comprende y se vive en plenitud y consciencia todo se alinea para bien.\n\nTal vez leíste "Si yo pude vos podes", ese escrito es el puntapié de este entrenamiento.\n\nEspero ser tu maestro en este camino sin fin de conocer y conocernos. Apropiarte de este método y experimentarlo es la senda para gobernar tu poder sexual. Si así lo hacés entendiste todo lo necesario para vivir una vida plena y abundante.',
    mpLink: '#',
    paypalScriptId: 'paypal-book-entrenamiento-urko',
    category: 'books',
  },
  
  // PROGRAMAS
  {
    id: 'intensive',
    title: 'El hombre que despierta: 6 días para ganar',
    price: 39,
    currency: 'USD',
    description: '👉 Transformá tu energía por $39 USD\n\nINCLUYE:\n✅ Acceso privado al video guiado\n✅ Guía escrita para 3 días de trabajo\n✅ Ejercicios Prácticos\n✅ Video terapia del Método Urko\n✅ Planilla de acción para seguir el paso a paso\n\nSerán:\n💥3 días de acción explosiva\n🏋️‍♂️3 días de Repaso',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-e754d416-658b-4962-817f-1c05491f0788',
    paypalScriptId: 'paypal-intensive',
    category: 'programs',
  },
  {
    id: 'monthly',
    title: 'La Senda del Varón Presente - Mensual',
    price: 69,
    currency: 'USD',
    description: 'Si queres un cambio real y profundo, pero a tu ritmo, este ENTRENAMIENTO en formato solitario es para vos.\n\nINCLUYE:\n✅ Acceso al ENTRENAMIENTO Privado\n✅ Guía de Trabajo\n✅ Plan de Acción\n✅ Video terapia\n✅ Biblioteca\n\n*No incluye videollamada Con Urko, ni acceso al grupo Privado\n\nInicia el cambio acompañado por solo: $69 Dólares al mes.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-46a709dc-738c-47c3-a483-f333e5b35beb',
    paypalScriptId: 'paypal-monthly',
    category: 'programs',
  },
  {
    id: 'quarterly',
    title: 'La Senda del Varón Presente - Trimestral',
    price: 120,
    currency: 'USD',
    description: 'Pago único por 3 meses.\n\nINCLUYE:\n✅ Acceso al ENTRENAMIENTO Privado\n✅ Guía de Trabajo\n✅ Plan de Acción\n✅ Video terapia\n✅ Biblioteca\n\n*No incluye videollamada Con Urko, ni acceso al grupo Privado\n\n$120 Dólares x tres meses.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-302892a1-11c3-4bcb-9aae-c7bc32147e55',
    paypalScriptId: 'paypal-quarterly',
    category: 'programs',
  },
  {
    id: 'group',
    title: 'La Senda del Varón en Tribu',
    price: 369,
    currency: 'USD',
    description: 'Trabajo terapéutico grupal de 3 meses de duración.\n\nIncluye:\n✅ Acceso al grupo privado de trabajo\n✅ 2 llamadas 1 a 1 de inicio\n✅ Seguimiento en equipo, con enfoque individual\n✅ Contacto directo y permanente vía WhatsApp\n✅ 1 Clase maestra quincenal de preguntas y respuestas - grupal -\n✅ Incluye el PROGRAMA la senda del varón presente\n\nInversión única, Cambia tu vida x solo $369 USD.\n\nGanancias de trabajar EN EQUIPO:\n✔️ Apertura\n✔️ Apoyo real\n✔️ Comprensión y contención\n✔️ Feedback constante\n✔️ Actualización permanente\n✔️ Contacto directo con Urko',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-40b5bb38-f8e4-4d77-a9cd-2c2dffa709c4',
    paypalScriptId: 'paypal-group',
    recommended: true,
    category: 'programs',
  },
  {
    id: 'exclusive-full',
    title: 'El camino del Hombre Superior - Pago único',
    price: 999,
    currency: 'USD',
    description: 'Si queres un cambio real y profundo con acompañamiento terapéutico en equipo con enfoque personalizado, este programa es para vos.\n\nIncluye:\n✅ Exclusividad\n✅ Espacio íntimo y profundo\n✅ Trabajo específico según tu caso\n✅ Guía y herramientas personalizadas, desde el cuerpo al espíritu\n✅ Coach para la vida, y para la cama\n✅ 2 Video llamadas 1 a 1 al mes\n✅ Contacto directo vía Whatsapp\n\nInicia un cambio profundo: $999usd x 3 meses',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-aff17529-271f-4b06-bc69-6c6899f6ffa2',
    paypalScriptId: 'paypal-exclusive-full',
    category: 'programs',
  },
  {
    id: 'exclusive-installments',
    title: 'El camino del Hombre Superior - 3 pagos mensuales',
    price: 369,
    currency: 'USD',
    description: 'Mismo programa exclusivo, con opción de pago en 3 cuotas mensuales de $369 USD.\n\nIncluye:\n✅ Exclusividad\n✅ Espacio íntimo y profundo\n✅ Trabajo específico según tu caso\n✅ Guía y herramientas personalizadas, desde el cuerpo al espíritu\n✅ Coach para la vida, y para la cama\n✅ 2 Video llamadas 1 a 1 al mes\n✅ Contacto directo vía Whatsapp\n\nInicia un cambio profundo: $369usd x mes',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-4d31008e-8461-4b18-b6dd-b23ecd6667ea',
    paypalScriptId: 'paypal-exclusive-installments',
    badge: '3 cuotas',
    category: 'programs',
  },
];

export default products;
