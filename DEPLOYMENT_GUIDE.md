# 🚀 Guía de Deployment a Producción - Escuela Urko

## 📋 Pre-requisitos

- [ ] Dominio comprado (ej: urko.com, escuelaurko.com)
- [ ] Imágenes creadas (og-image, favicons, logo)
- [ ] Cuenta en plataforma de hosting (Netlify o Vercel recomendados)
- [ ] PayPal Live credentials
- [ ] Mercado Pago production token
- [ ] Formspree configurado

---

## 🌐 Opción 1: Netlify (Recomendado)

### Ventajas:
- ✅ Gratis para proyectos personales
- ✅ SSL automático
- ✅ Deploy automático desde Git
- ✅ CDN global
- ✅ Formularios nativos (alternativa a Formspree)

### Pasos:

#### 1. Preparar el repositorio

```bash
# Si no tenés Git inicializado
cd c:/Users/Adri/Desktop/URKO/urko-landing
git init
git add .
git commit -m "Initial commit - Urko landing ready for production"

# Crear repo en GitHub
# Ve a: https://github.com/new
# Nombre: urko-landing
# Público o Privado (tu elección)

# Conectar y pushear
git remote add origin https://github.com/TU_USUARIO/urko-landing.git
git branch -M main
git push -u origin main
```

#### 2. Conectar con Netlify

1. **Ve a:** https://app.netlify.com/signup
2. **Sign up** con GitHub
3. **New site from Git**
4. **Conectá tu repo:** urko-landing
5. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Deploy site**

#### 3. Configurar dominio personalizado

1. **En Netlify:** Site settings → Domain management
2. **Add custom domain:** urko.com
3. **Configurar DNS** (en tu proveedor de dominio):
   ```
   Type: A
   Name: @
   Value: 75.2.60.5 (IP de Netlify)
   
   Type: CNAME
   Name: www
   Value: tu-sitio.netlify.app
   ```
