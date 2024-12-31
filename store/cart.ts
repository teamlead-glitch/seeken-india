import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product) {
      const existingProduct = this.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if the product exists
      } else {
        this.cart.push({ ...product, quantity: 1 }); // Add new product with quantity 1
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
    },
    updateCartQuantity(productId, change) {
      const item = this.cart.find((item) => item.id === productId);
      if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
          this.cart = this.cart.filter((item) => item.id !== productId);
        }
      }
    }
  },
});
