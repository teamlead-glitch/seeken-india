import { ref, provide, inject } from 'vue';


const defaultProduct = {
};

export function useQuickProduct() {
  const { showLoader, hideLoader } = useLoader(); // Use global loader
  const config = useRuntimeConfig();
  const quickProduct = ref(defaultProduct);

  async function setQuickProduct(product) {
    const slug = product.slug;
    try {
      showLoader();
      // Fetch product data from API
      const response = await fetch(`${config.public.apiBase}products/${slug}`);
      const productData = await response.json();
      
      // Update the quickProduct ref
      quickProduct.value = productData.data || productData;

      if (quickProduct.value.stock_quantity < 1){
        
        quickProduct.value.final_price = product.final_price;
        quickProduct.value.price = product.price;
        quickProduct.value.selling_price = product.selling_price;
        quickProduct.value.variant_id = product.variant_id;

      }



      console.log('Updated product:', quickProduct.value);
    } catch (error) {
      console.error('Error fetching product:', error);
      // Keep the existing product data or reset to default
      quickProduct.value = defaultProduct;
    }
    finally {
      hideLoader();
    }
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