<template>

<CommonInnerBanner :page_title="product?.name?product.name:'Product'"/>
    
<section class="inner_container mb10" v-if="product">
  
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xl-5 mb-4 ">
                <div class="product_detail">

                  <ProductCardImages ref="imageRef" :images="product.product_images" v-if="product?.product_images?.length > 0"/>
                  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" v-else>
                    <div class="carousel-inner" >
                    <img :src="product.image_path" class="d-block w-100" >
                    </div>
                  </div>
                  </div>
            </div>
            <div class="col-md-6 col-xl-7">
                <div class="product__detail__box">
                    <h2 >{{product.name}} </h2>
                    <ProductCardRating :rating="product.rating" :reviewCount="product.review_count"/>
                    
                    
                    <ProductCardVarientsChoose :selectedVariantId="selectedVariantId"   :product="product" @variant-chosen="onVariantChosen"/>
                    
                   
                    <div class="highlights" v-if="highlightedSpecifications && highlightedSpecifications.length >0">
                        <h4>Highlights</h4>
                        <ul>
                            <li v-for="h_spec in highlightedSpecifications">
                                <div class="img_box">
                                  <img v-if="h_spec.icon" :src="h_spec.icon" alt="seeken">
                                  <img v-else :src="'/images/no-image-icon.svg'" alt="seeken">
                                </div>
                                <h4> <span>{{ h_spec.title }}</span> 
                                 <span v-html="h_spec.description"></span> 
                                </h4>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="product__content" v-html="product?.description">
                       
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
                <div class="col-md-10 col-xl-8">
                    <div class="detail">
                        <!-- <h3>{{ product.name }}</h3> -->
                        <!-- <p>{{ product.description }}</p> -->
                    </div>
                </div>
            </div>
       
       
        
        <ProductBrochure :productId="product?.id"/>
        <ProductCardSpecs :specs="product.product_specifications	"/>

        <ProductRelatedSlider :products="checkVariantAvailable(relatedProducts)"/>

       <ProductRatings :productId="product?.id" :refreshKey="refreshKey"/>
        <ProductReviewsAdd v-if="authStore.token && isProductPurchased" :productId="product?.id" @review-submitted="triggerRefresh" :myReview="myReview"/>
        <ProductReviews :productId="product?.id" :refreshKey="refreshKey"/>
</div>

<div class="fixed_position_rates">
  <div class="container">
   <div class="row">
       <div class="col-md-12">
           <div class="full__container">
               <div class="product__name">
                <h5>{{product.name}}   <span>|</span>   {{product.category_name}}</h5>
                <div class="prices" v-if="Number(product?.price) > Number(product?.final_price)"><span>Rs. {{ product?.price }}</span>Rs. {{ product?.final_price }} </div>
                <div class="prices" v-else>Rs. {{ product?.final_price }} </div>
               </div>
               <div class="total__rate">
                   <div class="quantity" v-if="product.stock_quantity > 0">
                       <h4>Quantity</h4>
                       <div class="quantity-input">
                           <button class="quantity-btn minus-btn" @click="quantity > 1 ? quantity-- : null"><i class="bi bi-dash-lg"></i></button>
                           <input type="number" class="quantity" v-model="quantity">
                           <button class="quantity-btn plus-btn" @click="quantity++"><i class="bi bi-plus-lg"></i></button>
                       </div>
                   </div>
                   <div class="quantity" v-else>
                   <h4 style="color: red;">Out of stock</h4>
                   </div>
                  
                   
                   <button  class="btn_1" :class="{ outOfStock: !product.stock_quantity || product.stock_quantity < 1 }" @click="cartAdd(product?.id,quantity)">Add to Cart</button>
                   <!-- <NuxtLink class="btn_2" :to="`/buy-now/${product?.slug}`">Buy Now</NuxtLink> -->
                   <button class="btn_2" :class="{ outOfStock: !product.stock_quantity || product.stock_quantity < 1 }" @click="cartAdd(product?.id,quantity,true)">Buy Now</button>
                  
               </div>
           </div>
       </div>
   </div>
  </div> 
</div>

</section>

