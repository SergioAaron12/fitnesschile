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

## 2. Descripción General

En esta sección se describen todos aquellos factores que afectan al producto y a sus requisitos. No se describen los requisitos en sí mismos, sino su contexto operativo y de negocio. Esto permite comprender a cabalidad los requisitos detallados en la sección 3.

---

### 2.1. Perspectiva del Producto

La plataforma **FitnessChile** se concibe como un sistema web modular e independiente enfocado en el comercio electrónico de artículos deportivos, acondicionamiento y asesoría técnica. 

Aunque en esta primera entrega opera de forma autónoma en el lado del cliente (Front-End nativo), el producto está diseñado para interactuar e integrarse con un ecosistema corporativo mayor que abarca:
- **Módulo Front-End Web (Alcance Actual)**: Interfaz de usuario interactiva, catálogo dinámico, slider publicitario, páginas informativas, video educativo y captura de consultas con validaciones en cliente.
- **Módulo Backend y API REST (Fase 2)**: Capa de servicios encargada de la lógica de negocio, autenticación segura y persistencia de comandas u órdenes de compra.
- **Servidor de Base de Datos Relacional (Fase 2 / 3)**: Almacenamiento centralizado de clientes, productos, inventario y registros de contacto.
- **Pasarela Externa de Pagos (Fase 2 / 3)**: Conexión mediante API segura con Transbank Webpay Plus y Redcompra para liquidación de fondos.
- **Servicio Externo de Logística y Courier**: Interfaz de integración con servicios postales de Chile (Chilexpress / Starken) para cálculo automatizado de fletes y tracking.

```
+-------------------------------------------------------------------------------+
|                    ECOSISTEMA INTEGRAL DE FITNESSCHILE                        |
+-------------------------------------------------------------------------------+
|                                                                               |
|   +-----------------------------------------------------------------------+   |
|   |                 CAPA CLIENTE (FRONT-END) - FASE ACTUAL                |   |
|   |  - index.html (Hero Slider & Video Responsivo 16:9)                   |   |
|   |  - productos.html (Catálogo & Filtros de Categoría)                   |   |
|   |  - contacto.html (Formulario con Validación Preventiva JS)            |   |
|   |  - nosotros.html & blog.html (Identidad Corporativa y Guías)          |   |
|   +-----------------------------------+-----------------------------------+   |
|                                       | (Peticiones HTTP/HTTPS)               |
|                                       v                                       |
|   +-----------------------------------------------------------------------+   |
|   |                   CAPA DE SERVICIOS (BACKEND REST API)                |   |
|   |  - Gestión de Sesiones JWT & Hashing Bcrypt                           |   |
|   |  - Procesamiento de Comandas y Carrito de Compras                     |   |
|   +-------------------+-----------------------------------+---------------+   |
|                       |                                   |                   |
|                       v                                   v                   |
|   +---------------------------+       +-------------------------------+       |
|   |    BASE DE DATOS SQL      |       |  SERVICIOS EXTERNOS (APIs)    |       |
|   |  - PostgreSQL / MySQL     |       |  - Pasarela Transbank Webpay  |       |
|   |  - Productos, Stock y     |       |  - Notificaciones SMTP Email  |       |
|   |    Registros de Contacto  |       |  - Courier (Chilexpress API)  |       |
|   +---------------------------+       +-------------------------------+       |
+-------------------------------------------------------------------------------+
```

---

### 2.2. Funciones del Producto

A grandes rasgos, el sistema proporciona los siguientes bloques funcionales principales:

1. **Gestión de Identidad y Contenido Multimedia**:
   - Despliegue de imagen de marca con logotipo unificado y navegación con plecas.
   - Rotación automatizada de diapositivas en el Hero Banner con pausa interactiva al situar el cursor (`hover`).
   - Reproducción fluida y adaptable de videos demostrativos y formativos en formato 16:9 sin desfase visual.
2. **Navegación e Interconexión de Secciones**:
   - Enlace bidireccional entre 5 páginas HTML físicas, manteniendo la coherencia de menús y pie de página en toda la navegación.
3. **Exploración y Filtrado del Catálogo de Productos**:
   - Presentación de 8 artículos destacados organizados en cuadrículas de 4 columnas en escritorio.
   - Filtrado reactivo en el navegador por familias de producto (*Fuerza y Pesas*, *Suplementación*, *Accesorios*).
   - Consulta rápida de especificaciones técnicas mediante notificaciones tipo Toast.
4. **Captura y Validación de Consultas de Clientes**:
   - Formulario de contacto con campos asociados a etiquetas accesibles.
   - Validación sintáctica y algorítmica de datos antes de permitir el envío.
   - Retroalimentación inmediata mediante mensajes contextuales en rojo bajo cada control infractor.
5. **Suscripción al Boletín Informativo (Newsletter)**:
   - Registro de correos electrónicos desde el footer en todas las páginas con validación de sintaxis RFC.

