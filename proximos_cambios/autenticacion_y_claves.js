/**
 * MÓDULO DE AUTENTICACIÓN, USUARIOS Y CLAVES DE ACCESO
 * =======================================================
 * Este archivo fue respaldado para ser integrado en la fase 2 o 3 (Backend / ERS).
 * Se retira de la evaluación inicial de maquetación básica HTML/CSS/JS.
 */

// Credenciales y Cuenta Demo para pruebas
export const DEMO_CREDENTIALS = {
  name: "Cliente Demo FitnessChile",
  email: "demo@fitnesschile.cl",
  password: "Fitness2026!",
  rut: "18.765.432-1",
  role: "customer",
  registeredAt: "2026-09-08T00:00:00.000Z"
};

// Algoritmo de validación de RUT chileno (Módulo 11)
export function validateChileanRut(rutCompleto) {
  if (!rutCompleto) return true;
  const limpio = rutCompleto.replace(/\./g, "").replace(/-/g, "").trim().toUpperCase();
  if (limpio.length < 8 || limpio.length > 9) return false;

  const cuerpo = limpio.slice(0, -1);
  const dv = limpio.slice(-1);
  if (!/^\d+$/.test(cuerpo)) return false;

  let suma = 0;
  let multiplo = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += multiplo * parseInt(cuerpo.charAt(i), 10);
    multiplo = multiplo < 7 ? multiplo + 1 : 2;
  }

  const dvEsperadoCalculado = 11 - (suma % 11);
  let dvEsperado = "";
  if (dvEsperadoCalculado === 11) dvEsperado = "0";
  else if (dvEsperadoCalculado === 10) dvEsperado = "K";
  else dvEsperado = dvEsperadoCalculado.toString();

  return dv === dvEsperado;
}

// Persistencia en LocalStorage / API
export function initUsersDatabase() {
  try {
    const stored = localStorage.getItem("fitnesschile_users");
    if (!stored) {
      localStorage.setItem("fitnesschile_users", JSON.stringify([DEMO_CREDENTIALS]));
    }
  } catch (e) {
    console.warn("Storage no disponible", e);
  }
}

export function getStoredUsers() {
  try {
    const raw = localStorage.getItem("fitnesschile_users");
    return raw ? JSON.parse(raw) : [DEMO_CREDENTIALS];
  } catch (e) {
    return [DEMO_CREDENTIALS];
  }
}

export function saveUser(user) {
  const users = getStoredUsers();
  users.push(user);
  localStorage.setItem("fitnesschile_users", JSON.stringify(users));
}