<section class="inner_container" v-else>


    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="empty__cart" style="min-height: auto;">
            <img src="/images/empyt-cart.svg" alt="seeken">
            <h5>Product not found !</h5>
            <p>The product you're looking for doesn't exist.</p>
            <div class="btn_box">
              <NuxtLink to="/" class="btn_1">Go Home</NuxtLink>
              
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
import { useAuthStore } from '~/store/auth';
const { showLoader, hideLoader } = useLoader(); // Use global loader

const authStore = useAuthStore();
const { addToast } = useToast()

const { handleAddToCart } = useCartActions()
const { formatDate } = useDateFormat();

const route = useRoute(); 
const slug = route.params.slug; // Get slug from URL
const { data: response, error, refresh } = useFetchData('response', `products/${slug}`);
const product = computed(() => response.value?.data);
const isProductPurchased = ref(false);
const myReview = ref({});

const highlightedSpecifications = computed(() => {
  return product.value?.product_specifications?.filter(spec => spec.is_highlight === 1) || [];
});

const quantity = ref(1);
const selectedVariantId = ref(0);

const variantFetched = ref(false);





function onVariantChosen(selectedOptions) {
  showLoader()
    selectedVariantId.value = 0;
    console.log(selectedOptions,'selectedOptions++')
   
    fetchVariant(selectedOptions);
}

const fetchVariant = async (selectedOptions) => {
  variantFetched.value = true;
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
      product.value.stock_quantity = variant_response.data.stock;

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
  finally{
    hideLoader()

  }

};

const imageRef = ref(null);

// Call this to trigger child method
const triggerShowImage = (imgPath) => {
  imageRef.value?.showImage(imgPath);
};

const cartAdd = (id,quantity,buy_now=false) => {
    if(product.value && product.value.product_options?.length > 0){
       if(selectedVariantId.value > 0){
        handleAddToCart(id,quantity,selectedVariantId.value,buy_now);
       }else{
        addToast("Please select any varient options",'error')
       }
    }else{
        handleAddToCart(id,quantity,false,buy_now);
    }
    
}

watchEffect(() => {
  if (product.value && product.value.product_variants?.length > 0 && !variantFetched.value) {
    
    //selectedVariantId.value = product.value.product_variants[0].id;
    selectedVariantId.value = product.value.variant_id;
    const variantInfo = product.value?.product_variants?.find(v => v.id === selectedVariantId.value)
    if(variantInfo && variantInfo.variant_image_path){
      //console.log(variantInfo.variant_image_path,'variantInfo')
      triggerShowImage(variantInfo.variant_image_path)
    }
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

const refreshKey = ref(0)
const triggerRefresh  = () => {
  refreshKey.value++
}

// Watch product ID and check purchase
watch(
  () => product.value?.id,
  async (id) => {
    if (!id) return

    try {
      const res = await $fetch(`${useRuntimeConfig().public.apiBase}check-product-purchased/${id}`, {
        headers: {
          Authorization: `Bearer ${authStore.token}`,
        },
      })

      isProductPurchased.value = res.result === 'success'
      if(isProductPurchased.value){
        myReview.value = res.review;
      }
    } catch (err) {
      console.error('Error checking purchase status:', err)
      isProductPurchased.value = false
    }
  },
  { immediate: true }
)

watchEffect(() => {
  if (product?.value?.name) {
   

    useHead({
      title:  product?.value?.name || 'Seeken Product',
      meta: [
        { name: 'description', content: product?.value?.short_description || 'Seeken Product' },
       
      ],
      
    });
  }
});


const getModifiedProduct = (item) => {
  if (item.stock_quantity > 0) return item;

  const availableVariant = item.product_variants?.find(
    v => v.variant_price?.stock_quantity > 0
  );

  if (availableVariant) {
    return {
      ...item,
      stock_quantity: availableVariant.variant_price.stock_quantity,
      final_price: availableVariant.variant_price.final_price,
      price: availableVariant.variant_price.price,
      selling_price: availableVariant.variant_price.selling_price,
      to_date:availableVariant.variant_price.to_date,
      ...(availableVariant.variant_image_path
        ? { image_path: availableVariant.variant_image_path }
        : {}),
    };
  }

  return item;
};

// Apply getModifiedProduct to each product
const checkVariantAvailable = (products) => {
  return products?.map(getModifiedProduct) ?? [];
};

</script>

<style>

.outOfStock {
  opacity: 0.4;
  pointer-events: none;
}

</style>