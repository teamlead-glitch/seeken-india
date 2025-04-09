import { useCartStore } from '~/store/cart';

export const useCartActions = () => {
  const cartStore = useCartStore()
  const router = useRouter()

  const handleAddToCart = (product: any, quantity=1) => {
    if (window.confirm('Are you sure you want to add this item to the cart?')) {
      cartStore.addToCart(product,quantity)
      router.push('/cart')
    }
  }

  return {
    handleAddToCart
  }
}
