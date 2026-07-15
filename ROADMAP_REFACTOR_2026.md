# ROADMAP — Refactor Landing Escuela Urko

> Documento vivo que describe todas las implementaciones realizadas.
> Generado el 14/07/2026. Estado: **EN EJECUCIÓN**

---

## 🎯 Objetivo

Refactor integral de la landing de Escuela Urko para alinear contenido, precios, oferta de libros y branding con la propuesta vigente de Lucas Flesia. Se renombran 4 programas, se ajustan precios, se moderniza la oferta de libros (3 plataformas), se rediseña la sección de recursos gratuitos con Masterclass embebida tipo Netflix, y se actualiza el branding (título, subtítulo, fondo responsive).

**Directriz rectora:** *No borrar nada*. Si algo deja de usarse, queda en el código/repo pero no se renderiza.

---

## 📋 Decisiones cerradas

| # | Tema | Decisión |
|---|------|----------|
| 1 | Programas finales (4) | Programa Fundamental (369) · Escuela Urko Anual (1000) · Intensivo Trimestral (750) ⭐ · Acompañamiento Privado (WhatsApp) |
| 2 | Badge "Recomendado" | En columna 3 → **Intensivo Trimestral** (preserva identidad del producto recomendado anterior) |
| 3 | Tabla comparativa | 10 filas, 4 columnas, sin "Acceso de por vida" / "Actualizaciones futuras" / "Grupos reducidos" |
| 4 | Libros | 3 plataformas: Amazon, Apple Books, Google Play. MP/PayPal ocultos (datos conservados en array) |
| 5 | Pack libros | **Oculto del render** (queda en array products.js sin mostrarse) |
| 6 | Título Hero | "Reconstrucción masculina desde la raíz." |
| 7 | Subtítulo Hero | "Ayudamos a hombres con ansiedad sexual, pérdida de control y desconexión masculina a reconstruir su seguridad, presencia y dirección mediante un método práctico y progresivo" |
| 8 | Dónde va título/subtítulo | **Ambos**: `<h1>`/`<h2>` del Hero + `<title>`/`<meta description>` de `index.html` |
| 9 | Imagen de fondo | Nuevos archivos: `Desktop.jpeg` y `Mobile.jpeg` (ya subidos por el usuario). Responsive con CSS `image-set` o media queries |
| 10 | Masterclass | Título + video embebido YouTube (autoplay, mute, loop, **sin controles**). Toda la sección es `<a>` clickeable a YouTube |
| 11 | Botón WhatsApp genérico | `https://wa.me/5493492210169?text=Hola%20Lucas,%20me%20interesa...` |
| 12 | Acceso al curso | Vía Google Drive con toda la info (mencionar en descripción, no en tabla) |

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### Fase 1 — Datos y productos
- [ ] **`src/data/products.js`**
  - [ ] Reordenar array: `programa-fundamental` · `proceso-acompanado` · `entrenamiento-trimestral` · `acompanamiento-individual` · libros
  - [ ] `programa-fundamental`: actualizar `title` (casing) y `description` con bonos (30 días Escuela Urko, 2 videollamadas grupales, acceso a "La senda del varón presente")
  - [ ] `proceso-acompanado`:
    - `title`: "PROCESO TRIMESTRAL ACOMPAÑADO" → **"Escuela Urko Anual"**
    - `price`: 1500 → **1000**
    - `description`: reescrita (Método Urko completo, Comunidad privada, 2 encuentros/mes = 24 al año, Biblioteca completa, Actualizaciones futuras) + bonos (Sesión inicial 1-1 + Sesión estratégica 1-1)
    - `paypalScriptId`: `'paypal-proceso-acompanado'` → `'paypal-escuela-anual'`
    - `recommended`: `true`
  - [ ] `entrenamiento-trimestral`:
    - `title`: "ENTRENAMIENTO TRIMESTRAL" → **"Intensivo Trimestral"**
    - `description`: reescrita (proceso grupal 90 días, regulación emocional/sexual, ansiedad, reconexión cuerpo-mente, presencia masculina, hábitos)
    - `includes`: actualizar (Calendario de práctica, 6 encuentros, espacio integración, comunidad privada)
  - [ ] `acompanamiento-individual`:
    - `title`: "ACOMPAÑAMIENTO INDIVIDUAL 1-1" → **"Acompañamiento Privado"**
    - `description`: reescrita (trabajo personalizado, evaluación previa, acceso Método Urko, plan adaptado, encuentros presenciales)
    - `buttonType`: `'form'` → **`'whatsapp'`**
    - `whatsappLink`: agregar `'https://wa.me/5493492210169?text=Hola%20Lucas,%20me%20interesa...'`
  - [ ] Libros: agregar `amazonLink`, `appleLink`, `googlePlayLink` por cada uno
  - [ ] `pack-libros`: queda con `mpLink`/`paypalScriptId` en array pero no se renderiza

