/**
 * MÓDULO DE CARRITO DE COMPRAS Y CHECKOUT
 * ========================================
 * Lógica respaldada para la fase de ERS / Proyecto 2 y 3.
 * Incluye gestión de estados, totales y pasarela de pago simulada.
 */

export class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  removeItem(productId) {
    this.items = this.items.filter(i => i.id !== productId);
  }

  calculateSubtotal() {
    return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  calculateShipping() {
    return this.calculateSubtotal() >= 49990 ? 0 : 4990;
  }

  calculateTotal() {
    return this.calculateSubtotal() + this.calculateShipping();
  }
}
