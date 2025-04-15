<template>

<CommonInnerBanner :page_title="product.name" v-if="product"/>
    
<section class="inner_container" v-if="product">
  
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xl-5 mb-4 ">
                <div class="product_detail">

                  <ProductCardImages ref="imageRef" :images="product.product_images" v-if="product?.product_images?.length > 0"/>
                </div>
            </div>
            <div class="col-md-6 col-xl-7">
                <div class="product__detail__box">
                    <h2 class="mob_none">{{product.name}} </h2>
                    <ProductCardRating :rating="product.rating" :reviewCount="product.review_count"/>
                    
                    
                    <ProductCardVarientsChoose   :product="product" @variant-chosen="onVariantChosen"/>
                    
                   
                    <div class="highlights">
                        <h4>Highlights</h4>
                        <ul>
                            <li>
                                <div class="img_box"><img src="/images/highlight1.svg" alt="seeken"></div>
                                <h4> <span>Sweep</span> 1200 MM</h4>
                            </li>
                            <li>
                                <div class="img_box"><img src="/images/highlight2.svg" alt="seeken"></div>
                                <h4> <span>Voltage</span> 230V</h4>
                            </li>
                            <li>
                                <div class="img_box"><img src="/images/highlight3.svg" alt="seeken"></div>
                                <h4> <span>RPM</span> 390 rpm</h4>
                            </li>
                            <li>
                                <div class="img_box"><img src="/images/highlight4.svg" alt="seeken"></div>
                                <h4> <span>Air Delivery</span> 210 CM</h4>
                            </li>
                        </ul>
                    </div>
                    <div class="product__content">
                        <p>{{product.short_description}}</p>
                    </div>
                </div>
            </div>
        </div>
       
        {{ product.description }}
        
        <ProductCardSpecs :specs="product.product_specifications	"/>

        <ProductRelatedSlider :products="featured_products"/>

        <ProductRatings/>
        <ProductReviewsAdd/>
        <ProductReviews/>
</div>

<div class="fixed_position_rates">
  <div class="container">
   <div class="row">
       <div class="col-md-12">
           <div class="full__container">
               <div class="product__name">
                <h5>{{product.name}}   <span>|</span>   {{product.category_name}}</h5>
                <div class="prices"><span>Rs. {{ product?.price }}</span>{{ product?.final_price }} </div>
               </div>
               <div class="total__rate">
                   <div class="quantity">
                       <h4>Quatity</h4>
                       <div class="quantity-input">
                           <button class="quantity-btn minus-btn" @click="quantity > 1 ? quantity-- : null"><i class="bi bi-dash-lg"></i></button>
                           <input type="number" class="quantity" v-model="quantity" min="1" max="10">
                           <button class="quantity-btn plus-btn" @click="quantity++"><i class="bi bi-plus-lg"></i></button>
                       </div>
                   </div>
                   <button class="btn_1" @click="cartAdd(product?.id,quantity)">Add to Cart</button>
                   <button class="btn_2">Buy Now</button>
               </div>
           </div>
       </div>
   </div>
  </div> 
</div>

</section>


</template>

<script lang="ts" setup>

import { useRoute } from 'vue-router';
import { useDateFormat } from '~/composables/useDateFormat';
import { useCartActions } from '@/composables/useCartActions'

const { handleAddToCart } = useCartActions()
const { formatDate } = useDateFormat();

const route = useRoute(); 
const slug = route.params.slug; // Get slug from URL
const { data: response, error, refresh } = useFetchData('response', `products/${slug}`);
const product = computed(() => response.value?.data);
const quantity = ref(1);
const selectedVariantId = ref(0);

const { data: featured_products, error1, refresh1 } = useFetchData('featured_products', 'featured-products');



function onVariantChosen(selectedOptions) {
    selectedVariantId.value = 0;
    console.log(selectedOptions,'selectedOptions++')
   
    fetchVariant(selectedOptions);
}

const fetchVariant = async (selectedOptions) => {
  const productId = product.value?.id;

  
  console.log(selectedOptions,'selectedOptions.value++')
  const optionIds = Object.values(selectedOptions).join(',');

  
  try {
    const variant_response = await $fetch(`${useRuntimeConfig().public.apiBase}product-variant`, {
      method: 'POST',
      body: {
        product_id: productId,
        option_ids: optionIds,
      },
    });

    if (variant_response && variant_response.data) {
      console.log('Matched variant:', variant_response.data);
      product.value.final_price = variant_response.data.final_price;
      product.value.price = variant_response.data.price;

      selectedVariantId.value = variant_response.data.id;

if(variant_response.data.variant_images.length >0 && variant_response.data.variant_images[0]['image_url']){
    
    triggerShowImage(variant_response.data.variant_images[0]['image_url']);
}
      
    } else {
      alert('Selected variant option is not available.');
    }
  } catch (error) {
    if (error?.response?.status === 404) {
      alert('Variant not found (404).');
    }else if (error?.response?.status === 400) {
    console.error('400 Bad Request:', error.response._data);
    alert('Selected variant option is not available. Please check selected options.');
  } else {
      console.error('Error fetching variant:', error);
      alert('An error occurred while fetching variant.');
    }
  }

};

const imageRef = ref(null);

// Call this to trigger child method
const triggerShowImage = (imgPath) => {
  imageRef.value?.showImage(imgPath);
};

const cartAdd = (id,quantity) => {
    if(product.value && product.value.product_options?.length > 0){
       if(selectedVariantId.value > 0){
        handleAddToCart(id,quantity,selectedVariantId.value);
       }else{
alert("Please select any varient options")
       }
    }else{
        handleAddToCart(id,quantity,false);
    }
    
}

watchEffect(() => {
  if (product.value && product.value.product_variants?.length > 0) {
    selectedVariantId.value = product.value.product_variants[0].id;
  }
});

</script>

<style>

</style>