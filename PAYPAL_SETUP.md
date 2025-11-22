# Configuración de PayPal en Urko Landing

## 1. Qué se modificó

### Archivos actualizados:
- `src/components/OffersSection.jsx`:
  - Agregado `custom_id: product.id` en la creación de órdenes PayPal.
  - Eliminado botón placeholder "Pagar con PayPal" que solo llevaba a login.
  - Los botones PayPal ahora solo aparecen cuando `VITE_PAYPAL_CLIENT_ID` está configurado.

### Archivos creados:
- `.env.example`: Template de variables de entorno.
- `PAYPAL_SETUP.md`: Esta documentación.

## 2. Cómo funciona

### Frontend (Landing):
1. Cada producto en `src/data/products.js` tiene:
   - `id`: código del producto (ej: `books`, `intensive`, etc.)
   - `price`: precio en USD
   - `paypalScriptId`: ID del div donde se renderiza el botón PayPal

2. El componente `OffersSection`:
   - Carga el SDK de PayPal con tu `VITE_PAYPAL_CLIENT_ID`.
   - Renderiza un botón PayPal por cada producto.
   - Al crear la orden, incluye:
     - `amount`: precio del producto
     - `custom_id`: ID del producto (usado en Make para rutear emails)

3. Cuando el usuario paga:
   - PayPal captura el pago.
   - PayPal envía un webhook REST a Make.
   - El usuario ve un mensaje de confirmación.

### Backend (Make):
- El webhook de PayPal llega a Make con:
  - `event_type`: tipo de evento (ej: `PAYMENT.CAPTURE.COMPLETED`)
  - `resource.id`: ID de la captura/orden
  - `purchase_units[0].custom_id`: el ID del producto (ej: `books`)
  
- Make procesa igual que con Mercado Pago:
  - Data Store para deduplicación.
  - Router por estado (completed/denied/pending).
  - Router por producto usando `custom_id`.
  - Envío de emails con accesos.

## 3. Configuración necesaria

### En tu `.env`:
```env
VITE_PAYPAL_CLIENT_ID=Ac-fZk2fHH6Tvd3cEeayATv3OYIW6e3Q4e7jpK7SWuLBWpaOnyWU1CCiLb9QHZQ5JPACApcg8J4ME8Zw
```

### En PayPal Developer (sandbox):
1. Ve a: https://developer.paypal.com
2. My Apps & Credentials → Sandbox
3. Tu app → Webhooks
4. Webhook URL: `https://hook.us2.make.com/khc67ua8trve9764gliaj0vfen4pfqv5`
5. Event types marcados:
   - `CHECKOUT.ORDER.APPROVED`
   - `PAYMENT.CAPTURE.COMPLETED`
   - `PAYMENT.CAPTURE.DENIED`
   - `PAYMENT.CAPTURE.PENDING`

### En Make:
- Escenario PayPal (a crear, copiando el de MP):
  - Webhook → SetVariables → HTTP PayPal → Data Store → Router emails

## 4. Productos configurados

| ID         | Nombre                                  | Precio USD | PayPal Script ID    |
|------------|-----------------------------------------|------------|---------------------|
| books      | Libros digitales                        | 11         | paypal-books        |
| intensive  | Escuela 6 días                          | 39         | paypal-intensive    |
| monthly    | Acceso mensual + comunidad              | 69         | paypal-monthly      |
| quarterly  | Acceso trimestral                       | 120        | paypal-quarterly    |
| group      | Trabajo grupal (3 meses)                | 369        | paypal-group        |
| exclusive  | Exclusivo 1 a 1 (3 meses)               | 999        | paypal-exclusive    |

## 5. Testing

### Sandbox:
1. Asegúrate de que el escenario de Make esté ON.
2. Abre la landing en desarrollo (`npm run dev`).
3. Haz clic en un botón PayPal.
4. Paga con una cuenta buyer sandbox.
5. Verifica en Make → History que llegó el webhook.
6. Revisa que el email se envió correctamente.

### Producción:
1. Cambia `VITE_PAYPAL_CLIENT_ID` por el client_id de producción.
2. Actualiza el webhook en PayPal Developer a la app de producción.
3. Cambia la URL del webhook en Make si es necesaria.
4. Prueba con un pago real de bajo monto.

## 6. Próximos pasos

1. ✅ Frontend configurado con botones PayPal.
2. ⏳ Hacer un pago de prueba sandbox.
3. ⏳ Ver el webhook en Make History.
4. ⏳ Crear escenario PayPal en Make (copiando MP).
5. ⏳ Probar deduplicación y emails.
6. ⏳ Pasar a producción.
