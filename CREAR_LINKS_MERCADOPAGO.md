# Guía para Crear Links de Mercado Pago

## Productos a Crear en Mercado Pago

### 📚 LIBROS

#### 1. Libro: "Si yo pude, vos podés"
- **Precio:** USD 15 (o el precio que definas)
- **Título:** Si yo pude, vos podés
- **Descripción:** Testimonio directo de transformación. Desde la pérdida de firmeza y la eyaculación precoz, hasta la recuperación del vigor masculino.
- **Tipo:** Producto digital / Servicio
- **Una vez creado, copiar el link y pegar en:** `src/data/products.js` línea 19

#### 2. Libro: "El Entrenamiento Urko"
- **Precio:** USD 20 (o el precio que definas)
- **Título:** El Entrenamiento Urko
- **Descripción:** La guía definitiva de 10 pasos para el vigor masculino. Sistematización completa del método tántrico-taoísta aplicado.
- **Tipo:** Producto digital / Servicio
- **Una vez creado, copiar el link y pegar en:** `src/data/products.js` línea 29

#### 3. Pack Completo de Libros
- **Precio:** USD 30 (o el precio que definas)
- **Título:** Pack Completo de Libros
- **Descripción:** Ambos libros en un solo pack con precio especial.
- **Tipo:** Producto digital / Servicio
- **Una vez creado, copiar el link y pegar en:** `src/data/products.js` línea 39

---

### 🎯 PROGRAMAS DE ENTRENAMIENTO

#### 4. PROGRAMA FUNDAMENTAL
- **Precio:** USD 247
- **Título:** PROGRAMA FUNDAMENTAL
- **Descripción:** Acceso completo al método Urko en formato autónomo. Incluye método paso a paso, protocolos prácticos, ejercicios progresivos, acceso de por vida y actualizaciones futuras.
- **Tipo:** Servicio / Curso online
- **Una vez creado, copiar el link y pegar en:** `src/data/products.js` línea 52

#### 5. ENTRENAMIENTO TRIMESTRAL ⭐ RECOMENDADO
- **Precio:** USD 497
- **Título:** ENTRENAMIENTO TRIMESTRAL
- **Descripción:** Tres meses de estructura grupal con encuentros en vivo. Incluye calendario definido, 6 encuentros grupales en vivo, método completo, acceso de por vida y actualizaciones.
- **Tipo:** Servicio / Curso online
- **Una vez creado, copiar el link y pegar en:** `src/data/products.js` línea 62

#### 6. PROCESO ACOMPAÑADO
- **Precio:** USD 750
- **Título:** PROCESO ACOMPAÑADO
- **Descripción:** Tres meses con guía directa, seguimiento personalizado y videollamadas semanales. Incluye encuentros grupales semanales, videollamadas personalizadas semanales, seguimiento personalizado, correcciones y guía directa, contacto directo vía WhatsApp.
- **Tipo:** Servicio / Mentoría
- **Nota:** Este programa se vende por WhatsApp, no necesita link de MP
- **Agregar número de WhatsApp en:** `src/data/products.js` línea 73

#### 7. ACOMPAÑAMIENTO INDIVIDUAL 1-1
- **Precio:** USD 3000
- **Título:** ACOMPAÑAMIENTO INDIVIDUAL 1-1
- **Descripción:** Trabajo exclusivo y personalizado según tu caso específico. Incluye 2 videollamadas personalizadas por mes, trabajo específico según tu caso, seguimiento personalizado, correcciones y guía directa, contacto directo vía WhatsApp.
- **Tipo:** Servicio / Mentoría Premium
- **Nota:** Este programa requiere evaluación previa
- **Agregar link al formulario de evaluación en:** `src/data/products.js` línea 82

---

## Pasos para Crear Links en Mercado Pago

### Opción 1: Link de Pago Directo

1. Ingresa a tu cuenta de Mercado Pago
2. Ve a "Cobrar" → "Link de pago"
3. Completa:
   - Título del producto
   - Precio en USD
   - Descripción
   - Cantidad (1)
4. Click en "Crear link"
5. Copia el link generado
6. Pega el link en el archivo `src/data/products.js` en la línea correspondiente

### Opción 2: Preferencia de Pago (Recomendado para mayor control)

1. Usa la API de Mercado Pago para crear preferencias
2. Configura:
   - Items (título, precio, cantidad)
   - Métodos de pago aceptados
   - URLs de retorno (success, failure, pending)
3. Guarda el link de checkout generado

---

## Ejemplo de Código para Actualizar products.js

```javascript
// Ejemplo para Libro 1
{
  id: 'libro-1',
  title: 'Si yo pude, vos podés',
  price: 15,
  currency: 'USD',
  description: '...',
  mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=TU_PREFERENCE_ID_AQUI',
  paypalScriptId: 'paypal-libro-1',
  category: 'books',
}
```

---

## Checklist de Productos

- [ ] Libro 1: "Si yo pude, vos podés" - USD 15
- [ ] Libro 2: "El Entrenamiento Urko" - USD 20
- [ ] Pack de Libros - USD 30
- [ ] Programa Fundamental - USD 247
- [ ] Entrenamiento Trimestral - USD 497
- [ ] Proceso Acompañado - WhatsApp (no requiere link MP)
- [ ] Acompañamiento Individual - Formulario de evaluación

---

## Recursos Gratuitos

También necesitas agregar:
- [ ] Link al PDF de la guía gratuita (línea 7 de products.js)
- [ ] Link al video explicativo (línea 8 de products.js)

---

## Configuración de PayPal

Los botones de PayPal se generan automáticamente si tienes configurado:
- Variable de entorno `VITE_PAYPAL_CLIENT_ID` en tu archivo `.env`
- Los precios ya están definidos en el código

---

## Notas Importantes

1. **Precios sugeridos** están en el archivo, pero puedes modificarlos según tu estrategia
2. **Proceso Acompañado** se vende por WhatsApp - agrega tu número con formato internacional
3. **Acompañamiento Individual** requiere evaluación - crea un formulario de Google Forms
4. **Recursos Gratuitos** - sube el PDF a Google Drive o similar y agrega el link

---

## Próximos Pasos

1. Crear los productos en Mercado Pago
2. Copiar los links generados
3. Actualizar `src/data/products.js` con los links reales
4. Agregar número de WhatsApp para Proceso Acompañado
5. Crear formulario de evaluación para Acompañamiento Individual
6. Subir PDF y video de recursos gratuitos
7. Configurar PayPal Client ID en `.env`
8. Probar todos los botones de compra
