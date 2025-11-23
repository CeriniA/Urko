# 🔄 Actualización Make - Producto Exclusivo Dividido

## 📋 Resumen del Cambio

Se dividió el producto **"Exclusivo 1 a 1"** en dos opciones:

1. **`exclusive-full`** - Pago único de $999 USD
2. **`exclusive-installments`** - 3 pagos mensuales de $369 USD

Ahora necesitás actualizar los escenarios de Make para que reconozcan ambos `external_reference`.

---

## 🔴 Escenario 1: Mercado Pago

### Ubicación en Make:
`MP Webhooks → HTTP + Emails`

### Cambios Necesarios:

#### 1. En el Router de "Pago aprobado" → Router por producto

Actualmente tenés una ruta para `exclusive`. Necesitás:

**Opción A: Duplicar la ruta (Recomendado)**

- Clonar el módulo de email de `exclusive`
- Crear dos rutas separadas:
  - Una con filtro: `{{4.data.external_reference}} = exclusive-full`
  - Otra con filtro: `{{4.data.external_reference}} = exclusive-installments`

**Opción B: Usar OR en el filtro**

- Modificar el filtro actual de `exclusive` para que acepte ambos:
  ```
  Condiciones (OR):
  - {{4.data.external_reference}} = exclusive-full
  - {{4.data.external_reference}} = exclusive-installments
  ```

#### 2. Email a enviar

**Ambos productos envían el mismo email** (o muy similar), porque el contenido del programa es idéntico.

**Texto sugerido:**

```
Asunto: Inicia tu acompañamiento exclusivo 1 a 1

Hola {{4.data.payer.first_name}},

Gracias por sumarte al acompañamiento exclusivo.

Incluye sesiones 1 a 1, guía integral y acceso total a los planes anteriores.

Agenda y materiales: [LINK]

Te escribiremos para coordinar la primera sesión.

Abrazo!
```

**Opcional:** Si querés diferenciar, podés agregar una línea:
- Para `exclusive-full`: "Pago único de $999 USD confirmado."
- Para `exclusive-installments`: "Primera cuota de $369 USD confirmada. Recibirás recordatorios para las próximas 2 cuotas."

#### 3. Google Drive (si ya lo configuraste)

Si ya agregaste el módulo de Drive para `exclusive`:

- **Opción A:** Clonar el módulo de Drive para ambos productos
- **Opción B:** Modificar el filtro del módulo de Drive para que acepte ambos `external_reference` (OR)

Ambos productos comparten la **misma carpeta de Drive** (es el mismo programa).

---

## 🔵 Escenario 2: PayPal

### Ubicación en Make:
`PayPal Webhooks → HTTP + Emails`

### Cambios Necesarios:

#### 1. En el Router de "Pago COMPLETED" → Router por producto

Similar a MP, necesitás:

**Opción A: Duplicar la ruta**

- Clonar el módulo de email de `exclusive`
- Crear dos rutas separadas:
  - Una con filtro: `{{custom_id}} = exclusive-full` (o el campo que uses para identificar el producto)
  - Otra con filtro: `{{custom_id}} = exclusive-installments`

**Opción B: Usar OR en el filtro**

- Modificar el filtro actual para aceptar ambos

#### 2. Email y Drive

Igual que en MP: mismo email, misma carpeta de Drive.

---

## 🛠️ Pasos Prácticos en Make

### Para Mercado Pago:

1. **Abrir escenario:** `MP Webhooks → HTTP + Emails`

2. **Ir al Router de "Pago aprobado":**
   - Buscar el módulo con filtro `{{4.data.status}} = approved`
   - Dentro, buscar el Router por producto

3. **Clonar la ruta de `exclusive`:**
   - Click derecho en el módulo de email de `exclusive` → Duplicate
   - Arrastrar el duplicado al lado

4. **Modificar filtros:**
   - **Ruta 1 (pago único):**
     - Filtro: `{{4.data.external_reference}} = exclusive-full`
   - **Ruta 2 (cuotas):**
     - Filtro: `{{4.data.external_reference}} = exclusive-installments`

5. **Opcional: Ajustar emails**
   - Si querés diferenciar el mensaje, editá el texto del email en cada ruta

6. **Si tenés Drive:**
   - Clonar el módulo de Drive para ambas rutas
   - Mismo `file` (carpeta ID)
   - Mismo `emailAddress: {{4.data.payer.email}}`
   - Mismo `expirationTime: {{addMonths(4.data.date_approved; 3)}}`

