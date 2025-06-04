<template>
<!-- {{ product.product_options }} -->
<div class="color__quantity" v-if="product?.product_options?.length > 0" v-for="options in product.product_options">
                            <div class="color">
                                <h4>Choose {{ options.name }}</h4>
                                <!-- <h5>Color <span>Black</span></h5> -->
                                <ul>
                                  <!-- {{ defaultOptionIdArray }} -->
                                    <li v-if="options?.product_option_values?.length > 0" v-for="option_values in options.product_option_values">
                                        <div style="width: auto; padding: 13px;border-radius: 5%" class="code" :class="{ active: (defaultOptionIdArray.length==0 && selectedOptions[options.id] === option_values.id) || defaultOptionIdArray.includes(option_values.id)}" @click="chooseVariant(options.id, option_values.id)"> 
                                          <!-- <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken" loading="lazy"> -->
                                        {{ option_values.value }}
                                        </div>
                                    </li>
                                    <!-- {{ selectedOptions }} -->
                                    
                                </ul>
                            </div>
                        </div>
</template>

<script setup>
  const props = defineProps({
    product: {
      type: {},
      required: true,
    },
    selectedVariantId: {
      type: Number,
      required: true,
    }
  
  });

  const emit = defineEmits(['variant-chosen']);

  const selectedOptions = reactive({});
  const defaultOptionIdArray = ref([]);

  function chooseVariant(option_id, variant_id) {
    defaultOptionIdArray.value = [];
    selectedOptions[option_id] = variant_id;
  emit('variant-chosen', selectedOptions);
}


onMounted(() => {
  if (props.product?.product_variants?.length > 0) {
    let defaultVarient=props.product.product_variants.find(variant => variant.id === props.selectedVariantId)
   
    // defaultOptionIdArray.value = props.product.product_variants[0].id_combination.split('--').map(Number);
    defaultOptionIdArray.value = defaultVarient.id_combination.split('--').map(Number);
   
console.log(defaultOptionIdArray,'defaultOptionIdArray++')
   
  }
});

watch(() => props.product, (newProduct) => {
  if (!newProduct?.product_options) return;

  newProduct.product_options.forEach(option => {
    if (option.product_option_values?.length > 0) {
      // Optionally use defaultOptionIdArray here if needed
      selectedOptions[option.id] = option.product_option_values[0].id;
    }
  });
}, { immediate: true });
  </script>