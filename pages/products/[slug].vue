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
                    
                   
                    <div class="highlights" v-if="highlightedSpecifications && highlightedSpecifications.length >0">
                        <h4>Highlights</h4>
                        <ul>
                            <li v-for="h_spec in highlightedSpecifications">
                                <div class="img_box"><img :src="h_spec.icon" alt="seeken"></div>
                                <h4> <span>{{ h_spec.title }}</span> {{ h_spec.description }}</h4>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="product__content">
                        <p>{{product.short_description}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
                <div class="col-md-10 col-xl-8">
                    <div class="detail">
                        <h3>{{ product.name }}</h3>
                        <p>{{ product.description }}</p>
                    </div>
                </div>
            </div>
       
       
        
        <ProductBrochure :productId="product?.id"/>
        <ProductCardSpecs :specs="product.product_specifications	"/>

        <ProductRelatedSlider :products="relatedProducts"/>

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
                <div class="prices"><span>Rs. {{ product?.price }}</span>Rs. {{ product?.final_price }} </div>
               </div>
               <div class="total__rate">
                   <div class="quantity">
                       <h4>Quantity</h4>
                       <div class="quantity-input">
                           <button class="quantity-btn minus-btn" @click="quantity > 1 ? quantity-- : null"><i class="bi bi-dash-lg"></i></button>
                           <input type="number" class="quantity" v-model="quantity">
                           <button class="quantity-btn plus-btn" @click="quantity++"><i class="bi bi-plus-lg"></i></button>
                       </div>
                   </div>
                   <button class="btn_1" @click="cartAdd(product?.id,quantity)">Add to Cart</button>
                   <NuxtLink class="btn_2" :to="`/buy-now/${product?.slug}`">Buy Now</NuxtLink>
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
const { addToast } = useToast()

const { handleAddToCart } = useCartActions()
const { formatDate } = useDateFormat();

const route = useRoute(); 
const slug = route.params.slug; // Get slug from URL
const { data: response, error, refresh } = useFetchData('response', `products/${slug}`);
const product = computed(() => response.value?.data);

const highlightedSpecifications = computed(() => {
  return product.value?.product_specifications?.filter(spec => spec.is_highlight === 1) || [];
});

const quantity = ref(1);
const selectedVariantId = ref(0);





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
       
        addToast('Selected variant option is not available.','error');
    }
  } catch (error) {
    if (error?.response?.status === 404) {
        addToast('Variant not found (404).','error');
    }else if (error?.response?.status === 400) {
    console.error('400 Bad Request:', error.response._data);
    addToast('Please select Varients.','error');
  } else {
      console.error('Error fetching variant:', error);
      addToast('An error occurred while fetching variant.','error');
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
        addToast("Please select any varient options",'error')
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



let relatedProducts = ref([]);

// 3. Fetch related products after the product ID is available
watch(
  () => product.value?.id,
  async (id) => {
    if (id) {
      try {
        // Fetch related products once product ID is available
        const { data: featured_products, error1, refresh1 } = useFetchData('featured_products', `related-products?product_id=${id}&limit=10`);
        relatedProducts = featured_products;
        
      } catch (err) {
        console.log('error fetching related products')
      }
    }
  },
  { immediate: true } // Trigger immediately if product ID is already available
);

</script>

<style>

</style>