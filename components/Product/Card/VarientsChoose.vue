<template>
<!-- {{ product.product_options }} -->
<div class="color__quantity" v-if="product?.product_options?.length > 0" v-for="options in product.product_options">
                            <div class="color">
                                <h4>Choose {{ options.name }}</h4>
                                <!-- <h5>Color <span>Black</span></h5> -->
                                <ul>
                                    <li v-if="options?.product_option_values?.length > 0" v-for="option_values in options.product_option_values">
                                        <div class="code active"> 
                                          <!-- <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken" loading="lazy"> -->
                                        {{ option_values.value }}
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
</template>

<script setup>
  defineProps({
    product: {
      type: {},
      required: true,
    }
  
  });
  </script>