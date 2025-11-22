# ✅ Checklist SEO - Escuela Urko Landing

## 📋 SEO Técnico

### Meta Tags Básicos
- [x] Title optimizado (< 60 caracteres)
- [x] Meta description (< 160 caracteres)
- [x] Meta keywords
- [x] Meta author
- [x] Lang="es" en HTML
- [x] Charset UTF-8
- [x] Viewport responsive

### Open Graph (Facebook/LinkedIn)
- [x] og:type
- [x] og:url
- [x] og:title
- [x] og:description
- [x] og:image (1200x630px recomendado)
- [x] og:locale

### Twitter Cards
- [x] twitter:card
- [x] twitter:url
- [x] twitter:title
- [x] twitter:description
- [x] twitter:image
- [x] twitter:creator

### Schema.org (JSON-LD)
- [x] EducationalOrganization schema
- [x] Founder/Person schema
- [x] SameAs (redes sociales)
- [x] Offers schema

### Archivos SEO
- [x] robots.txt
- [x] sitemap.xml
- [x] .htaccess (seguridad y cache)
- [ ] favicon.ico (ya existe)
- [ ] apple-touch-icon.png (180x180px) - **CREAR**
- [ ] favicon-32x32.png - **CREAR**
- [ ] favicon-16x16.png - **CREAR**
- [ ] og-image.jpg (1200x630px) - **CREAR**
- [ ] logo.png - **CREAR**

### Performance
- [x] Preconnect a dominios externos
- [x] Cache headers en .htaccess
- [x] Compresión GZIP
- [ ] Lazy loading de imágenes
- [ ] Minificación CSS/JS (Vite lo hace automático)

### Seguridad
- [x] HTTPS forzado
- [x] X-Frame-Options
- [x] X-Content-Type-Options
- [x] X-XSS-Protection
- [x] Referrer-Policy

---

## 🎨 Imágenes que necesitás crear

### 1. Open Graph Image (og-image.jpg)
- **Tamaño:** 1200x630px
- **Formato:** JPG o PNG
- **Contenido sugerido:**
  - Logo de Urko
  - Texto: "Escuela Urko - La Senda del Varón Presente"
  - Fondo atractivo (consistente con tu branding)
- **Ubicación:** `public/og-image.jpg`

### 2. Favicons
Podés generarlos gratis en: https://realfavicongenerator.net/

**Archivos necesarios:**
- `public/favicon.ico` (ya existe)
- `public/apple-touch-icon.png` (180x180px)
- `public/favicon-32x32.png`
- `public/favicon-16x16.png`

### 3. Logo
- **Tamaño:** 512x512px (PNG con fondo transparente)
- **Ubicación:** `public/logo.png`
- **Uso:** Schema.org, redes sociales

---

## 🔍 Google Search Console

### Después de deployar:

1. **Verificar propiedad:**
   - Ve a: https://search.google.com/search-console
   - Agregá tu dominio: `urko.com`
   - Verificá con meta tag o archivo HTML

2. **Enviar sitemap:**
   - En Search Console → Sitemaps
   - URL: `https://urko.com/sitemap.xml`

3. **Solicitar indexación:**
   - URL Inspection → Request Indexing
   - Para la home y páginas principales

---

## 📊 Google Analytics (opcional pero recomendado)

### Configuración:

1. **Crear propiedad GA4:**
   - Ve a: https://analytics.google.com
   - Crear propiedad → GA4
   - Copiá el Measurement ID (ej: `G-XXXXXXXXXX`)

2. **Agregar a tu landing:**

Creá `src/components/GoogleAnalytics.jsx`:

\`\`\`jsx
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Tu ID

const GoogleAnalytics = () => {
  useEffect(() => {
    // Cargar script de GA
    const script = document.createElement('script');
    script.src = \`https://www.googletagmanager.com/gtag/js?id=\${GA_MEASUREMENT_ID}\`;
    script.async = true;
    document.head.appendChild(script);

    // Inicializar GA
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }, []);

  return null;
};

export default GoogleAnalytics;
\`\`\`

Importá en `App.jsx`:
\`\`\`jsx
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  return (
    <>
      <GoogleAnalytics />
      {/* resto de tu app */}
    </>
  );
}
\`\`\`

---

## 🎯 Keywords principales (ya incluidas)

- masculinidad consciente
- coaching masculino
- desarrollo personal hombres
- tantra masculino
- urko
- varón presente
- crecimiento personal

---

## 📱 Redes Sociales

### URLs actuales en Schema.org:
- Instagram: https://www.instagram.com/urkotantric
- TikTok: https://www.tiktok.com/@urkotantric
- YouTube: https://youtube.com/@lucasflesia

**Verificá que estas URLs sean correctas.**

---

## 🚀 Antes de deployar a producción

### 1. Actualizar URLs
En `index.html`, reemplazá `https://urko.com/` por tu dominio real si es diferente.

### 2. Crear imágenes
- [ ] og-image.jpg (1200x630px)
- [ ] apple-touch-icon.png (180x180px)
- [ ] favicon-32x32.png
- [ ] favicon-16x16.png
- [ ] logo.png (512x512px)

### 3. Configurar dominio
- [ ] Comprar dominio (ej: urko.com)
- [ ] Configurar DNS
- [ ] Certificado SSL (Netlify/Vercel lo hacen automático)

### 4. Variables de entorno
Actualizá `.env` para producción:
- [ ] `VITE_PAYPAL_CLIENT_ID` → Client ID de **Live** (no Sandbox)
- [ ] `VITE_FORMSPREE_ENDPOINT` → Mismo endpoint (ya funciona en prod)

### 5. Webhooks
- [ ] PayPal: Cambiar webhook URL de Sandbox a Live
- [ ] PayPal: Cambiar API URL de `api-m.sandbox.paypal.com` a `api-m.paypal.com`
- [ ] Mercado Pago: Verificar que el Access Token sea de producción

### 6. Testing
- [ ] Probar todos los botones de pago
- [ ] Probar formulario de contacto
- [ ] Verificar que lleguen los emails
- [ ] Probar en mobile
- [ ] Verificar velocidad (PageSpeed Insights)

---

## 🛠️ Herramientas de auditoría SEO

### Gratis:
1. **Google PageSpeed Insights:** https://pagespeed.web.dev/
2. **Google Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
3. **Google Rich Results Test:** https://search.google.com/test/rich-results
4. **Lighthouse** (en Chrome DevTools)

### Checklist de Lighthouse:
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

---

## 📈 Después del deploy

### Semana 1:
- [ ] Verificar en Google Search Console
- [ ] Enviar sitemap
- [ ] Solicitar indexación
- [ ] Verificar que og:image se vea bien al compartir en redes

### Mes 1:
- [ ] Revisar Analytics (tráfico, conversiones)
- [ ] Revisar Search Console (queries, impresiones)
- [ ] Ajustar keywords si es necesario

---

## ✅ Estado actual

**Completado:**
- ✅ Meta tags optimizados
- ✅ Open Graph
- ✅ Twitter Cards
- ✅ Schema.org
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ .htaccess
- ✅ Preconnect
- ✅ Canonical URL
- ✅ Theme color

**Pendiente:**
- ⏳ Crear imágenes (og-image, favicons, logo)
- ⏳ Configurar Google Search Console
- ⏳ Configurar Google Analytics (opcional)
- ⏳ Actualizar URLs a dominio real
- ⏳ Cambiar PayPal a modo Live

---

**Tu landing está 90% lista para producción.** Solo faltan las imágenes y la configuración final del dominio. 🚀
