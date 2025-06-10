<template>

    <div class="colors" v-if="varients && varients.length > 0" >
       
        <NuxtLink class="btn_3" @click="handleMoreClick" data-bs-dismiss="offcanvas">
        <ul>
            <li v-for="(varient, index) in varients">
                <div class="code " v-if="index<4"> <!--active-->
                   
                    <img :src="`${varient.variant_image_path??'/images/default_variant_icon.png'}`" class="img-fluid" :alt="varient.product_code"
                        loading="lazy" :title="varient.product_code">
                </div>
            </li>
           
            <li>more
                <!-- <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> more </a> -->
            </li>
        </ul>
        </NuxtLink>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const handleMoreClick = () => {
 

  // Navigate to the product page
  router.push(`/products/${props.product_slug}`)
}

  const props = defineProps({
    varients: {
      type: Array,
      required: true,
    },
    product_slug: {
      type: String,
      required: true,
    }
  
  });
  </script>