```
                                +-----------------------------------+
                                |     SISTEMA WEB FITNESSCHILE      |
                                +-----------------+-----------------+
                                                  |
         +------------------------+---------------+---------------+-----------------------+
         |                        |                               |                       |
         v                        v                               v                       v
+------------------+    +-------------------+           +-------------------+   +--------------------+
|  MULTIMEDIA &    |    |  CATÁLOGO &       |           |   FORMULARIO DE   |   |   NEWSLETTER &     |
|  CONTENIDOS      |    |  FILTRADO         |           |   CONTACTO        |   |   NOTIFICACIONES   |
+------------------+    +-------------------+           +-------------------+   +--------------------+
| • Slider Hero    |    | • Vista Grilla    |           | • Validación RFC  |   | • Captura de Email |
| • Videos 16:9    |    | • Filtro Fuerza   |           | • Validación RUT  |   | • Alertas Toast    |
| • Artículos Blog |    | • Filtro Suplem.  |           | • Teléfono 9 Díg. |   | • Confirmaciones   |
| • Info Empresa   |    | • Especificación  |           | • Contador Texto  |   |   No Invasivas     |
+------------------+    +-------------------+           +-------------------+   +--------------------+
```

---

### 2.3. Características de los Usuarios

El sistema está diseñado para atender a diversos tipos de usuarios, cada uno con perfiles, nivel educacional, responsabilidades y competencias técnicas bien delimitadas:

| Tipo de Perfil | Nivel Educacional | Competencia Técnica | Responsabilidad en el Sistema |
| :--- | :--- | :--- | :--- |
| **1. Usuario Administrador** *(Gerencia / Operaciones)* | Técnico Superior o Universitario (Administración, Informática o afín). | • Manejo de PC básico e intermedio.<br>• Manejo de hojas de cálculo (Excel nivel medio).<br>• Conocimiento en gestión web. | • Supervisión global del catálogo y precios.<br>• Consulta de registros de clientes y métricas de visitas.<br>• Auditoría de consultas recibidas a través del formulario.<br>• Definición de políticas de despacho y garantías. |
| **2. Usuario Cajero / Asistente de Ventas y Despacho** | Enseñanza Media completa o Técnico en Comercio/Contabilidad. | • Uso de PC a nivel de usuario.<br>• Manejo fluido de navegadores web.<br>• Experiencia en sistemas de punto de venta (POS). | • Recepción de órdenes de pedido (comandas) emitidas por los clientes.<br>• Verificación de comprobantes de pago Webpay/Transferencias.<br>• Actualización del estado de preparación y entrega de paquetes.<br>• Emisión de boletas y facturas asociadas a la compra. |
| **3. Usuario Asesor Técnico / Preparador Deportivo** | Título profesional o técnico en Educación Física, Kinesiología o Nutrición. | • Uso de PC y dispositivos móviles a nivel de usuario.<br>• Manejo de herramientas de mensajería y correo. | • Recepción y resolución de las consultas especializadas ingresadas por el formulario de contacto.<br>• Asesoramiento a clientes sobre pesos adecuados de mancuernas, barras y dosificación de suplementación (Creatina, Whey Protein). |
| **4. Cliente Final / Deportista Visitante** | Sin requisito educacional específico. | • Navegación básica en Internet desde smartphones, tablets o PC. | • Exploración libre del catálogo y reproducción de videos.<br>• Filtrado de productos por categoría deportiva.<br>• Envío de consultas de cotización y despacho mediante el formulario.<br>• Suscripción al boletín de descuentos (Newsletter). |

---

### 2.4. Restricciones del Sistema

Durante la etapa de diseño y desarrollo se aplican las siguientes limitaciones y restricciones normativas:

1. **Políticas de la Empresa**:
   - Cumplimiento de la **Ley del Consumidor de Chile (Ley N° 19.496)**: Precios informados en moneda de curso legal ($ CLP) con IVA incluido, y especificación clara de la garantía legal de 12 meses.
   - Protección de datos personales conforme a la **Ley N° 19.628**: Los datos recopilados en los formularios se utilizan exclusivamente para responder al cliente y no se transfieren a terceros sin consentimiento.
2. **Limitaciones de Hardware**:
   - El sistema debe funcionar fluidamente en computadores y dispositivos móviles de gama de entrada (mínimo procesador de 2 núcleos, 2 GB de memoria RAM y pantallas desde 360px de resolución horizontal).
3. **Interfaces con Otras Aplicaciones**:
   - Dependencia de los servidores de **YouTube (No-Cookie)** para la carga y reproducción de videos formativos sin almacenar archivos de video pesados en el servidor local.
   - Dependencia de la API de **Google Fonts** para la entrega de las fuentes tipográficas *Plus Jakarta Sans* y *Oswald*.
4. **Operaciones Paralelas**:
   - La arquitectura Front-End debe permitir la navegación y consulta simultánea de múltiples clientes en distintas pestañas o dispositivos sin colisiones de sesión local.
5. **Funciones de Auditoría**:
   - El repositorio de código debe mantener un registro inmutable de commits bajo la convención *Conventional Commits* con fecha, autor y mensaje descriptivo para cada componente.
6. **Funciones de Control**:
   - La interfaz debe implementar validación obligatoria en el cliente para sanitizar los datos de entrada, impidiendo el envío de cadenas vacías o textos que no cumplan los patrones de expresión regular.
7. **Lenguajes de Programación y Estándares**:
   - Uso estricto y exclusivo de **HTML5 semántico, CSS3 moderno y JavaScript Vanilla (ES6+)**. Queda restringido el uso de librerías externas o frameworks pesados (como React, Angular o Bootstrap) en esta fase de maquetación base.
8. **Protocolos de Comunicación**:
   - La aplicación debe servirse a través de los protocolos estándar **HTTP/1.1** y **HTTPS (TLS 1.2 o superior)**.
9. **Requisitos de Habilidad del Equipo**:
   - Los programadores deben dominar el estándar DOM W3C, maquetación CSS Grid / Flexbox y manipulación de eventos asíncronos nativos.