7. **Guardar y activar**

### Para PayPal:

Repetir los mismos pasos en el escenario de PayPal, usando el campo que identifica el producto (probablemente `custom_id` o similar).

---

## 🧪 Testing

### 1. Generar las preferencias de MP

Actualizar `create-mp-preferences.js`:

```js
const productos = [
  // ... otros productos ...
  {
    id: 'exclusive-full',
    title: 'Exclusivo 1 a 1 (3 meses) - Pago único',
    price: 999,
    currency: 'USD'
  },
  {
    id: 'exclusive-installments',
    title: 'Exclusivo 1 a 1 (3 meses) - 3 pagos mensuales',
    price: 369,
    currency: 'USD'
  }
];
```

Ejecutar:
```bash
node create-mp-preferences.js
```

Copiar los `mpLink` generados y pegarlos en `src/data/products.js`.

### 2. Probar pagos

**Mercado Pago:**
- Hacer un pago de prueba con `exclusive-full`
- Verificar que llegue el email correcto
- Verificar que se dé acceso a Drive (si configurado)

**PayPal:**
- Hacer un pago de prueba con `exclusive-full`
- Verificar email y Drive

Repetir con `exclusive-installments`.

---

## 📊 Resumen de IDs

| Producto Anterior | Nuevos Productos | External Reference |
|-------------------|------------------|--------------------|
| `exclusive` | `exclusive-full` | `exclusive-full` |
| `exclusive` | `exclusive-installments` | `exclusive-installments` |

---

## ⚠️ Importante: Cuotas en Mercado Pago

**Nota sobre las "3 cuotas":**

- El producto `exclusive-installments` tiene precio de **$369 USD**.
- Esto es **un pago único de $369**, NO 3 cuotas automáticas.
- Si el usuario quiere pagar las 3 cuotas, tendrá que:
  - **Opción A:** Volver a comprar manualmente 2 veces más (no ideal)
  - **Opción B:** Configurar un sistema de suscripciones (más complejo)

### Alternativa Recomendada:

**Usar Mercado Pago Subscriptions:**

Si querés que MP cobre automáticamente las 3 cuotas de $369:

1. Crear una **suscripción** en MP con:
   - Frecuencia: mensual
   - Duración: 3 meses
   - Precio: $369/mes

2. Esto requiere:
   - Crear un plan de suscripción en MP
   - Usar un link de suscripción (no preferencia de pago único)
   - Ajustar el webhook para recibir eventos de suscripción

**Complejidad:** Media-Alta

### Alternativa Simple (Actual):

Dejar como está:
- El usuario paga **$369 una sola vez**
- En la descripción aclarar: "Primera cuota de $369. Te contactaremos para coordinar las próximas 2 cuotas."
- Gestionar las cuotas 2 y 3 manualmente (enviar links de pago por email/WhatsApp)

---

## 🎯 Decisión Recomendada

Para mantener la simplicidad:

1. **Producto `exclusive-full`:** Pago único de $999 (como está ahora)
2. **Producto `exclusive-installments`:** 
   - Precio: $369
   - Descripción: "Primera cuota de $369 USD. Te contactaremos para coordinar las próximas 2 cuotas mensuales."
   - Gestión manual de cuotas 2 y 3

Cuando el usuario paga `exclusive-installments`:
- Recibe acceso inmediato al programa
- Vos le enviás links de pago para las cuotas 2 y 3 por WhatsApp/email

**Ventajas:**
- ✅ Simple de implementar
- ✅ No requiere suscripciones
- ✅ Control total sobre los pagos

**Desventajas:**
- ⚠️ Gestión manual de recordatorios

---

## 📝 Checklist Final

- [ ] Actualizar `products.js` con `exclusive-full` y `exclusive-installments` ✅ (ya hecho)
- [ ] Generar preferencias de MP para ambos productos
- [ ] Actualizar escenario MP en Make (duplicar ruta de `exclusive`)
- [ ] Actualizar escenario PayPal en Make (duplicar ruta de `exclusive`)
- [ ] Probar pago con `exclusive-full`
- [ ] Probar pago con `exclusive-installments`
- [ ] Verificar emails y acceso a Drive
- [ ] Decidir: ¿Gestión manual de cuotas o implementar suscripciones?

---

**Documento creado:** {{ new Date().toISOString() }}  
**Proyecto:** Urko Landing Page  
**Cambio:** División del producto Exclusivo en pago único y cuotas
