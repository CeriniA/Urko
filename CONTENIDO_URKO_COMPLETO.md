# 📋 Contenido Completo de Urko - Alineación Front-End

## 🎯 Objetivo
Este documento organiza toda la información de los productos y mensajes de Urko, compara con el estado actual del front-end y señala qué actualizar.

---

## 🆓 Material Gratuito

### Mensaje Original:
> "Aquí te comparto el entrenamiento, completo organizado libre y gratuito"
> 
> **Entrenamiento completo:** https://drive.google.com/drive/folders/1-z_BmV_TJ2WhzjCsQVxhD-DZFvRrbeEh?usp=drive_link
> 
> **Guía Gratuita para conectar con el placer Sexual en pareja:**
> - Prácticas individuales para llevarlo al encuentro
> - Prácticas en equipo para vivir mejor
> 
> https://drive.google.com/drive/folders/12g02DC2gq6jJBBTPZy1ruAt-St580TMI

### Estado Actual en Front:
✅ **Correcto** - Los links están bien en `products.js`:
- Entrenamiento completo organizado
- Guía gratuita de placer en pareja

### Acción:
✅ No requiere cambios

---

## 💰 Productos Pagos

### 1️⃣ Libros Digitales

**Info Original:**
- Precio: $11 USD
- Descripción: Libros Urko en formato digital

**Estado Actual:**
✅ **Correcto** - Precio y descripción alineados

**Acción:**
✅ No requiere cambios

---

### 2️⃣ Escuela 6 días – La Senda del Varón Presente

**Info Original:**
> "🔥 La Senda del Varón Presente - El Hombre que despierta, El Camino del Hombre superior."
> 
> **6 días para ganar! Fin de semana intensivo + 3 Días.**
> 
> ✅ Acceso al Drive video guiado Privado (material)
> ✅ Guía escrita para 3 días de trabajo
> ✅ Ejercicios Prácticos
> ✅ Video terapia del Método
> ✅ Planilla de acción para seguir el paso a paso
> 
> 👉 Transformá tu energía en solo un fin de semana por **$39 USD**
> 
> 💥 3 días de acción explosiva
> 🏋️‍♂️ 3 días de Repaso

**Estado Actual:**
```js
{
  id: 'intensive',
  title: 'Escuela 6 días – La Senda del Varón Presente',
  price: 39,
  currency: 'USD',
  description: 'Fin de semana intensivo + 3 días de repaso. Guía escrita, ejercicios prácticos, video terapia y plan de acción.'
}
```

**Comparación:**
- ✅ Precio correcto: $39 USD
- ✅ Título correcto
- ⚠️ Descripción resumida (falta detalle)

**Acción:**
🔄 **Ampliar descripción** para incluir más valor percibido

---

### 3️⃣ Trabajo en Solitario (Mensual)

**Info Original:**
> "🔹 Trabajo en solitario (renovas mes a mes)"
> 
> ✅ Acceso al Drive Privado
> ✅ Guía de Trabajo
> ✅ Plan de Acción
> ✅ Video terapia
> ✅ Biblioteca
> 
> **Inicia el Cambio por solo: $69 Dólares al mes**
> 
> *No incluye videollamada con Urko, ni acceso al grupo Privado

**Estado Actual:**
```js
{
  id: 'monthly',
  title: 'Acceso mensual + comunidad',
  price: 69,
  currency: 'USD',
  description: 'Drive privado, guía de trabajo, video terapia y una video llamada grupal al mes. Sin acceso a la comunidad.'
}
```

**Comparación:**
- ✅ Precio correcto: $69 USD
- ❌ **Título incorrecto:** dice "+ comunidad" pero el mensaje original dice "NO incluye acceso al grupo Privado"
- ⚠️ **Descripción contradictoria:** menciona "video llamada grupal al mes" pero el original dice que NO incluye videollamada con Urko
- ❌ Falta mencionar: Biblioteca

**Acción:**
🔴 **CRÍTICO - Corregir título y descripción**

**Título sugerido:**
`'Acceso mensual (trabajo en solitario)'`

**Descripción sugerida:**
`'Drive privado, guía de trabajo, plan de acción, video terapia y biblioteca. Renovación mensual. No incluye videollamada con Urko ni acceso al grupo privado.'`

---

### 4️⃣ Acceso Trimestral

**Info Original:**
> "$120 Dólares 1 pago trimestral"
> 
> *No incluye videollamada con Urko, ni acceso al grupo Privado

**Estado Actual:**
```js
{
  id: 'quarterly',
  title: 'Acceso trimestral',
  price: 120,
  currency: 'USD',
  description: 'Pago único por 3 meses. Incluye todos los beneficios del acceso mensual.'
}
```