10. **Criticidad de la Aplicación**:
    - Criticidad **Media-Alta**: La disponibilidad de la información de catálogo y el correcto funcionamiento del canal de contacto inciden directamente en las ventas y la credibilidad comercial de FitnessChile SpA.
11. **Consideraciones de Seguridad**:
    - Resguardo estricto de credenciales y claves: ningún archivo en producción debe exponer contraseñas en texto plano ni tokens de prueba. Todas las claves previas fueron desacopladas y archivadas en la carpeta protegida `proximos_cambios/`.

---

### 2.5. Suposiciones y Dependencias

Los requisitos establecidos en este documento se sustentan bajo los siguientes supuestos operativos y técnicos:

1. **Conectividad a Internet**: Se asume que el usuario final dispone de una conexión a Internet de al menos 1 Mbps para descargar los estilos, fuentes tipográficas e interactuar con los videos embebidos de alta definición.
2. **Habilitación de JavaScript en el Navegador**: Se asume que los clientes no tienen deshabilitada la ejecución de JavaScript en sus navegadores; en caso contrario, las validaciones dinámicas y el slider se degradarán a elementos estáticos.
3. **Estabilidad de Proveedores de Contenido (CDNs)**: Se depende de la alta disponibilidad (SLA 99.9%) de los servidores de Google Fonts y YouTube. Si estos servicios experimentan caídas temporales, el sitio recurre a fuentes del sistema tipográfico local (`sans-serif`, `system-ui`).
4. **Persistencia Local (LocalStorage)**: Se presupone que el navegador admite almacenamiento web local en caso de reactivar los módulos de autenticación o carrito en la fase siguiente.
5. **Evolución del Backend**: Si en la Fase 2 el equipo decide implementar el backend en Node.js/Express, Python/Django o Java Spring Boot, los contratos de datos del formulario se mantendrán estables gracias a la estructura estándar de nombres de campo (`name`, `email`, `phone`, `subject`, `message`).

---

### 2.6. Requisitos Futuros (Planificación Fases 2 y 3)

Las siguientes funcionalidades no forman parte de la evaluación inicial básica, pero se encuentran planificadas y documentadas en `proximos_cambios/NOTAS_ERS_FUTURAS.md` para su desarrollo en las siguientes etapas:

1. **Integración de Pasarela de Pagos Transbank Webpay Plus**:
   - Conexión vía SDK oficial con Transbank para procesamiento de transacciones con tarjeta de débito (Redcompra) y crédito en cuotas sin interés.
2. **Persistencia en Base de Datos Relacional (PostgreSQL / MySQL)**:
   - Migración del arreglo estático `PRODUCTS` a una base de datos relacional con tablas para categorías, productos, inventario en stock, clientes y órdenes de compra.
3. **Panel Administrativo (Dashboard de Gestión)**:
   - Interfaz restringida para los perfiles **Administrador** y **Cajero**, con login seguro mediante tokens JWT y contraseñas hasheadas con algoritmo Bcrypt.
   - Formularios CRUD (Crear, Leer, Actualizar y Eliminar) para el catálogo de productos y precios.
4. **Cálculo Dinámico de Envíos por Región**:
   - Conexión con APIs de couriers nacionales (Chilexpress o Starken) para cotizar el despacho automático según el peso total de la comanda y la comuna de destino.
5. **Módulo de Comentarios y Valoraciones de Productos**:
   - Permitir a los clientes autenticados calificar con estrellas (1 a 5) y dejar reseñas verificadas en cada producto.

---

---

## 3. Requisitos Específicos

Esta sección contiene los requisitos a un nivel de detalle suficiente como para permitir a los diseñadores diseñar un sistema que satisfaga estos requisitos, y que permita al equipo de pruebas planificar y realizar las pruebas que demuestren si el sistema satisface, o no, los requisitos. Todo requisito aquí especificado describirá comportamientos externos del sistema, perceptibles por parte de los usuarios, operadores y otros sistemas. Esta es la sección más larga e importante de la ERS.

### Principios Aplicados en la Redacción:
1. **Legibilidad Universal**: Redactado en lenguaje claro, técnico y accesible para personas de formación diversa (desarrolladores de software, diseñadores UI/UX, analistas de calidad QA y personal comercial de FitnessChile).
2. **Referenciación Documental**: Se citan normativas técnicas oficiales (estándar IEEE 830-1998, directrices W3C WCAG 2.1, RFC 5322 para correos) y el marco legal chileno (Ley N° 19.496 del Consumidor y Ley N° 19.628 de Protección de Datos).
3. **Identificación Unívoca**: Cada requisito posee una codificación estándar inconfundible:
   - `RI-UI-xx`: Requisitos de Interfaces de Usuario.
   - `RI-HW-xx`: Requisitos de Interfaces de Hardware.
   - `RI-SW-xx`: Requisitos de Interfaces de Software.
   - `RI-COM-xx`: Requisitos de Interfaces de Comunicación.
   - `RF-xx`: Requisitos Funcionales.
   - `RNF-xx`: Requisitos No Funcionales (Rendimiento, Seguridad, Fiabilidad, Disponibilidad, Mantenibilidad, Portabilidad).
   - `RO-xx`: Otros Requisitos (Legales y Accesibilidad).

