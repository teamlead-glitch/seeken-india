import { useCartStore } from '~/store/cart';

export const useCartActions = () => {
  const cartStore = useCartStore()

  const handleAddToCart = (product: any, quantity=1, varient_id=0) => {
    if (window.confirm('Are you sure you want to add this item to the cart?')) {
      cartStore.addToCart(product,quantity,varient_id)
      
    }
  }

  return {
    handleAddToCart
  }
}
