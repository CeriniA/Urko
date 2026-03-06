# 🚀 Crear Links de Mercado Pago - Guía Rápida

## ✅ Estado Actual

- ✅ Recurso gratuito: Ya funciona
- ✅ Video YouTube: Ya funciona  
- ✅ PayPal Client ID: Ya configurado
- ⏳ Links de Mercado Pago: Pendiente
- ⏳ Formulario de evaluación: Pendiente

---

## 📝 Paso 1: Obtener Access Token de Mercado Pago

1. Ve a: https://www.mercadopago.com.ar/developers/panel/credentials
2. Inicia sesión con tu cuenta de Mercado Pago
3. Selecciona "Credenciales de producción"
4. Copia el **Access Token** (es un texto largo que empieza con `APP_USR-...`)

---

## 🔧 Paso 2: Ejecutar el Script

### Opción A: Script Simple (Recomendado)

```bash
# 1. Abrir el archivo
code scripts/crear-links-mp-simple.js

# 2. En la línea 14, pegar tu Access Token:
const ACCESS_TOKEN = 'APP_USR-tu-token-aqui';

# 3. Ejecutar el script
node scripts/crear-links-mp-simple.js
```

### Opción B: Usando variable de entorno

```bash
# 1. Agregar en .env
echo "MP_ACCESS_TOKEN=tu-token-aqui" >> .env

# 2. Ejecutar
node scripts/crear-links-mp-simple.js
```

---

## 📋 Paso 3: Copiar los Links

El script generará algo como esto:

```
✅ Creado - USD 15
   🔗 https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=xxxxx

✅ Creado - USD 20
   🔗 https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=yyyyy
```

Al final mostrará el código listo para copiar:

```javascript
// Si yo pude, vos podés
mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=xxxxx',

// El Entrenamiento Urko
mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=yyyyy',
```

---

## 📂 Paso 4: Actualizar products.js

Abre `src/data/products.js` y reemplaza los `mpLink: '#'` con los links generados:

```javascript
{
  id: 'libro-1',
  title: 'Si yo pude, vos podés',
  price: 15,
  currency: 'USD',
  description: '...',
  mpLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=xxxxx', // ← PEGAR AQUÍ
  paypalScriptId: 'paypal-libro-1',
  category: 'books',
}
```

---

## 🎯 Productos que se Crearán

El script creará automáticamente 5 links:

### Libros:
1. **Si yo pude, vos podés** - USD 15
2. **El Entrenamiento Urko** - USD 20
3. **Pack Completo de Libros** - USD 30

### Programas:
4. **PROGRAMA FUNDAMENTAL** - USD 247
5. **ENTRENAMIENTO TRIMESTRAL** - USD 497

---

## ⚙️ Configuración Adicional

### Proceso Acompañado (USD 750)
Este se vende por WhatsApp. En `products.js` línea 73:

```javascript
whatsappLink: 'https://wa.me/5491234567890?text=Hola,%20quiero%20info%20sobre%20Proceso%20Acompañado',
```

Reemplaza `5491234567890` con tu número (código país + número sin espacios ni guiones).

### Acompañamiento Individual (USD 3000)
Requiere formulario de evaluación. Cuando lo tengas, en `products.js` línea 82:

```javascript
formLink: 'https://forms.google.com/tu-formulario-aqui',
```

---

## 🧪 Probar los Links

Después de actualizar `products.js`:

1. Ejecuta `npm run dev`
2. Ve a la sección "Biblioteca Urko"
3. Click en "Comprar con Mercado Pago"
4. Verifica que te lleve al checkout de Mercado Pago
5. **NO COMPLETES EL PAGO** (es solo prueba)

---

## 📊 Archivo Generado

El script también crea `links-mercadopago.json` con todos los datos:

```json
[
  {
    "id": "libro-1",
    "title": "Si yo pude, vos podés",
    "price": 15,
    "link": "https://...",
    "preference_id": "xxxxx"
  }
]
```

Guarda este archivo por si necesitas los links más adelante.

---

## ❓ Solución de Problemas

### Error: "Invalid access token"
- Verifica que copiaste el token completo
- Asegúrate de usar el token de **PRODUCCIÓN**, no de prueba
- El token debe empezar con `APP_USR-`

### Error: "fetch is not defined"
- Necesitas Node.js 18 o superior
- Verifica con: `node --version`
- Actualiza si es necesario

### Los links no funcionan
- Verifica que pegaste los links completos (incluyen `https://`)
- Revisa que no haya espacios al inicio o final
- Comprueba que el token sea de producción

---

## 📞 Próximos Pasos

1. ✅ Ejecutar script para crear links de MP
2. ✅ Actualizar `products.js` con los links
3. ⏳ Agregar número de WhatsApp para Proceso Acompañado
4. ⏳ Crear formulario de evaluación para Individual
5. ✅ Probar todos los botones de compra

---

## 💡 Notas Importantes

- Los links son permanentes, no necesitas recrearlos
- Puedes modificar precios desde el panel de Mercado Pago
- Los links funcionan tanto en Argentina como internacionalmente
- Mercado Pago convierte USD a la moneda local automáticamente
- PayPal ya está configurado y funcionará automáticamente