### Matriz de Características de Calidad de los Requisitos (IEEE 830):
- **Corrección**: Todo requisito refleja necesidades reales operativas de FitnessChile SpA.
- **No ambiguos**: Poseen una interpretación única sustentada en diagramas de flujo, expresiones regulares formales y descripciones operativas.
- **Completos**: Se definen tanto las respuestas a entradas válidas como a situaciones de excepción y error.
- **Consistentes**: No existen contradicciones lógicas ni técnicas entre requerimientos.
- **Clasificados**: Categorizados por importancia (*Esencial*, *Condicional*, *Opcional*) para priorización del ciclo de desarrollo.
- **Verificables**: Cada requisito cuenta con criterios de aceptación objetivos y medibles mediante pruebas finitas.
- **Modificables**: Estructura modular y numerada que permite incorporar ampliaciones sin alterar la integridad del documento.
- **Trazables**: Identifican el origen del requerimiento y su correspondencia en archivos de código (`.html`, `.css`, `.js`).

---

### 3.1. Requisitos Comunes de las Interfaces

Descripción detallada de todas las entradas y salidas del sistema de software entre el usuario, el hardware, los componentes de software de soporte y las redes de comunicación.

#### 3.1.1. Interfaces de Usuario (UI)
- **RI-UI-01 (Distribución Estructural)**:
  - Las interfaces de usuario consisten en páginas web con una distribución estandarizada:
    1. **Menú Superior Fijo / Header**: Logotipo corporativo a la izquierda, barra de navegación principal (`<nav>`) con hipervínculos a las 5 secciones, y botón destacado de acción rápida / catálogo.
    2. **Área de Contenido Principal (`<main>`)**: Sección modular para desplegar la funcionalidad activa (Hero Banner con slider en Home, cuadrícula de productos filtrable, contenido institucional, artículos de blog, o formulario de contacto).
    3. **Pie de Página Informativo (`<footer>`)**: Ubicado al final de cada página, compuesto por 4 columnas: reseña institucional, enlaces rápidos de navegación, canales de contacto comercial y formulario de suscripción a boletín informativo (Newsletter).
- **RI-UI-02 (Paleta de Colores y Estilo Visual)**:
  - El cliente FitnessChile SpA ha definido una paleta de colores de alto impacto orientada a la energía y la seriedad técnica:
    - *Azul Primario*: `#0284C7` (confianza y solidez técnica).
    - *Naranja Enérgico / Acento*: `#FF4D2E` (llamados a la acción, botones principales y alertas visuales).
    - *Superficies Oscuras*: `#0F172A` y `#1E293B` (fondos de footer, tarjetas destacadas y banners).
    - *Fondos Claros de Lectura*: `#F8FAFC` y `#FFFFFF` (máxima legibilidad en artículos y productos).
    - *Estados de Validación*: Verde `#10B981` (éxito) y Rojo Carmín `#EF4444` (error de validación).
- **RI-UI-03 (Tipografía Corporativa)**:
  - Títulos y encabezados: `Oswald` (sans-serif condensada de alta visibilidad para dar presencia deportiva).
  - Cuerpo de texto y controles de formulario: `Plus Jakarta Sans` (sans-serif humanista óptima para lectura en pantalla pequeña).
- **RI-UI-04 (Entradas del Usuario)**:
  - Clics en enlaces y botones, pulsaciones táctiles, escritura en cajas de texto (`input type="text"`, `input type="email"`, `input type="tel"`), selección en desplegables (`<select>`), marcado de casillas (`input type="checkbox"`) y redacción en área multilínea (`<textarea>`).
- **RI-UI-05 (Salidas del Sistema)**:
  - Despliegue de cuadrículas de tarjetas de producto con precios y stock, mensajes de advertencia contextual bajo los campos infractores (`.field-error`), contadores numéricos en vivo, notificaciones emergentes Toast temporizadas (3.5 segundos) e incrustación de reproductores de video adaptativos.

#### 3.1.2. Interfaces de Hardware
- **RI-HW-01 (Conexión a Dispositivos Touch Móviles)**:
  - El sistema debe conectarse y operar con total fluidez en dispositivos touch móviles (teléfonos inteligentes Android / iOS y tablets táctiles).
  - Todos los botones interactivos, pestañas de filtro y campos de texto deben poseer una zona de contacto táctil (*touch target*) de al menos **44 × 44 píxeles**, impidiendo pulsaciones erróneas involuntarias.
- **RI-HW-02 (Terminales de Punto de Venta - POS y Pantallas de Mesón)**:
  - La interfaz de pedidos y consulta debe adaptarse a terminales táctiles de caja o mesón de atención física (pantallas táctiles todo-en-uno de 10" a 15" con resolución nativa de 1024×768 px o superior).
- **RI-HW-03 (Periféricos de Entrada/Salida)**:
  - El software debe responder de manera transparente tanto a eventos de teclado/ratón físico como a teclados virtuales táctiles en pantalla móvil, adaptando el tipo de teclado según el input (`inputmode="numeric"`, `type="email"`, `type="tel"`).

#### 3.1.3. Interfaces de Software
- **RI-SW-01 (Navegadores Web Compatibles)**:
  - El producto se ejecuta sobre motores de navegación modernos: Google Chrome (versión 90+), Mozilla Firefox (versión 88+), Microsoft Edge (versión 90+) y Apple Safari (versión 14+), haciendo uso exclusivo de estándares W3C ECMAScript 6+ y CSS3.
