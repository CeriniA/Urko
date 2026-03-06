# Instrucciones para Configurar React Router

## ⚠️ IMPORTANTE: Instalar Dependencia

Antes de que la aplicación funcione correctamente, debes instalar `react-router-dom`:

```bash
npm install react-router-dom
```

## Cambios Realizados

### 1. **Estructura de Páginas**
Se creó una estructura de rutas para tener páginas separadas:

- **HomePage** (`/`) - Página principal con todas las secciones
- **BiografiaPage** (`/biografia`) - Página completa de biografía de Lucas Flesia

### 2. **Archivos Creados**

#### Páginas:
- `src/pages/HomePage.jsx` - Página principal
- `src/pages/BiografiaPage.jsx` - Página de biografía completa

#### Componentes:
- `src/components/SobreMiCompleto.jsx` - Componente con biografía extendida

### 3. **Archivos Modificados**

- **App.jsx**: Configurado con React Router
- **SobreMi.jsx**: Botón "Más sobre mí" ahora navega a `/biografia`
- **SobreMiCompleto.jsx**: Botones de navegación configurados

### 4. **Navegación**

#### Desde la Home:
- Botón "Más sobre mí" → Lleva a `/biografia`

#### Desde Biografía:
- Botón "← Volver" → Regresa a `/`
- Botón "Conocer los Entrenamientos" → Regresa a `/#entrenamientos`

## Contenido de la Biografía

La página de biografía incluye:

- ✅ Origen del nombre "Urko Kjampis"
- ✅ Formación en medicina ancestral andina
- ✅ Formación tántrico-taoísta con Norberto Litvinoff
- ✅ Obras publicadas (3 libros)
- ✅ Formación complementaria detallada
- ✅ Experiencia y misión
- ✅ Diseño profesional con secciones destacadas

## Estilos CSS

Se agregaron estilos específicos para la biografía:
- `.sobre-mi-completo` - Contenedor principal
- `.bio-section` - Secciones con borde amarillo
- `.bio-title` - Títulos en amarillo
- `.bio-text` - Texto con buen line-height
- `.bio-list` - Listas con bullets personalizados
- `.bio-quote` - Cita destacada con borde amarillo

## Testing

Después de instalar `react-router-dom`:

1. Ejecuta `npm run dev`
2. Navega a la home `/`
3. Click en "Más sobre mí" en la sección Sobre Mí
4. Verifica que carga la página de biografía completa
5. Click en "← Volver" para regresar a la home

## Notas

- La navegación es fluida con React Router
- Los enlaces internos (`#entrenamientos`) funcionan correctamente
- El scroll suave se mantiene en la home
- La biografía es una página independiente con su propia URL
