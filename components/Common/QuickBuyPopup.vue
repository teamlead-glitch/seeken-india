<template>
  <!-- {{ quickProduct }} -->
  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i
    class="bi bi-x-lg"></i></button>
<div class="offcanvas-body">
  <div class="product_img_heading">
    <div class="row align-items-center">
      <div class="col-md-5 col-lg-6">
        
<ProductCardImages :images="quickProduct?.product_images" v-if="quickProduct && quickProduct?.product_images?.length > 0"/>


      </div>
      <div class="col-md-7 col-lg-6">
        <div class="top__box">
          <div class="category__name">
            
           

          <ProductCardRating :rating="quickProduct.rating" :reviewCount="quickProduct.review_count"/>

            <h5>{{ quickProduct?.category_name }}</h5>
          </div>
        </div>
        <div class="price__feature">
          <h4>{{quickProduct?.name}}</h4>
          <div class="price" v-if="quickProduct?.price > quickProduct?.final_price"><span>Rs. {{ quickProduct?.price }}</span>Rs. {{ quickProduct?.final_price }} </div>
          <div class="price" v-else>Rs. {{ quickProduct?.final_price }} </div>
        </div>
       
        <ProductCardVarients  :varients="quickProduct?.product_variants" :product_slug="quickProduct?.slug"/>
        <!-- v-if="quickProduct?.product_variants?.length > 0" -->
      
      </div>
    </div>
  </div>
 <div class="product_details">
  <div class="detail" v-html="quickProduct?.description">
      
   </div>
  </div>
  <div class="full_clm">
    <div class="quantity-input">
      <button class="quantity-btn minus-btn" @click="quantity > 1 ? quantity-- : null"><i class="bi bi-dash-lg"></i></button>
      <input type="number" class="quantity" v-model="quantity">
      <button class="quantity-btn plus-btn" @click="quantity++"><i class="bi bi-plus-lg"></i></button>
    </div>
    <button class="btn_2" @click="cartAdd(quickProduct,quantity)" data-bs-dismiss="offcanvas">Add to Cart</button>
    <!-- <button @click="buyNow(quickProduct.slug)"  class="btn_1" data-bs-dismiss="offcanvas">Buy Now</button> -->
    <button @click="buyNow(quickProduct,quantity)"  class="btn_1" data-bs-dismiss="offcanvas">Buy Now</button>
  </div>
  <div class="view_detail">
    <button class="btn_3" @click="moredetails(quickProduct.slug)" data-bs-dismiss="offcanvas">More Details</button>
  </div>

</div>
</template>

<script lang="ts" setup>

import { useQuickProductInject } from '@/composables/useQuickBuy';
import { useCartActions } from '@/composables/useCartActions'
const router = useRouter()

const { handleAddToCart } = useCartActions()

const { quickProduct } = useQuickProductInject();


const quantity = ref(1);

const cartAdd = (quickProduct,quantity) => {

  handleAddToCart(quickProduct?.id,quantity, quickProduct.variant_id?quickProduct.variant_id:0)
   
    
}

// const buyNow = (slug) => {
//   router.push('/buy-now/'+slug)
// }
const buyNow = (quickProduct,quantity) => {
  handleAddToCart(quickProduct?.id,quantity, quickProduct.variant_id?quickProduct.variant_id:0,true)
}

const moredetails = (slug) => {
  router.push('/products/'+slug)
}

watch(
  () => quickProduct.value, // Watch the reactive `quickProduct`
  (newVal) => {
    // Handle the change
    if (newVal) {
     quantity.value=1;
    } 
  },
  { immediate: true, deep: true } // Optional: immediate to run on mount, deep if quickProduct is an object
);



</script>

<style>

</style>