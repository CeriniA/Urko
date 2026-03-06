# Resumen de Cambios - Escuela Urko Landing Page

## Fecha: 6 de Marzo, 2026

---

## Estructura Nueva de la Web

La landing page ha sido completamente reestructurada según las especificaciones. A continuación, el orden de las secciones:

### 1. **PORTADA (Hero)**
- **Título:** ESCUELA URKO
- **Subtítulo:** Reconocimiento y Dominio del Poder Sexual Masculino
- **Contenido:** Sistema con raíces en tantra y tao adaptado al hombre actual
- **CTA:** Botón "Bienvenido a la Escuela Urko" → lleva a #escuela-urko
- **Imagen:** Nueva imagen de portada (nuevaportada.jpg) - **PENDIENTE DE SUBIR**

### 2. **Sobre Urko**
- Texto introductorio sobre el camino personal y el método
- No llegué desde la teoría, sino desde la necesidad

### 3. **Escuela Urko**
- Descripción del espacio y metodología
- Tres pilares: Gestión de energía, Regulación biológica, Fortalecimiento físico
- Frase destacada: "Es momento de asumir tu masculinidad con responsabilidad"

### 4. **¿Cómo funciona el Método Urko?**
- Explicación del proceso de 3 meses
- Dos modalidades:
  1. Trabajo autónomo
  2. Proceso trimestral acompañado

### 5. **¿Es este tu camino?**
- Sección dividida en dos columnas:
  - **ES para vos si:** (verde) - 4 puntos
  - **NO es para vos si:** (rojo) - 5 puntos

### 6. **ENTRENAMIENTOS URKO**
Cuatro programas principales:

#### 🔹 PROGRAMA FUNDAMENTAL - $247 USD
- Compra directa (PayPal/Mercado Pago)
- Acceso inmediato
- Método completo sin acompañamiento

#### 🔸 ENTRENAMIENTO TRIMESTRAL - $497 USD
- Compra directa (PayPal/Mercado Pago)
- 6 encuentros grupales
- Calendario estructurado de 90 días

#### 🔥 PROCESO TRIMESTRAL ACOMPAÑADO - $750 USD
- Aplicación vía WhatsApp
- Videollamadas semanales
- Seguimiento personalizado
- Grupos reducidos

#### 🔒 ACOMPAÑAMIENTO INDIVIDUAL 1-1 - $3000 USD
- Solicitud vía formulario Google
- Evaluación previa requerida
- Seguimiento directo

### 7. **Comparación de Programas**
- Tabla comparativa con todas las características
- Destaca el Entrenamiento Trimestral como recomendado

### 8. **Testimonios**
- Mantiene los testimonios actuales
- 6 testimonios de alumnos

### 9. **Sobre Mí**
- Versión breve con foto de perfil
- Botón "Más sobre mí" para página completa (pendiente)
- **Imagen:** Nuevafotoperfil.jpg - **PENDIENTE DE SUBIR**

### 10. **Recursos Gratuitos**
- **ENTRENAMIENTO URKO:** Guía de 10 pasos
- PDF descargable (12 páginas)
- Video de 40 minutos en YouTube
- Enlaces actualizados

### 11. **Newsletter**
- **Título:** "ESCRITOS PARA EL VARÓN PRESENTE"
- Formulario con nombre y email
- Modal de confirmación de datos
- Integración con Google Forms

### 12. **BIBLIOTECA URKO**
Tres productos:

#### 📘 Libro 1: Si yo pude, vos podés - $11 USD
- Guía testimonial y práctica
- Compra directa
- Testimonios: Pendientes

#### 📕 Libro 2: El Entrenamiento Urko - $11 USD
- Manual sistemático del método
- Compra directa
- Testimonios: Pendientes

#### 📚 Pack x 2 - $18 USD (Valor especial)
- Ambos libros juntos
- Proceso completo: Conciencia + Método

