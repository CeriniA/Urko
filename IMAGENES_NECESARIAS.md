# 🎨 Imágenes necesarias para SEO

## 1. Open Graph Image (og-image.jpg)

### Especificaciones:
- **Tamaño:** 1200x630px
- **Formato:** JPG (optimizado) o PNG
- **Peso:** < 1MB
- **Ubicación:** `public/og-image.jpg`

### Contenido sugerido:
```
┌─────────────────────────────────────────┐
│                                         │
│         [Logo de Urko]                  │
│                                         │
│    Escuela Urko                         │
│    La Senda del Varón Presente          │
│                                         │
│    Coaching Masculino | Desarrollo     │
│                                         │
└─────────────────────────────────────────┘
```

### Herramientas para crear:
- **Canva:** https://www.canva.com/create/og-images/
- **Figma:** https://www.figma.com
- **Photoshop/GIMP**

### Template Canva:
1. Ir a Canva
2. Crear diseño personalizado: 1200x630px
3. Agregar:
   - Fondo degradado (colores de tu branding: #1a1a2e, #16213e)
   - Logo de Urko (centrado arriba)
   - Texto: "Escuela Urko" (grande, bold)
   - Subtítulo: "La Senda del Varón Presente"
   - Opcional: Foto tuya o imagen representativa
4. Exportar como JPG (calidad alta)

---

## 2. Favicons

### Opción A: Generador automático (recomendado)

1. **Ve a:** https://realfavicongenerator.net/
2. **Sube tu logo** (PNG con fondo transparente, 512x512px mínimo)
3. **Configurá:**
   - iOS: Fondo sólido (ej: #1a1a2e)
   - Android: Fondo transparente
   - Windows: Fondo sólido
4. **Descargá el paquete**
5. **Copiá los archivos** a `public/`:
   - `favicon.ico`
   - `apple-touch-icon.png`
   - `favicon-32x32.png`
   - `favicon-16x16.png`

### Opción B: Manual

**Archivos necesarios:**

#### favicon.ico
- **Tamaño:** 16x16px y 32x32px (multi-resolución)
- **Formato:** ICO
- **Ubicación:** `public/favicon.ico`

#### apple-touch-icon.png
- **Tamaño:** 180x180px
- **Formato:** PNG
- **Ubicación:** `public/apple-touch-icon.png`
- **Nota:** Fondo sólido (no transparente)

#### favicon-32x32.png
- **Tamaño:** 32x32px
- **Formato:** PNG
- **Ubicación:** `public/favicon-32x32.png`

#### favicon-16x16.png
- **Tamaño:** 16x16px
- **Formato:** PNG
- **Ubicación:** `public/favicon-16x16.png`

---

## 3. Logo (logo.png)

### Especificaciones:
- **Tamaño:** 512x512px
- **Formato:** PNG con fondo transparente
- **Ubicación:** `public/logo.png`
- **Uso:** Schema.org, redes sociales, general

### Contenido:
- Logo de Urko en alta resolución
- Fondo transparente
- Centrado en el canvas

---

## 📁 Estructura final de public/

```
public/
├── favicon.ico
├── apple-touch-icon.png
├── favicon-32x32.png
├── favicon-16x16.png
├── og-image.jpg
├── logo.png
├── robots.txt ✅
├── sitemap.xml ✅
└── .htaccess ✅
```

---

## 🎨 Paleta de colores de Urko (para diseños)

Basado en tu CSS actual:

- **Primario oscuro:** `#1a1a2e`
- **Secundario oscuro:** `#16213e`
- **Acento:** (definir si tenés un color de marca)
- **Texto claro:** `#ffffff`

---

## ✅ Checklist de imágenes

- [ ] og-image.jpg (1200x630px) → Para compartir en redes
- [ ] apple-touch-icon.png (180x180px) → Para iOS
- [ ] favicon-32x32.png → Para navegadores modernos
- [ ] favicon-16x16.png → Para navegadores antiguos
- [ ] favicon.ico → Para compatibilidad máxima
- [ ] logo.png (512x512px) → Para Schema.org

---

## 🧪 Cómo probar las imágenes

### Open Graph:
1. **Facebook Debugger:** https://developers.facebook.com/tools/debug/
2. Pegá tu URL: `https://urko.com`
3. Verificá que se vea la imagen correctamente

### Twitter:
1. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
2. Pegá tu URL
3. Verificá la preview

### Favicons:
1. Abrí tu sitio en diferentes navegadores
2. Verificá que el favicon se vea en:
   - Pestaña del navegador
   - Marcadores
   - Home screen de móvil (iOS/Android)

---

## 💡 Tips de diseño

### Para og-image.jpg:
- **Texto grande y legible** (mínimo 40px)
- **Contraste alto** (texto claro sobre fondo oscuro)
- **Evitar texto en los bordes** (puede cortarse en algunas plataformas)
- **Probar en mobile** (se ve más chico)

### Para favicons:
- **Diseño simple** (se ve muy chico)
- **Alto contraste**
- **Evitar detalles finos** (no se ven en 16x16px)
- **Usar versión simplificada del logo** si es muy complejo

---

## 🚀 Después de crear las imágenes

1. **Copiá todos los archivos** a `public/`
2. **Reiniciá el servidor:** `npm run dev`
3. **Verificá en el navegador:**
   - Favicon en la pestaña
   - Compartir URL en redes (preview)
4. **Optimizá las imágenes:**
   - Comprimí JPG/PNG con TinyPNG: https://tinypng.com/
   - Objetivo: og-image < 500KB, favicons < 50KB cada uno

---

**¿Necesitás ayuda para crear alguna imagen específica?** Puedo darte más detalles o templates. 🎨