4. **Esperar propagación DNS** (5 minutos - 48 horas)
5. **Netlify activará SSL automáticamente** (Let's Encrypt)

#### 4. Configurar variables de entorno

En Netlify → Site settings → Environment variables:

```
VITE_PAYPAL_CLIENT_ID=TU_CLIENT_ID_LIVE
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xblbzajg
```

**⚠️ No incluyas:**
- `ACCESS_TOKEN` (solo se usa en Make.com)
- `WEBHOOK_URL` (solo se usa en scripts locales)

#### 5. Re-deploy

- Netlify → Deploys → Trigger deploy

---

## 🌐 Opción 2: Vercel

### Ventajas:
- ✅ Gratis para proyectos personales
- ✅ SSL automático
- ✅ Deploy automático desde Git
- ✅ Edge Functions
- ✅ Analytics integrado

### Pasos:

1. **Ve a:** https://vercel.com/signup
2. **Sign up** con GitHub
3. **Import Project**
4. **Seleccioná tu repo:** urko-landing
5. **Framework Preset:** Vite
6. **Environment Variables:**
   ```
   VITE_PAYPAL_CLIENT_ID=TU_CLIENT_ID_LIVE
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xblbzajg
   ```
7. **Deploy**
8. **Configurar dominio:** Settings → Domains → Add

---

## 🔧 Configuración de producción

### 1. Actualizar index.html

Reemplazá todas las URLs `https://urko.com/` por tu dominio real:

```html
<!-- Antes -->
<meta property="og:url" content="https://urko.com/" />

<!-- Después -->
<meta property="og:url" content="https://tudominio.com/" />
```

Archivos a actualizar:
- `index.html` (líneas 16, 24, 37, 61)

### 2. Actualizar sitemap.xml

```xml
<!-- Reemplazar urko.com por tu dominio -->
<loc>https://tudominio.com/</loc>
```

### 3. Actualizar robots.txt

```
Sitemap: https://tudominio.com/sitemap.xml
```

---

## 💳 Configurar PayPal para producción

### 1. Crear app Live en PayPal

1. **Ve a:** https://developer.paypal.com
2. **My Apps & Credentials** → pestaña **Live**
3. **Create App**
4. **Nombre:** Urko Landing Live
5. **Configurar capabilities:**
   - ✅ Payment links and buttons
   - ✅ Transaction search
6. **Copiá Client ID y Secret**

### 2. Actualizar variables de entorno

En Netlify/Vercel:
```
VITE_PAYPAL_CLIENT_ID=TU_CLIENT_ID_LIVE
```

En tu `.env` local (para testing):
```
VITE_PAYPAL_CLIENT_ID=TU_CLIENT_ID_LIVE
```

### 3. Actualizar Make.com

#### Escenario PayPal:

**Módulo HTTP GET (id 4):**
- URL: Cambiar de `api-m.sandbox.paypal.com` a `api-m.paypal.com`
- Authorization: Nuevo Base64 con Client ID + Secret Live

**Generar nuevo Base64:**
```bash
echo -n "CLIENT_ID_LIVE:SECRET_LIVE" | base64
```

**Webhook:**
1. PayPal Developer → Live app → Webhooks
2. Add Webhook
3. URL: `https://hook.us2.make.com/TU_WEBHOOK_ID`
4. Events:
   - PAYMENT.CAPTURE.COMPLETED
   - PAYMENT.CAPTURE.DENIED
   - PAYMENT.CAPTURE.PENDING

### 4. Actualizar blueprint

Si importás el blueprint de nuevo, actualizá:
- URL del HTTP: `https://api-m.paypal.com` (sin "sandbox")
- Authorization header con el nuevo Base64

---

## 💰 Configurar Mercado Pago para producción

### 1. Verificar Access Token

En tu panel de MP:
1. **Tus integraciones** → tu app
2. **Credentials** → **Production**
3. Copiá el **Access Token** de producción

### 2. Actualizar Make.com

**Escenario MP:**

**Módulo HTTP GET (id 4):**
- Authorization: `Bearer TU_ACCESS_TOKEN_PRODUCTION`

**Webhook:**
- Ya debería estar configurado con la URL de Make
- Verificá en MP → Webhooks que esté activo

---

## 📧 Verificar Formspree

### 1. Configuración actual

- Endpoint: `https://formspree.io/f/xblbzajg`
- Email: `adriancerini@gmail.com`
- reCAPTCHA: Configurado

### 2. Testing en producción

1. Abrí tu sitio en producción
2. Completá el formulario
3. Verificá que llegue el email

### 3. Upgrade (opcional)

Si necesitás más de 50 envíos/mes:
- Formspree Gold: $10/mes (1000 envíos)
- Formspree Platinum: $40/mes (10000 envíos)

---

## 🔍 Google Search Console

### 1. Verificar propiedad

1. **Ve a:** https://search.google.com/search-console
2. **Add property:** urko.com
3. **Método de verificación:** HTML tag
4. Copiá el meta tag
5. Agregalo en `index.html` (dentro de `<head>`)
6. Deploy
7. Verificá en Search Console

### 2. Enviar sitemap

1. En Search Console → Sitemaps
2. URL: `https://urko.com/sitemap.xml`
3. Submit

### 3. Solicitar indexación

1. URL Inspection → `https://urko.com`
2. Request Indexing

---

## 📊 Google Analytics (opcional)

### 1. Crear propiedad

1. **Ve a:** https://analytics.google.com
2. **Create Property** → GA4
3. Copiá el **Measurement ID** (G-XXXXXXXXXX)

### 2. Agregar a la landing

Opción A: Google Tag Manager (recomendado)
Opción B: Script directo en `index.html`

```html
<!-- En index.html, antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ Checklist de deployment

### Pre-deployment:
- [ ] Imágenes creadas y en `public/`
- [ ] URLs actualizadas a dominio real
- [ ] Variables de entorno configuradas
- [ ] PayPal Live credentials
- [ ] MP production token
- [ ] Git repo creado y pusheado

### Deployment:
- [ ] Sitio deployado en Netlify/Vercel
- [ ] Dominio configurado
- [ ] SSL activo (HTTPS)
- [ ] Variables de entorno en hosting

### Post-deployment:
- [ ] Probar todos los botones de pago
- [ ] Probar formulario de contacto
- [ ] Verificar emails (compra + contacto)
- [ ] Probar en mobile
- [ ] Verificar og:image al compartir en redes
- [ ] Google Search Console verificado
- [ ] Sitemap enviado
- [ ] Indexación solicitada

### Webhooks:
- [ ] PayPal webhook apuntando a Make (Live)
- [ ] MP webhook activo
- [ ] Make.com con tokens de producción
- [ ] Probar flujo completo de pago

---

## 🧪 Testing en producción

### 1. Pagos

**PayPal:**
- Usá una cuenta real (tuya o de prueba)
- Hacé un pago pequeño ($1 USD)
- Verificá que llegue el email
- Verificá en Make.com History

**Mercado Pago:**
- Igual que PayPal
- Pago pequeño de prueba
- Verificar email y Make

### 2. Formulario

- Completá con datos reales
- Verificá que llegue a `adriancerini@gmail.com`
- Verificá reCAPTCHA (badge en esquina)

### 3. Performance

**Google PageSpeed Insights:**
- https://pagespeed.web.dev/
- Objetivo: > 90 en todas las métricas

**Lighthouse (Chrome DevTools):**
- F12 → Lighthouse → Generate report
- Objetivo: > 90 en Performance, SEO, Accessibility

---

## 🆘 Troubleshooting

### "Site can't be reached"
- Verificá DNS (puede tardar hasta 48hs)
- Verificá que el dominio esté bien configurado en Netlify/Vercel

### "Payment failed"
- Verificá que usaste Client ID Live (no Sandbox)
- Verificá que el webhook esté configurado en PayPal Live
- Verificá Make.com con el nuevo Base64

### "Form not found"
- Verificá que `VITE_FORMSPREE_ENDPOINT` esté en las variables de entorno
- Reiniciá el deploy

### "Images not loading"
- Verificá que las imágenes estén en `public/`
- Verificá las rutas en `index.html`
- Hard refresh (Ctrl+Shift+R)

---

## 📈 Monitoreo post-launch

### Semana 1:
- Revisar Google Search Console (errores de crawl)
- Revisar Analytics (tráfico, conversiones)
- Revisar Make.com History (pagos, emails)

### Mes 1:
- Optimizar keywords según Search Console
- Ajustar meta descriptions si es necesario
- Revisar tasa de conversión de pagos

---

**¡Tu landing está lista para producción!** 🚀

Solo falta crear las imágenes, configurar el dominio y hacer el deploy.
