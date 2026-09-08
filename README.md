# Documento de Especificación de Requisitos de Software (ERS)
## Proyecto: FitnessChile - Plataforma Web E-Commerce y Entrenamiento Deportivo

---

## 1. Introducción

En esta sección se proporciona una introducción completa al documento de Especificación de Requisitos de Software (ERS) para el sistema **FitnessChile**, definiendo las bases funcionales, alcance y marco técnico que rige su desarrollo colaborativo.

---

### 1.1. Propósito

El propósito del presente documento es definir de manera formal, rigurosa y exhaustiva los requerimientos funcionales y no funcionales que debe satisfacer la plataforma web de **FitnessChile**.

Este documento va dirigido a:
- **Equipo de Desarrollo Fullstack**: Para guiar la arquitectura, maquetación semántica, diseño responsivo y lógica de validación del cliente.
- **Comité Evaluador y Docente**: Como evidencia documental del cumplimiento de los estándares de ingeniería de software, accesibilidad, estándares web (W3C) y metodologías colaborativas en Git.
- **Stakeholders y Administradores del Negocio (FitnessChile SpA)**: Para alinear las expectativas comerciales, alcances de las entregas y futuras integraciones de pasarelas de pago y módulos de inventario.

---

### 1.2. Ámbito del Sistema

#### • Nombre del Sistema
El sistema se denomina formalmente **"FitnessChile Web Platform & E-Commerce Core"** (Versión 1.0).

#### • Lo que el Sistema Hará:
1. **Presentación de Marca y Contenido Multimedia**:
   - Exponer la identidad visual de la tienda deportiva mediante una cabecera estructurada, Hero Banner dinámico con slider automatizado y secciones informativas de la empresa.
   - Embeber reproductores de video responsivos (proporción 16:9) sobre biomecánica, técnicas de levantamiento e instalaciones de entrenamiento.
2. **Catálogo de Productos y Navegación Interconectada**:
   - Desplegar una cuadrícula interactiva de productos de fuerza, suplementación y accesorios deportivos con precios formateados en pesos chilenos ($ CLP).
   - Permitir el filtrado dinámico en el lado del cliente según categorías sin recargar la página.
   - Proveer enlaces funcionales que conectan de forma fluida y coherente las 5 páginas principales: Inicio (`index.html`), Catálogo (`productos.html`), Nosotros (`nosotros.html`), Blog (`blog.html`) y Contacto (`contacto.html`).
3. **Formulario de Contacto y Validación de Entrada (Front-End)**:
   - Capturar consultas de clientes mediante formularios accesibles con etiquetas asociadas (`<label for>`), autocompletado y descripciones semánticas (`aria-describedby`).
   - Implementar validaciones preventivas en JavaScript que bloqueen envíos con datos incompletos o inválidos (sintaxis de correo RFC, teléfono de 9 dígitos chileno, selección de motivo y mensaje mínimo de 15 caracteres).
   - Desplegar mensajes de error específicos y contextuales inmediatamente debajo de cada campo erróneo, limpiándolos en tiempo real mientras el usuario escribe la corrección.
4. **Suscripción a Newsletter y Notificaciones Toast**:
   - Capturar correos electrónicos en el pie de página con validación de sintaxis y generar confirmaciones visuales no invasivas mediante notificaciones flotantes (Toast).

#### • Lo que el Sistema NO Hará (Alcance Excluido en Fase 1):
1. **No procesará transacciones monetarias bancarias en vivo**: Las compras y cobros reales están desacoplados de esta primera fase; el botón de carrito permanece con estado informativo (`[Fase 1]`) hasta la integración del backend con Transbank / Webpay Plus.
2. **No gestionará autenticación de usuarios en base de datos**: El sistema de cuentas, contraseñas y claves fue respaldado en la carpeta `proximos_cambios/` para ser incorporado en las fases posteriores con autenticación segura (JWT / Bcrypt).
3. **No realizará control de stock ni inventario en tiempo real**: Las existencias mostradas corresponden a datos maestros estructurados en memoria para la interfaz de usuario.
4. **No coordinará despachos fuera de Chile**: El alcance logístico está limitado exclusivamente al territorio nacional chileno (Arica a Punta Arenas).

#### • Beneficios, Objetivos y Metas del Sistema:
- **Beneficios**:
  - Centralizar la vitrina digital de artículos de entrenamiento profesional accesibles desde cualquier dispositivo (celular, tablet o computador).
  - Brindar una experiencia de usuario (UX) ágil, fluida y con tiempos de carga mínimos al utilizar tecnologías web nativas (HTML5, CSS3 y JavaScript Vanilla) sin sobrecarga de dependencias.
  - Asegurar la integridad de las consultas enviadas evitando spam o solicitudes con correos malformados.
