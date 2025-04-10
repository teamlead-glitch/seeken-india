<template>
{{ product.product_options }}
<div class="color__quantity">
                            <div class="color">
                                <h4>Choose Color</h4>
                                <h5>Color <span>Black</span></h5>
                                <ul>
                                    <li>
                                        <div class="code active"> <img src="/images/color_code/clr-1.webp"
                                                class="img-fluid" alt="seeken" loading="lazy">
                                        </div>
                                    </li>
                                    <li>
                                        <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid"
                                                alt="seeken" loading="lazy"></div>
                                    </li>
                                    <li>
                                        <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid"
                                                alt="seeken" loading="lazy"></div>
                                    </li>
                                    <li>
                                        <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid"
                                                alt="seeken" loading="lazy"></div>
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