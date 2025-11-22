# Configuración del Formulario de Contacto con Formspree

## 📋 Resumen

El formulario de contacto usa Formspree (gratis) para enviar mensajes sin necesidad de backend propio.

---

## 🚀 Paso 1: Crear cuenta en Formspree

1. Ve a: https://formspree.io
2. **Sign Up** (gratis, hasta 50 envíos/mes)
3. Logueate con Google o email

---

## 🚀 Paso 2: Crear formulario

1. Dashboard → **"+ New Form"**
2. **Form name:** `Urko Contact Form`
3. **Email notifications:** `adriancerini@gmail.com`
4. **Create Form**
5. Copiá el **endpoint URL** que te da (ej: `https://formspree.io/f/xyzabc123`)

---

## 🚀 Paso 3: Configurar el formulario

### Settings → General:
- ✅ **reCAPTCHA:** Activalo (anti-spam)
- **Confirmation message:** "Gracias por contactarnos. Te responderemos pronto."
- **Redirect URL:** Dejalo vacío

### Settings → Notifications:
- **Email notifications:** `adriancerini@gmail.com`
- **Subject line:** "Nuevo contacto desde Urko"

---

## 🚀 Paso 4: Actualizar `.env` en tu landing

Abrí el archivo `.env` y actualizá:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/TU_FORM_ID_AQUI
```

Reemplazá `TU_FORM_ID_AQUI` por el ID que te dio Formspree (ej: `xyzabc123`).

---

## 🚀 Paso 5: Importar el componente en tu landing

El componente `ContactForm.jsx` ya está creado en `src/components/`.

### Opción A: Agregar a la página principal

Abrí `src/App.jsx` (o donde tengas tu layout principal) y agregá:

```jsx
import ContactForm from './components/ContactForm';
import './styles/ContactForm.css';

function App() {
  return (
    <>
      {/* ... otros componentes ... */}
      <ContactForm />
    </>
  );
}
```

### Opción B: Agregar como sección en una página existente

Si ya tenés un archivo de página (ej: `src/pages/Home.jsx`), agregá ahí el componente.

---

## 🧪 Paso 6: Probar el formulario

1. **Reiniciá el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

2. **Abrí la landing** en el navegador

3. **Scrolleá hasta la sección "Contacto"**

4. **Completá el formulario:**
   - Nombre: Tu nombre
   - Email: Tu email
   - Mensaje: Un mensaje de prueba

5. **Clic en "Enviar mensaje"**

6. **Verificá:**
   - ✅ Mensaje de confirmación verde aparece
   - ✅ Formulario se limpia
   - ✅ Recibís un email en `adriancerini@gmail.com` con el mensaje

---

## 📊 Estructura del componente

### Archivos creados:

- `src/components/ContactForm.jsx` → Componente React del formulario
- `src/styles/ContactForm.css` → Estilos del formulario

### Funcionalidades:

- ✅ Validación de campos (nombre, email, mensaje requeridos)
- ✅ Estados de carga (botón "Enviando..." mientras procesa)
- ✅ Mensajes de éxito/error
- ✅ Formulario se limpia después de enviar
- ✅ Diseño responsive (mobile-first)
- ✅ Estilos consistentes con el resto de la landing

---

## 🎨 Personalización

### Cambiar colores:

Editá `src/styles/ContactForm.css`:

```css
.contact-section {
  background: linear-gradient(135deg, #TU_COLOR_1 0%, #TU_COLOR_2 100%);
}
```

### Cambiar textos:

Editá `src/components/ContactForm.jsx`:

```jsx
<h2 className="section-title">Tu Título</h2>
<p className="section-subtitle">Tu subtítulo...</p>
```

### Agregar más campos:

En `ContactForm.jsx`, agregá en el `useState`:

```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '', // ← Nuevo campo
  message: '',
});
```

Y agregá el campo en el JSX:

```jsx
<Form.Group className="mb-3" controlId="formPhone">
  <Form.Label className="text-light">Teléfono</Form.Label>
  <Form.Control
    type="tel"
    name="phone"
    placeholder="+54 9 11 1234-5678"
    value={formData.phone}
    onChange={handleChange}
  />
</Form.Group>
```

---

## 🔐 Seguridad

### reCAPTCHA (recomendado):

Formspree incluye protección anti-spam básica, pero para mayor seguridad:

1. En Formspree → Settings → General
2. Activá **reCAPTCHA**
3. Formspree maneja todo automáticamente (no necesitás código extra)

### Rate limiting:

Formspree limita automáticamente:
- Plan gratuito: 50 envíos/mes
- Si necesitás más, upgrade a plan pago

---

## 🆘 Troubleshooting

### "Error de conexión" al enviar:

- Verificá que `VITE_FORMSPREE_ENDPOINT` esté bien configurado en `.env`
- Verificá que el servidor esté corriendo (`npm run dev`)
- Verificá que el endpoint de Formspree sea correcto

### No llega el email:

- Verificá la carpeta de spam
- Verificá que el email en Formspree Settings sea correcto
- Verificá en el dashboard de Formspree → Submissions si el mensaje llegó

### El formulario no se muestra:

- Verificá que importaste `ContactForm` en tu `App.jsx` o página principal
- Verificá que importaste el CSS: `import './styles/ContactForm.css'`

---

## 🚀 Alternativa: Usar Make.com en vez de Formspree

Si querés más control (ej: guardar en base de datos, enviar a múltiples emails, integrar con CRM):

1. **Crear webhook en Make:**
   - Make → Create scenario → Custom Webhook
   - Copiá la URL del webhook

2. **Actualizar `.env`:**
   ```env
   VITE_FORMSPREE_ENDPOINT=https://hook.us2.make.com/TU_WEBHOOK_ID
   ```

3. **Crear escenario en Make:**
   - Webhook → Email (Google/Gmail)
   - O Webhook → Google Sheets (guardar en hoja de cálculo)
   - O Webhook → CRM (ej: HubSpot, Salesforce)

**Ventaja:** Más flexible, puedes hacer lo que quieras con los datos.

**Desventaja:** Consume operaciones de Make (plan Free: 1000 ops/mes).

---

## ✅ Checklist final

- [ ] Cuenta creada en Formspree
- [ ] Formulario creado en Formspree
- [ ] Endpoint copiado y pegado en `.env`
- [ ] reCAPTCHA activado en Formspree
- [ ] Email de notificaciones configurado
- [ ] `ContactForm.jsx` importado en `App.jsx`
- [ ] CSS importado
- [ ] Servidor reiniciado (`npm run dev`)
- [ ] Formulario probado (envío de prueba)
- [ ] Email recibido correctamente

---

**¡Listo!** El formulario de contacto está completo y funcional. 🚀