**Comparación:**
- ✅ Precio correcto: $120 USD
- ✅ Título correcto
- ⚠️ Descripción genérica

**Acción:**
🔄 **Mejorar descripción**

**Descripción sugerida:**
`'Pago único por 3 meses. Incluye: Drive privado, guía de trabajo, plan de acción, video terapia y biblioteca. No incluye videollamada con Urko ni acceso al grupo privado.'`

---

### 5️⃣ Trabajo Grupal (3 meses) - **LO MÁS RECOMENDADO**

**Info Original:**
> "🔹 Trabajo terapéutico Grupal (x 3 meses) - **Lo más recomendado**"
> 
> ✅ Acceso al grupo privado de trabajo
> ✅ 2 llamadas 1 a 1 de inicio (a coordinar)
> ✅ Seguimiento en equipo, enfoque individual
> ✅ Contacto directo y permanente por WhatsApp
> ✅ 1 Clase maestra quincenal de preguntas y respuestas - grupal
> ✅ (Incluye el plan 1)
> 
> **Inversión única!!! Cambia tu vida x solo $369 USD total**
> 
> Con posibilidad de renovación mensual posterior

**Estado Actual:**
```js
{
  id: 'group',
  title: 'Trabajo grupal (3 meses)',
  price: 369,
  currency: 'USD',
  description: 'Grupo privado, 2 llamadas 1 a 1 de inicio, seguimiento en equipo, clases maestras quincenales e incluye plan mensual.'
}
```

**Comparación:**
- ✅ Precio correcto: $369 USD
- ✅ Título correcto
- ⚠️ Falta mencionar: Contacto directo por WhatsApp
- ⚠️ Falta destacar que es **"Lo más recomendado"**

**Acción:**
🔄 **Mejorar descripción y agregar badge "Recomendado"**

**Descripción sugerida:**
`'Grupo privado de trabajo, 2 llamadas 1 a 1 de inicio, seguimiento en equipo con enfoque individual, contacto directo por WhatsApp 24/7, 1 clase maestra quincenal grupal. Incluye plan mensual. Inversión única por 3 meses con posibilidad de renovación.'`

---

### 6️⃣ Exclusivo 1 a 1 (3 meses)

**Info Original:**
> "🔹 Exclusividad/Personalizados 1 a 1"
> 
> ✅ Espacio íntimo y profundo
> ✅ Trabajo específico según tu caso
> ✅ Guía y herramientas personalizadas, desde el cuerpo al espíritu
> ✅ Coach para la vida, para la cama
> 
> **Valor x 3 mes: $369 x mes o $999 USD trimestral**
> (2 video llamadas 1 a 1 al mes y contacto directo vía 📲)
> 
> *incluye acceso a opción 2 (trabajo grupal)

**Estado Actual:**
```js
{
  id: 'exclusive',
  title: 'Exclusivo 1 a 1 (3 meses)',
  price: 999,
  currency: 'USD',
  description: 'Acompañamiento 1 a 1: sesiones profundas, guía personalizada desde el cuerpo al espíritu y acceso total a planes anteriores.'
}
```

**Comparación:**
- ✅ Precio correcto: $999 USD
- ✅ Título correcto
- ⚠️ Falta mencionar: 2 videollamadas 1 a 1 al mes
- ⚠️ Falta mencionar: Contacto directo vía WhatsApp
- ⚠️ Falta mencionar: "Coach para la vida, para la cama"

**Acción:**
🔄 **Ampliar descripción**

**Descripción sugerida:**
`'Acompañamiento exclusivo 1 a 1: espacio íntimo y profundo, trabajo específico según tu caso, 2 videollamadas al mes, contacto directo vía WhatsApp, guía y herramientas personalizadas desde el cuerpo al espíritu. Coach para la vida, para la cama. Incluye acceso al trabajo grupal.'`

---

## 🎯 Beneficios Generales (Para Agregar a la Landing)

### Sección: "¿Qué vas a lograr al iniciar este camino?"

**Del mensaje original:**

✅ Erradicar la EP o DE de raíz, para siempre
✅ Recuperar tu identidad como hombre
✅ Superar el miedo en el encuentro sexoafectivo y complacer plenamente a tu Mujer
✅ Atraer a una mujer de alto valor
✅ Sanar dolor por ruptura
✅ Liberarte de traumas
✅ Dejar hábitos autodestructivos
✅ Crear al masculino que deseás ser

**Retención consciente:**
👉 Más presencia, menos eyaculaciones
👉 Más placer, más conexión

