# INFORME DE TRABAJO COLABORATIVO Y GESTIÓN DE REPOSITORIO (GIT)

Este documento certifica y describe la metodología de trabajo colaborativo empleada en el desarrollo de la plataforma web **FitnessChile**, cumpliendo con los estándares de control de versiones, trazabilidad y distribución de tareas del equipo.

---

## 👥 1. Equipo de Desarrollo y Distribución de Tareas

| Integrante | Rol en el Proyecto | Tareas Principales Asignadas | Rama de Trabajo |
| :--- | :--- | :--- | :--- |
| **Integrante 1** | *Lead Front-End & Arquitectura HTML5* | • Creación y maquetación de páginas HTML5 (`index.html`, `productos.html`, `nosotros.html`, `blog.html`, `contacto.html`).<br>• Implementación de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).<br>• Enlazado e interconexión fluida mediante hipervínculos funcionales y accesibilidad (ARIA). | `feature/html5-semantica` |
| **Integrante 2** | *Diseñador UI & Especialista CSS3* | • Definición del sistema de diseño y tokens `:root` en `css/style.css`.<br>• Maquetación responsiva con CSS Grid y Flexbox.<br>• Integración y estilos del reproductor de video embebido responsivo (16:9).<br>• Estilización de formularios con estados de validación (`.input-error`, `.field-error`). | `feature/css-diseno-unificado` |
| **Integrante 3** | *Desarrollador JavaScript Front-End* | • Programación del motor de validación en tiempo real en `js/app.js`.<br>• Mensajes de error contextuales y sugerencias bajo cada campo.<br>• Implementación del Slider Hero automatizado con pausa interactiva en hover.<br>• Lógica de filtrado de productos por categoría y contador de caracteres. | `feature/js-validacion-formularios` |
| **Integrante 4** | *Control de Calidad (QA) & Git Manager* | • Resguardo de credenciales y claves en la carpeta `proximos_cambios/` para la fase ERS.<br>• Gestión de ramas, revisión de pull requests y merges en rama `main`.<br>• Pruebas funcionales de formularios y verificación de estándares W3C. | `feature/qa-colaboracion-ers` |

---

## 🌳 2. Estrategia de Ramas (Git Workflow)

Se utilizó el modelo **Feature Branching**:
1. **`main`**: Rama principal con versiones estables integradas y listas para evaluación/despliegue.
2. **Ramas de Características (`feature/*`)**: Cada miembro del equipo trabajó en su propia rama aislada, evitando colisiones de código y permitiendo revisiones modulares:
   - `feature/html5-semantica`: Estructuración semántica de las 5 páginas interconectadas.
   - `feature/css-diseno-unificado`: Hoja de estilos externa global y adaptabilidad móvil.
   - `feature/js-validacion-formularios`: Formularios accesibles y validación de campos.
   - `feature/qa-colaboracion-ers`: Resguardo de módulos futuros y documentación.

---

## 📜 3. Convención y Calidad de Mensajes de Commit

Los mensajes de commit se redactaron siguiendo el estándar internacional **Conventional Commits**:
- `feat(...)`: Incorporación de una nueva funcionalidad.
- `style(...)`: Cambios en hojas de estilo CSS sin alterar la lógica.
- `docs(...)`: Actualización de documentación y guías.
- `refactor(...)`: Reestructuración de código para cumplimiento de rúbrica.

### Registro de Commits Clave en el Repositorio:
- `feat(html): crear estructura semantica HTML5 con header, nav, main, section, article y footer`
- `feat(multimedia): insertar video embebido responsivo y optimizar imagenes del catalogo`
- `style(css): unificar hoja de estilos externa con diseno responsivo y estados de error`
- `feat(forms): implementar validacion de formularios en JS con mensajes contextuales claros`
- `refactor(auth): resguardar claves y credenciales en carpeta proximos_cambios para fase ERS`
- `docs(colab): registrar distribucion de tareas colaborativas e informe de integracion`