### 13. **Preguntas Frecuentes**
- Se mantiene como está

### 14. **Contacto**
- Se mantiene como está

---

## Componentes Creados

1. `SobreUrko.jsx` - Sección introductoria
2. `EscuelaUrko.jsx` - Descripción de la escuela
3. `ComoFunciona.jsx` - Explicación del método
4. `EsTuCamino.jsx` - Criterios de idoneidad
5. `EntrenamientosUrko.jsx` - Programas de entrenamiento
6. `ComparacionProgramas.jsx` - Tabla comparativa
7. `RecursosGratuitos.jsx` - Material gratuito
8. `NewsletterSection.jsx` - Suscripción al newsletter
9. `BibliotecaUrko.jsx` - Libros y productos
10. `SobreMi.jsx` - Perfil breve con foto

## Componentes Modificados

1. `Hero.jsx` - Nuevo contenido de portada
2. `Header.jsx` - Navegación actualizada
3. `App.jsx` - Nueva estructura de secciones

## Archivos CSS Modificados

1. `global.css` - Agregados estilos para todos los nuevos componentes
   - Referencias de imagen actualizadas a `nuevaportada.jpg`

---

## Pendientes

### Imágenes (IMPORTANTE)
Debes subir estas dos imágenes a `src/assets/images/`:
1. **nuevaportada.jpg** - Imagen de fondo del Hero
2. **Nuevafotoperfil.jpg** - Foto de perfil para sección "Sobre Mí"

Ver archivo `INSTRUCCIONES_IMAGENES.md` para más detalles.

### Enlaces a Completar

1. **EntrenamientosUrko.jsx:**
   - Mercado Pago links para Programa Fundamental
   - Mercado Pago links para Entrenamiento Trimestral
   - WhatsApp link para Proceso Acompañado (actualizar número)
   - Google Form link para Acompañamiento Individual

2. **BibliotecaUrko.jsx:**
   - Mercado Pago link para Libro 2
   - Mercado Pago link para Pack x 2
   - Testimonios de libros (actualmente placeholder)

### Funcionalidades

1. **Página "Sobre Mí Completo"** - Crear página separada con biografía completa
2. **PayPal Integration** - Verificar que las credenciales estén configuradas en `.env`
3. **Google Forms** - Configurar formulario de evaluación para programa Individual

---

## Variables de Entorno Necesarias

Asegúrate de tener configuradas en tu archivo `.env`:

```
VITE_PAYPAL_CLIENT_ID=tu_client_id
VITE_NEWSLETTER_FORM_URL=url_del_google_form
VITE_NEWSLETTER_NAME_FIELD=entry.xxxxx
VITE_NEWSLETTER_EMAIL_FIELD=entry.xxxxx
VITE_NEWSLETTER_CONSENT_FIELD=entry.xxxxx
VITE_NEWSLETTER_CONSENT_SENTINEL=entry.xxxxx
```

---

## Navegación Actualizada

El menú de navegación ahora incluye:
- Escuela Urko
- Entrenamientos
- Biblioteca
- Recursos Gratuitos
- Testimonios
- Sobre Mí
- Contacto

---

## Notas Técnicas

- Todos los componentes usan `useRevealOnScroll` para animaciones
- Integración con PayPal para pagos directos
- Integración con Mercado Pago
- Modal de confirmación en Newsletter
- Responsive design mantenido
- Estilos consistentes con el diseño actual

---

## Próximos Pasos

1. ✅ Subir las imágenes requeridas
2. ✅ Actualizar los enlaces de Mercado Pago
3. ✅ Configurar número de WhatsApp
4. ✅ Crear formulario de Google para evaluación Individual
5. ✅ Agregar testimonios de libros
6. ✅ Crear página completa "Sobre Mí"
7. ✅ Probar todos los flujos de compra
8. ✅ Verificar integración de newsletter

---

**Desarrollado por:** Cascade AI
**Fecha:** 6 de Marzo, 2026