- **Objetivos**:
  - Implementar una interfaz web 100% conforme a los estándares semánticos del W3C.
  - Alcanzar una tasa de retención visual óptima gracias al diseño responsive con CSS Grid, Flexbox y tipografías optimizadas de Google Fonts.
  - Desarrollar el proyecto bajo control de versiones Git con trazabilidad transparente de roles y commits convencionales.
- **Metas**:
  - Publicar el catálogo base de 8 productos destacados organizados en cuadrículas simétricas de 4 columnas en escritorio.
  - Obtener una validación de formularios interactiva con tiempo de respuesta inferior a 100 milisegundos en el navegador del cliente.
  - Servir como cimiento modular para integrar las Fases 2 y 3 (Backend, persistencia en base de datos y pasarela de pago).

---

### 1.3. Definiciones, Acrónimos y Abreviaturas

Para garantizar la adecuada interpretación técnica de los requerimientos, se definen los siguientes términos:

- **ERS**: Especificación de Requisitos de Software (Software Requirements Specification - SRS). Documento formal que describe qué debe hacer el sistema sin entrar en detalles de codificación interna.
- **Comanda / Orden de Pedido**: Detalle estructurado de los productos, cantidades, atributos y valor total solicitados por el cliente para su despacho o retiro.
- **HTML5 (HyperText Markup Language 5)**: Estándar actual de etiquetado semántico para la estructuración de documentos web (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3 (Cascading Style Sheets 3)**: Lenguaje de diseño que define la presentación visual, variables (`:root`), cuadrículas (Grid), cajas flexibles (Flexbox) y adaptabilidad responsiva (`@media`).
- **JavaScript Vanilla (ES6+)**: Lenguaje de programación cliente nativo del navegador utilizado para manipular el DOM y ejecutar validaciones lógicas sin librerías externas.
- **DOM (Document Object Model)**: Representación estructurada en árbol de los elementos HTML que permite su modificación dinámica vía JavaScript.
- **RFC (Request for Comments)**: Normas técnicas de Internet; en este documento hace referencia al estándar de sintaxis de correos electrónicos.
- **Módulo 11**: Algoritmo matemático ponderado utilizado en Chile para validar la autenticidad del dígito verificador del Rol Único Tributario (RUT).
- **Webpay Plus / Redcompra**: Pasarela de pagos operada por Transbank en Chile para transacciones con tarjetas de débito y crédito.
- **Toast**: Componente de interfaz gráfica que muestra notificaciones breves, emergentes y auto-temporizadas sobre una acción del usuario.
- **Conventional Commits**: Estándar de mensajes de commit en Git (`feat`, `style`, `docs`, `refactor`, `chore`) que aporta trazabilidad al historial colaborativo.

---

### 1.4. Referencias

Este documento y el código fuente asociado se fundamentan en las siguientes referencias y especificaciones:

1. **Estándar IEEE 830-1998**: *IEEE Recommended Practice for Software Requirements Specifications* (Práctica recomendada para especificaciones de requisitos de software).
2. **Consorcio W3C (World Wide Web Consortium)**:
   - *HTML5 Specification*: [https://www.w3.org/TR/html52/](https://www.w3.org/TR/html52/)
   - *CSS Flexible Box Layout Module*: [https://www.w3.org/TR/css-flexbox-1/](https://www.w3.org/TR/css-flexbox-1/)
   - *Web Content Accessibility Guidelines (WCAG 2.1)* para etiquetas `<label>`, autocompletado y contrastes.
3. **Wireframe Oficial de Diseño**: Disposición original del encabezado con plecas, Hero Banner, grilla 2x4 de productos y pie de página en tres columnas.
4. **Convención de Commits Semánticos**: *Conventional Commits specification v1.0.0* ([https://www.conventionalcommits.org/](https://www.conventionalcommits.org/)).
5. **Documento Interno de Trabajo Colaborativo**: [`COLABORACION.md`](COLABORACION.md) del repositorio local de FitnessChile.
6. **Respaldo de Módulos Futuros**: Carpeta [`proximos_cambios/`](proximos_cambios/) (`autenticacion_y_claves.js`, `carrito_checkout.js` y `NOTAS_ERS_FUTURAS.md`).

---

### 1.5. Visión General del Documento

El presente documento está estructurado de forma modular y progresiva para facilitar su lectura y defensa académica:

- **Sección 1 (Introducción)**: Define el propósito, ámbito del sistema, glosario de términos y referencias normativas del proyecto.
- **Sección 2 (Descripción General del Negocio y del Producto)**: Perspectiva del producto, contexto operativo, características de los usuarios y restricciones de diseño.
- **Sección 3 (Requisitos Específicos)**:
  - **3.1 Requisitos de Interfaz de Usuario y Contenido Web (HTML5 & CSS3)**: Estructuración semántica, páginas interconectadas, multimedia responsiva y estilos externos.
  - **3.2 Requisitos Funcionales de Validación (JavaScript)**: Reglas de validación campo a campo, retroalimentación contextual y gestión de eventos.
  - **3.3 Requisitos de Gestión y Control de Versiones (Git)**: Estructura de ramas por integrante y convención de integración de cambios.
- **Anexos y Casos de Uso**: Formularios de casos de uso representativos (Navegar Catálogo, Reproducir Video Demostrativo, Enviar Formulario de Asistencia con Validación).

---

## 2. Descripción General del Producto

### 2.1. Perspectiva del Producto
**FitnessChile** opera como un sistema web independiente enfocado en el comercio electrónico deportivo. En esta primera fase, se entrega la capa visual y de interacción cliente (Front-End) completamente operativa, estableciendo los puntos de acople para la base de datos relacional y servicios REST de las fases posteriores.

### 2.2. Clases y Características de Usuarios
1. **Cliente / Deportista Visitante**:
   - Navega por las páginas del sitio, revisa especificaciones de mancuernas, proteínas y accesorios, visualiza videos de entrenamiento y remite consultas comerciales mediante el formulario interactivo.
2. **Asesor Técnico y Administrativo (FitnessChile)**:
   - Recibe las consultas validadas del formulario para coordinar presupuestos, asesorías biomecánicas y resolver requerimientos de despacho.
3. **Equipo de Desarrollo y Evaluadores**:
   - Auditan el código fuente, la validación sintáctica de formularios y el flujo colaborativo de ramas y commits en Git.

### 2.3. Entorno Operativo
- **Navegadores Soportados**: Google Chrome (v100+), Mozilla Firefox (v100+), Microsoft Edge (v100+), Safari (v15+) y navegadores móviles en Android e iOS.
- **Resoluciones Adaptables**: Pantallas móviles (desde 360px de ancho), tablets (768px) y monitores de escritorio (1024px a 1920px).
- **Servidor Web Local**: Compatible con cualquier servidor estático HTTP (ej: Python `http.server`, Live Server de VS Code, Nginx o Apache).

---

## 3. Requisitos Específicos del Sistema

### 3.1. Requisitos de Estructura y Estilos (HTML5 & CSS3)

- **REQ-01 (Semántica HTML5)**: El sistema debe utilizar elementos estructurales estándar de HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`) en sustitución de contenedores genéricos `<div>` sin semántica.
- **REQ-02 (Páginas Interconectadas)**: El sistema debe constar de 5 páginas HTML físicas e interconectadas mediante hipervínculos funcionales en cabecera y pie de página:
  - `index.html`: Portal principal con slider interactivo y video destacado.
  - `productos.html`: Catálogo interactivo con filtrado por categorías.
  - `nosotros.html`: Información corporativa, valores, equipo técnico y video institucional.
  - `blog.html`: Artículos técnicos sobre entrenamiento, sobrecarga progresiva y nutrición.
  - `contacto.html`: Información de contacto y formulario interactivo con validaciones.
- **REQ-03 (Video Embebido Responsivo)**: El sistema debe incluir al menos un reproductor de video embebido funcional con relación de aspecto fija de `16:9` que no genere barras negras en dispositivos móviles.
- **REQ-04 (Hoja de Estilos Externa Única)**: Todas las páginas HTML deben importar obligatoriamente la hoja de estilos externa `css/style.css`, centralizando variables `:root`, tipografías Google Fonts y reglas de maquetación Flexbox/Grid.

---

### 3.2. Requisitos Funcionales de Validación de Formularios (JavaScript)

- **REQ-05 (Elementos de Accesibilidad en Formularios)**: Todos los controles de entrada del formulario de contacto deben poseer etiquetas `<label for="...">` asociadas, atributos `autocomplete` válidos (`name`, `email`, `tel`), `placeholder` orientativos y atributos `aria-describedby` que enlacen a sus textos de ayuda y error.
- **REQ-06 (Validación Preventiva de Nombre)**: El campo de nombre debe ser obligatorio, tener una longitud mínima de 3 caracteres y permitir únicamente caracteres alfabéticos y espacios.
- **REQ-07 (Validación Estricta de Correo Electrónico)**: El campo de correo electrónico debe validar la presencia de formato RFC válido mediante la expresión regular `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`.
- **REQ-08 (Validación de Teléfono Nacional)**: El campo de teléfono debe validar una estructura de 9 dígitos numéricos correspondiente a la numeración telefónica de Chile (ej: `+56 9 1234 5678` o `912345678`).
- **REQ-09 (Validación de Motivo y Longitud de Mensaje)**: El desplegable de motivo de consulta no debe admitir valor vacío, y el área de texto del mensaje debe exigir un mínimo de 15 caracteres con un contador visible en tiempo real.
- **REQ-10 (Mensajes de Error Contextuales en Vivo)**: Si una regla falla, el mensaje de error debe mostrarse exclusivamente bajo el campo infractor con borde rojo (`.input-error`); dicho error debe desaparecer automáticamente tan pronto el usuario comience a escribir la corrección.
- **REQ-11 (Notificación Visual Toast)**: Al completarse un envío exitoso, el formulario debe limpiarse y desplegar una notificación flotante (Toast) confirmando la recepción de la consulta.

---

### 3.3. Requisitos de Gestión Colaborativa (Git)

- **REQ-12 (Estrategia de Ramas Feature Branching)**: El repositorio debe contener ramas separadas por integrante para cada área funcional del desarrollo:
  - `feature/html5-semantica`: Maquetación semántica y páginas interconectadas.
  - `feature/css-diseno-unificado`: Hoja de estilos externa y video responsivo.
  - `feature/js-validacion-formularios`: Lógica de formularios y slider interactivo.
  - `feature/qa-colaboracion-ers`: Resguardo de claves en `proximos_cambios/` y documentación ERS.
- **REQ-13 (Calidad de Commits)**: Los mensajes de commit deben describir con precisión la tarea realizada siguiendo el estándar *Conventional Commits*.
- **REQ-14 (Integración Documentada)**: Todas las ramas deben estar fusionadas a la rama principal `main` y su trazabilidad debe constar en el documento `COLABORACION.md`.

---

## 4. Anexos: Formulario de Casos de Uso del Sistema

### Caso de Uso CU-01: Consulta de Catálogo y Filtrado por Categoría
- **Actor Principal**: Cliente / Visitante.
- **Precondición**: El usuario ingresa a `productos.html`.
- **Flujo Principal**:
  1. El sistema carga el arreglo de 8 productos destacados desde `js/app.js`.
  2. El usuario hace clic en el botón de filtro "Fuerza y Pesas".
  3. El sistema intercepta el evento `click`, filtra los productos cuya propiedad `category` es igual a `"fuerza"` y repinta el contenedor `#products-grid`.
  4. El usuario hace clic en "Ver Especificaciones" de una mancuerna.
  5. El sistema despliega un mensaje Toast con el nombre, precio y atributos técnicos.
- **Postcondición**: La cuadrícula muestra solo los productos de la categoría seleccionada sin recargar la página.

---

### Caso de Uso CU-02: Envío de Consulta con Validación de Formulario
- **Actor Principal**: Cliente / Visitante.
- **Precondición**: El usuario se encuentra en `contacto.html`.
- **Flujo Principal**:
  1. El usuario completa su nombre, correo, teléfono, motivo y un mensaje de más de 15 caracteres.
  2. El usuario marca la casilla de aceptación de términos y condiciones.
  3. El usuario presiona el botón "Enviar Mensaje a FitnessChile".
  4. El script `js/app.js` valida secuencialmente cada campo.
  5. Como todos los campos son válidos, el sistema previene la recarga por defecto (`e.preventDefault()`).
  6. El sistema resetea el formulario, restablece el contador de caracteres a `0` y despliega la notificación flotante de confirmación.
- **Flujo Alternativo (Datos Inválidos)**:
  - En el paso 4, si el correo no tiene formato válido o el mensaje tiene menos de 15 caracteres:
    1. El sistema aplica la clase `.input-error` al campo defectuoso.
    2. Hace visible el elemento `<span class="field-error">` correspondiente con un mensaje claro y explicativo.
    3. Enfoca automáticamente el primer campo que presentó error para facilitar la corrección.
- **Postcondición**: El formulario no se remite con errores y el usuario recibe retroalimentación inmediata.
