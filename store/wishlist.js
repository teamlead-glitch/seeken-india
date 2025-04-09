
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlistStore', {
  state: () => ({
    AddToshow: false,
    AddToproduct: null,
    List:[]
  }),
  actions: {
    openAddTo(product) {
      this.AddToshow = true
      this.AddToproduct = product
    },
    closeAddTo() {
      this.AddToshow = false
      this.AddToproduct = null
    }
  }
})