- **RI-SW-02 (API de Tipografías - Google Fonts)**:
  - *Propósito*: Carga asíncrona de las fuentes tipográficas oficiales `Plus Jakarta Sans` y `Oswald`.
  - *Definición de Interfaz*: Enlace externo mediante elemento `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?...">` con pre-conexión DNS (`rel="preconnect"`). Si no hay conexión externa, se utilizan fuentes de reserva del sistema operativo (`system-ui`, `sans-serif`).
- **RI-SW-03 (API de Video Embebido - YouTube IFrame)**:
  - *Propósito*: Reproducción de material audiovisual formativo de entrenamiento y presentación de la empresa sin alojar archivos de video pesados en el servidor local.
  - *Definición de Interfaz*: Elemento `<iframe>` apuntando a `https://www.youtube-nocookie.com/embed/{VIDEO_ID}` con parámetros de configuración `rel=0&modestbranding=1` y encapsulado en contenedor CSS con relación de aspecto `16:9`.
- **RI-SW-04 (Módulo Futuro: Pasarela de Pagos Transbank Webpay Plus - Fase 2)**:
  - *Propósito*: Procesamiento seguro de transacciones bancarias con tarjeta de débito y crédito.
  - *Definición de Interfaz*: Conexión vía API REST mediante peticiones HTTPS con intercambio de tokens de sesión y payloads estructurados en formato JSON.

#### 3.1.4. Interfaces de Comunicación
- **RI-COM-01 (Protocolos de Transporte y Seguridad)**:
  - Las comunicaciones entre el cliente (navegador web o terminal móvil) y el servidor de alojamiento se efectúan bajo el protocolo **HTTP/1.1** y de forma obligatoria bajo **HTTPS (HTTP sobre TLS 1.2 o TLS 1.3)** en producción, garantizando el cifrado de datos extremo a extremo a través de los puertos estándar 80 y 443.
- **RI-COM-02 (Formato e Intercambio de Mensajes)**:
  - Las transacciones de datos se gestionan mediante payloads codificados en juego de caracteres **UTF-8**, utilizando el formato estándar **JSON (`application/json`)** para la comunicación con futuras APIs de backend o serialización de formularios con codificación `application/x-www-form-urlencoded`.

---

### 3.2. Requisitos Funcionales

Definición de las acciones fundamentales que realiza el software al recibir información, procesarla, validar reglas de negocio y producir resultados visuales y de datos.

#### 3.2.1. Requisito Funcional RF-01: Crear Comanda / Registrar Pedido en el Sistema
- **Identificador**: `RF-01`
- **Importancia**: Esencial (Prioridad Alta)
- **Actores**: Asistente de Ventas / Cajero / Garzón de tienda deportiva / Cliente.
- **Descripción**: El garzón o asistente de ventas debe poder registrar los diferentes productos deportivos que el cliente solicita, consultando el menú/catálogo disponible, seleccionando las unidades de cada artículo, calculando el subtotal, el IVA (19%) y el monto total de la comanda para su posterior despacho o entrega.
- **Precondiciones**:
  - El usuario debe tener cargado el catálogo de productos disponibles en pantalla.
  - Los productos deben poseer precio unitario en moneda chilena ($ CLP) y estado de disponibilidad activo.
- **Comprobación de Validez de las Entradas**:
  - Cada ítem seleccionado debe corresponder a un identificador válido (`id` numérico).
  - La cantidad solicitada debe ser un número entero mayor o igual a 1 y menor o igual al stock máximo por transacción (99 unidades).
- **Secuencia Exacta de Operaciones**:
  1. El actor visualiza el catálogo de productos dividido por categorías (Fuerza, Cardio, Suplementos, Accesorios).
  2. El actor selecciona un producto y especifica la cantidad deseada.
  3. El sistema añade el producto a la lista temporal de la comanda.
  4. El sistema calcula automáticamente:
     $$\text{Subtotal Neto} = \sum (\text{Precio Base} \times \text{Cantidad})$$
     $$\text{IVA (19\%)} = \text{Subtotal Neto} \times 0.19$$
     $$\text{Total Comanda} = \text{Subtotal Neto} + \text{IVA}$$
  5. El actor revisa el resumen y presiona el botón "Confirmar Pedido".
  6. El sistema genera un código unívoco de pedido (ej: `CMD-2026-00128`) y emite una confirmación en pantalla.
- **Respuesta a Situaciones Anormales**:
  - Si se intenta ingresar una cantidad no numérica o menor a 1, el sistema bloquea la acción y emite una alerta indicando *"La cantidad debe ser un número entero positivo"*.
  - Si el catálogo no se encuentra disponible, el sistema despliega un mensaje amigable solicitando reintentar la operación.
- **Parámetros**:
  - Entrada: `producto_id` (Entero), `cantidad` (Entero positivo), `observaciones_despacho` (Texto opcional).
  - Salida: `numero_comanda` (String alfanumérico), `detalle_items` (Array de objetos), `total_pago` (Entero $ CLP).
- **Requisitos Lógicos para Almacenamiento en Base de Datos**:
  - Tabla `ordenes_comanda`: `id_orden` (PK, INT AUTO_INCREMENT), `codigo_comanda` (VARCHAR 20, NOT NULL, UNIQUE), `fecha_hora` (DATETIME, NOT NULL), `estado` (ENUM: 'Pendiente', 'Pagado', 'Despachado'), `monto_total` (INT, NOT NULL).
  - Tabla `detalle_comanda`: `id_detalle` (PK, INT), `id_orden` (FK), `id_producto` (FK), `cantidad` (INT, NOT NULL), `precio_unitario` (INT, NOT NULL).

