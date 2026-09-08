# FitnessChile - Plataforma Web Deportiva (Fase 1)

Sitio web e-commerce desarrollado para **FitnessChile**, construido con estándares web modernos (**HTML5 Semántico, CSS3 y JavaScript Vanilla**) siguiendo las mejores prácticas de arquitectura modular, diseño responsivo, validación de formularios y trabajo colaborativo con Git.

---

## 📋 Tabla de Contenidos
1. [Resumen del Proyecto y Cumplimiento de Evaluación](#-resumen-del-proyecto-y-cumplimiento-de-evaluación)
2. [Estructura del Proyecto y Páginas Interconectadas](#-estructura-del-proyecto-y-páginas-interconectadas)
3. [Validación de Formularios en JavaScript](#-validación-de-formularios-en-javascript)
4. [Video Embebido Responsivo](#-video-embebido-responsivo)
5. [Respaldo de Cambios Futuros (Carpeta proximos_cambios)](#-respaldo-de-cambios-futuros-carpeta-proximos_cambios)
6. [Trabajo Colaborativo y Control de Versiones (Git)](#-trabajo-colaborativo-y-control-de-versiones-git)
7. [Cómo Ejecutar y Probar el Sitio](#-cómo-ejecutar-y-probar-el-sitio)

---

## 🎯 Resumen del Proyecto y Cumplimiento de Evaluación

Este desarrollo cumple con la totalidad de los criterios exigidos para la primera entrega:

### 1. Estructura y Etiquetado HTML5 y Estilos CSS3
- **Estructura semántica válida**: Uso riguroso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>` y jerarquía lógica de encabezados (`h1` a `h4`).
- **Hipervínculos funcionales e interconexión fluida**: Navegación consistente entre `index.html`, `productos.html`, `nosotros.html`, `blog.html` y `contacto.html`.
- **Multimedia y Video Embebido**: Imágenes en alta resolución con atributos `alt` y reproducción de video con relación de aspecto 16:9 responsiva.
- **Hoja de estilos CSS externa única**: `css/style.css` gobierna toda la identidad visual con variables CSS, tipografías Google Fonts (*Plus Jakarta Sans* y *Oswald*) y diseño adaptable a móviles, tablets y escritorio.

### 2. Validación de Formularios en JS
- **Atributos accesibles**: Etiquetas `<label for="...">` asociadas, atributos `autocomplete`, `placeholder` y referencias `aria-describedby`.
- **Validaciones preventivas**: Validación estricta que impide el envío con datos incompletos o erróneos (Nombre, Correo RFC, Teléfono chileno de 9 dígitos, Motivo de consulta, Mensaje mínimo 15 caracteres y Checkbox de términos).
- **Mensajes de error y sugerencias contextuales**: Mensajes específicos situados inmediatamente debajo de cada campo (`.field-error`) con bordes de advertencia (`.input-error`) y borrado en tiempo real al escribir la corrección.

### 3. Repositorio de Trabajo Colaborativo (Git)
- Repositorio con historial de ramas temáticas (`feature/*`).
- Commits descriptivos bajo la convención *Conventional Commits*.
- Matriz de asignación de tareas por miembros de equipo detallada en [COLABORACION.md](COLABORACION.md).

---

## 📂 Estructura del Proyecto

```
c:\evaluacionfullstrak\
├── index.html                   # Página de Inicio: Hero slider, destacados, video embebido y footer
├── productos.html               # Catálogo completo con filtrado interactivo por categorías
├── nosotros.html                # Quiénes somos, valores de empresa, equipo y video institucional
├── blog.html                    # Artículos formativos de fuerza, nutrición deportiva y cardio
├── contacto.html                # Formulario interactivo con validaciones robustas y datos de atención
├── COLABORACION.md              # Informe de roles, distribución de tareas y trazabilidad de Git
├── README.md                    # Documentación técnica general
├── css/
│   └── style.css                # Hoja de estilos externa única para todo el sitio web
├── js/
│   └── app.js                   # Lógica de slider, catálogo, filtrado y validación de formularios
├── assets/                      # Galería fotográfica de alta resolución
│   ├── hero_banner.jpg          # Diapositiva 1 del slider
│   ├── hero_slide_2.jpg         # Diapositiva 2 del slider
│   ├── hero_slide_3.jpg         # Diapositiva 3 del slider
│   ├── mancuernas.jpg           # Producto 1
│   ├── whey_protein.jpg         # Producto 2
│   ├── banco_pesas.jpg          # Producto 3
│   ├── bandas_resistencia.jpg   # Producto 4
│   ├── creatina.jpg             # Producto 5
│   ├── shaker.jpg               # Producto 6
│   ├── cinturon.jpg             # Producto 7
│   └── cuerda.jpg               # Producto 8
└── proximos_cambios/            # 📁 Módulos respaldados para fases 2 y 3 (Documento ERS)
    ├── autenticacion_y_claves.js # Módulo de login, credenciales demo y algoritmo RUT Módulo 11
    ├── carrito_checkout.js      # Lógica de cálculo de subtotales, envíos y pasarela de pago
    └── NOTAS_ERS_FUTURAS.md     # Requerimientos funcionales para la fase de backend y base de datos
```

---

## 🛡️ Validación de Formularios en JavaScript

En `contacto.html`, cada campo dispone de reglas específicas:

| Campo | Regla de Validación | Mensaje Contextual si Falla |
| :--- | :--- | :--- |
| **Nombre Completo** | Obligatorio, mínimo 3 letras, solo caracteres alfabéticos. | *"El nombre debe contener al menos 3 caracteres."* |
| **Correo Electrónico** | Formato RFC con expresión regular. | *"Ingresa un correo con formato válido (ejemplo: usuario@correo.cl)."* |
| **Teléfono** | Formato nacional de 9 dígitos numéricos. | *"Ingresa un teléfono válido de 9 dígitos (ej: +56 9 1234 5678)."* |
| **Motivo de Consulta** | Selección obligatoria de una opción del desplegable. | *"Por favor, selecciona un motivo de consulta."* |
| **Mensaje Detallado** | Mínimo 15 caracteres con contador en tiempo real. | *"Mensaje muy breve (X/15 caracteres requeridos)."* |
| **Términos** | Casilla de verificación requerida. | *"Debes aceptar los términos y políticas para continuar."* |

---

## 🎥 Video Embebido Responsivo

El sitio incorpora videos embebidos mediante la etiqueta `<iframe>` y `<figure>`, optimizados con relación de aspecto `16:9` que se adaptan dinámicamente a cualquier pantalla sin barras negras ni distorsiones:
- Presente en la página de inicio `index.html` (Demostración de entrenamiento y postura).
- Presente en `nosotros.html` (Instalaciones y equipo de FitnessChile).

---

## 📁 Respaldo de Cambios Futuros (`proximos_cambios/`)

Siguiendo las instrucciones de la evaluación, las funcionalidades avanzadas (como contraseñas, cuentas demo y checkout) han sido desacopladas de esta primera fase y guardadas de manera ordenada en la carpeta `proximos_cambios/`:
- `autenticacion_y_claves.js`: Contiene las claves demo (`demo@fitnesschile.cl` / `Fitness2026!`), el algoritmo de comprobación del dígito verificador del RUT y la persistencia de usuarios.
- `carrito_checkout.js`: Lógica de checkout y cálculo de despachos.
- `NOTAS_ERS_FUTURAS.md`: Apuntes y requerimientos para el documento ERS.

---

## 🚀 Cómo Ejecutar y Probar el Sitio

1. Abre la carpeta del proyecto `c:\evaluacionfullstrak`.
2. Haz doble clic en `index.html` para abrirlo en tu navegador favorito.
3. Navega de forma fluida a través de los enlaces del menú superior:
   - Haz clic en **Productos** para ver el catálogo y probar los botones de filtrado.
   - Haz clic en **Nosotros** para ver la historia, equipo y el video institucional.
   - Haz clic en **Blogs** para revisar los artículos deportivos.
   - Haz clic en **Contacto** para probar las validaciones del formulario en tiempo real.
