# Formulario de Aplicación - Proceso 1 a 1

## 📋 Instrucciones para Crear en Google Forms

### Paso 1: Crear el Formulario
1. Ve a https://forms.google.com
2. Click en "Formulario en blanco"
3. Título: **"Formulario de Aplicación - Proceso 1 a 1 | Método Urko"**

---

## 📝 Estructura del Formulario

### INTRODUCCIÓN (Descripción del formulario)

```
Este proceso no es informativo.
Es trabajo directo, estructura personalizada y compromiso real.

Completar este formulario no garantiza acceso al programa.
La selección es parte del entrenamiento.
```

---

### SECCIÓN 1 – DATOS PERSONALES

**1. Nombre completo** *(Respuesta corta, Obligatorio)*

**2. Edad** *(Respuesta corta, Obligatorio)*

**3. Ciudad y país** *(Respuesta corta, Obligatorio)*

**4. Estado civil** *(Opción múltiple, Obligatorio)*
- Soltero
- En pareja
- Casado
- Otro

**5. Número de WhatsApp** *(Respuesta corta, Obligatorio)*
- Descripción: "Incluye código de país (ej: +54 9 11 1234-5678)"

**6. Correo electrónico** *(Respuesta corta, Obligatorio)*
- Validación: Correo electrónico

---

### SECCIÓN 2 – SITUACIÓN ACTUAL

**7. ¿Cuál es el principal síntoma o dificultad que estás viviendo actualmente?** *(Párrafo, Obligatorio)*

**8. ¿Hace cuánto tiempo estás en esta situación?** *(Párrafo, Obligatorio)*

**9. ¿Qué impacto está teniendo esto en tu confianza, tu relación o tu vida personal?** *(Párrafo, Obligatorio)*

---

### SECCIÓN 3 – HISTORIAL Y CONTEXTO

**10. ¿Has intentado resolver esto antes? ¿Qué has probado?** *(Párrafo, Obligatorio)*

**11. ¿Estás tomando algún medicamento o suplemento actualmente?** *(Párrafo, Obligatorio)*
- Descripción: "Si es así, ¿cuál y desde cuándo?"

**12. ¿Tienes alguna condición médica diagnosticada relacionada con esto?** *(Párrafo, Obligatorio)*

---

### SECCIÓN 4 – COMPROMISO Y DISPONIBILIDAD

**13. ¿Por qué quieres trabajar en el proceso 1 a 1 y no en una opción grupal o autónoma?** *(Párrafo, Obligatorio)*

**14. ¿Estás dispuesto a comprometerte con práctica diaria durante 3 meses?** *(Opción múltiple, Obligatorio)*
- Sí
- No estoy seguro
- No

**15. ¿Tienes disponibilidad para videollamadas semanales?** *(Opción múltiple, Obligatorio)*
- Sí
- No estoy seguro
- No

**16. ¿Cuál es tu disponibilidad horaria para las sesiones?** *(Párrafo, Obligatorio)*
- Descripción: "Indica días y horarios (incluye tu zona horaria)"

---

### SECCIÓN 5 – EXPECTATIVAS Y MOTIVACIÓN

**17. ¿Qué esperas lograr al finalizar este proceso?** *(Párrafo, Obligatorio)*

**18. ¿Estás dispuesto a trabajar desde el cuerpo, la respiración y la práctica concreta (no solo desde lo mental)?** *(Opción múltiple, Obligatorio)*
- Sí
- No estoy seguro
- No

**19. En una escala del 1 al 10, ¿qué tan comprometido estás con este cambio?** *(Escala lineal, Obligatorio)*
- Escala: 1 a 10

**20. ¿Hay algo más que quieras compartir sobre tu situación o motivación?** *(Párrafo, Opcional)*

---

## 🎨 Configuración del Formulario

### Tema y Diseño:
1. **Color del tema**: Negro o gris oscuro
2. **Imagen de encabezado**: Opcional (logo de Urko si tienes)
3. **Fuente**: Roboto o similar

### Configuración:
1. ✅ Recopilar direcciones de correo electrónico
2. ✅ Limitar a 1 respuesta por persona
3. ✅ Mostrar barra de progreso
4. ✅ Orden aleatorio de preguntas: NO

### Mensaje de Confirmación:

```
Aplicación recibida.

Cada solicitud es revisada personalmente.

Si tu perfil está alineado con el nivel de compromiso que requiere el proceso 1 a 1, recibirás contacto por WhatsApp dentro de las próximas 48 horas.

La selección es parte del entrenamiento.

— Método Urko
```

---

## 📧 Configuración de Respuestas

1. Ve a "Respuestas" en el formulario
2. Click en los 3 puntos → "Seleccionar destino de respuesta"
3. Crea una hoja de cálculo nueva: "Aplicaciones Proceso 1-1"
4. Activa notificaciones por email para cada respuesta

---

## 🔗 Obtener el Link

1. Click en "Enviar" (botón morado arriba a la derecha)
2. Click en el ícono de enlace (🔗)
3. ✅ Marca "Acortar URL"
4. Copia el link
5. Pégalo en `src/data/products.js` línea 82

---

## 📋 Checklist de Creación

- [ ] Crear formulario en Google Forms
- [ ] Agregar título y descripción
- [ ] Crear Sección 1: Datos Personales (6 preguntas)
- [ ] Crear Sección 2: Situación Actual (3 preguntas)
- [ ] Crear Sección 3: Historial y Contexto (3 preguntas)
- [ ] Crear Sección 4: Compromiso y Disponibilidad (4 preguntas)
- [ ] Crear Sección 5: Expectativas y Motivación (4 preguntas)
- [ ] Configurar mensaje de confirmación
- [ ] Configurar tema oscuro
- [ ] Activar recopilación de emails
- [ ] Limitar a 1 respuesta
- [ ] Conectar con hoja de cálculo
- [ ] Activar notificaciones por email
- [ ] Copiar link acortado
- [ ] Actualizar products.js con el link

---

## 🔄 Actualizar products.js

Una vez que tengas el link del formulario:

```javascript
{
  id: 'acompanamiento-individual',
  title: 'ACOMPAÑAMIENTO INDIVIDUAL 1-1',
  price: 3000,
  currency: 'USD',
  description: 'Trabajo exclusivo y personalizado según tu caso específico.',
  formLink: 'https://forms.gle/TU_LINK_AQUI', // ← PEGAR LINK DEL FORMULARIO
  category: 'programs',
}
```

---

## 💡 Tips Adicionales

### Para revisar aplicaciones:
1. Abre la hoja de cálculo vinculada
2. Revisa las respuestas
3. Filtra por nivel de compromiso (pregunta 19)
4. Contacta por WhatsApp a los candidatos seleccionados

### Preguntas clave para evaluar:
- **Pregunta 13**: ¿Por qué 1 a 1? (muestra motivación)
- **Pregunta 14**: Compromiso con práctica diaria
- **Pregunta 18**: Disposición al trabajo corporal
- **Pregunta 19**: Nivel de compromiso (1-10)

### Respuestas que indican buen candidato:
- ✅ Claridad en el problema
- ✅ Ha intentado otras soluciones
- ✅ Disponibilidad real
- ✅ Compromiso 8+ en escala
- ✅ Entiende que es trabajo, no información