#### 3.2.2. Requisito Funcional RF-02: Filtrado y Consulta Dinámica de Catálogo
- **Identificador**: `RF-02`
- **Importancia**: Esencial (Prioridad Alta)
- **Actores**: Cliente Final / Visitante / Asistente de Ventas.
- **Descripción**: El sistema debe permitir al usuario explorar el inventario de equipamiento y suplementos, filtrando los artículos en tiempo real por su categoría deportiva sin recargar la página web.
- **Comprobación de Validez**: El filtro seleccionado debe coincidir con una de las categorías válidas (`"todos"`, `"fuerza"`, `"cardio"`, `"suplementos"`, `"accesorios"`).
- **Secuencia de Operaciones**:
  1. El usuario accede a la sección de productos (`productos.html`).
  2. El sistema renderiza la totalidad de los artículos en una cuadrícula CSS responsiva.
  3. El usuario pulsa un botón de filtro de categoría (ej: "Suplementación").
  4. El script intercepta el evento, remueve la clase `.active` de los botones anteriores y la asigna al botón pulsado.
  5. El sistema filtra el arreglo en memoria y actualiza el DOM mostrando únicamente los artículos coincidentes.
  6. Al hacer clic en "Ver Especificaciones", el sistema despliega un Toast con el detalle técnico del producto.
- **Salida**: Cuadrícula de tarjetas con imagen representativa, etiqueta de categoría, nombre comercial, descripción técnica y precio en $ CLP con formato de miles.

#### 3.2.3. Requisito Funcional RF-03: Validación y Envío de Consultas de Contacto
- **Identificador**: `RF-03`
- **Importancia**: Esencial (Prioridad Alta)
- **Actores**: Cliente / Visitante / Asesor Técnico Deportivo.
- **Descripción**: El sistema debe proporcionar un formulario interactivo que permita al usuario enviar consultas comerciales o de asesoría física, validando estrictamente cada campo en el cliente antes de procesar el envío.
- **Comprobación de Validez de las Entradas**:
  - `Nombre`: No vacío, mínimo 3 caracteres, exclusivamente letras y espacios.
  - `Correo Electrónico`: Sintaxis RFC formal (`/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`).
  - `Teléfono`: Estructura numérica chilena de 9 dígitos (ej: `912345678` o `+56 9 1234 5678`).
  - `Motivo de Consulta`: Selección obligatoria distinta del valor inicial nulo.
  - `Mensaje`: Texto con longitud mínima de 15 caracteres y máxima de 500 caracteres.
  - `Términos`: Casilla de aceptación marcada obligatoriamente (`checked`).
- **Secuencia de Operaciones**:
  1. El usuario completa los datos en `contacto.html`.
  2. En tiempo real, el contador de caracteres actualiza el valor visible junto al área de texto (`X / 500`).
  3. El usuario presiona el botón "Enviar Mensaje".
  4. El sistema ejecuta la rutina de validación secuencial.
  5. Si todos los campos cumplen las reglas, se previene la recarga por defecto, se limpian los campos del formulario y se despliega una alerta flotante Toast confirmando la recepción.
- **Respuesta a Situaciones Anormales**:
  - Si un campo no cumple el patrón, el sistema aplica la clase `.input-error`, hace visible el elemento `<span class="field-error">` correspondiente con un mensaje explicativo e interactivo, y posiciona el foco del cursor en el primer campo erróneo.
  - El error desaparece dinámicamente en el momento exacto en que el usuario digita nuevos caracteres correctos.

#### 3.2.4. Requisito Funcional RF-04: Suscripción a Boletín Informativo (Newsletter)
- **Identificador**: `RF-04`
- **Importancia**: Condicional (Prioridad Media)
- **Actores**: Cliente / Visitante.
- **Descripción**: El usuario puede ingresar su correo electrónico en el campo dedicado del pie de página (`footer`) en cualquiera de las 5 páginas del sitio para suscribirse a ofertas y guías de entrenamiento.
- **Comprobación de Validez**: El correo ingresado no debe estar en blanco y debe cumplir con la expresión regular de correo electrónico.
- **Secuencia de Operaciones**:
  1. El usuario ingresa su correo y presiona el botón de suscripción.
  2. El sistema valida el formato del correo.
  3. Si es correcto, limpia el campo de texto y muestra un Toast confirmando: *"¡Gracias por suscribirte al boletín de FitnessChile!"*.
  4. Si es incorrecto, el campo se resalta y muestra una alerta solicitando un correo válido.

#### 3.2.5. Requisito Funcional RF-05: Reproducción y Control Multimedia (Video y Slider)
- **Identificador**: `RF-05`
- **Importancia**: Deseable / Condicional (Prioridad Media)
- **Actores**: Cliente / Visitante.
- **Descripción**: El portal principal debe presentar un carrusel o slider de diapositivas promocionales interactivo con botones de avance y retroceso, e integrar un reproductor de video de alta definición que se adapte proporcionalmente a cualquier resolución de pantalla.
- **Secuencia de Operaciones**:
  1. Al cargar la página de inicio (`index.html`), el slider muestra la primera diapositiva con información destacada.
  2. El usuario hace clic en las flechas de navegación (`prev` / `next`) o en los indicadores inferiores para alternar entre diapositivas con una transición suave.
  3. En la sección de video, el usuario pulsa el botón de reproducción del reproductor embebido de YouTube, reproduciendo el video formativo con controles nativos en proporción 16:9 sin distorsión.

---

### 3.3. Requisitos No Funcionales