### Fase 2 — Componentes React
- [ ] **`src/components/ComparacionProgramas.jsx`**
  - [ ] 4 columnas: Programa Fundamental · Escuela Urko Anual · **Intensivo Trimestral** (badge) · Acompañamiento Privado
  - [ ] Array `features` con 10 filas (Método Urko, Biblioteca, Comunidad, Encuentros, Sesiones 1-1, Seguimiento, Calendario, Trabajo personalizado, Encuentros presenciales, Aplicación previa)
  - [ ] `table-recommended` en columna 3
  - [ ] Última fila: "Comprar" / "Comprar Ahora" / "Comprar" / "Aplicar"
- [ ] **`src/components/RecursosGratuitos.jsx`**
  - [ ] Quitar `<div className="recurso-gratuito-card p-4 mb-4">` (queda plano)
  - [ ] Mantener contenido PDF y botón "Descargar PDF"
  - [ ] Agregar `<section className="masterclass-section">` con:
    - `<h2 className="masterclass-title">Masterclass</h2>`
    - `<div className="masterclass-video-wrapper">` con iframe YouTube
    - `<a>` wrapping todo que abre YouTube en nueva pestaña
  - [ ] Iframe: `https://www.youtube.com/embed/LsdhL9xcZlE?autoplay=1&mute=1&loop=1&playlist=LsdhL9xcZlE&controls=0&showinfo=0&modestbranding=1&rel=0`
- [ ] **`src/components/BibliotecaUrko.jsx`**
  - [ ] Filtrar libros: `books.filter(b => b.isHidden !== true)` (ocultar pack)
  - [ ] Reemplazar botones MP/PayPal por 3 botones por libro:
    - "Comprar en Amazon" (btn-warning)
    - "Comprar en Apple Books" (btn-dark)
    - "Comprar en Google Play" (btn-success)
- [ ] **`src/components/Hero.jsx`**
  - [ ] `<h1 className="hero__title">`: "ESCUELA URKO" → **"Reconstrucción masculina desde la raíz."**
  - [ ] `<h2 className="hero__subtitle fw-bold">`: nuevo subtítulo
- [ ] **`src/components/Header.jsx`**: sin cambios
- [ ] **`src/components/ComoFunciona.jsx`**:
  - [ ] Card "Proceso trimestral acompañado" → scroll a `[data-program-id="proceso-acompanado"]` (sin cambio de código, el ID sigue apuntando al producto que ahora se llama "Escuela Urko Anual")

### Fase 3 — Estilos
- [ ] **`src/styles/global.css`**
  - [ ] Reemplazar `body::before` y `.hero::before` con `image-set()` o media queries para `Desktop.jpeg` / `Mobile.jpeg`
  - [ ] Neutralizar `.recurso-gratuito-card` (queda vacía o `all: unset`)
  - [ ] Agregar estilos Masterclass:
    - `.masterclass-section` (border-top, padding)
    - `.masterclass-title` (clamp font-size, accent color, letter-spacing, uppercase)
    - `.masterclass-video-wrapper` (aspect-ratio 16/9, overflow, border-radius, box-shadow)
    - `.masterclass-video-wrapper iframe` (absolute, inset 0, 100% w/h)

### Fase 4 — HTML y meta
- [ ] **`index.html`**
  - [ ] `<title>` → "Reconstrucción masculina desde la raíz. | Escuela Urko - Sexualidad Sana, Masculinidad Consciente"
  - [ ] `<meta name="description">` → subtítulo largo
  - [ ] Actualizar Open Graph y Twitter cards con nuevo título/descripción

### Fase 5 — Assets
- [ ] **`src/assets/images/`**
  - [x] `Desktop.jpeg` (ya subido)
  - [x] `Mobile.jpeg` (ya subido)
  - [ ] `nuevaportada.jpg.jpeg`: queda en repo sin usar (no se borra)

### Fase 6 — Mercado Pago y make.com
- [ ] **Scripts**
  - [ ] Actualizar array `productos` en `scripts/crear-links-mercadopago.js` con precios y descripciones nuevas
  - [ ] Re-ejecutar `node scripts/crear-links-mercadopago.js` (requiere `VITE_ACCESS_TOKEN` en `.env`)
  - [ ] Pegar nuevo `mpLink` de `proceso-acompanado` en `products.js`
  - [ ] Verificar `mpLink` de los otros 2 productos con precio (pueden quedar igual)
- [ ] **make.com** (lo hace el usuario)
  - [ ] Ajustar lógica de la rama `proceso-acompanado` para monto 1000 USD (antes 1500)
  - [ ] Las demás ramas no cambian

### Fase 7 — Verificación y deploy
- [ ] `npm run build` para verificar que compila sin errores
- [ ] Revisar warnings de Vite (tamaños de chunk)
- [ ] Probar en local con `npm run dev`
- [ ] Deploy a Netlify

---

## 🗺️ Mapeo de productos: actual → nuevo

