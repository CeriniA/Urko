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
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=2995219259-99427f1c-70e3-4ee3-a446-d9fc334340c2',
    paypalScriptId: 'paypal-books',
  },
  {
    id: 'intensive',
    title: 'Escuela 6 días – La Senda del Varón Presente',
    price: 39,
    currency: 'USD',
    description:
      'Fin de semana intensivo + 3 días de repaso. Incluye: Drive privado con video guía, guía escrita para 3 días de trabajo, ejercicios prácticos, video terapia del método y planilla de acción paso a paso. Transformá tu energía en solo 6 días.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=2995219259-85cb0d4a-7c93-4617-a39f-bee1f2c2568e',
    paypalScriptId: 'paypal-intensive',
  },
  {
    id: 'monthly',
    title: 'Acceso mensual (trabajo en solitario)',
    price: 69,
    currency: 'USD',
    description:
      'Drive privado, guía de trabajo, plan de acción, video terapia y biblioteca. Renovación mensual. No incluye videollamada con Urko ni acceso al grupo privado.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=2995219259-66cac267-0132-4b32-aed3-c765826d1ce1',
    paypalScriptId: 'paypal-monthly',
  },
  {
    id: 'quarterly',
    title: 'Acceso trimestral',
    price: 120,
    currency: 'USD',
    description: 'Pago único por 3 meses. Incluye: Drive privado, guía de trabajo, plan de acción, video terapia y biblioteca. No incluye videollamada con Urko ni acceso al grupo privado.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=2995219259-129bb7de-1b56-4317-9d0f-346e0ce1c172',
    paypalScriptId: 'paypal-quarterly',
  },
  {
    id: 'group',
    title: 'Trabajo grupal (3 meses)',
    price: 369,
    currency: 'USD',
    description:
      'Lo más recomendado. Grupo privado de trabajo, 2 llamadas 1 a 1 de inicio, seguimiento en equipo con enfoque individual, contacto directo por WhatsApp 24/7, 1 clase maestra quincenal grupal. Incluye plan mensual. Inversión única con posibilidad de renovación.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=2995219259-f907185d-44b6-41a8-85a9-741d282634ae',
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
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=2995219259-cf4baac0-abe2-44ec-abb0-f25bc3825c26',
    paypalScriptId: 'paypal-exclusive-full',
  },
  {
    id: 'exclusive-installments',
    title: 'Exclusivo 1 a 1 (3 meses) - 3 pagos mensuales',
    price: 369,
    currency: 'USD',
    description:
      'Mismo programa exclusivo, con opción de pago en 3 cuotas mensuales de $369 USD. Acompañamiento exclusivo: espacio íntimo y profundo, trabajo específico según tu caso, 2 videollamadas al mes, contacto directo vía WhatsApp, guía y herramientas personalizadas desde el cuerpo al espíritu. Coach para la vida, para la cama. Incluye acceso al trabajo grupal.',
    mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=2995219259-68f2ed20-e677-4a40-9dcd-6a034b80662e',
    paypalScriptId: 'paypal-exclusive-installments',
    badge: '3 cuotas',
  },
];

export default products;