Especificación de los requisitos de calidad del sistema, los cuales son objetivos y completamente mesurables.

#### 3.3.1. Requisitos de Rendimiento
- **RNF-REND-01 (Tiempo de Respuesta en Interacciones)**: El 95% de las acciones ejecutadas por el usuario en el cliente (filtrado de productos, cambio de diapositiva en el slider y validación en vivo de formularios) debe responder visualmente en un tiempo **inferior a 200 milisegundos**.
- **RNF-REND-02 (Tiempo de Carga Inicial)**: El tiempo de primer renderizado con contenido (*First Contentful Paint - FCP*) de cualquiera de las 5 páginas web debe ser **menor a 1.5 segundos** en conexiones de banda ancha estándar y menor a 2.5 segundos en redes móviles 3G Rápido / 4G.
- **RNF-REND-03 (Consumo de Memoria y Recursos)**: La huella de memoria RAM ocupada por la aplicación en la pestaña del navegador no debe exceder los **65 Megabytes (MB)** durante la ejecución de las animaciones y filtros.
- **RNF-REND-04 (Optimización de Peso de Transferencia)**: El peso total de los archivos estáticos transferidos por página (excluyendo el stream de video de terceros) debe ser **inferior a 1.5 Megabytes (MB)**, con imágenes debidamente comprimidas.

#### 3.3.2. Requisitos de Seguridad
- **RNF-SEG-01 (Sanitización y Prevención de Inyección XSS)**: Todos los valores ingresados en los campos de formulario deben ser tratados estrictamente como texto plano mediante la propiedad `textContent` o `value` al ser manipulados en JavaScript, impidiendo la inyección de código ejecutable malicioso (*Cross-Site Scripting*).
- **RNF-SEG-02 (Cifrado en Tránsito - HTTPS)**: La totalidad del tráfico web entre el navegador del usuario y el servidor debe canalizarse mediante protocolo seguro **HTTPS con cifrado TLS 1.2 o superior**, bloqueando intentos de interceptación de datos (*Man-in-the-Middle*).
- **RNF-SEG-03 (Aislamiento de Credenciales y Claves)**: El código fuente público no debe contener bajo ninguna circunstancia contraseñas, tokens de API ni credenciales de prueba. Dichos elementos se mantienen aislados y protegidos en el directorio `proximos_cambios/` para auditorías internas.
- **RNF-SEG-04 (Protección de Integridad y Cabeceras)**: Los recursos embebidos externos (YouTube y Google Fonts) deben cargarse empleando dominios verificados y seguros con atributos de seguridad adecuados.

#### 3.3.3. Requisitos de Fiabilidad
- **RNF-FIA-01 (Tasa de Fallas Permisible)**: El sistema debe presentar una tasa de error inferior a **1 fallo por cada 1.000 operaciones** de usuario (tasa de éxito del 99.9%).
- **RNF-FIA-02 (Tiempo Medio Entre Fallos - MTBF)**: El tiempo medio entre interrupciones operativas imputables al software del sistema debe ser **superior a 720 horas continuas** de funcionamiento.
- **RNF-FIA-03 (Degradación Elegante - Fallback)**: En caso de indisponibilidad de la conexión externa hacia las CDNs de fuentes tipográficas, el software debe degradarse de manera transparente cargando fuentes estándar del sistema operativo sin desconfigurar la maquetación ni bloquear la navegación.

#### 3.3.4. Requisitos de Disponibilidad
- **RNF-DISP-01 (Porcentaje de Disponibilidad Final)**: El sistema debe garantizar una disponibilidad operativa mínima del **99.5% del tiempo mensual**, lo que equivale a un tiempo máximo de indisponibilidad no programada inferior a 3.6 horas por mes calendario.
- **RNF-DISP-02 (Ventanas de Mantenimiento)**: Las tareas de mantenimiento preventivo, actualizaciones de código y respaldos de información deben programarse exclusivamente en horario de bajo tráfico (entre las 02:00 y las 05:00 horas CLT).

#### 3.3.5. Requisitos de Mantenibilidad
- **RNF-MANT-01 (Arquitectura Modular Desacoplada)**: El software debe separar taxativamente sus responsabilidades en tres capas independientes:
  - Estructura y Semántica: Archivos `.html` puros.
  - Presentación y Estilos: Hoja de estilos centralizada `css/style.css`.
  - Comportamiento y Dinamismo: Lógica nativa en `js/app.js`.
- **RNF-MANT-02 (Estándares de Código y Documentación)**: Todo el código fuente debe incluir comentarios técnicos concisos, mantener indentación uniforme de 2 espacios y utilizar la convención de nomenclatura semántica en español e inglés técnico estándar.
- **RNF-MANT-03 (Mantenimiento de Catálogo sin Modificar HTML)**: Los datos del catálogo deportivo residen en una estructura de datos centralizada tipo JSON/Arreglo en JavaScript, permitiendo a cualquier desarrollador agregar, editar o eliminar productos sin modificar el marcado HTML de la página.
- **RNF-MANT-04 (Auditoría de Control de Versiones)**: La mantención del código debe registrarse obligatoriamente en el repositorio Git bajo la convención *Conventional Commits*, posibilitando la trazabilidad de autores y cambios en cualquier momento.

