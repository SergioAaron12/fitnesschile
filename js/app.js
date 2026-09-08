/**
 * FITNESSCHILE - LÓGICA FRONT-END Y VALIDACIÓN INTERACTIVA
 * ==========================================================
 * Implementación en JavaScript Vanilla (ES6+)
 * 
 * Módulos:
 * 1. Catálogo de productos (8 productos según wireframe)
 * 2. Slider interactivo del Hero Banner (autoplay, navegación, hover pause)
 * 3. Filtrado por categorías en el catálogo
 * 4. Validación de Formularios (Formulario de Contacto & Newsletter)
 *    - Mensajes de error específicos y contextuales bajo cada campo
 *    - Limpieza dinámica de errores al tipear
 *    - Contador de caracteres en tiempo real
 * 5. Menú de navegación responsive para dispositivos móviles
 * 6. Sistema de notificaciones Toast visuales
 */

// ==================== 1. CATÁLOGO DE PRODUCTOS ====================
const PRODUCTS = [
  {
    id: 1,
    name: "Mancuernas Ajustables Pro 24kg",
    category: "fuerza",
    attributes: "Set 24kg (2.5 a 24kg)",
    price: 89990,
    image: "assets/mancuernas.jpg"
  },
  {
    id: 2,
    name: "Proteína Whey Isolate 5 Lbs",
    category: "suplementos",
    attributes: "5 Lbs / 75 Porciones",
    price: 42990,
    image: "assets/whey_protein.jpg"
  },
  {
    id: 3,
    name: "Banco Multiposición Titan",
    category: "fuerza",
    attributes: "Inclinable 7 posiciones",
    price: 79990,
    image: "assets/banco_pesas.jpg"
  },
  {
    id: 4,
    name: "Pack Bandas Elásticas FitFlex",
    category: "accesorios",
    attributes: "Set 5 intensidades + bolso",
    price: 14990,
    image: "assets/bandas_resistencia.jpg"
  },
  {
    id: 5,
    name: "Creatina Monohidrato 300g",
    category: "suplementos",
    attributes: "100% Pura Micronizada",
    price: 26990,
    image: "assets/creatina.jpg"
  },
  {
    id: 6,
    name: "Shaker Térmico Inox 700ml",
    category: "accesorios",
    attributes: "Matte Black Anti-fugas",
    price: 12990,
    image: "assets/shaker.jpg"
  },
  {
    id: 7,
    name: "Cinturón de Cuero Powerlifting",
    category: "fuerza",
    attributes: "Cuero genuino 10mm",
    price: 29990,
    image: "assets/cinturon.jpg"
  },
  {
    id: 8,
    name: "Cuerda Speed Rope Alta Velocidad",
    category: "accesorios",
    attributes: "Doble rulemán metálico",
    price: 9990,
    image: "assets/cuerda.jpg"
  }
];

// Formateador de moneda en pesos chilenos (CLP)
function formatCLP(amount) {
  return "$" + amount.toLocaleString("es-CL");
}

// ==================== INICIALIZACIÓN GLOBAL ====================
document.addEventListener("DOMContentLoaded", () => {
  setupHeroSlider();
  renderProducts(PRODUCTS);
  setupFilters();
  setupContactFormValidation();
  setupNewsletter();
  setupCartNotification();
  setupMobileMenu();
});

// ==================== 2. SLIDER INTERACTIVO HERO ====================
function setupHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.getElementById("slider-prev-btn");
  const nextBtn = document.getElementById("slider-next-btn");
  const sliderContainer = document.getElementById("hero-slider");

  if (!slides.length) return;

  let currentSlide = 0;
  let autoplayTimer = null;
  const slideInterval = 4500;

  function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    if (dots[currentSlide]) dots[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    if (dots[currentSlide]) dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, slideInterval);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoplay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"), 10);
      if (!isNaN(idx)) {
        goToSlide(idx);
        startAutoplay();
      }
    });
  });

  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopAutoplay);
    sliderContainer.addEventListener("mouseleave", startAutoplay);
  }

  startAutoplay();
}

