import { useCartStore } from '~/store/cart';

export const useCartActions = () => {
  const cartStore = useCartStore()
  const router = useRouter()

  const handleAddToCart = (product: any) => {
    if (window.confirm('Are you sure you want to add this item to the cart?')) {
      cartStore.addToCart(product)
      router.push('/cart')
    }
  }

  return {
    handleAddToCart
  }
}