| ID actual | Título actual | Título nuevo | Precio actual | Precio nuevo | Cambios extra |
|-----------|---------------|--------------|---------------|--------------|---------------|
| `programa-fundamental` | PROGRAMA FUNDAMENTAL | Programa Fundamental | 369 | 369 | Descripción + bonos |
| `proceso-acompanado` | PROCESO TRIMESTRAL ACOMPAÑADO | **Escuela Urko Anual** | 1500 | **1000** | PayPal ID, descripción completa, `recommended: true` |
| `entrenamiento-trimestral` | ENTRENAMIENTO TRIMESTRAL | **Intensivo Trimestral** | 750 | 750 | Descripción completa, `includes` actualizado |
| `acompanamiento-individual` | ACOMPAÑAMIENTO INDIVIDUAL 1-1 | **Acompañamiento Privado** | s/precio | s/precio | `buttonType: 'form' → 'whatsapp'`, descripción |

## 🛒 Mapeo de libros: actual → nuevo

| ID | Título | Plataformas agregadas | Plataformas removidas (visibilidad) |
|----|--------|----------------------|-------------------------------------|
| `libro-1` | Si yo pude, vos podés | Amazon · Apple · Google Play | MP/PayPal ocultos |
| `libro-2` | Entrenamiento Urko | Amazon · Apple · Google Play | MP/PayPal ocultos |
| `pack-libros` | Pack x 2 | — | **Card oculto del render** |

---

## 🔗 Links de libros

**Libro 1 — "Si yo pude, vos podés":**
- Amazon: `https://www.amazon.com/dp/B0H37GCFQN/`
- Apple Books: `https://books.apple.com/ar/book/si-yo-pude-vos-pod%C3%A9s/id6774260362`
- Google Play: `https://play.google.com/store/books/details?id=gr7eEQAAQBAJ&gl=ar`

**Libro 2 — "Entrenamiento Urko":**
- Amazon: `https://www.amazon.com/dp/B0H37KXDZ6/`
- Apple Books: `https://books.apple.com/ar/book/entrenamiento-urko/id6774260595`
- Google Play: `https://play.google.com/store/books/details?id=8b3eEQAAQBAJ&gl=ar`

---

## 📺 Masterclass

- **Video ID:** `LsdhL9xcZlE`
- **URL YouTube:** `https://www.youtube.com/live/LsdhL9xcZlE?si=IfJQkWIVvd8EClGH`
- **Embed URL:** `https://www.youtube.com/embed/LsdhL9xcZlE?autoplay=1&mute=1&loop=1&playlist=LsdhL9xcZlE&controls=0&showinfo=0&modestbranding=1&rel=0`
- **Diseño:** tipo Netflix trailer, sin controles, clickeable a YouTube

---

## 🔄 Tareas manuales del usuario (no se automatizan)

- [ ] Ajustar `make.com` para monto 1000 USD en `proceso-acompanado`
- [ ] Verificar accesibilidad de imágenes Desktop.jpeg / Mobile.jpeg (que existan y sean válidas)
- [ ] Confirmar deploy a Netlify

---

## 📊 Comparativa final (10 filas)

| # | Característica | Programa Fundamental (369) | Escuela Urko Anual (1000) | **Intensivo Trimestral (750)** ⭐ | Acompañamiento Privado |
|---|----------------|:---:|:---:|:---:|:---:|
| 1 | Método Urko completo | ✓ | ✓ | ✓ | ✓ |
| 2 | Biblioteca Urko | ✓ | ✓ (completa) | — | — |
| 3 | Comunidad privada | ✓ (bonus) | ✓ | ✓ | — |
| 4 | Encuentros grupales en vivo | 2 (bonus) | 24 al año (2/mes) | 6 (en 90 días) | — |
| 5 | Sesiones 1-1 privadas | — | 2 (inicial + estratégica) | 1 (bonus) | ✓ |
| 6 | Seguimiento directo | — | Anual | Grupal | Directo |
| 7 | Calendario de práctica | — | — | ✓ | Plan adaptado |
| 8 | Trabajo completamente personalizado | — | — | — | ✓ |
| 9 | Encuentros presenciales | — | — | — | Según disponibilidad |
| 10 | Aplicación / evaluación previa | — | — | — | Requerida |

---

## 📝 Notas finales

- Todos los archivos se modifican sin borrar código existente. Lo que deja de usarse queda en el repo comentado, en clases CSS vacías o en campos de datos que no se renderizan.
- El script de Mercado Pago puede dejar de estar en uso (los libros ya no venden por MP, y los 3 programas con precio conservan el `mpLink` existente si no cambiaron precio). Solo `proceso-acompanado` necesita regenerar el link por el cambio de 1500 → 1000.
- El `EmailCaptureModal.jsx` ya estaba sin uso; no se toca (queda en repo sin importar).
- `PagoExitoso.jsx` está vacío; no se toca.