✅ Vivir tu sexualidad de forma plena
✅ Ver a tu mujer llegar al clímax y poder acompañarla en sus orgasmos
✅ Comprender que la conciencia sexual es conciencia social
✅ Mejoras en todos los pilares de tu vida: Salud (física y mental), relaciones, espiritualidad, propósito, finanzas

**Estado Actual:**
❌ **NO EXISTE** esta sección en el front

**Acción:**
🔴 **AGREGAR nueva sección de beneficios** después del Hero o antes de Ofertas

---

## 🧠 Ganancias del Trabajo en Equipo

**Del mensaje original:**

✔️ Apertura
✔️ Apoyo real
✔️ Comprensión y contención
✔️ Feedback constante
✔️ Actualización permanente
✔️ Contacto directo con Urko

**Estado Actual:**
❌ **NO EXISTE** esta sección en el front

**Acción:**
🔄 **AGREGAR** como subsección dentro del producto "Trabajo Grupal" o como sección independiente

---

## 💳 Medios de Pago

**Del mensaje original:**

✔️ PayPal
✔️ Western Union
✔️ Transferencia Bancaria (solo para Argentina)

**Estado Actual:**
- ✅ PayPal: Implementado
- ✅ Mercado Pago: Implementado
- ❌ Western Union: No mencionado
- ❌ Transferencia Bancaria: No mencionada

**Acción:**
🔄 **AGREGAR** mención de Western Union y Transferencia Bancaria en la sección de contacto o en cada producto

---

## 🔥 Frase de Cierre

**Del mensaje original:**

> "🔥 Si sentís el fuego, respondé a este mensaje.
> Cambiá tu vida de una vez y para siempre.
> Si yo pude, vos podes.
> Estoy para acompañarte. 💪"

**Estado Actual:**
❌ **NO EXISTE** esta frase en el front

**Acción:**
🔄 **AGREGAR** como CTA (Call To Action) al final de la sección de ofertas o antes del footer

---

## 📊 Resumen de Cambios Necesarios

### 🔴 Críticos (Información Incorrecta):

1. **Producto "monthly":**
   - ❌ Título dice "+ comunidad" pero NO incluye comunidad
   - ❌ Descripción menciona "video llamada grupal" pero NO incluye videollamada
   - **Acción:** Cambiar título a "Acceso mensual (trabajo en solitario)" y corregir descripción

### 🔄 Mejoras (Ampliar Información):

2. **Producto "intensive":**
   - Ampliar descripción con más detalles de valor

3. **Producto "quarterly":**
   - Detallar qué incluye específicamente

4. **Producto "group":**
   - Agregar badge "Recomendado"
   - Mencionar contacto directo por WhatsApp
   - Ampliar descripción

5. **Producto "exclusive":**
   - Mencionar 2 videollamadas al mes
   - Mencionar contacto directo vía WhatsApp
   - Agregar "Coach para la vida, para la cama"

### ➕ Agregar Nuevas Secciones:

6. **Sección "Beneficios Generales":**
   - Crear nueva sección con todos los logros/beneficios
   - Ubicación sugerida: Después del Hero o antes de Ofertas

7. **Sección "Ganancias del Trabajo en Equipo":**
   - Crear subsección o destacado dentro del producto grupal

8. **Medios de Pago Adicionales:**
   - Agregar mención de Western Union y Transferencia Bancaria

9. **CTA Final:**
   - Agregar frase de cierre motivacional antes del footer

---

## 🎨 Sugerencias de Diseño

### Badge "Recomendado" para Trabajo Grupal:
```jsx
<Badge bg="success" className="mb-2">
  ⭐ Lo más recomendado
</Badge>
```

### Nueva Sección de Beneficios:
- Título: "¿Qué vas a lograr?"
- Diseño: Grid de 2-3 columnas con íconos
- Ubicación: Entre Hero y Ofertas

### CTA Final:
- Fondo destacado (degradado o color sólido)
- Texto centrado con la frase motivacional
- Botón grande "Contactar por WhatsApp" o "Ver Programas"

---

## 📝 Próximos Pasos

1. ✅ Revisar este documento completo
2. 🔴 Corregir producto "monthly" (crítico)
3. 🔄 Actualizar descripciones de productos
4. ➕ Agregar sección de beneficios
5. ➕ Agregar CTA final
6. 🎨 Agregar badge "Recomendado" al producto grupal
7. 💳 Mencionar medios de pago adicionales
8. 🧪 Probar en local
9. 🚀 Deploy a producción

---

**Documento creado:** {{ new Date().toISOString() }}
**Autor:** Cascade AI
**Proyecto:** Urko Landing Page
