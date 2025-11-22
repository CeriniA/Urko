const products = [
  {
    id: 'free',
    title: 'Material gratuito',
    description:
      'Entrenamiento libre organizado, guía para conectar con el placer en pareja y biblioteca de alto valor.',
    driveLinks: [
      {
        label: 'Entrenamiento completo organizado',
        url: 'https://drive.google.com/drive/folders/1-z_BmV_TJ2WhzjCsQVxhD-DZFvRrbeEh?usp=drive_link',
      },
      {
        label: 'Guía gratuita de placer en pareja',
        url: 'https://drive.google.com/drive/folders/12g02DC2gq6jJBBTPZy1ruAt-St580TMI',
      },
      // {
      //   label: 'Biblioteca de alto valor',
      //   url: 'https://drive.google.com/drive/folders/1_7qycbclfeKIouXphSbnSgcjwVcK2PXV?usp=drive_link',
      // },
    ],
  },
  {
    id: 'books',
    title: 'Libros digitales',
    price: 11,
    currency: 'USD',
    description: 'Libros Urko en formato digital. Pago único por cada libro disponible.',
    mpLink: 'https://www.mercadopago.com.ar/checkout-libros-urko',
    paypalScriptId: 'paypal-books',
  },
  {
    id: 'intensive',
    title: 'Escuela 6 días – La Senda del Varón Presente',
    price: 39,
    currency: 'USD',
    description:
      'Fin de semana intensivo + 3 días de repaso. Guía escrita, ejercicios prácticos, video terapia y plan de acción.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=2995219259-7d8e60ed-2334-4508-a2ae-b8e49c9e2b7f',
    paypalScriptId: 'paypal-intensive',
  },
  {
    id: 'monthly',
    title: 'Acceso mensual + comunidad',
    price: 69,
    currency: 'USD',
    description:
      'Drive privado, guía de trabajo, video terapia y acceso a la comunidad (sin interacción obligatoria).',
    mpLink: 'https://www.mercadopago.com.ar/checkout-acceso-mensual',
    paypalScriptId: 'paypal-monthly',
  },
  {
    id: 'quarterly',
    title: 'Acceso trimestral',
    price: 120,
    currency: 'USD',
    description: 'Pago único por 3 meses. Incluye todos los beneficios del acceso mensual.',
    mpLink: 'https://www.mercadopago.com.ar/checkout-acceso-trimestral',
    paypalScriptId: 'paypal-quarterly',
  },
  {
    id: 'group',
    title: 'Trabajo grupal (3 meses)',
    price: 369,
    currency: 'USD',
    description:
      'Grupo privado, 2 llamadas 1 a 1 de inicio, seguimiento en equipo, clases maestras quincenales e incluye plan mensual.',
    mpLink: 'https://www.mercadopago.com.ar/checkout-trabajo-grupal',
    paypalScriptId: 'paypal-group',
  },
  {
    id: 'exclusive',
    title: 'Exclusivo 1 a 1 (3 meses)',
    price: 999,
    currency: 'USD',
    description:
      'Acompañamiento 1 a 1: sesiones profundas, guía personalizada desde el cuerpo al espíritu y acceso total a planes anteriores.',
    mpLink: 'https://www.mercadopago.com.ar/checkout-exclusivo-1a1',
    paypalScriptId: 'paypal-exclusive',
  },
];

export default products;