// ==================== 3. RENDERIZADO Y FILTRADO DE PRODUCTOS ====================
function renderProducts(items) {
  const gridContainer = document.getElementById("products-grid");
  if (!gridContainer) return;

  if (items.length === 0) {
    gridContainer.innerHTML = `
      <p style="grid-column: 1 / -1; text-align:center; padding: 2.5rem; color: #64748B; font-size: 1.05rem;">
        No se encontraron productos disponibles en esta categoría.
      </p>
    `;
    return;
  }

  gridContainer.innerHTML = items.map(product => `
    <article class="product-card" data-id="${product.id}">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
        <span class="product-category-tag">${product.category}</span>
      </div>
      
      <h3 class="product-title" onclick="quickViewProduct(${product.id})" style="cursor:pointer;" title="Ver detalle de ${product.name}">
        ${product.name}
      </h3>
      
      <div class="product-info-row">
        <span class="product-attributes">${product.attributes}</span>
        <strong class="product-price">${formatCLP(product.price)}</strong>
      </div>

      <button type="button" class="btn-add-cart" onclick="quickViewProduct(${product.id})">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        Ver Especificaciones
      </button>
    </article>
  `).join("");
}

function setupFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-filter");

      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      if (category === "all") {
        renderProducts(PRODUCTS);
      } else {
        const filtered = PRODUCTS.filter(p => p.category === category);
        renderProducts(filtered);
      }
    });
  });
}

// Vista rápida de producto
function quickViewProduct(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  showToast(`🔍 ${product.name} - ${formatCLP(product.price)} CLP (${product.attributes})`);
}