#### 3.3.6. Requisitos de Portabilidad
- **RNF-PORT-01 (Compatibilidad Multi-Navegador - Cross Browser)**: El sistema debe funcionar y verse idénticamente en los navegadores web mayoritarios del mercado: Google Chrome, Mozilla Firefox, Microsoft Edge y Apple Safari.
- **RNF-PORT-02 (Diseño Adaptativo - Responsive Web Design)**: El sitio debe adaptar su disposición visual de forma fluida a pantallas con anchos que abarcan desde dispositivos móviles de **360 píxeles** hasta pantallas de escritorio y monitores **4K (3840 píxeles)**.
- **RNF-PORT-03 (Independencia del Sistema Operativo)**: El software se ejecuta en el navegador web del cliente de forma completamente agnóstica al sistema operativo subyacente (Windows 10/11, macOS, distribuciones Linux, Android 9+ e iOS 13+).
- **RNF-PORT-04 (Independencia del Servidor Web)**: El código fuente es 100% estático en su primera fase, lo que permite su despliegue y traslado inmediato en cualquier servidor web estándar (Apache HTTP Server, Nginx, Microsoft IIS, GitHub Pages, Firebase Hosting o contenedores Docker) sin necesidad de compilar dependencias en el servidor.

---

### 3.4. Otros Requisitos

#### 3.4.1. Requisitos Legales y Normativos
- **RO-LEG-01 (Ley del Consumidor de Chile N° 19.496)**: Todos los precios informados en el catálogo deben presentarse en moneda de curso legal chilena ($ CLP), especificando de forma transparente que incluyen el Impuesto al Valor Agregado (IVA de 19%) y garantizando el derecho a la garantía legal de 12 meses por fallas de fábrica.
- **RO-LEG-02 (Ley de Protección de Datos Personales N° 19.628)**: Los datos capturados en el formulario de contacto (nombre, correo electrónico, teléfono) no serán comercializados ni transferidos a terceros, utilizándose exclusivamente para dar respuesta a la solicitud del usuario con su consentimiento previo informado.

#### 3.4.2. Requisitos de Accesibilidad Web (a11y)
- **RO-ACC-01 (Cumplimiento de Pautas WCAG 2.1 Nivel AA)**:
  - Todas las imágenes de contenido deben incorporar el atributo `alt` descriptivo.
  - La relación de contraste cromático entre los textos y sus fondos debe ser superior a **4.5:1** para texto normal y **3.0:1** para títulos de gran tamaño.
  - Todos los campos de formulario deben contar con etiquetas `<label for="...">` explícitamente asociadas y textos de error accesibles vinculados con `aria-describedby`.
  - La navegación debe ser 100% operable mediante teclado (`Tab`, `Shift+Tab`, `Enter`, `Espacio`), con un indicador visual de foco visible y nítido (`:focus-visible`).

---

## 4. Anexos: Formulario de Casos de Uso del Sistema

### Caso de Uso CU-01: Creación de Comanda / Registro de Pedido en Tienda
- **Identificador**: `CU-01`
- **Actor Principal**: Garzón / Asistente de Ventas / Cajero.
- **Precondición**: El asistente inicia la aplicación en el terminal táctil de atención y accede al catálogo de productos.
- **Flujo Principal**:
  1. El cliente solicita una comanda de 2 Mancuernas Hexagonales de 15 kg y 1 Creatina Creapure 300g.
  2. El asistente busca los artículos en el catálogo mediante la categoría o visualización directa.
  3. El asistente selecciona cada ítem e indica la cantidad correspondiente.
  4. El sistema agrega los artículos a la comanda activa, calcula el subtotal neto ($105.034), el IVA 19% ($19.956) y el valor total ($124.990).
  5. El asistente revisa los montos y presiona el botón "Confirmar Pedido".
  6. El sistema genera el código de orden `CMD-2026-00104`, emite una confirmación en pantalla y prepara los datos para emisión del comprobante.
- **Flujos Alternativos**:
  - *Cantidad errónea*: Si el asistente digita por error "0" o un valor negativo, el sistema impide la adición y alerta que la cantidad mínima es 1 unidad.
- **Postcondición**: El pedido queda formalmente registrado en el sistema con su detalle de ítems, listo para ser despachado o cancelado en caja.

---

### Caso de Uso CU-02: Consulta de Catálogo y Filtrado por Categoría
- **Identificador**: `CU-02`
- **Actor Principal**: Cliente Final / Visitante.
- **Precondición**: El usuario ingresa a la página de productos (`productos.html`).
- **Flujo Principal**:
  1. El sistema carga la cuadrícula de 8 productos destacados desde `js/app.js`.
  2. El usuario hace clic en el botón de filtro "Fuerza y Pesas".
  3. El sistema intercepta el evento, filtra los productos cuya propiedad `category` es igual a `"fuerza"` y repinta la cuadrícula `#products-grid`.
  4. El usuario hace clic en "Ver Especificaciones" de una mancuerna.
  5. El sistema despliega un mensaje Toast con el nombre, precio y atributos técnicos del producto.
- **Postcondición**: La cuadrícula muestra solo los productos de la categoría seleccionada sin recargar la página.

---

### Caso de Uso CU-03: Envío de Consulta con Validación de Formulario
- **Identificador**: `CU-03`
- **Actor Principal**: Cliente Final / Visitante.
- **Precondición**: El usuario se encuentra en `contacto.html`.
- **Flujo Principal**:
  1. El usuario completa su nombre, correo, teléfono de 9 dígitos, motivo de consulta y un mensaje de más de 15 caracteres.
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
- **Postcondición**: El formulario no se remite con errores y el usuario recibe retroalimentación visual inmediata.

