<template>

            <div class="row justify-content-center mt-4" v-if="brochures && brochures.length > 0">

              <div class="col-md-10 col-xl-8">
                    <div class="detail">
                         <h3>Product Gallery</h3> 
                        
                    </div>
                </div>
               
                        <div class="masonry-container">
                            <div class="masonry-item" v-for="brochure in brochures"><img :src="brochure.image_url" alt="Image 1"></div>
                            
                            
                        </div>
            </div>
</template>

<script lang="ts" setup>

// Define the props expected from parent component
const props = defineProps({
  productId: Number
});

const { data: brochures, error, refresh } = useFetchData('brochures', `product-brochures?product_id=${props.productId}`);

</script>

<style>

</style>