// ==================== 4. VALIDACIÓN INTERACTIVA DE FORMULARIOS (JS) ====================
function setupContactFormValidation() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const phoneInput = document.getElementById("contact-phone");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");
  const termsInput = document.getElementById("contact-terms");
  const charCounter = document.getElementById("char-counter");

  // Contador de caracteres en tiempo real para el mensaje
  if (messageInput && charCounter) {
    messageInput.addEventListener("input", () => {
      const len = messageInput.value.length;
      charCounter.textContent = len;
      if (len >= 15) {
        charCounter.style.color = "#10B981";
      } else {
        charCounter.style.color = "#64748B";
      }
    });
  }

  // Funciones de utilidad para mostrar y limpiar errores contextuales
  function showError(input, errorElementId, message) {
    if (input) {
      input.classList.add("input-error");
      input.classList.remove("input-success");
      input.setAttribute("aria-invalid", "true");
    }
    const errorEl = document.getElementById(errorElementId);
    if (errorEl) {
      errorEl.textContent = "⚠️ " + message;
      errorEl.classList.add("visible");
    }
  }

  function clearError(input, errorElementId) {
    if (input) {
      input.classList.remove("input-error");
      input.classList.add("input-success");
      input.removeAttribute("aria-invalid");
    }
    const errorEl = document.getElementById(errorElementId);
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.classList.remove("visible");
    }
  }

  // Validaciones individuales
  function validateName() {
    const val = nameInput.value.trim();
    if (!val) {
      showError(nameInput, "error-name", "El nombre completo es obligatorio.");
      return false;
    }
    if (val.length < 3) {
      showError(nameInput, "error-name", "El nombre debe contener al menos 3 caracteres.");
      return false;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val)) {
      showError(nameInput, "error-name", "Ingresa solo letras y espacios en el nombre.");
      return false;
    }
    clearError(nameInput, "error-name");
    return true;
  }

  function validateEmailField() {
    const val = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!val) {
      showError(emailInput, "error-email", "El correo electrónico es obligatorio.");
      return false;
    }
    if (!emailRegex.test(val)) {
      showError(emailInput, "error-email", "Ingresa un correo con formato válido (ejemplo: usuario@correo.cl).");
      return false;
    }
    clearError(emailInput, "error-email");
    return true;
  }

  function validatePhone() {
    const val = phoneInput.value.trim().replace(/\s+/g, "").replace(/-/g, "");
    if (!val) {
      showError(phoneInput, "error-phone", "El teléfono de contacto es obligatorio.");
      return false;
    }
    // Acepta formatos chilenos: +56912345678, 56912345678 o 912345678 (9 dígitos)
    const phoneRegex = /^(\+?56)?(\s?)(9\d{8}|\d{8,9})$/;
    if (!phoneRegex.test(val)) {
      showError(phoneInput, "error-phone", "Ingresa un teléfono válido de 9 dígitos (ej: +56 9 1234 5678).");
      return false;
    }
    clearError(phoneInput, "error-phone");
    return true;
  }

  function validateSubject() {
    if (!subjectInput.value) {
      showError(subjectInput, "error-subject", "Por favor, selecciona un motivo de consulta.");
      return false;
    }
    clearError(subjectInput, "error-subject");
    return true;
  }

  function validateMessage() {
    const val = messageInput.value.trim();
    if (!val) {
      showError(messageInput, "error-message", "El mensaje es obligatorio.");
      return false;
    }
    if (val.length < 15) {
      showError(messageInput, "error-message", `Mensaje muy breve (${val.length}/15 caracteres requeridos).`);
      return false;
    }
    clearError(messageInput, "error-message");
    return true;
  }

  function validateTerms() {
    if (!termsInput.checked) {
      showError(termsInput, "error-terms", "Debes aceptar los términos y políticas para continuar.");
      return false;
    }
    clearError(termsInput, "error-terms");
    return true;
  }

  // Validación en tiempo real al tipear / interactuar
  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmailField);
  phoneInput.addEventListener("input", validatePhone);
  subjectInput.addEventListener("change", validateSubject);
  messageInput.addEventListener("input", validateMessage);
  termsInput.addEventListener("change", validateTerms);

  // Validación al enviar el formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmailField();
    const isPhoneValid = validatePhone();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();
    const isTermsValid = validateTerms();

    if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid && isTermsValid) {
      const clientName = nameInput.value.trim();
      
      // Simulación de envío exitoso
      showToast(`✅ ¡Mensaje enviado con éxito, ${clientName}! Te contactaremos dentro de 24 horas.`);
      
      form.reset();
      if (charCounter) charCounter.textContent = "0";

      // Limpiar clases visuales de éxito
      [nameInput, emailInput, phoneInput, subjectInput, messageInput, termsInput].forEach(input => {
        if (input) {
          input.classList.remove("input-success");
          input.classList.remove("input-error");
        }
      });
    } else {
      showToast("⚠️ Por favor revisa los campos marcados en rojo antes de enviar.");
      
      // Enfocar el primer elemento con error
      const firstInvalid = form.querySelector(".input-error");
      if (firstInvalid) firstInvalid.focus();
    }
  });
}

// Formulario de suscripción Newsletter
function setupNewsletter() {
  const forms = document.querySelectorAll(".newsletter-form");

  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector(".newsletter-input");
      if (!input) return;

      const email = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

      if (emailRegex.test(email)) {
        showToast(`🎉 ¡Gracias por suscribirte! Cupón de 10% enviado a ${email}`);
        input.value = "";
      } else {
        showToast("⚠️ Por favor ingresa un correo electrónico válido para el newsletter.");
        input.focus();
      }
    });
  });
}

// Aviso de carrito en pausa (Fase 1)
function setupCartNotification() {
  const openCartBtn = document.getElementById("open-cart-btn");
  if (openCartBtn) {
    openCartBtn.addEventListener("click", () => {
      showToast("ℹ️ Módulo de compra en desarrollo (Fase 2 / ERS). Explora nuestro catálogo y contáctanos para cotizar.");
    });
  }
}

// Menú móvil
function setupMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("mobile-open");
    });
  }
}

// Detalle simulado de artículo de blog
function showArticleDetail(id) {
  showToast(`📖 Abriendo artículo #${id}. El contenido completo estará disponible en la versión extendida.`);
}

// ==================== 5. SISTEMA DE NOTIFICACIONES TOAST ====================
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "all 0.3s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
