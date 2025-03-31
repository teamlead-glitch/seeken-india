import { ref, provide, inject } from 'vue';

const defaultProduct = {
};

export function useQuickProduct() {
  const quickProduct = ref(defaultProduct);

  function setQuickProduct(newProduct) {
    
    quickProduct.value = newProduct;
    console.log(quickProduct)
  }

  provide('quickProduct', quickProduct);
  provide('setQuickProduct', setQuickProduct);

  return { quickProduct, setQuickProduct };
}

export function useQuickProductInject() {
  const quickProduct = inject('quickProduct', ref(null));
  const setQuickProduct = inject('setQuickProduct', () => {});

  return { quickProduct, setQuickProduct };
}
