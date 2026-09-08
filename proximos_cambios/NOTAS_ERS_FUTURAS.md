# NOTAS PARA EL DOCUMENTO ERS Y PRÓXIMAS FASES DEL PROYECTO

Este documento centraliza los requisitos y funcionalidades que han sido temporalmente desacoplados de la **Fase 1 (Evaluación Básica de Maquetación HTML5, CSS3, JS y Git)** para ser incluidos en la Especificación de Requerimientos de Software (ERS) y desarrollados en las fases 2 y 3.

---

## 🔐 1. Módulo de Autenticación y Seguridad (Fase 2 / Backend)
- **Cuentas y Roles**:
  - Registro de usuarios con validación de RUT chileno (algoritmo Módulo 11).
  - Encriptación de contraseñas (hashing con Bcrypt en backend).
  - Control de sesiones seguras mediante JWT o cookies HttpOnly.
  - Credenciales de prueba utilizadas en fase preliminar:
    - **Email**: `demo@fitnesschile.cl`
    - **Contraseña**: `Fitness2026!`
    - **RUT**: `18.765.432-1`
- **Recuperación de Contraseña**:
  - Envío de token temporal vía email SMTP.

---

## 🛒 2. Módulo de Comercio Electrónico y Carrito de Compras (Fase 2 / 3)
- **Carrito Persistente**:
  - Sincronización de carrito en base de datos para usuarios autenticados.
  - Cálculo de costos de envío dinámicos por región de Chile (Chilexpress / Starken).
  - Despacho gratuito por compras superiores a $49.990 CLP.
- **Integración de Pasarela de Pagos**:
  - Conexión con Webpay Plus (Transbank), MercadoPago y tarjetas de crédito (Visa, Mastercard).

---

## 📦 3. Gestión de Inventario y Panel de Administración (Fase 3)
- CRUD de productos (alta, baja, modificación, control de stock).
- Historial de órdenes de compra y seguimiento de envíos en tiempo real.
- Panel de reportes de ventas y métricas de rendimiento.
