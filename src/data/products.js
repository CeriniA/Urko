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
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-dcb07c33-8660-47bb-b539-ce5e5072bbb4',
    paypalScriptId: 'paypal-books',
  },
  {
    id: 'intensive',
    title: 'Escuela 6 días – La Senda del Varón Presente',
    price: 39,
    currency: 'USD',
    description:
      'Fin de semana intensivo + 3 días de repaso. Incluye: Drive privado con video guía, guía escrita para 3 días de trabajo, ejercicios prácticos, video terapia del método y planilla de acción paso a paso. Transformá tu energía en solo 6 días.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-e754d416-658b-4962-817f-1c05491f0788',
    paypalScriptId: 'paypal-intensive',
  },
  {
    id: 'monthly',
    title: 'Acceso mensual (trabajo en solitario)',
    price: 69,
    currency: 'USD',
    description:
      'Drive privado, guía de trabajo, plan de acción, video terapia y biblioteca. Renovación mensual. No incluye videollamada con Urko ni acceso al grupo privado.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-46a709dc-738c-47c3-a483-f333e5b35beb',
    paypalScriptId: 'paypal-monthly',
  },
  {
    id: 'quarterly',
    title: 'Acceso trimestral',
    price: 120,
    currency: 'USD',
    description: 'Pago único por 3 meses. Incluye: Drive privado, guía de trabajo, plan de acción, video terapia y biblioteca. No incluye videollamada con Urko ni acceso al grupo privado.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-302892a1-11c3-4bcb-9aae-c7bc32147e55',
    paypalScriptId: 'paypal-quarterly',
  },
  {
    id: 'group',
    title: 'Trabajo grupal (3 meses)',
    price: 369,
    currency: 'USD',
    description:
      'Lo más recomendado. Grupo privado de trabajo, 2 llamadas 1 a 1 de inicio, seguimiento en equipo con enfoque individual, contacto directo por WhatsApp 24/7, 1 clase maestra quincenal grupal. Incluye plan mensual. Inversión única con posibilidad de renovación.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-40b5bb38-f8e4-4d77-a9cd-2c2dffa709c4',
    paypalScriptId: 'paypal-group',
    recommended: true,
  },
  {
    id: 'exclusive-full',
    title: 'Exclusivo 1 a 1 (3 meses) - Pago único',
    price: 999,
    currency: 'USD',
    description:
      'Acompañamiento exclusivo: espacio íntimo y profundo, trabajo específico según tu caso, 2 videollamadas al mes, contacto directo vía WhatsApp, guía y herramientas personalizadas desde el cuerpo al espíritu. Coach para la vida, para la cama. Incluye acceso al trabajo grupal. Pago único de $999 USD.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-aff17529-271f-4b06-bc69-6c6899f6ffa2',
    paypalScriptId: 'paypal-exclusive-full',
  },
  {
    id: 'exclusive-installments',
    title: 'Exclusivo 1 a 1 (3 meses) - 3 pagos mensuales',
    price: 369,
    currency: 'USD',
    description:
      'Mismo programa exclusivo, con opción de pago en 3 cuotas mensuales de $369 USD. Acompañamiento exclusivo: espacio íntimo y profundo, trabajo específico según tu caso, 2 videollamadas al mes, contacto directo vía WhatsApp, guía y herramientas personalizadas desde el cuerpo al espíritu. Coach para la vida, para la cama. Incluye acceso al trabajo grupal.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=28966409-4d31008e-8461-4b18-b6dd-b23ecd6667ea',
    paypalScriptId: 'paypal-exclusive-installments',
    badge: '3 cuotas',
  },
];

export default products;
